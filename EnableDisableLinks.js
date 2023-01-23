const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

        portfolioItems.forEach(portfolioItem => {
            portfolioItem.addEventListener('mouseover', () => {
                portfolioItem.childNodes[1].classList.add('img-darken');
            })
            portfolioItem.addEventListener('mouseout', () => {
                portfolioItem.childNodes[1].classList.remove('img-darken');
            })
        })

function EnableDisableLinks(btn) {
    var menuLinks = document.getElementById("menu-wrapper");
    var homeLinks = document.getElementById("home");
    var aboutmeLinks = document.getElementById("aboutme");
    var projectsLinks = document.getElementById("projects");
    var referencesLinks = document.getElementById("references");
    var linkedinLinks = document.getElementById("linkedin");
    var githubLinks = document.getElementById("github");
    var resumeLinks = document.getElementById("resume");
    var phoneLinks = document.getElementById("phone");
    var emailLinks = document.getElementById("email");
    if (btn.value == "Disable") {
        btn.value = "Enable";
        menuLinks.style = "";
        homeLinks.style = "";
        aboutmeLinks.style = "";
        projectsLinks.style = "";
        referencesLinks.style = "";
        linkedinLinks.style = "visibility: hidden;";
        githubLinks.style = "visibility: hidden;";
        resumeLinks.style = "visibility: hidden;";
        phoneLinks.style = "visibility: hidden;";
        emailLinks.style = "visibility: hidden;";
    } else {
        btn.value = "Disable";
        menuLinks.style = "visibility: hidden;";
        homeLinks.style = "visibility: hidden;";
        aboutmeLinks.style = "visibility: hidden;";
        projectsLinks.style = "visibility: hidden;";
        referencesLinks.style = "visibility: hidden;";
        linkedinLinks.style = "";
        githubLinks.style = "";
        resumeLinks.style = "";
        phoneLinks.style = "";
        emailLinks.style = "";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

