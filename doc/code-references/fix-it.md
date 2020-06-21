# Fixed element in section

in a vue

```js
import fixit from 'Libs/fix-it.js'
export default {
	mounted (){
		fixit(this, selector, top, left, state)
	}
}
```

* selector: css selector
* top: default 0
* left default 0
* state: auto, limited, absolute
	- auto, fixed in section and overflow hidden
	- limited, fixed in section and don't leave the section
	- absolute, absolute position in section