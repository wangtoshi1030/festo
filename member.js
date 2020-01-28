console.log(123);

const panels = document.querySelectorAll(".panelbox");

function toggleOpen(){
    console.log("hello");
    this.classList.toggle('open');
}


function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// document.getElementsByTagName("p")[3];
// d.addEventListener('click',function(){
//     console.log("clicked");
// })