##
# log( msg [, msg] )
#   Shorthand for console.log that also indents when called inside
#   a logged function. 
# log( msg, f )
#   Logs pre & post messages for the given function, and indents any
#   nested log calls.
##
window.log = do ->
  $.extend ((msg, f) ->
    if not log.enabled
      return f?()

    indent = ''
    indent += '\t' for i in [0...log.indent]

    if typeof f isnt 'function'
      # log( msg [, msg] )
      console.log.apply console, (indent + arg for arg in arguments)
    else
      # log( msg, f )
      log "#{msg}..."
      log.indent++
      attempt f
      log.indent--
      log "#{msg}...done"
    ),
    enabled: false
    indent: 0
    enable: ->
      log.enabled = true
    disable: ->
      log.enabled = false

##
# Wraps given function in a try catch
##
window.attempt = (f) ->
  try
    f()
  catch error
    throw error

##
# Verbosely requests the script from a given url and calls either
# the success or failure callbacks.
##
window.getScript = (url, succcess, failure) ->
  re = /([^\/]+\.[^\/]+)$/
  fileName = re.exec(url)[0]
  $.getScript url
    .done (data, status) ->
      log "%cloading #{fileName}...#{status}", "color: lightgreen"
      succcess?()
    .fail (jqxhr, settings, exception) ->
      log "%cloading #{fileName}...failed:", "color: red"
      log "%c#{exception}", "color: red"
      log exception.stack
      failure?()