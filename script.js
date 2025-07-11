document.addEventListener('DOMContentLoaded', () => {
    const previousLegislativeContainer = document.getElementById('previous-legislative-container');
    const previousLegislativeSection = document.querySelector('.previous-legislative');
    const bienniumTitleElement = previousLegislativeSection.querySelector('.legislative-biennium');

    const previousLegislatives = [
        {
            bienio: "2021-2024",
            presidente: { nome: "Antigo Presidente A", cargo: "Presidente", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
            diretoria: [
                { nome: "Antigo Vice A", cargo: "Vice-Presidente", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Antigo 1º Sec. A", cargo: "1º Secretário", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Antigo 2º Sec. A", cargo: "2º Secretário", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" }
            ],
            vereadores: [
                { nome: "Vereador Antigo A1", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Vereador Antigo A2", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Vereador Antigo A3", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Vereador Antigo A4", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" },
                { nome: "Vereador Antigo A5", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/cd13c5b4b983a30cce49db910bd934061007202515.png?data=1007202515" }
            ]
        },
        {
            bienio: "2017-2020",
            presidente: { nome: "Antigo Presidente B", cargo: "Presidente", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
            diretoria: [
                { nome: "Antigo Vice B", cargo: "Vice-Presidente", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Antigo 1º Sec. B", cargo: "1º Secretário", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Antigo 2º Sec. B", cargo: "2º Secretário", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" }
            ],
            vereadores: [
                { nome: "Vereador Antigo B1", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Vereador Antigo B2", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Vereador Antigo B3", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Vereador Antigo B4", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" },
                { nome: "Vereador Antigo B5", cargo: "Vereador", foto: "https://www.cmcamposnovos.sp.gov.br/temp/903786c1fef54a4a2844cf37a18ae4771007202515.png?data=1007202515" }
            ]
        }
    ];

    let currentIndex = 0;

    function generateLegislativeHTML(data) {
        const createMemberCard = (member) => `
            <div class="card member-card">
                <img src="${member.foto}" alt="Foto de ${member.nome}" class="member-photo">
                <div class="member-info">
                    <h4>${member.nome}</h4>
                    <p>${member.cargo}</p>
                </div>
            </div>`;

        let diretoriaCardsHTML = data.diretoria.map(createMemberCard).join('');
        let vereadoresBottomHTML = data.vereadores.map(createMemberCard).join('');

        return `
            <div class="legislative-data">
                <div class="card top-card member-card">
                    <img src="${data.presidente.foto}" alt="Foto de ${data.presidente.nome}" class="member-photo">
                    <div class="member-info">
                        <h4>${data.presidente.nome}</h4>
                        <p>${data.presidente.cargo}</p>
                    </div>
                </div>
                <div class="middle-cards">${diretoriaCardsHTML}</div>
                <div class="bottom-cards">${vereadoresBottomHTML}</div>
            </div>
        `;
    }

    function showNextLegislative() {
        // Remove o slide anterior
        const currentActive = previousLegislativeContainer.querySelector('.legislative-data.active');
        if (currentActive) {
            currentActive.classList.remove('active');
            // Espera a transição de opacidade terminar para remover o elemento do DOM
            setTimeout(() => {
                if (currentActive.parentElement) {
                    currentActive.remove();
                }
            }, 800);
        }

        const nextLegislativeData = previousLegislatives[currentIndex];
        
        if (bienniumTitleElement) {
            bienniumTitleElement.textContent = `Biênio ${nextLegislativeData.bienio}`;
        }

        // Adiciona o novo slide
        const newLegislativeHTML = generateLegislativeHTML(nextLegislativeData);
        previousLegislativeContainer.insertAdjacentHTML('beforeend', newLegislativeHTML);

        // Adiciona a classe 'active' para o novo slide aparecer com fade-in
        setTimeout(() => {
            const newElement = previousLegislativeContainer.lastElementChild;
            if (newElement) {
                newElement.classList.add('active');
            }
        }, 50); // Um pequeno delay para garantir que o elemento foi inserido antes de animar

        // Prepara o índice para o próximo slide
        currentIndex = (currentIndex + 1) % previousLegislatives.length;
    }

    if (previousLegislatives.length > 0) {
        showNextLegislative(); // Mostra o primeiro imediatamente
        // Muda de legislativo a cada 10 segundos
        setInterval(showNextLegislative, 10000); 
    }
});