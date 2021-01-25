export default function(string){
	
	let pll_strings = this.$store.state.wp.pll_strings

	if( pll_strings )
	{
		if( pll_strings[string] )
		{
			return pll_strings[string]
		}
	}
	
	return string
}