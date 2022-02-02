const chat = document.getElementById('chat');
const burbuja = document.getElementById('burbuja');

burbuja.addEventListener('click', () => {
    chat.classList.toggle('open');
});
