# sass-boilerplate

SASS boilerplate sample theme including some mixins, breakpoints, variables and [normalize.css](https://necolas.github.io/normalize.css/).

![SASS](https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png)

## Adding a new .scss file 
When a new file created in any directory, it needs to @forward the file name in the index.scss on the same directory.

## Usage of abstracts folder

If you want to use the mixin, variables or breakpoints on a new file, pass the abstracts folder as a global value on the top of the file. 

`@use '../abstracts/' as *;`

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



  

