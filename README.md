# baran_culture

4 module final project

Модели ИИ, с которыми я работала: Яндекс ИИ "Алиса"
Части кода, сделанные при помощи ИИ:

1. ИИ помог разобраться, как прописывать включение и выключение окон для всех кнопок отдельно по окну

// **\*\***\_\_\_**\*\***включение/выключение окон**\*\***\_\_\_**\*\***
windowButton()

// **\*\***\_\_\_**\*\***включение/выключение окон**\*\***\_\_\_**\*\***
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
