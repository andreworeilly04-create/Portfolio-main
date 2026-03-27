let isModalOpen = false;
let contrastToggle = false; 
if (localStorage.getItem("dark-theme") === "true"){
document.body.classList.add("dark-theme");}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    emailjs
        .sendForm('service_7r47jks', 'template_n5w0r7b', event.target, 'GL1hSa2TuOXGaNGo5').then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("Something went wrong, please try again later.");
        })

    loading.classList += " modal__overlay--visible";

}


function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");

    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
}


function toggleContrast() {
   contrastToggle = !contrastToggle;

    if (contrastToggle){
        document.body.classList.add("dark-theme");
    } else{
        document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("dark-theme", contrastToggle);
    }



function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}



function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}