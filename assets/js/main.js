/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach (tab => {
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents =>{
            tabContents.classList.remove('Skills__active')
        })
        target.classList.add('Skills__active')

        tabs.forEach(tab => {
            tab.classList.remove('Skills__active')
        })
        tab.classList.add('Skills__active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target :'.work_card'
    },
            animation: { 
                duration:300
    }

});
/*===== Link Active Work =====*/
 const linkWork = document.querySelectorAll('.work__item')

 function ActiveWork() {
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
    
 }
     linkWork.forEach(L=> L.addEventListener("click", ActiveWork))




/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        toggleportfolioPopup();
    }
})

function toggleportfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
    document.querySelector(".portfolio__popup-close").addEventListener("click" , toggleportfolioPopup)


function portfolioItemDetalis(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML =portfolioItem.querySelector(".work__title ").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".protfolio__item-datails".innerHTML);
}



/*=============== SERVICES MODAL ===============*/
 const modalViews = document.querySelectorAll('.services__modal'),
       modalBTNS= document.querySelectorAll('.services__button'),
       modalCloses= document.querySelectorAll('.services__modal-close')

       let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-model')
       }

       modalBTNS.forEach((modalBTN, i) =>{
        modalBTN.addEventListener('click', () =>{
        modal(i)

        })
       })
       modalCloses.forEach((modalClose) =>{
        modalClose.addEventListener("click", () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-model')

            })
        })
       })
     



/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper (".Testimonials__contanier", {
    spaceBetween: 24,
    Loop:true,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        576: {
        slidesPerView:1,

        },
          768: {
        slidesPerView:2,
        spaceBetween: 48,


        },
    },
});


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);

})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
