window.onload = () => {
    const pages = document.querySelectorAll(".page");
    const nbpages = pages.length;
    console.log(nbpages);
    let pageActive = 0;
    let btnPageSuivante = document.querySelector("#next")

    pages[pageActive].classList.add("active")

    function handleNext() {
        event.preventDefault();
        pages[pageActive].classList.remove("active");
        pageActive++; // Incrémentation correcte
        pages[pageActive].classList.add("active");
        console.log("suivant!!!");
    }

    function checkVerif() {
        let reponse = ""
        for (let i = 1; i < 3; i++) {
            const input = document.querySelector(`input[name="q${i}"]:checked`)
            if (input) {
                reponse = input.value
                break; // Sortir de la boucle si une réponse est trouvée
            }
        }
    }
    console.log (reponse)
    //gestionnaire d'évènement des boutons
    btnPageSuivante.addEventListener('click', handleNext)
}