<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;
</script>

<Hst.Story title="SVGs/Hot Air Balloon" icon="iconoir:hot-air-balloon">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="none">
		<style>
			svg {
				border-radius: 50%;
			}

			.cloud {
				fill: #fff;
			}

			.cloud.a {
				transform: translateX(-100%);
				animation: cloud1 2.3s 2s infinite linear;
			}

			.cloud.b {
				transform: translateX(82%);
				animation: cloud2 3.6s 1s infinite linear;
			}

			.cloud.c {
				animation: cloud3 6s infinite linear;
			}

			#balloon {
				animation: balloon 3s infinite alternate-reverse ease-in-out;
			}

			@keyframes cloud1 {
				from {
					transform: translateX(-100%);
				}

				to {
					transform: translateX(90%);
				}
			}

			@keyframes cloud2 {
				from {
					transform: translateX(-82%);
				}

				to {
					transform: translateX(85%);
				}
			}

			@keyframes cloud3 {
				from {
					transform: translateX(-32%);
				}

				to {
					transform: translateX(97%);
				}
			}

			@keyframes balloon {
				from {
					transform: translateY(-25px);
				}

				to {
					transform: translateY(25px);
				}
			}
		</style>
		<circle cx="300" cy="300" r="300" fill="#b0e2f8" />
		<path
			class="cloud b"
			d="M331 498a32 32 0 01 0-65a18 18 0 0128-20a61 61 0 01118 10a39 39 0 1110 75z"
		/>
		<path
			class="cloud c"
			d="M45 370a33 33 0 11 15-65a45 45 0 01 87-10a15 15 0 01 20 18a27 27 0 013 54z"
		/>
		<g id="balloon">
			<path
				d="M279.8 487.867v14.892a11 11 0 0 0 11 11h16.847a11 11 0 0 0 11-11v-14.892H279.8z"
				fill="#92573e"
			/>
			<path
				d="M279.797 469.236c10.485-7 24.325-7.94 38.463 0 0 0-13.73-36.634 30.662-98.73-51.584-17.073-113.37-1.858-137.052 26.08 32.78 30.56 66.238 61.784 67.927 72.65z"
				fill="url(#A)"
			/>
			<path
				d="M211.54 396.278l.33.31c23.682-27.938 85.468-43.153 137.052-26.08 4.565-6.387 9.745-13.042 15.62-19.955 12.8-15.077 25.32-32.268 35.685-50.592-85.955-47.727-223.136-4.254-245.564 40.025 10.907 13.435 33.695 34.68 56.877 56.293z"
				fill="url(#B)"
			/>
			<path
				d="M154.662 339.985c22.428-44.28 159.61-87.752 245.564-40.025 11.285-19.95 20.03-41.246 23.853-62.62-89.77-34.857-252-38.092-307.966 45.313 8.593 19.404 21.734 36.622 38.55 57.333z"
				fill="#ffd600"
			/>
			<path
				d="M106.027 246.37c1.783 13.498 5.2 25.243 10.086 36.28 55.976-83.405 218.197-80.17 307.966-45.313 1.956-10.932 2.624-21.885 1.687-32.7-127.1-55.217-272.86-11.118-319.74 41.722z"
				fill="#fff"
			/>
			<path
				d="M106.027 246.37c46.88-52.84 192.64-96.94 319.74-41.722-1.58-18.224-7.726-36.027-19.967-52.597-111.307-41.332-282.866-15.52-299.772 94.32z"
				fill="url(#C)"
			/>
			<path
				d="M299.13 86.867C112.16 86.455 101.11 209.145 106.027 246.37c16.906-109.838 188.465-135.65 299.772-94.32-18.99-25.705-52.645-48.444-106.668-65.185z"
				fill="url(#D)"
			/>
			<path
				d="M495.508 229.252c.47-50.768-30.48-142.02-196.377-142.385 54.023 16.74 87.68 39.48 106.668 65.185 43.086 16 77.144 42.06 89.71 77.2z"
				fill="#e46a11"
			/>
			<path
				d="M494.02 246.37c.862-4.873 1.428-10.67 1.488-17.12-12.565-35.14-46.623-61.2-89.71-77.2 12.24 16.57 18.388 34.373 19.967 52.597 23.65 10.274 46.654 23.987 68.254 41.722z"
				fill="#e6a600"
			/>
			<path
				d="M482.502 279.437c9.59-20.56 10.33-26.343 11.518-33.066a288.19 288.19 0 0 0-68.253-41.722c.936 10.805.268 21.758-1.688 32.7 29.164 11.324 50.68 25.985 58.423 42.098z"
				fill="#e6e6e6"
			/>
			<path
				d="M400.226 299.96c16.957 9.415 31.92 22.38 43.615 39.588 19.24-23.48 31.243-44.206 38.66-60.11-7.743-16.113-29.26-30.774-58.423-42.098-3.824 21.375-12.568 42.67-23.853 62.62z"
				fill="#ccab00"
			/>
			<path
				d="M389.193 393.223c22.782-20.366 43.807-40.444 54.648-53.675-11.695-17.208-26.658-30.173-43.615-39.588-10.366 18.324-22.875 35.515-35.685 50.592-5.874 6.913-11.054 13.568-15.62 19.954 14.607 4.835 28.397 12.26 40.27 22.717z"
				fill="#ee7e16"
			/>
			<path
				d="M318.26 469.236c3.2-15.177 37.767-46.363 70.933-76.012-11.874-10.458-25.664-17.883-40.27-22.717-44.393 62.095-30.662 98.73-30.662 98.73z"
				fill="#d1610f"
			/>
		</g>
		<path
			class="cloud a"
			d="M280 255a60 60 0 1120-115a93 93 0 01180-20a30 30 0 0140 30a50 50 0 010 100z"
		/>
		<defs>
			<linearGradient
				id="A"
				x1="239.679"
				y1="421.758"
				x2="330.642"
				y2="401.983"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#e79f11" />
				<stop offset="1" stop-color="#e76b11" />
			</linearGradient>
			<linearGradient
				id="B"
				x1="176.4"
				y1="359.468"
				x2="400.226"
				y2="310.031"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#f0d230" />
				<stop offset=".911" stop-color="#f08c30" />
			</linearGradient>
			<linearGradient
				id="C"
				x1="106.027"
				y1="238.842"
				x2="409.741"
				y2="174.575"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#f9d659" />
				<stop offset="1" stop-color="#ffb800" />
			</linearGradient>
			<linearGradient
				id="D"
				x1="105.191"
				y1="234.887"
				x2="320.755"
				y2="95.476"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#f0af30" />
				<stop offset="1" stop-color="#ef7d2b" />
			</linearGradient>
		</defs>
	</svg>
</Hst.Story>
