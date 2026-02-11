
$(document).ready(function() {

$('.preloader').fadeOut();

/******************** AOS animation initialization ********************/

 AOS.init({
            mirror: false,
        });
        let scrollRef = 0;
        $(window).on("resize scroll", function () {
            scrollRef <= 10 ? scrollRef++ : AOS.refresh();
        });


/******************** FAQ Accordion JS ********************/

  $('.collapse').on('show.bs.collapse', function () {
  // Collapse all other open panels
  $('.collapse').not(this).collapse('hide');

  // Update aria-expanded attributes
  $('.collapsible-link').attr('aria-expanded', 'false'); // reset all
  $(this).prev().find('.collapsible-link').attr('aria-expanded', 'true'); // set current
});

$('.collapse').on('hide.bs.collapse', function () {
  // Set the aria-expanded to false when hiding
  $(this).prev().find('.collapsible-link').attr('aria-expanded', 'false');
});



/******************** Slick Slider Initialization ********************/

const duration = 4000; // 4 seconds
const circumference = 138.2;
let timer;

// Progress bar
function startProgress(index) {
  document.querySelectorAll('.progress-circle').forEach(circle => {
    circle.style.strokeDashoffset = circumference;
  });

  const circle = document.querySelectorAll('.progress-circle')[index];
  if (!circle) return;

  let offset = circumference;
  const step = circumference / (duration / 20);

  timer = setInterval(() => {
    offset -= step;
    if (offset <= 0) {
      offset = 0;
      clearInterval(timer);
      $('.slider-for').slick('slickNext');
    }
    circle.style.strokeDashoffset = offset;
  }, 20);
}

// Animation function
function animateSlide(index) {
  const currentSlide = $('.slider-for .slider-banner-image').eq(index);

  // Reset only current slide's elements
  currentSlide.find('.slide-animate').css({ opacity: 0, transform: 'translateY(30px)' });

  gsap.to(currentSlide.find('.animate-span'), {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.5
  });

  gsap.to(currentSlide.find('.animate-image'), {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.1
  });

  gsap.to(currentSlide.find('.animate-right'), {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 1
  });
}

$('.slider-for').on('init', function () {
    $('.slider-banner-image').eq(0).addClass('active');
    animateSlide(0);
    startProgress(0);
  });

  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    clearInterval(timer);
    $('.slider-banner-image').removeClass('active');
    $('.slider-banner-image').eq(nextSlide).addClass('active');
    animateSlide(nextSlide); // trigger animation early
  });

  $('.slider-for').on('afterChange', function (event, slick, currentSlide) {
    startProgress(currentSlide);
  });

  // ✅ Infinite loop enabled here
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    autoplay: false,
    infinite: true, // 🔁 looping
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    infinite: true, // 🔁 looping for nav too
    responsive: [
      { breakpoint: 992, settings: { vertical: false } },
      { breakpoint: 768, settings: { vertical: false } },
      { breakpoint: 580, settings: { vertical: false, slidesToShow: 3 } },
      { breakpoint: 380, settings: { vertical: false, slidesToShow: 2 } }
    ]
  });
});


/******************** Text Animation ********************/
  
window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 100, duration: 0.35, ease: "power1.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});


/******************** Service Section Zoom Animation ********************/

// gsap.registerPlugin(ScrollTrigger);

//   document.querySelectorAll('.service-content').forEach((section) => {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 70%",    // When section enters 70% from top of viewport
//       end: "bottom 30%",   // When section leaves 30% from bottom
//       onEnter: () => {
//         gsap.to(section, {
//           scale: 1.1,
//           duration: 0.4,
//           ease: "power2.out"
//         });
//       },
//       onEnterBack: () => {
//         gsap.to(section, {
//           scale: 1.1,
//           duration: 0.4,
//           ease: "power2.out"
//         });
//       },
//       onLeave: () => {
//         gsap.to(section, {
//           scale: 0.85,
//           duration: 0.4,
//           ease: "power2.inOut"
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(section, {
//           scale: 0.85,
//           duration: 0.4,
//           ease: "power2.inOut"
//         });
//       }
//     });
//   });


//  gsap.registerPlugin(ScrollTrigger);

//   const services = document.querySelectorAll(".service-content");

//   // Make first one visible immediately
//   gsap.set(services[0], {
//     opacity: 1,
//     scale: 1,
//     zIndex: 2
//   });

//   // Timeline with pin
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".services-section",
//       start: "top top",
//       end: () => "+=" + ((services.length - 1) * window.innerHeight),
//       scrub: true,
//       pin: true,
//       markers: false
//     }
//   });

//   services.forEach((panel, i) => {
//     if (i === 0) return;

//     // Fade in current panel
//     tl.to(panel, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.8,
//       ease: "power2.out",
//       onStart: () => {
//         gsap.set(panel, { zIndex: 2 });
//       }
//     });

//     // Fully fade out previous panel AFTER next fully appears
//     tl.to(services[i - 1], {
//       opacity: 0,
//       scale: 0.85,
//       duration: 0.3,
//       ease: "power2.inOut",
//       onComplete: () => {
//         gsap.set(services[i - 1], { zIndex: 0 });
//       }
//     }, "+=0"); // delay a little after current fade-in
//   });



/******************** Success Rate Curv Animation ********************/

gsap.registerPlugin(ScrollTrigger);

  const path = document.getElementById("curvePath");
  const totalLength = path.getTotalLength();
  path.style.strokeDasharray = totalLength;
  path.style.strokeDashoffset = totalLength;

  let lastDrawnLength = 0;
  const dotGroups = gsap.utils.toArray(".dot-group");

  // Get wrapper position
  const wrapperRect = document.querySelector(".svg-wrapper").getBoundingClientRect();
  const wrapperTop = wrapperRect.top + window.scrollY;
  const wrapperLeft = wrapperRect.left + window.scrollX;

  // Map dot-group to points
  const groupPoints = dotGroups.map(group => {
    const rect = group.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX - wrapperLeft;
    const centerY = rect.top + rect.height / 2 + window.scrollY - wrapperTop;
    return { x: centerX, y: centerY };
  });

  // Match path length to closest dot position
  const groupLengths = groupPoints.map(target => {
    let closestLength = 0;
    let minDist = Infinity;

    for (let i = 0; i <= totalLength; i += 2) {
      const pt = path.getPointAtLength(i);
      const dx = pt.x - target.x;
      const dy = pt.y - target.y;
      const dist = dx * dx + dy * dy;

      if (dist < minDist) {
        minDist = dist;
        closestLength = i;
      }
    }

    return closestLength;
  });

  let revealed = Array(dotGroups.length).fill(false);

  // Curve draw animation
  ScrollTrigger.create({
    trigger: ".curve-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const currentLength = totalLength * progress;

      if (currentLength > lastDrawnLength) {
        lastDrawnLength = currentLength;
        path.style.strokeDashoffset = totalLength - currentLength;
      }

      updateDots(currentLength);
    }
  });

  // Fade in wrapper once
  ScrollTrigger.create({
    trigger: ".curve-section",
    start: "top bottom",
    once: true,
    onEnter: () => {
      document.querySelector(".svg-wrapper").style.opacity = 1;
    }
  });

  // Reveal dot-group when curve reaches it
  function updateDots(currentLength) {
    dotGroups.forEach((group, i) => {
      if (!revealed[i] && currentLength >= groupLengths[i]) {
        revealed[i] = true;

        const line = group.querySelector(".dot-line");
        const dot = group.querySelector(".dot");
        const label = group.querySelector(".label");

        gsap.timeline()
          .to(line, {
            opacity: 1,
            scaleY: 1,
            duration: 0.4,
            ease: "power2.out"
          })
          .to(dot, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
          }, "-=0.2")
          .to(label, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          }, "-=0.2");
      }
    });
  }


/******************** Success Rate Accordion Animation ********************/

  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordions = document.querySelectorAll('.accordion-collapse');
  const progressDuration = 6000;
  let currentIndex = 0;
  let hasStarted = false;
  let animationId = null;

  function resetAllProgressBars() {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      bar.style.width = '0%';
    });
  }

  function runProgress(index) {
    const currentAccordion = accordions[index];
    const progressBar = currentAccordion.querySelector('.progress-fill');

    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / progressDuration, 1);
      progressBar.style.width = (progress * 100) + '%';

      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      } else {
        currentIndex = (index + 1) % accordions.length;
        animateProgressBar(currentIndex);
      }
    }

    animationId = requestAnimationFrame(step);
  }

  function animateProgressBar(index) {
    resetAllProgressBars();

    const button = accordionButtons[index];
    const targetId = button.getAttribute('data-bs-target');
    const target = document.querySelector(targetId);

    // If already visible, skip to progress
    if (target.classList.contains('show')) {
      runProgress(index);
    } else {
      // Wait for animation to complete
      const handler = () => {
        target.removeEventListener('shown.bs.collapse', handler);
        runProgress(index);
      };
      target.addEventListener('shown.bs.collapse', handler);
      button.click(); // Triggers native Bootstrap open with animation
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const accordionContainer = document.querySelector('.accordion');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          animateProgressBar(currentIndex);
          observer.unobserve(accordionContainer);
        }
      });
    }, { threshold: 0.3 });

    if (accordionContainer) {
      observer.observe(accordionContainer);
    }
  });



  $(document).ready(function () {
   
  });