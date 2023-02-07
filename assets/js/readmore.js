
const ellipsis1 = document.querySelector(".ellipsis-1");
const ellipsis2 = document.querySelector(".ellipsis-2");
const readMore1 = document.querySelector(".read-more-1");
const readMore2 = document.querySelector(".read-more-2");
const readMoreBtn1 = document.querySelector(".read-more-btn-1");
const readMoreBtn2 = document.querySelector(".read-more-btn-2");


function showMore1() {
    if (ellipsis1.style.display === "none") {
        readMore1.style.display = "none";
        ellipsis1.style.display = "inline";
        readMoreBtn1.innerHTML = "Read More";
    } else {
        readMore1.style.display = "block";
        ellipsis1.style.display = "none";
        readMoreBtn1.innerHTML = "Read Less";
    }
}

function showMore2() {
    if (ellipsis2.style.display === "none") {
        readMore2.style.display = "none";
        ellipsis2.style.display = "inline";
        readMoreBtn2.innerHTML = "Read More";
    } else {
        readMore2.style.display = "block";
        ellipsis2.style.display = "none";
        readMoreBtn2.innerHTML = "Read Less";
    }
}

readMoreBtn1.addEventListener("click", showMore1);
readMoreBtn2.addEventListener("click", showMore2);

