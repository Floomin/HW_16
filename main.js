function askQuestion(question, cAnswer, points) {
    let answer = prompt(question);
    if (answer !== null && answer.toLowerCase() == cAnswer.toLowerCase()) {
        return points;
    } else {
        return 0;
    }
}
function survey() {
    let tPoint = 0;

    tPoint += askQuestion('Скільки буде 2+2?', '4', 10);
    tPoint += askQuestion('Сонце встає на сході?', 'Так', 10);
    tPoint += askQuestion('Скільки буде 5 / 0?', 'Невизначенно', 10);
    tPoint += askQuestion('Якого кольору небо?', 'Сине', 10);
    tPoint += askQuestion('Яка правильна відповідь на головне питання життя, всесвіту та всього такого.', '42', 10);

    alert(`Ваш результат: ${tPoint} балів.`)
}

survey();