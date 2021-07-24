# sass-boilerplate

SASS boilerplate sample theme including some mixins, breakpoints, variables and [normalize.css](https://necolas.github.io/normalize.css/).  
<br><br>
![SASS](https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png)  
<br>
  
## Adding a new .scss file 
When a new file created in any directory, it needs to @forward the file name in the index.scss on the same directory to compile on main .scss file.

## Usage of abstracts folder

If you want to use the mixin, variables or breakpoints on a new file, pass the abstracts folder as a global value on the top of the file. 

`@use '../abstracts/' as *;`
<br>

## Examples of breakpoints and font-weight.  

### Breakpoints

Edit the breakpoints object as you wish.

`$breakpoints: (
  small: 36em,
  medium: 47em,
  large: 75em,
);`

Use the SASS [@mixin and @include functions](https://sass-lang.com/documentation/at-rules/mixin) to define and apply the breakpoints.

`@mixin mq($args) {
  $size: map-get($breakpoints, $args);     
    @media only screen and (min-width: $size) {
    @content;
  }
}`

Apply with the @include in any class.  
  
`some-content {
  @include mq(small) {
  display:flex;
  }
}`

Compiles to:

`@media only screen and (min-width: 36em){
  .torso{display:flex}
  }`
<br>

### Font-weights

Edit the font-weight object as you wish.

`$font-weight: (
  "regular": 400,
  "semi-bold": 500,
  "bold": 700,
);`

Use the SASS [map-get function](https://sass-lang.com/documentation/modules/map) to choose the font-weight.

`font-weight: map-get($font-weight, bold);`

Compiles to: 

`h1 {
  font-weight: 700;
 }`
<hr> 

## Folders
### abstracts

Breakpoints, variables and mixin values.

### base

Base styles and typography rules.

### components

For all the components. 

### layout

Styles of page elements like navigation bar, header, footer etc.
### vendor

You can store all helper utilities like normalize.css, Bootstrap etc.



  

