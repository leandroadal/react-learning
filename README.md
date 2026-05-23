# React

## O que é o React?

O **React** (também conhecido como React.js ou ReactJS) é uma biblioteca JavaScript de código aberto focada na criação de **interfaces de usuário (UI)**.

> **Importante:** React é uma **biblioteca**, não um framework. Ele foca na camada de visualização (View), dando liberdade para o desenvolvedor escolher outras ferramentas para rotas, estado global e chamadas de API.

---

## ⚙️ Começando um Projeto: Create React App (CRA)

Historicamente, a forma mais comum de iniciar um projeto React era através do comando:

```bash
npx create-react-app meu-projeto
```

### Por que usar o CRA hoje?

Embora o cenário tenha mudado, ainda existem motivos para conhecê-lo:

* **Legado e Tutoriais:** A grande maioria dos cursos e tutoriais mais antigos na internet utiliza o CRA. Se você está seguindo um desses cursos, usá-lo facilitará o acompanhamento.
* **Abstração Total:** Ele esconde toda a configuração do Webpack e Babel, permitindo que o iniciante foque apenas no código React, sem se preocupar com ferramentas de build.

### Os Problemas e Por que ele caiu em desuso

Atualmente, a própria documentação oficial do React **não recomenda mais** o uso do CRA para novos projetos. Os principais motivos são:

1. **Lentidão (Performance):** O CRA utiliza o Webpack, que se torna muito lento para subir o servidor e fazer o "rebuild" conforme o projeto cresce.
2. **Manutenção:** O projeto `create-react-app` raramente recebe atualizações significativas ultimamente, ficando para trás em relação às novas ferramentas do ecossistema.
3. **Pacotes Pesados:** Ele instala uma árvore de dependências gigantesca, muitas das quais você pode não precisar.
4. **Alternativas Melhores:** Ferramentas como o **Vite** são drasticamente mais rápidas, e frameworks como **Next.js** ou **Remix** oferecem recursos prontos para produção (como roteamento e SSR) que o CRA não possui.

---

## Conceitos Fundamentais

O sucesso do React baseia-se em três pilares principais:

### 1. Componentização

No React, tudo é um **componente**. Pense neles como peças de LEGO. Você cria pequenas partes da interface (um botão, uma barra de busca, um card) e as junta para formar uma aplicação complexa.

* **Reutilização:** Você escreve uma vez e usa em vários lugares.
* **Manutenção:** Se algo quebrar no botão, você só precisa mexer no arquivo do botão.

### 2. JSX (JavaScript XML)

O JSX é uma extensão de sintaxe que permite escrever algo muito parecido com HTML dentro do JavaScript. Isso torna o código mais visual e fácil de entender.

```javascript
const Welcome = () => {
  return <h1>Olá, mundo!</h1>;
};
```

### 3. Virtual DOM

O DOM (Document Object Model) do navegador é lento. O React cria uma cópia dele na memória, chamada **Virtual DOM**.

* Quando algo muda, o React compara a versão antiga com a nova (processo chamado *Diffing*).
* Ele atualiza no navegador **apenas o que mudou**, tornando a aplicação extremamente performática.

---

## Por que usar React?

* **Declarativo:** Você diz *o que* quer que apareça na tela, e o React cuida de *como* atualizar o DOM.
* **Ecossistema Gigante:** Existem milhares de bibliotecas prontas para usar com React.
* **React Native:** Com os conhecimentos de React, você pode criar aplicativos nativos para Android e iOS.
* **Comunidade:** Documentação vasta e muita oferta de vagas no mercado de trabalho.

---
