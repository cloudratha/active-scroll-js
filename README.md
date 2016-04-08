# ActiveScroll.js [![Build Status](https://travis-ci.org/cloudratha/active-scroll-js.svg?branch=master)](https://travis-ci.org/cloudratha/active-scroll-js)

This jQuery plugin allows for Smooth Scrolling with Anchor Highlighting.

ActiveScroll.js determines which targeted element is closer to the page scroll position and highlights that anchor.
It provides a smooth scrolling feature with an onclick event attached to a customised data attribute.

Highlighting will only apply to anchors in the initiated container. However all links with the data attribute will have the scrollTo feature.

```js
$('nav').activescroll({
    scroll: "scroll",
    active: "active",
    offset: 20,
    animate: 1000
});
```

# Usage

Make sure you have a **data attribute** that references the **id** of the element that the page will be scrolled to.
```html
<nav>
    <ul>
        <li data-scroll="intro">Introduction</li>
        <li data-scroll="basic">Basic</li>
    </ul>
</nav>
...
<h2 id="intro">Introduction</h2>
...
<div id="basic">
    <p>Hello World</p>
</div>
```
Inititate the plugin on the element that contains all the data bindings.
```js
$('nav').activescroll();
```
# Settings
### data (default: scroll)
The data setting looks for the data attribute to define the anchor tags. For compatability with other plugins you can change the bind in the options.
```html
<nav>
    <ul>
        <li data-link="intro">Introduction</li>
        <li data-link="basic">Basic</li>
    </ul>
</nav>
```
```js
$('nav').activescroll({
    data: "link"
});
```
### active (default: active)
The active setting determines the class name to attach to the anchor if it highlighted.
```html
<nav>
    <ul>
        <li data-scroll="intro">Introduction</li>
        <li data-scroll="basic">Basic</li>
    </ul>
</nav>
```
```js
$('nav').activescroll({
    active: "highlight"
});
```
So if Introduction was determined to be the active Anchor:
```html
<nav>
    <ul>
        <li class="highlight" data-scroll="intro">Introduction</li>
        <li data-scroll="basic">Basic</li>
    </ul>
</nav>
```
### offset (default: 20)
The offset setting determines the offset of the scrollTo position.
```js
$('nav').activescroll({
    offset: 10
});
```
### animate (default: 1000)
The animate setting determines the ms the scrollTo should take.
```js
$('nav').activescroll({
    animate: 2000
});
```
