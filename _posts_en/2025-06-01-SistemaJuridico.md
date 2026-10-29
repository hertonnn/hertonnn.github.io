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


This post details the architecture and development of a relational database designed for the legal ecosystem, created in partnership with Adriano Silva as the final project for the Database I course at UDESC. The project covered all stages of the data lifecycle: from conceptual modeling and business rules to physical implementation and building an API.

## The Problem and Scope

The legal field deals with a massive volume of fragmented information on a daily basis. The goal of this project was to structure a centralized repository to organize lawsuits, proceedings, documents, and the various stakeholders involved, optimizing access to information for legal professionals.

To keep the information domain organized and scalable, the model was divided into four architectural cores:

* ***Process Core:*** Composed of the ***Processo*** and ***Tramite*** entities (with specializations in ***Audiencia*** and ***Decisao***), representing the chronological history of events.
* ***Actors and Participants:*** Using the generalization concept in the base entity ***Pessoa***, with structured branches for ***Advogado*** and ***Agente Judiciario*** (specialized into ***Juiz*** and ***Servidor Publico***).
* ***Organizational Structure:*** Mapping hierarchy and jurisdictional location through the ***Comarca*** and ***Vara*** entities.
* ***Rationale and Content:*** The ***Documento*** and ***Lei*** entities, representing the artifacts and legal basis of procedural events.

## Integrity and Business Rules

The reliability of a legal system requires strict database constraints. Some of the main business rules mapped in the Data Dictionary include:

* ***Assignment and Hierarchy:*** A ***Juiz*** must be assigned to a single ***Vara*** (1:N), and a ***Vara*** belongs to a single ***Comarca*** (1:N).
* ***Procedural Workflow:*** Every ***Processo*** must proceed under the responsibility of a single ***Juiz*** and have at least one associated ***Tramite*** to exist in the system.
* ***Complex Relationships:*** The defense of a party in a lawsuit requires a ternary relationship (N:N:N) connecting ***Advogado***, ***Pessoa***, and ***Processo***.

Below is the visual representation of the Enhanced Entity-Relationship (EER) Schema:

![Esquema Conceitual EER](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/Conceitual_1.png?raw=true)

## Building the Relational API in Java

The second phase of the project consisted of abstracting the database complexity through an application. The API was developed in ***Java*** using the ***MVC (Model-View-Controller)*** architectural pattern, ensuring the separation of concerns between data access logic, application rules, and the user interface.

The application consumes a subset of the database (at least 5 related tables) and provides full manipulation features:

* Insertion and deletion of records across all mapped tables.
* Simple listings and complex analytical queries involving ***JOINs***, subqueries, and aggregate functions.

![Interface da API](https://github.com/hertonnn/Sistema-Juridico/blob/main/refs/Parte%201%20-%20Corrigida/c%C3%B3digo.png?raw=true)

### Final Thoughts

In summary, this final term project for the BAN1 course was crucial for reviewing and synthesizing all theoretical and practical content covered throughout the semester. The project repository is available on [GitHub](https://github.com/hertonnn/Sistema-Juridico), containing all source code and database artifacts.

**Course:** Database I  

**Institution:** Universidade do Estado de Santa Catarina (UDESC) - Centro de Ciências Tecnológicas (CCT)   

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
