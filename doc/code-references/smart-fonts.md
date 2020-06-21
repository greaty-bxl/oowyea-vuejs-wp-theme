# Smart Fonts (fluid responsive)
Make fonts proportional to the ratio screen  
Edit your fonts in ```src/fonts.js```  

or 

init fonts with the js function
```js
smart_fonts({
	'h1' : 22,
	'p' : 14,
})
```
or 

just init the function in your component mounted event
```js
smart_fonts()
```

This function is used in App.vue for each template mounted