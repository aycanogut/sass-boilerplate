# sass-boilerplate

SASS boilerplate sample theme including some mixins, breakpoints, variables and [normalize.css](https://necolas.github.io/normalize.css/).  
<br><br>
![SASS](https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png)  
<br>
  
# Adding a new .scss file 
When a new file created in any directory, the name of the file should be @forward to the index.scss on the same directory. It won't compile into the main.scss file otherwise. 

# Usage of abstracts folder

Pass the abstracts folder as a global value at the start of any.scss file if you wish to utilize the mixin, variables, or breakpoints. 

```scss
@use '../abstracts/' as *;
```
<br>

# Examples of @mixin functions

## Breakpoints (Media Quaries)

Edit the breakpoints object as you wish.

```scss
$breakpoints: (
  small: 36em,
  medium: 47em,
  large: 75em,
);
```

Use the SASS [@mixin and @include functions](https://sass-lang.com/documentation/at-rules/mixin) to define and apply the breakpoints.

###### @mixin rules:

```scss
@mixin mq($args) {
  $size: map-get($breakpoints, $args);     
    @media only screen and (min-width: $size) {
    @content;
  }
}
```

Apply @include function to any class.  
  
```scss
.some-content {
  @include mq(small) {
    display:flex;
  }
}
```

##### Compiles to:

```css
@media only screen and (min-width: 36em){
  .torso{
    display:flex
  }
}
```

## Container

###### @mixin rules:

```scss
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}
```

Apply @include function to a container or wrapper element. 

```scss
.container {
  @include make-container(20em);
}
```

##### Compiles to:

```css
.container {
  width: 100%;
  padding-right: 20em;
  padding-left: 20em;
  margin-right: auto;
  margin-left: auto
}
```

## Pseudo (Absolute positioning)

###### @mixin rules:

```scss
@mixin pseudo(
  $loc: before,
  $content: "",
  $pos: absolute,
  $top: 0,
  $bottom: 0,
  $left: 0,
  $right: 0
) {
  position: relative;

  &::#{$loc} {
    content: $content;
    position: $pos;
    top: $top;
    bottom: $bottom;
    left: $left;
    right: $right;
    @content;
  }
}
```

Apply @include function to an element and define arguments in the order of mixin declaration.

```scss
.element {
  @include pseudo(before, "content", absolute, 0, 0, 1em, 2em);
}

```

##### Compiles to:

```css
.element {
  position: relative
}

.element::before {
  content: "content";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1em;
  right: 2em
}
```

## Transition

###### @mixin rules:

```scss
@mixin transition($args) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -o-transition: $args;
  transition: $args;
}
```

Apply @include function to an element and it will compiles the autoprefixer rules for cross browser compatibility.

```scss
.element {
  @include transition(1s all ease);
}
```

##### Compiles to:

```css
.element {
  -webkit-transition: 1s all ease;
  -moz-transition: 1s all ease;
  -o-transition: 1s all ease;
  transition: 1s all ease
}
```

## Box Shadow

###### @mixin rules:

```scss
@mixin box-shadow($args) {
  -webkit-box-shadow: $args;
  -moz-box-shadow: $args;
  box-shadow: $args;
}
```

Apply @include function to an element and it will compiles the autoprefixer rules for cross browser compatibility.

```scss
.element {
  @include box-shadow(0px 10px 15px -3px rgba(0, 0, 0, 0.1));
}

```
##### Compiles to:

```css
.element {
  -webkit-box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, .1);
  -moz-box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, .1);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, .1)
}
```

<br>

## Example of font-weight

Edit the font-weight object as you wish.

```scss
$font-weight: (
  "regular": 400,
  "semi-bold": 500,
  "bold": 700,
);
```

Use the SASS [map-get function](https://sass-lang.com/documentation/modules/map) to choose the font-weight.

```scss
font-weight: map-get($font-weight, bold);
```

Compiles to: 

```css
h1 {
  font-weight: 700;
 }
```
<br>

<hr> 

## Folders  

### abstracts

Breakpoints, variables, functions and mixin values.

### base

Base styles and typography rules.

### components

All the components. 

### layout

Styles of page elements like navigation bar, header, footer etc.

### pages

Specific styles for different pages. 

### themes

Specific themes like admin page, dark mode etc.

### vendor

Store all helper utilities like normalize.css, Bootstrap etc.


<br>
<hr>

I took some of the @mixin patterns from [Kevin Powell](https://www.kevinpowell.co/)'s [Github page.](https://github.com/kevin-powell) Check his [Youtube Channel](https://www.youtube.com/kevinpowell) for great information.

<hr>
<br>


