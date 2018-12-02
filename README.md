# ElementAnimation
HTML Element Loading Animation

##Setup
To make the HTML element loading animations available in your application, you need to include both the JavaScript and CSS file
<link rel="stylesheet" href="/aco.loading-animations.1.0.1.css" type="text/css" />
<script src="/aco.loading-animations.1.0.1.js" type="text/javascript"></script>

##Configurations
* You can configure the animations in the JavaScript file. 
* The animations of the HTML elements are triggered one after another. 
* You can set the delay between the animation of each element in the HTMLElementLoadingAnimation class. 
* By default, this delay is set to 150ms

```
// define the delay between the animation of each element
this.delay = 150;
```

##How to use
For animating an element, you only have to add the aco-load-animation class and the class of your desired animation to the HTML element i.e.

```
<div class="aco-load-animation aco-grow"></div>
```

You can choose between seven different animations. The following list presents the animations and the class you would have to add to an HTML element to enable the animation:

* Grow: aco-grow
* Shrink: aco-shrink
* Slide Up: aco-slide-up
* Slide Right: aco-slide-right
* Slide Down: aco-slide-down
* Slide Left: aco-slide-left
* Unfold: aco-unfold

##Examples
You can add a loading animation to any kind of HTML element by adding the aco-load-animation class and the class of the animation

```
<h2 class="aco-load-animation aco-slide-down"> ... </h2>
```
You can add an animation even if there is already a custom class defined on the HTML element.
```
<p class="aco-load-animation aco-unfold your-custom-class"> ... </p>
```




