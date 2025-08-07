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
            presidente: { nome: "André F. Toppan Briganó", cargo: "Presidente", foto: "./assets/Andre.png" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "../assets/anteriores/BeneditoGMachado.jpeg" },
                { nome: "Décio Gomes", cargo: "1º Secretário", foto: "../assets/Decio.png" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "2ª Secretária", foto: "../assets/Aline.png" }
            ],
            vereadores: [
                { nome: "Lourenço José Raimundo", cargo: "Vereador", foto: "../assets/anteriores/LourencoRaimundo.jpeg" },
                { nome: "Edson José Fermino", cargo: "Vereador", foto: "../assets/Edson-Palito.png" },
                { nome: "Eliana Raquel Silva Antônio", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "../assets/Lino.png" },
                { nome: "Renato Moreira Lemes", cargo: "Vereador", foto: "../assets/Renato.png" }
            ]
        },
        {
            legislatura: "Legislatura 2021-2024",
            bienio: "2021-2022",
            presidente: { nome: "Lino Cezar Pereira Rogério", cargo: "Presidente", foto: "../assets/Lino.png" },
            diretoria: [
                { nome: "Edson José Fermino", cargo: "Vice-Presidente", foto: "../assets/Edson-Palito.png" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "1º Secretário", foto: "../assets/Aline.png" },
                { nome: "Alexandre dos Santos Soares", cargo: "2ª Secretária", foto: "../assets/anteriores/AlexandreSantosSoares.jpeg" }
            ],
            vereadores: [
                { nome: "André F. Toppan Briganó", cargo: "Vereador", foto: "./assets/Andre.png" },
                { nome: "Benedito G. Machado", cargo: "Vereador", foto: "../assets/anteriores/BeneditoGMachado.jpeg" },
                { nome: "Décio Gomes", cargo: "Vereador", foto: "../assets/Decio.png" },
                { nome: "Eliana Raquel Silva Antônio", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Renato Moreira Lemes", cargo: "Vereador", foto: "../assets/Renato.png" }
            ]
        },
        {
            legislatura: "Legislatura 2017-2020",
            bienio: "2019-2020",
            presidente: { nome: "Alexandre dos Santos Soares", cargo: "Presidente", foto: "../assets/anteriores/AlexandreSantosSoares.jpeg" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "../assets/anteriores/BeneditoGMachado.jpeg" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "1ª Secretária", foto: "../assets/Aline.png" },
                { nome: "Aida Abel da Luz", cargo: "2ª Secretária", foto: "../assets/anteriores/AidaAbelLuz.jpeg" }
            ],
            vereadores: [
                { nome: "Andre Luiz Ferreira da Silva", cargo: "Vereador", foto: "../assets/anteriores/AndreLuizSilva.jpeg" },
                { nome: "José Donizete Barreto", cargo: "Vereador", foto: "../assets/anteriores/JoseDonizeteBarreto.jpeg" },
                { nome: "José Renato Correa", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "../assets/Lino.png" },
                { nome: "Luis Henrique Garcia", cargo: "Vereador", foto: "../assets/anteriores/LuisHenriqueGarcia.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 2017-2020",
            bienio: "2017-2018",
            presidente: { nome: "Benedito G. Machado", cargo: "Presidente", foto: "../assets/anteriores/BeneditoGMachado.jpeg" },
            diretoria: [
                { nome: "José Renato Correa", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luis Henrique Garcia", cargo: "1º Secretário", foto: "../assets/anteriores/LuisHenriqueGarcia.jpeg" },
                { nome: "Aline Giovani Ruiz de Oliveira", cargo: "2ª Secretária", foto: "../assets/Aline.png" }
            ],
            vereadores: [
                { nome: "Aida Abel da Luz", cargo: "Vereadora", foto: "../assets/anteriores/AidaAbelLuz.jpeg" },
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "../assets/anteriores/AlexandreSantosSoares.jpeg" },
                { nome: "André Luiz Ferreira da Silva", cargo: "Vereador", foto: "../assets/anteriores/AndreLuizSilva.jpeg" },
                { nome: "José Donizete Barreto", cargo: "Vereador", foto: "../assets/anteriores/JoseDonizeteBarreto.jpeg" },
                { nome: "Lino Cezar Pereira Rogério", cargo: "Vereador", foto: "../assets/Lino.png" }
            ]
        },
        {
            legislatura: "Legislatura 2013-2016",
            bienio: "2015-2016",
            presidente: { nome: "José Donizete Barreto", cargo: "Presidente", foto: "../assets/anteriores/JoseDonizeteBarreto.jpeg" },
            diretoria: [
                { nome: "Edson José Fermino", cargo: "Vice-Presidente", foto: "../assets/Edson-Palito.png" },
                { nome: "Luciano Gomes Fontainha", cargo: "1º Secretário", foto: "../assets/anteriores/Luciano.jpeg" },
                { nome: "Benedito G. Machado", cargo: "2º Secretário", foto: "../assets/anteriores/BeneditoGMachado.jpeg" }
            ],
            vereadores: [
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "../assets/anteriores/AlexandreSantosSoares.jpeg" },
                { nome: "Andre Luiz Ferreira da Silva", cargo: "Vereador", foto: "../assets/anteriores/AndreLuizSilva.jpeg" },
                { nome: "Eder Jones Silva de Mello", cargo: "Vereador", foto: "../assets/anteriores/EderJones.jpeg" },
                { nome: "Edna Conceição de Lima Souza", cargo: "Vereadora", foto: "../assets/anteriores/EdnaConceicaoLimaSouza.jpeg" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "../assets/anteriores/MarcosFSilva.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 2013-2016",
            bienio: "2013-2014",
            presidente: { nome: "Eder Jones Silva de Mello", cargo: "Presidente", foto: "../assets/anteriores/EderJones.jpeg" },
            diretoria: [
                { nome: "José Donizete Barreto", cargo: "Vice-Presidente", foto: "../assets/anteriores/JoseDonizeteBarreto.jpeg" },
                { nome: "Andre Luiz Ferreira da Silva", cargo: "1º Secretário", foto: "../assets/anteriores/AndreLuizSilva.jpeg" },
                { nome: "Luciano Gomes Fontainha", cargo: "2º Secretário", foto: "../assets/anteriores/Luciano.jpeg" }
            ],
            vereadores: [
                { nome: "Edson José Fermino", cargo: "Vereador", foto: "../assets/Edson-Palito.png" },
                { nome: "Alexandre dos Santos Soares", cargo: "Vereador", foto: "../assets/anteriores/AlexandreSantosSoares.jpeg" },
                { nome: "Edna Conceição de Lima Souza", cargo: "Vereadora", foto: "../assets/anteriores/EdnaConceicaoLimaSouza.jpeg" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "../assets/anteriores/MarcosFSilva.jpeg" },
                { nome: "Benedito G. Machado", cargo: "Vereador", foto: "../assets/anteriores/BeneditoGMachado.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 2009-2012",
            bienio: "2011-2012",
            presidente: { nome: "Emerson Raimundo", cargo: "Presidente", foto: "../assets/anteriores/EmersonRaimundo.jpeg" },
            diretoria: [
                { nome: "Benedito G. Machado", cargo: "Vice-Presidente", foto: "../assets/anteriores/BeneditoGMachado.jpeg" },
                { nome: "Sandra Patricia Schinke Fadel", cargo: "1ª Secretária", foto: "../assets/anteriores/SandraSchinke.jpeg" },
                { nome: "Ulisses Valdirei V. Marzola", cargo: "2º Secretário", foto: "../assets/anteriores/UlissesValdireiVieiraMarzola.jpeg" }
            ],
            vereadores: [
                { nome: "Antonio Moreira", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "../assets/anteriores/MarcosFSilva.jpeg" },
                { nome: "Mário Sergio Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Gil C. B. dos Anjos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2009-2012",
            bienio: "2009-2010",
            presidente: { nome: "Sandra Patricia Schinke Fadel", cargo: "Presidente", foto: "../assets/anteriores/SandraSchinke.jpeg" },
            diretoria: [
                { nome: "Antonio Moreira", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Ulisses Valdirei Vieira Marzola", cargo: "1º Secretário", foto: "../assets/anteriores/UlissesValdireiVieiraMarzola.jpeg" },
                { nome: "Benedito G. Machado", cargo: "2º Secretário", foto: "../assets/anteriores/BeneditoGMachado.jpeg" }
            ],
            vereadores: [
                { nome: "Emerson Raimundo", cargo: "Vereador", foto: "../assets/anteriores/EmersonRaimundo.jpeg" },
                { nome: "Gil C. B. dos Anjos", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Mario Sérgio Antonio", cargo: "Vereador", foto: "../assets/anteriores/MarioSergioAntonio.jpeg" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2005-2008",
            bienio: "2007-2008",
            presidente: { nome: "Gil C. B. dos Anjos", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Valter L. B. de Góes", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "1º Secretário", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Marcos F. da Silva", cargo: "2º Secretário", foto: "../assets/anteriores/MarcosFSilva.jpeg" }
            ],
            vereadores: [
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "../assets/anteriores/AntonioSouzaBrito.jpeg" },
                { nome: "Emerson Raimundo", cargo: "Vereador", foto: "../assets/anteriores/EmersonRaimundo.jpeg" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" },
                { nome: "Luzia L. Frabetti de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Mario Sergio Antonio", cargo: "Vereador", foto: "../assets/anteriores/MarioSergioAntonio.jpeg" },
                { nome: "Oseas de Paulo Paes", cargo: "Vereador", foto: "../assets/anteriores/OseiasPaes.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 2005-2008",
            bienio: "2005-2006",
            presidente: { nome: "Oséias de Paulo Paes", cargo: "Presidente", foto: "../assets/anteriores/OseiasPaes.jpeg" },
            diretoria: [
                { nome: "Gil C. B. dos Anjos", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Luzia L. Frabetti de Souza", cargo: "1ª Secretária", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Antonio de Souza Brito", cargo: "2º Secretário", foto: "../assets/anteriores/AntonioSouzaBrito.jpeg" }
            ],
            vereadores: [
                { nome: "Genuino Euflazino", cargo: "Vereador", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" },
                { nome: "Marcos F. da Silva", cargo: "Vereador", foto: "../assets/anteriores/MarcosFSilva.jpeg" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Mário Sérgio Antonio", cargo: "Vereador", foto: "../assets/anteriores/MarioSergioAntonio.jpeg" },
                { nome: "Valter L. B. de Góes", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 2001-2004",
            bienio: "2003-2004",
            presidente: { nome: "Oséias de Paulo Paes", cargo: "Presidente", foto: "../assets/anteriores/OseiasPaes.jpeg" },
            diretoria: [
                { nome: "Maria Augusta M. de Goes", cargo: "Vice-Presidente", foto: "../assets/anteriores/MariaAugustaMarzola.jpeg" },
                { nome: "Claudinei Araujo Balbino", cargo: "1º Secretário", foto: "../assets/anteriores/ClaudineiBalbino.jpeg" },
                { nome: "Emerson Raimundo", cargo: "2º Secretário", foto: "../assets/anteriores/EmersonRaimundo.jpeg" }
            ],
            vereadores: [
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "../assets/anteriores/AntonioSouzaBrito.jpeg" },
                { nome: "Genuino Euflazino", cargo: "Vereador", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Mario Sergio Antonio", cargo: "Vereador", foto: "../assets/anteriores/MarioSergioAntonio.jpeg" },
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "../assets/anteriores/MauriLemeMartins.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 2001-2004",
            bienio: "2001-2002",
            presidente: { nome: "Claudinei Araujo Balbino", cargo: "Presidente", foto: "../assets/anteriores/ClaudineiBalbino.jpeg" },
            diretoria: [
                { nome: "Emerson Raimundo", cargo: "Vice-Presidente", foto: "../assets/anteriores/EmersonRaimundo.jpeg" },
                { nome: "Maria Augusta M. de Goes", cargo: "1ª Secretária", foto: "../assets/anteriores/MariaAugustaMarzola.jpeg" },
                { nome: "Genuino Euflauzino", cargo: "2º Secretário", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" }
            ],
            vereadores: [
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "../assets/anteriores/MauriLemeMartins.jpeg" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Mario Sérgio Antonio", cargo: "Vereador", foto: "../assets/anteriores/MarioSergioAntonio.jpeg" },
                { nome: "Oséias de Paulo Paes", cargo: "Vereador", foto: "../assets/anteriores/OseiasPaes.jpeg" },
                { nome: "Antonio de Souza Brito", cargo: "Vereador", foto: "../assets/anteriores/AntonioSouzaBrito.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 1997-2000",
            bienio: "1999-2000",
            presidente: { nome: "Samuel Sabino Bezerra", cargo: "Presidente", foto: "../assets/anteriores/SamuelSabinoBezerra.jpeg" },
            diretoria: [
                { nome: "Luiz Carlos Vieira", cargo: "Vice-Presidente", foto: "../assets/anteriores/LuizCarlosVieira.jpeg" },
                { nome: "Mauri Leme Martins", cargo: "1º Secretário", foto: "../assets/anteriores/MauriLemeMartins.jpeg" },
                { nome: "Jairo de Souza", cargo: "2º Secretário", foto: "../assets/anteriores/JairoSouza.jpeg" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "João Batista Correia", cargo: "Vereador", foto: "../assets/anteriores/JoaoBatistaCorreia.jpeg" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" },
                { nome: "Santana Jandra Ferreira", cargo: "Vereador", foto: "../assets/anteriores/SantanaJandra.jpeg" },
                { nome: "Francisco Domingos", cargo: "Vereador", foto: "../assets/anteriores/FranciscoDomingos.png" }
            ]
        },
        {
            legislatura: "Legislatura 1997-2000",
            bienio: "1997-1998",
            presidente: { nome: "Francisco Domingos", cargo: "Presidente", foto: "../assets/anteriores/FranciscoDomingos.png" },
            diretoria: [
                { nome: "João Batista Correa", cargo: "Vice-Presidente", foto: "../assets/anteriores/JoaoBatistaCorreia.jpeg" },
                { nome: "Santana Jandra Ferreira", cargo: "1º Secretário", foto: "../assets/anteriores/SantanaJandra.jpeg" },
                { nome: "Genuino Euflauzino", cargo: "2º Secretário", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Luiz Carlos Vieira", cargo: "Vereador", foto: "../assets/anteriores/LuizCarlosVieira.jpeg" },
                { nome: "Samuel Sabino Bezerra", cargo: "Vereador", foto: "../assets/anteriores/SamuelSabinoBezerra.jpeg" },
                { nome: "Mauri Leme Martins", cargo: "Vereador", foto: "../assets/anteriores/MauriLemeMartins.jpeg" }
            ]
        },
        {
            legislatura: "Legislatura 1993-1996",
            bienio: "1995-1996",
            presidente: { nome: " </br>Jairo de Souza", cargo: "Presidente", foto: "../assets/anteriores/JairoSouza.jpeg" },
            diretoria: [
                { nome: "Paulo C. Paes de Alcântara", cargo: "Vice-Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Josias de Maio Carneiro", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Samuel Sabino Bezerra", cargo: "2º Secretário", foto: "../assets/anteriores/SamuelSabinoBezerra.jpeg" }
            ],
            vereadores: [
                { nome: "Luiz Miguel Antonio", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Laudelino de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Marco Antonio Goffredo", cargo: "Vereador", foto: "../assets/anteriores/MarcoGoffredo.jpeg" },
                { nome: "Genuíno Euflauzino", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Terezinha M. da S. de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1993-1996",
            bienio: "1993-1994",
            presidente: { nome: "Luiz Miguel Antonio", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Samuel Sabino Bezerra", cargo: "Vice-Presidente", foto: "../assets/anteriores/SamuelSabinoBezerra.jpeg" },
                { nome: "Paulo C. Paes de Alcântara", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Jairo de Souza", cargo: "2º Secretário", foto: "../assets/anteriores/JairoSouza.jpeg" }
            ],
            vereadores: [
                { nome: "Josias de Maio Carneiro", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Laudelino de Souza", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Genuino Euflauzino", cargo: "Vereador", foto: "../assets/anteriores/GenuinoEuflauzino.jpeg" },
                { nome: "Marco Antonio Goffredo", cargo: "Vereador", foto: "../assets/anteriores/MarcoGoffredo.jpeg" },
                { nome: "Bento dos Santos", cargo: "Vereador", foto: "../assets/anteriores/BentoSantos.jpeg" },
                { nome: "Terezinha M. da S. de Souza", cargo: "Vereadora", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" }
            ]
        },
        {
            legislatura: "Legislatura 1989-1992",
            bienio: "1991-1992",
            presidente: { nome: "Álvaro Mendes de Campos", cargo: "Presidente", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
            diretoria: [
                { nome: "Bento dos Santos", cargo: "Vice-Presidente", foto: "../assets/anteriores/BentoSantos.jpeg" },
                { nome: "José Carlos de Alcântara", cargo: "1º Secretário", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aurélio Marvulle Filho", cargo: "2º Secretário", foto: "../assets/anteriores/AurelioMarvulle.jpeg" }
            ],
            vereadores: [
                { nome: "Alcides Martins Inigo", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Aparecido Balbino Osório", cargo: "Vereador", foto: "../assets/anteriores/AparecidoBalbino.jpeg" },
                { nome: "Jairo de Souza", cargo: "Vereador", foto: "../assets/anteriores/JairoSouza.jpeg" },
                { nome: "Laudelino Nogueira dos Santos Fº", cargo: "Vereador", foto: "https://placehold.co/150x200/eef2f6/333?text=Foto" },
                { nome: "Renato Barrinuevo da Silva", cargo: "Vereador", foto: "../assets/anteriores/RenatoBarrinuevo.jpeg" },
                { nome: "Samuel Sabino Bezerra", cargo: "Vereador", foto: "../assets/anteriores/SamuelSabinoBezerra.jpeg" },
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
