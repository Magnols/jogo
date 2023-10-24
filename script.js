let area;
let frameworkOrLanguage;
let specialization;

function chooseArea(selectedArea) {
    area = selectedArea;
    document.getElementById('game-container').innerHTML = `
                <p>Escolha seu ${area === 'Front-End' ? 'framework' : 'linguagem'}:</p>
                <button onclick="chooseFrameworkOrLanguage('React')">React</button>
                <button onclick="chooseFrameworkOrLanguage('${area === 'Front-End' ? 'Vue' : 'C#'}')">${area === 'Front-End' ? 'Vue' : 'C#'}</button>
            `;
}

function chooseFrameworkOrLanguage(selectedOption) {
    frameworkOrLanguage = selectedOption;
    document.getElementById('game-container').innerHTML = `
                <p>Agora, você pode escolher entre:</p>
                <button onclick="specializeOrFullstack('specialize')">Se especializar na área escolhida</button>
                <button onclick="specializeOrFullstack('fullstack')">Se desenvolver para se tornar Fullstack</button>
            `;
}

function specializeOrFullstack(choice) {
    specialization = choice;
    document.getElementById('game-container').innerHTML = `
                <p>Quais tecnologias você gostaria de aprender?</p>
                <input type="text" id="tech-input">
                <button onclick="addTechnology()">OK</button>
                <p>Responda "OK" para adicionar mais tecnologias à sua lista.</p>
                <p>Quando terminar, diga "Fim" para encerrar a lista.</p>
            `;
}

const technologies = [];

function addTechnology() {
    const techInput = document.getElementById('tech-input').value;
    if (techInput === 'Fim') {
        displayResults();
    } else {
        technologies.push(techInput);
        document.getElementById('tech-input').value = '';
        document.getElementById('game-container').innerHTML += `<p>Você adicionou ${techInput} à sua lista de aprendizado.</p>`;
    }
}

function displayResults() {
    let result = `Sua escolha: Área - ${area}, ${area === 'Front-End' ? 'Framework' : 'Linguagem'} - ${frameworkOrLanguage}, Opção - ${specialization}.`;
    if (technologies.length > 0) {
        result += ` Tecnologias para aprender: ${technologies.join(', ')}.`;
    }
    document.getElementById('game-container').innerHTML = `<p>${result}</p>`;
}