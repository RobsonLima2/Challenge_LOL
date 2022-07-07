const [ input1, input2] = document.querySelectorAll('input')
console.log(input1, input2)

const img = document.querySelector('.seta')
console.log(img)

function handleChange(){
    if (input1.value && input2.value.length >=8) {
        img.classList.remove('seta')
        img.classList.add('btnSeta')
    } else {
        img.classList.remove('btnSeta')
        img.classList.add('seta')
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)