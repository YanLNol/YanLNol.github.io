function Card(filme){
    let card = document.createElement("div")
    card.classList.add("card")

    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "poster do filme"

    let titulo = document.createElement("span")
    titulo.classList.add("titulo")
    titulo.innerText = filme.titulo

    let nota = document.createElement("div")
    nota.classList.add("nota")

    let estrela = document.createElement("span")
    estrela.classList.add("estrela")
    estrela.innerText = filme.estrela

    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(nota)
    nota.appendChild(estrela)
    

    return card
}

const dados = 
[
    {
        poster: "https://www.themoviedb.org/t/p/w200/71XnRvkadkWZZowCGcuBi4XAKdJ.jpg",
        titulo: "Thor: Amor e trovão",
        estrela: star
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa"
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg",
        titulo: "Homem aranha: Sem volta para a casa",
    }
]

let filmes = document.querySelector("#filmes")
dados.forEach( (filme) => {filmes.appendChild(Card(filme))} )