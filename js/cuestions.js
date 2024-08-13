function reviso() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        "pregunta-1": "Naruto",
        "pregunta-2": "Kurama",
        "pregunta-3": "Fukasaku",
        "pregunta-4": "Chidori",
        "pregunta-5": "Uchiha",
        "pregunta-6": "Yahiko",
        "pregunta-7": "Hiruzen",
        "pregunta-8": "Itachi",
        "pregunta-9": "Kuchiyose no Jutsu",
        "pregunta-10": "Might Guy"
    };

    let correctas = 0;
    let totalPreguntas = Object.keys(respuestasCorrectas).length;

    for (let key in respuestasCorrectas) {
        let respuestaSeleccionada = document.querySelector(`input[name="${key}"]:checked`);
        if (respuestaSeleccionada && respuestaSeleccionada.value === respuestasCorrectas[key]) {
            correctas++;
        }
    }

    let resultado = `Obtuviste ${correctas} de ${totalPreguntas} preguntas correctas.`;
    document.getElementById("resultado").innerText = resultado;
}
//NAV BAR
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});