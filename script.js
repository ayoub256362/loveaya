document.getElementById('surpriseBtn').addEventListener('click', function() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
    alert("I love you more each day ❤️");
});