const livros = require('../database')
const read = require('readline-sync')

const recomendados = () => {

    const opcaoInicial =  read.question('Deseja buscar por livros recomendados? S/N: ').toUpperCase()
    
      
       if (opcaoInicial === 'S') {

       const livrosRecomendados =  livros.filter(livro => livro.recomenda === true && livro.leu === true)
       console.table(livrosRecomendados)
       
       }else {
       console.log('Até a próxima')
     }
   }

module.exports = recomendados
