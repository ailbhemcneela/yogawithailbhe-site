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
