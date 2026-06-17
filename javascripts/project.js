// ________________бургер-меню________________
burgerMenu()

// ________________таймер сайта________________
timeTracker()

// _____________картинки по ховеру_____________
hoverImage1()
hoverImage2()
// hoverImage3()
// hoverImage4()
// hoverImage5()
// hoverImage6()

// _____________картинки по ховеру_____________
function hoverImage2() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_2')
    let windowNames = document.querySelectorAll('#windowName_8')
    let images = hoverScreen.querySelectorAll('.windowContent2')
    let currentImageIndex = 0
    let animationInterval

    function showNextImage() {
      images.forEach((img) => {
        img.style.opacity = '0'
      })
      images[currentImageIndex].style.opacity = '1'
      currentImageIndex = (currentImageIndex + 1) % images.length
    }

    function startAnimation() {
      animationInterval = setInterval(showNextImage, 400)
    }

    function stopAnimation() {
      clearInterval(animationInterval)
      images.forEach((img) => {
        img.style.opacity = '0'
      })
    }

    windowNames.forEach((name) => {
      name.addEventListener('mouseenter', startAnimation)
      name.addEventListener('mouseleave', stopAnimation)
    })
  })
}

function hoverImage1() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_1')
    let windowNames = document.querySelectorAll('#windowName_7')
    let images = hoverScreen.querySelectorAll('.windowContent')
    let currentImageIndex = 0
    let animationInterval

    function showNextImage() {
      images.forEach((img) => {
        img.style.opacity = '0'
      })
      images[currentImageIndex].style.opacity = '1'
      currentImageIndex = (currentImageIndex + 1) % images.length
    }

    function startAnimation() {
      animationInterval = setInterval(showNextImage, 400)
    }

    function stopAnimation() {
      clearInterval(animationInterval)
      images.forEach((img) => {
        img.style.opacity = '0'
      })
    }

    windowNames.forEach((name) => {
      name.addEventListener('mouseenter', startAnimation)
      name.addEventListener('mouseleave', stopAnimation)
    })
  })
}

// ________________таймер сайта________________
function timeTracker() {
  let startTime = Date.now()

  function updateTimer() {
    const elapsed = Date.now() - startTime
    const seconds = Math.floor(elapsed / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    const formattedSeconds = (seconds % 60).toString().padStart(2, '0')
    const formattedMinutes = (minutes % 60).toString().padStart(2, '0')
    const formattedHours = hours.toString().padStart(2, '0')

    document.getElementById('time').textContent =
      `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }

  setInterval(updateTimer, 1000)
}

// ________________бургер-меню________________
function burgerMenu() {
  let burger = document.querySelector('#burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}
