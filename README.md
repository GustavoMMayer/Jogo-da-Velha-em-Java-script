# Teste para vaga de Desenvolvedor Javascript Junior

O objetivo deste teste é entender o candidato, sua experiência e sua capacidade de resolução de problemas com dúvidas e detalhes que serão exigidos no dia-a-dia como Desenvolvedor Javascript Junior.
O teste é baseado em questionamentos e problemas a serem resolvidos.

### Como será feito o teste?
O teste é dividido em 2 etapas:
- Questões teóricas.
- Projeto prático, quer seja correção de bug ou criação do mesmo.

O candidato precisa criar um repositório próprio com a seguinte estrutura:
- No README serão respondidas as questões teóricas (pergunta e resposta), de forma organizada e explicada.
- No próprio repositório estará o projeto prático, corrigido e/ou criado.

Após a finalização, o candidato deve enviar um e-mail para suporte@b7web.com.br com o link do repositório original (este) bem como o link do repositório pessoal com a resolução.

## Questões Teóricas

1. Para adicionar um observador no javascript, qual comando é dado?
    addEventListener('tipo de evento', função), para ser utilizado vese ser especificado o elemento a ser monitorado, o tipo de envento e a função que será acionada ex.:
    document. querySelector('.botão').addEventListener('click', clicou).

2. Qual a utilidade de criar um jogo em um teste de desenvolvedor?
    Testar na prática varios conhecimentos, como: Criação de observadores; Manipulação do DOM; Ciração de elementos; Criação e manipulação de arrays e objetos; Estruturas de repetição; Condicionais. Resumindo, um jogo utiliza varios conhecimentos direferente em sua criação.

3. Ao alterar o DOM, apenas o elemento alterado é renderizado na memória? Explique.
    De modo geral sim, na maioria das alterações apenas o elemento alterado é renderizado na memoria, em alguns casos como alteraçao de posição, podem fazer que toda memoria seja renderizada. Porém ao fazer as elterações de DOM, a pagina é atualiza para mostrar as atualizações, no caso do ReactJS ja não ocorre a atualização da pagina, apenas o elemento alterado.

## Projeto prático

Crie um jogo da velha utilizando Javascript puro, sem uso de bibliotecas externas.

Esse jogo deve:
- Contar o placar de vitórias de cada jogador (x ou o)
- Já inicia com uma partida e o jogador é escolhido aleatoriamente.
- Deve ter um botão para reiniciar a partida em andamento.

Todos os eventos do jogo devem ser feitos por listener via javascript, nenhum evento deve ser inserido no HTML.

O design não é fator importante, mas a funcionalidade do jogo e a estruturação da página é essencial.

## link para o jogo:

https://jogo-da-velha-js-alpha.vercel.app/