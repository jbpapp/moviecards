win = $(window)
allMods = $('.animated')
# Already visible modules
allMods.each (i, el) ->
  `var el`
  el = $(el)
  if el.visible(true)
    el.addClass('visible')
  return
win.scroll (event) ->
  allMods.each (i, el) ->
    `var el, animate`
    el = $(el)
    if el.visible(true) and !el.hasClass('visible')
      animate = el.data('animation')
      el.addClass animated
    return
  return
stars = $('.star')
stars.on 'click', (e) ->
  `var star, rating, myRating, ratingStars`
  star = $(this)
  rating = star.parents '.rating'
  ratingStars = rating.find '.star'
  myRating = star.data 'score'
  if rating.hasClass 'disabled'
    return false
  ratingStars.each (i, el) ->
    `var el, score`
    el = $(el)
    score = el.data 'score'
    if score <= myRating
      el.addClass 'rated'
      rating.addClass 'disabled'
    rating.data('content', 'Your rating is: ' + myRating).popover container: 'body'
    return
  return
