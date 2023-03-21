class PlayButton extends HTMLElement {
	constructor() {
		super();
		this.transitionTime = 0.5;

		this.pause = this.pause.bind(this);
		this.unpause = this.unpause.bind(this);

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
		<style>
			#button {
				cursor: pointer;
				border-radius: 50%;
				width: 10em;
				height: 10em;
				background-color: #178a00;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: none;
				--trans-time: ${this.transitionTime}s;
			}

			#icon {
				width: 35%;
				height: 45%;
				position: relative;
				transition: all var(--trans-time) ease-in-out;
			}

			#left, #right {
				clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
				background-color: #fff;
				width: 35%;
				height: 100%;
				position: absolute;
				transition: all var(--trans-time) ease-in-out;
			}

			#left { left: 0 }

			#right { right: 0 }

			#button[state="1"] {
				background-color: #b1180d;
				transform: rotate(90deg);
				transition: transform var(--trans-time) ease-in-out, background-color var(--trans-time) ease-in-out;
			}

			#button[state="1"] #icon {
				height: 35%;
				width: 45%;
				margin-bottom: 10%;
			}

			#button[state="1"] #left {
				clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
				width: 50%;
				left: 0.2%;
			}

			#button[state="1"] #right {
				clip-path: polygon(0 0, 0 0, 100% 100%, 0% 100%);
				width: 50%;
				right: 0.2%;
			}

			#button[state="0.5"] {
				transform: rotate(180deg);
				transition: transform var(--trans-time) ease-in-out, background-color var(--trans-time) ease-in-out;
			}
		</style>
		<div id="button">
			<div id="icon">
				<div id="left"></div>
				<div id="right"></div>
			</div>
		</div>
	`;

		this.btn = this.shadowRoot.querySelector("#button");
	}

	static get observedAttributes() {
		return ["state"];
	}

	get state() {
		return this.getAttribute("state");
	}

	set state(val) {
		this.setAttribute("state", val);
	}

	pause() {
		if (this.state == 1) {
			this.btn.setAttribute("state", 0.5);
			this.state = 0.5;
		} else if (this.state != 0.5) {
			this.btn.setAttribute("state", 1);
			this.state = 1;
		}
	}

	unpause() {
		if (this.state == 0.5) {
			this.btn.setAttribute("state", 0);
			this.state = 0;
		}
	}

	connectedCallback() {
		this.state = 0;
		this.btn.addEventListener("transitionend", this.unpause);
		this.btn.addEventListener("click", this.pause);
	}

	disconnectedCallback() {
		this.btn.removeEventListener("transitionend", this.unpause);
		this.btn.removeEventListener("click", this.pause);
	}
}

window.customElements.define("play-button", PlayButton);