/* ============================================================
   Gyetvai György – Webfejlesztő · interakciók
   ============================================================ */

const header = document.querySelector('.header');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section[id]');

/* ----- Mobil menü ----- */
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/* menü bezárása linkre kattintáskor */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/* ----- Sticky header + aktív nav scrollnál ----- */
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 60);

    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

/* ----- Scroll reveal animáció ----- */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(i % 4) * 90}ms`;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ----- Gépelő szövegrotátor ----- */
const rotator = document.querySelector('.rotator');
if (rotator) {
    const words = rotator.dataset.words.split('|');
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = false;

    const type = () => {
        const word = words[wordIndex];
        rotator.textContent = word.substring(0, charIndex);

        if (!deleting && charIndex < word.length) {
            charIndex++;
            setTimeout(type, 90);
        } else if (!deleting && charIndex === word.length) {
            deleting = true;
            setTimeout(type, 1800);
        } else if (deleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 45);
        } else {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 350);
        }
    };
    setTimeout(type, 2000);
}

/* ----- Aktuális év a footerben ----- */
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ============================================================
   ANIMÁCIÓS RÉTEG
   ============================================================ */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ----- Scroll progress bar ----- */
const progressBar = document.querySelector('#scroll-progress');
const updateProgress = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    if (progressBar) progressBar.style.width = `${Math.min(scrolled * 100, 100)}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* ----- Particle háttér (hero canvas) ----- */
const canvas = document.querySelector('#particles');
if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    const resize = () => {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
        const count = Math.min(Math.floor(w / 14), 90);
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.8 + 0.6
        }));
    };

    const draw = () => {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 122, 69, 0.55)';
            ctx.fill();

            /* összekötő vonalak a közeli pontok között */
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x, dy = p.y - q.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(255, 59, 59, ${0.12 * (1 - dist / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
}

/* ----- Parallax orbs egérmozgásra ----- */
if (finePointer && !reduceMotion) {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    const home = document.querySelector('.home');
    if (home) {
        home.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            parallaxEls.forEach(el => {
                const depth = parseFloat(el.dataset.parallax);
                el.style.transform = `translate(${dx * depth * 6}px, ${dy * depth * 6}px)`;
            });
        });
    }
}

/* ----- 3D tilt a kártyákon ----- */
if (finePointer && !reduceMotion) {
    const tiltEls = document.querySelectorAll('.service-card, .portfolio-box, .home-img');
    tiltEls.forEach(el => {
        el.classList.add('tilt');
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform =
                `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-6px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateY(0)';
        });
    });
}

/* ----- Mágneses gombok ----- */
if (finePointer && !reduceMotion) {
    document.querySelectorAll('.btn, .back-top').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/* ----- Számláló animáció (stats) ----- */
const counters = document.querySelectorAll('.stat-num');
const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
};

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => countObserver.observe(c));
