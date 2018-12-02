# ElementAnimation
HTML Element Loading Animation

## Setup
To make the HTML element loading animations available in your application, you need to include both the JavaScript and CSS file
```
<link rel="stylesheet" href="/eac.mounting-animations.1.0.1.css" type="text/css" />
<script src="/eac.mounting-animations.1.0.1.js" type="text/javascript"></script>
```
## Configurations
* You can configure the animations in the JavaScript file. 
* The animations of the HTML elements are triggered one after another. 
* You can set the delay between the animation of each element in the HTMLElementLoadingAnimation class. 
* By default, this delay is set to 150ms

```
// define the delay between the animation of each element
this.delay = 150;
```

## How to use
For animating an element, you only have to add the eac-load-animation class and the class of your desired animation to the HTML element i.e.

```
<div class="eac-load-animation eac-grow"></div>
```

You can choose between seven different animations. The following list presents the animations and the class you would have to add to an HTML element to enable the animation:

* Grow: eac-grow
* Shrink: eac-shrink
* Slide Up: eac-slide-up
* Slide Right: eac-slide-right
* Slide Down: eac-slide-down
* Slide Left: eac-slide-left
* Unfold: eac-unfold

## Examples
You can add a loading animation to any kind of HTML element by adding the eac-load-animation class and the class of the animation

```
<h2 class="eac-load-animation eac-slide-down"> ... </h2>
```
You can add an animation even if there is already a custom class defined on the HTML element.
```
<p class="eac-load-animation eac-unfold your-custom-class"> ... </p>
```
