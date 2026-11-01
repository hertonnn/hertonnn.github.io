---
layout: post
title: "Modelagem e Implementação de um Banco de Dados para Sistema Jurídico"
date: 2025-06-01 09:20:00 -0300
categories: [Banco de Dados, Java, Arquitetura]
tags: [SQL, Modelagem Relacional, MVC, UDESC, API]
image: https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp
---

![img_inicio](https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp)

Este post detalha a arquitetura e a implementação de um banco de dados relacional para o domínio jurídico, desenvolvido em parceria com Adriano Silva como projeto final da disciplina de Banco de Dados I na UDESC. O trabalho abrangeu modelagem conceitual, definição de regras de negócio, implementação física e construção de uma API em Java.

## O problema e o escopo

Sistemas jurídicos demandam o registro ordenado de processos judiciais, andamentos, documentação e partes envolvidas. A meta do projeto foi construir um esquema centralizado para organizar esse histórico e simplificar consultas operacionais.

O modelo conceitual foi estruturado em quatro eixos:

* Núcleo processual: entidades Processo e Tramite (com especializações em Audiencia e Decisao), registrando a linha cronológica dos eventos.
* Atores e partes: especialização da entidade Pessoa em ramificações para Advogado e Agente Judiciario (subdividido em Juiz e Servidor Publico).
* Estrutura jurisdicional: mapeamento de Comarca e Vara para estabelecer a distribuição geográfica e a competência de julgamento.
* Base legal e peças: entidades Documento e Lei, associando petições e fundamentações aos eventos do processo.

## Integridade e regras de negócio

O sistema depende de regras de integridade declaradas no dicionário de dados e no esquema relacional:

* Lotação: um juiz vincula-se a uma única vara (1:N), e cada vara pertence a uma única comarca (1:N).
* Responsabilidade: cada processo tramita sob a jurisdição de um juiz responsável e exige ao menos um trâmite associado.
* Defesa: a atuação de advogados nos autos é modelada por um relacionamento ternário (N:N:N) entre Advogado, Pessoa e Processo.

O diagrama conceitual no padrão Entidade-Relacionamento Estendido (EER):

![Esquema Conceitual EER](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/Conceitual_1.png?raw=true)

## Construindo a API relacional em Java

A segunda etapa do trabalho implementou uma API em Java seguindo o padrão MVC (Model-View-Controller) para intermediar as requisições entre a interface e o banco PostgreSQL.

A aplicação consome tabelas centrais do esquema e oferece:

* Operações de inserção e remoção em tabelas mapeadas.
* Consultas parametrizadas com junções (JOINs), subconsultas e funções agregadas.

![Interface da API](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/c%C3%B3digo.png?raw=true)

### Considerações finais

O projeto serviu para aplicar na prática as etapas de normalização, integridade referencial e consultas relacionais vistas na disciplina de Banco de Dados I. O código-fonte e os scripts de definição do banco estão no [GitHub](https://github.com/hertonnn/Sistema-Juridico).

**Disciplina:** Banco de Dados I  

**Instituição:** Universidade do Estado de Santa Catarina (UDESC), Centro de Ciências Tecnológicas (CCT)   

**Autores:** Adriano Silva, Herton Silveira   

**Professora:** Dra. Rebeca Schroeder Freitas 

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
