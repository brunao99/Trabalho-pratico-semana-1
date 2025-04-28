console.log("Script carregado com sucesso!");
const dados = {
    "filmes": [
        {
            "id": 1,
            "titulo": "O Poderoso Chefão",
            "descricao": "A saga da família Corleone, uma das maiores obras do cinema.",
            "detalhes": {
                "diretor": "Francis Ford Coppola",
                "ano": 1972,
                "genero": "Drama/Crime",
                "duracao": "175 min",
                "elenco": "Marlon Brando, Al Pacino, James Caan",
                "classificacao": "18+",
                "avaliacao": 9.2
            },
            "destaque": true,
            "imagem_principal": "https://picsum.photos/800/450?random=1",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "https://picsum.photos/400/300?random=11",
                    "descricao": "Don Corleone em seu escritório"
                },
                {
                    "id": 2,
                    "src": "https://picsum.photos/400/300?random=12",
                    "descricao": "Michael Corleone em cena icônica"
                }
            ]
        },
        {
            "id": 2,
            "titulo": "Interestelar",
            "descricao": "Uma jornada épica através do espaço em busca de um novo lar para a humanidade.",
            "detalhes": {
                "diretor": "Christopher Nolan",
                "ano": 2014,
                "genero": "Ficção Científica/Drama",
                "duracao": "169 min",
                "elenco": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
                "classificacao": "12+",
                "avaliacao": 8.6
            },
            "destaque": true,
            "imagem_principal": "https://picsum.photos/800/450?random=2",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "https://picsum.photos/400/300?random=21",
                    "descricao": "Cena da nave Endurance"
                },
                {
                    "id": 2,
                    "src": "https://picsum.photos/400/300?random=22",
                    "descricao": "Cooper e Murph"
                }
            ]
        },
        {
            "id": 3,
            "titulo": "Parasita",
            "descricao": "Uma família pobre que se infiltra na casa de uma família rica, com consequências inesperadas.",
            "detalhes": {
                "diretor": "Bong Joon-ho",
                "ano": 2019,
                "genero": "Drama/Thriller",
                "duracao": "132 min",
                "elenco": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
                "classificacao": "16+",
                "avaliacao": 8.6
            },
            "destaque": false,
            "imagem_principal": "https://picsum.photos/800/450?random=3",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "https://picsum.photos/400/300?random=31",
                    "descricao": "A família Kim na casa dos Park"
                },
                {
                    "id": 2,
                    "src": "https://picsum.photos/400/300?random=32",
                    "descricao": "Cena da festa de aniversário"
                }
            ]
        },
        {
            "id": 4,
            "titulo": "Clube da Luta",
            "descricao": "Um homem deprimido que sofre de insônia conhece um vendedor de sabonetes e forma um clube de luta.",
            "detalhes": {
                "diretor": "David Fincher",
                "ano": 1999,
                "genero": "Drama/Thriller",
                "duracao": "139 min",
                "elenco": "Brad Pitt, Edward Norton, Helena Bonham Carter",
                "classificacao": "18+",
                "avaliacao": 8.8
            },
            "destaque": true,
            "imagem_principal": "https://picsum.photos/800/450?random=4",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "https://picsum.photos/400/300?random=41",
                    "descricao": "Tyler Durden dando socos"
                },
                {
                    "id": 2,
                    "src": "https://picsum.photos/400/300?random=42",
                    "descricao": "Cena do porão do clube"
                }
            ]
        },
        {
            "id": 5,
            "titulo": "A Origem",
            "descricao": "Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos.",
            "detalhes": {
                "diretor": "Christopher Nolan",
                "ano": 2010,
                "genero": "Ficção Científica/Ação",
                "duracao": "148 min",
                "elenco": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
                "classificacao": "14+",
                "avaliacao": 8.8
            },
            "destaque": false,
            "imagem_principal": "https://picsum.photos/800/450?random=5",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "https://picsum.photos/400/300?random=51",
                    "descricao": "Cena da cidade que se dobra"
                },
                {
                    "id": 2,
                    "src": "https://picsum.photos/400/300?random=52",
                    "descricao": "Equipe reunida"
                }
            ]
        }
    ]
};

function carregarDestaques() {
    const destaqueContainer = document.getElementById('carouselFilmes');
    if (!destaqueContainer) return;

    const filmesDestaque = dados.filmes.filter(filme => filme.destaque);
    
    let html = '';
    filmesDestaque.forEach((filme, index) => {
        html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${filme.imagem_principal}" class="d-block w-100" alt="${filme.titulo}">
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
                <p><strong>Diretor:</strong> ${filme.detalhes.diretor} | <strong>Ano:</strong> ${filme.detalhes.ano}</p>
                <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Ver detalhes</a>
            </div>
        </div>
        `;
    });
    
    destaqueContainer.innerHTML = html;
}

function carregarTodosFilmes() {
    const container = document.getElementById('todosFilmes');
    if (!container) return;
    
    let html = '';
    dados.filmes.forEach(filme => {
        html += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${filme.imagem_principal}" class="card-img-top" alt="${filme.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${filme.titulo}</h5>
                    <p class="card-text">${filme.descricao}</p>
                    <p class="text-muted"><small>${filme.detalhes.ano} • ${filme.detalhes.genero}</small></p>
                </div>
                <div class="card-footer bg-transparent">
                    <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Ver detalhes</a>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function carregarDetalhesFilme() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmeId = parseInt(urlParams.get('id'));
    
    if (!filmeId) {
        window.location.href = 'index.html';
        return;
    }
    
    const filme = dados.filmes.find(f => f.id === filmeId);
    if (!filme) {
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('filmeTitulo').textContent = filme.titulo;
    document.getElementById('filmeImagem').src = filme.imagem_principal;
    document.getElementById('filmeImagem').alt = filme.titulo;
    document.getElementById('filmeDescricao').textContent = filme.descricao;
    
    const detalhesHtml = `
        <p><strong>Diretor:</strong> ${filme.detalhes.diretor}</p>
        <p><strong>Ano de Lançamento:</strong> ${filme.detalhes.ano}</p>
        <p><strong>Gênero:</strong> ${filme.detalhes.genero}</p>
        <p><strong>Duração:</strong> ${filme.detalhes.duracao}</p>
        <p><strong>Elenco Principal:</strong> ${filme.detalhes.elenco}</p>
        <p><strong>Classificação:</strong> ${filme.detalhes.classificacao}</p>
        <p><strong>Avaliação:</strong> ${filme.detalhes.avaliacao}/10</p>
    `;
    document.getElementById('filmeDetalhes').innerHTML = detalhesHtml;
    
    const fotosContainer = document.getElementById('fotosFilme');
    let fotosHtml = '';
    filme.imagens_complementares.forEach(foto => {
        fotosHtml += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${foto.src}" class="card-img-top" alt="${foto.descricao}">
                <div class="card-body">
                    <p class="card-text text-center"><small>${foto.descricao}</small></p>
                </div>
            </div>
        </div>
        `;
    });
    
    fotosContainer.innerHTML = fotosHtml;
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('carouselFilmes')) {
        carregarDestaques();
        carregarTodosFilmes();
    } else if (document.getElementById('filmeTitulo')) {
        carregarDetalhesFilme();
    }
});