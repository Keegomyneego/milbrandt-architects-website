# $.ajaxSetup async: false

############################
# Order is important here! #
############################

# For debugging
$.getScript "scripts/utils.js", ->
  log.enable()

  # AngularJS & Bootstrap Framework
  getScript "scripts/angular/angular.js", ->
    getScript "scripts/bootstrap/bootstrap.js"
    getScript "scripts/bootstrap/ui-bootstrap-tpls-0.12.0.js"
    getScript "scripts/polyfills/requestAnimationFrame.js", ->
      getScript "scripts/angular/angular-touch.js", ->
        getScript "scripts/angular/angular-carousel.js", ->

          # Initialize AngularJS
          getScript "scripts/angular/init.js", ->

            # Load controllers
            # getScript "scripts/angular/controllers/CarouselCtrl.js"
            getScript "scripts/angular/controllers/ContentCtrl.js", ->
              log 'bootstrapping myApp', ->
                angular.bootstrap document, ['myApp']
              log 'setup complete'

  getScript "scripts/jquery-ui.js", ->
    getScript "scripts/plugins/mutate.events.js", ->
      getScript "scripts/plugins/mutate.js", ->
        getScript "scripts/plugins/scrollTo.js", ->
          getScript "scripts/animations.js"
  
  # $.getScript "scripts/google-search.js"

  ############################
  # Order doesnt matter here #
  ############################
