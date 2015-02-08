############################
# Order is important here! #
$.ajaxSetup async: true
############################

# jQuery
$.getScript "scripts/jquery.js"

# AngularJS & Bootstrap Framework
$.getScript "scripts/bootstrap/bootstrap.js"

# Initialize AngularJS
$.getScript "scripts/angular/init.js"

# Load controllers
$.getScript "scripts/angular/controllers/CarouselCtrl.js"
$.getScript "scripts/angular/controllers/ContentCtrl.js"


############################
# Order doesnt matter here #
$.ajaxSetup async: true
############################

$.getScript "scripts/animations.js"
$.getScript "scripts/google-search.js"

$.getScript "scripts/angular/angular-touch.js"
$.getScript "scripts/angular/angular-carousel.js"

$.getScript "scripts/plugins/scrollTo.js"
