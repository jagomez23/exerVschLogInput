console.log(document)

console.dir(document)


const input = document.querySelector('input');
const header = document.getElementById('text');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  console.log(e.target.value);
}