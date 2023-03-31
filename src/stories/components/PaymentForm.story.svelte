<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import PaymentForm from "../../components/PaymentForm.svelte";

	export let Hst: Hst;
</script>

<Hst.Story
	title="Components/Payment Form"
	icon="bi:credit-card-2-front"
	layout={{ type: "single", iframe: false }}
>
	<div>
		<PaymentForm />
	</div>
</Hst.Story>
