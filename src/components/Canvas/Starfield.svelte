<script lang="ts">
	import { onMount } from "svelte";

	export let width = 500;
	export let height = 500;
	export let stars = 500;
	export let duration = 0.3;

	let canvas: HTMLCanvasElement;
	let stars_array: Star[] = [];

	const vanishing_point = {
		x: width / 2,
		y: height / 2,
	};

	// x and y need to be in the range of the canvas
	class Star {
		static readonly MAX_X = width / 2;
		static readonly MIN_X = -width / 2;
		static readonly MAX_Y = height / 2;
		static readonly MIN_Y = -height / 2;
		static readonly MAX_Z = 500;
		static readonly MIN_Z = 0;
		public x: number;
		public y: number;
		public z: number;
		constructor(x: number, y: number, z: number) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
		draw(ctx: CanvasRenderingContext2D) {
			const x = vanishing_point.x + this.x / (this.z / 1000);
			const y = vanishing_point.y + this.y / (this.z / 1000);
			if (x < 0 || x > width || y < 0 || y > height) return;
			const color = Math.floor((1 - (this.z / Star.MAX_Z) ** 2) * 255);
			ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
			ctx.fillRect(x, y, 1, 1);
		}
		move(distance: number) {
			this.z -= distance;
			if (this.z <= 0) {
				this.z = Star.MAX_Z;
			}
		}

		static create() {
			return new Star(
				Math.random() * (Star.MAX_X - Star.MIN_X) + Star.MIN_X,
				Math.random() * (Star.MAX_Y - Star.MIN_Y) + Star.MIN_Y,
				Math.random() * (Star.MAX_Z - Star.MIN_Z) + Star.MIN_Z,
			);
		}
	}

	function clear(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "#0005";
		ctx.fillRect(0, 0, width, height);
	}

	for (let i = 0; i < stars; ++i) {
		stars_array.push(Star.create());
	}

	onMount(() => {
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext("2d")!;

		let previous_time = 0;
		function tick(time: number) {
			clear(ctx);
			const duration = time - previous_time;
			for (const star of stars_array) {
				star.move(duration * duration);
				star.draw(ctx);
			}

			previous_time = time;
			requestAnimationFrame(tick);
		}

		tick(0);
	});
</script>

<canvas bind:this={canvas} />
