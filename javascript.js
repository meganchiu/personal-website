const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

console.log(window.location.origin)
form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/Users/megan.chiu/Documents/Coursework/block09/personal-website/success.html'
})
