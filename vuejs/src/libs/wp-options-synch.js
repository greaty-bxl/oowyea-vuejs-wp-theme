/*function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}*/

export default function(option_keys, callback){

	let option = this.$store.state.option

	option_keys.forEach( (element) => {
		if( option[element] )
		{	
			this[element] = option[element]
			//console.log('load options', element, option[element])
		}			
	})
	
	option_keys.forEach( element => {
		this.$watch(element, function(newValue/*, oldValue*/) {
			/*if( newValue != oldValue && !arraysEqual(newValue, oldValue) )
			{*/
				//console.log(element + ' changed from ' + oldValue + ' to ' + newValue + '!');
				let send = {}
				send.type = 'set_option'
				send[element] = newValue

				this.$store.commit(send)
			//}
		});
	})

	callback()
}