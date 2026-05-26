burgerMenu()
createBlocks()
parallax()
windowIcon()

function windowIcon() {
  let icons = document.querySelectorAll('.window-icon')

  icons.forEach((icon) => {
    // icon.addEventListener('click', () => {
    //   icons.forEach((otherIcon) => {
    //     otherIcon.classList.remove('active')
    //   })

    //   icon.classList.add('active')
    // })
    icon.addEventListener('click', () => {
      icon.classList.toggle('active')
    })
  })
}

function parallax() {
  let main = document.querySelector('.paleolit')

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth + 0.1) * 1
    let y = (event.clientY / window.innerHeight + 0.1) * 1

    main.style.transform = `translate(${x}vw, ${y}vw)`
  })
}

function createBlocks() {
  let container = document.querySelector('.paleolit')
  let blockCount = 20

  let links = ['images/paleolitBlock.svg', 'images/paleolitBlock.svg']

  for (let i = 0; i < blockCount; i++) {
    let block = document.createElement('img')
    block.classList.add('paleolit_block')
    block.src = 'images/paleolitBlock.svg'
    // block.src = links[Math.floor(links.length * Math.random() + 1)]
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

function burgerMenu() {
  let burger = document.querySelector('#burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}
