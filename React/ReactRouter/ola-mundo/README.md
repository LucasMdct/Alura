# OLA - MUNDO { ALURA }

Curso da trilha de formação <strong> Explore React com JavaScript </strong><br>
Aprenda a criar interfaces do usuário com React, um dos frameworks JavaScript mais utilizados, e desenvolva uma aplicação do zero ao deploy

## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Uso](#uso)
- [Módulos](#módulos)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto é uma aplicação React que tem como objetivo demonstrar o uso avançado do pacote `react-router-dom` para gerenciar a navegação em uma aplicação web. O projeto é dividido em módulos que abordam diferentes aspectos do roteamento em uma aplicação React.

### Módulos de Ensino

<h5>No Módulo 01, você aprenderá como:</h5>

- Instalar o `react-router-dom`.
- Utilizar os componentes `BrowserRouter`, `Routes` e `Route` do `react-router-dom`.
- Criar rotas para diferentes páginas.
- Adicionar uma rota para lidar com caminhos inexistentes.
<br>
<h5>No Módulo 02, você explorará:</h5>

- A diferença entre sites tradicionais e Single Page Applications (SPAs).
- O uso do componente `Link` do `react-router-dom` para navegação sem recarregar a página.
- O uso do hook `useLocation` para obter informações da rota atual.
- O componente `NavLink` para estilização de links ativos.

Este projeto serve como um guia prático para aprender e implementar o roteamento em aplicativos React usando o `react-router-dom`. Ao concluir os Módulos 01 e 02, você estará preparado para criar SPAs com navegação eficiente e uma experiência de usuário agradável.
<br>

<h5>No Módulo 03, você aprenderá como:</h5>

- Identificar quando utilizar rotas aninhadas.
  - Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Isso foi feito para evitar que o Banner aparecesse na página 404.

- Utilizar o componente Outlet.
  - O Outlet, do pacote `react-router-dom`, foi utilizado para permitir que a rota pai fosse responsável por definir onde as rotas filhas seriam renderizadas.

- Utilizar o atributo index do Route.
  - O atributo `index` foi usado para indicar que o caminho da rota é igual ao da rota pai.

- Diferenciar caminhos relativos e absolutos.
  - Foi abordada a diferença entre caminhos absolutos (iniciando com '/') e caminhos relativos (iniciando sem '/'), e como eles se comportam em relação ao caminho da rota pai.

Este módulo focou em como estruturar e organizar rotas aninhadas em seu aplicativo React, proporcionando flexibilidade e controle sobre o roteamento.
<br>
<h5>No Módulo 04, você aprenderá como:</h5>

- Identificar quando utilizar rotas dinâmicas.
  - As rotas dinâmicas são úteis quando você deseja manter a mesma estrutura de página, mas variar o conteúdo com base nas informações da URL. Neste caso, passamos o ID de um post pela URL, buscamos o post correspondente e exibimos suas informações na tela.

- Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica.
  - Utilizamos a sintaxe `/caminho/:nomedoparametro` no atributo `path` de uma `Route` para definir uma rota dinâmica.

- Utilizar o hook `useParams`.
  - O hook `useParams` foi empregado para obter os parâmetros passados para uma rota dinâmica.

Neste módulo, você explorou como criar rotas dinâmicas para manipular informações específicas na URL, o que é útil em muitos cenários de aplicativos React.
<br>
<h5>No Módulo 05, você aprenderá como:</h5

- Componentizar um botão.
  - Foi criado o componente `BotaoPrincipal`, que recebe props para definir seus estilos, tornando o código mais organizado e reutilizável.

- Utilizar o hook `useNavigate`.
  - O hook `useNavigate` foi utilizado para realizar navegações mais complexas, como voltar para a página anterior no navegador.

- Tratar o caso de post não encontrado.
  - O componente `NaoEncontrada` foi empregado para lidar com a situação em que um post não é encontrado. Duas soluções possíveis foram exploradas para reutilizar o componente `PaginaPadrao` apenas quando um post era encontrado: uma envolve aproveitar o `Outlet` e adicionar os componentes `Routes` e `Route` dentro do componente `Post`, enquanto a outra permite que o `{children}` seja usado em `PaginaPadrao` para que ele possa ser um componente pai direto.

Neste módulo, você aprimorou a organização do código, criando componentes reutilizáveis e tratando cenários em que determinadas informações podem não estar disponíveis.

## Começando

Siga as instruções abaixo para iniciar o projeto em sua máquina local.

### Pré-requisitos

- Node.js e npm instalados. [Instale o Node.js aqui](https://nodejs.org/).

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```
2. Acesse o diretório do projeto:

```bash
cd React
cd ReactRouter
cd ola-mundo
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto:

```bash
npm start
```


### Contact

Se você tiver alguma pergunta, sugestão ou simplesmente quiser bater um papo comigo sobre tecnologia, sinta-se à vontade para entrar em contato!

- Email: lucasmedeiroscosta07@gmail.com
- LinkedIn: [Lucas Medeiros](https://www.linkedin.com/in/medeirosdev)
- GitHub: [LucasMdct](https://github.com/lucasmdct)
- Web: [MedeirosDev](https://medeirosdev.cloud)

