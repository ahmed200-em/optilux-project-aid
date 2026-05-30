document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector('#expertise');
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        
        observer.disconnect(); // Stops observing so it only animates once

        // 1. Expand Progress Bars
        document.querySelectorAll('.progress-bar-fill').forEach(fill => {
            fill.style.width = fill.dataset.target + '%';
        });

        // 2. Count up the Numbers (~1.5 seconds)
        document.querySelectorAll('.expertise-percent').forEach(text => {
            let target = +text.dataset.target, curr = 0;
            let timer = setInterval(() => {
                curr += target / 90; // 90 frames roughly equals 1.5s at 16ms per frame
                text.innerText = (curr >= target ? target : Math.ceil(curr)) + '%';
                if (curr >= target) clearInterval(timer);
            }, 16);
        });
    }, { threshold: 0.2 });

    observer.observe(section);
});