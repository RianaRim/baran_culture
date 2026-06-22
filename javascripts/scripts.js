// _______________________бургер-меню_______________________
burgerMenu()

// _________________рандомные штампы на фоне_________________
createBlocks()
createBlocksMobile()

// ______________изображения по движению пальца______________
imageElementMobile()

// _________________эффект паралакса на фоне_________________
parallax()

// ________________активные и пассивные кнопки________________
windowIcon()

// ________________таймер сайта________________
timeTracker()

// ____________окна с перемещением____________
windowDrag1()
windowDrag2()
windowDrag3()
windowDrag4()
windowDrag5()

// _______________включение/выключение окон_______________
windowButton()

// ____________________ползунок звука____________________
volumeControl()

// ____________________ползунок звука____________________
function volumeControl() {
  let video = document.querySelector('.dolgan')
  let volumeControl = document.getElementById('volumeControl')

  if (video && volumeControl) {
    volumeControl.addEventListener('input', (e) => {
      let value = parseFloat(e.target.value)
      video.volume = value

      if (value === 0) {
        video.muted = true
      } else {
        video.muted = false
      }
    })

    video.addEventListener('volumechange', () => {
      if (!video.muted) {
        volumeControl.value = video.volume
      } else {
        volumeControl.value = 0
      }
    })
  }
}

// _______________включение/выключение окон_______________
function windowButton() {
  document.addEventListener('DOMContentLoaded', function () {
    let windowIcons = document.querySelectorAll('.window-icon')
    let windows = document.querySelectorAll('[class^="window_"]')
    let video = document.querySelector('.dolgan')
    let exitButtons = document.querySelectorAll('[class^="exit_"]')

    windowIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
        let targetWindow = document.querySelector(`.window_${index + 1}`)
        if (targetWindow) {
          targetWindow.style.display = 'block'

          if (video) {
            video
              .play()
              .catch((e) =>
                console.log('Автовоспроизведение заблокировано браузером')
              )
          }
        }
      })
    })

    exitButtons.forEach((button) => {
      button.addEventListener('click', function () {
        let windowToClose = this.closest('[class^="window_"]')
        if (windowToClose) {
          windowToClose.style.display = 'none'
        }

        if (video) {
          video.pause()
          video.currentTime = 0
          video.muted = true
          video.volume = 0
        }
      })
    })
  })
}

// ____________окна с перемещением____________
function windowDrag5() {
  document.addEventListener('DOMContentLoaded', function () {
    let window1 = document.querySelector('.window_5')

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    window1.addEventListener('mousedown', function (e) {
      isDragging = true

      let rect = window1.getBoundingClientRect()
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top

      e.preventDefault()
    })

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      window1.style.left = newX + 'px'
      window1.style.top = newY + 'px'
    })

    document.addEventListener('mouseup', function () {
      isDragging = false
    })
  })
}
function windowDrag4() {
  document.addEventListener('DOMContentLoaded', function () {
    let window1 = document.querySelector('.window_4')

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    window1.addEventListener('mousedown', function (e) {
      isDragging = true

      let rect = window1.getBoundingClientRect()
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top

      e.preventDefault()
    })

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      window1.style.left = newX + 'px'
      window1.style.top = newY + 'px'
    })

    document.addEventListener('mouseup', function () {
      isDragging = false
    })
  })
}
function windowDrag3() {
  document.addEventListener('DOMContentLoaded', function () {
    let window1 = document.querySelector('.window_3')

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    window1.addEventListener('mousedown', function (e) {
      isDragging = true

      let rect = window1.getBoundingClientRect()
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top

      e.preventDefault()
    })

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      window1.style.left = newX + 'px'
      window1.style.top = newY + 'px'
    })

    document.addEventListener('mouseup', function () {
      isDragging = false
    })
  })
}
function windowDrag2() {
  document.addEventListener('DOMContentLoaded', function () {
    let window1 = document.querySelector('.window_2')

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    window1.addEventListener('mousedown', function (e) {
      isDragging = true

      let rect = window1.getBoundingClientRect()
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top

      e.preventDefault()
    })

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      window1.style.left = newX + 'px'
      window1.style.top = newY + 'px'
    })

    document.addEventListener('mouseup', function () {
      isDragging = false
    })
  })
}
function windowDrag1() {
  document.addEventListener('DOMContentLoaded', function () {
    let window1 = document.querySelector('.window_1')

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    window1.addEventListener('mousedown', function (e) {
      isDragging = true

      let rect = window1.getBoundingClientRect()
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top

      e.preventDefault()
    })

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      window1.style.left = newX + 'px'
      window1.style.top = newY + 'px'
    })

    document.addEventListener('mouseup', function () {
      isDragging = false
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

// ________________активные и пассивные кнопки________________
function windowIcon() {
  let icons = document.querySelectorAll('.window-icon')

  icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('active')
    })
  })
}

// _________________эффект паралакса на фоне_________________
function parallax() {
  let main = document.querySelector('.paleolit')

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth + 0.1) * 1
    let y = (event.clientY / window.innerHeight + 0.1) * 1

    main.style.transform = `translate(${x}vw, ${y}vw)`
  })
}

// ______________изображения по движению пальца______________
function imageElementMobile() {
  let mainScreen = document.querySelector('.mainScreen')

  if (!mainScreen) return

  let images = [
    'images/work1.png',
    'images/work2.png',
    'images/work3.png',
    'images/work4.png',
    'images/work5.png',
    'images/work6.png',
    'images/work7.png',
    'images/work8.png',
    'images/work9.png',
    'images/work10.png',
    'images/work11.png',
    'images/work12.png',
    'images/work13.png',
    'images/work14.png',
    'images/work15.png',
    'images/work16.png',
    'images/work17.png',
    'images/work18.png'
  ]

  document.addEventListener('mousemove', (event) => {
    let x = event.clientX
    let y = event.clientY

    let rect = mainScreen.getBoundingClientRect()

    let posX = x - rect.left
    let posY = y - rect.top

    let randomImage = images[Math.floor(Math.random() * images.length)]

    let img = document.createElement('img')
    img.src = randomImage
    img.className = 'imageElement'

    img.style.left = posX + 'px'
    img.style.top = posY + 'px'

    mainScreen.appendChild(img)

    setTimeout(() => {
      img.remove()
    }, 3000)
  })
}

// _________________рандомные штампы на фоне_________________
function createBlocksMobile() {
  let container = document.querySelector('.paleolitMobile')
  let blockCount = 20

  let links = [
    'images/paleolitBlock4.svg',
    'images/paleolitBlock5.svg',
    'images/paleolitBlock6.svg'
  ]

  for (let i = 0; i < blockCount; i++) {
    let block = document.createElement('img')
    block.classList.add('paleolit_block_mobile')
    // block.src = 'images/paleolitBlock1.svg'
    block.src = links[Math.floor(links.length * Math.random())]
    block.alt = 'фоновый элемент'

    // Размер в vw для адаптивности, диапазон 2–5 vw
    let size = Math.random() * 20 + 2

    block.style.cssText = `
      width: ${size}vw;
      height: ${size}vw;
      position: absolute;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 6}s;
      z-index: 1;
      pointer-events: none;
    `

    container.appendChild(block)
  }
}
function createBlocks() {
  let container = document.querySelector('.paleolit')
  let blockCount = 20

  let links = [
    'images/paleolitBlock1.svg',
    'images/paleolitBlock2.svg',
    'images/paleolitBlock3.svg'
  ]

  for (let i = 0; i < blockCount; i++) {
    let block = document.createElement('img')
    block.classList.add('paleolit_block')
    // block.src = 'images/paleolitBlock1.svg'
    block.src = links[Math.floor(links.length * Math.random())]
    block.alt = 'фоновый элемент'

    // Размер в vw для адаптивности, диапазон 2–5 vw
    let size = Math.random() * 3 + 2

    block.style.cssText = `
      width: ${size}vw;
      height: ${size}vw;
      position: absolute;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 6}s;
      z-index: 1;
      pointer-events: none;
    `

    container.appendChild(block)
  }
}

// _______________________бургер-меню_______________________
function burgerMenu() {
  let burger = document.querySelector('#burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}
