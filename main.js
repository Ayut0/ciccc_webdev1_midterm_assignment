window.addEventListener("DOMContentLoaded", ()=>{
    const toggleBtn = document.querySelector("#modeSwitchBtn");
    const mobileToggleBtn = document.querySelector("#MobileModeSwitchBtn");
    const aboutMeSection = document.querySelector("#aboutMeSection");
    const skillSection = document.querySelector("#skillsSection");
    const projectSection = document.querySelector("#projectsSection");
    const qualificationSection = document.querySelector("#qualificationSection");
    const contactMeSection = document.querySelector("#contactSection");
    const footer = document.querySelector(".footer");
    const contents = [aboutMeSection, skillSection, projectSection, qualificationSection, contactMeSection, footer];

    const boxTitle = document.querySelectorAll(".box-title");
    const logos = document.querySelectorAll("#logo");
    const words = document.querySelectorAll("#word");
    const boxBorder = document.querySelectorAll(".skill-box");

    const switchTheme = () =>{
        toggleBtn.classList.toggle("fa-sun")

        contents.forEach(content =>{
            content.classList.toggle("darkMode")
        })
        words.forEach(word => {
            word.classList.toggle("darkMode");
        });
        boxTitle.forEach(item => {
            item.classList.toggle("darkMode");
        });
        boxBorder.forEach(element => {
            element.classList.toggle("darkMode");
        });
        logos.forEach(logo => {
          logo.classList.toggle("darkMode");
        });
    }

    toggleBtn.addEventListener("click", switchTheme);
    mobileToggleBtn.addEventListener("click", switchTheme);
})
