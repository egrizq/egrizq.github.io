const page2 = document.getElementById("page2")
const project2 = document.querySelectorAll(".project2")

project2.forEach(function(project2) {
    page2.addEventListener('click', function() {
        project2.style.display = "block"
        this.parentElement.remove()
    })
})
