export default function(url){
	let pos = url.indexOf("?")
	//console.log('pos',pos);
	if( pos >= 0 )
	{
		return url.substr(0 , pos)
	}
	else
	{
		return url
	}
}