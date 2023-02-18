const shuffleBtn = document.querySelector('.shuffle-btn');
const addTextBtn = document.querySelector('.add-text-btn');
const imgDisplay = document.querySelector('.img-display');
const paragraph = document.querySelector('.paragraph');
const find = document.querySelector('.find');
const replaceWith = document.querySelector('.replace-with');
const replaceBtn = document.querySelector('.replace');

let images = [
            'images/00wednesday-dance-superJumbo.jpg', 
            'images/jenna.jpg', 
            'images/piranha.jpg',
            'images/wednesday-family.jpg',
            'images/tylerXwednesday.jpg'
            ];

let charCount = 0;

function shuffleImg() {
    if (images.length > 0) {
        const getRandomImg = images[Math.floor(Math.random()*images.length)];
        imgDisplay.src = getRandomImg;
        images = images.filter(img => getRandomImg !== img);
    }   
}

function appendText() {
    if (charCount <= 1000) {
        let input = document.getElementById('input-text').value;
        paragraph.textContent += ` ${input}`;
        charCount += input.length;   
        document.getElementById('input-text').value = '';   
    }
}

function findAndReplace() {
    let paragraph2 = document.querySelector('.center-par').textContent.split(' ');
    for (let i = 0; i < paragraph2.length; i++) {
        if (paragraph2[i] === find.value) {
            paragraph2[i] = replaceWith.value;
        }
    }
    find.value = '';
    replaceWith.value = '';
    document.querySelector('.center-par').textContent = paragraph2.join(' ');
}

shuffleBtn.addEventListener('click', () => shuffleImg());

addTextBtn.addEventListener('click', () => appendText());

replaceBtn.addEventListener('click', () => findAndReplace());