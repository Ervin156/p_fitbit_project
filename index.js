function slider(btnLeft, btnRight, currentWatch, currentContainer) {
    const left = document.querySelector(btnLeft);
    const right = document.querySelector(btnRight);
    let slideIndex = 1;
    let containerIndex = 1;
    const watch = document.querySelectorAll(currentWatch);
    const conntainer = document.querySelectorAll(currentContainer);
    const firsVersaSlide = document.querySelector('#first-versa-slide');
    const firsHRSlide = document.querySelector('#first-hr-slide');
    const lastVersaSlide = document.querySelector('#last-versa-slide');
    const lastHRSlide = document.querySelector('#last-hr-slide');
    const secondVersaSlide = document.querySelector('#second-versa-slide');
    const secondHRSlide = document.querySelector('#second-hr-slide');
    const firsChargeSlide = document.querySelector('#first-charge-slide');
    const lastChargeSlide = document.querySelector('#last-charge-slide');
    const secondChargeSlide = document.querySelector('#second-charge-slide');

    currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    apdatefirstVersaSlide = () => {
        lastVersaSlide.style.display = 'none';
        secondVersaSlide.style.display = 'none';
        firsVersaSlide.style.display = 'block';
    }

    apdatefirstHRSlide = () => {
        lastHRSlide.style.display = 'none';
        secondHRSlide.style.display = 'none';
        firsHRSlide.style.display = 'block';
    }
    apdatefirstChargeSlide = () => {
        lastChargeSlide.style.display = 'none';
        secondChargeSlide.style.display = 'none';
        firsChargeSlide.style.display = 'block';
    }

    showSlides = () => {

        if (slideIndex > watch.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = watch.length;
        }
        for (let i = 0; i < watch.length; i++) {
            watch[i].style.display = 'none';
        }
        watch[slideIndex - 1].style.display = 'block';
    }

    showContainerSlides = () => {
        if (containerIndex > conntainer.length) {
            containerIndex = 1;
        }
        if (containerIndex < 1) {
            containerIndex = conntainer.length;
        }
        for (let i = 0; i < conntainer.length; i++) {
            conntainer[i].style.display = 'none';
        }
        conntainer[containerIndex - 1].style.display = "block";
        if (containerIndex == 1) {
            apdatefirstVersaSlide();

        } else if (containerIndex == 2) {
            apdatefirstHRSlide();
        } else if (containerIndex == 3) {
            apdatefirstChargeSlide();
        }
    }
    left.onclick = () => {
        showContainerSlides(containerIndex++);
    }
    right.onclick = () => {
        showContainerSlides(containerIndex--);
    }
    showSlides(slideIndex);
    showContainerSlides(containerIndex);
}
slider('#left-arrow', '#right-arrow', '.slide-item', '.slide');

function swipeFunction() {
    let sqr = document.querySelector('.slide-item');
    let x = sqr.getBoundingClientRect().left;
    let touchstartX = 0;
    let slideItem = document.querySelector(".slide-item");
    slideItem.addEventListener('touchstart', function(event) {
        touchstartX += event.changedTouches[0].screenX;
    }, false);
    slideItem.addEventListener('touchend', function(event) {
        touchendX += event.changedTouches[0].screenX;
        console.log(touchendX)
        handleGesture();
    }, false);

    function handleGesture() {
        slideItem.style.left += (x / 2) + "px";
        // if (touchendX <= touchstartX) {
        //     slideItem.style.right += (touchstartX / 2) + 'px';
        //     console.log(slideItem);
        // }

        // if (touchendX >= touchstartX) {
        //     slideItem.style.left += (touchstartX / 2) + 'px';
        //     console.log(slideItem);

        // }
    }
}
swipeFunction();