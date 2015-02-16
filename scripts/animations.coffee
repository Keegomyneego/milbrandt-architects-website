# requires jquery

$(document).ready ->
  
  # Ensure the view of the current page stays consistent while resizing
  $( '#page-body-viewport' ).mutate 'height width', ->
      target = window.location.hash
      target = "#home" if target is ""

      # Scroll the the target page into view immediately
      offsetTop = $( "#page-body-viewport" ).offset().top
      $( "#page-body-viewport" ).scrollTo target,
        offsetTop: offsetTop
        duration: 0

  # Navbar cligk actions
  $( "#page-header .nav > li a:link" ).on "click", (event)->

      # If the tab has a valid target...
      target = this.href.match( "#.*$" )[0]
      if target.length > 0 and target isnt "#"

        # Pause the carousel when scrolling away and cycle when scrolling to it
        containsCarousel = $( target ).has( ".carousel" ).length isnt 0
        $( ".carousel" ).carousel? if containsCarousel then "pause" else "cycle"
        log if containsCarousel then "pause" else "cycle"

        # Nav tabs get styled with the "active" class
        $( "#page-header .nav li" ).removeClass "active"
        $( this ).parents("#page-header .nav li").addClass "active"

        # Scroll the the target page into view
        offsetTop = $( "#page-body-viewport" ).offset().top
        $( "#page-body-viewport" ).scrollTo target, offsetTop: offsetTop

        false

  # Simulate the user clicking the target on load
  target = window.location.hash
  target = "#home" if target is ""
  $( "a[href='" + target + "']" ).click()
