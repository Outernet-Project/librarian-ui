// Generated by CoffeeScript 1.10.0
(function(window, $) {
  var ContextMenu, PulldownMenubar, Statusbar, ctxm, origHtml, pdmb, scrl, statusBarTabs;
  PulldownMenubar = window.o.widgets.PulldownMenubar;
  Statusbar = window.o.widgets.Statusbar;
  ContextMenu = window.o.widgets.ContextMenu;
  pdmb = new PulldownMenubar(window.o.pageVars.menubarId);
  scrl = new Statusbar(window.o.pageVars.statusbarId);
  ctxm = new ContextMenu(window.o.pageVars.contextmenuId);
  statusBarTabs = $('#' + window.o.pageVars.statusTabId);
  statusBarTabs.tabable();
  statusBarTabs.on('activator-focus', function(e) {
    scrl.open();
  });
  $.timeconv();
  origHtml = $.fn.html;
  $.fn.html = function() {
    var ret;
    ret = origHtml.apply(this, arguments);
    if (arguments.length) {
      $.timeconv(this);
    }
    return ret;
  };
})(this, this.jQuery);
