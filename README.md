# Quiz da Internet Segura

Quiz de escolha múltipla para crianças do 1.º ciclo, criado para ser editado no GitHub e publicado com GitHub Pages.

## Ficheiros

- `index.html` — página principal
- `style.css` — cores e visual do quiz
- `script.js` — perguntas, respostas e funcionamento do quiz

## Como editar as perguntas

1. Abre o ficheiro `script.js`.
2. Procura a lista chamada `questions`.
3. Altera o texto das perguntas, respostas e explicações.
4. Guarda as alterações.

Exemplo de pergunta:

```js
{
  question: "A tua pergunta aqui?",
  answers: [
    "Resposta A",
    "Resposta B",
    "Resposta C",
    "Resposta D"
  ],
  correct: 1,
  explanation: "Explicação simples para os alunos."
}
```

Atenção: em `correct`, a contagem começa no zero.

- `0` = primeira resposta
- `1` = segunda resposta
- `2` = terceira resposta
- `3` = quarta resposta

## Como publicar no GitHub Pages

1. Cria um repositório no GitHub.
2. Envia estes ficheiros para o repositório.
3. Vai a **Settings**.
4. Entra em **Pages**.
5. Em **Branch**, escolhe `main`.
6. Clica em **Save**.
7. O GitHub vai criar um link para o quiz.
