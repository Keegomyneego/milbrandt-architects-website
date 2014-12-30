# requires jquery

$(document).ready(->
  $( "#page-header .nav > li > a:link" ).on("click", (event)->

    # Style the currently selected navigation tab with the active class
    $( "#page-header .nav > li" ).removeClass( "active" )
    $( this ).parent().addClass( "active" )

    # Page scroll settings
    target = this.href.match( "#.*$" )[0]
    offsetTop = $( "#page-body-viewport" ).offset().top

    # Scroll the the new page into view
    $( "#page-body-viewport" ).scrollTo(
      target,
      offsetTop: offsetTop
    )

    # Ensure the view of the current page stays consistent while resizing
    $( window ).resize( ->
      window.location = window.location
    )
  )
)