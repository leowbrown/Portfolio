<?php get_header(); ?>

<!-- on load animation -->
<div class="load-con"></div>

<div class="section-containers">
    <section id="home" class="section">
        <div class="home-con">
            <div class="intro-con">
                <h1 class="intro-header intro-first slideUp">Hello,</h1>
                <h2 class="intro-header intro-sec slideUp">I'm Leo</h2>
                <h2 class="intro-sub slideUp">Web & Graphic Designer.</h2>
            </div>

            <div class="intro-img-con slideUp">
                <img
                    src="<?php echo home_url(); ?>/wp-content/themes/Leo-Port/img/hero-img.svg"
                    alt=""
                />
            </div>
        </div>
    </section>

    <section id="about" class="section">
        <div class="about-con">
            <h2 class="about-header slideUp">About Me.</h2>

            <p class="about-content slideUp">
                I’m a creative living & working from Wellington, New Zealand. I have
                experience creating branding, packaging, infographics, and various Web
                projects. I’m quietly confident, curious and constantly pushing myself to
                learn new things within and sometimes outside my field.
            </p>

            <div class="about-cards-con slideUp">
                <div class="card-con">
                    <h2 class="about-subhead">Designer</h2>

                    <p class="about-card-content">
                        I enjoy creating branding with interesting texture and a striking
                        colour palette.
                    </p>

                    <p class="about-card-content about-card-subhead">
                        Stuff I enjoy working on:
                    </p>
                    <p class="about-card-content">Branding, Packaging, Event Design.</p>

                    <ul class="about-card-list">
                        <li class="about-card-subhead">Tools I use:</li>
                        <li class="about-card-content">Photoshop</li>
                        <li class="about-card-content">Illustrator</li>
                        <li class="about-card-content">inDesign</li>
                        <li class="about-card-content">After Effects</li>
                        <li class="about-card-content">Pen & Paper</li>
                        <li class="about-card-content">Pro Create</li>
                    </ul>
                </div>

                <div class="card-con">
                    <h2 class="about-subhead">Developer</h2>

                    <p class="about-card-content">
                        I love creating websites with small details and neat animations to
                        draw in the user.
                    </p>

                    <p class="about-card-content about-card-subhead">
                        Languages I speak:
                    </p>
                    <p class="about-card-content">HTML, CSS, Sass, Js, Php.</p>

                    <ul class="about-card-list">
                        <li class="about-card-subhead">Tools I use:</li>
                        <li class="about-card-content">Visual Studio Code</li>
                        <li class="about-card-content">Figma</li>
                        <li class="about-card-content">Bootstrap</li>
                        <li class="about-card-content">Github CLI</li>
                        <li class="about-card-content">Terminal</li>
                        <li class="about-card-content">CodePen</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="work" class="section .custom-element">
        <h2 class="work-header slideUp">My Work.</h2>
        <div class="work-cards-con slideUp">
            <div class="work-card" id="101">
                <div class="work-card-img-con">
                    <img
                        src="<?php echo home_url(); ?>/wp-content/themes/Leo-Port/img/PosterMUgrid.jpg"
                        alt="Work thumbnail"
                        class="work-img rellax"
                        data-rellax-speed="-3"
                    />
                </div>

                <h3 class="work-subheader">Indigo</h3>
                <p class="work-details">Branding - Event</p>
            </div>

            <div class="work-card" id="102">
                <div class="work-card-img-con">
                    <img
                        src="<?php echo home_url(); ?>/wp-content/themes/Leo-Port/img/ki-desktopCards.jpg"
                        alt="Work thumbnail"
                        class="work-img rellax"
                        data-rellax-speed="-3"
                    />
                </div>

                <h3 class="work-subheader">Kitten Inn</h3>
                <p class="work-details">Web Development</p>
            </div>

            <div class="work-card" id="103">
                <div class="work-card-img-con">
                    <img
                        src="<?php echo home_url(); ?>/wp-content/themes/Leo-Port/img/nl-homeCards.jpg"
                        alt="Work thumbnail"
                        class="work-img rellax"
                        data-rellax-speed="-3"
                    />
                </div>

                <h3 class="work-subheader">New Look</h3>
                <p class="work-details">Web Development - Group</p>
            </div>

            <!-- <div class="work-card" id="104">
                <div class="work-card-img-con">
                    <img
                        src="<?php echo home_url(); ?>/wp-content/themes/Leo-Port/img/PosterMUgrid.jpg"
                        alt="Work thumbnail"
                        class="work-img rellax"
                        data-rellax-speed="-3"
                    />
                </div>

                <h3 class="work-subheader">Indigo</h3>
                <p class="work-details">Branding - Event</p>
            </div> -->
        </div>
    </section>

    <section id="contact" class="dark section slideUp">
        <div class="contact-header-con">
            <h2 class="contact-header">Contact Me.</h2>
            <p class="contact-sub">
                I'm available for freelance and fulltime work, get in touch below!
            </p>
        </div>

        <?php

        echo do_shortcode('[wpforms id="6" title="false"]');

        ?>
    </section>
</div>

<div class="work-modal hidden">
    <div class="work-modal-slider"></div>
    <div class="modal-to-top-con">
        <a href="#" class="modal-to-top"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -4.5 24 24"
                width="28"
                height="28"
                preserveAspectRatio="xMinYMin"
                class="icon__icon"
            >
                <path
                    d="M6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0V4.07z"
                ></path>
            </svg>
        </a>
    </div>

    <div class="work-modal-header">
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 123.42 113.84"
            class="logo-svg"
        >
            <path
                class="cls-1"
                d="M370.1,282.25c-.66-.38-1.31-.77-1.94-1.2a8.33,8.33,0,0,0-1-.7s.75.61.34.26l-.52-.44c-.56-.48-1.09-1-1.6-1.5-.28-.28-1.56-1.34-1.55-1.75,0,0,.72,1,.17.22l-.29-.4c-.19-.27-.37-.54-.55-.82-.42-.64-.81-1.31-1.17-2l-.51-1-.2-.45c-.25-.49.21.45.19.45a10.34,10.34,0,0,1-.76-2.17c-.21-.67-.38-1.36-.53-2.06-.07-.37-.13-.75-.2-1.12-.16-.85.08,1,0-.14a27.42,27.42,0,0,1,0-4.44c0-.16.16-1.49.05-.65s.09-.49.12-.66c.15-.77.34-1.53.56-2.29s.47-1.39.71-2.09c.19-.52-.16.38-.17.4a4.1,4.1,0,0,0,.21-.48c.2-.42.4-.84.62-1.25.3-.57.62-1.13,1-1.67q.27-.45.57-.87l.3-.42c.45-.63.33-.2-.06,0a11.72,11.72,0,0,0,1.46-1.66c.54-.56,1.1-1.1,1.7-1.61.15-.13.89-.87.39-.35s.34-.24.56-.4q.94-.66,1.95-1.23c.62-.35,1.26-.66,1.9-1a2.84,2.84,0,0,1,.45-.2s-1,.37-.44.19.82-.31,1.23-.45c.67-.22,1.35-.42,2-.59q.48-.12,1-.21c.18,0,1.18-.09,1.29-.23,0,0-1.06.1-.51.08.16,0,.32,0,.48-.06l1.15-.08q1.15,0,2.31,0l1.15.08c.17,0,.33.05.5.06.56,0-.51-.08-.51-.08.74.22,1.55.27,2.3.46s1.42.39,2.11.63a5.49,5.49,0,0,0,1.13.41s-.91-.4-.4-.16l.63.29c4.22,2,8.24,4.52,12.33,6.79l22.65,12.58,16,8.91a22.63,22.63,0,0,0,11.94,3.18,21.47,21.47,0,1,0-18.22-33.75,32.64,32.64,0,0,0-2,3.37L423,261.27l-11.9,21.41-12.87,23.18-10.48,18.86c-1.5,2.7-3,5.42-4.5,8.11-.12.21-.24.42-.37.62-.21.35-.45.67-.67,1s.23-.31.26-.33a2.88,2.88,0,0,0-.44.53,16.2,16.2,0,0,1-1.55,1.55l-.38.33c-.73.62.22-.16.22-.17s-.83.56-1,.64a9.8,9.8,0,0,1-1.89,1s1.19-.45.28-.13l-.46.17c-.36.13-.73.25-1.1.35s-.74.19-1.12.26c-.19,0-1.28.22-.47.1s-.44,0-.65,0c-.44,0-.88,0-1.32,0l-1-.06c-1,0,.94.19,0,0a19.34,19.34,0,0,1-2.46-.64c-.18-.06-1.18-.49-.53-.18s-.53-.27-.66-.34c-.63-.33-1.21-.72-1.8-1.1-.78-.51.62.55-.08-.06-.3-.26-.6-.52-.88-.79s-.48-.48-.71-.73l-.33-.37c-.15-.18-.53-.93-.24-.28s-.15-.25-.28-.44-.41-.66-.59-1-.3-.59-.46-.88-.29-.23,0,0c.17.4.17.4,0,0l-.11-.3a18.47,18.47,0,0,1-.6-2.05c-.07-.32-.11-.65-.18-1-.12-.54.09.5.07.51s-.07-.72-.07-.82a15.43,15.43,0,0,1,0-2.15c0-.17,0-.33,0-.5,0-.56,0,.51-.07.5s.22-1.16.26-1.32c.17-.72.42-1.41.66-2.11.18-.52-.15.38-.17.39a1.7,1.7,0,0,0,.22-.47c.16-.32.32-.63.5-.94s.42-.7.64-1c.1-.14.21-.28.3-.43.29-.45-.23.31-.26.33.59-.37,1.09-1.25,1.61-1.74l.76-.67c.65-.55-.78.51.19-.11.65-.42,1.31-.8,2-1.16,1-.54-.64.19.17-.09.31-.11.61-.23.93-.33a18.58,18.58,0,0,1,2.23-.54c.88-.18-1.13.06.14,0l1-.05c.39,0,.77,0,1.16,0,.22,0,1.45.14.66,0s.42.08.66.13l1,.25c.39.11.76.23,1.14.37a1.75,1.75,0,0,0,.48.18c-.27,0-.84-.4-.24-.08,4.1,2.13,8.1,4.46,12.14,6.7l22.69,12.61,15.82,8.79a32.63,32.63,0,0,0,12.24,4,29.38,29.38,0,0,0,18.85-4.41c11.7-7.5,17.09-22.84,11.8-35.87a30.28,30.28,0,0,0-13.15-15.17,5,5,0,1,0-5,8.63c.65.37,1.3.77,1.93,1.19a7.31,7.31,0,0,0,1,.7s-.75-.61-.34-.25l.52.44a20.58,20.58,0,0,1,1.6,1.5c.28.28,1.56,1.34,1.55,1.75,0,0-.72-1-.17-.23.09.14.19.27.29.41s.38.54.56.82c.41.64.8,1.3,1.16,2,.18.34.35.69.51,1l.2.45c.25.5-.21-.44-.18-.44a11.25,11.25,0,0,1,.76,2.16c.2.68.37,1.37.52,2.06.08.38.14.75.21,1.13.15.84-.09-1,0,.13a28.62,28.62,0,0,1,.05,4.44c0,.17-.17,1.5-.06.66s-.09.49-.12.65c-.15.77-.33,1.54-.55,2.29s-.48,1.4-.72,2.1c-.19.52.17-.39.17-.4a4,4,0,0,0-.21.47c-.19.43-.4.85-.62,1.26-.3.57-.62,1.12-1,1.67l-.58.87-.3.42c-.45.62-.32.19.06-.06a11.58,11.58,0,0,0-1.45,1.66,21.82,21.82,0,0,1-1.71,1.62c-.15.13-.89.87-.39.34s-.34.25-.56.4q-.95.66-2,1.23c-.62.35-1.26.66-1.9,1,0,0-.42.23-.45.2s1-.36.44-.19l-1.23.45a20.66,20.66,0,0,1-2,.59l-1,.22a4.77,4.77,0,0,0-1.29.22s1.06-.1.52-.07l-.49.05c-.38,0-.77.06-1.15.08a22.25,22.25,0,0,1-2.31,0c-.38,0-.77,0-1.15-.08l-.5-.05c-.56,0,.51.07.51.07-.74-.22-1.55-.27-2.3-.45s-1.42-.39-2.11-.63a6.19,6.19,0,0,0-1.13-.42s.91.41.4.17l-.63-.29c-4.22-2-8.24-4.52-12.32-6.79L400.52,318l-16-8.91a22.73,22.73,0,0,0-11.94-3.18,21.47,21.47,0,1,0,18.22,33.75,31.81,31.81,0,0,0,2-3.36l7.35-13.23L412,301.64l12.88-23.17,10.47-18.86c1.5-2.7,3-5.42,4.51-8.11.12-.21.23-.42.36-.63s.46-.67.68-1-.24.31-.27.32a2.75,2.75,0,0,0,.44-.52,16.2,16.2,0,0,1,1.55-1.55l.38-.33c.73-.62-.22.16-.22.17s.83-.57,1-.65a9.92,9.92,0,0,1,1.88-1s-1.19.44-.28.12l.46-.17c.36-.13.73-.24,1.1-.34s.74-.19,1.12-.27c.19,0,1.28-.22.47-.09s.44,0,.65,0c.44,0,.88,0,1.32,0l1,.06c.95,0-.95-.19,0,0a20.63,20.63,0,0,1,2.46.63c.18.06,1.18.49.53.18s.53.28.66.35a20.6,20.6,0,0,1,1.8,1.1c.78.5-.62-.55.08.05.3.26.6.52.88.8s.48.47.71.72l.33.38c.15.17.53.92.24.28s.15.25.28.44.41.65.6,1,.3.59.45.88.29.22,0,0c-.16-.4-.16-.39,0,0l.11.31a16.06,16.06,0,0,1,.6,2.05c.07.32.11.65.18,1,.13.53-.09-.5-.06-.52a7,7,0,0,0,.07.83,17.16,17.16,0,0,1,0,2.15c0,.16,0,.33,0,.49,0,.57,0-.5.07-.5s-.22,1.17-.26,1.32a21.71,21.71,0,0,1-.66,2.12c-.17.52.15-.38.17-.4a1.91,1.91,0,0,0-.22.48c-.16.31-.32.62-.5.93s-.41.71-.64,1.05c-.1.14-.21.28-.3.42-.29.46.24-.31.26-.32-.59.36-1.08,1.25-1.61,1.74-.25.23-.5.44-.76.66-.65.56.78-.5-.18.12-.66.42-1.31.8-2,1.16-1,.54.64-.2-.16.09-.31.11-.62.23-.93.33a21.48,21.48,0,0,1-2.24.54c-.88.18,1.13-.06-.14,0-.33,0-.66.05-1,.05s-.77,0-1.16,0c-.22,0-1.45-.15-.66,0s-.42-.09-.65-.14-.66-.15-1-.25-.76-.23-1.14-.36a2.18,2.18,0,0,0-.48-.19c.27,0,.84.4.24.09-4.1-2.14-8.1-4.46-12.14-6.71l-22.69-12.6-15.82-8.79a32.7,32.7,0,0,0-12.24-4,29.3,29.3,0,0,0-18.84,4.42c-11.71,7.49-17.1,22.83-11.8,35.87a30.22,30.22,0,0,0,13.14,15.17,5,5,0,0,0,5.05-8.63Z"
                transform="translate(-349.86 -235.24)"
            />
        </svg>

        <div class="close-btn-con">
            <div class="close-btn">
                <span></span>
            </div>
        </div>
    </div>
    <div class="work-modal-con"></div>
</div>

<?php get_footer(); ?>

<script>
    const phpEcho = '<?php echo home_url(); ?>';
</script>
