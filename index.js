document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#main');

    for (let i = 1; i <= 25; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        div.addEventListener('click', function() {
            const audio = new Audio(`files/${i}.mp3`);
            audio.play();
        });
        grid.appendChild(div);
    }
});1