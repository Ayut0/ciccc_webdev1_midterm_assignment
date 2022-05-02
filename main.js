window.addEventListener("DOMContentLoaded", ()=>{
    let toggleBtn = document.querySelector("#modeSwitchBtn");
    const mobileToggleBtn = document.querySelector("#MobileModeSwitchBtn");
    const aboutMeSection = document.querySelector("#aboutMeSection");
    const skillMeSection = document.querySelector("#skillsSection");
    const projectMeSection = document.querySelector("#projectsSection");
    const qualificationMeSection = document.querySelector("#qualificationSection");
    const contactMeSection = document.querySelector("#contactSection");
    const footer = document.querySelector(".footer");
    const boxTitle = document.querySelectorAll(".box-title");

    const introSentence = document.querySelector(".intro-sentence");
    const logo = document.querySelectorAll("#logo");
    const words = document.querySelectorAll("#word");

    const switchTheme = () =>{
        toggleBtn.classList.toggle("fa-sun")
        aboutMeSection.classList.toggle("darkMode");
        skillMeSection.classList.toggle("darkMode");
        projectMeSection.classList.toggle("darkMode");
        qualificationMeSection.classList.toggle("darkMode");
        contactMeSection.classList.toggle("darkMode");
        footer.classList.toggle("darkMode");
        introSentence.classList.toggle("darkMode");
        logo.forEach(element => {
            element.classList.toggle("darkMode");
        });
        words.forEach(word => {
            word.classList.toggle("darkMode");
        });
        boxTitle.forEach(item => {
            item.classList.toggle("darkMode");
        });
    }

    toggleBtn.addEventListener("click", switchTheme);
    mobileToggleBtn.addEventListener("click", switchTheme);
})
