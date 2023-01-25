
const menuItem = document.querySelector(".menu-item");
const menuItems = document.querySelectorAll(".menu-item");
const menuOpen= document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");


function openMenu() {
    menuOpen.style.display = "none";
    menuClose.style.display = "inline";
    menuItems.forEach( 
        function(item) { 
            item.style.display = "inline";
            item.addEventListener("click", closeMenu);
        }
    )

}

function closeMenu() {
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
    menuItems.forEach( 
        function(item) { 
            item.style.display = "none";
        }
    )
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);


  