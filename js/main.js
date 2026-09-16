// FAQ: force display:block on summary so Chrome hides the native triangle marker
(function () {
  document.querySelectorAll('.faq-item summary').forEach(function (s) {
    s.style.display = 'block';
  });
})();

// Testimonial carousel dots
(function () {
  var track = document.querySelector('.testimonial-track');
  var dots = document.querySelectorAll('.testimonial-dot');
  if (!track || !dots.length) return;

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      var card = track.children[i];
      if (card) {
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      }
    });
  });

  var setActiveDot = function () {
    var trackRect = track.getBoundingClientRect();
    var closestIndex = 0;
    var closestDistance = Infinity;
    Array.prototype.forEach.call(track.children, function (card, i) {
      var distance = Math.abs(card.getBoundingClientRect().left - trackRect.left);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === closestIndex);
    });
  };

  var ticking = false;
  track.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        setActiveDot();
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// Google Analytics + cookie consent banner
(function () {
  var CONSENT_KEY = 'ga-consent';
  var MEASUREMENT_ID = 'G-0BEGRH8LEF';

  function loadAnalytics() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    var consent = localStorage.getItem(CONSENT_KEY);

    if (consent === 'accepted') {
      loadAnalytics();
      return;
    }

    if (consent === 'declined') {
      return;
    }

    banner.hidden = false;
    document.body.style.paddingBottom = banner.offsetHeight + 'px';
    window.addEventListener('resize', function () {
      if (!banner.hidden) {
        document.body.style.paddingBottom = banner.offsetHeight + 'px';
      }
    });

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      banner.hidden = true;
      document.body.style.paddingBottom = '';
      loadAnalytics();
    });

    document.getElementById('cookie-decline').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'declined');
      banner.hidden = true;
      document.body.style.paddingBottom = '';
    });
  });
})();
