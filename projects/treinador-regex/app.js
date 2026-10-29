const CHAVE_PROGRESSO = "treinador-regex-progresso";

const estado = {
  desafios: [],
  atual: 0,
  concluidos: new Set(),
  respostas: {}
};

const el = {
  contadorDesafio: document.getElementById("contador-desafio"),
  contadorConcluidos: document.getElementById("contador-concluidos"),
  barra: document.getElementById("barra-preenchida"),
  mapa: document.getElementById("mapa"),
  erroCarregamento: document.getElementById("erro-carregamento"),
  desafio: document.getElementById("desafio"),
  titulo: document.getElementById("titulo-desafio"),
  seloConcluido: document.getElementById("selo-concluido"),
  enunciado: document.getElementById("enunciado"),
  listaAceitar: document.getElementById("lista-aceitar"),
  listaRejeitar: document.getElementById("lista-rejeitar"),
  formulario: document.getElementById("formulario"),
  expressao: document.getElementById("expressao"),
  resultado: document.getElementById("resultado"),
  caixaDica: document.getElementById("caixa-dica"),
  rodape: document.getElementById("rodape"),
  botaoDica: document.getElementById("botao-dica"),
  botaoAnterior: document.getElementById("botao-anterior"),
  botaoProximo: document.getElementById("botao-proximo")
};

// Progresso salvo no navegador (pode falhar em modo privado, por isso o try/catch)

function carregarProgresso() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_PROGRESSO));
    if (salvo) {
      estado.concluidos = new Set(salvo.concluidos || []);
      estado.respostas = salvo.respostas || {};
      estado.atual = salvo.atual || 0;
    }
  } catch (e) {
    // segue sem progresso salvo
  }
}

function salvarProgresso() {
  try {
    localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify({
      concluidos: [...estado.concluidos],
      respostas: estado.respostas,
      atual: estado.atual
    }));
  } catch (e) {
    // segue sem salvar
  }
}

// Verificação

function compilar(texto) {
  // A expressão precisa casar a string inteira, por isso é envolvida em ^(?: )$
  return new RegExp("^(?:" + texto + ")$");
}

function avaliar(regex, desafio) {
  const aceitar = desafio.aceitar.map(ex => ({ exemplo: ex, ok: regex.test(ex) }));
  const rejeitar = desafio.rejeitar.map(ex => ({ exemplo: ex, ok: !regex.test(ex) }));
  return { aceitar, rejeitar };
}

// Renderização

function criarItem(exemplo, situacao) {
  const li = document.createElement("li");
  const texto = document.createElement("span");
  if (exemplo === "") {
    texto.textContent = "(vazio)";
    texto.className = "vazio";
  } else {
    texto.textContent = exemplo;
  }
  li.appendChild(texto);

  if (situacao !== undefined) {
    const marca = document.createElement("span");
    marca.className = "marca";
    marca.textContent = situacao ? "✓" : "✗";
    marca.setAttribute("aria-label", situacao ? "correto" : "incorreto");
    li.classList.add(situacao ? "passou" : "falhou");
    li.appendChild(marca);
  }
  return li;
}

function preencherLista(lista, exemplos, resultados) {
  lista.replaceChildren(...exemplos.map((ex, i) =>
    criarItem(ex, resultados ? resultados[i].ok : undefined)
  ));
}

function renderizarExemplos(resultado) {
  const desafio = estado.desafios[estado.atual];
  preencherLista(el.listaAceitar, desafio.aceitar, resultado && resultado.aceitar);
  preencherLista(el.listaRejeitar, desafio.rejeitar, resultado && resultado.rejeitar);
}

function renderizarProgresso() {
  const total = estado.desafios.length;
  const feitos = estado.concluidos.size;
  el.contadorDesafio.textContent = `Desafio ${estado.atual + 1}/${total}`;
  el.contadorConcluidos.textContent = `${feitos} ${feitos === 1 ? "concluído" : "concluídos"}`;
  el.barra.style.width = `${(feitos / total) * 100}%`;

  el.mapa.querySelectorAll("button").forEach((botao, i) => {
    botao.classList.toggle("concluido", estado.concluidos.has(i));
    botao.classList.toggle("atual", i === estado.atual);
    botao.setAttribute("aria-current", i === estado.atual ? "step" : "false");
  });
}

function renderizarMapa() {
  el.mapa.replaceChildren(...estado.desafios.map((desafio, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = i + 1;
    botao.title = desafio.titulo;
    botao.addEventListener("click", () => irPara(i));
    return botao;
  }));
}

function renderizarDesafio() {
  const desafio = estado.desafios[estado.atual];
  el.titulo.textContent = `${estado.atual + 1}. ${desafio.titulo}`;
  el.enunciado.textContent = desafio.enunciado;
  el.seloConcluido.hidden = !estado.concluidos.has(estado.atual);
  el.expressao.value = estado.respostas[estado.atual] || "";
  el.resultado.hidden = true;
  el.caixaDica.hidden = true;
  el.caixaDica.textContent = desafio.dica;
  el.botaoDica.textContent = "Dica";
  el.botaoAnterior.disabled = estado.atual === 0;
  el.botaoProximo.disabled = estado.atual === estado.desafios.length - 1;
  renderizarExemplos();
  renderizarProgresso();
}

function mostrarResultado(classe, conteudo) {
  el.resultado.className = "resultado " + classe;
  el.resultado.replaceChildren(...conteudo);
  el.resultado.hidden = false;
}

// Ações

function testar() {
  const texto = el.expressao.value;
  const desafio = estado.desafios[estado.atual];
  estado.respostas[estado.atual] = texto;

  if (texto.trim() === "") {
    renderizarExemplos();
    mostrarResultado("invalida", ["Digite uma expressão antes de testar."]);
    salvarProgresso();
    return;
  }

  let regex;
  try {
    // Compila primeiro sem o envoltório para a mensagem de erro mostrar só o que o aluno digitou
    new RegExp(texto);
    regex = compilar(texto);
  } catch (erro) {
    renderizarExemplos();
    const detalhe = document.createElement("code");
    detalhe.textContent = erro.message;
    mostrarResultado("invalida", ["Expressão inválida: ", detalhe]);
    salvarProgresso();
    return;
  }

  const resultado = avaliar(regex, desafio);
  renderizarExemplos(resultado);

  const todos = [...resultado.aceitar, ...resultado.rejeitar];
  const acertos = todos.filter(r => r.ok).length;

  if (acertos === todos.length) {
    estado.concluidos.add(estado.atual);
    el.seloConcluido.hidden = false;
    const ultimo = estado.atual === estado.desafios.length - 1;
    const mensagem = estado.concluidos.size === estado.desafios.length
      ? "Parabéns! Você concluiu todos os desafios."
      : ultimo
        ? "Desafio concluído! Ainda faltam alguns desafios anteriores."
        : "Desafio concluído! Clique em Próximo para continuar.";
    mostrarResultado("sucesso", [mensagem]);
  } else {
    const faltaAceitar = resultado.aceitar.filter(r => !r.ok).length;
    const faltaRejeitar = resultado.rejeitar.filter(r => !r.ok).length;
    const partes = [];
    if (faltaAceitar) partes.push(`${faltaAceitar} ${faltaAceitar === 1 ? "exemplo deveria ser aceito" : "exemplos deveriam ser aceitos"}`);
    if (faltaRejeitar) partes.push(`${faltaRejeitar} ${faltaRejeitar === 1 ? "exemplo deveria ser rejeitado" : "exemplos deveriam ser rejeitados"}`);
    mostrarResultado("parcial", [`${acertos} de ${todos.length} corretos. ${partes.join(" e ")}. Ajuste a expressão e teste de novo.`]);
  }

  salvarProgresso();
  renderizarProgresso();
}

function irPara(indice) {
  if (indice < 0 || indice >= estado.desafios.length) return;
  estado.respostas[estado.atual] = el.expressao.value;
  estado.atual = indice;
  salvarProgresso();
  renderizarDesafio();
  el.expressao.focus();
}

function alternarDica() {
  el.caixaDica.hidden = !el.caixaDica.hidden;
  el.botaoDica.textContent = el.caixaDica.hidden ? "Dica" : "Esconder dica";
}

// Inicialização

el.formulario.addEventListener("submit", evento => {
  evento.preventDefault();
  testar();
});
el.botaoDica.addEventListener("click", alternarDica);
el.botaoAnterior.addEventListener("click", () => irPara(estado.atual - 1));
el.botaoProximo.addEventListener("click", () => irPara(estado.atual + 1));

async function iniciar() {
  try {
    const resposta = await fetch("desafios.json");
    if (!resposta.ok) throw new Error(resposta.status);
    estado.desafios = await resposta.json();
  } catch (e) {
    el.erroCarregamento.textContent =
      "Não foi possível carregar os desafios. Abra a página por um servidor web " +
      "(por exemplo, GitHub Pages ou \"python -m http.server\") em vez de abrir o arquivo direto.";
    el.erroCarregamento.hidden = false;
    return;
  }

  carregarProgresso();
  if (estado.atual >= estado.desafios.length) estado.atual = 0;

  renderizarMapa();
  renderizarDesafio();
  el.desafio.hidden = false;
  el.rodape.hidden = false;
}

iniciar();
