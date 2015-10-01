((window) ->

  # Saves the original reference to any `o` object that may exist
  if window.o?
    window.oOrig = window.o

  # Defines a global `o` object to serve as namespace
  window.o = {}

  # Releases the original `o` object and returns the current value of `o`
  window.releaseO = () ->
    mine = window.o
    window.o = window.oOrig
    mine

  # Exports a name to global `o` object within specified namespace
  window.export = (name, sub, obj) ->
    namespace = window.o[sub] ?= {}
    if namespace[name]?
      throw "Name #{sub}.#{name} already defined with value #{window.o[name]}"
    namespace[name] = obj

) this