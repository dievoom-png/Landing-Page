
let count = document.getElementsByClassName("landing__container").length;
let navlist = document.querySelector('#navbar__list');
const sections= document.getElementsByTagName('section');


// build the nav
function buildNav() {
    for (let i = 1; i <= count; i++) {
        let li = document.createElement("li");
        //modifying the li element
        li.innerText = "Section" + " " + i;
        li.setAttribute("class", "items");
        li.setAttribute("id", "nav" + i);
        //making the element visisble
        document.getElementById('navbar__list').appendChild(li);

    }
}
buildNav();

// Add class 'active' to section when near top of viewport
function inView() {
    for (let i = 0; i < count; i++) {
        
        let bounding =  sections[i].getBoundingClientRect(); 
        //checking if the section is in view
        if (bounding.top >=0 && bounding.top<=300) {
             //add the active class to the sector
             sections[i].setAttribute('class', 'your-active-class');


        } else {
            //remove it when the user scrolls away
            sections[i].classList.remove('your-active-class');
        }
    }
}
//calling the function when the user scrolls
window.addEventListener("scroll", inView);



// Scroll to anchor ID using scrollTO event
function scrollTo() {
    for (let i = 1; i <= count; i++) {
        document.addEventListener('click', function (ev) {
            if (ev.target.id == "nav" + i) {
               let dest = document.querySelector('#section' + i);
              
                dest.setAttribute('class', 'your-active-class');
                dest.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        })
    }
}
scrollTo();


