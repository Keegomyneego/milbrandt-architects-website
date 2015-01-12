$.ajaxSetup async: false
$.getScript "scripts/angular/init.js"
$.getScript "scripts/angular/controllers/CarouselCtrl.js"
$.getScript "scripts/angular/controllers/ContentCtrl.js"
$.getScript "scripts/plugins/scrollTo.js"

$.ajaxSetup async: true
$.getScript "scripts/animations.js"
$.getScript "scripts/google-search.js"