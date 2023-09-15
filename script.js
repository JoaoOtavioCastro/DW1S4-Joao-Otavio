let titulo = document.getElementbyId("title")

const pages = [
    {tile:"Exercicio 1", url:"Aula01\index.html"},
    {tile:"Exercicio 2", url:"Aula02\index.html"},
    {tile:"Exercicio 3", url:"Aula03\index.html"}
]

function backPage() {
    titulo.value("Pagina anterior");
}
function nextPage() {
    titulo.value("próxima pagina");
}
