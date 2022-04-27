const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
   const opcaoInicial =  read.question('Deseja buscar por categoria? S/N:  ').toUpperCase()

    if (opcaoInicial === 'S') {
      const categorias = livros.map(livro => livro.categoria)
      let naorepetidos = categorias.filter((este, i) => categorias.indexOf(este) === i);
      console.table(naorepetidos);

      const inputCategoria = read.question('Digita uma categoria conforma tabela a cima: ')
      const confirmacao = read.question('Tem certeza? S/N:  ').toUpperCase()

      if (confirmacao === 'S') {
        const livrosFiltrados =  livros.filter(livro => livro.categoria === inputCategoria)
        console.table(livrosFiltrados);

      } else
      console.log('Até a próxima!');

    }else
    console.log('Até a próxima!')

}


module.exports = buscarLivros