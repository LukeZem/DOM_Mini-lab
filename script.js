//setting content wihtin the element
const topHeader = document.querySelector("#top-header");
topHeader.textContent = "DOM_Mini-Lab!"

//creating function to hide the header by clicking the button
const h1BtnHider = document.querySelector("#h1-hider");
h1BtnHider.addEventListener("click", function () {
    topHeader.style.display = "none"
});

//Creating function to display the header again after being hidden
const h1BtnReveal = document.querySelector('#h1-reveal')
h1BtnReveal.addEventListener("click", function () {
    topHeader.style.display = "block";
})
