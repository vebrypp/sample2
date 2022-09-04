document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
    const starsNumb = 1;

    for(let i = 0; i < starsNumb; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        background.append(star);
    };

    const stars = document.querySelectorAll('.star');
    stars.forEach(function(i) {
        loop();
        function loop() {
            const time = 3000;
            // const time = Math.round(Math.random() * 2000 + 3000);

            setTimeout(function() {
                const top = Math.round(Math.random() * window.innerHeight - window.innerHeight / 3);
                const left = Math.round(Math.random() * window.innerWidth - window.innerWidth/ 3);
                i.style.top = top + 'px';
                i.style.left = left + 'px';
                loop();
            }, time);
        };
    });
});