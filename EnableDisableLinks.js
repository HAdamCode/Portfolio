function EnableDisableLinks(btn) {
    var menuLinks = document.getElementById("menu-wrapper");
    var homeLinks = document.getElementById("home");
    var projectsLinks = document.getElementById("projects");
    var referencesLinks = document.getElementById("references");
    if (btn.value == "Disable") {
        btn.value = "Enable";
        menuLinks.style = "";
        homeLinks.style = "";
        projectsLinks.style = "";
        referencesLinks.style = "";
    } else {
        btn.value = "Disable";
        menuLinks.style = "visibility: hidden;";
        homeLinks.style = "visibility: hidden;";
        projectsLinks.style = "visibility: hidden;";
        referencesLinks.style = "visibility: hidden;";
    }
}