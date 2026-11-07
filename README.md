# SoliGest — Sistema de Gestão Solidária

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Curso-Bacharelado%20em%20Sistemas%20de%20Informação-blue?style=for-the-badge" alt="Curso">
  <img src="https://img.shields.io/badge/Instituição-IFAL%20Campus%20Maceió-red?style=for-the-badge" alt="Instituição">
</p>

---

## Sobre o Projeto

O **SoliGest** é uma aplicação Web desenvolvida como parte da disciplina de **Projeto Integrador** no curso de Bacharelado em Sistemas de Informação do **Instituto Federal de Alagoas (IFAL) - Campus Maceió**.

O objetivo central da plataforma é centralizar e otimizar os processos de gestão em organizações do terceiro setor (ONGs), substituindo controles manuais e planilhas descentralizadas por um sistema seguro, rastreável e eficiente.

### Problemas Resolvidos
- Dependência de controles manuais e planilhas descentralizadas.
- Riscos de perda de dados e falta de transparência com doadores.
- Dificuldade na organização e centralização de voluntários, doações e atendimentos sociais.

---

## Funcionalidades Principais

- **Gestão de Voluntários:** Cadastro, organização e acompanhamento de voluntários da instituição.
- **Doações Financeiras:** Registro e controle de entrada de recursos.
- **Doações de Suprimentos:** Triagem e controle de estoque de doações físicas.
- **Atendimentos Sociais:** Agendamento e histórico de atendimentos aos beneficiários.
- **Relatórios Gerenciais:** Emissão de relatórios para suporte à tomada de decisões estratégicas.

---

## Tecnologias Utilizadas

### **Front-End**
- **React.js:** Criação de interfaces reativas, dinâmicas e compon.

### **Back-End & Banco de Dados**
- **Node.js:** Construção de API RESTful escalável e de alto desempenho.
- **MySQL:** Banco de dados relacional para armazenamento estruturado.

### **Testes & QA**
- **Jest:** Testes unitários do sistema.
- **Cypress:** Testes de ponta a ponta (E2E).
- **Postman:** Validação e testes de coleções de endpoints REST.

### **Ferramentas de Suporte**
- **Figma:** Prototipação de wireframes e Design System.
- **Trello:** Gerenciamento ágil das tarefas do projeto.
- **Git & GitHub:** Versionamento e governança do código-fonte.
- **VS Code:** Ambiente principal de desenvolvimento.

---

## Arquitetura do Sistema

O SoliGest adota uma arquitetura descentralizada em camadas:
1. **Camada de Apresentação (Front-End):** Desenvolvida em React.js, focando em usabilidade e design responsivo.
2. **Camada de Aplicação (Back-End):** Desenvolvida em Node.js, contendo regras de negócio e rotas de API.
3. **Camada de Dados (SGBD):** Banco MySQL relacional focado na integridade e rastreabilidade das informações.
4. **Segurança & LGPD:** Aplicação de mecanismos de proteção, controle de acesso e criptografia de senhas.

---