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

// сворачивание окон
// collapseWindowMobile()

// ____________открытие/закрытие окна____________
windowButton()

// ______________окно на весь экран______________
fullScreenButton()

// _______________форма для записи_______________
formatPhoneInput()
formModalWindow()

// __________кнопка появления формы записи__________
formButton()

// __________кнопка появления формы записи__________
function formButton() {
  let form = document.querySelector('form')
  let button = document.querySelector('.formButton')
  let exit = document.querySelector('.exit_form')

  button.addEventListener('click', () => {
    form.classList.add('is-visible')
    exit.style.display = 'flex'
  })

  exit.addEventListener('click', () => {
    form.classList.remove('is-visible')
    exit.style.display = 'none'
  })
}

// _______________форма для записи_______________
function formatPhoneInput() {
  let phoneInput = document.querySelector('input[name="phone"]')

  phoneInput.addEventListener('keypress', (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }
  })

  phoneInput.addEventListener('input', function () {
    let numbers = this.value.replace(/\D/g, '')
    numbers = numbers.substring(0, 10)

    let formatted = ''

    if (numbers.length > 0) {
      formatted += '(' + numbers.substring(0, 3)
    }
    if (numbers.length >= 4) {
      formatted += ') ' + numbers.substring(3, 6)
    }
    if (numbers.length >= 7) {
      formatted += '-' + numbers.substring(6, 8)
    }
    if (numbers.length >= 9) {
      formatted += '-' + numbers.substring(8, 10)
    }

    this.value = formatted
  })
}

function formModalWindow() {
  let form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let userName = form.userName.value

    if (userName == '') {
      alert(`Спасибо, аноним! Данные сохранены.`)
    } else {
      alert(`Спасибо, ${userName}! Данные сохранены.`)
    }
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

// сворачивание окон
function collapseWindowMobile() {
  document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.screenButton_contacts')

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
      animationInterval = setInterval(showNextImage, 570)
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
      animationInterval = setInterval(showNextImage, 570)
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
      animationInterval = setInterval(showNextImage, 570)
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
      animationInterval = setInterval(showNextImage, 570)
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
      animationInterval = setInterval(showNextImage, 570)
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
      animationInterval = setInterval(showNextImage, 570)
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
