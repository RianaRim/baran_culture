# baran_culture

4 module final project

Модели ИИ, с которыми я работала: Яндекс ИИ "Алиса"
Части кода, сделанные при помощи ИИ:

1. ИИ помог разобраться, как прописывать включение и выключение окон для всех кнопок отдельно по окну

// **\*\*\*\***\_**\*\*\*\***включение/выключение окон**\*\*\*\***\_**\*\*\*\***
windowButton()

//**\*\*\*\***\_\_**\*\*\*\***включение/выключение окон**\*\*\*\***\_\_**\*\*\*\***
function windowButton() {
document.addEventListener('DOMContentLoaded', function () {
let windowIcons = document.querySelectorAll('.window-icon')
let windows = document.querySelectorAll('[class^="window_"]')
let exitButtons = document.querySelectorAll('[class^="exit_"]')

    windowIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
        let targetWindow = document.querySelector(`.window_${index + 1}`)
        if (targetWindow) {
          targetWindow.style.display = 'block'
        }
      })
    })

    exitButtons.forEach((button) => {
      button.addEventListener('click', function () {
        let windowToClose = this.closest('[class^="window_"]')
        if (windowToClose) {
          windowToClose.style.display = 'none'
        }
      })
    })

})
}

2. ИИ помог разобраться, как синхронизировать звук и ползунок громкости

// **\*\*\*\***\_\_\_\_**\*\*\*\***ползунок звука**\*\*\*\***\_\_\_\_**\*\*\*\***
volumeControl()

// **\*\*\*\***\_\_\_\_**\*\*\*\***ползунок звука**\*\*\*\***\_\_\_\_**\*\*\*\***
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

3. ИИ помог разобраться, как положить изображения с разными подписями поверх окна с "проектами"

// \***\*\_\_\_\*\***выпадающее окно с изображением и надписью\***\*\_\_\_\*\***
modalWindowImg()

function modalWindowImg() {
document.addEventListener('DOMContentLoaded', modalWindowImg)
let thumbnails = document.querySelectorAll('[class^="imgInfo_"]')
let modal = document.querySelector('.modalImgWindow_1')
let modalImg = document.getElementById('modalImageSrc')
let captionP = document.getElementById('currentCaption')

modal.addEventListener('click', (e) => {
modal.style.display = 'none'
})

thumbnails.forEach((thumbnail) => {
thumbnail.addEventListener('click', (e) => {
e.preventDefault()
if (!modal || !modalImg || !captionP) return

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
}

4. ИИ помог разобраться, как заставить несколько изображений появляться по ховеру на кнопку с содержимым

// **\*\***\_**\*\***картинки по ховеру**\*\***\_**\*\***
hoverImage1()

// **\*\***\_**\*\***картинки по ховеру**\*\***\_**\*\***
function hoverImage1() {
document.addEventListener('DOMContentLoaded', function () {
let hoverScreen = document.querySelector('.hoverScreen_1')
let windowNames = document.querySelectorAll('#windowName_7')
let images = hoverScreen.querySelectorAll('.windowContent1')
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

5. ИИ помог разобраться, как по клику мышкой или пальцем в адаптированной версии сайта добавлять изображения на главный экран

// ******\_\_******изображения по движению пальца******\_\_******
imageElementMobile()

// **\*\***\_\_**\*\***изображения по движению пальца**\*\***\_\_**\*\***
function imageElementMobile() {
let mainScreen = document.querySelector('.mainScreen')

// Если главного экрана нет, выходим, чтобы не было ошибок
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
'images/work10.png'
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
