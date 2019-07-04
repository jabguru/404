var heading = document.querySelector(".heading");

for (let i = 50000; i >= 404; i--) {
    window.setTimeout(function(){
        heading.textContent = i;
    }, 4000);
}