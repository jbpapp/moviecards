(function() {
  var allMods, stars, win;

  win = $(window);

  allMods = $('.animated');

  allMods.each(function(i, el) {
    var el;
    el = $(el);
    if (el.visible(true)) {
      el.addClass('visible');
    }
  });

  win.scroll(function(event) {
    allMods.each(function(i, el) {
      var el, animate;
      var animate;
      el = $(el);
      if (el.visible(true) && !el.hasClass('visible')) {
        animate = el.data('animation');
        el.addClass(animate);
      }
    });
  });

  stars = $('.star');

  stars.on('click', function(e) {
    var star, rating, myRating, ratingStars;
    var myRating, rating, ratingStars, star;
    star = $(this);
    rating = star.parents('.rating');
    ratingStars = rating.find('.star');
    myRating = star.data('score');
    if (rating.hasClass('disabled')) {
      return false;
    }
    ratingStars.each(function(i, el) {
      var el, score;
      var score;
      el = $(el);
      score = el.data('score');
      if (score <= myRating) {
        el.addClass('rated');
        rating.addClass('disabled');
      }
      rating.data('content', 'Your rating is: ' + myRating).popover({
        container: 'body'
      });
    });
  });

}).call(this);
