// ________________бургер-меню________________
burgerMenu()

// ________________таймер сайта________________
timeTracker()

// _____________картинки по ховеру_____________
hoverImage1()
hoverImage2()
hoverImage3()
hoverImage4()
hoverImage5()
hoverImage6()

// ____________открытие/закрытие окна____________
windowButton()

// ______________окно на весь экран______________
fullScreenButton()

// сворачивание окон
collapseWindowMobile()

// ___________выпадающее окно с изображением и надписью___________
modalWindowImg3()
modalWindowImg4()
modalWindowImg6()

// надписи под изображениями
thumbnail3()
thumbnail4()
thumbnail6()

// надписи под изображениями
function thumbnail6() {
  let modal = document.querySelector('.modalImgWindow_6')
  let thumbnails = document.querySelectorAll('.thumbnail_6')
  let modalImg = document.getElementById('modalImageSrc6')
  let captionP = document.getElementById('currentCaption6')

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
      // e.preventDefault()
      // if (!modal || !modalImg || !captionP) return

      modal.style.display = 'block'

      modalImg.src = thumbnail.src

      let captionText = thumbnail.getAttribute('data-caption')
      captionP.textContent = captionText || ''

      let captionContainer = captionP.parentElement
      if (captionContainer) {
        captionContainer.style.display = captionText ? 'block' : 'none'
      }
    })
  })

  console.log(thumbnail6)
}
function thumbnail4() {
  let modal = document.querySelector('.modalImgWindow_4')
  let thumbnails = document.querySelectorAll('.thumbnail_4')
  let modalImg = document.getElementById('modalImageSrc4')
  let captionP = document.getElementById('currentCaption4')

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
      // e.preventDefault()
      // if (!modal || !modalImg || !captionP) return

      modal.style.display = 'block'

      modalImg.src = thumbnail.src

      let captionText = thumbnail.getAttribute('data-caption')
      captionP.textContent = captionText || ''

      let captionContainer = captionP.parentElement
      if (captionContainer) {
        captionContainer.style.display = captionText ? 'block' : 'none'
      }
    })
  })

  console.log(thumbnail4)
}
function thumbnail3() {
  let modal = document.querySelector('.modalImgWindow_3')
  let thumbnails = document.querySelectorAll('.thumbnail_3')
  let modalImg = document.getElementById('modalImageSrc3')
  let captionP = document.getElementById('currentCaption3')

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
      // e.preventDefault()
      // if (!modal || !modalImg || !captionP) return

      modal.style.display = 'block'

      modalImg.src = thumbnail.src

      let captionText = thumbnail.getAttribute('data-caption')
      captionP.textContent = captionText || ''

      let captionContainer = captionP.parentElement
      if (captionContainer) {
        captionContainer.style.display = captionText ? 'block' : 'none'
      }
    })
  })

  console.log(thumbnail3)
}

// ___________выпадающее окно с изображением и надписью___________
function modalWindowImg6() {
  document.addEventListener('DOMContentLoaded', modalWindowImg6)
  let modal = document.querySelector('.modalImgWindow_6')

  modal.addEventListener('click', (e) => {
    modal.style.display = 'none'
  })

  console.log(modalWindowImg6)
}
function modalWindowImg4() {
  document.addEventListener('DOMContentLoaded', modalWindowImg4)
  let modal = document.querySelector('.modalImgWindow_4')

  modal.addEventListener('click', (e) => {
    modal.style.display = 'none'
  })

  console.log(modalWindowImg4)
}
function modalWindowImg3() {
  document.addEventListener('DOMContentLoaded', modalWindowImg3)
  let modal = document.querySelector('.modalImgWindow_3')

  modal.addEventListener('click', (e) => {
    modal.style.display = 'none'
  })

  console.log(modalWindowImg3)
}

// сворачивание окон
function collapseWindowMobile() {
  document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.screenButton_archive')

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        let parent = btn.parentElement
        while (parent && !parent.matches('[class*="windowScreen_"]')) {
          parent = parent.parentElement
        }
        if (!parent) return

        let wasCollapsed = parent.classList.toggle('windowScreen_collapsed')

        btn.textContent = wasCollapsed = '-'
      })
    })
  })
}

// ______________окно на весь экран______________
function fullScreenButton() {
  document.addEventListener('DOMContentLoaded', fullScreenButton)
  let screen = document.querySelector('.buttonScreen')
  let expandButton = document.querySelector('.fullScreenButton')
  let collapseButton = document.querySelector('.thinScreenButton')

  if (!screen || !expandButton || !collapseButton) return

  expandButton.addEventListener('click', () => {
    screen.classList.add('buttonScreen_full')
  })

  collapseButton.addEventListener('click', () => {
    screen.classList.remove('buttonScreen_full')
  })
}

// ____________открытие/закрытие окна____________
function windowButton() {
  document.addEventListener('DOMContentLoaded', function () {
    let windowButtons = document.querySelectorAll('[class^="rec_"]')
    let windows = document.querySelectorAll('[class^="windowScreen_"]')
    let exitButtons = document.querySelectorAll('[class^="exit_"]')

    windowButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        let targetWindow = document.querySelector(`.windowScreen_${index + 1}`)
        if (targetWindow) {
          targetWindow.style.display = 'block'
        }
      })
    })

    exitButtons.forEach((button) => {
      button.addEventListener('click', function () {
        let windowToClose = this.closest('[class^="windowScreen_"]')
        if (windowToClose) {
          windowToClose.style.display = 'none'
        }
      })
    })
  })
}

// _____________картинки по ховеру_____________
function hoverImage6() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_6')
    let windowNames = document.querySelectorAll('#windowName_12')
    let images = hoverScreen.querySelectorAll('.windowContent6')
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
function hoverImage5() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_5')
    let windowNames = document.querySelectorAll('#windowName_11')
    let images = hoverScreen.querySelectorAll('.windowContent5')
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
function hoverImage4() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_4')
    let windowNames = document.querySelectorAll('#windowName_10')
    let images = hoverScreen.querySelectorAll('.windowContent4')
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
function hoverImage3() {
  document.addEventListener('DOMContentLoaded', function () {
    let hoverScreen = document.querySelector('.hoverScreen_3')
    let windowNames = document.querySelectorAll('#windowName_9')
    let images = hoverScreen.querySelectorAll('.windowContent3')
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
