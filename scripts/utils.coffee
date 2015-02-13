window.log = do ->
  $.extend ((msg, f) ->
    if not log.enabled
      return f?()

    ind = ''
    ind += '\t' for i in [0...log.indent]

    if typeof f isnt 'function'
      console.log.apply console, (ind + arg for arg in arguments)
    else
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

window.attempt = (f) ->
  try
    f()
  catch error
    throw error

window.getScript = (url, callback) ->
  re = /([^\/]+\.[^\/]+)$/
  file = re.exec(url)[0]
  # log "loading #{file}..."
  $.getScript url
    .done (data, status) ->
      log "%cloading #{file}...#{status}", "color: lightgreen"
      callback?()
    .fail (jqxhr, settings, exception) ->
      log "%cloading #{file}...failed:", "color: red"
      log "%c#{exception}", "color: red"
      log exception.stack