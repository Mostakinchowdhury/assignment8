let inc = document.getElementById('inc'),
  dec = document.getElementById('dec'),
  display = document.getElementById('display'),
  color = document.getElementById('color'),
  copy = document.getElementById('copy'),
  genaret = document.getElementById('genaret'),
  apply = document.getElementById('apply'),
  section = document.querySelector('section')

let color_value = '#',
  count = 0

function generate_color() {
  const hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  for (let h = 0; h < 6; h++) {
    let gi = Math.floor(Math.random() * hexa.length)
    color_value += hexa[gi]
  }
  color.value = color_value
  color.style.color = color_value
  color_value = '#'
}

async function copycolor() {
  try {
    if (!color.value) {
      alert('🚫 genaret color at first then you can copy')
      return
    }
    await navigator.clipboard.writeText(color.value)
    alert('✅ Color copy succesfull')
  } catch (error) {
    console.log('🚫 sorry fail to copy', error)
  }
}

function applycolor() {
  if (!color.value) {
    alert('🚫 genaret color at first then you can apply color')
    return
  }
  if (confirm('🎯 Do you want to appy on this page container?')) {
    section.style.backgroundColor = color.value
  } else {
    return
  }
}

function increment() {
  count++
  display.textContent = count
}
function decrement() {
  if (count >= 0) {
    alert("😊 counter cann't be a negative value")
  }
  count = Math.max(count - 1, 0)
  display.textContent = count
}
genaret.addEventListener('click', generate_color)
copy.addEventListener('click', copycolor)
apply.addEventListener('click', applycolor)
inc.addEventListener('click', increment)
dec.addEventListener('click', decrement)
