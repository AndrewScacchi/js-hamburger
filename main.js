// Javascript Code for the Exercise

const showOnClick = document.querySelector(".fa-bars");
const closeOnClick = document.querySelector(".fa-times");

showOnClick.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").classList.add("active");
    }
);

//why remove class do not work?
//had to modify my file watching the lesson this morning.

closeOnClick.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu";
        
    }
);