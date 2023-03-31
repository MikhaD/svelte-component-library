<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Input from "../../components/Input.svelte";

	export let Hst: Hst;

	let value = "";
	let label = "Example";
	let max_length = 20;
	let autocomplete = "off";

	let pattern_string = ".*";
	let pattern: RegExp = /^.*$/;
	$: try {
		pattern = new RegExp(`^${pattern_string}$`);
	} catch {
		pattern = /^.*$/;
	}
	const autocomplete_options = {
		off: "off",
		on: "on",
		name: "name",
		"honorific-prefix": "honorific-prefix",
		"given-name": "given-name",
		"additional-name": "additional-name",
		"family-name": "family-name",
		"honorific-suffix": "honorific-suffix",
		nickname: "nickname",
		email: "email",
		username: "username",
		"new-password": "new-password",
		"current-password": "current-password",
		"one-time-code": "one-time-code",
		"organization-title": "organization-title",
		organization: "organization",
		"street-address": "street-address",
		"address-line1": "address-line1",
		"address-line2": "address-line2",
		"address-line3": "address-line3",
		"address-level4": "address-level4",
		"address-level3": "address-level3",
		"address-level2": "address-level2",
		"address-level1": "address-level1",
		country: "country",
		"country-name": "country-name",
		"postal-code": "postal-code",
		"cc-name": "cc-name",
		"cc-given-name": "cc-given-name",
		"cc-additional-name": "cc-additional-name",
		"cc-family-name": "cc-family-name",
		"cc-number": "cc-number",
		"cc-exp": "cc-exp",
		"cc-exp-month": "cc-exp-month",
		"cc-exp-year": "cc-exp-year",
		"cc-csc": "cc-csc",
		"cc-type": "cc-type",
		"transaction-currency": "transaction-currency",
		"transaction-amount": "transaction-amount",
		language: "language",
		bday: "bday",
		"bday-day": "bday-day",
		"bday-month": "bday-month",
		"bday-year": "bday-year",
		sex: "sex",
		tel: "tel",
		"tel-country-code": "tel-country-code",
		"tel-national": "tel-national",
		"tel-area-code": "tel-area-code",
		"tel-local": "tel-local",
		"tel-extension": "tel-extension",
		impp: "impp",
		url: "url",
		photo: "photo",
	};
</script>

<Hst.Story
	title="Components/Input"
	icon="iconoir:input-field"
	layout={{ type: "grid", width: "95%" }}
>
	<Hst.Variant title="Google Style Input" icon="iconoir:input-field">
		<Input
			variant="google"
			bind:value
			bind:label
			bind:max_length
			bind:autocomplete
			bind:pattern
		/>
	</Hst.Variant>
	<Hst.Variant title="LastPass Style Input" icon="iconoir:input-field">
		<Input
			variant="lastpass"
			bind:value
			bind:label
			bind:max_length
			bind:autocomplete
			bind:pattern
		/>
	</Hst.Variant>
	<svelte:fragment slot="controls">
		<Hst.Text title="Label" bind:value={label} />
		<Hst.Text title="Value" bind:value />
		<Hst.Number title="Max Length" bind:value={max_length} />
		<Hst.Text title="Pattern" bind:value={pattern_string} />
		<Hst.Select title="Autocomplete" bind:value={autocomplete} options={autocomplete_options} />
	</svelte:fragment>
</Hst.Story>
