<!-- This is hopefully just a temporary solution while the step attribute is added to the built in slider component -->
<script lang="ts">
	export let title: string;
	export let value: number = 50;
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
</script>

<label
	class="histoire-wrapper htw-p-2 hover:htw-bg-primary-100 dark:hover:htw-bg-primary-800 htw-flex htw-gap-2 htw-flex-wrap histoire-slider htw-items-center"
>
	<span
		class="htw-w-28 htw-whitespace-nowrap htw-text-ellipsis htw-overflow-hidden htw-shrink-0 v-popper--has-tooltip"
	>
		{title}: {value}
	</span>
	<span class="htw-grow htw-max-w-full htw-flex htw-items-center htw-gap-1">
		<span class="htw-block htw-grow htw-max-w-full">
			<div class="htw-relative htw-w-full htw-flex htw-items-center">
				<div class="htw-absolute htw-inset-0 htw-flex htw-items-center">
					<div
						class="htw-border htw-border-black/25 dark:htw-border-white/25 htw-h-1 htw-w-full htw-rounded-full"
					/>
				</div>
				<input
					class="htw-range-input htw-appearance-none htw-border-0 htw-bg-transparent htw-cursor-pointer htw-relative htw-w-full htw-m-0 htw-text-gray-700"
					type="range"
					{min}
					{max}
					{step}
					bind:value
				/>
			</div>
		</span>
	</span>
</label>
