// _________________рандомные штампы на фоне_________________
createBlocks()
createBlocksMobile()

// _________________эффект паралакса на фоне_________________
parallax()

// ______________изображения по движению пальца______________
imageElementMobile()

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
    'images/work18.png',
    'images/work19.png',
    'images/work20.png',
    'images/work21.png',
    'images/work22.png',
    'images/work23.png',
    'images/work24.png'
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

// _________________эффект паралакса на фоне_________________
function parallax() {
  let main = document.querySelector('.paleolit')

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth + 0.1) * 1
    let y = (event.clientY / window.innerHeight + 0.1) * 1

    main.style.transform = `translate(${x}vw, ${y}vw)`
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
