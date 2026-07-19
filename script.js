window.onload = function () {
    console.log("Portfolio Loaded Successfully");
};

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function(){
        console.log(this.innerText + " clicked");
    });
});
