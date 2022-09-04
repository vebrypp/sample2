document.addEventListener('DOMContentLoaded', function() {
    starFall(true);
    toggleHeader(true);

    function toggleHeader(e) {
        if(e) {
            const header = document.querySelector('.header');
            const togler =  header.querySelector('.header-toggle input');

            togler.addEventListener('change', function() {
                if(this.checked) {
                    if(header.classList.contains('hide')) return (header.classList.replace('hide', 'show'));
                    header.classList.add('show');
                } else {
                    header.classList.replace('show', 'hide');
                };
            });
        };
    };

    function starFall(e) {
        if(e) {
            const background = document.querySelector('.background');

            const starLen = 30;
            
            for(let i = 0; i < starLen; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                background.appendChild(star);
            };

            const stars = background.querySelectorAll('.star');

            stars.forEach(function(i) {

                const star = function() {
                    const randTime = Math.round(Math.random() * 2000);
                    setTimeout(function() {
                        moveStar();
                    }, randTime);
                };
                
                star();

                function moveStar() {
                    const top = Math.round(Math.random() * window.innerHeight);
                    const left = Math.round(Math.random() * window.innerWidth);
                    i.style.top = top + 'px';
                    i.style.left = left + 'px';
                    animateStar();
                };
                function animateStar() {
                    i.classList.toggle('animated');
                    setTimeout(function() {
                        i.classList.toggle('animated');
                        star();
                    }, 3000);
                };
            });
        };
    };
});