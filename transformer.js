(function () {
  function lowerUpper (text) {
    let newVal = ''
    for (let i = 0; i < text.length; i++) {
      newVal += text[i] === text[i].toUpperCase() ? text[i].toLowerCase() : text[i].toUpperCase()
    }
    return newVal
  }

  function snake (text) {
    let newVal = ''
    const textArray = text.toLowerCase().split(' ')
    for (let i = 0; i < textArray.length; i++) {
      if (i !== 0) {
        newVal += '_'
      }
      newVal += textArray[i]
    }
    return newVal
  }

  function camel (text) {
    let newVal = ''
    const textArray = text.toLowerCase().split(' ')
    for (let i = 0; i < textArray.length; i++) {
      if (i === 0) {
        newVal += textArray[i]
      } else {
        newVal += textArray[i][0].toUpperCase() + textArray[i].slice(1)
      }
    }
    return newVal
  }

  function swap (text) {
    let newVal = ''
    const textArray = text.split(' ')

    for (let i = textArray.length - 1; i >= 0; i--) {
      newVal += textArray[i] + ' '
    }
    return newVal.trim()
  }

  function backwards (text) {
    let newVal = ''

    for (let i = text.length - 1; i >= 0; i--) {
      newVal += text[i]
    }
    return newVal
  }

  function pokemon (text) {
    let newVal = ''

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newVal += text[i].toUpperCase()
      } else {
        newVal += text[i].toLowerCase()
      }
    }
    return newVal
  }

  function random (text) {
    let newVal = ''
    let tempText = text
    while (tempText.length) {
      const ran = Math.floor(Math.random() * tempText.length)
      newVal += tempText[ran]
      tempText = tempText.slice(0, ran) + tempText.slice(ran + 1)
    }
    return newVal
  }

  function oneMore (text) {
    let newVal = ''

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        newVal += String.fromCharCode(text[i].charCodeAt(text[i]) + 1)
      } else {
        newVal += text[i]
      }
    }
    return newVal
  }

  function oneLess (text) {
    let newVal = ''

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        newVal += String.fromCharCode(text[i].charCodeAt(text[i]) - 1)
      } else {
        newVal += text[i]
      }
    }
    return newVal
  }

  function seperate (text) {
    let newVal = ''

    for (let i = 0; i < text.length; i++) {
      newVal += ' ' + text[i]
    }

    return newVal.trim()
  }

  window.transformer = {
    lowerUpper,
    backwards,
    pokemon,
    swap,
    snake,
    camel,
    random,
    oneMore,
    oneLess,
    seperate
  }
})()
