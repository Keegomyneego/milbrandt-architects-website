# requires jquery

$(document).ready ->
  "use strict"

  # Ensure the view of the current page stays consistent while resizing
  $( window ).resize ->
    $( "#page-header .nav .active a:link" ).click()

  # Navbar effects
  $( "#page-header .nav > li a:link" ).on "click", (event)->

      # Viewport scrolling
      target = this.href.match( "#.*$" )[0]
      if target.length > 0 and target isnt "#"

        # Pause the carousel when scrolling away and cycle when scrolling to it
        containsCarousel = $( target ).has( ".carousel" ).length isnt 0
        $( ".carousel" ).carousel if containsCarousel then "pause" else "cycle"
        console.log if containsCarousel then "pause" else "cycle"

        # First level nav tabs get styled with the "active" class
        $( "#page-header .nav > li" ).removeClass "active"
        $( this ).parents("#page-header .nav > li").addClass "active"

        # Scroll the the target page into view
        offsetTop = $( "#page-body-viewport" ).offset().top
        $( "#page-body-viewport" ).scrollTo target, offsetTop: offsetTop

  # Set which nav tab should be active
  target = window.location.hash
  target = "#home" if target is ""
  $( "a[href='" + target + "']" ).click()
