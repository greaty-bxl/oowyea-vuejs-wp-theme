# On screen (event)
Detect an element which appear in screen with JQuery  

First, init the class on your element
```html
<div class="any-class on-screen"></div>
```

in your vue
```js
$('.any-class').on('enter-screen', (event) => {

	
})

//on leave screen (also tiggered on init)
$('.any-class').on('leave-screen', () => {

})
```