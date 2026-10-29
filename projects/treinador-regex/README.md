# Treinador de Expressões Regulares (v1)

Ferramenta web para praticar expressões regulares por meio de desafios. Cada desafio tem uma lista de exemplos que devem ser aceitos e outra que deve ser rejeitada; o aluno escreve uma expressão e a ferramenta a testa contra todos os exemplos.

## Como executar

A aplicação é estática (HTML, CSS e JavaScript), mas os desafios são carregados de `desafios.json`, então a página precisa ser aberta por um servidor web:

```
python -m http.server 8000
```

Depois acesse `http://localhost:8000`. No GitHub Pages ela funciona sem nenhuma configuração extra.

## Arquivos

- `index.html`: estrutura da tela
- `style.css`: aparência e layout responsivo
- `app.js`: lógica de verificação, navegação e progresso
- `desafios.json`: banco de desafios (enunciado, exemplos a aceitar e a rejeitar, dica)

## Como adicionar um desafio

Inclua um novo objeto em `desafios.json`:

```json
{
  "titulo": "Nome curto",
  "enunciado": "O que a expressão precisa casar.",
  "aceitar": ["exemplo1", "exemplo2"],
  "rejeitar": ["exemplo3", ""],
  "dica": "Uma dica sobre o recurso de regex envolvido."
}
```

A string vazia `""` aparece na tela como *(vazio)*.

## Observações

- A expressão precisa casar o exemplo inteiro: internamente ela é testada como `^(?:expressão)$` com o objeto `RegExp` nativo do JavaScript.
- O progresso (desafios concluídos e a última expressão de cada desafio) fica salvo no navegador.
