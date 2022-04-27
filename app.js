const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const ordenar = require('./controllers/listarLivrosOrdenados')
const recomendados  = require('./controllers/listarRecomendados')
const listaDeDesejo = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
========================Menu================================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos
5 - SAIR

Digite um numero[1-5]:
`)

switch(resposta){
  case '1':
    buscarLivros()
    break
  case '2':
    ordenar()
    break
  case '3':
    recomendados()
      break
  case '4':
    listaDeDesejo()
        break
  case '5':
     console.log('Obrigada e até a próxima!')
     break
  default:
    console.log('Opção invalida')
}
