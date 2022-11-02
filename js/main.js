

/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* end scroll to top */

/*
==============================================
==============================================
*/

/* start header */

let hedear = document.querySelector(".header");
let toggleMenu = hedear.querySelector(".toggle-menu");
let navigation = hedear.querySelector(".navigation");

toggleMenu.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    navigation.classList.remove("open");
});



// start marker
let marker = document.querySelector(".header #marker");
let itemH = document.querySelectorAll(".header ul li a");

function Indicator(e) {
    marker.style.top = e.offsetTop + "px";
    marker.style.width = e.offsetWidth + "px";
}

itemH.forEach(link => {
    link.addEventListener("mousemove", (e) => {
        Indicator(e.target);
    })
})


/* end header */

/*
==============================================
==============================================
*/

/* =============== scroll section active link ================== */

// get all section that have an id defined
let sections = document.querySelectorAll("section[id]");


function navHighlighter() {

    // get current scroll positon
    let scrollY = window.pageYOffset;

    // now we loop
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 100;
        let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add("active")
    } else {
        document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove("active")
    }

    });
}

window.addEventListener("scroll", navHighlighter);


/* =============== end section active link ================== */

/*
==============================================
==============================================
*/





