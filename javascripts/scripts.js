burgerMenu()
createBlocks()
parallax()
windowIcon()
timeTracker()

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

function windowIcon() {
  let icons = document.querySelectorAll('.window-icon')

  icons.forEach((icon) => {
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

function burgerMenu() {
  let burger = document.querySelector('#burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}
