//Carrossels

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    var tam_width = imgs.clientWidth;
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * tam_width }px)`;

}

setInterval(carrossel, 2000);

// Smooth Scrolling
$(".navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// NavBar Responsiva
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu =  document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; 

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+ 0.3}s`); 
        });
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass); 
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navList.addEventListener("click", this.handleClick)
        this.navBar.addEventListener("click", this.handleClick)
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavbar(
    ".mobile-menu",
    ".navbar-itens",
    ".navbar-itens li",
);

mobileNavBar.init();