# 🌀 BoopLoop

*BoopLoop* é um site/jogo web *deliberadamente inútil, criado para te manter preso na tela pelo maior tempo possível — e garantir que você **nunca ganhe. Inspirado em ideias de *inutilidade, BoopLoop transforma detecção facial em um ciclo eterno de passarinhos (ou gatinhos) cantando (ou miando), passeando e… explodindo.

---

## 🌟 Por que criamos isso?

A ideia nasceu do desejo de criarmos um projeto inútil para um Hackaton da CodeCon, nos baseando em ideias de aplicações e jogos sem objetivo nenhum, com a única e exclusiva meta de o usuário perder tempo.

Queríamos brincar com a lógica desses sites e jogos que capturam sua atenção sem entregar nenhuma recompensa real — apenas uma chuva hipnótica de estímulos visuais e sonoros. Um espaço entre o inútil e o divertido. 

---

## 🎮 Como funciona?

1. Ao abrir o site, um animal (gato ou pássaro) aparece no centro da tela.
2. Uma mensagem aparece:
    
    👉 “Não desvie o olhar.”
    
3. Se você desviar... mais animais aparecem e fazem barulho.
4. Quando olhar de volta, eles explodem um a um.
5. Ao sobrar apenas um animal na tela, o ciclo recomeça. Sempre recomeça.
6. Um contador mostra quantos animais você já explodiu.
7. A cada 20 segundos, surge a frase:
    
    > 🕒 “Você perdeu X segundos da sua vida.”
    > 

🎯 *Não há como vencer.*

O único objetivo: *desperdiçar tempo do usuário.*

---

## 🛠️ Como construímos?

- 🧱 *HTML, CSS e JavaScript puro* para lógica e UI.
- 🎥 Detecção facial com [face-api.js](https://github.com/justadudewhohacks/face-api.js).
- 🔊 Sons manipulados via Web Audio API: pios, miados e explosões.
- 🎞️ GIFs e imagens locais para os animaizinhos e suas explosões.
- ☁️ 100% client-side. Sem backend, sem banco de dados. Só caos no navegador.

---

## ⚙️ Desafios enfrentados

- 🎯 Ajustar a *detecção facial* para funcionar em diversas luzes e webcams.
- 🐦 Sincronizar a *lógica dos bichos* com o rastreamento facial (sem bugs de contagem!).
- 🔊 Trabalhar com *camadas sonoras desconfortáveis*: sobreposições, volumes diferentes, sons inesperados.
- 📱 Tornar o *layout responsivo* para funcionar em diferentes dispositivos e telas.

---

## 🏆 Do que nos orgulhamos?

- Criamos algo *realmente inútil* – mas ao mesmo tempo, *engraçado e hipnótico*.
- A *detecção facial* é acessível e fácil, até para quem nunca usou a webcam.
- O ciclo de explosões, sons e animações ficou *envolvente e esquisito* (do jeitinho que a gente queria).
- Todo o projeto roda *no seu navegador* — zero servidores, zero APIs externas (além da face-api.js).

---

## 📚 O que aprendemos?

- Integrar a face-api.js de forma leve e funcional.
- Lidar com *sons e GIFs* em tempo real sem travar tudo.
- Criar interações que, mesmo sem propósito real, *prendem a atenção*.
- Rir muito durante os testes 😅

---

## 🚀 Próximos passos

- 🐸 Adicionar mais *tipos de animais* (e sons ainda mais esquisitos).
- 👁️ Modos alternativos: não piscar, não sorrir, não respirar?
- 📊 Criar estatísticas inúteis e conquistas absurdas.
- 🌐 Traduzir o site para outros idiomas e otimizar para dispositivos móveis.

---

> BoopLoop — O ciclo infinito de perder tempo olhando fixamente para passarinhos (ou gatinhos).
> 
> 
> E amando cada segundo desperdiçado.
> 

---

🔗  [Veja o projeto em ação](https://hertonnn.github.io/CODECON_FINAL/codecon/oficial_passaros.html)
