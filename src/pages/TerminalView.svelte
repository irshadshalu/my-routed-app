<script lang="ts">
	export let pathname: string;
</script>

<div class="container">
	<div class="titlebar"></div>
	<span>{pathname} $</span>
	<span class="blinker">&#32;</span>
</div>

<style>
	.container {
		background: black;
		height: 600px;
		width: 800px;
		padding: 10px;
		margin: auto;
		margin-top: 5vh;
		border: 1px solid #acacac;
		border-radius: 6px;
		box-shadow: 0px 0px 20px #acacac;
	}

	span {
		color: rgb(15, 255, 67);
		font-family: monospace;
	}

	.blinker {
		opacity: 1;
		margin-bottom: -2px;
		height: 13px;
		margin-left: 6px;
		border-left: 2px solid rgb(15, 255, 67);
		animation: blinker 0.9s steps(2, start) infinite;
	}

	@keyframes blinker {
		to {
			visibility: hidden;
		}
	}
</style>
