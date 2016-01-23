#pikachu-injector

Pikachu Injector injects a lovable, happy pikachu face into the background css atttribute of any DOM Element that has a class of "pikachu-injector-background".

The class identifier and image link are both configurable. This uses vanilla javascript, no dependencies, NO JQUERY!

![pikachu face small](http://i.imgur.com/Cfdz69S.jpg)

## Examples:

Some quick examples in action (these are the html files in /tests):

* [default settings](http://htmlpreview.github.io/?https://github.com/a-r-d/pikachu-injector/master/tests/defaults.html)
* [with options](http://htmlpreview.github.io/?https://github.com/a-r-d/pikachu-injector/master/tests/custom-opts.html)


## Installation:

CDN for the script:

```
<script src="https://cdn.rawgit.com/a-r-d/pikachu-injector/master/dist/pikachu-injector.min.js"></script>
```

Or use Bower:

```
bower install --save pikachu-injector
```

## Usage

Include the script, add the class 'pikachu-injector-background' somewhere and pikachu will be injected when the 'DOMContentLoaded' event fires.

```html
<script src="https://cdn.rawgit.com/a-r-d/pikachu-injector/master/dist/pikachu-injector.min.js"></script>
<body class='pikachu-injector-background'>
  ...
</body>
```

You can also customize the link and the CSS class that is targeted. The options method on the global _pikachuInjector object is chainable, and the update command will immediately cause a pikachu repaint.

```javascript
window._pikachuInjector.options({
  cssClass: 'custom-named-class-test',
  link: 'http://i.imgur.com/DjTN8L8.jpg'
}).update();
```


## Pikachu Resources:

Pikachu Face Links, for reference:

```
http://i.imgur.com/TIXz0d3.jpg  (this is the default, 12 kb jpeg)
http://i.imgur.com/7rF0A6F.png  (24 kb png)
http://i.imgur.com/DjTN8L8.jpg  (24 kb jpeg, raichu face)
```
