export default function (BlockManager){
	//block test
	BlockManager.add('my-first-block', {
		label: 'Simple block',
		category: 'test',
		content: '<div data-gjs-type="test" data-widget="test" class="my-block">This is a simple block</div>',
		attributes: {
			test: 'Insert h1 block'
		}
	});
}