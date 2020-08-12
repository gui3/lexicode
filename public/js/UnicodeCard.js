class UnicodeCard {
  constructor (unicodeChar) {
    this.unicodeChar = unicodeChar
  }

  renderBig () {

  }

  renderSmall () {
    const card = document.createElement('div')
    card.classList.add('charBtn')

    let char = document.createElement('span')
    char.classList.add('char')
    char.appendChild(
      document.createTextNode(this.unicodeChar.getEscaped())
    )
    card.appendChild(char)

    let code = document.createElement('span')
    code.classList.add('code')
    code.appendChild(
      document.createTextNode(this.unicodeChar.codeStr)
    )
    card.appendChild(code)

    card.addEventListener('click', (e) => {
      alert(this.unicodeChar.getHtml())
    })

    return card
  }
}
