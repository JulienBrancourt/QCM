document.addEventListener('DOMContentLoaded',() => {
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
    //gestionnaire d'évènement des boutons
    btnPageSuivante.addEventListener('click', handleNext)
})