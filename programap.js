
let musica = {
nome :"Eu Seguirei",
artista:"Frei Gilson",
album:"Salvos pela Cruz",
poster:"EU SEGUIREI.jpg"
}
let musica2 = {
nome : "Desperta",
artista:"Comunidade Católica Colo de Deus",
album:"O Cordeiro, o Leão e o Trono - Parte 1",
poster:"DESPERTA.avif"      
}
let musica3 = {
nome :"Terra seca",
artista:"Fraternidade São João Paulo II",
album:"Terra Seca (Ao Vivo)",
poster:"Terra seca.jpg"              
}
let playlist = []
playlist.push(musica)
playlist.push(musica2)
playlist.push(musica3)

for(let i = 0 ; i < playlist.length;i++){

document.write(`
    <div class="card">
    
        <img class="poster" src='img/${playlist[i].poster}'>
 
        <div class="nomeEartista"> 
         <span class="nome" > ${playlist[i].nome}</span>
         <span class="artista"> ${playlist[i].artista}</span>
         <span class="album"> ${playlist[i].album}</span>
       
        </div>
          
    </div>
`
);
}