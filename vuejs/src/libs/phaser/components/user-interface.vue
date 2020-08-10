<!-- @date 2020-07-25 -->
<template>
	<div>
		<div id="phaser-ui-left">
			<input type="text" name="player1_name" placeholder="Player 1 name" />
			<ul>
				<li><a href="#">Board Game</a></li>
				<li><a href="#">Mini Games</a></li>
				<li><a href="#">Editor</a></li>
			</ul>
			<div>
				Add Phone Pad<br/>
				[generating code...]
				<div>
					Reset in <span id="code-limit-time">05:00</span>
				</div>
			</div>
		</div>
		<div id="phaser-ui-right">
			<div class="menu-tabs">
				<ul>
					<li>
						Friends Group
					</li>
					<li>
						Public Games
					</li>
				</ul>
			</div>
			<div class="tabs">
				<div id="friends" class="tab">
					<input type="text" name="search-friend">
					<ul id="friends-result">
						<li></li>
					</ul>
				</div>
				<div id="public-game" class="tab">
					<input type="text" name="search-game">
					<ul id="games-result">
						<li></li>
					</ul>
				</div>
			</div>
			<div id="quick-games">
				<div class="create-join-quick-game"></div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	mounted(){
		
		
	}
}
</script>

<style>

</style>