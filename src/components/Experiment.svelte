<section>
	<span class="rotate">
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
		<div class="center" />
	</span>
</section>

<style lang="scss">
	section {
		width: 380px;
		height: 380px;
		display: grid;
		place-items: center;
	}
	.rotate {
		display: grid;
		grid-template: 1fr / 1fr;
		place-items: center;
		width: 90%;
		height: 90%;
		border-radius: 50%;
		background-color: #00808080;
		animation: rotate 10s linear infinite;
		&:hover {
			animation-play-state: paused;
			div::before {
				animation-play-state: paused;
			}
		}
	}
	div {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		border-radius: 50%;
		position: relative;
		transform-origin: center;
	}
	.circle {
		--offset: 150px;
		width: 50px;
		height: 50px;
		background-color: #000;
		transform: translate(
			calc(cos(var(--angle)) * var(--offset)),
			calc(sin(var(--angle)) * var(--offset))
		);
		&::before {
			content: "a";
			position: absolute;
			inset: 0;
			display: grid;
			border-radius: inherit;
			background-color: inherit;
			place-items: center;
			transition: scale 0.3s;
			animation: rotate 10s linear reverse infinite;
		}
		&:hover {
			&::before {
				scale: 1.5;
			}
		}
	}
	.center {
		width: 100px;
		height: 100px;
		background-color: currentcolor;
	}
	@keyframes rotate {
		0% {
			rotate: 0deg;
		}
		100% {
			rotate: 360deg;
		}
	}
	$count: 8;
	@for $i from 1 through $count {
		.circle:nth-child(#{$i}) {
			--angle: #{calc(($i * 360) / $count)}deg;
		}
	}
</style>
