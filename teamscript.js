const modalBtn = document.querySelectorAll(".about-button")
const modalOverlay = document.querySelector(".overlay")
const closeBtn = document.querySelectorAll(".close-btn");
const documentBody = document.querySelector("body")

modalBtn.forEach(function(btn) {
    btn.onclick = function() {
        const modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        modalOverlay.classList.add("active");
        documentBody.style.overflow = "hidden";
    }; 
}); 

function displayNone() {
    document.querySelectorAll(".modal").forEach(el => {
        el.style.display = "none";
    });
    modalOverlay.classList.remove("active");
    documentBody.style.overflow = "auto";
}
