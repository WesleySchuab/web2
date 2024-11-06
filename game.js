// Variáveis para pontuação e perguntas
let score = 0;
let currentQuestion;
let currentAnswer;

// Função para começar o jogo
function startGame() {
    score = 0; // Zera a pontuação ao iniciar um novo jogo
    document.getElementById('score').textContent = score;
    document.querySelector('.difficulty').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    document.querySelector('.end-game').style.display = 'none';
    generateQuestion();
}

// Função para gerar perguntas com base na dificuldade selecionada
function generateQuestion() {
    const difficulty = document.getElementById('difficulty').value;
    let num1, num2, operator;

    // Define a dificuldade e o tipo de operações
    switch (difficulty) {
        case 'easy':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = '+';
            currentAnswer = num1 + num2;
            break;
        case 'medium':
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            operator = Math.random() > 0.5 ? '-' : '+';
            currentAnswer = operator === '+' ? num1 + num2 : num1 - num2;
            break;
        case 'hard':
            num1 = Math.floor(Math.random() * 30) + 1;
            num2 = Math.floor(Math.random() * 30) + 1;
            operator = Math.random() > 0.5 ? '*' : '/';
            currentAnswer = operator === '*' ? num1 * num2 : Math.floor(num1 / num2);
            break;
    }

    // Exibe a pergunta
    currentQuestion = `${num1} ${operator} ${num2}`;
    document.getElementById('question').textContent = currentQuestion;
}

// Função para verificar a resposta do jogador
function checkAnswer() {
    const playerAnswer = parseInt(document.getElementById('answer').value);

    if (playerAnswer === currentAnswer) {
        score++;
        document.getElementById('feedback').textContent = 'Correto!';
    } else {
        document.getElementById('feedback').textContent = 'Incorreto!';
    }

    document.getElementById('score').textContent = score;
    document.getElementById('answer').value = ''; // Limpa o campo de resposta

    if (score < 10) {
        generateQuestion(); // Gera nova pergunta até que o jogador alcance a pontuação desejada
    } else {
        endGame();
    }
}

// Função para finalizar o jogo e exibir a pontuação final
function endGame() {
    document.querySelector('.game').style.display = 'none';
    document.querySelector('.end-game').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

// Função para reiniciar o jogo
function restartGame() {
    document.querySelector('.difficulty').style.display = 'block';
    document.querySelector('.game').style.display = 'none';
    document.querySelector('.end-game').style.display = 'none';
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').textContent = '0';
}