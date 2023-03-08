export function clamp(min: number, num: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

abstract class colorType {
	protected color: Color;
	constructor(color: Color) {
		this.color = color;
	}
	public abstract getExactValue(): ColorTuple;
	protected abstract sync(): void;
}

class RGB extends colorType {
	#r: number;
	#g: number;
	#b: number;
	constructor(r: number, g: number, b: number, color: Color) {
		super(color);
		this.#r = r;
		this.#g = g;
		this.#b = b;
	}
	get r(): number { return Math.round(this.#r); }
	set r(value: number) {
		this.#r = value;
		this.sync();
	}
	get g(): number { return Math.round(this.#g); }
	set g(value: number) {
		this.#g = value;
		this.sync();
	}
	get b(): number { return Math.round(this.#b); }
	set b(value: number) {
		this.#b = value;
		this.sync();
	}
	protected sync() {
		this.color.hsl.updateFromRGB(this.#r, this.#g, this.#b);
		this.color.hsv.updateFromRGB(this.#r, this.#g, this.#b);
	}
	public getExactValue(): ColorTuple {
		return [this.#r, this.#g, this.#b];
	}
	public updateFromHSL(h: number, s: number, l: number) {
		[this.#r, this.#g, this.#b] = HSL.toRGB(h, s, l);
	}
	public updateFromHSV(h: number, s: number, v: number) {
		[this.#r, this.#g, this.#b] = HSV.toRGB(h, s, v);
	}
	static #calculateHue(r: number, g: number, b: number) {
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const delta = max - min;
		let h = 0;
		switch (max) {
			case r: h = ((g - b) / delta) % 6; break;
			case g: h = (b - r) / delta + 2; break;
			case b: h = (r - g) / delta + 4; break;
		}
		return ((h * 60) + 360) % 360;
	}
	/**
	 * Convert a color in RGB format to HSL format.
	 * @param r - Red value (0-255).
	 * @param g - Green value (0-255).
	 * @param b - Blue value (0-255).
	 */
	static toHSL(r: number, g: number, b: number): ColorTuple {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const delta = max - min;
		let h = 0;
		let s = 0;
		let l = (max + min) / 2;
		if (delta !== 0) {
			s = l < 0.5 ? delta / (max + min) : delta / (2 - max - min);
			h = RGB.#calculateHue(r, g, b);
		}
		return [h, s * 100, l * 100];
	}
	/**
	* Convert a color in RGB format to HSV format.
	* @param red - Red value (0-255)
	* @param green - Green value (0-255)
	* @param blue - Blue value (0-255)
	*/
	static toHSV(r: number, g: number, b: number): ColorTuple {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const delta = max - min;
		let h = 0;
		let s = 0;
		let v = max;
		if (delta !== 0) {
			s = delta / max;
			h = RGB.#calculateHue(r, g, b);
		}
		// max to avoid negative zero
		return [Math.max(h, 0), s * 100, v * 100];
	}
	/**
	* Convert a color in RGB format to HWB format.
	* @param red - Red value (0-255)
	* @param green - Green value (0-255)
	* @param blue - Blue value (0-255)
	*/
	static toHWB(red: number, green: number, blue: number): ColorTuple {
		red /= 255;
		green /= 255;
		blue /= 255;
		const max = Math.max(red, green, blue);
		const min = Math.min(red, green, blue);
		const delta = max - min;
		let h = 0;
		let w = min;
		let b = 1 - max;
		if (delta !== 0) {
			h = RGB.#calculateHue(red, green, blue);
		}
		return [h, w * 100, b * 100];
	}
	/**
	 * Convert a color in RGB(A) format to a hex string with alpha if alpha isn't max.
	 * @param red - Red value (0-255)
	 * @param green - Green value (0-255)
	 * @param blue - Blue value (0-255)
	 * @param alpha - Optional alpha value (0-100). Defaults to 100. If the value is 100, the alpha
	 * channel will be omitted.
	 */
	static toHEX(r: number, g: number, b: number, a: number = 100): string {
		return (
			r.toString(16).padStart(2, "0") +
			g.toString(16).padStart(2, "0") +
			b.toString(16).padStart(2, "0") +
			(a < 100 ? Math.round(a * 2.55).toString(16).padStart(2, "0") : "")
		).toUpperCase();
	}
}

class HSL extends colorType {
	#h: number;
	#s: number;
	#l: number;
	constructor(h: number, s: number, l: number, color: Color) {
		super(color);
		this.#h = h;
		this.#s = s;
		this.#l = l;
	}
	get h(): number { return Math.round(this.#h); }
	set h(value: number) {
		this.#h = value;
		this.sync();
	}
	get s() { return Math.round(this.#s); }
	set s(value: number) {
		this.#s = value;
		this.sync();
	}
	get l() { return Math.round(this.#l); }
	set l(value: number) {
		this.#l = value;
		this.sync();
	}
	protected sync() {
		this.color.rgb.updateFromHSL(this.#h, this.#s, this.#l);
		this.color.hsv.updateFromHSL(this.#h, this.#s, this.#l);
	}
	public getExactValue(): ColorTuple {
		return [this.#h, this.#s, this.#l];
	}
	public updateFromRGB(r: number, g: number, b: number) {
		[this.#h, this.#s, this.#l] = RGB.toHSL(r, g, b);
	}
	public updateFromHSV(h: number, s: number, v: number) {
		[this.#h, this.#s, this.#l] = HSV.toHSL(h, s, v);
	}
	/**
	 * Convert a color in HSL format to RGB format.
	 * @param h - Hue (0-360)
	 * @param s - Saturation (0-100)
	 * @param l - Lightness (0-100)
	 */
	static toRGB(h: number, s: number, l: number): ColorTuple {
		let r: number, g: number, b: number;
		h %= 360;
		s /= 100;
		l /= 100;
		const c = (1 - Math.abs(2 * l - 1)) * s;
		const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		const m = l - c / 2;
		if (h < 60) {
			[r, g, b] = [c, x, 0];
		} else if (h < 120) {
			[r, g, b] = [x, c, 0];
		} else if (h < 180) {
			[r, g, b] = [0, c, x];
		} else if (h < 240) {
			[r, g, b] = [0, x, c];
		} else if (h < 300) {
			[r, g, b] = [x, 0, c];
		} else {
			[r, g, b] = [c, 0, x];
		}
		return [
			(r + m) * 255,
			(g + m) * 255,
			(b + m) * 255,
		];
	}
	/**
	 * Convert a color in HSL format to HSV format.
	 * @param h - Hue (0-360)
	 * @param s - Saturation (0-100)
	 * @param l - Lightness (0-100)
	 */
	static toHSV(h: number, s: number, l: number): ColorTuple {
		s /= 100;
		l /= 100;
		let v = l + s * Math.min(l, 1 - l);
		if (v === 0) return [h, 0, 0];
		let ss = 2 * (1 - l / v);
		return [
			h,
			ss * 100,
			v * 100,
		];
	}
}

class HSV extends colorType {
	#h: number;
	#s: number;
	#v: number;
	constructor(h: number, s: number, v: number, color: Color) {
		super(color);
		this.#h = h;
		this.#s = s;
		this.#v = v;
	}
	get h(): number { return Math.round(this.#h); }
	set h(value: number) {
		this.#h = value;
		this.sync();
	}
	get s() { return Math.round(this.#s); }
	set s(value: number) {
		this.#s = value;
		this.sync();
	}
	get v() { return Math.round(this.#v); }
	set v(value: number) {
		this.#v = value;
		this.sync();
	}
	protected sync() {
		this.color.rgb.updateFromHSV(this.#h, this.#s, this.#v);
		this.color.hsl.updateFromHSV(this.#h, this.#s, this.#v);
	}
	public getExactValue(): ColorTuple {
		return [this.#h, this.#s, this.#v];
	}
	public updateFromRGB(r: number, g: number, b: number) {
		[this.#h, this.#s, this.#v] = RGB.toHSV(r, g, b);
	}
	public updateFromHSL(h: number, s: number, l: number) {
		[this.#h, this.#s, this.#v] = HSL.toHSV(h, s, l);
	}
	/**
 * Convert a color in HSV format to RGB format.
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param v - Value (Brightness) (0-100)
 */
	static toRGB(h: number, s: number, v: number): ColorTuple {
		h %= 360;
		s /= 100;
		v /= 100;
		const c = v * s;
		const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		let r: number, g: number, b: number;
		const m = v - c;
		if (h < 60) {
			[r, g, b] = [c, x, 0];
		} else if (h < 120) {
			[r, g, b] = [x, c, 0];
		} else if (h < 180) {
			[r, g, b] = [0, c, x];
		} else if (h < 240) {
			[r, g, b] = [0, x, c];
		} else if (h < 300) {
			[r, g, b] = [x, 0, c];
		} else {
			[r, g, b] = [c, 0, x];
		}
		return [
			(r + m) * 255,
			(g + m) * 255,
			(b + m) * 255,
		];
	}
	static toHSL(h: number, s: number, v: number): ColorTuple {
		s /= 100;
		v /= 100;
		let l = v * (1 - s / 2);
		if (l === 0) return [h, 0, 0];
		if (l === 1) return [h, 0, 100];
		let ss = (v - l) / Math.min(l, 1 - l);
		return [
			h,
			ss * 100,
			l * 100,
		];
	}
	static toHWB(h: number, s: number, v: number): ColorTuple {
		s /= 100;
		v /= 100;
		let w = (1 - s) * v;
		return [
			h,
			w * 100,
			(1 - v) * 100,
		];
	}
}

export class Color {
	#a: number;
	readonly rgb: RGB;
	readonly hsl: HSL;
	readonly hsv: HSV;
	constructor(r: number, g: number, b: number, a: number = 100) {
		this.#a = a;
		this.rgb = new RGB(r, g, b, this);
		this.hsl = new HSL(...RGB.toHSL(r, g, b), this);
		this.hsv = new HSV(...RGB.toHSV(r, g, b), this);
	}
	get a(): number { return Math.round(this.#a); }
	set a(value: number) { this.#a = value; }
	// HEX
	get hex(): string {
		return RGB.toHEX(this.rgb.r, this.rgb.g, this.rgb.b);
	}
	set hex(value: string) {
		if (value.startsWith("#")) {
			value = value.slice(1);
		}
		if (value.length === 4 || value.length === 8) {
			[this.rgb.r, this.rgb.g, this.rgb.b, this.a] = Color.HEXtoRGBA(value);
		} else {
			[this.rgb.r, this.rgb.g, this.rgb.b] = Color.HEXtoRGBA(value);
		}
	}
	get hexa(): string {
		return RGB.toHEX(this.rgb.r, this.rgb.g, this.rgb.b, this.a);
	}
	set hexa(value: string) {
		this.hex = value;
	}

	toString(): string {
		return "#" + this.hexa;
	}
	/**
	 * Convert a hex color string with or without an alpha channel to an RGBA color.
	 * @param hex - The hexadecimal color string
	 */
	static HEXtoRGBA(hex: string): AlphaColorTuple {
		if (hex.startsWith("#")) hex = hex.slice(1);
		if (hex.length === 3 || hex.length === 4) {
			hex = hex
				.split("")
				.map((c) => c + c)
				.join("");
		}
		if (hex.length === 6) hex += "FF";
		return [
			parseInt(hex.slice(0, 2), 16),
			parseInt(hex.slice(2, 4), 16),
			parseInt(hex.slice(4, 6), 16),
			parseInt(hex.slice(6, 8), 16) / 2.55,
		];
	}
	/**
	 * Create a new Color object from an RGB color.
	 * @param hex - The hexadecimal color string
	 */
	static fromHEX(hex: string): Color {
		return new Color(...Color.HEXtoRGBA(hex));
	}
}