((window, $, templates) ->

  defaultSuccess = templates.modalContent
  defaultFailure = templates.modalLoadFailure
  body = $ document.body
  ESCAPE = 27

  body.on 'click', '.o-modal-overlay', (e) ->
    elem = $ @
    elem.remove()

  body.on 'click', '.o-modal-close', (e) ->
    elem = $ @
    elem.parents('.o-modal-overlay').remove()

  body.on 'click', '.o-modal-window', (e) ->
    e.stopPropagation()

  body.on 'keydown', '.o-modal-window', (e) ->
    elem = $ @
    if e.which == ESCAPE
      elem.parents('.o-modal-overlay').remove()

  $.modalContent = (contentUrl, options) ->
    options ?= {
      successTemplate: defaultSuccess,
      failureTemplate: defaultFailure,
    }
    {successTemplate, failureTemplate} = options

    # Kill old modal
    $('.o-modal-overlay').remove()

    # Make a new modal
    modal = $(successTemplate)
    window = modal.find '.o-modal-window'
    panel = modal.find '.o-modal-panel'

    # Add the modal window to body and focus it
    modal.appendTo body
    window.focus()

    # Load the contents
    res = $.get contentUrl
    res.done (data) ->
      panel.html data
    res.fail () ->
      panel.html failureTemplate

) this, this.jQuery, this.templates
