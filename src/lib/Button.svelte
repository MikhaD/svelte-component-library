<button on:click>
	<slot />
</button>

<style>
	button {
		background-color: rgb(var(--_histoire-color-primary-500));
		color: rgb(var(--_histoire-color-gray-950));
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 0.25rem;
		margin: 0.5rem;
	}
	button:hover {
		background-color: rgb(var(--_histoire-color-primary-600));
	}
</style>
