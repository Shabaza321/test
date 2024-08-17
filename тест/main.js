// const regExp = /Регулярные выражения/

// const containsOnlyDigits = (str) => {
//     return // Ваш код
// }

// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false

setInterval(() => {
    console.log("прошла секунда")
}, 1000);

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//     }, 1000)
// }

// if (i >= 10){
//     i = 1
// }

function containsOnlyDigits(regExp) {
    return /^\d+$/.test(regExp);
}


console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

const count = () => {
    let i = 1;
    // Устанавливаем интервал в 1000 миллисекунд (1 секунда)
    const interval = setInterval(() => {
        console.log(i);
        i++;
        // Если i больше 10, останавливаем интервал
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

const myDiv = document.getElementById('block');
const colorButton = document.getElementById('btn');

colorButton.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    myDiv.style.backgroundColor = '#' + randomColor;
});