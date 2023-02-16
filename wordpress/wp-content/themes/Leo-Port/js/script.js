// Mobile nav

const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.main-nav-list');
const navCon = document.querySelector('.main-nav-con');
const navLogo = document.querySelector('.logo-con');
const secNav = document.querySelector('.sec-nav-list');

const activeNav = () => {
    hamburgerBtn.addEventListener('click', showNavMenu);

    function showNavMenu() {
        navMenu.classList.toggle('menu-active');
        hamburgerBtn.classList.toggle('menu-active');
        navLogo.classList.toggle('menu-active');
        navCon.classList.toggle('menu-active');
    }
};

activeNav();

// update nav upon clicking nav item

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link' || 'sec-nav-link')) {
        if (event.target.hash !== '') {
            const hash = event.target.hash;
            console.log(event.target.hash);
            // deactivate mobile nav upon clicking item
            $('.menu-active').removeClass('menu-active');

            // update nav based on item clicked
            navMenu.querySelector('.active-nav').classList.remove('active-nav');
            secNav.querySelector('.active-nav').classList.remove('active-nav');

            let activeNavLink = document.querySelectorAll(event.target.hash + 'Link');

            activeNavLink.forEach((link) => {
                link.classList.add('active-nav');
            });
        }
    }
});

// switch colours for dark section(s)

const aboutSection = document.querySelector('#about');
const dark = document.querySelectorAll('.dark');
var body = document.querySelector('body');

const darkSectionOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25,
};

const darkSectionObserver = new IntersectionObserver(function (
    entries,
    darkSectionObserver
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            body.classList.remove('dark-section-active');
        } else {
            body.classList.add('dark-section-active');
        }
    });
},
darkSectionOptions);

dark.forEach((dark) => {
    darkSectionObserver.observe(dark);
});

// animations

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

function onLoadAnimation() {
    if (!document.cookie.split('; ').find((row) => row.startsWith('onLoadAnimation'))) {
        document.cookie = 'onLoadAnimation=true;';

        $('.load-con').append(`
            <div class="loadani-con">
                <div class="logo-svg-con">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 841.89 595.28"
                        xml:space="preserve">
                        
                        <path
                            d="M208.45,269.2c-26.86-15.13-47.12-40.02-55.93-69.63c-8.67-29.15-5.73-61.04,8.28-88.05 c28.75-55.47,98.22-79.49,154.95-52.94c7.06,3.3,13.81,7.34,20.62,11.12c12.97,7.21,25.95,14.42,38.92,21.62 c36.53,20.29,73.06,40.59,109.59,60.88c26.16,14.53,52.32,29.07,78.48,43.6c13.98,7.77,28.78,12.85,45,12.57 c28.3-0.49,54.91-16.08,69.09-40.59c13.88-24,14.46-54.01,1.62-78.57c-13.01-24.87-38.76-41.53-66.75-43.36 c-27.87-1.82-55.34,11.29-71.53,34.02c-3.52,4.93-6.33,10.34-9.26,15.63c-11.97,21.54-23.93,43.08-35.9,64.61 c-19.28,34.71-38.56,69.41-57.85,104.12c-20.83,37.49-41.66,74.99-62.49,112.48c-16.86,30.35-33.72,60.7-50.59,91.05 c-7.12,12.81-14.15,25.69-21.36,38.45c-14.38,25.45-41.83,41.27-71.15,40.33c-31.25-1.01-59.59-21.36-70.64-50.59 c-10.83-28.66-3.62-61.82,18.14-83.4c21.68-21.5,55.01-28.48,83.48-17.38c7.93,3.09,15.36,7.71,22.79,11.84 c12.85,7.14,25.71,14.28,38.56,21.42c36.65,20.36,73.3,40.72,109.96,61.09c26.12,14.51,52.24,29.02,78.36,43.53 c14.23,7.91,29.1,13.96,45.33,16.35c27.7,4.08,56.42-1.62,80.43-16.05c50.34-30.25,71.85-94.53,50-149 c-10.37-25.84-29.4-47.24-53.63-60.88c-1.68-0.95-3.2,1.64-1.51,2.59c26.86,15.13,47.12,40.02,55.93,69.63 c8.67,29.15,5.73,61.04-8.28,88.05c-28.75,55.47-98.22,79.49-154.95,52.94c-7.06-3.3-13.81-7.34-20.62-11.12 c-12.97-7.21-25.95-14.42-38.92-21.62c-36.53-20.29-73.06-40.59-109.59-60.88c-26.16-14.53-52.32-29.07-78.48-43.6 c-13.98-7.77-28.78-12.85-45-12.57c-28.3,0.49-54.91,16.08-69.09,40.59c-13.88,24-14.46,54.01-1.62,78.57 c13.01,24.87,38.76,41.53,66.75,43.36c27.87,1.82,55.34-11.29,71.53-34.02c3.52-4.93,6.33-10.34,9.26-15.63 c11.97-21.54,23.93-43.08,35.9-64.61c19.28-34.71,38.56-69.41,57.85-104.12c20.83-37.49,41.66-74.99,62.49-112.48 c16.86-30.35,33.72-60.7,50.59-91.05c7.12-12.81,14.15-25.69,21.36-38.45c14.38-25.45,41.83-41.27,71.15-40.33 c31.25,1.01,59.59,21.36,70.64,50.59c10.83,28.66,3.62,61.82-18.14,83.4c-21.68,21.5-55.01,28.48-83.48,17.38 c-7.93-3.09-15.36-7.71-22.79-11.84c-12.85-7.14-25.71-14.28-38.56-21.42c-36.65-20.36-73.3-40.72-109.96-61.09 c-26.12-14.51-52.24-29.02-78.36-43.53c-14.23-7.91-29.1-13.96-45.33-16.35c-27.7-4.08-56.42,1.62-80.43,16.05 c-50.34,30.25-71.85,94.53-50,149c10.37,25.84,29.4,47.24,53.63,60.88C208.62,272.74,210.14,270.15,208.45,269.2L208.45,269.2z"
                        />
                    </svg>
                </div>
            </div>
        `);

        tl.to('.logo-svg-con', { y: '-30%', opacity: 0, duration: 0.3, delay: 1.7 });
        tl.to('.loadani-con', { opacity: 0, duration: 0.3 });
    }
}

onLoadAnimation();

tl.to('.logo-con', { y: '0%', opacity: '1', duration: 0.5 });
tl.to('.intro-first', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });
tl.to('.intro-sec', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });
tl.to('.intro-sub', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });
tl.to('.intro-img-con', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });
tl.to('.contact-icon-con', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });
tl.to('.main-nav-item', { y: '0%', opacity: '1', duration: 0.5, stagger: 0.04 });

// skew on scroll

const section = document.querySelector('.section-containers');
let currentPixel = window.pageYOffset;

//looper keeps running and keeps track of where the new pixel is
const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff * 0.15;

    section.style.transform = 'skewY(' + speed + 'deg)';

    currentPixel = newPixel;

    requestAnimationFrame(looper);
};

looper();

// change nav when scrolled
const navLogoSvg = document.querySelector('.logo-svg');

const homeSection = document.querySelector('#home');
const homeObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: '.75',
};

const homeObserver = new IntersectionObserver(function (entries, homeObserverOptions) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            secNav.classList.remove('hidden-nav');
            navMenu.classList.add('main-hidden-nav');
            navLogoSvg.classList.add('main-hidden-nav');
        } else {
            secNav.classList.add('hidden-nav');
            navMenu.classList.remove('main-hidden-nav');
            navLogoSvg.classList.remove('main-hidden-nav');
        }
    });
}, homeObserverOptions);

homeObserver.observe(homeSection);

const sections = document.querySelectorAll('.section');

const sectionObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, sectionObserverOptions);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelectorAll('.nav-link.active-nav');
    const shouldBeActive = document.querySelectorAll('#' + id + 'Link');

    if (currentlyActive) {
        currentlyActive.forEach((active) => {
            active.classList.remove('active-nav');
        });
    }
    if (shouldBeActive) {
        shouldBeActive.forEach((active) => {
            active.classList.add('active-nav');
        });
    }
}

// change nav style futher based on section
const aboutTl = gsap.timeline({ defaults: { ease: 'power1.out' } });
const aboutCon = document.querySelector('.about-con');

const aboutNavObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.6,
};

const aboutNavObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            secNav.classList.add('dark-nav');
        } else {
            secNav.classList.remove('dark-nav');
        }
    });
}, aboutNavObserverOptions);

aboutNavObserver.observe(aboutCon);

// animate about section

const aboutFadeObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3,
};

const aboutFadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aboutTl.to('.about-header', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
            aboutTl.to('.about-content', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
            aboutTl.to('.about-cards-con', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
        }
    });
}, aboutFadeObserverOptions);

aboutFadeObserver.observe(aboutSection);

// change cta btn depending on section
const contactTl = gsap.timeline({ defaults: { ease: 'power1.out' } });
const contactSection = document.querySelector('#contact');

const contactObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25,
};

const contactObserver = new IntersectionObserver(function (
    entries,
    contactObserverOptions
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            document.querySelector('.back-to-top').classList.add('hidden-cta');
            document.querySelector('.contact-cta-btn').classList.remove('hidden-cta');
        } else {
            document.querySelector('.contact-cta-btn').classList.add('hidden-cta');
            document.querySelector('.back-to-top').classList.remove('hidden-cta');

            contactTl.to('#contact', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
        }
    });
},
contactObserverOptions);

contactObserver.observe(contactSection);

// Work observer
const workTl = gsap.timeline({ defaults: { ease: 'power1.out' } });

const workSection = document.querySelector('#work');

const workFadeObserverOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
};

const workFadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            workTl.to('.work-header', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
            workTl.to('.work-cards-con', {
                y: '0%',
                opacity: '1',
                duration: 0.6,
                stagger: 0.025,
            });
        }
    });
}, workFadeObserverOptions);

workFadeObserver.observe(workSection);

// parrallax imgs

var rellax = new Rellax('.rellax', {
    center: true,
});

// work modal functionality

var projects = [
    {
        id: 101,
        function: function () {
            workModalCon.innerHTML =
                `   
            <div class="project-con">
            <div class="project-slider"></div>

            <h2 class="work-modal-subtitle">Indigo</h2>
            <h2 class="work-modal-title">Indie Music Festival</h2>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ticketGrid.png"
                    alt="Tickets"
                    class="work-hero-img work-img-one rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Overview</h2>
    
                <p class="work-section-body">
                    The aim of the project was the create a brand and assisting collateral to
                    be used in the scenario that this were a real event. The problems I faced
                    while completing the project was finding a way to tie in the feel of the
                    "indie" genre and make it visual. The colours I used were a deep, warm
                    Orange, and a soft blue, in a way showing the vast differences within the
                    genre. While the "gritty" drop shadow to show how a lot of artists within
                    the genre started, through messing around at home on their laptop without
                    all the tech.
                </p>
            </div>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/PosterMUgrid.jpg"
                    alt="Posters"
                    class="work-hero-img work-img-two rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Experience</h2>
    
                <p class="work-section-body">
                    This is one of my favourite projects from my time as a design student. It
                    taught me so much about consistency across different deliverables, and new
                    tools within the design suite. This project was created during New
                    Zealands Covid lockdown, so this will always stick with me as a reminder
                    of what I can achieve under alot of stress.
                </p>
            </div>
    
            <div class="work-gals-con">
                <div class="work-gal">
                    <div class="work-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/Tshirt1v2.jpg"
                            alt="Work thumbnail"
                            class="gal-img work-emblem rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
    
                <div class="work-gal">
                    <div class="work-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/Badges.png"
                            alt="Work thumbnail"
                            class="gal-img work-lanyards rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
    
                <div class="work-gal">
                    <div class="work-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/Wristbands.jpg"
                            alt="Work thumbnail"
                            class="gal-img work-bands rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
    
                <div class="work-gal">
                    <div class="work-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/Tshirt1.jpg"
                            alt="Work thumbnail"
                            class="gal-img work-t rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
            </div>
    
            <div class="work-modal-footer dark" onclick="projects[1].function(); nextProject();">
                <h2 class="modal-footer-header">Next Project</h2>
    
                <div class="next-btn-con">
                    <div class="next-btn">
                        <span></span>
                    </div>
                </div>
            </div>
            </div>`;
        },
    },
    {
        id: 102,
        function: function () {
            workModalCon.innerHTML =
                `<div class="project-con">
                <div class="project-slider"></div>
                <h2 class="work-modal-subtitle">Kitten Inn</h2>
            <h2 class="work-modal-title">Not for Profit Org</h2>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-desktopCards.jpg"
                    alt="Kitten Inn Desktop"
                    class="work-hero-img ki-desktopCards rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Overview</h2>
    
                <p class="work-section-body">
                    The aim of the project was to create a new website for a non-profit org
                    that needed a new look. I decided to keep the overall look of the site
                    simple to ensure the user was able to easily navigate through to ensure
                    they found what they were looking for. I chose to use a soft green colour
                    to give the site a calming and natural feel.
                </p>
            </div>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-mobileCards.jpg"
                    alt="Kitten Inn Mobile Cards"
                    class="work-hero-img ki-mobileCards rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Experience</h2>
    
                <p class="work-section-body">
                    This was my first project working with WordPress. The brief required me to
                    create a custom theme that allowed the user to change info where needed
                    and manage the site without future input from the developer. I created
                    reusable features, and customization features to fit this section of the
                    brief.
                </p>
            </div>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-desktopHome.jpg"
                    alt="Kitten Inn Home Desktop"
                    class="work-hero-img ki-homeDT rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-gals-con ki-gal">
                <div class="ki-gal-con">
                    <div class="ki-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-mobileHome.jpg"
                            alt=""
                            class="ki-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
    
                    <div class="ki-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-mobileAdopt.jpg"
                            alt=""
                            class="ki-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
    
                    <div class="ki-gal-img-con">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/ki-mobileAbout.jpg"
                            alt=""
                            class="ki-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
            </div>
    
            <div class="work-modal-footer dark"onclick="projects[2].function(); nextProject();">
                <h2 class="modal-footer-header">Next Project</h2>
    
                <div class="next-btn-con">
                    <div class="next-btn">
                        <span></span>
                    </div>
                </div>
            </div>
            </div>`;
        },
    },
    {
        id: 103,
        function: function () {
            workModalCon.innerHTML =
                `
            <div class="project-con">
            <div class="project-slider"></div>
            <h2 class="work-modal-subtitle">New Look</h2>
            <h2 class="work-modal-title">Clothing Marketplace</h2>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/nl-homeCards.jpg"
                    alt="New Look Home cards"
                    class="work-hero-img nl-homeCards rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Overview</h2>
    
                <p class="work-section-body">
                    The aim of this project was to work in a group and create a functional
                    marketplace similar to Facebook marketplace to fill a specific niche. We
                    chose a clothing store to make “thrift shopping” easier for consumers to
                    be greener. My part in this project was the create the backend for the
                    login/signup, creating clothing posts, commenting on posts and some CSS to
                    tie everything together.
                </p>
            </div>
    
            <div class="work-hero-img-con">
                <img
                    src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/nl-postCards.jpg"
                    alt="Kitten Inn Mobile Cards"
                    class="work-hero-img nl-postCards rellaxModal"
                    data-rellax-speed="-2"
                />
            </div>
    
            <div class="work-modal-section">
                <h2 class="work-section-header">Experience</h2>
    
                <p class="work-section-body">
                    I really enjoyed this project as it was my first time working Node.js
                    express, and MongoDB. I found it enjoyable learning them, and creating
                    something that users can add to. I also enjoyed working within a group, it
                    felt very natural and we were able to get a lot of work done in a short
                    period of time.
                </p>
            </div>
    
            <div class="work-gals-con nl-gal">
                <div class="nl-gal-con">
                    <div class="nl-gal-img-con lg-gal">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/nl-desktopFull.jpg"
                            alt=""
                            class="nl-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
    
                    <div class="nl-gal-img-con md-gal">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/nl-tabletFull.jpg"
                            alt=""
                            class="nl-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                    <div class="nl-gal-img-con sm-gal">
                        <img
                            src="` +
                phpEcho +
                `/wp-content/themes/Leo-Port/img/nl-mobileFull.jpg"
                            alt=""
                            class="nl-gal-img rellaxModal"
                            data-rellax-speed="-2"
                        />
                    </div>
                </div>
            </div>
    
            <div class="work-modal-footer dark"onclick="projects[0].function(); nextProject();">
                <h2 class="modal-footer-header">Next Project</h2>
    
                <div class="next-btn-con">
                    <div class="next-btn">
                        <span></span>
                    </div>
                </div>
            </div>
            </div>`;
        },
    },
    // {
    //     id: 104,
    //     function: function () {
    //         workModalCon.innerHTML = 'this also works too x4';
    //     },
    // },
];

function allProjects() {
    var i = 0;
    for (i = 0; i < projects.length; i++) {
        projectModal();
    }
}

function nextProject() {
    const nextProjectBtn = document.querySelector('.work-modal-footer');
    const npTL = gsap.timeline({ defaults: { ease: 'power1.out' } });

    nextProjectBtn.addEventListener('click', function () {
        window.scrollTo(0, 0);

        setTimeout(function () {
            npTL.to('.project-slider', {
                x: '-115%',
                duration: 1,
                skewX: -5,
                skewY: 0,
            });

            npTL.to('.project-con', {
                opacity: 1,
                duration: 0.3,
            });

            var rellax = new Rellax('.rellaxModal', {
                center: true,
            });
        }, 300);
    });
}

const workCards = document.querySelectorAll('.work-card');
const workModal = document.querySelector('.work-modal');
const workModalCon = document.querySelector('.work-modal-con');

const Worktl = gsap.timeline({ defaults: { ease: 'power1.out' } });

var projectModal = function () {
    workCards.forEach((card) => {
        card.addEventListener('click', function () {
            var i = 0;

            for (i = 0; i < projects.length; i++) {
                if (parseInt(this.id) === projects[i].id) {
                    projects[i].function();
                    var rellax = new Rellax('.rellaxModal', {
                        center: true,
                    });
                }
            }

            workModal.classList.remove('hidden');

            nextProject();

            window.scrollTo(0, 0);

            setTimeout(function () {
                rellax.refresh();
            }, 1000);

            Worktl.to('.contact-icon-con', {
                opacity: 0,
                duration: 0.3,
            });

            Worktl.to('.hamburger-btn', {
                opacity: 0,
                duration: 0.3,
            });

            Worktl.to('.work-modal-slider', {
                x: '-115%',
                duration: 1,
                skewX: -5,
                skewY: 0,
            });

            Worktl.to('.work-modal-con', { opacity: 1, duration: 0.3 });

            Worktl.to('.work-modal-header', {
                opacity: 1,
                duration: 0.3,
            });

            Worktl.to('.project-con', {
                opacity: 1,
                duration: 0.3,
            });

            Worktl.to('.main-nav-con', {
                opacity: 0,
                duration: 0.3,
            });

            Worktl.to('.section-containers', {
                opacity: 0,
                duration: 0.3,
            });

            Worktl.to('.contact-cta-btn, .back-to-top', {
                opacity: 0,
                duration: 0.3,
            });

            Worktl.to('.modal-to-top-con', {
                opacity: 1,
                duration: 0.3,
            });

            workModal.classList.add('active');

            sections.forEach((section) => {
                section.classList.add('hidden');
            });

            secNav.classList.add('hidden-nav');
        });
    });
};

projectModal();

// skew work modal

// skew on scroll work modal

let workCurrentPixel = window.pageYOffset;

const workLooper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - workCurrentPixel;
    const speed = diff * 0.15;

    workModalCon.style.transform = 'skewY(' + speed + 'deg)';

    workCurrentPixel = newPixel;

    requestAnimationFrame(workLooper);
};

workLooper();

//close modal

const closeModalBtn = document.querySelector('.close-btn-con');

function closeModal() {
    closeModalBtn.addEventListener('click', function () {
        window.scrollTo(0, 0);

        Worktl.to('.modal-to-top-con', {
            opacity: 0,
            duration: 0.3,
        });

        Worktl.to('.work-modal-slider', {
            x: '115%',
            duration: 1,
            skewX: 5,
            skewY: 0,
        });

        Worktl.to('.work-modal-header', {
            opacity: 0,
            duration: 0.3,
        });

        setTimeout(function () {
            workModal.classList.add('hidden');
        }, 1000);

        setTimeout(function () {
            rellax.refresh();
        }, 1000);

        rellax.destroy();

        Worktl.to('.work-modal-con', { opacity: 0, duration: 0.3 });

        Worktl.to('.main-nav-con', {
            opacity: 1,
            duration: 0.3,
        });

        Worktl.to('.section-containers', {
            opacity: 1,
            duration: 0.3,
        });

        Worktl.to('.contact-icon-con', {
            opacity: 1,
            duration: 0.3,
        });

        Worktl.to('.contact-cta-btn, .back-to-top', {
            opacity: 1,
            duration: 0.3,
        });

        Worktl.to('.hamburger-btn', {
            opacity: 1,
            duration: 0.3,
        });

        workModal.classList.remove('active');

        sections.forEach((section) => {
            section.classList.remove('hidden');
        });

        secNav.classList.remove('hidden-nav');
    });
}

closeModal();
