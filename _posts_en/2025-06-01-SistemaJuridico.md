---
layout: post
title: "Modeling and Implementation of a Database for a Legal System"
date: 2025-06-01 09:20:00 -0300
categories: [Banco de Dados, Java, Arquitetura]
tags: [SQL, Modelagem Relacional, MVC, UDESC, API]
image: https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp
lang: en
---

![img_inicio](https://www.bcompany.com.br/wp-content/uploads/2020/03/martelo-juiz-laptop-sistema-juridico-1024x683.jpg.webp)

This post covers the design and implementation of a relational database for legal case management, developed with Adriano Silva as the final project for the Database I course at UDESC. The work spanned conceptual schema design, business rule specification, physical table setup in PostgreSQL, and building a Java backend API.

## The problem and scope

Legal workflows require structured tracking of court cases, procedural steps, legal documents, and participating stakeholders. The goal was to build a normalized data repository to organize this record history and support operational queries.

The domain model was split into four architectural groups:

* Procedural core: Processo and Tramite entities (with specializations for Audiencia and Decisao), capturing the chronological timeline of actions.
* Stakeholders: specialization of the base Pessoa entity into Advogado and Agente Judiciario (subdivided into Juiz and Servidor Publico).
* Jurisdictional structure: Comarca and Vara entities, establishing geographic boundaries and court authority.
* Legal basis: Documento and Lei entities, linking evidence, filings, and statutory citations to court events.

## Integrity and business rules

The data model enforces relational constraints defined in the project data dictionary:

* Assignment: a judge is assigned to a single court division (1:N), and each division belongs to one judicial district (1:N).
* Responsibility: each legal proceeding runs under the authority of a designated judge and requires at least one registered procedural step.
* Legal representation: attorney involvement is modeled using a ternary relationship (N:N:N) connecting Advogado, Pessoa, and Processo.

The Enhanced Entity-Relationship (EER) diagram:

![Esquema Conceitual EER](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/Conceitual_1.png?raw=true)

## Building the relational API in Java

The second stage implemented a Java application using the MVC (Model-View-Controller) pattern to handle requests between the user interface and the PostgreSQL database.

The application maps core tables and provides:

* Record insertion and deletion across mapped entities.
* Parameterized queries utilizing table joins, subqueries, and aggregate functions.

![Interface da API](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/c%C3%B3digo.png?raw=true)

### Final thoughts

The project provided practical experience with schema normalization, referential integrity, and relational querying covered throughout the Database I curriculum. Source code and database migration scripts are hosted on [GitHub](https://github.com/hertonnn/Sistema-Juridico).

**Course:** Database I  

**Institution:** Universidade do Estado de Santa Catarina (UDESC), Centro de Ciências Tecnológicas (CCT)   

**Authors:** Adriano Silva, Herton Silveira   

**Professor:** Dra. Rebeca Schroeder Freitas 

**Year:** 2025 

<div class="mb-5">
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>PostgreSQL</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Java</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Relational Modeling</strong>
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
