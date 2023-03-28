<div class="card">
	<slot />
</div>

<style lang="scss">
	.card {
		--glow-size: 300px;
		border-radius: var(--br);
		padding: 10px;
		position: relative;
		z-index: 0;
		color: white;
		background-color: var(--histoire-contrast-color);
		background-image: radial-gradient(
			var(--glow-size) circle at var(--x) var(--y),
			#fff4,
			transparent 50%
		);
		&::before {
			content: "";
			inset: 1px;
			position: absolute;
			border-radius: var(--br);
			background-color: var(--histoire-contrast-color);
			z-index: -1;
		}
		&::after {
			content: "";
			transition: opacity 0.5s;
			opacity: 0;
			position: absolute;
			inset: 0;
			border-radius: var(--br);
			background-image: radial-gradient(
				300px circle at var(--x) var(--y),
				#fff2,
				transparent 50%
			);
			z-index: -1;
		}
		&:hover {
			--glow-size: 700px;
			&::after {
				opacity: 1;
			}
			&::before {
				inset: 2px;
			}
		}
	}
</style>
