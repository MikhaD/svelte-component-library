var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _r, _g, _b, _calculateHue, calculateHue_fn, _h, _s, _l, _h2, _s2, _v, _a;
import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as validate_slots, W as element, X as attr_dev, Y as add_location, Z as insert_dev, _ as listen_dev, $ as prop_dev, a0 as noop, a1 as detach_dev, a2 as run_all, a3 as text, a4 as append_dev, a5 as set_data_dev, a6 as toggle_class, a7 as set_style, a8 as binding_callbacks, a9 as bind, aa as space, ab as create_component, ac as add_render_callback, ad as mount_component, ae as select_option, af as group_outros, ag as transition_out, ah as check_outros, ai as transition_in, aj as add_flush_callback, ak as destroy_component, al as select_value, am as svg_element, an as create_slot, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, ar as bubble, as as empty, at as Logo_square, au as createRouter, av as createWebHistory, aw as createWebHashHistory, ax as useDark, ay as useToggle, k as watch, az as markRaw, E as reactive, d as defineComponent, r as ref, aA as watchEffect, o as openBlock, q as createBlock, aB as mergeProps, aC as resolveDynamicComponent, h as createCommentVNode } from "./vendor-4e25265d.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/svelte-component-library/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function clamp$1(min, num, max) {
  return Math.min(Math.max(num, min), max);
}
class colorType {
  constructor(color) {
    __publicField(this, "color");
    this.color = color;
  }
}
const _RGB = class extends colorType {
  constructor(r, g, b, color) {
    super(color);
    __privateAdd(this, _r, void 0);
    __privateAdd(this, _g, void 0);
    __privateAdd(this, _b, void 0);
    __privateSet(this, _r, r);
    __privateSet(this, _g, g);
    __privateSet(this, _b, b);
  }
  get r() {
    return Math.round(__privateGet(this, _r));
  }
  set r(value) {
    __privateSet(this, _r, value);
    this.sync();
  }
  get g() {
    return Math.round(__privateGet(this, _g));
  }
  set g(value) {
    __privateSet(this, _g, value);
    this.sync();
  }
  get b() {
    return Math.round(__privateGet(this, _b));
  }
  set b(value) {
    __privateSet(this, _b, value);
    this.sync();
  }
  sync() {
    this.color.hsl.updateFromRGB(__privateGet(this, _r), __privateGet(this, _g), __privateGet(this, _b));
    this.color.hsv.updateFromRGB(__privateGet(this, _r), __privateGet(this, _g), __privateGet(this, _b));
  }
  getExactValue() {
    return [__privateGet(this, _r), __privateGet(this, _g), __privateGet(this, _b)];
  }
  updateFromHSL(h, s, l) {
    [__privateWrapper(this, _r)._, __privateWrapper(this, _g)._, __privateWrapper(this, _b)._] = HSL.toRGB(h, s, l);
  }
  updateFromHSV(h, s, v) {
    [__privateWrapper(this, _r)._, __privateWrapper(this, _g)._, __privateWrapper(this, _b)._] = HSV.toRGB(h, s, v);
  }
  /**
   * Convert a color in RGB format to HSL format.
   * @param r - Red value (0-255).
   * @param g - Green value (0-255).
   * @param b - Blue value (0-255).
   */
  static toHSL(r, g, b) {
    var _a2;
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
      h = __privateMethod(_a2 = _RGB, _calculateHue, calculateHue_fn).call(_a2, r, g, b);
    }
    return [h, s * 100, l * 100];
  }
  /**
  * Convert a color in RGB format to HSV format.
  * @param red - Red value (0-255)
  * @param green - Green value (0-255)
  * @param blue - Blue value (0-255)
  */
  static toHSV(r, g, b) {
    var _a2;
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
      h = __privateMethod(_a2 = _RGB, _calculateHue, calculateHue_fn).call(_a2, r, g, b);
    }
    return [Math.max(h, 0), s * 100, v * 100];
  }
  /**
  * Convert a color in RGB format to HWB format.
  * @param red - Red value (0-255)
  * @param green - Green value (0-255)
  * @param blue - Blue value (0-255)
  */
  static toHWB(red, green, blue) {
    var _a2;
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
      h = __privateMethod(_a2 = _RGB, _calculateHue, calculateHue_fn).call(_a2, red, green, blue);
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
  static toHEX(r, g, b, a = 100) {
    return (r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0") + (a < 100 ? Math.round(a * 2.55).toString(16).padStart(2, "0") : "")).toUpperCase();
  }
};
let RGB = _RGB;
_r = new WeakMap();
_g = new WeakMap();
_b = new WeakMap();
_calculateHue = new WeakSet();
calculateHue_fn = function(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  switch (max) {
    case r:
      h = (g - b) / delta % 6;
      break;
    case g:
      h = (b - r) / delta + 2;
      break;
    case b:
      h = (r - g) / delta + 4;
      break;
  }
  return (h * 60 + 360) % 360;
};
__privateAdd(RGB, _calculateHue);
class HSL extends colorType {
  constructor(h, s, l, color) {
    super(color);
    __privateAdd(this, _h, void 0);
    __privateAdd(this, _s, void 0);
    __privateAdd(this, _l, void 0);
    __privateSet(this, _h, h);
    __privateSet(this, _s, s);
    __privateSet(this, _l, l);
  }
  get h() {
    return Math.round(__privateGet(this, _h));
  }
  set h(value) {
    __privateSet(this, _h, value);
    this.sync();
  }
  get s() {
    return Math.round(__privateGet(this, _s));
  }
  set s(value) {
    __privateSet(this, _s, value);
    this.sync();
  }
  get l() {
    return Math.round(__privateGet(this, _l));
  }
  set l(value) {
    __privateSet(this, _l, value);
    this.sync();
  }
  sync() {
    this.color.rgb.updateFromHSL(__privateGet(this, _h), __privateGet(this, _s), __privateGet(this, _l));
    this.color.hsv.updateFromHSL(__privateGet(this, _h), __privateGet(this, _s), __privateGet(this, _l));
  }
  getExactValue() {
    return [__privateGet(this, _h), __privateGet(this, _s), __privateGet(this, _l)];
  }
  updateFromRGB(r, g, b) {
    [__privateWrapper(this, _h)._, __privateWrapper(this, _s)._, __privateWrapper(this, _l)._] = RGB.toHSL(r, g, b);
  }
  updateFromHSV(h, s, v) {
    [__privateWrapper(this, _h)._, __privateWrapper(this, _s)._, __privateWrapper(this, _l)._] = HSV.toHSL(h, s, v);
  }
  /**
   * Convert a color in HSL format to RGB format.
   * @param h - Hue (0-360)
   * @param s - Saturation (0-100)
   * @param l - Lightness (0-100)
   */
  static toRGB(h, s, l) {
    let r, g, b;
    h %= 360;
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
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
      (b + m) * 255
    ];
  }
  /**
   * Convert a color in HSL format to HSV format.
   * @param h - Hue (0-360)
   * @param s - Saturation (0-100)
   * @param l - Lightness (0-100)
   */
  static toHSV(h, s, l) {
    s /= 100;
    l /= 100;
    let v = l + s * Math.min(l, 1 - l);
    if (v === 0)
      return [h, 0, 0];
    let ss = 2 * (1 - l / v);
    return [
      h,
      ss * 100,
      v * 100
    ];
  }
}
_h = new WeakMap();
_s = new WeakMap();
_l = new WeakMap();
class HSV extends colorType {
  constructor(h, s, v, color) {
    super(color);
    __privateAdd(this, _h2, void 0);
    __privateAdd(this, _s2, void 0);
    __privateAdd(this, _v, void 0);
    __privateSet(this, _h2, h);
    __privateSet(this, _s2, s);
    __privateSet(this, _v, v);
  }
  get h() {
    return Math.round(__privateGet(this, _h2));
  }
  set h(value) {
    __privateSet(this, _h2, value);
    this.sync();
  }
  get s() {
    return Math.round(__privateGet(this, _s2));
  }
  set s(value) {
    __privateSet(this, _s2, value);
    this.sync();
  }
  get v() {
    return Math.round(__privateGet(this, _v));
  }
  set v(value) {
    __privateSet(this, _v, value);
    this.sync();
  }
  sync() {
    this.color.rgb.updateFromHSV(__privateGet(this, _h2), __privateGet(this, _s2), __privateGet(this, _v));
    this.color.hsl.updateFromHSV(__privateGet(this, _h2), __privateGet(this, _s2), __privateGet(this, _v));
  }
  getExactValue() {
    return [__privateGet(this, _h2), __privateGet(this, _s2), __privateGet(this, _v)];
  }
  updateFromRGB(r, g, b) {
    [__privateWrapper(this, _h2)._, __privateWrapper(this, _s2)._, __privateWrapper(this, _v)._] = RGB.toHSV(r, g, b);
  }
  updateFromHSL(h, s, l) {
    [__privateWrapper(this, _h2)._, __privateWrapper(this, _s2)._, __privateWrapper(this, _v)._] = HSL.toHSV(h, s, l);
  }
  /**
  * Convert a color in HSV format to RGB format.
  * @param h - Hue (0-360)
  * @param s - Saturation (0-100)
  * @param v - Value (Brightness) (0-100)
  */
  static toRGB(h, s, v) {
    h %= 360;
    s /= 100;
    v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    let r, g, b;
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
      (b + m) * 255
    ];
  }
  static toHSL(h, s, v) {
    s /= 100;
    v /= 100;
    let l = v * (1 - s / 2);
    if (l === 0)
      return [h, 0, 0];
    if (l === 1)
      return [h, 0, 100];
    let ss = (v - l) / Math.min(l, 1 - l);
    return [
      h,
      ss * 100,
      l * 100
    ];
  }
  static toHWB(h, s, v) {
    s /= 100;
    v /= 100;
    let w = (1 - s) * v;
    return [
      h,
      w * 100,
      (1 - v) * 100
    ];
  }
}
_h2 = new WeakMap();
_s2 = new WeakMap();
_v = new WeakMap();
const _Color = class {
  constructor(r, g, b, a = 100) {
    __privateAdd(this, _a, void 0);
    __publicField(this, "rgb");
    __publicField(this, "hsl");
    __publicField(this, "hsv");
    __privateSet(this, _a, a);
    this.rgb = new RGB(r, g, b, this);
    this.hsl = new HSL(...RGB.toHSL(r, g, b), this);
    this.hsv = new HSV(...RGB.toHSV(r, g, b), this);
  }
  get a() {
    return Math.round(__privateGet(this, _a));
  }
  set a(value) {
    __privateSet(this, _a, value);
  }
  // HEX
  get hex() {
    return RGB.toHEX(this.rgb.r, this.rgb.g, this.rgb.b);
  }
  set hex(value) {
    if (value.startsWith("#")) {
      value = value.slice(1);
    }
    if (value.length === 4 || value.length === 8) {
      [this.rgb.r, this.rgb.g, this.rgb.b, this.a] = _Color.HEXtoRGBA(value);
    } else {
      [this.rgb.r, this.rgb.g, this.rgb.b] = _Color.HEXtoRGBA(value);
    }
  }
  get hexa() {
    return RGB.toHEX(this.rgb.r, this.rgb.g, this.rgb.b, this.a);
  }
  set hexa(value) {
    this.hex = value;
  }
  toString() {
    return "#" + this.hexa;
  }
  /**
   * Convert a hex color string with or without an alpha channel to an RGBA color.
   * @param hex - The hexadecimal color string
   */
  static HEXtoRGBA(hex) {
    if (hex.startsWith("#"))
      hex = hex.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    if (hex.length === 6)
      hex += "FF";
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
      parseInt(hex.slice(6, 8), 16) / 2.55
    ];
  }
  /**
   * Create a new Color object from an RGB color.
   * @param hex - The hexadecimal color string
   */
  static fromHEX(hex) {
    return new _Color(..._Color.HEXtoRGBA(hex));
  }
};
let Color = _Color;
_a = new WeakMap();
const HexInput_svelte_svelte_type_style_lang = "";
const file$x = "src/components/ColorPicker/HexInput.svelte";
function create_fragment$z(ctx) {
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input = element("input");
      attr_dev(input, "type", "text");
      input.value = /*value*/
      ctx[0];
      attr_dev(input, "class", "s-uYwvhXTno0Hc");
      add_location(input, file$x, 46, 0, 950);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, input, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "keydown",
            /*onKeydown*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*onBlur*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        prop_dev(
          input,
          "value",
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$z.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$z($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("HexInput", slots, []);
  let { value } = $$props;
  const validChars = /* @__PURE__ */ new Set([..."0123456789abcdef#", "delete", "backspace", "arrowleft", "arrowright"]);
  function validateHex(hex) {
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }
    if (![1, 3, 4, 6, 8].includes(hex.length)) {
      return false;
    }
    hex = hex.toLowerCase();
    for (const char of hex) {
      if (!validChars.has(char)) {
        return false;
      }
    }
    return true;
  }
  function onKeydown(e) {
    const key = e.key.toLowerCase();
    if (key === "enter") {
      e.currentTarget.blur();
    } else if (key === "v" && e.ctrlKey || !validChars.has(key)) {
      e.preventDefault();
    }
  }
  function onBlur(e) {
    let v = e.currentTarget.value;
    if (validateHex(v)) {
      v = v.replace("#", "");
      if (v.length === 1) {
        v = v.repeat(6);
      }
      $$invalidate(0, value = v);
    } else if (v === "" || v === "#") {
      $$invalidate(0, value = "000000");
    }
    e.currentTarget.value = value;
  }
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<HexInput> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<HexInput> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$capture_state = () => ({
    value,
    validChars,
    validateHex,
    onKeydown,
    onBlur
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, onKeydown, onBlur];
}
class HexInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$z, create_fragment$z, safe_not_equal, { value: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HexInput",
      options,
      id: create_fragment$z.name
    });
  }
  get value() {
    throw new Error("<HexInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<HexInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const NumberInput_svelte_svelte_type_style_lang = "";
const file$w = "src/components/ColorPicker/NumberInput.svelte";
function create_fragment$y(ctx) {
  let span3;
  let input;
  let span2;
  let span0;
  let t0;
  let span1;
  let t1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span3 = element("span");
      input = element("input");
      span2 = element("span");
      span0 = element("span");
      t0 = text(
        /*value*/
        ctx[0]
      );
      span1 = element("span");
      t1 = text(
        /*suffix*/
        ctx[3]
      );
      attr_dev(input, "type", "text");
      attr_dev(input, "inputmode", "numeric");
      attr_dev(
        input,
        "min",
        /*min*/
        ctx[1]
      );
      attr_dev(
        input,
        "max",
        /*max*/
        ctx[2]
      );
      input.value = /*value*/
      ctx[0];
      attr_dev(input, "class", "s-AtPy_6gOzO0N");
      add_location(input, file$w, 39, 1, 1102);
      attr_dev(span0, "class", "pad s-AtPy_6gOzO0N");
      add_location(span0, file$w, 48, 2, 1244);
      attr_dev(span1, "class", "value s-AtPy_6gOzO0N");
      add_location(span1, file$w, 48, 34, 1276);
      attr_dev(span2, "class", "suffix s-AtPy_6gOzO0N");
      add_location(span2, file$w, 47, 3, 1220);
      attr_dev(span3, "class", "input s-AtPy_6gOzO0N");
      add_location(span3, file$w, 38, 0, 1080);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span3, anchor);
      append_dev(span3, input);
      append_dev(span3, span2);
      append_dev(span2, span0);
      append_dev(span0, t0);
      append_dev(span2, span1);
      append_dev(span1, t1);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*onInput*/
            ctx[4],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "keydown",
            /*onKeydown*/
            ctx[5],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*min*/
      2) {
        attr_dev(
          input,
          "min",
          /*min*/
          ctx2[1]
        );
      }
      if (dirty & /*max*/
      4) {
        attr_dev(
          input,
          "max",
          /*max*/
          ctx2[2]
        );
      }
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        prop_dev(
          input,
          "value",
          /*value*/
          ctx2[0]
        );
      }
      if (dirty & /*value*/
      1)
        set_data_dev(
          t0,
          /*value*/
          ctx2[0]
        );
      if (dirty & /*suffix*/
      8)
        set_data_dev(
          t1,
          /*suffix*/
          ctx2[3]
        );
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span3);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$y.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function clamp(min2, num, max2) {
  return Math.min(Math.max(num, min2), max2);
}
function instance$y($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("NumberInput", slots, []);
  let { value } = $$props;
  let { min = 0 } = $$props;
  let { max = Infinity } = $$props;
  let { step = 1 } = $$props;
  let { wrap = false } = $$props;
  let { suffix = "" } = $$props;
  function onInput(e) {
    if (!isNaN(+e.currentTarget.value)) {
      $$invalidate(0, value = clamp(min, +e.currentTarget.value, max));
    }
    e.currentTarget.value = value.toString();
  }
  function onKeydown(e) {
    if (e.key === "ArrowUp") {
      if (wrap && value + step > max) {
        $$invalidate(0, value = clamp(min, min + (value + step - max), max));
        e.currentTarget.value = value.toString();
        return;
      }
      $$invalidate(0, value = clamp(min, value + step, max));
      e.currentTarget.value = value.toString();
    } else if (e.key === "ArrowDown") {
      if (wrap && value - step < min) {
        $$invalidate(0, value = clamp(min, max - (min - (value - step)), max));
        e.currentTarget.value = value.toString();
        return;
      }
      $$invalidate(0, value = clamp(min, value - step, max));
      e.currentTarget.value = value.toString();
    } else if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  }
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<NumberInput> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value", "min", "max", "step", "wrap", "suffix"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<NumberInput> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(6, step = $$props2.step);
    if ("wrap" in $$props2)
      $$invalidate(7, wrap = $$props2.wrap);
    if ("suffix" in $$props2)
      $$invalidate(3, suffix = $$props2.suffix);
  };
  $$self.$capture_state = () => ({
    value,
    min,
    max,
    step,
    wrap,
    suffix,
    clamp,
    onInput,
    onKeydown
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(6, step = $$props2.step);
    if ("wrap" in $$props2)
      $$invalidate(7, wrap = $$props2.wrap);
    if ("suffix" in $$props2)
      $$invalidate(3, suffix = $$props2.suffix);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, min, max, suffix, onInput, onKeydown, step, wrap];
}
class NumberInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$y, create_fragment$y, safe_not_equal, {
      value: 0,
      min: 1,
      max: 2,
      step: 6,
      wrap: 7,
      suffix: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "NumberInput",
      options,
      id: create_fragment$y.name
    });
  }
  get value() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get step() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set step(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get wrap() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set wrap(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get suffix() {
    throw new Error("<NumberInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set suffix(value) {
    throw new Error("<NumberInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Slider_svelte_svelte_type_style_lang = "";
const file$v = "src/components/ColorPicker/Slider.svelte";
function create_fragment$x(ctx) {
  let div;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "slider s-yKxbFAbhuAoV");
      toggle_class(
        div,
        "checker",
        /*checker*/
        ctx[3]
      );
      set_style(
        div,
        "--bg",
        /*bg*/
        ctx[1]
      );
      set_style(
        div,
        "--distance",
        /*value*/
        ctx[0] / /*max*/
        ctx[2]
      );
      add_location(div, file$v, 24, 0, 558);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            window,
            "mouseup",
            /*selectEnd*/
            ctx[6],
            false,
            false,
            false
          ),
          listen_dev(
            window,
            "mousemove",
            /*selectMove*/
            ctx[5],
            false,
            false,
            false
          ),
          listen_dev(
            div,
            "mousedown",
            /*onClick*/
            ctx[4],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*checker*/
      8) {
        toggle_class(
          div,
          "checker",
          /*checker*/
          ctx2[3]
        );
      }
      if (dirty & /*bg*/
      2) {
        set_style(
          div,
          "--bg",
          /*bg*/
          ctx2[1]
        );
      }
      if (dirty & /*value, max*/
      5) {
        set_style(
          div,
          "--distance",
          /*value*/
          ctx2[0] / /*max*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$x.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$x($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Slider", slots, []);
  let { value } = $$props;
  let { bg } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { checker = false } = $$props;
  let selecting = false;
  let BCR;
  function onClick(e) {
    BCR = e.currentTarget.getBoundingClientRect();
    selecting = true;
    selectMove(e);
  }
  function selectMove(e) {
    if (selecting) {
      $$invalidate(0, value = clamp$1(min, Math.round((e.clientX - BCR.x) / BCR.width * (max - min)), max));
    }
  }
  function selectEnd() {
    selecting = false;
  }
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Slider> was created without expected prop 'value'");
    }
    if (bg === void 0 && !("bg" in $$props || $$self.$$.bound[$$self.$$.props["bg"]])) {
      console.warn("<Slider> was created without expected prop 'bg'");
    }
  });
  const writable_props = ["value", "bg", "min", "max", "checker"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Slider> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("bg" in $$props2)
      $$invalidate(1, bg = $$props2.bg);
    if ("min" in $$props2)
      $$invalidate(7, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("checker" in $$props2)
      $$invalidate(3, checker = $$props2.checker);
  };
  $$self.$capture_state = () => ({
    clamp: clamp$1,
    value,
    bg,
    min,
    max,
    checker,
    selecting,
    BCR,
    onClick,
    selectMove,
    selectEnd
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("bg" in $$props2)
      $$invalidate(1, bg = $$props2.bg);
    if ("min" in $$props2)
      $$invalidate(7, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("checker" in $$props2)
      $$invalidate(3, checker = $$props2.checker);
    if ("selecting" in $$props2)
      selecting = $$props2.selecting;
    if ("BCR" in $$props2)
      BCR = $$props2.BCR;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, bg, max, checker, onClick, selectMove, selectEnd, min];
}
class Slider extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$x, create_fragment$x, safe_not_equal, {
      value: 0,
      bg: 1,
      min: 7,
      max: 2,
      checker: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Slider",
      options,
      id: create_fragment$x.name
    });
  }
  get value() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bg() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bg(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get checker() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set checker(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const TwoDSelect_svelte_svelte_type_style_lang = "";
const file$u = "src/components/ColorPicker/TwoDSelect.svelte";
function create_fragment$w(ctx) {
  let div;
  let style___saturation = `${/*x*/
  ctx[0]}%`;
  let style___x = `${/*y*/
  ctx[1]}%`;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "select-wb s-q3ZJiMphOIuF");
      set_style(
        div,
        "--hue",
        /*h*/
        ctx[2]
      );
      set_style(div, "--saturation", style___saturation);
      set_style(div, "--x", style___x);
      set_style(
        div,
        "--bg",
        /*bg*/
        ctx[3]
      );
      add_location(div, file$u, 25, 0, 565);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            window,
            "mouseup",
            /*selectEnd*/
            ctx[6],
            false,
            false,
            false
          ),
          listen_dev(
            window,
            "mousemove",
            /*selectMove*/
            ctx[5],
            false,
            false,
            false
          ),
          listen_dev(
            div,
            "mousedown",
            /*selectWB*/
            ctx[4],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*h*/
      4) {
        set_style(
          div,
          "--hue",
          /*h*/
          ctx2[2]
        );
      }
      if (dirty & /*x*/
      1 && style___saturation !== (style___saturation = `${/*x*/
      ctx2[0]}%`)) {
        set_style(div, "--saturation", style___saturation);
      }
      if (dirty & /*y*/
      2 && style___x !== (style___x = `${/*y*/
      ctx2[1]}%`)) {
        set_style(div, "--x", style___x);
      }
      if (dirty & /*bg*/
      8) {
        set_style(
          div,
          "--bg",
          /*bg*/
          ctx2[3]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$w.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$w($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("TwoDSelect", slots, []);
  let { h } = $$props;
  let { bg } = $$props;
  let { x } = $$props;
  let { y } = $$props;
  let selectingSL = false;
  let BCR;
  function selectWB(e) {
    BCR = e.currentTarget.getBoundingClientRect();
    selectingSL = true;
    selectMove(e);
  }
  function selectMove(e) {
    if (selectingSL) {
      $$invalidate(0, x = clamp$1(0, (e.clientX - BCR.x) / BCR.width * 100, 100));
      $$invalidate(1, y = clamp$1(0, 100 - (e.clientY - BCR.y) / BCR.height * 100, 100));
    }
  }
  function selectEnd() {
    selectingSL = false;
  }
  $$self.$$.on_mount.push(function() {
    if (h === void 0 && !("h" in $$props || $$self.$$.bound[$$self.$$.props["h"]])) {
      console.warn("<TwoDSelect> was created without expected prop 'h'");
    }
    if (bg === void 0 && !("bg" in $$props || $$self.$$.bound[$$self.$$.props["bg"]])) {
      console.warn("<TwoDSelect> was created without expected prop 'bg'");
    }
    if (x === void 0 && !("x" in $$props || $$self.$$.bound[$$self.$$.props["x"]])) {
      console.warn("<TwoDSelect> was created without expected prop 'x'");
    }
    if (y === void 0 && !("y" in $$props || $$self.$$.bound[$$self.$$.props["y"]])) {
      console.warn("<TwoDSelect> was created without expected prop 'y'");
    }
  });
  const writable_props = ["h", "bg", "x", "y"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<TwoDSelect> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("h" in $$props2)
      $$invalidate(2, h = $$props2.h);
    if ("bg" in $$props2)
      $$invalidate(3, bg = $$props2.bg);
    if ("x" in $$props2)
      $$invalidate(0, x = $$props2.x);
    if ("y" in $$props2)
      $$invalidate(1, y = $$props2.y);
  };
  $$self.$capture_state = () => ({
    clamp: clamp$1,
    h,
    bg,
    x,
    y,
    selectingSL,
    BCR,
    selectWB,
    selectMove,
    selectEnd
  });
  $$self.$inject_state = ($$props2) => {
    if ("h" in $$props2)
      $$invalidate(2, h = $$props2.h);
    if ("bg" in $$props2)
      $$invalidate(3, bg = $$props2.bg);
    if ("x" in $$props2)
      $$invalidate(0, x = $$props2.x);
    if ("y" in $$props2)
      $$invalidate(1, y = $$props2.y);
    if ("selectingSL" in $$props2)
      selectingSL = $$props2.selectingSL;
    if ("BCR" in $$props2)
      BCR = $$props2.BCR;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [x, y, h, bg, selectWB, selectMove, selectEnd];
}
class TwoDSelect extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { h: 2, bg: 3, x: 0, y: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TwoDSelect",
      options,
      id: create_fragment$w.name
    });
  }
  get h() {
    throw new Error("<TwoDSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set h(value) {
    throw new Error("<TwoDSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bg() {
    throw new Error("<TwoDSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bg(value) {
    throw new Error("<TwoDSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get x() {
    throw new Error("<TwoDSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set x(value) {
    throw new Error("<TwoDSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get y() {
    throw new Error("<TwoDSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set y(value) {
    throw new Error("<TwoDSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ColorPicker_svelte_svelte_type_style_lang = "";
const file$t = "src/components/ColorPicker/ColorPicker.svelte";
function create_else_block(ctx) {
  let twodselect;
  let updating_x;
  let updating_y;
  let current;
  function twodselect_x_binding_1(value) {
    ctx[5](value);
  }
  function twodselect_y_binding_1(value) {
    ctx[6](value);
  }
  let twodselect_props = {
    h: (
      /*color*/
      ctx[1].hsv.h
    ),
    bg: "linear-gradient(to top, #000, transparent),\n		linear-gradient(to left, hsl(" + /*color*/
    ctx[1].hsl.h + " 100% 50%), #fff)"
  };
  if (
    /*color*/
    ctx[1].hsv.s !== void 0
  ) {
    twodselect_props.x = /*color*/
    ctx[1].hsv.s;
  }
  if (
    /*color*/
    ctx[1].hsv.v !== void 0
  ) {
    twodselect_props.y = /*color*/
    ctx[1].hsv.v;
  }
  twodselect = new TwoDSelect({ props: twodselect_props, $$inline: true });
  binding_callbacks.push(() => bind(twodselect, "x", twodselect_x_binding_1));
  binding_callbacks.push(() => bind(twodselect, "y", twodselect_y_binding_1));
  const block = {
    c: function create() {
      create_component(twodselect.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(twodselect, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const twodselect_changes = {};
      if (dirty & /*color*/
      2)
        twodselect_changes.h = /*color*/
        ctx2[1].hsv.h;
      if (dirty & /*color*/
      2)
        twodselect_changes.bg = "linear-gradient(to top, #000, transparent),\n		linear-gradient(to left, hsl(" + /*color*/
        ctx2[1].hsl.h + " 100% 50%), #fff)";
      if (!updating_x && dirty & /*color*/
      2) {
        updating_x = true;
        twodselect_changes.x = /*color*/
        ctx2[1].hsv.s;
        add_flush_callback(() => updating_x = false);
      }
      if (!updating_y && dirty & /*color*/
      2) {
        updating_y = true;
        twodselect_changes.y = /*color*/
        ctx2[1].hsv.v;
        add_flush_callback(() => updating_y = false);
      }
      twodselect.$set(twodselect_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(twodselect.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(twodselect.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(twodselect, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(22:1) {:else}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let twodselect;
  let updating_x;
  let updating_y;
  let current;
  function twodselect_x_binding(value) {
    ctx[3](value);
  }
  function twodselect_y_binding(value) {
    ctx[4](value);
  }
  let twodselect_props = {
    h: (
      /*color*/
      ctx[1].hsl.h
    ),
    bg: "linear-gradient(to top, #000, transparent, #fff),\n		linear-gradient(to left, hsl(" + /*color*/
    ctx[1].hsl.h + " 100% 50%), #808080)"
  };
  if (
    /*color*/
    ctx[1].hsl.s !== void 0
  ) {
    twodselect_props.x = /*color*/
    ctx[1].hsl.s;
  }
  if (
    /*color*/
    ctx[1].hsl.l !== void 0
  ) {
    twodselect_props.y = /*color*/
    ctx[1].hsl.l;
  }
  twodselect = new TwoDSelect({ props: twodselect_props, $$inline: true });
  binding_callbacks.push(() => bind(twodselect, "x", twodselect_x_binding));
  binding_callbacks.push(() => bind(twodselect, "y", twodselect_y_binding));
  const block = {
    c: function create() {
      create_component(twodselect.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(twodselect, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const twodselect_changes = {};
      if (dirty & /*color*/
      2)
        twodselect_changes.h = /*color*/
        ctx2[1].hsl.h;
      if (dirty & /*color*/
      2)
        twodselect_changes.bg = "linear-gradient(to top, #000, transparent, #fff),\n		linear-gradient(to left, hsl(" + /*color*/
        ctx2[1].hsl.h + " 100% 50%), #808080)";
      if (!updating_x && dirty & /*color*/
      2) {
        updating_x = true;
        twodselect_changes.x = /*color*/
        ctx2[1].hsl.s;
        add_flush_callback(() => updating_x = false);
      }
      if (!updating_y && dirty & /*color*/
      2) {
        updating_y = true;
        twodselect_changes.y = /*color*/
        ctx2[1].hsl.l;
        add_flush_callback(() => updating_y = false);
      }
      twodselect.$set(twodselect_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(twodselect.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(twodselect.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(twodselect, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: '(14:1) {#if colorType === \\"hsl\\"}',
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let numberinput0;
  let updating_value;
  let t0;
  let numberinput1;
  let updating_value_1;
  let t1;
  let numberinput2;
  let updating_value_2;
  let current;
  function numberinput0_value_binding_2(value) {
    ctx[17](value);
  }
  let numberinput0_props = { max: 360, wrap: true };
  if (
    /*color*/
    ctx[1].hsv.h !== void 0
  ) {
    numberinput0_props.value = /*color*/
    ctx[1].hsv.h;
  }
  numberinput0 = new NumberInput({
    props: numberinput0_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput0, "value", numberinput0_value_binding_2));
  function numberinput1_value_binding_2(value) {
    ctx[18](value);
  }
  let numberinput1_props = { max: 100, suffix: "%" };
  if (
    /*color*/
    ctx[1].hsv.s !== void 0
  ) {
    numberinput1_props.value = /*color*/
    ctx[1].hsv.s;
  }
  numberinput1 = new NumberInput({
    props: numberinput1_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput1, "value", numberinput1_value_binding_2));
  function numberinput2_value_binding_2(value) {
    ctx[19](value);
  }
  let numberinput2_props = { max: 100, suffix: "%" };
  if (
    /*color*/
    ctx[1].hsv.v !== void 0
  ) {
    numberinput2_props.value = /*color*/
    ctx[1].hsv.v;
  }
  numberinput2 = new NumberInput({
    props: numberinput2_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput2, "value", numberinput2_value_binding_2));
  const block = {
    c: function create() {
      create_component(numberinput0.$$.fragment);
      t0 = space();
      create_component(numberinput1.$$.fragment);
      t1 = space();
      create_component(numberinput2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(numberinput0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(numberinput1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(numberinput2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const numberinput0_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        numberinput0_changes.value = /*color*/
        ctx2[1].hsv.h;
        add_flush_callback(() => updating_value = false);
      }
      numberinput0.$set(numberinput0_changes);
      const numberinput1_changes = {};
      if (!updating_value_1 && dirty & /*color*/
      2) {
        updating_value_1 = true;
        numberinput1_changes.value = /*color*/
        ctx2[1].hsv.s;
        add_flush_callback(() => updating_value_1 = false);
      }
      numberinput1.$set(numberinput1_changes);
      const numberinput2_changes = {};
      if (!updating_value_2 && dirty & /*color*/
      2) {
        updating_value_2 = true;
        numberinput2_changes.value = /*color*/
        ctx2[1].hsv.v;
        add_flush_callback(() => updating_value_2 = false);
      }
      numberinput2.$set(numberinput2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(numberinput0.$$.fragment, local);
      transition_in(numberinput1.$$.fragment, local);
      transition_in(numberinput2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(numberinput0.$$.fragment, local);
      transition_out(numberinput1.$$.fragment, local);
      transition_out(numberinput2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(numberinput0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(numberinput1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(numberinput2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(61:34) ",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let numberinput0;
  let updating_value;
  let t0;
  let numberinput1;
  let updating_value_1;
  let t1;
  let numberinput2;
  let updating_value_2;
  let current;
  function numberinput0_value_binding_1(value) {
    ctx[14](value);
  }
  let numberinput0_props = { max: 360, wrap: true };
  if (
    /*color*/
    ctx[1].hsl.h !== void 0
  ) {
    numberinput0_props.value = /*color*/
    ctx[1].hsl.h;
  }
  numberinput0 = new NumberInput({
    props: numberinput0_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput0, "value", numberinput0_value_binding_1));
  function numberinput1_value_binding_1(value) {
    ctx[15](value);
  }
  let numberinput1_props = { max: 100, suffix: "%" };
  if (
    /*color*/
    ctx[1].hsl.s !== void 0
  ) {
    numberinput1_props.value = /*color*/
    ctx[1].hsl.s;
  }
  numberinput1 = new NumberInput({
    props: numberinput1_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput1, "value", numberinput1_value_binding_1));
  function numberinput2_value_binding_1(value) {
    ctx[16](value);
  }
  let numberinput2_props = { max: 100, suffix: "%" };
  if (
    /*color*/
    ctx[1].hsl.l !== void 0
  ) {
    numberinput2_props.value = /*color*/
    ctx[1].hsl.l;
  }
  numberinput2 = new NumberInput({
    props: numberinput2_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput2, "value", numberinput2_value_binding_1));
  const block = {
    c: function create() {
      create_component(numberinput0.$$.fragment);
      t0 = space();
      create_component(numberinput1.$$.fragment);
      t1 = space();
      create_component(numberinput2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(numberinput0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(numberinput1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(numberinput2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const numberinput0_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        numberinput0_changes.value = /*color*/
        ctx2[1].hsl.h;
        add_flush_callback(() => updating_value = false);
      }
      numberinput0.$set(numberinput0_changes);
      const numberinput1_changes = {};
      if (!updating_value_1 && dirty & /*color*/
      2) {
        updating_value_1 = true;
        numberinput1_changes.value = /*color*/
        ctx2[1].hsl.s;
        add_flush_callback(() => updating_value_1 = false);
      }
      numberinput1.$set(numberinput1_changes);
      const numberinput2_changes = {};
      if (!updating_value_2 && dirty & /*color*/
      2) {
        updating_value_2 = true;
        numberinput2_changes.value = /*color*/
        ctx2[1].hsl.l;
        add_flush_callback(() => updating_value_2 = false);
      }
      numberinput2.$set(numberinput2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(numberinput0.$$.fragment, local);
      transition_in(numberinput1.$$.fragment, local);
      transition_in(numberinput2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(numberinput0.$$.fragment, local);
      transition_out(numberinput1.$$.fragment, local);
      transition_out(numberinput2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(numberinput0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(numberinput1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(numberinput2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(57:34) ",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let numberinput0;
  let updating_value;
  let t0;
  let numberinput1;
  let updating_value_1;
  let t1;
  let numberinput2;
  let updating_value_2;
  let current;
  function numberinput0_value_binding(value) {
    ctx[11](value);
  }
  let numberinput0_props = { max: 255 };
  if (
    /*color*/
    ctx[1].rgb.r !== void 0
  ) {
    numberinput0_props.value = /*color*/
    ctx[1].rgb.r;
  }
  numberinput0 = new NumberInput({
    props: numberinput0_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput0, "value", numberinput0_value_binding));
  function numberinput1_value_binding(value) {
    ctx[12](value);
  }
  let numberinput1_props = { max: 255 };
  if (
    /*color*/
    ctx[1].rgb.g !== void 0
  ) {
    numberinput1_props.value = /*color*/
    ctx[1].rgb.g;
  }
  numberinput1 = new NumberInput({
    props: numberinput1_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput1, "value", numberinput1_value_binding));
  function numberinput2_value_binding(value) {
    ctx[13](value);
  }
  let numberinput2_props = { max: 255 };
  if (
    /*color*/
    ctx[1].rgb.b !== void 0
  ) {
    numberinput2_props.value = /*color*/
    ctx[1].rgb.b;
  }
  numberinput2 = new NumberInput({
    props: numberinput2_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(numberinput2, "value", numberinput2_value_binding));
  const block = {
    c: function create() {
      create_component(numberinput0.$$.fragment);
      t0 = space();
      create_component(numberinput1.$$.fragment);
      t1 = space();
      create_component(numberinput2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(numberinput0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(numberinput1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(numberinput2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const numberinput0_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        numberinput0_changes.value = /*color*/
        ctx2[1].rgb.r;
        add_flush_callback(() => updating_value = false);
      }
      numberinput0.$set(numberinput0_changes);
      const numberinput1_changes = {};
      if (!updating_value_1 && dirty & /*color*/
      2) {
        updating_value_1 = true;
        numberinput1_changes.value = /*color*/
        ctx2[1].rgb.g;
        add_flush_callback(() => updating_value_1 = false);
      }
      numberinput1.$set(numberinput1_changes);
      const numberinput2_changes = {};
      if (!updating_value_2 && dirty & /*color*/
      2) {
        updating_value_2 = true;
        numberinput2_changes.value = /*color*/
        ctx2[1].rgb.b;
        add_flush_callback(() => updating_value_2 = false);
      }
      numberinput2.$set(numberinput2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(numberinput0.$$.fragment, local);
      transition_in(numberinput1.$$.fragment, local);
      transition_in(numberinput2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(numberinput0.$$.fragment, local);
      transition_out(numberinput1.$$.fragment, local);
      transition_out(numberinput2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(numberinput0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(numberinput1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(numberinput2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(53:34) ",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let span;
  let hexinput;
  let updating_value;
  let current;
  function hexinput_value_binding(value) {
    ctx[10](value);
  }
  let hexinput_props = {};
  if (
    /*color*/
    ctx[1].hex !== void 0
  ) {
    hexinput_props.value = /*color*/
    ctx[1].hex;
  }
  hexinput = new HexInput({ props: hexinput_props, $$inline: true });
  binding_callbacks.push(() => bind(hexinput, "value", hexinput_value_binding));
  const block = {
    c: function create() {
      span = element("span");
      create_component(hexinput.$$.fragment);
      attr_dev(span, "class", "hex s-tCXq3qTKsCNT");
      add_location(span, file$t, 51, 5, 1426);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(hexinput, span, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hexinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        hexinput_changes.value = /*color*/
        ctx2[1].hex;
        add_flush_callback(() => updating_value = false);
      }
      hexinput.$set(hexinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hexinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hexinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      destroy_component(hexinput);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: '(51:4) {#if colorType === \\"hex\\"}',
    ctx
  });
  return block;
}
function create_fragment$v(ctx) {
  let div6;
  let current_block_type_index;
  let if_block0;
  let t0;
  let div2;
  let div0;
  let t1;
  let div1;
  let slider0;
  let updating_value;
  let t2;
  let slider1;
  let updating_value_1;
  let t3;
  let div5;
  let div4;
  let select;
  let option0;
  let option1;
  let option2;
  let option3;
  let t8;
  let div3;
  let current_block_type_index_1;
  let if_block1;
  let t9;
  let numberinput;
  let updating_value_2;
  let style___color = `#${/*color*/
  ctx[1].hexa}`;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_4, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*colorType*/
      ctx2[0] === "hsl"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function slider0_value_binding(value) {
    ctx[7](value);
  }
  let slider0_props = {
    max: 360,
    bg: "#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00"
  };
  if (
    /*color*/
    ctx[1].hsl.h !== void 0
  ) {
    slider0_props.value = /*color*/
    ctx[1].hsl.h;
  }
  slider0 = new Slider({ props: slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(slider0, "value", slider0_value_binding));
  function slider1_value_binding(value) {
    ctx[8](value);
  }
  let slider1_props = {
    checker: true,
    bg: "#" + /*color*/
    ctx[1].hex
  };
  if (
    /*color*/
    ctx[1].a !== void 0
  ) {
    slider1_props.value = /*color*/
    ctx[1].a;
  }
  slider1 = new Slider({ props: slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(slider1, "value", slider1_value_binding));
  const if_block_creators_1 = [create_if_block$1, create_if_block_1, create_if_block_2, create_if_block_3];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*colorType*/
      ctx2[0] === "hex"
    )
      return 0;
    if (
      /*colorType*/
      ctx2[0] === "rgb"
    )
      return 1;
    if (
      /*colorType*/
      ctx2[0] === "hsl"
    )
      return 2;
    if (
      /*colorType*/
      ctx2[0] === "hsv"
    )
      return 3;
    return -1;
  }
  if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
    if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  }
  function numberinput_value_binding(value) {
    ctx[20](value);
  }
  let numberinput_props = { max: 100, suffix: "%" };
  if (
    /*color*/
    ctx[1].a !== void 0
  ) {
    numberinput_props.value = /*color*/
    ctx[1].a;
  }
  numberinput = new NumberInput({ props: numberinput_props, $$inline: true });
  binding_callbacks.push(() => bind(numberinput, "value", numberinput_value_binding));
  const block = {
    c: function create() {
      div6 = element("div");
      if_block0.c();
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      t1 = space();
      div1 = element("div");
      create_component(slider0.$$.fragment);
      t2 = space();
      create_component(slider1.$$.fragment);
      t3 = space();
      div5 = element("div");
      div4 = element("div");
      select = element("select");
      option0 = element("option");
      option0.textContent = "Hex";
      option1 = element("option");
      option1.textContent = "RGB";
      option2 = element("option");
      option2.textContent = "HSL";
      option3 = element("option");
      option3.textContent = "HSV";
      t8 = space();
      div3 = element("div");
      if (if_block1)
        if_block1.c();
      t9 = space();
      create_component(numberinput.$$.fragment);
      attr_dev(div0, "class", "color s-tCXq3qTKsCNT");
      add_location(div0, file$t, 31, 2, 886);
      attr_dev(div1, "class", "slider-container s-tCXq3qTKsCNT");
      add_location(div1, file$t, 32, 2, 910);
      attr_dev(div2, "class", "controls s-tCXq3qTKsCNT");
      add_location(div2, file$t, 30, 1, 861);
      option0.__value = "hex";
      option0.value = option0.__value;
      add_location(option0, file$t, 44, 4, 1210);
      option1.__value = "rgb";
      option1.value = option1.__value;
      add_location(option1, file$t, 45, 4, 1247);
      option2.__value = "hsl";
      option2.value = option2.__value;
      add_location(option2, file$t, 46, 4, 1284);
      option3.__value = "hsv";
      option3.value = option3.__value;
      add_location(option3, file$t, 47, 4, 1321);
      attr_dev(select, "class", "s-tCXq3qTKsCNT");
      if (
        /*colorType*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[9].call(select)
        ));
      add_location(select, file$t, 43, 3, 1174);
      attr_dev(div3, "class", "values s-tCXq3qTKsCNT");
      add_location(div3, file$t, 49, 3, 1370);
      attr_dev(div4, "class", "value-input s-tCXq3qTKsCNT");
      add_location(div4, file$t, 42, 2, 1145);
      add_location(div5, file$t, 41, 1, 1137);
      attr_dev(div6, "class", "color-picker s-tCXq3qTKsCNT");
      set_style(div6, "--color", style___color);
      add_location(div6, file$t, 12, 0, 351);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      if_blocks[current_block_type_index].m(div6, null);
      append_dev(div6, t0);
      append_dev(div6, div2);
      append_dev(div2, div0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      mount_component(slider0, div1, null);
      append_dev(div1, t2);
      mount_component(slider1, div1, null);
      append_dev(div6, t3);
      append_dev(div6, div5);
      append_dev(div5, div4);
      append_dev(div4, select);
      append_dev(select, option0);
      append_dev(select, option1);
      append_dev(select, option2);
      append_dev(select, option3);
      select_option(
        select,
        /*colorType*/
        ctx[0]
      );
      append_dev(div4, t8);
      append_dev(div4, div3);
      if (~current_block_type_index_1) {
        if_blocks_1[current_block_type_index_1].m(div3, null);
      }
      append_dev(div3, t9);
      mount_component(numberinput, div3, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          select,
          "change",
          /*select_change_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div6, t0);
      }
      const slider0_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        slider0_changes.value = /*color*/
        ctx2[1].hsl.h;
        add_flush_callback(() => updating_value = false);
      }
      slider0.$set(slider0_changes);
      const slider1_changes = {};
      if (dirty & /*color*/
      2)
        slider1_changes.bg = "#" + /*color*/
        ctx2[1].hex;
      if (!updating_value_1 && dirty & /*color*/
      2) {
        updating_value_1 = true;
        slider1_changes.value = /*color*/
        ctx2[1].a;
        add_flush_callback(() => updating_value_1 = false);
      }
      slider1.$set(slider1_changes);
      if (dirty & /*colorType*/
      1) {
        select_option(
          select,
          /*colorType*/
          ctx2[0]
        );
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_1(ctx2);
      if (current_block_type_index_1 === previous_block_index_1) {
        if (~current_block_type_index_1) {
          if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
            if_blocks_1[previous_block_index_1] = null;
          });
          check_outros();
        }
        if (~current_block_type_index_1) {
          if_block1 = if_blocks_1[current_block_type_index_1];
          if (!if_block1) {
            if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(div3, t9);
        } else {
          if_block1 = null;
        }
      }
      const numberinput_changes = {};
      if (!updating_value_2 && dirty & /*color*/
      2) {
        updating_value_2 = true;
        numberinput_changes.value = /*color*/
        ctx2[1].a;
        add_flush_callback(() => updating_value_2 = false);
      }
      numberinput.$set(numberinput_changes);
      if (dirty & /*color*/
      2 && style___color !== (style___color = `#${/*color*/
      ctx2[1].hexa}`)) {
        set_style(div6, "--color", style___color);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(slider0.$$.fragment, local);
      transition_in(slider1.$$.fragment, local);
      transition_in(if_block1);
      transition_in(numberinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(slider0.$$.fragment, local);
      transition_out(slider1.$$.fragment, local);
      transition_out(if_block1);
      transition_out(numberinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div6);
      if_blocks[current_block_type_index].d();
      destroy_component(slider0);
      destroy_component(slider1);
      if (~current_block_type_index_1) {
        if_blocks_1[current_block_type_index_1].d();
      }
      destroy_component(numberinput);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$v.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$v($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorPicker", slots, []);
  let { value = "#888" } = $$props;
  let color = Color.fromHEX(value);
  let { colorType: colorType2 = "rgb" } = $$props;
  const writable_props = ["value", "colorType"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ColorPicker> was created with unknown prop '${key}'`);
  });
  function twodselect_x_binding(value2) {
    if ($$self.$$.not_equal(color.hsl.s, value2)) {
      color.hsl.s = value2;
      $$invalidate(1, color);
    }
  }
  function twodselect_y_binding(value2) {
    if ($$self.$$.not_equal(color.hsl.l, value2)) {
      color.hsl.l = value2;
      $$invalidate(1, color);
    }
  }
  function twodselect_x_binding_1(value2) {
    if ($$self.$$.not_equal(color.hsv.s, value2)) {
      color.hsv.s = value2;
      $$invalidate(1, color);
    }
  }
  function twodselect_y_binding_1(value2) {
    if ($$self.$$.not_equal(color.hsv.v, value2)) {
      color.hsv.v = value2;
      $$invalidate(1, color);
    }
  }
  function slider0_value_binding(value2) {
    if ($$self.$$.not_equal(color.hsl.h, value2)) {
      color.hsl.h = value2;
      $$invalidate(1, color);
    }
  }
  function slider1_value_binding(value2) {
    if ($$self.$$.not_equal(color.a, value2)) {
      color.a = value2;
      $$invalidate(1, color);
    }
  }
  function select_change_handler() {
    colorType2 = select_value(this);
    $$invalidate(0, colorType2);
  }
  function hexinput_value_binding(value2) {
    if ($$self.$$.not_equal(color.hex, value2)) {
      color.hex = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput0_value_binding(value2) {
    if ($$self.$$.not_equal(color.rgb.r, value2)) {
      color.rgb.r = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput1_value_binding(value2) {
    if ($$self.$$.not_equal(color.rgb.g, value2)) {
      color.rgb.g = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput2_value_binding(value2) {
    if ($$self.$$.not_equal(color.rgb.b, value2)) {
      color.rgb.b = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput0_value_binding_1(value2) {
    if ($$self.$$.not_equal(color.hsl.h, value2)) {
      color.hsl.h = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput1_value_binding_1(value2) {
    if ($$self.$$.not_equal(color.hsl.s, value2)) {
      color.hsl.s = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput2_value_binding_1(value2) {
    if ($$self.$$.not_equal(color.hsl.l, value2)) {
      color.hsl.l = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput0_value_binding_2(value2) {
    if ($$self.$$.not_equal(color.hsv.h, value2)) {
      color.hsv.h = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput1_value_binding_2(value2) {
    if ($$self.$$.not_equal(color.hsv.s, value2)) {
      color.hsv.s = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput2_value_binding_2(value2) {
    if ($$self.$$.not_equal(color.hsv.v, value2)) {
      color.hsv.v = value2;
      $$invalidate(1, color);
    }
  }
  function numberinput_value_binding(value2) {
    if ($$self.$$.not_equal(color.a, value2)) {
      color.a = value2;
      $$invalidate(1, color);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("colorType" in $$props2)
      $$invalidate(0, colorType2 = $$props2.colorType);
  };
  $$self.$capture_state = () => ({
    Color,
    HexInput,
    NumberInput,
    Slider,
    TwoDSelect,
    value,
    color,
    colorType: colorType2
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("colorType" in $$props2)
      $$invalidate(0, colorType2 = $$props2.colorType);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*color*/
    2) {
      $$invalidate(2, value = color.hex);
    }
  };
  return [
    colorType2,
    color,
    value,
    twodselect_x_binding,
    twodselect_y_binding,
    twodselect_x_binding_1,
    twodselect_y_binding_1,
    slider0_value_binding,
    slider1_value_binding,
    select_change_handler,
    hexinput_value_binding,
    numberinput0_value_binding,
    numberinput1_value_binding,
    numberinput2_value_binding,
    numberinput0_value_binding_1,
    numberinput1_value_binding_1,
    numberinput2_value_binding_1,
    numberinput0_value_binding_2,
    numberinput1_value_binding_2,
    numberinput2_value_binding_2,
    numberinput_value_binding
  ];
}
class ColorPicker extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { value: 2, colorType: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker",
      options,
      id: create_fragment$v.name
    });
  }
  get value() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get colorType() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set colorType(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ColorInput_svelte_svelte_type_style_lang = "";
const file$s = "src/components/ColorInput.svelte";
function create_if_block(ctx) {
  let div;
  let colorpicker;
  let updating_value;
  let current;
  function colorpicker_value_binding(value) {
    ctx[2](value);
  }
  let colorpicker_props = {};
  if (
    /*value*/
    ctx[0] !== void 0
  ) {
    colorpicker_props.value = /*value*/
    ctx[0];
  }
  colorpicker = new ColorPicker({ props: colorpicker_props, $$inline: true });
  binding_callbacks.push(() => bind(colorpicker, "value", colorpicker_value_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(colorpicker.$$.fragment);
      attr_dev(div, "class", "modal s-KRbMAwMhhDv-");
      add_location(div, file$s, 12, 2, 244);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(colorpicker, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorpicker_changes = {};
      if (!updating_value && dirty & /*value*/
      1) {
        updating_value = true;
        colorpicker_changes.value = /*value*/
        ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      colorpicker.$set(colorpicker_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(colorpicker.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(colorpicker.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(colorpicker);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(12:1) {#if open}",
    ctx
  });
  return block;
}
function create_fragment$u(ctx) {
  let span;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*open*/
    ctx[1] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      span = element("span");
      if (if_block)
        if_block.c();
      attr_dev(span, "tabindex", "-1");
      attr_dev(span, "class", "s-KRbMAwMhhDv-");
      set_style(
        span,
        "background-color",
        /*value*/
        ctx[0]
      );
      add_location(span, file$s, 5, 0, 106);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      if (if_block)
        if_block.m(span, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            span,
            "click",
            /*click_handler*/
            ctx[3],
            false,
            false,
            false
          ),
          listen_dev(
            span,
            "keypress",
            /*keypress_handler*/
            ctx[4],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*open*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(span, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & /*value*/
      1) {
        set_style(
          span,
          "background-color",
          /*value*/
          ctx2[0]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$u.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$u($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorInput", slots, []);
  let { value } = $$props;
  let open = false;
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<ColorInput> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ColorInput> was created with unknown prop '${key}'`);
  });
  function colorpicker_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  const click_handler = () => $$invalidate(1, open = !open);
  const keypress_handler = () => $$invalidate(1, open = !open);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$capture_state = () => ({ ColorPicker, value, open });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, open, colorpicker_value_binding, click_handler, keypress_handler];
}
class ColorInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$u, create_fragment$u, safe_not_equal, { value: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput",
      options,
      id: create_fragment$u.name
    });
  }
  get value() {
    throw new Error("<ColorInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<ColorInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ColorInput_story_svelte_svelte_type_style_lang = "";
const file$r = "src/stories/ColorInput.story.svelte";
function create_default_slot$k(ctx) {
  let div;
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = {};
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*value*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(colorinput.$$.fragment);
      attr_dev(div, "class", "s-3zMQZewmF-30");
      add_location(div, file$r, 6, 1, 197);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(colorinput, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      colorinput.$set(colorinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(colorinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(colorinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(colorinput);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$k.name,
    type: "slot",
    source: '(6:0) <Hst.Story title=\\"Components/Color Input\\" icon=\\"typcn:input-checked\\">',
    ctx
  });
  return block;
}
function create_controls_slot$c(ctx) {
  let hst_text;
  let updating_value;
  let current;
  function hst_text_value_binding(value) {
    ctx[2](value);
  }
  let hst_text_props = { title: "Value" };
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    hst_text_props.value = /*value*/
    ctx[1];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        hst_text_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$c.name,
    type: "slot",
    source: '(10:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$t(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Color Input",
      icon: "typcn:input-checked",
      $$slots: {
        controls: [create_controls_slot$c],
        default: [create_default_slot$k]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, value*/
      18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$t.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$t($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorInput_story", slots, []);
  let { Hst } = $$props;
  let value = "#000000";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ColorInput_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ColorInput_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function colorinput_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, value });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, value, hst_text_value_binding, colorinput_value_binding];
}
class ColorInput_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$t, create_fragment$t, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput_story",
      options,
      id: create_fragment$t.name
    });
  }
  get Hst() {
    throw new Error("<ColorInput_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorInput_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$j(ctx) {
  let colorpicker;
  let updating_colorType;
  let updating_value;
  let current;
  function colorpicker_colorType_binding(value) {
    ctx[5](value);
  }
  function colorpicker_value_binding(value) {
    ctx[6](value);
  }
  let colorpicker_props = {};
  if (
    /*colorType*/
    ctx[1] !== void 0
  ) {
    colorpicker_props.colorType = /*colorType*/
    ctx[1];
  }
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    colorpicker_props.value = /*value*/
    ctx[2];
  }
  colorpicker = new ColorPicker({ props: colorpicker_props, $$inline: true });
  binding_callbacks.push(() => bind(colorpicker, "colorType", colorpicker_colorType_binding));
  binding_callbacks.push(() => bind(colorpicker, "value", colorpicker_value_binding));
  const block = {
    c: function create() {
      create_component(colorpicker.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorpicker, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorpicker_changes = {};
      if (!updating_colorType && dirty & /*colorType*/
      2) {
        updating_colorType = true;
        colorpicker_changes.colorType = /*colorType*/
        ctx2[1];
        add_flush_callback(() => updating_colorType = false);
      }
      if (!updating_value && dirty & /*value*/
      4) {
        updating_value = true;
        colorpicker_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      colorpicker.$set(colorpicker_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(colorpicker.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(colorpicker.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(colorpicker, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$j.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Color Picker\\" icon=\\"ph:eyedropper-fill\\">',
    ctx
  });
  return block;
}
function create_controls_slot$b(ctx) {
  let hst_select;
  let updating_value;
  let t;
  let hst_text;
  let updating_value_1;
  let current;
  function hst_select_value_binding(value) {
    ctx[3](value);
  }
  let hst_select_props = {
    title: "Color Type",
    options: ["hex", "rgb", "hsl", "hwb"]
  };
  if (
    /*colorType*/
    ctx[1] !== void 0
  ) {
    hst_select_props.value = /*colorType*/
    ctx[1];
  }
  hst_select = new /*Hst*/
  ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  function hst_text_value_binding(value) {
    ctx[4](value);
  }
  let hst_text_props = { title: "Value" };
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    hst_text_props.value = /*value*/
    ctx[2];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  const block = {
    c: function create() {
      create_component(hst_select.$$.fragment);
      t = space();
      create_component(hst_text.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_select, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_select_changes = {};
      if (!updating_value && dirty & /*colorType*/
      2) {
        updating_value = true;
        hst_select_changes.value = /*colorType*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_select.$set(hst_select_changes);
      const hst_text_changes = {};
      if (!updating_value_1 && dirty & /*value*/
      4) {
        updating_value_1 = true;
        hst_text_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_select.$$.fragment, local);
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_select.$$.fragment, local);
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_select, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$b.name,
    type: "slot",
    source: '(9:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$s(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Color Picker",
      icon: "ph:eyedropper-fill",
      $$slots: {
        controls: [create_controls_slot$b],
        default: [create_default_slot$j]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, value, colorType*/
      134) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$s.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$s($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorPicker_story", slots, []);
  let { Hst } = $$props;
  let colorType2 = "hex";
  let value = "#000000";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ColorPicker_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ColorPicker_story> was created with unknown prop '${key}'`);
  });
  function hst_select_value_binding(value2) {
    colorType2 = value2;
    $$invalidate(1, colorType2);
  }
  function hst_text_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function colorpicker_colorType_binding(value2) {
    colorType2 = value2;
    $$invalidate(1, colorType2);
  }
  function colorpicker_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorPicker, Hst, colorType: colorType2, value });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("colorType" in $$props2)
      $$invalidate(1, colorType2 = $$props2.colorType);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    colorType2,
    value,
    hst_select_value_binding,
    hst_text_value_binding,
    colorpicker_colorType_binding,
    colorpicker_value_binding
  ];
}
class ColorPicker_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker_story",
      options,
      id: create_fragment$s.name
    });
  }
  get Hst() {
    throw new Error("<ColorPicker_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorPicker_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Glitch_svelte_svelte_type_style_lang = "";
const file$q = "src/components/Glitch.svelte";
function create_fragment$r(ctx) {
  let span;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*display*/
        ctx[0]
      );
      attr_dev(span, "class", "s-9q13tShhTcxU");
      add_location(span, file$q, 32, 0, 816);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
      if (!mounted) {
        dispose = [
          listen_dev(
            span,
            "mouseover",
            /*onMouseover*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            span,
            "focus",
            /*onMouseover*/
            ctx[1],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*display*/
      1)
        set_data_dev(
          t,
          /*display*/
          ctx2[0]
        );
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$r.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function instance$r($$self, $$props, $$invalidate) {
  let display;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Glitch", slots, []);
  let { text: text2 } = $$props;
  let { iteration_factor = 1 } = $$props;
  let { flash_duration = 30 } = $$props;
  let interval;
  function onMouseover() {
    let iterations = 0;
    clearInterval(interval);
    interval = setInterval(
      () => {
        let result = "";
        for (let i = 0; i < text2.length; ++i) {
          if (i * iteration_factor < iterations) {
            result += text2[i];
          } else {
            let letter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
            if (Math.random() > 0.5) {
              letter = letter.toUpperCase();
            }
            result += letter;
          }
        }
        $$invalidate(0, display = result);
        if (iterations == text2.length * iteration_factor) {
          clearInterval(interval);
        }
        iterations += 1;
      },
      flash_duration
    );
  }
  $$self.$$.on_mount.push(function() {
    if (text2 === void 0 && !("text" in $$props || $$self.$$.bound[$$self.$$.props["text"]])) {
      console.warn("<Glitch> was created without expected prop 'text'");
    }
  });
  const writable_props = ["text", "iteration_factor", "flash_duration"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Glitch> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("text" in $$props2)
      $$invalidate(2, text2 = $$props2.text);
    if ("iteration_factor" in $$props2)
      $$invalidate(3, iteration_factor = $$props2.iteration_factor);
    if ("flash_duration" in $$props2)
      $$invalidate(4, flash_duration = $$props2.flash_duration);
  };
  $$self.$capture_state = () => ({
    text: text2,
    iteration_factor,
    flash_duration,
    ALPHABET,
    interval,
    onMouseover,
    display
  });
  $$self.$inject_state = ($$props2) => {
    if ("text" in $$props2)
      $$invalidate(2, text2 = $$props2.text);
    if ("iteration_factor" in $$props2)
      $$invalidate(3, iteration_factor = $$props2.iteration_factor);
    if ("flash_duration" in $$props2)
      $$invalidate(4, flash_duration = $$props2.flash_duration);
    if ("interval" in $$props2)
      interval = $$props2.interval;
    if ("display" in $$props2)
      $$invalidate(0, display = $$props2.display);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*text*/
    4) {
      $$invalidate(0, display = text2);
    }
  };
  return [display, onMouseover, text2, iteration_factor, flash_duration];
}
class Glitch extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {
      text: 2,
      iteration_factor: 3,
      flash_duration: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch",
      options,
      id: create_fragment$r.name
    });
  }
  get text() {
    throw new Error("<Glitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set text(value) {
    throw new Error("<Glitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get iteration_factor() {
    throw new Error("<Glitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set iteration_factor(value) {
    throw new Error("<Glitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get flash_duration() {
    throw new Error("<Glitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set flash_duration(value) {
    throw new Error("<Glitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$i(ctx) {
  let glitch;
  let current;
  glitch = new Glitch({
    props: {
      text: (
        /*text*/
        ctx[1]
      ),
      iteration_factor: (
        /*iteration_factor*/
        ctx[2]
      ),
      flash_duration: (
        /*flash_duration*/
        ctx[3]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(glitch.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(glitch, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const glitch_changes = {};
      if (dirty & /*text*/
      2)
        glitch_changes.text = /*text*/
        ctx2[1];
      if (dirty & /*iteration_factor*/
      4)
        glitch_changes.iteration_factor = /*iteration_factor*/
        ctx2[2];
      if (dirty & /*flash_duration*/
      8)
        glitch_changes.flash_duration = /*flash_duration*/
        ctx2[3];
      glitch.$set(glitch_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(glitch.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(glitch.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(glitch, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$i.name,
    type: "slot",
    source: '(8:0) <Hst.Story title=\\"Components/Glitch Text\\" icon=\\"bx:text\\">',
    ctx
  });
  return block;
}
function create_controls_slot$a(ctx) {
  let hst_text;
  let updating_value;
  let t0;
  let hst_slider0;
  let updating_value_1;
  let t1;
  let hst_slider1;
  let updating_value_2;
  let current;
  function hst_text_value_binding(value) {
    ctx[4](value);
  }
  let hst_text_props = { title: "Text" };
  if (
    /*text*/
    ctx[1] !== void 0
  ) {
    hst_text_props.value = /*text*/
    ctx[1];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  function hst_slider0_value_binding(value) {
    ctx[5](value);
  }
  let hst_slider0_props = {
    title: "Iteration Factor",
    min: 1,
    max: 10
  };
  if (
    /*iteration_factor*/
    ctx[2] !== void 0
  ) {
    hst_slider0_props.value = /*iteration_factor*/
    ctx[2];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[6](value);
  }
  let hst_slider1_props = {
    title: "Flash Duration",
    min: 1,
    max: 100
  };
  if (
    /*flash_duration*/
    ctx[3] !== void 0
  ) {
    hst_slider1_props.value = /*flash_duration*/
    ctx[3];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
      t0 = space();
      create_component(hst_slider0.$$.fragment);
      t1 = space();
      create_component(hst_slider1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & /*text*/
      2) {
        updating_value = true;
        hst_text_changes.value = /*text*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
      const hst_slider0_changes = {};
      if (!updating_value_1 && dirty & /*iteration_factor*/
      4) {
        updating_value_1 = true;
        hst_slider0_changes.value = /*iteration_factor*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_2 && dirty & /*flash_duration*/
      8) {
        updating_value_2 = true;
        hst_slider1_changes.value = /*flash_duration*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_slider0, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$a.name,
    type: "slot",
    source: '(10:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$q(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Glitch Text",
      icon: "bx:text",
      $$slots: {
        controls: [create_controls_slot$a],
        default: [create_default_slot$i]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, flash_duration, iteration_factor, text*/
      142) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$q.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$q($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Glitch_story", slots, []);
  let { Hst } = $$props;
  let text2 = "Hello World";
  let iteration_factor = 1;
  let flash_duration = 30;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Glitch_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Glitch_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    text2 = value;
    $$invalidate(1, text2);
  }
  function hst_slider0_value_binding(value) {
    iteration_factor = value;
    $$invalidate(2, iteration_factor);
  }
  function hst_slider1_value_binding(value) {
    flash_duration = value;
    $$invalidate(3, flash_duration);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Glitch,
    Hst,
    text: text2,
    iteration_factor,
    flash_duration
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("text" in $$props2)
      $$invalidate(1, text2 = $$props2.text);
    if ("iteration_factor" in $$props2)
      $$invalidate(2, iteration_factor = $$props2.iteration_factor);
    if ("flash_duration" in $$props2)
      $$invalidate(3, flash_duration = $$props2.flash_duration);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    text2,
    iteration_factor,
    flash_duration,
    hst_text_value_binding,
    hst_slider0_value_binding,
    hst_slider1_value_binding
  ];
}
class Glitch_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$q, create_fragment$q, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch_story",
      options,
      id: create_fragment$q.name
    });
  }
  get Hst() {
    throw new Error("<Glitch_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Glitch_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Circle_svelte_svelte_type_style_lang = "";
const file$p = "src/components/Burger Menus/Circle.svelte";
function create_fragment$p(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "class", "s-dHyQ544AJ32J");
      toggle_class(
        path,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(path, file$p, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-dHyQ544AJ32J");
      add_location(svg, file$p, 3, 0, 54);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*open*/
      1) {
        toggle_class(
          path,
          "open",
          /*open*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$p.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$p($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Circle> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  $$self.$capture_state = () => ({ open });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, click_handler, keypress_handler];
}
class Circle extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle",
      options,
      id: create_fragment$p.name
    });
  }
  get open() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Circle_story_svelte_svelte_type_style_lang = "";
const file$o = "src/stories/Burger Menus/Circle.story.svelte";
function create_default_slot$h(ctx) {
  let div;
  let burgermenu;
  let updating_open;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function burgermenu_open_binding(value) {
    ctx[5](value);
  }
  let burgermenu_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    burgermenu_props.open = /*open*/
    ctx[1];
  }
  burgermenu = new Circle({ props: burgermenu_props, $$inline: true });
  binding_callbacks.push(() => bind(burgermenu, "open", burgermenu_open_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(burgermenu.$$.fragment);
      attr_dev(div, "class", "s-MrZ8OCuclWX0");
      set_style(div, "--size", style___size);
      add_location(div, file$o, 7, 1, 229);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(burgermenu, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const burgermenu_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        burgermenu_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      burgermenu.$set(burgermenu_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(burgermenu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(burgermenu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(burgermenu);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$h.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Burger Menus/Circle\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot$9(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*open*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*open*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$9.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$o(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Burger Menus/Circle",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot$9],
        default: [create_default_slot$h]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, open*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$o.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$o($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle_story", slots, []);
  let { Hst } = $$props;
  let open = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Circle_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Circle_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function burgermenu_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BurgerMenu: Circle, Hst, open, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    open,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    burgermenu_open_binding
  ];
}
class Circle_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle_story",
      options,
      id: create_fragment$o.name
    });
  }
  get Hst() {
    throw new Error("<Circle_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Circle_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Cross_svelte_svelte_type_style_lang = "";
const file$n = "src/components/Burger Menus/Cross.svelte";
function create_fragment$n(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "class", "s-PFeurwlplmMu");
      toggle_class(
        path,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(path, file$n, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-PFeurwlplmMu");
      add_location(svg, file$n, 3, 0, 54);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*open*/
      1) {
        toggle_class(
          path,
          "open",
          /*open*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$n.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$n($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cross", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Cross> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  $$self.$capture_state = () => ({ open });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, click_handler, keypress_handler];
}
class Cross extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cross",
      options,
      id: create_fragment$n.name
    });
  }
  get open() {
    throw new Error("<Cross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Cross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Cross_story_svelte_svelte_type_style_lang = "";
const file$m = "src/stories/Burger Menus/Cross.story.svelte";
function create_default_slot$g(ctx) {
  let div;
  let burgermenu;
  let updating_open;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function burgermenu_open_binding(value) {
    ctx[5](value);
  }
  let burgermenu_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    burgermenu_props.open = /*open*/
    ctx[1];
  }
  burgermenu = new Cross({ props: burgermenu_props, $$inline: true });
  binding_callbacks.push(() => bind(burgermenu, "open", burgermenu_open_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(burgermenu.$$.fragment);
      attr_dev(div, "class", "s-gVPIAwiPiCcT");
      set_style(div, "--size", style___size);
      add_location(div, file$m, 7, 1, 227);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(burgermenu, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const burgermenu_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        burgermenu_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      burgermenu.$set(burgermenu_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(burgermenu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(burgermenu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(burgermenu);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$g.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Burger Menus/Cross\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot$8(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*open*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*open*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$8.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$m(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Burger Menus/Cross",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot$8],
        default: [create_default_slot$g]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, open*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$m.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$m($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cross_story", slots, []);
  let { Hst } = $$props;
  let open = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Cross_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Cross_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function burgermenu_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BurgerMenu: Cross, Hst, open, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    open,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    burgermenu_open_binding
  ];
}
class Cross_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cross_story",
      options,
      id: create_fragment$m.name
    });
  }
  get Hst() {
    throw new Error("<Cross_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Cross_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const FoldIn_svelte_svelte_type_style_lang = "";
const file$l = "src/components/Burger Menus/FoldIn.svelte";
function create_fragment$l(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "class", "s-d96fjWfdBsq4");
      toggle_class(
        path,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(path, file$l, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-d96fjWfdBsq4");
      add_location(svg, file$l, 3, 0, 54);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*open*/
      1) {
        toggle_class(
          path,
          "open",
          /*open*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$l.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$l($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FoldIn", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FoldIn> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  $$self.$capture_state = () => ({ open });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, click_handler, keypress_handler];
}
class FoldIn extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FoldIn",
      options,
      id: create_fragment$l.name
    });
  }
  get open() {
    throw new Error("<FoldIn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<FoldIn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const FoldIn_story_svelte_svelte_type_style_lang = "";
const file$k = "src/stories/Burger Menus/FoldIn.story.svelte";
function create_default_slot$f(ctx) {
  let div;
  let burgermenu;
  let updating_open;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function burgermenu_open_binding(value) {
    ctx[5](value);
  }
  let burgermenu_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    burgermenu_props.open = /*open*/
    ctx[1];
  }
  burgermenu = new FoldIn({ props: burgermenu_props, $$inline: true });
  binding_callbacks.push(() => bind(burgermenu, "open", burgermenu_open_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(burgermenu.$$.fragment);
      attr_dev(div, "class", "s-w3f0m1mUrcH6");
      set_style(div, "--size", style___size);
      add_location(div, file$k, 7, 1, 230);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(burgermenu, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const burgermenu_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        burgermenu_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      burgermenu.$set(burgermenu_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(burgermenu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(burgermenu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(burgermenu);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$f.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Burger Menus/Fold in\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot$7(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*open*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*open*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$7.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$k(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Burger Menus/Fold in",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot$7],
        default: [create_default_slot$f]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, open*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$k.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$k($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FoldIn_story", slots, []);
  let { Hst } = $$props;
  let open = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<FoldIn_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FoldIn_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function burgermenu_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BurgerMenu: FoldIn, Hst, open, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    open,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    burgermenu_open_binding
  ];
}
class FoldIn_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FoldIn_story",
      options,
      id: create_fragment$k.name
    });
  }
  get Hst() {
    throw new Error("<FoldIn_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<FoldIn_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Merge_svelte_svelte_type_style_lang = "";
const file$j = "src/components/Burger Menus/Merge.svelte";
function create_fragment$j(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "class", "s-jveDL8I0KC7Q");
      toggle_class(
        path,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(path, file$j, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-jveDL8I0KC7Q");
      add_location(svg, file$j, 3, 0, 54);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*open*/
      1) {
        toggle_class(
          path,
          "open",
          /*open*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$j.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$j($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Merge", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Merge> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  $$self.$capture_state = () => ({ open });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, click_handler, keypress_handler];
}
class Merge extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Merge",
      options,
      id: create_fragment$j.name
    });
  }
  get open() {
    throw new Error("<Merge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Merge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Merge_story_svelte_svelte_type_style_lang = "";
const file$i = "src/stories/Burger Menus/Merge.story.svelte";
function create_default_slot$e(ctx) {
  let div;
  let burgermenu;
  let updating_open;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function burgermenu_open_binding(value) {
    ctx[5](value);
  }
  let burgermenu_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    burgermenu_props.open = /*open*/
    ctx[1];
  }
  burgermenu = new Merge({ props: burgermenu_props, $$inline: true });
  binding_callbacks.push(() => bind(burgermenu, "open", burgermenu_open_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(burgermenu.$$.fragment);
      attr_dev(div, "class", "s-D0ngTY_Mrnxs");
      set_style(div, "--size", style___size);
      add_location(div, file$i, 7, 1, 227);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(burgermenu, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const burgermenu_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        burgermenu_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      burgermenu.$set(burgermenu_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(burgermenu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(burgermenu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(burgermenu);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$e.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Burger Menus/Merge\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot$6(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*open*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*open*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$6.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$i(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Burger Menus/Merge",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot$6],
        default: [create_default_slot$e]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, open*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$i.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$i($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Merge_story", slots, []);
  let { Hst } = $$props;
  let open = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Merge_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Merge_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function burgermenu_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BurgerMenu: Merge, Hst, open, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    open,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    burgermenu_open_binding
  ];
}
class Merge_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Merge_story",
      options,
      id: create_fragment$i.name
    });
  }
  get Hst() {
    throw new Error("<Merge_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Merge_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Morph_svelte_svelte_type_style_lang = "";
const file$h = "src/components/Pause/Morph.svelte";
function create_fragment$h(ctx) {
  let svg;
  let path0;
  let path1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr_dev(path0, "class", "left s-r_IBm7hQpKjb");
      attr_dev(path0, "d", "M6,0L22,0V64L6,64z");
      add_location(path0, file$h, 10, 1, 191);
      attr_dev(path1, "class", "right s-r_IBm7hQpKjb");
      attr_dev(path1, "d", "M42,0L58,0V64L42,64z");
      add_location(path1, file$h, 11, 1, 237);
      attr_dev(svg, "viewBox", "0 0 64 64");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-r_IBm7hQpKjb");
      toggle_class(
        svg,
        "paused",
        /*paused*/
        ctx[0]
      );
      add_location(svg, file$h, 3, 0, 56);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*paused*/
      1) {
        toggle_class(
          svg,
          "paused",
          /*paused*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$h.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$h($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Morph", slots, []);
  let { paused = false } = $$props;
  const writable_props = ["paused"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Morph> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, paused = !paused);
  const keypress_handler = () => $$invalidate(0, paused = !paused);
  $$self.$$set = ($$props2) => {
    if ("paused" in $$props2)
      $$invalidate(0, paused = $$props2.paused);
  };
  $$self.$capture_state = () => ({ paused });
  $$self.$inject_state = ($$props2) => {
    if ("paused" in $$props2)
      $$invalidate(0, paused = $$props2.paused);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [paused, click_handler, keypress_handler];
}
class Morph extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { paused: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Morph",
      options,
      id: create_fragment$h.name
    });
  }
  get paused() {
    throw new Error("<Morph>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set paused(value) {
    throw new Error("<Morph>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Morph_story_svelte_svelte_type_style_lang = "";
const file$g = "src/stories/Pause/Morph.story.svelte";
function create_default_slot$d(ctx) {
  let div;
  let morph;
  let updating_paused;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function morph_paused_binding(value) {
    ctx[5](value);
  }
  let morph_props = {};
  if (
    /*paused*/
    ctx[1] !== void 0
  ) {
    morph_props.paused = /*paused*/
    ctx[1];
  }
  morph = new Morph({ props: morph_props, $$inline: true });
  binding_callbacks.push(() => bind(morph, "paused", morph_paused_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(morph.$$.fragment);
      attr_dev(div, "class", "s-yOKc3sewrq_j");
      set_style(div, "--size", style___size);
      add_location(div, file$g, 7, 1, 219);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(morph, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const morph_changes = {};
      if (!updating_paused && dirty & /*paused*/
      2) {
        updating_paused = true;
        morph_changes.paused = /*paused*/
        ctx2[1];
        add_flush_callback(() => updating_paused = false);
      }
      morph.$set(morph_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(morph.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(morph.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(morph);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$d.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Pause/Merge\\" icon=\\"material-symbols:pause-outline\\">',
    ctx
  });
  return block;
}
function create_controls_slot$5(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Paused" };
  if (
    /*paused*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*paused*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*paused*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*paused*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$5.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$g(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Pause/Merge",
      icon: "material-symbols:pause-outline",
      $$slots: {
        controls: [create_controls_slot$5],
        default: [create_default_slot$d]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, paused*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$g.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$g($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Morph_story", slots, []);
  let { Hst } = $$props;
  let paused = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Morph_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Morph_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function morph_paused_binding(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Morph, Hst, paused, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("paused" in $$props2)
      $$invalidate(1, paused = $$props2.paused);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    paused,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    morph_paused_binding
  ];
}
class Morph_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Morph_story",
      options,
      id: create_fragment$g.name
    });
  }
  get Hst() {
    throw new Error("<Morph_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Morph_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$f = "src/stories/SVG/Close.story.svelte";
function create_default_slot$c(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M1 1L9 9M1 9L9 1");
      add_location(path, file$f, 10, 2, 325);
      attr_dev(svg, "viewBox", "0 0 10 10");
      attr_dev(svg, "stroke-width", "2");
      attr_dev(svg, "stroke", "#000");
      attr_dev(svg, "stroke-linecap", "round");
      add_location(svg, file$f, 9, 1, 243);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$c.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Close\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$f(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Close",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$c] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$f($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Close_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Close_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Close_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Close_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Close_story",
      options,
      id: create_fragment$f.name
    });
  }
  get Hst() {
    throw new Error("<Close_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Close_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$e = "src/stories/SVG/Command.story.svelte";
function create_default_slot$b(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z");
      add_location(path, file$e, 10, 2, 514);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 19 19");
      attr_dev(svg, "fill-rule", "evenodd");
      add_location(svg, file$e, 9, 1, 417);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$b.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Command\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$e(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Command",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$b] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$e($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Command_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill-rule="evenodd">
	<path d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Command_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Command_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Command_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Command_story",
      options,
      id: create_fragment$e.name
    });
  }
  get Hst() {
    throw new Error("<Command_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Command_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$d = "src/stories/SVG/Dilk.story.svelte";
function create_default_slot$a(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z");
      add_location(path, file$d, 10, 2, 323);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 6 6");
      add_location(svg, file$d, 9, 1, 248);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$a.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Dilk\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$d(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Dilk",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$d($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Dilk_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
	<path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Dilk_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Dilk_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Dilk_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Dilk_story",
      options,
      id: create_fragment$d.name
    });
  }
  get Hst() {
    throw new Error("<Dilk_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Dilk_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$c = "src/stories/SVG/Maximize.story.svelte";
function create_default_slot$9(ctx) {
  let svg;
  let style;
  let t;
  let path0;
  let path1;
  let path2;
  let path3;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("path {\n				fill: #000;\n				transition: transform 0.25s ease-in-out;\n			}\n\n			svg:hover .tl {\n				transform: translate(-10px, -10px);\n			}\n\n			svg:hover .tr {\n				transform: translate(10px, -10px);\n			}\n\n			svg:hover .bl {\n				transform: translate(-10px, 10px);\n			}\n\n			svg:hover .br {\n				transform: translate(10px, 10px);\n			}\n		");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      add_location(style, file$c, 23, 2, 786);
      attr_dev(path0, "class", "tl");
      attr_dev(path0, "d", "M10,10h30v10h-20v20h-10z");
      add_location(path0, file$c, 45, 2, 1139);
      attr_dev(path1, "class", "tr");
      attr_dev(path1, "d", "M60,10 h30v30h-10v-20h-20z");
      add_location(path1, file$c, 46, 2, 1190);
      attr_dev(path2, "class", "bl");
      attr_dev(path2, "d", "M10,60v30h30v-10h-20v-20z");
      add_location(path2, file$c, 47, 2, 1243);
      attr_dev(path3, "class", "br");
      attr_dev(path3, "d", "M80,60h10v30h-30v-10h20z");
      add_location(path3, file$c, 48, 2, 1295);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$c, 22, 1, 707);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$9.name,
    type: "slot",
    source: '(22:0) <Hst.Story title=\\"SVGs/Maximize\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$c(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Maximize",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$c($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Maximize_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		path {
			fill: #000;
			transition: transform 0.25s ease-in-out;
		}
		svg:hover .tl { transform: translate(-10px, -10px) }
		svg:hover .tr { transform: translate(10px, -10px) }
		svg:hover .bl { transform: translate(-10px, 10px) }
		svg:hover .br { transform: translate(10px, 10px) }
	</style>
	<path class="tl" d="M10,10h30v10h-20v20h-10z" />
	<path class="tr" d="M60,10 h30v30h-10v-20h-20z" />
	<path class="bl" d="M10,60v30h30v-10h-20v-20z" />
	<path class="br" d="M80,60h10v30h-30v-10h20z" />
</svg>
`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Maximize_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Maximize_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Maximize_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Maximize_story",
      options,
      id: create_fragment$c.name
    });
  }
  get Hst() {
    throw new Error("<Maximize_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Maximize_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$b = "src/stories/SVG/Peacediscipline.story.svelte";
function create_default_slot$8(ctx) {
  let svg;
  let circle0;
  let circle1;
  let circle2;
  let circle3;
  let circle4;
  let circle5;
  let circle6;
  let circle7;
  let circle8;
  let circle9;
  let circle10;
  let circle11;
  let circle12;
  let circle13;
  let circle14;
  let circle15;
  let circle16;
  let circle17;
  let circle18;
  let circle19;
  let circle20;
  let circle21;
  let circle22;
  let circle23;
  let circle24;
  let circle25;
  let circle26;
  let circle27;
  let circle28;
  let circle29;
  let circle30;
  let circle31;
  let circle32;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      circle2 = svg_element("circle");
      circle3 = svg_element("circle");
      circle4 = svg_element("circle");
      circle5 = svg_element("circle");
      circle6 = svg_element("circle");
      circle7 = svg_element("circle");
      circle8 = svg_element("circle");
      circle9 = svg_element("circle");
      circle10 = svg_element("circle");
      circle11 = svg_element("circle");
      circle12 = svg_element("circle");
      circle13 = svg_element("circle");
      circle14 = svg_element("circle");
      circle15 = svg_element("circle");
      circle16 = svg_element("circle");
      circle17 = svg_element("circle");
      circle18 = svg_element("circle");
      circle19 = svg_element("circle");
      circle20 = svg_element("circle");
      circle21 = svg_element("circle");
      circle22 = svg_element("circle");
      circle23 = svg_element("circle");
      circle24 = svg_element("circle");
      circle25 = svg_element("circle");
      circle26 = svg_element("circle");
      circle27 = svg_element("circle");
      circle28 = svg_element("circle");
      circle29 = svg_element("circle");
      circle30 = svg_element("circle");
      circle31 = svg_element("circle");
      circle32 = svg_element("circle");
      attr_dev(circle0, "r", "116");
      attr_dev(circle0, "cx", "548");
      attr_dev(circle0, "cy", "454");
      add_location(circle0, file$b, 42, 2, 1483);
      attr_dev(circle1, "r", "46");
      attr_dev(circle1, "cx", "684");
      attr_dev(circle1, "cy", "349");
      add_location(circle1, file$b, 43, 2, 1522);
      attr_dev(circle2, "r", "32");
      attr_dev(circle2, "cx", "676");
      attr_dev(circle2, "cy", "260");
      add_location(circle2, file$b, 44, 2, 1560);
      attr_dev(circle3, "r", "64");
      attr_dev(circle3, "cx", "577");
      attr_dev(circle3, "cy", "223");
      add_location(circle3, file$b, 45, 2, 1598);
      attr_dev(circle4, "r", "32");
      attr_dev(circle4, "cx", "492");
      attr_dev(circle4, "cy", "288");
      add_location(circle4, file$b, 46, 2, 1636);
      attr_dev(circle5, "r", "38");
      attr_dev(circle5, "cx", "483");
      attr_dev(circle5, "cy", "155");
      add_location(circle5, file$b, 47, 2, 1674);
      attr_dev(circle6, "r", "79");
      attr_dev(circle6, "cx", "372");
      attr_dev(circle6, "cy", "219");
      add_location(circle6, file$b, 48, 2, 1712);
      attr_dev(circle7, "r", "38");
      attr_dev(circle7, "cx", "325");
      attr_dev(circle7, "cy", "337");
      add_location(circle7, file$b, 49, 2, 1750);
      attr_dev(circle8, "r", "46");
      attr_dev(circle8, "cx", "378");
      attr_dev(circle8, "cy", "417");
      add_location(circle8, file$b, 50, 2, 1788);
      attr_dev(circle9, "r", "14");
      attr_dev(circle9, "cx", "338");
      attr_dev(circle9, "cy", "503");
      add_location(circle9, file$b, 51, 2, 1826);
      attr_dev(circle10, "r", "34");
      attr_dev(circle10, "cx", "262");
      attr_dev(circle10, "cy", "491");
      add_location(circle10, file$b, 52, 2, 1864);
      attr_dev(circle11, "r", "14");
      attr_dev(circle11, "cx", "213");
      attr_dev(circle11, "cy", "439");
      add_location(circle11, file$b, 53, 2, 1902);
      attr_dev(circle12, "r", "23");
      attr_dev(circle12, "cx", "164");
      attr_dev(circle12, "cy", "472");
      add_location(circle12, file$b, 54, 2, 1940);
      attr_dev(circle13, "r", "34");
      attr_dev(circle13, "cx", "109");
      attr_dev(circle13, "cy", "412");
      add_location(circle13, file$b, 55, 2, 1978);
      attr_dev(circle14, "r", "14");
      attr_dev(circle14, "cx", "170");
      attr_dev(circle14, "cy", "386");
      add_location(circle14, file$b, 56, 2, 2016);
      attr_dev(circle15, "r", "23");
      attr_dev(circle15, "cx", "197");
      attr_dev(circle15, "cy", "334");
      add_location(circle15, file$b, 57, 2, 2054);
      attr_dev(circle16, "r", "14");
      attr_dev(circle16, "cx", "150");
      attr_dev(circle16, "cy", "313");
      add_location(circle16, file$b, 58, 2, 2092);
      attr_dev(circle17, "r", "14");
      attr_dev(circle17, "cx", "97");
      attr_dev(circle17, "cy", "317");
      add_location(circle17, file$b, 59, 2, 2130);
      attr_dev(circle18, "r", "34");
      attr_dev(circle18, "cx", "34");
      attr_dev(circle18, "cy", "303");
      add_location(circle18, file$b, 60, 2, 2167);
      attr_dev(circle19, "r", "14");
      attr_dev(circle19, "cx", "62");
      attr_dev(circle19, "cy", "252");
      add_location(circle19, file$b, 61, 2, 2204);
      attr_dev(circle20, "r", "14");
      attr_dev(circle20, "cx", "203");
      attr_dev(circle20, "cy", "259");
      add_location(circle20, file$b, 62, 2, 2241);
      attr_dev(circle21, "r", "14");
      attr_dev(circle21, "cx", "139");
      attr_dev(circle21, "cy", "248");
      add_location(circle21, file$b, 63, 2, 2279);
      attr_dev(circle22, "r", "14");
      attr_dev(circle22, "cx", "185");
      attr_dev(circle22, "cy", "212");
      add_location(circle22, file$b, 64, 2, 2317);
      attr_dev(circle23, "r", "34");
      attr_dev(circle23, "cx", "93");
      attr_dev(circle23, "cy", "156");
      add_location(circle23, file$b, 65, 2, 2355);
      attr_dev(circle24, "r", "14");
      attr_dev(circle24, "cx", "155");
      attr_dev(circle24, "cy", "162");
      add_location(circle24, file$b, 66, 2, 2392);
      attr_dev(circle25, "r", "14");
      attr_dev(circle25, "cx", "222");
      attr_dev(circle25, "cy", "148");
      add_location(circle25, file$b, 67, 2, 2430);
      attr_dev(circle26, "r", "14");
      attr_dev(circle26, "cx", "182");
      attr_dev(circle26, "cy", "103");
      add_location(circle26, file$b, 68, 2, 2468);
      attr_dev(circle27, "r", "14");
      attr_dev(circle27, "cx", "248");
      attr_dev(circle27, "cy", "98");
      add_location(circle27, file$b, 69, 2, 2506);
      attr_dev(circle28, "r", "34");
      attr_dev(circle28, "cx", "304");
      attr_dev(circle28, "cy", "66");
      add_location(circle28, file$b, 70, 2, 2543);
      attr_dev(circle29, "r", "14");
      attr_dev(circle29, "cx", "359");
      attr_dev(circle29, "cy", "33");
      add_location(circle29, file$b, 71, 2, 2580);
      attr_dev(circle30, "r", "14");
      attr_dev(circle30, "cx", "405");
      attr_dev(circle30, "cy", "53");
      add_location(circle30, file$b, 72, 2, 2617);
      attr_dev(circle31, "r", "34");
      attr_dev(circle31, "cx", "463");
      attr_dev(circle31, "cy", "34");
      add_location(circle31, file$b, 73, 2, 2654);
      attr_dev(circle32, "r", "14");
      attr_dev(circle32, "cx", "515");
      attr_dev(circle32, "cy", "68");
      add_location(circle32, file$b, 74, 2, 2691);
      attr_dev(svg, "viewBox", "0 0 732 571");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$b, 41, 1, 1418);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, circle0);
      append_dev(svg, circle1);
      append_dev(svg, circle2);
      append_dev(svg, circle3);
      append_dev(svg, circle4);
      append_dev(svg, circle5);
      append_dev(svg, circle6);
      append_dev(svg, circle7);
      append_dev(svg, circle8);
      append_dev(svg, circle9);
      append_dev(svg, circle10);
      append_dev(svg, circle11);
      append_dev(svg, circle12);
      append_dev(svg, circle13);
      append_dev(svg, circle14);
      append_dev(svg, circle15);
      append_dev(svg, circle16);
      append_dev(svg, circle17);
      append_dev(svg, circle18);
      append_dev(svg, circle19);
      append_dev(svg, circle20);
      append_dev(svg, circle21);
      append_dev(svg, circle22);
      append_dev(svg, circle23);
      append_dev(svg, circle24);
      append_dev(svg, circle25);
      append_dev(svg, circle26);
      append_dev(svg, circle27);
      append_dev(svg, circle28);
      append_dev(svg, circle29);
      append_dev(svg, circle30);
      append_dev(svg, circle31);
      append_dev(svg, circle32);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$8.name,
    type: "slot",
    source: '(41:0) <Hst.Story title=\\"SVGs/Peace Discipline\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$b(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Peace Discipline",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Peacediscipline_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg viewBox="0 0 732 571" xmlns="http://www.w3.org/2000/svg">
	<circle r="116" cx="548" cy="454" />
	<circle r="46" cx="684" cy="349" />
	<circle r="32" cx="676" cy="260" />
	<circle r="64" cx="577" cy="223" />
	<circle r="32" cx="492" cy="288" />
	<circle r="38" cx="483" cy="155" />
	<circle r="79" cx="372" cy="219" />
	<circle r="38" cx="325" cy="337" />
	<circle r="46" cx="378" cy="417" />
	<circle r="14" cx="338" cy="503" />
	<circle r="34" cx="262" cy="491" />
	<circle r="14" cx="213" cy="439" />
	<circle r="23" cx="164" cy="472" />
	<circle r="34" cx="109" cy="412" />
	<circle r="14" cx="170" cy="386" />
	<circle r="23" cx="197" cy="334" />
	<circle r="14" cx="150" cy="313" />
	<circle r="14" cx="97" cy="317" />
	<circle r="34" cx="34" cy="303" />
	<circle r="14" cx="62" cy="252" />
	<circle r="14" cx="203" cy="259" />
	<circle r="14" cx="139" cy="248" />
	<circle r="14" cx="185" cy="212" />
	<circle r="34" cx="93" cy="156" />
	<circle r="14" cx="155" cy="162" />
	<circle r="14" cx="222" cy="148" />
	<circle r="14" cx="182" cy="103" />
	<circle r="14" cx="248" cy="98" />
	<circle r="34" cx="304" cy="66" />
	<circle r="14" cx="359" cy="33" />
	<circle r="14" cx="405" cy="53" />
	<circle r="34" cx="463" cy="34" />
	<circle r="14" cx="515" cy="68" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Peacediscipline_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Peacediscipline_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Peacediscipline_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Peacediscipline_story",
      options,
      id: create_fragment$b.name
    });
  }
  get Hst() {
    throw new Error("<Peacediscipline_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Peacediscipline_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$a = "src/stories/SVG/Warning.story.svelte";
function create_default_slot$7(ctx) {
  let svg;
  let path0;
  let path1;
  let circle;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      circle = svg_element("circle");
      attr_dev(path0, "d", "M10 1L19 19L1 19z");
      attr_dev(path0, "stroke-width", "2");
      attr_dev(path0, "stroke-linejoin", "round");
      add_location(path0, file$a, 10, 2, 299);
      attr_dev(path1, "d", "M10 8v5");
      attr_dev(path1, "stroke-width", "2");
      attr_dev(path1, "stroke-linecap", "round");
      add_location(path1, file$a, 11, 2, 373);
      attr_dev(circle, "cx", "10");
      attr_dev(circle, "cy", "16");
      attr_dev(circle, "r", "1");
      attr_dev(circle, "fill", "#000");
      attr_dev(circle, "stroke", "none");
      add_location(circle, file$a, 12, 2, 436);
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "stroke", "#000");
      add_location(svg, file$a, 9, 1, 245);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, circle);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$7.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Warning\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$a(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Warning",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Warning_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Warning_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Warning_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Warning_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Warning_story",
      options,
      id: create_fragment$a.name
    });
  }
  get Hst() {
    throw new Error("<Warning_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Warning_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Rise_svelte_svelte_type_style_lang = "";
const file$9 = "src/components/Theme Toggles/Rise.svelte";
function create_fragment$9(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  let circle;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      circle = svg_element("circle");
      attr_dev(path0, "class", "sun s-pTKVn_h5v_UI");
      attr_dev(path0, "d", "M24 77.419a5.43 5.43 0 0 1-5.419-5.42c0-2.988 2.431-5.419 5.419-5.419s5.419 2.431 5.419 5.419A5.43 5.43 0 0 1 24 77.419zm0-12.778a7.37 7.37 0 0 0-7.358 7.358A7.37 7.37 0 0 0 24 79.357a7.37 7.37 0 0 0 7.358-7.358A7.37 7.37 0 0 0 24 64.641zm0-1.557a.97.97 0 0 0 .97-.97v-2.769a.97.97 0 1 0-1.94 0v2.769a.97.97 0 0 0 .97.97zm-9.885 7.945h-2.77a.97.97 0 0 0-.969.97.97.97 0 0 0 .969.969h2.77a.97.97 0 0 0 .969-.969.97.97 0 0 0-.969-.97zM24 80.915a.97.97 0 0 0-.97.97v2.769a.97.97 0 1 0 1.94 0v-2.769a.97.97 0 0 0-.97-.97zm12.654-9.885h-2.77a.97.97 0 0 0-.969.97.97.97 0 0 0 .969.969h2.77a.97.97 0 0 0 .97-.969.97.97 0 0 0-.97-.97zm-5.665-5.05a.97.97 0 0 0 .686-.284l1.028-1.028a.97.97 0 1 0-1.372-1.372l-1.028 1.029a.97.97 0 0 0 .686 1.655zm-14.664-.284c.189.189.437.284.686.284s.496-.095.685-.284a.97.97 0 0 0 0-1.371l-1.028-1.028a.97.97 0 0 0-1.371 0 .97.97 0 0 0 0 1.371l1.028 1.028zm0 12.608l-1.028 1.027a.97.97 0 0 0 0 1.371c.189.19.437.285.685.285s.496-.095.686-.285l1.028-1.027a.97.97 0 0 0 0-1.371.97.97 0 0 0-1.371 0zm15.35 0a.97.97 0 0 0-1.372 0 .97.97 0 0 0 .001 1.371l1.028 1.027c.189.19.437.285.686.285a.96.96 0 0 0 .685-.285.97.97 0 0 0 0-1.371l-1.028-1.027z");
      add_location(path0, file$9, 11, 2, 204);
      attr_dev(path1, "class", "moon s-pTKVn_h5v_UI");
      attr_dev(path1, "d", "M22.728 15.445c-3.71.885-6.47 4.162-6.47 8.055 0 4.573 3.804 8.293 8.479 8.293 2.995 0 5.697-1.522 7.214-3.933-.173.009-.348.013-.522.013-5.146 0-9.334-4.095-9.334-9.128a8.88 8.88 0 0 1 .633-3.3zM24.737 34C18.817 34 14 29.291 14 23.5S18.817 13 24.737 13c.423 0 .813.231 1.006.599a1.08 1.08 0 0 1-.079 1.146 6.76 6.76 0 0 0-1.31 4c0 3.816 3.173 6.92 7.075 6.92.719 0 1.428-.106 2.107-.311a1.14 1.14 0 0 1 1.138.277c.297.295.402.726.271 1.117C33.502 31.086 29.4 34 24.737 34z");
      add_location(path1, file$9, 15, 2, 1408);
      attr_dev(g, "class", "both s-pTKVn_h5v_UI");
      add_location(g, file$9, 10, 1, 185);
      attr_dev(circle, "cx", "24");
      attr_dev(circle, "cy", "24");
      attr_dev(circle, "r", "23");
      attr_dev(circle, "class", "s-pTKVn_h5v_UI");
      add_location(circle, file$9, 20, 1, 1923);
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-pTKVn_h5v_UI");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$9, 3, 0, 55);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      append_dev(g, path0);
      append_dev(g, path1);
      append_dev(svg, circle);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*light*/
      1) {
        toggle_class(
          svg,
          "light",
          /*light*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Rise", slots, []);
  let { light = false } = $$props;
  const writable_props = ["light"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Rise> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, light = !light);
  const keypress_handler = () => $$invalidate(0, light = !light);
  $$self.$$set = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  $$self.$capture_state = () => ({ light });
  $$self.$inject_state = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [light, click_handler, keypress_handler];
}
class Rise extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rise",
      options,
      id: create_fragment$9.name
    });
  }
  get light() {
    throw new Error("<Rise>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set light(value) {
    throw new Error("<Rise>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Rise_story_svelte_svelte_type_style_lang = "";
const file$8 = "src/stories/Theme Toggles/Rise.story.svelte";
function create_default_slot$6(ctx) {
  let div;
  let themetoggle;
  let updating_light;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function themetoggle_light_binding(value) {
    ctx[5](value);
  }
  let themetoggle_props = {};
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    themetoggle_props.light = /*light*/
    ctx[1];
  }
  themetoggle = new Rise({ props: themetoggle_props, $$inline: true });
  binding_callbacks.push(() => bind(themetoggle, "light", themetoggle_light_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(themetoggle.$$.fragment);
      attr_dev(div, "class", "s-m635yMRfLnUA");
      set_style(div, "--size", style___size);
      add_location(div, file$8, 7, 1, 235);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(themetoggle, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const themetoggle_changes = {};
      if (!updating_light && dirty & /*light*/
      2) {
        updating_light = true;
        themetoggle_changes.light = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_light = false);
      }
      themetoggle.$set(themetoggle_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(themetoggle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(themetoggle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(themetoggle);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Theme Toggles/Rise\\" icon=\\"material-symbols:light-mode\\">',
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Light Mode" };
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*light*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*light*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$4.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$8(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Theme Toggles/Rise",
      icon: "material-symbols:light-mode",
      $$slots: {
        controls: [create_controls_slot$4],
        default: [create_default_slot$6]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, light*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Rise_story", slots, []);
  let { Hst } = $$props;
  let light = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Rise_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Rise_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function themetoggle_light_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ThemeToggle: Rise, Hst, light, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("light" in $$props2)
      $$invalidate(1, light = $$props2.light);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    light,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    themetoggle_light_binding
  ];
}
class Rise_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rise_story",
      options,
      id: create_fragment$8.name
    });
  }
  get Hst() {
    throw new Error("<Rise_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Rise_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Spin_svelte_svelte_type_style_lang = "";
const file$7 = "src/components/Theme Toggles/Spin.svelte";
function create_fragment$7(ctx) {
  let svg;
  let path;
  let circle0;
  let circle1;
  let circle2;
  let circle3;
  let circle4;
  let circle5;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      circle2 = svg_element("circle");
      circle3 = svg_element("circle");
      circle4 = svg_element("circle");
      circle5 = svg_element("circle");
      attr_dev(path, "class", "s-qPp6Arpl19Zi");
      add_location(path, file$7, 10, 1, 185);
      attr_dev(circle0, "class", "a s-qPp6Arpl19Zi");
      attr_dev(circle0, "cx", "9");
      attr_dev(circle0, "cy", "1");
      attr_dev(circle0, "r", "1");
      add_location(circle0, file$7, 11, 1, 195);
      attr_dev(circle1, "class", "b s-qPp6Arpl19Zi");
      attr_dev(circle1, "cx", "15.93");
      attr_dev(circle1, "cy", "5");
      attr_dev(circle1, "r", "1");
      add_location(circle1, file$7, 12, 1, 237);
      attr_dev(circle2, "class", "c s-qPp6Arpl19Zi");
      attr_dev(circle2, "cx", "15.93");
      attr_dev(circle2, "cy", "13");
      attr_dev(circle2, "r", "1");
      add_location(circle2, file$7, 13, 1, 283);
      attr_dev(circle3, "class", "d s-qPp6Arpl19Zi");
      attr_dev(circle3, "cx", "9");
      attr_dev(circle3, "cy", "17");
      attr_dev(circle3, "r", "1");
      add_location(circle3, file$7, 14, 1, 330);
      attr_dev(circle4, "class", "e s-qPp6Arpl19Zi");
      attr_dev(circle4, "cx", "2.07");
      attr_dev(circle4, "cy", "13");
      attr_dev(circle4, "r", "1");
      add_location(circle4, file$7, 15, 1, 373);
      attr_dev(circle5, "class", "f s-qPp6Arpl19Zi");
      attr_dev(circle5, "cx", "2.07");
      attr_dev(circle5, "cy", "5");
      attr_dev(circle5, "r", "1");
      add_location(circle5, file$7, 16, 1, 419);
      attr_dev(svg, "viewBox", "0 0 18 18");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-qPp6Arpl19Zi");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$7, 3, 0, 55);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
      append_dev(svg, circle0);
      append_dev(svg, circle1);
      append_dev(svg, circle2);
      append_dev(svg, circle3);
      append_dev(svg, circle4);
      append_dev(svg, circle5);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[1],
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[2],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*light*/
      1) {
        toggle_class(
          svg,
          "light",
          /*light*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Spin", slots, []);
  let { light = false } = $$props;
  const writable_props = ["light"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Spin> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(0, light = !light);
  const keypress_handler = () => $$invalidate(0, light = !light);
  $$self.$$set = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  $$self.$capture_state = () => ({ light });
  $$self.$inject_state = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [light, click_handler, keypress_handler];
}
class Spin extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin",
      options,
      id: create_fragment$7.name
    });
  }
  get light() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set light(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Spin_story_svelte_svelte_type_style_lang = "";
const file$6 = "src/stories/Theme Toggles/Spin.story.svelte";
function create_default_slot$5(ctx) {
  let div;
  let themetoggle;
  let updating_light;
  let style___size = `${/*size*/
  ctx[2]}vw`;
  let current;
  function themetoggle_light_binding(value) {
    ctx[5](value);
  }
  let themetoggle_props = {};
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    themetoggle_props.light = /*light*/
    ctx[1];
  }
  themetoggle = new Spin({ props: themetoggle_props, $$inline: true });
  binding_callbacks.push(() => bind(themetoggle, "light", themetoggle_light_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(themetoggle.$$.fragment);
      attr_dev(div, "class", "s-3UEp0fbEuXKr");
      set_style(div, "--size", style___size);
      add_location(div, file$6, 7, 1, 235);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(themetoggle, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const themetoggle_changes = {};
      if (!updating_light && dirty & /*light*/
      2) {
        updating_light = true;
        themetoggle_changes.light = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_light = false);
      }
      themetoggle.$set(themetoggle_changes);
      if (dirty & /*size*/
      4 && style___size !== (style___size = `${/*size*/
      ctx2[2]}vw`)) {
        set_style(div, "--size", style___size);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(themetoggle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(themetoggle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(themetoggle);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Theme Toggles/Spin\\" icon=\\"material-symbols:light-mode\\">',
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_slider;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Light Mode" };
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*light*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_slider_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider_props = { title: "Size %", min: 1, max: 100 };
  if (
    /*size*/
    ctx[2] !== void 0
  ) {
    hst_slider_props.value = /*size*/
    ctx[2];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*light*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_slider_changes = {};
      if (!updating_value_1 && dirty & /*size*/
      4) {
        updating_value_1 = true;
        hst_slider_changes.value = /*size*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(12:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Theme Toggles/Spin",
      icon: "material-symbols:light-mode",
      $$slots: {
        controls: [create_controls_slot$3],
        default: [create_default_slot$5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, size, light*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Spin_story", slots, []);
  let { Hst } = $$props;
  let light = false;
  let size = 50;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Spin_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Spin_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  function hst_slider_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  function themetoggle_light_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ThemeToggle: Spin, Hst, light, size });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("light" in $$props2)
      $$invalidate(1, light = $$props2.light);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    light,
    size,
    hst_checkbox_value_binding,
    hst_slider_value_binding,
    themetoggle_light_binding
  ];
}
class Spin_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin_story",
      options,
      id: create_fragment$6.name
    });
  }
  get Hst() {
    throw new Error("<Spin_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Spin_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Button_svelte_svelte_type_style_lang = "";
const file$5 = "src/lib/Button.svelte";
function create_fragment$5(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  const block = {
    c: function create() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      attr_dev(button, "class", "s-phxJ07zyCj0K");
      add_location(button, file$5, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[2],
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button", slots, ["default"]);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Button> was created with unknown prop '${key}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots, click_handler];
}
class Button extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment$5.name
    });
  }
}
const file$4 = "src/stories/SVG/logo/Animated.story.svelte";
function create_key_block$1(ctx) {
  let svg;
  let style;
  let t;
  let mask;
  let rect;
  let path0;
  let g;
  let path1;
  let path2;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("path {\n					fill: black;\n				}\n\n				#cog {\n					animation: cog 2s ease-out;\n					transform-origin: center;\n					transform-box: fill-box;\n				}\n\n				#cutout-path {\n					transform: translateX(-100%);\n					animation: cutout 1s 0.6s ease-out;\n					animation-fill-mode: forwards;\n				}\n\n				#m {\n					transform: scale(0);\n					animation: m 0.6s 1s ease-out;\n					animation-fill-mode: forwards;\n					transform-origin: center;\n					transform-box: fill-box;\n				}\n\n				@keyframes cog {\n					from {\n						transform: rotate(0deg);\n					}\n\n					to {\n						transform: rotate(180deg);\n					}\n				}\n\n				@keyframes cutout {\n					to {\n						transform: translateX(0%);\n					}\n				}\n\n				@keyframes m {\n					to {\n						transform: scale(1);\n					}\n				}\n			");
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      add_location(style, file$4, 56, 3, 2119);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$4, 104, 4, 2905);
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$4, 105, 4, 2969);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$4, 103, 3, 2882);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$4, 108, 4, 3076);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$4, 107, 3, 3048);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$4, 114, 3, 3959);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$4, 55, 2, 2039);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t);
      append_dev(svg, mask);
      append_dev(mask, rect);
      append_dev(mask, path0);
      append_dev(svg, g);
      append_dev(g, path1);
      append_dev(svg, path2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$1.name,
    type: "key",
    source: "(55:1) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let previous_key = (
    /*key*/
    ctx[1]
  );
  let key_block_anchor;
  let key_block = create_key_block$1(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_dev(target, key_block_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*key*/
      2 && safe_not_equal(previous_key, previous_key = /*key*/
      ctx2[1])) {
        key_block.d(1);
        key_block = create_key_block$1(ctx2);
        key_block.c();
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(54:0) <Hst.Story title=\\"Logo/Animated\\" icon=\\"mdi:cog\\" {source}>',
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Play Animation");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: "(119:2) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(118:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo/Animated",
      icon: "mdi:cog",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot_1$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, key*/
      18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Animated_story", slots, []);
  let { Hst } = $$props;
  let key = true;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		path { fill: black }

		#cog {
			animation: cog 2s ease-out;
			transform-origin: center;
			transform-box: fill-box;
		}

		#cutout-path {
			transform: translateX(-100%);
			animation: cutout 1s 0.6s ease-out;
			animation-fill-mode: forwards;
		}

		#m {
			transform: scale(0);
			animation: m 0.6s 1s ease-out;
			animation-fill-mode: forwards;
			transform-origin: center;
			transform-box: fill-box;
		}

		@keyframes cog {
			from { transform: rotate(0deg) }
			to { transform: rotate(180deg) }
		}

		@keyframes cutout {
			to { transform: translateX(0%) }
		}

		@keyframes m {
			to { transform: scale(1) }
		}
	</style>
	<mask id="cutout">
		<rect x="0" y="0" width="100%" height="100%" fill="#fff" />
		<path id="cutout-path" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
	</mask>
	<g mask="url(#cutout)">
		<path id="cog" fill-rule="evenodd" d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z" />
	</g>
	<path id="m" d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Animated_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Animated_story> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(1, key = !key);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Button, Hst, key, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("key" in $$props2)
      $$invalidate(1, key = $$props2.key);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, key, source, click_handler];
}
class Animated_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Animated_story",
      options,
      id: create_fragment$4.name
    });
  }
  get Hst() {
    throw new Error("<Animated_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Animated_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/stories/SVG/logo/Default.story.svelte";
function create_default_slot$3(ctx) {
  let svg;
  let mask;
  let rect;
  let path0;
  let g;
  let path1;
  let path2;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "white");
      add_location(rect, file$3, 18, 3, 1397);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$3, 19, 3, 1461);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$3, 17, 2, 1375);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$3, 22, 3, 1560);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$3, 21, 2, 1533);
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$3, 27, 2, 2424);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$3, 16, 1, 1296);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, mask);
      append_dev(mask, rect);
      append_dev(mask, path0);
      append_dev(svg, g);
      append_dev(g, path1);
      append_dev(svg, path2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: '(16:0) <Hst.Story title=\\"Logo/Default\\" icon=\\"mdi:cog\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo/Default",
      icon: "mdi:cog",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Default_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<mask id="cutout">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<path fill="#000" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
	</mask>
	<g mask="url(#cutout)">
		<path fill-rule="evenodd" d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z" />
	</g>
	<path d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Default_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Default_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Default_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Default_story",
      options,
      id: create_fragment$3.name
    });
  }
  get Hst() {
    throw new Error("<Default_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Default_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/stories/SVG/logo/Flat.story.svelte";
function create_default_slot$2(ctx) {
  let svg;
  let style;
  let t;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("path {\n				fill: #000;\n			}\n\n			@media (prefers-color-scheme: dark) {\n				path {\n					fill: #fff;\n				}\n			}\n		");
      path = svg_element("path");
      add_location(style, file$2, 21, 2, 1187);
      attr_dev(path, "d", "M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z");
      add_location(path, file$2, 32, 2, 1320);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 256 256");
      add_location(svg, file$2, 20, 1, 1108);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(20:0) <Hst.Story title=\\"Logo/Flat\\" icon=\\"mdi:cog\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo/Flat",
      icon: "mdi:cog",
      source: (
        /*source*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Flat_story", slots, []);
  let { Hst } = $$props;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
	<style>
		path {
			fill: #000;
		}

		@media (prefers-color-scheme: dark) {
			path {
				fill: #fff;
			}
		}
	</style>
	<path d="M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Flat_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Flat_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, source];
}
class Flat_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Flat_story",
      options,
      id: create_fragment$2.name
    });
  }
  get Hst() {
    throw new Error("<Flat_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Flat_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/stories/SVG/logo/InfinitelyAnimated.story.svelte";
function create_default_slot$1(ctx) {
  let svg;
  let style;
  let t;
  let mask;
  let rect;
  let path0;
  let g;
  let path1;
  let path2;
  let style___speed = `${/*value*/
  ctx[1]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("path {\n				fill: black;\n			}\n\n			#cog {\n				animation: cog linear infinite;\n				animation-duration: var(--speed);\n				transform-origin: center;\n				transform-box: fill-box;\n			}\n\n			@keyframes cog {\n				from {\n					transform: rotate(0deg);\n				}\n				to {\n					transform: rotate(360deg);\n				}\n			}\n		");
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      add_location(style, file$1, 38, 2, 1718);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$1, 60, 3, 2062);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$1, 61, 3, 2125);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$1, 59, 2, 2040);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$1, 64, 3, 2241);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$1, 63, 2, 2214);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$1, 70, 2, 3118);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$1, 32, 1, 1604);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t);
      append_dev(svg, mask);
      append_dev(mask, rect);
      append_dev(mask, path0);
      append_dev(svg, g);
      append_dev(g, path1);
      append_dev(svg, path2);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*value*/
      2 && style___speed !== (style___speed = `${/*value*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(32:0) <Hst.Story title=\\"Logo/Infinitely Animated\\" icon=\\"mdi:cog\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_slider;
  let updating_value;
  let current;
  function hst_slider_value_binding(value) {
    ctx[3](value);
  }
  let hst_slider_props = { min: 1, max: 20, title: "Seconds per ⭮" };
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    hst_slider_props.value = /*value*/
    ctx[1];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        hst_slider_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(73:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo/Infinitely Animated",
      icon: "mdi:cog",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, value*/
      18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("InfinitelyAnimated_story", slots, []);
  let { Hst } = $$props;
  let value = 8;
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		path { fill: black }

		#cog {
			animation: cog 2s linear infinite;
			transform-origin: center;
			transform-box: fill-box;
		}

		@keyframes cog {
			from { transform: rotate(0deg) }
			to { transform: rotate(90deg) }
		}
	</style>
	<mask id="cutout">
		<rect x="0" y="0" width="100%" height="100%" fill="#fff" />
		<path fill="#000" id="cutout-path" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
	</mask>
	<g mask="url(#cutout)">
		<path id="cog" fill-rule="evenodd"
			d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z" />
	</g>
	<path id="m" d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<InfinitelyAnimated_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<InfinitelyAnimated_story> was created with unknown prop '${key}'`);
  });
  function hst_slider_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, value, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, value, source, hst_slider_value_binding];
}
class InfinitelyAnimated_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "InfinitelyAnimated_story",
      options,
      id: create_fragment$1.name
    });
  }
  get Hst() {
    throw new Error("<InfinitelyAnimated_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<InfinitelyAnimated_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/stories/SVG/logo/LogoWithName.story.svelte";
function create_key_block(ctx) {
  let svg;
  let style;
  let t0;
  let mask;
  let rect;
  let path0;
  let g;
  let path1;
  let path2;
  let text0;
  let t1;
  let text1;
  let t2;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t0 = text('#cog {\n					fill: #4b8dda;\n					animation: cog 2s ease-out;\n					transform-origin: center;\n					transform-box: fill-box;\n				}\n				#cutout-path {\n					transform: translateX(-100%);\n					animation: cutout 1s 0.6s ease-out;\n					animation-fill-mode: forwards;\n				}\n				#m {\n					fill: #4b8dda;\n					transform: scale(0);\n					animation: m 0.6s 1s ease-out;\n					animation-fill-mode: forwards;\n					transform-origin: center;\n					transform-box: fill-box;\n				}\n				.text {\n					text-anchor: middle;\n					font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI",\n						system-ui, "Ubuntu", "Droid Sans", sans-serif;\n					fill: #4b8dda;\n					font-weight: 600;\n					transform: translateY(10%);\n					opacity: 0;\n				}\n				.name {\n					font-size: 1em;\n					animation: name 0.6s 0.8s ease-out;\n					animation-fill-mode: forwards;\n				}\n				.surname {\n					font-size: 1.5em;\n					animation: name 0.6s 1.4s ease-out;\n					animation-fill-mode: forwards;\n				}\n				@keyframes cog {\n					from {\n						transform: rotate(0deg);\n					}\n					to {\n						transform: rotate(180deg);\n					}\n				}\n				@keyframes cutout {\n					to {\n						transform: translateX(0%);\n					}\n				}\n				@keyframes m {\n					to {\n						transform: scale(1);\n					}\n				}\n				@keyframes name {\n					to {\n						transform: translateY(0%);\n						opacity: 1;\n					}\n				}\n			');
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      text0 = svg_element("text");
      t1 = text("Mikha");
      text1 = svg_element("text");
      t2 = text("Davids");
      add_location(style, file, 36, 3, 2836);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "white");
      add_location(rect, file, 101, 4, 4221);
      attr_dev(path0, "fill", "black");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file, 102, 4, 4286);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file, 100, 3, 4198);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file, 105, 4, 4406);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file, 104, 3, 4378);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file, 111, 3, 5289);
      attr_dev(text0, "textLength", "46");
      attr_dev(text0, "x", "50");
      attr_dev(text0, "y", "120");
      attr_dev(text0, "class", "name text");
      add_location(text0, file, 112, 3, 5371);
      attr_dev(text1, "textLength", "74");
      attr_dev(text1, "x", "50");
      attr_dev(text1, "y", "145");
      attr_dev(text1, "class", "surname text");
      add_location(text1, file, 113, 3, 5442);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 150");
      add_location(svg, file, 35, 2, 2756);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t0);
      append_dev(svg, mask);
      append_dev(mask, rect);
      append_dev(mask, path0);
      append_dev(svg, g);
      append_dev(g, path1);
      append_dev(svg, path2);
      append_dev(svg, text0);
      append_dev(text0, t1);
      append_dev(svg, text1);
      append_dev(text1, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(35:1) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let previous_key = (
    /*key*/
    ctx[1]
  );
  let key_block_anchor;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_dev(target, key_block_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*key*/
      2 && safe_not_equal(previous_key, previous_key = /*key*/
      ctx2[1])) {
        key_block.d(1);
        key_block = create_key_block(ctx2);
        key_block.c();
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(34:0) <Hst.Story title=\\"Logo/Logo with name\\" icon=\\"mdi:cog\\" {source}>',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Play Animation");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(118:2) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(117:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo/Logo with name",
      icon: "mdi:cog",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, key*/
      18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("LogoWithName_story", slots, []);
  let { Hst } = $$props;
  let key = false;
  let source = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150">
	<style>
		#cog { fill: #4B8DDA; animation: cog 2s ease-out; transform-origin: center; transform-box: fill-box; }
		#cutout-path { transform: translateX(-100%); animation: cutout 1s 0.6s ease-out; animation-fill-mode: forwards; }
		#m { fill: #4B8DDA; transform: scale(0); animation: m 0.6s 1s ease-out; animation-fill-mode: forwards; transform-origin: center; transform-box: fill-box; }
		.text { text-anchor: middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif; fill: #4B8DDA; font-weight: 600; transform: translateY(10%); opacity: 0; }
		.name { font-size: 1em; animation: name 0.6s 0.8s ease-out; animation-fill-mode: forwards; }
		.surname { font-size: 1.5em; animation: name 0.6s 1.4s ease-out; animation-fill-mode: forwards; }
		@keyframes cog { from { transform: rotate(0deg); } to { transform: rotate(180deg); } }
		@keyframes cutout { to { transform: translateX(0%); } }
		@keyframes m { to { transform: scale(1); } }
		@keyframes name { to { transform: translateY(0%); opacity: 1; } }
	</style>
	<mask id="cutout">
		<!-- Everything under a white pixel will be visible -->
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<!-- Everything under a black pixel will be invisible -->
		<path fill="black" id="cutout-path" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z"/>
	</mask>
	<g mask="url(#cutout)" >
		<path id="cog" fill-rule="evenodd" d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z"/>
	</g>
	<path id="m" d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z"/>
	<text textLength="46" x="50" y="120" class="name text">Mikha</text>
	<text textLength="74" x="50" y="145" class="surname text">Davids</text>
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<LogoWithName_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<LogoWithName_story> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(1, key = !key);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Button, Hst, key, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("key" in $$props2)
      $$invalidate(1, key = $$props2.key);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, key, source, click_handler];
}
class LogoWithName_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LogoWithName_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<LogoWithName_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<LogoWithName_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-stories-colorinput-story-svelte", "path": ["Components", "Color Input"], "filePath": "src/stories/ColorInput.story.svelte", "story": { "id": "src-stories-colorinput-story-svelte", "title": "Color Input", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "typcn:input-checked", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: ColorInput_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-colorinput-story-svelte-26ea92ff.js"), true ? [] : void 0) },
  { "id": "src-stories-colorpicker-story-svelte", "path": ["Components", "Color Picker"], "filePath": "src/stories/ColorPicker.story.svelte", "story": { "id": "src-stories-colorpicker-story-svelte", "title": "Color Picker", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:eyedropper-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 1, component: ColorPicker_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-colorpicker-story-svelte-fe4fb8e3.js"), true ? [] : void 0) },
  { "id": "src-stories-glitch-story-svelte", "path": ["Components", "Glitch Text"], "filePath": "src/stories/Glitch.story.svelte", "story": { "id": "src-stories-glitch-story-svelte", "title": "Glitch Text", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "bx:text", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "docsFilePath": "src/stories/Glitch.story.md", "index": 2, component: Glitch_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-glitch-story-svelte-d44fd770.js"), true ? [] : void 0) },
  { "id": "src-stories-burger-menus-circle-story-svelte", "path": ["Components", "Burger Menus", "Circle"], "filePath": "src/stories/Burger Menus/Circle.story.svelte", "story": { "id": "src-stories-burger-menus-circle-story-svelte", "title": "Circle", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 3, component: Circle_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-burger-menus-circle-story-svelte-0d470844.js"), true ? [] : void 0) },
  { "id": "src-stories-burger-menus-cross-story-svelte", "path": ["Components", "Burger Menus", "Cross"], "filePath": "src/stories/Burger Menus/Cross.story.svelte", "story": { "id": "src-stories-burger-menus-cross-story-svelte", "title": "Cross", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 4, component: Cross_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-burger-menus-cross-story-svelte-2a0df5f2.js"), true ? [] : void 0) },
  { "id": "src-stories-burger-menus-foldin-story-svelte", "path": ["Components", "Burger Menus", "Fold in"], "filePath": "src/stories/Burger Menus/FoldIn.story.svelte", "story": { "id": "src-stories-burger-menus-foldin-story-svelte", "title": "Fold in", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 5, component: FoldIn_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-burger-menus-foldin-story-svelte-f96ba437.js"), true ? [] : void 0) },
  { "id": "src-stories-burger-menus-merge-story-svelte", "path": ["Components", "Burger Menus", "Merge"], "filePath": "src/stories/Burger Menus/Merge.story.svelte", "story": { "id": "src-stories-burger-menus-merge-story-svelte", "title": "Merge", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 6, component: Merge_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-burger-menus-merge-story-svelte-fbc5e3f5.js"), true ? [] : void 0) },
  { "id": "src-stories-pause-morph-story-svelte", "path": ["Components", "Pause", "Merge"], "filePath": "src/stories/Pause/Morph.story.svelte", "story": { "id": "src-stories-pause-morph-story-svelte", "title": "Merge", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:pause-outline", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 7, component: Morph_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-pause-morph-story-svelte-d5068bea.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-close-story-svelte", "path": ["SVGs", "Close"], "filePath": "src/stories/SVG/Close.story.svelte", "story": { "id": "src-stories-svg-close-story-svelte", "title": "Close", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 8, component: Close_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-close-story-svelte-3ee1409c.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-command-story-svelte", "path": ["SVGs", "Command"], "filePath": "src/stories/SVG/Command.story.svelte", "story": { "id": "src-stories-svg-command-story-svelte", "title": "Command", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 9, component: Command_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-command-story-svelte-e8238967.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-dilk-story-svelte", "path": ["SVGs", "Dilk"], "filePath": "src/stories/SVG/Dilk.story.svelte", "story": { "id": "src-stories-svg-dilk-story-svelte", "title": "Dilk", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 10, component: Dilk_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-dilk-story-svelte-e4726728.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-maximize-story-svelte", "path": ["SVGs", "Maximize"], "filePath": "src/stories/SVG/Maximize.story.svelte", "story": { "id": "src-stories-svg-maximize-story-svelte", "title": "Maximize", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 11, component: Maximize_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-maximize-story-svelte-4d2af987.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-peacediscipline-story-svelte", "path": ["SVGs", "Peace Discipline"], "filePath": "src/stories/SVG/Peacediscipline.story.svelte", "story": { "id": "src-stories-svg-peacediscipline-story-svelte", "title": "Peace Discipline", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 12, component: Peacediscipline_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-peacediscipline-story-svelte-7e09b1ec.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-warning-story-svelte", "path": ["SVGs", "Warning"], "filePath": "src/stories/SVG/Warning.story.svelte", "story": { "id": "src-stories-svg-warning-story-svelte", "title": "Warning", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 13, component: Warning_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-warning-story-svelte-d3e4bb80.js"), true ? [] : void 0) },
  { "id": "src-stories-theme-toggles-rise-story-svelte", "path": ["Components", "Theme Toggles", "Rise"], "filePath": "src/stories/Theme Toggles/Rise.story.svelte", "story": { "id": "src-stories-theme-toggles-rise-story-svelte", "title": "Rise", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:light-mode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 14, component: Rise_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-theme-toggles-rise-story-svelte-ec17f783.js"), true ? [] : void 0) },
  { "id": "src-stories-theme-toggles-spin-story-svelte", "path": ["Components", "Theme Toggles", "Spin"], "filePath": "src/stories/Theme Toggles/Spin.story.svelte", "story": { "id": "src-stories-theme-toggles-spin-story-svelte", "title": "Spin", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:light-mode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 15, component: Spin_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-theme-toggles-spin-story-svelte-2e8aef79.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-animated-story-svelte", "path": ["Logo", "Animated"], "filePath": "src/stories/SVG/logo/Animated.story.svelte", "story": { "id": "src-stories-svg-logo-animated-story-svelte", "title": "Animated", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 16, component: Animated_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-animated-story-svelte-b68dc546.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-default-story-svelte", "path": ["Logo", "Default"], "filePath": "src/stories/SVG/logo/Default.story.svelte", "story": { "id": "src-stories-svg-logo-default-story-svelte", "title": "Default", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 17, component: Default_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-default-story-svelte-8fe8cf3e.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-flat-story-svelte", "path": ["Logo", "Flat"], "filePath": "src/stories/SVG/logo/Flat.story.svelte", "story": { "id": "src-stories-svg-logo-flat-story-svelte", "title": "Flat", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 18, component: Flat_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-flat-story-svelte-784d6674.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-infinitelyanimated-story-svelte", "path": ["Logo", "Infinitely Animated"], "filePath": "src/stories/SVG/logo/InfinitelyAnimated.story.svelte", "story": { "id": "src-stories-svg-logo-infinitelyanimated-story-svelte", "title": "Infinitely Animated", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 19, component: InfinitelyAnimated_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-infinitelyanimated-story-svelte-95266539.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-logowithname-story-svelte", "path": ["Logo", "Logo with name"], "filePath": "src/stories/SVG/logo/LogoWithName.story.svelte", "story": { "id": "src-stories-svg-logo-logowithname-story-svelte", "title": "Logo with name", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 20, component: LogoWithName_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-logowithname-story-svelte-5165d113.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "Burger Menus", "children": [{ "title": "Circle", "index": 3 }, { "title": "Cross", "index": 4 }, { "title": "Fold in", "index": 5 }, { "title": "Merge", "index": 6 }] }, { "title": "Color Input", "index": 0 }, { "title": "Color Picker", "index": 1 }, { "title": "Glitch Text", "index": 2 }, { "title": "Pause", "children": [{ "title": "Merge", "index": 7 }] }, { "title": "Theme Toggles", "children": [{ "title": "Rise", "index": 14 }, { "title": "Spin", "index": 15 }] }] }, { "title": "Logo", "children": [{ "title": "Animated", "index": 16 }, { "title": "Default", "index": 17 }, { "title": "Flat", "index": 18 }, { "title": "Infinitely Animated", "index": 19 }, { "title": "Logo with name", "index": 20 }] }, { "title": "SVGs", "children": [{ "title": "Close", "index": 8 }, { "title": "Command", "index": 9 }, { "title": "Dilk", "index": 10 }, { "title": "Maximize", "index": 11 }, { "title": "Peace Discipline", "index": 12 }, { "title": "Warning", "index": 13 }] }];
const Logo_light = "/svelte-component-library/img/logo-black.svg";
const Logo_dark = "/svelte-component-library/img/logo-white.svg";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/svelte-component-library/svelte-component-library/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/svelte-component-library/svelte-component-library/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Mikha's Components", "colors": { "primary": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "/img/logo-black.svg", "dark": "/img/logo-white.svg" }, "favicon": "/img/favicon.svg", "logoHref": "https://github.com/MikhaD" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"] };
const logos = { square: Logo_square, light: Logo_light, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/svelte-component-library/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-5a257125.js"), true ? ["assets/HomeView.vue-5a257125.js","assets/vendor-4e25265d.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-24205d1e.js"), true ? ["assets/StoryView.vue-24205d1e.js","assets/vendor-4e25265d.js","assets/MobileOverlay.vue2-60ec3ed2.js","assets/BaseEmpty.vue-62004800.js","assets/state-b2a06967.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a2;
  (_a2 = window.__hst_controls_dark) == null ? void 0 : _a2.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-4e25265d.js").then((n) => n.b5), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-4e25265d.js").then((n) => n.b6), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a2;
      const clientPlugin = clientSupportPlugins[(_a2 = props.story.file) == null ? void 0 : _a2.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
