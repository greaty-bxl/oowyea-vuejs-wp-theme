# Add a variable from WordPress to Vue.js

In your WordPress Plugin or Theme
```php
function your_function () {
	/*
	wp_vue_add_var($key, string || object || array);
	*/
	wp_vue_add_var('your_vue_var_1', 'hello world !');
	wp_vue_add_var('your_vue_var_2', array(1,2,3));
}

add_action( 'wp_head', 'your_function' ); // used on load
add_action( 'wp', 'your_function' ); // json page transition
```
In Vue.js Template
```js
export default {
	mounted (){
		console.log(this.wp.your_vue_var_1);
	}
}
```