window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if(preloader) setTimeout(() => { preloader.style.display = 'none'; }, 500);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if(hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
});

const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if(backBtn) backBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
if(backBtn) backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const counters = document.querySelectorAll('.counter');
let started = false;
function startCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = +counter.innerText;
            const increment = target / 80;
            if(count < target) {
                count = Math.ceil(count + increment);
                counter.innerText = count;
                setTimeout(updateCount, 20);
            } else counter.innerText = target;
        };
        updateCount();
    });
}
const statsSection = document.querySelector('.stats');
if(statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !started) { started = true; startCounters(); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        if(!name || !email || !subject || !message) {
            formMessage.innerHTML = '<p style="color:red;">All fields are required.</p>';
            return;
        }
        if(!email.includes('@') || !email.includes('.')) {
            formMessage.innerHTML = '<p style="color:red;">Enter a valid email address.</p>';
            return;
        }
        formMessage.innerHTML = '<p style="color:green;">✅ Thank you! We will get back to you soon.</p>';
        contactForm.reset();
        setTimeout(() => { formMessage.innerHTML = ''; }, 4000);
    });
}

const fadeElements = document.querySelectorAll('.intro-card, .service-item, .why-card, .testimonial-card, .team-member');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -30px 0px" };
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);
fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    appearOnScroll.observe(el);
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(navbar) navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 12px rgba(0,0,0,0.08)' : '0 2px 15px rgba(0,0,0,0.02)';
});