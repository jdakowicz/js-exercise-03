(function () {
  const transformer = window.transformer || {}

  const input = document.querySelector('[data-input]')
  const button = document.querySelector('[data-submit]')
  const result = document.querySelector('[data-result]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    const val = input.value
    if (!val.trim().length) {
      result.innerHTML = 'You must type at least 1 character.'
      return
    }
    const type = document.querySelector('[data-type]:checked').value

    if (transformer[type]) {
      result.innerHTML = transformer[type](val)
    } else {
      result.innerHTML = 'Transformer didn\'t found'
    }
  })
})()
