const shuffleBtn = document.querySelector('.shuffle-btn');
const addTextBtn = document.querySelector('.add-text-btn');
const imgDisplay = document.querySelector('.img-display');
const paragraph = document.querySelector('.paragraph');

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

shuffleBtn.addEventListener('click', () => shuffleImg());

addTextBtn.addEventListener('click', () => {
    
    if (charCount <= 1000) {
        let input = document.getElementById('input-text').value;
        paragraph.innerHTML += input;
        charCount += input.length;   
        document.getElementById('input-text').value = '';   
    }
    
});