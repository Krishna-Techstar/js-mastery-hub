const slides = document.querySelectorAll(".slide")
var counter = 1;

// initial positioning
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {

    // 1. MOVE SLIDES
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })

    // 2. HANDLE FAKE LAST
    if (counter === slides.length - 1) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = "none"
            })

            counter = 1

            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`
            })
        }, 1000)
    }

    // 3. HANDLE FAKE FIRST
    if (counter === 0) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = "none"
            })

            counter = slides.length - 2

            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`
            })
        }, 1000)
    }

    // 4. RESTORE TRANSITION
    setTimeout(() => {
        slides.forEach((slide) => {
            slide.style.transition = "1s"
        })
    }, 50)
}