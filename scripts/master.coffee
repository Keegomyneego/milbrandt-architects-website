$.ajaxSetup async: false

# init must run first
$.getScript "scripts/angular/init.js"

# controllers next
$.getScript "scripts/angular/controllers/CarouselCtrl.js"
$.getScript "scripts/angular/controllers/ContentCtrl.js"


$.ajaxSetup async: true
$.getScript "scripts/plugins/scrollTo.js"
$.getScript "scripts/animations.js"
$.getScript "scripts/google-search.js"