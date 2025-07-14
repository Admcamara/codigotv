document.addEventListener('DOMContentLoaded', () => {
    // --- Animação para a coluna estática ---
    const staticCards = document.querySelectorAll('.static-card');
    staticCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });

    // --- Lógica do Carrossel para a coluna dinâmica ---
    const carouselContainer = document.getElementById('carousel-container');
    const carouselTitle = document.getElementById('carousel-title');
    const carouselBiennium = document.getElementById('carousel-biennium');

    const previousLegislatives = [
        {
            legislatura: "Legislatura 2021-2024",
            bienio: "2023-2024",
            presidente: { nome: "André F. Toppan Briganó", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Décio Gomes", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "2ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Edson José Fermino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Eliana Raquel Silva Antônio", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Renato Moreira Lemes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2021-2024",
            bienio: "2021-2022",
            presidente: { nome: "Lino Cezar Pereira Rogério", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Edson José Fermino", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Alexandre dos Santos Soares", cargo: "2ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "André F. Toppan Briganó", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Benedito G. Machado", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Décio Gomes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Eliana Raquel Silva Antônio", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Paulo Cesar do Nascimento", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2017-2020",
            bienio: "2019-2020",
            presidente: { nome: "Alexandre dos Santos Soares", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "1ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aida Abel da Luz", cargo: "2ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Andre Luiz Ferreira da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "José Donizete Barreto", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "José Renato Correa", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luis Henrique Garcia", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2017-2020",
            bienio: "2017-2018",
            presidente: { nome: "Benedito G. Machado", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "José Renato Correa", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luis Henrique Garcia", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "2ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Aida Abel da Luz", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "André Luiz Ferreira da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "José Donizete Barreto", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2013-2016",
            bienio: "2015-2016",
            presidente: { nome: "José Donizete Barreto", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Edson José Fermino", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luciano Gomes Fontainha", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Benedito G. Machado", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Andre Luiz Ferreira da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Eder Jones Silva de Mello", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Edna Conceição de Lima Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2013-2016",
            bienio: "2013-2014",
            presidente: { nome: "Eder Jones Silva de Mello", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "José Donizete Barreto", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Andre Luiz Ferreira da Silva", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luciano Gomes Fontainha", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Edson José Fermino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Edna Conceição de Lima Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Benedito G. Machado", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2009-2012",
            bienio: "2011-2012",
            presidente: { nome: "Emerson Raimundo", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Sandra Patricia Schinke Fadel", cargo: "1ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Ulisses Valdirei V. Marzola", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Antonio Moreira", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mário Sergio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Gil C. B. dos Anjos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2009-2012",
            bienio: "2009-2010",
            presidente: { nome: "Sandra Patricia Schinke Fadel", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Antonio Moreira", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Ulisses Valdirei Vieira Marzola", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Benedito G. Machado", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Emerson Raimundo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Gil C. B. dos Anjos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mario Sérgio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2005-2008",
            bienio: "2007-2008",
            presidente: { nome: "Gil C. B. dos Anjos", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Valter L. B. de Góes", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Emerson Raimundo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luzia L. Frabetti de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mario Sergio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Oseas de Paulo Paes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2005-2008",
            bienio: "2005-2006",
            presidente: { nome: "Oséias de Paulo Paes", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Gil C. B. dos Anjos", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luzia L. Frabetti de Souza", cargo: "1ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Antonio de Souza Brito", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Genuino Euflazino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mário Sérgio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2001-2004",
            bienio: "2003-2004",
            presidente: { nome: "Oséias de Paulo Paes", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Maria Augusta M. de Goes", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Claudinei Araujo Balbino", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Emerson Raimundo", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflazino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mario Sergio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2001-2004",
            bienio: "2001-2002",
            presidente: { nome: "Claudinei Araujo Balbino", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Emerson Raimundo", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Maria Augusta M. de Goes", cargo: "1ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mario Sérgio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Oséias de Paulo Paes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1997-2000",
            bienio: "1999-2000",
            presidente: { nome: "Samuel Sabino Bezerra", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Luiz Carlos Vieira", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mauri Leme Martins", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "João Batista Correia", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Santana Jandra Ferreira", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Francisco Domingos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1997-2000",
            bienio: "1997-1998",
            presidente: { nome: "Francisco Domingos", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "João Batista Correa", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Santana Jandra Ferreira", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luiz Carlos Vieira", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Samuel Sabino Bezerra", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1993-1996",
            bienio: "1995-1996",
            presidente: { nome: " </br>Jairo de Souza", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Paulo C. Paes de Alcântara", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Josias de Maio Carneiro", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Samuel Sabino Bezerra", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Laudelino de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marco Antonio Goffredo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuíno Euflauzino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Terezinha M. da S. de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1993-1996",
            bienio: "1993-1994",
            presidente: { nome: "Luiz Miguel Antonio", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Samuel Sabino Bezerra", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Paulo C. Paes de Alcântara", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Josias de Maio Carneiro", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Laudelino de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marco Antonio Goffredo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Bento dos Santos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Terezinha M. da S. de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Lei Orgânica Municipal",
            bienio: "Promulgação - 1990",
            presidente: { nome: "Álvaro Mendes de Campos", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Bento dos Santos", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "José Carlos de Alcântara", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aurélio Marvulle Filho", cargo: "2º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ],
            vereadores: [
                { nome: "Alcides Martins Inigo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aparecido Balbino Osório", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Laudelino Nogueira dos Santos Fº", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Renato Barrinuevo da Silva", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Samuel Sabino Bezerra", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Yoshio Munefiça", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        }
    ];

    let currentIndex = 0;

    function createMemberCardHTML(member) {
        return `
            <div class="council-card">
                <img src="${member.foto}" alt="Foto de ${member.nome}" onerror="this.onerror=null;this.src='https://placehold.co/145x160/EEE/000?text=Foto';">
                <div class="card-info">
                    <p class="name">${member.nome}</p>
                    <p class="role">${member.cargo}</p>
                </div>
            </div>
        `;
    }

    function generateCarouselSlideHTML(data) {
        const presidenteHTML = createMemberCardHTML(data.presidente);
        const diretoriaHTML = data.diretoria.map(createMemberCardHTML).join('');
        
        // Lógica para adicionar classe CSS baseada na contagem de vereadores
        const vereadoresCount = data.vereadores.length;
        const vereadoresTierClass = `tier ${vereadoresCount > 5 ? 'vereadores-count-' + vereadoresCount : ''}`;
        const vereadoresHTML = data.vereadores.map(createMemberCardHTML).join('');
        const vereadoresTier = `<div class="${vereadoresTierClass}">${vereadoresHTML}</div>`;

        return `
            <div class="carousel-slide">
                <div class="tier">${presidenteHTML}</div>
                <div class="tier">${diretoriaHTML}</div>
                ${vereadoresTier}
            </div>
        `;
    }

    function showNextLegislative() {
        const currentActive = carouselContainer.querySelector('.carousel-slide.active');
        if (currentActive) {
            currentActive.classList.remove('active');
             setTimeout(() => {
                if (currentActive.parentElement) {
                    currentActive.remove();
                }
            }, 800); // Remove o elemento após a transição de fade-out
        }

        const nextData = previousLegislatives[currentIndex];
        
        carouselTitle.textContent = nextData.legislatura;
        carouselBiennium.textContent = nextData.bienio.includes("Promulgação") ? nextData.bienio : `Biênio ${nextData.bienio}`;

        const newSlideHTML = generateCarouselSlideHTML(nextData);
        carouselContainer.insertAdjacentHTML('beforeend', newSlideHTML);
        
        setTimeout(() => {
            if (carouselContainer.lastElementChild) {
                carouselContainer.lastElementChild.classList.add('active');
            }
        }, 50);

        currentIndex = (currentIndex + 1) % previousLegislatives.length;
    }

    if (previousLegislatives.length > 0) {
        showNextLegislative(); // Mostra o primeiro slide
        setInterval(showNextLegislative, 10000); // Muda a cada 10 segundos
    }
});
