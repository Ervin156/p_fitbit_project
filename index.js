function slider(btnLeft, btnRight, currentWatch, currentContainer) {
    const left = document.querySelector(btnLeft);
    const right = document.querySelector(btnRight);
    let slideIndex = 1;
    let containerIndex = 1;
    const watch = document.querySelectorAll(currentWatch);
    const conntainer = document.querySelectorAll(currentContainer);
    const btnColorVersa = document.querySelector('.versa');
    const btnColorHR = document.querySelector('.hr');
    const btnColorCharge = document.querySelector('.charge');

    showSlide(slideIndex);

    btnColorVersa.onclick = event => {
        clickFunction(event)
    };
    btnColorHR.onclick = event => {
        clickFunction(event)
    };
    btnColorCharge.onclick = event => {
        clickFunction(event)
    };
    clickFunction = event => {
        if (event.target.parentElement !== btnColorVersa && event.target.parentElement !== btnColorHR && event.target.parentElement !== btnColorCharge) {
            false
        } else {
            for (let i = 0; i < watch.length; i++) {
                watch[i].style.display = 'none';
                if (event.target.name === watch[i].name)
                    watch[i].style.display = 'block';
            }
        }
    };

    function showSlide(slideIndex) {
        if (slideIndex > watch.length) {
            slideIndex = 1;
        };
        if (slideIndex < 1) {
            slideIndex = watch.length;
        };

        for (let i = 0; i < watch.length; i++) {
            watch[i].style.display = 'none';
        };
        watch[slideIndex - 1].style.display = "block";
    };

    function showContainerSlides() {
        if (containerIndex > conntainer.length) {
            containerIndex = 1;
        };
        if (containerIndex < 1) {
            containerIndex = conntainer.length;
        };
        for (let i = 0; i < conntainer.length; i++) {
            conntainer[i].style.display = 'none';
            conntainer[containerIndex - 1].children[i].style.display = "none";

        };
        conntainer[containerIndex - 1].style.display = "block";
        conntainer[containerIndex - 1].children[0].style.display = "block";
    };
    
    left.onclick = () => {
        showContainerSlides(containerIndex++);
    };
    right.onclick = () => {
        showContainerSlides(containerIndex--);
    };
    showContainerSlides(containerIndex);
};
slider('#left-arrow', '#right-arrow', '.slide-item', '.slide');

// function swipeFunction() {
//     let sqr = document.querySelector('.slide-item');
//     let x = sqr.getBoundingClientRect().left;
//     let touchstartX = 0;
//     let slideItem = document.querySelector(".slide-item");
//     slideItem.addEventListener('touchstart', function (event) {
//         touchstartX += event.changedTouches[0].screenX;
//     }, false);
//     slideItem.addEventListener('touchend', function (event) {
//         touchendX += event.changedTouches[0].screenX;
//         console.log(touchendX)
//         handleGesture();
//     }, false);

//     function handleGesture() {
//         slideItem.style.left += (x / 2) + "px";
//         if (touchendX <= touchstartX) {
//             slideItem.style.right += (touchstartX / 2) + 'px';
//             console.log(slideItem);
//         }

//         if (touchendX >= touchstartX) {
//             slideItem.style.left += (touchstartX / 2) + 'px';
//             console.log(slideItem);

//         }
//     }
// };
// swipeFunction()