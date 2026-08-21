---
layout: post
title: "Modelagem e Implementação de um Banco de Dados para Sistema Jurídico"
date: 2025-06-01 09:20:00 -0300
categories: [Banco de Dados, Java, Arquitetura]
tags: [SQL, Modelagem Relacional, MVC, UDESC, API]
image: https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp
---

![img_inicio](https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp)


Este post detalha a arquitetura e o desenvolvimento de um banco de dados relacional projetado para o ecossistema jurídico, criado em parceria com Adriano Silva como projeto final da disciplina de Banco de Dados I na UDESC. O trabalho envolveu todas as etapas do ciclo de vida dos dados: desde a modelagem conceitual e regras de negócio até a implementação física e construção de uma API.

## O Problema e o Escopo

A área do Direito lida diariamente com um volume massivo de informações fragmentadas. A proposta deste projeto foi estruturar um repositório centralizado que organize processos, trâmites, documentos e os diversos atores envolvidos, otimizando o acesso às informações para profissionais da área.

Para manter o domínio de informação organizado e escalável, o modelo foi dividido em quatro núcleos arquiteturais:

* ***Núcleo do Processo:*** Composto pelas entidades ***Processo*** e ***Tramite*** (com especializações em ***Audiencia*** e ***Decisao***), representando o histórico cronológico dos eventos.
* ***Atores e Participantes:*** Utilizando o conceito de generalização na entidade base ***Pessoa***, com ramificações estruturadas para ***Advogado*** e ***Agente Judiciario*** (especializado em ***Juiz*** e ***Servidor Publico***).
* ***Estrutura Organizacional:*** Mapeamento da hierarquia e localização jurisdicional através das entidades ***Comarca*** e ***Vara***.
* ***Fundamentação e Conteúdo:*** As entidades ***Documento*** e ***Lei***, que representam os artefatos e a base legal dos eventos processuais.

## Integridade e Regras de Negócio

A confiabilidade de um sistema jurídico exige restrições rigorosas no banco de dados. Algumas das principais regras de negócio mapeadas no Dicionário de Dados incluem:

* ***Lotação e Hierarquia:*** Um ***Juiz*** deve estar lotado em uma única ***Vara*** (1:N), e uma ***Vara*** pertence a uma única ***Comarca*** (1:N).
* ***Fluxo Processual:*** Todo ***Processo*** deve tramitar sob a responsabilidade de um único ***Juiz*** e possuir pelo menos um ***Tramite*** associado para existir no sistema.
* ***Relacionamentos Complexos:*** A defesa de uma parte em um processo exige um relacionamento ternário (N:N:N) conectando ***Advogado***, ***Pessoa*** e ***Processo***.

Abaixo está a representação visual do Esquema Entidade-Relacionamento Estendido (EER):

![Esquema Conceitual EER](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/Conceitual_1.png?raw=true)

## Construindo a API Relacional em Java

A segunda fase do projeto consistiu em abstrair a complexidade do banco através de uma aplicação. A API foi desenvolvida em ***Java*** adotando o padrão arquitetural ***MVC (Model-View-Controller)***, garantindo a separação de responsabilidades entre a lógica de acesso aos dados, as regras da aplicação e a interface com o usuário.

A aplicação consome um subconjunto do banco de dados (no mínimo 5 tabelas relacionadas) e fornece funcionalidades completas de manipulação:

* Inserção e remoção de registros em todas as tabelas mapeadas.
* Listagens simples e consultas analíticas complexas envolvendo ***JOINs***, subconsultas e funções de agregação.

![Interface da API](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/c%C3%B3digo.png?raw=true)

### Considerações finais

Em sumo, esse trabalho de conclusão final da disciplina de BAN1 foi crucial para relembrar e sintetizar todo conteúdo teórico e prático visto no decorrer do semestre. O repositório do projeto está disponível no [GitHub](https://github.com/hertonnn/Sistema-Juridico), contendo todo o código fonte e os artefatos do banco de dados.

**Disciplina:** Banco de Dados I  

**Instituição:** Universidade do Estado de Santa Catarina (UDESC) - Centro de Ciências Tecnológicas (CCT)   

**Autores:** Adriano Silva, Herton Silveira   

**Professora**: Dra. Rebeca Schroeder Freitas 

**Ano:** 2025 

<div class="mb-5">
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>PostgreSQL</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Java</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Modelagem Relacional</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>MVC</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>UDESC</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>API</strong>
    </span>
</div>
