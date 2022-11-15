let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber + " " + answerNumberText(answerNumber) }?`;

// Код кнопки «Заново»
// При нажатии «Заново»:
// Запрашивается значение максимума и минимума.
// Сбрасывается количество вопросов.
// Пересчитывается answerNumber.
// Тексты меняются на соответствующие началу игры.
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber} ${answerNumberText(answerNumber) }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            // Создание разных вариантов текста
            const phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase = ``;
            switch(phraseRandom){
                case 0: 
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Я проиграл..\n\u{1F974}`;
                    break;
                case 3:
                    answerPhrase = `Запутался...\n\u{1F975}`;
                    break;
            }
            // const answerPhrase = (phraseRandom === 1) ?
            //     `Вы загадали неправильное число!\n\u{1F914}` :
            //     `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber} ${answerNumberText(answerNumber) }?`;
        }
    }
})

// Код кнопки «Меньше»
// Код для кнопки «Меньше» пишется по аналогии с кодом кнопки «Больше», 
// только происходит изменение не нижней, а верхней границы поискового диапазона.
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            // Создание разных вариантов текста
            const phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase = ``;
            switch(phraseRandom){
                case 0: 
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Я проиграл..\n\u{1F974}`;
                    break;
                case 3:
                    answerPhrase = `Запутался...\n\u{1F975}`;
                    break;
            }
            // const answerPhrase = (phraseRandom === 1) ?
            //     `Вы загадали неправильное число!\n\u{1F914}` :
            //     `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber} ${answerNumberText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})


// Описание формирования текстового представления числа на русском языке
function answerNumberText(answerNumber){
    let sotni = ["", "сто", "двести", "триста", "четыреста", "пятсот", "шестсот", "семсот", "восемсот", "девятсот"];
    let desatki = ["", "надцать", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let edinici = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    

    let s = d = e = "";
    let n = answerNumber + "";

    if(n >= 100) s = sotni[n[n.length-3]] + " ";
    else s = "";

    if(n >= 10) d = desatki[n[n.length-2]] + " ";
    else d = "";
                
    e = edinici[n[n.length-1]];

    if (n >= 11 && n <= 19) 
        return s + e + d;
    else 
        return s + d + e;
}