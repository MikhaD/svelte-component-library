<script lang="ts">
	import FlipCard from "../FlipCard.svelte";
	import Input from "../Input.svelte";

	import visa from "./img/visa.svg";
	import mastercard from "./img/mastercard.svg";
	import discover from "./img/discover.svg";
	import amex from "./img/amex.svg";

	export let errors: string[] = [];

	const months = [
		"jan",
		"feb",
		"mar",
		"apr",
		"may",
		"jun",
		"jul",
		"aug",
		"sep",
		"oct",
		"nov",
		"dec",
	];

	const card_images: { [key: string]: string } = {
		visa: visa,
		mastercard: mastercard,
		discover: discover,
		amex: amex,
	};

	let name: string = "";
	let card_number: string = "";
	let cvv: string = "";
	let month: string = "";
	let year: string = "";
	let focused_input: string = "";
	/**
	 * Formats a number with spaces between each section and fills the result to the minimum width with the fill character
	 * @param num The number to format
	 * @param sections The number of digits between each space
	 * @param minChars The minimum width of the result
	 * @param fillChar The character to use to fill the result to the minimum width
	 */
	export function formatNumber(
		num: number | string,
		sections: number = 3,
		minChars: number = 0,
		fillChar: string = "-",
	): string {
		const result = [];
		let str = num.toString();
		str += fillChar.repeat(Math.max(0, minChars - str.length));
		for (let i = 0; i < str.length; ++i) {
			if (i % sections === 0 && i !== 0) result.unshift(" ");
			result.unshift(str[str.length - 1 - i]);
		}
		return result.join("");
	}

	/**
	 * Get the type of credit card based on the first digit of the card number
	 * @param card_number The card number to check
	 */
	function getCardType(card_number: string): string {
		return (
			{
				"4": "visa",
				"2": "mastercard",
				"5": "mastercard",
				"6": "discover",
				"3": "amex",
			}[card_number.slice(0, 1)] || ""
		);
	}
	$: card_type = getCardType(card_number);

	function onInputFocus(e: CustomEvent) {
		focused_input = e.detail;
	}
	function onInputBlur() {
		focused_input = "";
	}

	function validateName(name: string) {
		return name.trim().length > 0;
	}
	function validateCardNumber(card_number: string) {
		return card_number.trim().length === 16 && !isNaN(+card_number) && +card_number > 0;
	}
	function validateCVV(cvv: string) {
		return cvv.trim().length === 3 && !isNaN(+cvv) && +cvv > 0;
	}
	function validateYear(year: string): number | "" {
		if (isNaN(+year) || +year < 0) return "";
		if (year.trim().length === 2) {
			return +year + 2000;
		} else return +year;
	}

	function validateMonth(month: string) {
		month = month.trim();
		if (!isNaN(+month)) {
			if (+month > 0 && +month <= 12) {
				return (+month).toString().padStart(2, "0");
			}
		} else if (month.length === 3) {
			const month_index = months.indexOf(month.toLowerCase());
			if (month_index === -1) return "";
			return (month_index + 1).toString().padStart(2, "0");
		}
		return "";
	}

	function isExpired(month: number, year: number) {
		const date = new Date();
		return (
			year < date.getFullYear() ||
			(year === date.getFullYear() && month < date.getMonth() + 1)
		);
	}
	function validate(name: string, card_number: string, cvv: string, month: string, year: string) {
		const errors = [];
		if (!validateName(name)) {
			errors.push("No name entered");
		}
		if (!validateCardNumber(card_number)) {
			errors.push("invalid card number");
		}
		if (!validateCVV(cvv)) {
			errors.push("invalid cvv");
		}
		const valid_year = validateYear(year);
		if (!valid_year) {
			errors.push("invalid year");
		}
		const valid_month = validateMonth(month);
		if (!valid_month) {
			errors.push("invalid month");
		} else if (valid_year && isExpired(+valid_month, valid_year)) {
			errors.push("card expired");
		}
		return errors;
	}
	$: errors = validate(name, card_number, cvv, month, year);
</script>

<section class="{card_type} f-{focused_input}">
	<div class="card">
		<FlipCard flipped={focused_input == "cvv"} axis="y" speed={1}>
			<svelte:fragment slot="front">
				<div class="front">
					<img class="img-1" src={card_images[card_type]} alt={card_type} />
					<div class="card-number">
						{formatNumber(card_number, 4, 16, "•")}
					</div>
					<div class="bottom">
						<div class="left">
							<span class="expiry">
								<span class="valid-thru">
									<div>valid</div>
									<div class="thru">thru</div>
								</span>
								<span class="date">
									<span class="month"
										>{formatNumber(
											validateMonth(month),
											Infinity,
											2,
											"•",
										)}</span
									>/<span class="year"
										>{formatNumber(
											year.slice(-2, year.length),
											Infinity,
											2,
											"•",
										)}</span
									>
								</span>
							</span>
							<span class="name">{name.trim().length > 0 ? name : "Full Name"}</span>
						</div>
						<div class="right">
							{#if card_type != ""}
								<img class="img-2" src={card_images[card_type]} alt={card_type} />
							{/if}
						</div>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="back">
				<div class="back">
					<div class="m-strip" />
					<div class="signature-strip">
						{formatNumber(cvv, Infinity, 3, "•")}
					</div>
				</div>
			</svelte:fragment>
		</FlipCard>
	</div>
	<form>
		<div class="accepted">
			<span>We accept:</span>
			<img src={visa} alt="visa" />
			<img src={mastercard} alt="mastercard" />
			<img src={amex} alt="amex" />
			<img src={discover} alt="discover" style="background-color: #fff" />
		</div>
		<Input
			bind:value={name}
			label="Full Name"
			max_length={25}
			autocomplete="cc-name"
			on:focus={onInputFocus}
			on:blur={onInputBlur}
		/>
		<Input
			bind:value={card_number}
			label="Card Number"
			max_length={16}
			autocomplete="cc-number"
			on:focus={onInputFocus}
			on:blur={onInputBlur}
			pattern={/^\d*$/}
			valid={validateCardNumber}
		/>
		<span class="bottom-inputs">
			<Input
				bind:value={cvv}
				label="CVV"
				max_length={3}
				autocomplete="cc-csc"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^\d*$/}
				valid={validateCVV}
			/>
			<Input
				bind:value={month}
				label="Month"
				max_length={3}
				autocomplete="cc-exp-month"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^[\djfmasond]?[\daepuco]?[nbrylgptyc]?$/}
				valid={(m) => {
					m = validateMonth(m);
					return m && (year == "" || !isExpired(+m, +validateYear(year)));
				}}
			/>
			<Input
				bind:value={year}
				label="Year"
				max_length={4}
				autocomplete="cc-exp-year"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^\d*$/}
				valid={(y) => {
					let year = validateYear(y);
					return year != "" && !isExpired(+validateMonth(month), year);
				}}
			/>
		</span>
		<button disabled={errors.length > 0}>Continue</button>
	</form>
</section>

<style lang="scss">
	section {
		display: grid;
		gap: 30px;
		max-width: 350px;
		grid-template-rows: auto 1fr;
		margin-top: 20px;
		margin-inline: auto;
	}
	.card {
		color: #000;
	}
	form {
		display: grid;
		gap: 10px;
		grid-template-columns: 1fr;
	}
	button {
		color: #000;
		font-weight: bold;
		background-color: var(--accent-00, teal);
		padding: 10px;
		border-radius: 2.5px;
		cursor: pointer;
		&:hover {
			background-color: var(--accent-01, teal);
		}
		&:disabled {
			background-color: gray;
			cursor: not-allowed;
		}
	}
	.accepted {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		img {
			height: 40px;
		}
	}
	.bottom-inputs {
		display: grid;
		gap: 10px;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.card-number {
		text-align: center;
		font-size: 23px;
		letter-spacing: 2px;
	}
	.back,
	.front {
		font-family: Consolas, "Courier New", Courier, monospace;
		height: 200px;
		border-radius: 10px;
		transition: all 0.2s ease-in-out;
		z-index: 0;
		position: relative;
		overflow: hidden;
		background-color: silver;
	}
	// Front
	.front {
		padding: 20px;
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.img-1 {
		position: absolute;
		z-index: -1;
		visibility: hidden;
	}
	.card-number {
		margin-top: 50px;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			flex-direction: column;
			font-size: 18px;
			align-items: end;
		}
		.right {
			width: 60px;
			height: 60px;
			display: grid;
			place-items: center;
		}
		img {
			height: 100%;
		}
	}
	.expiry {
		display: flex;
		gap: 10px;
		align-self: flex-start;
	}
	.valid-thru {
		font-size: 9px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		.thru {
			margin-top: -3px;
			letter-spacing: 1.5px;
		}
	}
	// Back
	.back {
		padding-top: 20px;
	}
	.m-strip {
		height: 40px;
		background: #000;
		width: 100%;
	}

	.signature-strip {
		margin-top: 20px;
		margin-left: 10px;
		height: 30px;
		background: white;
		width: 65%;
		display: flex;
		justify-content: end;
		align-items: center;
		padding-right: 10px;
	}
	// Card type specific styles
	.visa {
		.front {
			color: white;
			background-image: linear-gradient(30deg, #044086, #35afe0, #044086);
		}
		.back {
			background-image: linear-gradient(-30deg, #044086, #35afe0, #044086);
		}
	}
	.mastercard {
		.front {
			background-image: linear-gradient(60deg, #cc0001, #eb001b, gold);
			color: white;
		}
		.back {
			background-image: linear-gradient(-60deg, #cc0001, #eb001b, gold);
		}
	}
	.amex {
		.front {
			&::before {
				content: "";
				position: absolute;
				inset: 0;
				z-index: -1;
				background-image: linear-gradient(0deg, #11161a, transparent, #11161a),
					linear-gradient(90deg, #11161a, transparent, #11161a);
			}
			color: white;
		}
		.back {
			background-image: linear-gradient(0deg, #11161a, #11161a40, #11161a),
				linear-gradient(90deg, #11161a, #11161a40, #11161a);
		}
		.img-1 {
			visibility: visible;
			inset: 0;
			height: 150px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: -2;
		}
		.right {
			display: none;
		}
		.left {
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
		}
		.expiry {
			order: 1;
		}
		.valid-thru {
			display: none;
		}
	}
	.discover {
		.front {
			background-image: linear-gradient(90deg, #1e7a7a, #9abac5);
			color: white;
		}
		.back {
			background-image: linear-gradient(-90deg, #1e7a7a, #9abac5);
		}
		.img-1 {
			visibility: visible;
			z-index: 0;
			width: 160px;
			top: -45px;
			left: 15px;
		}
		.bottom {
			align-items: end;
		}
		.right {
			display: flex;
			align-items: end;
		}
		.img-2 {
			height: 60%;
			width: 100%;
			object-fit: cover;
			background-color: #fff;
		}
	}
	// highlight field corresponding to active input;
	.f-full-name .name {
		font-weight: bold;
	}
	.f-card-number .card-number {
		font-weight: bold;
	}
	.f-month .month {
		font-weight: bold;
	}
	.f-year .year {
		font-weight: bold;
	}
	.f-cvv .signature-strip {
		font-weight: bold;
	}
</style>
