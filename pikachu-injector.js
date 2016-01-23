;(function pikaInjectorIife(window, document){
  window._pikachuInjector = (function pikachuInjectorInterface() {
    var link = 'http://i.imgur.com/TIXz0d3.jpg';
    var cssClass = 'pikachu-injector-background';

    function update() {
      var i,
        elements = document.getElementsByClassName(cssClass),
        background = 'url("' + link + '") repeat';
      for(i  = 0; i < elements.length; i++) (function(i){
        elements[i].style.background = background;
      })(i);

      return {
        elements: elements,
        background: background
      };
    }

    function options(opts) {
      if(opts.link)
        link = opts.link;
      if(opts.cssClass)
        cssClass = opts.cssClass;
      return this;
    }

    document.addEventListener("DOMContentLoaded", update);
    return {
      update: update,
      options: options
    };
  })();
})(window, document);
