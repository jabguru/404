var heading = document.querySelector(".heading");
var number = document.querySelector(".heading").textContent;

for (let i = 9000; i >= number; i--) {
    window.setTimeout(function(){
        heading.textContent = i;
    }, 4000);
}