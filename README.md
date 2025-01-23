<h2 align="center">Cubos Movie Apps</h2>

<hr/>

## ⚙️ Sobre o Projeto:
Aplicativo web desenvolvido para buscar e visualizar filmes utilizando a API do TMDB. O foco principal está na experiência do usuário, com uma interface moderna, responsiva e temas claros e escuros para maior acessibilidade.

Este projeto foi estruturado para ser escalável, de fácil manutenção e altamente reutilizável, utilizando uma arquitetura baseada em componentes reutilizáveis e modulares. A escolha de tecnologias modernas, como o Vite e a implementação de PWA (Progressive Web App), assegura um desempenho otimizado e suporte para funcionalidade offline.

## ⚙️ Funcionalidades:
- Pesquisa de Filmes: Com barra de busca dinâmica, permite encontrar filmes de forma rápida e eficiente.
- Paginação: Exibição de filmes com paginação, garantindo uma navegação fluida mesmo em grandes volumes de dados.
- Tema Claro e Escuro: Implementado com Radix Colors, oferece uma interface personalizável para o usuário.
- Página de Detalhes: Exibe informações completas sobre os filmes, como orçamento, receita, duração e descrição.
- Progressive Web App (PWA): Funcionalidades offline com carregamento rápido, permitindo que o aplicativo seja instalado como app em dispositivos móveis ou desktop.

## ⚙️ Tecnologias Utilizadas:

- React: Biblioteca para construção da interface do usuário.
- Vite: Ferramenta de build extremamente rápida e otimizada para desenvolvimento de projetos modernos.
- Styled-Components: Biblioteca para estilização de componentes com suporte a temas dinâmicos.
- Radix Colors: Sistema de cores acessíveis para construção de temas claros e escuros.
- React Router: Gerenciamento de rotas para navegação entre páginas.
- Fetch API: Requisições HTTP feitas utilizando a API nativa do JavaScript.
- PWA: Implementação de Progressive Web App para suporte offline e instalação como aplicativo.


## ⚙️ O que funciona:
- Busca de Filmes: Uma barra de busca funcional integrada com a API do TMDB para encontrar filmes específicos.
- Paginação: Listagem de filmes com suporte à paginação para melhorar a navegação.
- Modo Claro e Escuro: Alternância de temas para atender às preferências do usuário.
- Página de Detalhes de Filmes: Exibe informações detalhadas, incluindo orçamento, receita, duração e descrição do filme.
- Funcionalidade Offline com PWA: O aplicativo funciona mesmo sem conexão à internet.

## ⚙️ O que Pode ser Desenvolvido com Mais Tempo no Futuro:
- Implementação de um sistema de autenticação para usuários salvos.
- Listas personalizadas, permitindo ao usuário salvar filmes favoritos.
- Mais animações e microinterações para melhorar a experiência do usuário.
- Integração com outras APIs, como IMDb ou Rotten Tomatoes, para obter mais informações dos filmes.

## ⚙️ Arquitectura de Projeto:
Este projeto utiliza uma arquitetura baseada em componentes (Component-Based Architecture), onde cada funcionalidade é separada em componentes reutilizáveis e modulares. Essa abordagem permite:

- Facilidade de Manutenção: Cada componente tem uma responsabilidade única e clara, tornando o código mais fácil de entender e modificar.
- Escalabilidade: Novas funcionalidades podem ser adicionadas sem impactar no código existente.
- Reutilização: Componentes como MovieCard, Pagination e SearchBar podem ser reutilizados em diferentes partes do projeto.

A arquitetura baseada em componentes, combinada com o uso do Vite como ferramenta de build, foi escolhida para garantir:

- Performance Otimizada: O Vite fornece carregamento rápido durante o desenvolvimento e build otimizado para produção.
- Modularidade: A separação de responsabilidades entre componentes facilita a colaboração em equipe e testes isolados.
- Suporte a PWA: Com Vite e a API nativa fetch, a configuração de PWA é simples e eficiente, garantindo funcionalidade offline e instalação em dispositivos.

## Instalação

## 🏁 To run the project:

Clone this repository on your machine:

```bash
$ git clone https://github.com/Gremis/cubos-movie-apps
```

cd `cubos-movie-apps` and run:

```bash
npm install
```

```bash
npm run dev
```

Para criar uma build de produção

```bash
npm run build
```

Para servir a build localmente

```bash
npm run serve
```

<br/>


## ⚙️ Projeto Online:

Para servir a build localmente
