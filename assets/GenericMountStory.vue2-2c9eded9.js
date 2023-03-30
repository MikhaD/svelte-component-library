var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
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
import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as validate_slots, W as element, X as attr_dev, Y as add_location, Z as insert_dev, _ as listen_dev, $ as prop_dev, a0 as noop, a1 as detach_dev, a2 as run_all, a3 as text, a4 as append_dev, a5 as set_data_dev, a6 as toggle_class, a7 as set_style, a8 as binding_callbacks, a9 as bind, aa as space, ab as create_component, ac as add_render_callback, ad as mount_component, ae as select_option, af as group_outros, ag as transition_out, ah as check_outros, ai as transition_in, aj as add_flush_callback, ak as destroy_component, al as select_value, am as self, an as svg_element, ao as create_slot, ap as update_slot_base, aq as get_all_dirty_from_scope, ar as get_slot_changes, as as bubble, at as empty, au as createEventDispatcher, av as xlink_attr, aw as validate_each_argument, ax as destroy_each, ay as set_input_value, az as to_number, aA as Logo_square, aB as createRouter, aC as createWebHistory, aD as createWebHashHistory, aE as useDark, aF as useToggle, k as watch, aG as markRaw, E as reactive, d as defineComponent, r as ref, aH as watchEffect, o as openBlock, q as createBlock, aI as mergeProps, aJ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-9cc9f24f.js";
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
const file$J = "src/components/ColorPicker/HexInput.svelte";
function create_fragment$Q(ctx) {
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
      add_location(input, file$J, 46, 0, 950);
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
    id: create_fragment$Q.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$Q($$self, $$props, $$invalidate) {
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
    const key2 = e.key.toLowerCase();
    if (key2 === "enter") {
      e.currentTarget.blur();
    } else if (key2 === "v" && e.ctrlKey || !validChars.has(key2)) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<HexInput> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$Q, create_fragment$Q, safe_not_equal, { value: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HexInput",
      options,
      id: create_fragment$Q.name
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
const file$I = "src/components/ColorPicker/NumberInput.svelte";
function create_fragment$P(ctx) {
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
      add_location(input, file$I, 39, 1, 1102);
      attr_dev(span0, "class", "pad s-AtPy_6gOzO0N");
      add_location(span0, file$I, 48, 2, 1244);
      attr_dev(span1, "class", "value s-AtPy_6gOzO0N");
      add_location(span1, file$I, 48, 34, 1276);
      attr_dev(span2, "class", "suffix s-AtPy_6gOzO0N");
      add_location(span2, file$I, 47, 3, 1220);
      attr_dev(span3, "class", "input s-AtPy_6gOzO0N");
      add_location(span3, file$I, 38, 0, 1080);
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
    id: create_fragment$P.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function clamp(min2, num, max2) {
  return Math.min(Math.max(num, min2), max2);
}
function instance$P($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<NumberInput> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$P, create_fragment$P, safe_not_equal, {
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
      id: create_fragment$P.name
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
const file$H = "src/components/ColorPicker/Slider.svelte";
function create_fragment$O(ctx) {
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
      add_location(div, file$H, 24, 0, 558);
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
    id: create_fragment$O.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$O($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Slider> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$O, create_fragment$O, safe_not_equal, {
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
      id: create_fragment$O.name
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
const file$G = "src/components/ColorPicker/TwoDSelect.svelte";
function create_fragment$N(ctx) {
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
      add_location(div, file$G, 25, 0, 565);
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
    id: create_fragment$N.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$N($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<TwoDSelect> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$N, create_fragment$N, safe_not_equal, { h: 2, bg: 3, x: 0, y: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TwoDSelect",
      options,
      id: create_fragment$N.name
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
const file$F = "src/components/ColorPicker/ColorPicker.svelte";
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
      add_location(span, file$F, 51, 5, 1427);
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
function create_fragment$M(ctx) {
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
      add_location(div0, file$F, 31, 2, 887);
      attr_dev(div1, "class", "slider-container s-tCXq3qTKsCNT");
      add_location(div1, file$F, 32, 2, 911);
      attr_dev(div2, "class", "controls s-tCXq3qTKsCNT");
      add_location(div2, file$F, 30, 1, 862);
      option0.__value = "hex";
      option0.value = option0.__value;
      add_location(option0, file$F, 44, 4, 1211);
      option1.__value = "rgb";
      option1.value = option1.__value;
      add_location(option1, file$F, 45, 4, 1248);
      option2.__value = "hsl";
      option2.value = option2.__value;
      add_location(option2, file$F, 46, 4, 1285);
      option3.__value = "hsv";
      option3.value = option3.__value;
      add_location(option3, file$F, 47, 4, 1322);
      attr_dev(select, "class", "s-tCXq3qTKsCNT");
      if (
        /*colorType*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[9].call(select)
        ));
      add_location(select, file$F, 43, 3, 1175);
      attr_dev(div3, "class", "values s-tCXq3qTKsCNT");
      add_location(div3, file$F, 49, 3, 1371);
      attr_dev(div4, "class", "value-input s-tCXq3qTKsCNT");
      add_location(div4, file$F, 42, 2, 1146);
      add_location(div5, file$F, 41, 1, 1138);
      attr_dev(div6, "class", "color-picker s-tCXq3qTKsCNT");
      set_style(div6, "--color", style___color);
      add_location(div6, file$F, 12, 0, 352);
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
    id: create_fragment$M.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$M($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorPicker", slots, []);
  let { value = "#888" } = $$props;
  let color = Color.fromHEX(value);
  let { colorType: colorType2 = "rgb" } = $$props;
  const writable_props = ["value", "colorType"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ColorPicker> was created with unknown prop '${key2}'`);
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
      $$invalidate(2, value = color.hexa);
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
    init(this, options, instance$M, create_fragment$M, safe_not_equal, { value: 2, colorType: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker",
      options,
      id: create_fragment$M.name
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
const file$E = "src/components/ColorInput.svelte";
function create_if_block(ctx) {
  let div;
  let colorpicker;
  let updating_value;
  let current;
  function colorpicker_value_binding(value) {
    ctx[4](value);
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
      add_location(div, file$E, 22, 3, 556);
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
    source: "(22:2) {#if open}",
    ctx
  });
  return block;
}
function create_fragment$L(ctx) {
  let span1;
  let t0;
  let t1;
  let span0;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*open*/
    ctx[2] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      span1 = element("span");
      t0 = text(
        /*title*/
        ctx[1]
      );
      t1 = space();
      span0 = element("span");
      if (if_block)
        if_block.c();
      attr_dev(span0, "class", "input s-KRbMAwMhhDv-");
      add_location(span0, file$E, 20, 1, 482);
      attr_dev(span1, "class", "container s-KRbMAwMhhDv-");
      attr_dev(span1, "tabindex", "-1");
      set_style(
        span1,
        "--color",
        /*value*/
        ctx[0]
      );
      add_location(span1, file$E, 9, 0, 195);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span1, anchor);
      append_dev(span1, t0);
      append_dev(span1, t1);
      append_dev(span1, span0);
      if (if_block)
        if_block.m(span0, null);
      ctx[6](span1);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(span0, "click", self(
            /*click_handler*/
            ctx[5]
          ), false, false, false),
          listen_dev(span1, "click", self(
            /*click_handler_1*/
            ctx[7]
          ), false, false, false),
          listen_dev(span1, "keydown", self(
            /*keydown_handler*/
            ctx[8]
          ), false, false, false),
          listen_dev(
            span1,
            "blur",
            /*blur_handler*/
            ctx[9],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (!current || dirty & /*title*/
      2)
        set_data_dev(
          t0,
          /*title*/
          ctx2[1]
        );
      if (
        /*open*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(span0, null);
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
          span1,
          "--color",
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
        detach_dev(span1);
      if (if_block)
        if_block.d();
      ctx[6](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$L.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$L($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorInput", slots, []);
  let { value } = $$props;
  let { title } = $$props;
  let open = false;
  let element2;
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<ColorInput> was created without expected prop 'value'");
    }
    if (title === void 0 && !("title" in $$props || $$self.$$.bound[$$self.$$.props["title"]])) {
      console.warn("<ColorInput> was created without expected prop 'title'");
    }
  });
  const writable_props = ["value", "title"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ColorInput> was created with unknown prop '${key2}'`);
  });
  function colorpicker_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  const click_handler = () => $$invalidate(2, open = !open);
  function span1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  const click_handler_1 = () => $$invalidate(2, open = !open);
  const keydown_handler = (e) => e.key === "Escape" && $$invalidate(2, open = false);
  const blur_handler = () => $$invalidate(2, open = false);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
  };
  $$self.$capture_state = () => ({ ColorPicker, value, title, open, element: element2 });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("open" in $$props2)
      $$invalidate(2, open = $$props2.open);
    if ("element" in $$props2)
      $$invalidate(3, element2 = $$props2.element);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    1) {
      $$invalidate(0, value = value.startsWith("#") ? value : `#${value}`);
    }
  };
  return [
    value,
    title,
    open,
    element2,
    colorpicker_value_binding,
    click_handler,
    span1_binding,
    click_handler_1,
    keydown_handler,
    blur_handler
  ];
}
class ColorInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$L, create_fragment$L, safe_not_equal, { value: 0, title: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput",
      options,
      id: create_fragment$L.name
    });
  }
  get value() {
    throw new Error("<ColorInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<ColorInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<ColorInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<ColorInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$D = "src/stories/SVG/Close.story.svelte";
function create_default_slot$h(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M1 1L9 9M1 9L9 1");
      add_location(path, file$D, 12, 2, 452);
      attr_dev(svg, "viewBox", "0 0 10 10");
      attr_dev(svg, "stroke-width", "2");
      attr_dev(
        svg,
        "stroke",
        /*color*/
        ctx[1]
      );
      attr_dev(svg, "stroke-linecap", "round");
      add_location(svg, file$D, 11, 1, 369);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "stroke",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$h.name,
    type: "slot",
    source: '(11:0) <Hst.Story title=\\"SVGs/Close\\" icon=\\"ic:round-close\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$g(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$g.name,
    type: "slot",
    source: '(15:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$K(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Close",
      icon: "ic:round-close",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$g],
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$K.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$K($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Close_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke-width="2" stroke="currentcolor" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Close_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Close_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Close_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$K, create_fragment$K, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Close_story",
      options,
      id: create_fragment$K.name
    });
  }
  get Hst() {
    throw new Error("<Close_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Close_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$C = "src/stories/SVG/Command.story.svelte";
function create_default_slot$g(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z");
      add_location(path, file$C, 12, 2, 577);
      attr_dev(svg, "viewBox", "0 0 19 19");
      attr_dev(svg, "fill-rule", "evenodd");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$C, 11, 1, 516);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$g.name,
    type: "slot",
    source: '(11:0) <Hst.Story title=\\"SVGs/Command\\" icon=\\"ph:command\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$f(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$f.name,
    type: "slot",
    source: '(17:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$J(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Command",
      icon: "ph:command",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$f],
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$J.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$J($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Command_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill-rule="evenodd" fill="currentcolor">
	<path d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Command_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Command_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Command_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$J, create_fragment$J, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Command_story",
      options,
      id: create_fragment$J.name
    });
  }
  get Hst() {
    throw new Error("<Command_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Command_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$B = "src/stories/SVG/Dilk.story.svelte";
function create_default_slot$f(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z");
      add_location(path, file$B, 12, 2, 388);
      attr_dev(svg, "viewBox", "0 0 6 6");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$B, 11, 1, 349);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$f.name,
    type: "slot",
    source: '(11:0) <Hst.Story title=\\"SVGs/Dilk\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$e(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$e.name,
    type: "slot",
    source: '(15:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$I(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Dilk",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$e],
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$I.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$I($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Dilk_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" fill="currentcolor">
	<path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Dilk_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Dilk_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Dilk_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$I, create_fragment$I, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Dilk_story",
      options,
      id: create_fragment$I.name
    });
  }
  get Hst() {
    throw new Error("<Dilk_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Dilk_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$A = "src/stories/SVG/Download.story.svelte";
function create_default_slot$e(ctx) {
  let svg;
  let path0;
  let path1;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr_dev(path0, "d", "M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5");
      attr_dev(
        path0,
        "stroke",
        /*color*/
        ctx[1]
      );
      attr_dev(path0, "stroke-width", "8");
      add_location(path0, file$A, 17, 2, 536);
      attr_dev(path1, "d", "M48 89l-20-20h13v-27h14v27h13z");
      attr_dev(
        path1,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(path1, file$A, 22, 2, 663);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "none");
      add_location(svg, file$A, 16, 1, 494);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          path0,
          "stroke",
          /*color*/
          ctx2[1]
        );
      }
      if (dirty & /*color*/
      2) {
        attr_dev(
          path1,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$e.name,
    type: "slot",
    source: '(16:0) <Hst.Story title=\\"SVGs/Download\\" icon=\\"tabler:cloud-download\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$d(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$d.name,
    type: "slot",
    source: '(25:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$H(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Download",
      icon: "tabler:cloud-download",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$d],
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$H.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$H($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Download_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
	<path
		d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
		stroke="currentcolor"
		stroke-width="8"
	/>
	<path d="M48 89l-20-20h13v-27h14v27h13z" fill="currentcolor" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Download_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Download_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Download_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$H, create_fragment$H, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Download_story",
      options,
      id: create_fragment$H.name
    });
  }
  get Hst() {
    throw new Error("<Download_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Download_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Button_svelte_svelte_type_style_lang = "";
const file$z = "src/lib/Button.svelte";
function create_fragment$G(ctx) {
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
      add_location(button, file$z, 0, 0, 0);
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
    id: create_fragment$G.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$G($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button", slots, ["default"]);
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Button> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$G, create_fragment$G, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment$G.name
    });
  }
}
const file$y = "src/stories/SVG/Logo.story.svelte";
function create_default_slot_7$1(ctx) {
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
      add_location(rect, file$y, 138, 4, 8546);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$y, 139, 4, 8611);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$y, 137, 3, 8523);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$y, 142, 4, 8713);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$y, 141, 3, 8685);
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$y, 147, 3, 9582);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$y, 136, 2, 8479);
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
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      8) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7$1.name,
    type: "slot",
    source: '(136:1) <Hst.Variant title=\\"Default\\" icon=\\"mdi:cog\\" source={default_source}>',
    ctx
  });
  return block;
}
function create_controls_slot_4$1(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[9](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[3] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[3];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      8) {
        updating_value = true;
        colorinput_changes.value = /*color*/
        ctx2[3];
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_4$1.name,
    type: "slot",
    source: '(150:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_6$2(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z");
      add_location(path, file$y, 155, 3, 9897);
      attr_dev(svg, "viewBox", "0 0 256 256");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$y, 154, 2, 9853);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      8) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6$2.name,
    type: "slot",
    source: '(154:1) <Hst.Variant title=\\"Flat\\" icon=\\"mdi:cog\\" source={flat_source}>',
    ctx
  });
  return block;
}
function create_controls_slot_3$1(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding_1(value) {
    ctx[10](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[3] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[3];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding_1));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      8) {
        updating_value = true;
        colorinput_changes.value = /*color*/
        ctx2[3];
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_3$1.name,
    type: "slot",
    source: '(160:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_key_block_1(ctx) {
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
      t = text("#cog {\n						animation: cog 2s ease-out;\n						transform-origin: center;\n						transform-box: fill-box;\n					}\n\n					#cutout-path {\n						transform: translateX(-100%);\n						animation: cutout 1s 0.6s ease-out;\n						animation-fill-mode: forwards;\n					}\n\n					#m {\n						transform: scale(0);\n						animation: m 0.6s 1s ease-out;\n						animation-fill-mode: forwards;\n						transform-origin: center;\n						transform-box: fill-box;\n					}\n\n					@keyframes cog {\n						from {\n							transform: rotate(0deg);\n						}\n\n						to {\n							transform: rotate(180deg);\n						}\n					}\n\n					@keyframes cutout {\n						to {\n							transform: translateX(0%);\n						}\n					}\n\n					@keyframes m {\n						to {\n							transform: scale(1);\n						}\n					}\n				");
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      add_location(style, file$y, 166, 4, 10952);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$y, 210, 5, 11740);
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$y, 211, 5, 11805);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$y, 209, 4, 11716);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      attr_dev(
        path1,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(path1, file$y, 214, 5, 11915);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$y, 213, 4, 11886);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      attr_dev(
        path2,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(path2, file$y, 221, 4, 12823);
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$y, 165, 3, 10920);
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
      if (dirty & /*color*/
      8) {
        attr_dev(
          path1,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
      if (dirty & /*color*/
      8) {
        attr_dev(
          path2,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block_1.name,
    type: "key",
    source: "(165:2) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_5$2(ctx) {
  let previous_key = (
    /*key*/
    ctx[2]
  );
  let key_block_anchor;
  let key_block = create_key_block_1(ctx);
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
      4 && safe_not_equal(previous_key, previous_key = /*key*/
      ctx2[2])) {
        key_block.d(1);
        key_block = create_key_block_1(ctx2);
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
    id: create_default_slot_5$2.name,
    type: "slot",
    source: '(164:1) <Hst.Variant title=\\"Animated\\" icon=\\"mdi:cog\\" source={animated_source}>',
    ctx
  });
  return block;
}
function create_default_slot_4$3(ctx) {
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
    id: create_default_slot_4$3.name,
    type: "slot",
    source: "(230:3) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot_2$1(ctx) {
  let button;
  let t;
  let colorinput;
  let updating_value;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot_4$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[11]
  );
  function colorinput_value_binding_2(value) {
    ctx[12](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[3] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[3];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding_2));
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
      t = space();
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      8) {
        updating_value = true;
        colorinput_changes.value = /*color*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      colorinput.$set(colorinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(colorinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(colorinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_2$1.name,
    type: "slot",
    source: '(229:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_3$4(ctx) {
  let svg;
  let style;
  let t;
  let mask;
  let rect;
  let path0;
  let g;
  let path1;
  let path2;
  let style___speed = `${/*rotation_speed*/
  ctx[1]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("#cog {\n					animation: cog linear infinite;\n					animation-duration: var(--speed);\n					transform-origin: center;\n					transform-box: fill-box;\n				}\n\n				@keyframes cog {\n					from {\n						transform: rotate(0deg);\n					}\n					to {\n						transform: rotate(360deg);\n					}\n				}\n			");
      mask = svg_element("mask");
      rect = svg_element("rect");
      path0 = svg_element("path");
      g = svg_element("g");
      path1 = svg_element("path");
      path2 = svg_element("path");
      add_location(style, file$y, 235, 3, 13316);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$y, 253, 4, 13644);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$y, 254, 4, 13708);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$y, 252, 3, 13621);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$y, 257, 4, 13827);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$y, 256, 3, 13799);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$y, 263, 3, 14710);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$y, 234, 2, 13238);
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
      if (dirty & /*color*/
      8) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
      if (dirty & /*rotation_speed*/
      2 && style___speed !== (style___speed = `${/*rotation_speed*/
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
    id: create_default_slot_3$4.name,
    type: "slot",
    source: '(234:1) <Hst.Variant title=\\"Infinitely Animated\\" icon=\\"mdi:cog\\" source={infinitely_animated_source}>',
    ctx
  });
  return block;
}
function create_controls_slot_1$1(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let colorinput;
  let updating_value_1;
  let current;
  function hst_slider_value_binding(value) {
    ctx[13](value);
  }
  let hst_slider_props = { min: 1, max: 20, title: "Seconds per ⭮" };
  if (
    /*rotation_speed*/
    ctx[1] !== void 0
  ) {
    hst_slider_props.value = /*rotation_speed*/
    ctx[1];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  function colorinput_value_binding_3(value) {
    ctx[14](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[3] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[3];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding_3));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty & /*rotation_speed*/
      2) {
        updating_value = true;
        hst_slider_changes.value = /*rotation_speed*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const colorinput_changes = {};
      if (!updating_value_1 && dirty & /*color*/
      8) {
        updating_value_1 = true;
        colorinput_changes.value = /*color*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      colorinput.$set(colorinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(colorinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(colorinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_slider, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1$1.name,
    type: "slot",
    source: '(266:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_key_block$3(ctx) {
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
      t0 = text('#cog {\n						animation: cog 2s ease-out;\n						transform-origin: center;\n						transform-box: fill-box;\n					}\n					#cutout-path {\n						transform: translateX(-100%);\n						animation: cutout 1s 0.6s ease-out;\n						animation-fill-mode: forwards;\n					}\n					#m {\n						transform: scale(0);\n						animation: m 0.6s 1s ease-out;\n						animation-fill-mode: forwards;\n						transform-origin: center;\n						transform-box: fill-box;\n					}\n					.text {\n						text-anchor: middle;\n						font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI",\n							system-ui, "Ubuntu", "Droid Sans", sans-serif;\n						font-weight: 600;\n						transform: translateY(10%);\n						opacity: 0;\n					}\n					.name {\n						font-size: 1em;\n						animation: name 0.6s 0.8s ease-out;\n						animation-fill-mode: forwards;\n					}\n					.surname {\n						font-size: 1.5em;\n						animation: name 0.6s 1.4s ease-out;\n						animation-fill-mode: forwards;\n					}\n					@keyframes cog {\n						from {\n							transform: rotate(0deg);\n						}\n						to {\n							transform: rotate(180deg);\n						}\n					}\n					@keyframes cutout {\n						to {\n							transform: translateX(0%);\n						}\n					}\n					@keyframes m {\n						to {\n							transform: scale(1);\n						}\n					}\n					@keyframes name {\n						to {\n							transform: translateY(0%);\n							opacity: 1;\n						}\n					}\n				');
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
      add_location(style, file$y, 273, 4, 15172);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "white");
      add_location(rect, file$y, 335, 5, 16559);
      attr_dev(path0, "fill", "black");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$y, 336, 5, 16625);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$y, 334, 4, 16535);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$y, 339, 5, 16748);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$y, 338, 4, 16719);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$y, 345, 4, 17637);
      attr_dev(text0, "textLength", "46");
      attr_dev(text0, "x", "50");
      attr_dev(text0, "y", "120");
      attr_dev(text0, "class", "name text");
      add_location(text0, file$y, 346, 4, 17720);
      attr_dev(text1, "textLength", "74");
      attr_dev(text1, "x", "50");
      attr_dev(text1, "y", "145");
      attr_dev(text1, "class", "surname text");
      add_location(text1, file$y, 347, 4, 17792);
      attr_dev(svg, "width", "65%");
      attr_dev(svg, "viewBox", "0 0 100 150");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$y, 272, 3, 15115);
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
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      8) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[3]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$3.name,
    type: "key",
    source: "(272:2) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_2$6(ctx) {
  let previous_key = (
    /*key*/
    ctx[2]
  );
  let key_block_anchor;
  let key_block = create_key_block$3(ctx);
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
      4 && safe_not_equal(previous_key, previous_key = /*key*/
      ctx2[2])) {
        key_block.d(1);
        key_block = create_key_block$3(ctx2);
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
    id: create_default_slot_2$6.name,
    type: "slot",
    source: '(271:1) <Hst.Variant title=\\"Animated With Name\\" icon=\\"mdi:cog\\" source={animated_with_name_source}>',
    ctx
  });
  return block;
}
function create_default_slot_1$6(ctx) {
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
    id: create_default_slot_1$6.name,
    type: "slot",
    source: "(352:3) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot$c(ctx) {
  let button;
  let t;
  let colorinput;
  let updating_value;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot_1$6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_1*/
    ctx[15]
  );
  function colorinput_value_binding_4(value) {
    ctx[16](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[3] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[3];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding_4));
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
      t = space();
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      8) {
        updating_value = true;
        colorinput_changes.value = /*color*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      colorinput.$set(colorinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(colorinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(colorinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$c.name,
    type: "slot",
    source: '(351:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot$d(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let t2;
  let hst_variant3;
  let t3;
  let hst_variant4;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Default",
      icon: "mdi:cog",
      source: (
        /*default_source*/
        ctx[4]
      ),
      $$slots: {
        controls: [create_controls_slot_4$1],
        default: [create_default_slot_7$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Flat",
      icon: "mdi:cog",
      source: (
        /*flat_source*/
        ctx[5]
      ),
      $$slots: {
        controls: [create_controls_slot_3$1],
        default: [create_default_slot_6$2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Animated",
      icon: "mdi:cog",
      source: (
        /*animated_source*/
        ctx[6]
      ),
      $$slots: {
        controls: [create_controls_slot_2$1],
        default: [create_default_slot_5$2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Infinitely Animated",
      icon: "mdi:cog",
      source: (
        /*infinitely_animated_source*/
        ctx[7]
      ),
      $$slots: {
        controls: [create_controls_slot_1$1],
        default: [create_default_slot_3$4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Animated With Name",
      icon: "mdi:cog",
      source: (
        /*animated_with_name_source*/
        ctx[8]
      ),
      $$slots: {
        controls: [create_controls_slot$c],
        default: [create_default_slot_2$6]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
      t2 = space();
      create_component(hst_variant3.$$.fragment);
      t3 = space();
      create_component(hst_variant4.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_variant3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(hst_variant4, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, color*/
      131080) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, color*/
      131080) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & /*$$scope, color, key*/
      131084) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty & /*$$scope, color, rotation_speed*/
      131082) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty & /*$$scope, color, key*/
      131084) {
        hst_variant4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant4.$set(hst_variant4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      transition_in(hst_variant3.$$.fragment, local);
      transition_in(hst_variant4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      transition_out(hst_variant3.$$.fragment, local);
      transition_out(hst_variant4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_variant3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(hst_variant4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$d.name,
    type: "slot",
    source: '(135:0) <Hst.Story title=\\"Logo\\" icon=\\"mdi:cog\\">',
    ctx
  });
  return block;
}
function create_fragment$F(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo",
      icon: "mdi:cog",
      $$slots: { default: [create_default_slot$d] },
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
      if (dirty & /*$$scope, color, key, rotation_speed*/
      131086) {
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
    id: create_fragment$F.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$F($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Logo_story", slots, []);
  let { Hst } = $$props;
  let rotation_speed = 8;
  let key2 = true;
  let color = "#000";
  const default_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<mask id="cutout" fill="currentcolor">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<path fill="#000" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
	</mask>
	<g mask="url(#cutout)">
		<path fill-rule="evenodd" d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z" />
	</g>
	<path d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>`;
  const flat_source = `
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
</svg>`;
  const animated_source = `
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
</svg>`;
  const infinitely_animated_source = `
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
</svg>`;
  const animated_with_name_source = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" fill="currentcolor">
	<style>
		#cog { animation: cog 2s ease-out; transform-origin: center; transform-box: fill-box; }
		#cutout-path { transform: translateX(-100%); animation: cutout 1s 0.6s ease-out; animation-fill-mode: forwards; }
		#m { transform: scale(0); animation: m 0.6s 1s ease-out; animation-fill-mode: forwards; transform-origin: center; transform-box: fill-box; }
		.text { text-anchor: middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif; font-weight: 600; transform: translateY(10%); opacity: 0; }
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
</svg>`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Logo_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key3) => {
    if (!~writable_props.indexOf(key3) && key3.slice(0, 2) !== "$$" && key3 !== "slot")
      console.warn(`<Logo_story> was created with unknown prop '${key3}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(3, color);
  }
  function colorinput_value_binding_1(value) {
    color = value;
    $$invalidate(3, color);
  }
  const click_handler = () => $$invalidate(2, key2 = !key2);
  function colorinput_value_binding_2(value) {
    color = value;
    $$invalidate(3, color);
  }
  function hst_slider_value_binding(value) {
    rotation_speed = value;
    $$invalidate(1, rotation_speed);
  }
  function colorinput_value_binding_3(value) {
    color = value;
    $$invalidate(3, color);
  }
  const click_handler_1 = () => $$invalidate(2, key2 = !key2);
  function colorinput_value_binding_4(value) {
    color = value;
    $$invalidate(3, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    ColorInput,
    Button,
    Hst,
    rotation_speed,
    key: key2,
    color,
    default_source,
    flat_source,
    animated_source,
    infinitely_animated_source,
    animated_with_name_source
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("rotation_speed" in $$props2)
      $$invalidate(1, rotation_speed = $$props2.rotation_speed);
    if ("key" in $$props2)
      $$invalidate(2, key2 = $$props2.key);
    if ("color" in $$props2)
      $$invalidate(3, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    rotation_speed,
    key2,
    color,
    default_source,
    flat_source,
    animated_source,
    infinitely_animated_source,
    animated_with_name_source,
    colorinput_value_binding,
    colorinput_value_binding_1,
    click_handler,
    colorinput_value_binding_2,
    hst_slider_value_binding,
    colorinput_value_binding_3,
    click_handler_1,
    colorinput_value_binding_4
  ];
}
class Logo_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$F, create_fragment$F, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Logo_story",
      options,
      id: create_fragment$F.name
    });
  }
  get Hst() {
    throw new Error("<Logo_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Logo_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$x = "src/stories/SVG/Maximize.story.svelte";
function create_default_slot$c(ctx) {
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
      t = text("path {\n				transition: transform 0.25s ease-in-out;\n			}\n\n			svg:hover .tl {\n				transform: translate(-10px, -10px);\n			}\n\n			svg:hover .tr {\n				transform: translate(10px, -10px);\n			}\n\n			svg:hover .bl {\n				transform: translate(-10px, 10px);\n			}\n\n			svg:hover .br {\n				transform: translate(10px, 10px);\n			}\n		");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      add_location(style, file$x, 24, 2, 839);
      attr_dev(path0, "class", "tl");
      attr_dev(path0, "d", "M10,10h30v10h-20v20h-10z");
      add_location(path0, file$x, 45, 2, 1176);
      attr_dev(path1, "class", "tr");
      attr_dev(path1, "d", "M60,10 h30v30h-10v-20h-20z");
      add_location(path1, file$x, 46, 2, 1227);
      attr_dev(path2, "class", "bl");
      attr_dev(path2, "d", "M10,60v30h30v-10h-20v-20z");
      add_location(path2, file$x, 47, 2, 1280);
      attr_dev(path3, "class", "br");
      attr_dev(path3, "d", "M80,60h10v30h-30v-10h20z");
      add_location(path3, file$x, 48, 2, 1332);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$x, 23, 1, 796);
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
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$c.name,
    type: "slot",
    source: '(23:0) <Hst.Story title=\\"SVGs/Maximize\\" icon=\\"tabler:maximize\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$b(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$b.name,
    type: "slot",
    source: '(51:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$E(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Maximize",
      icon: "tabler:maximize",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$b],
        default: [create_default_slot$c]
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$E.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$E($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Maximize_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentcolor">
	<style>
		path {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Maximize_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Maximize_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$E, create_fragment$E, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Maximize_story",
      options,
      id: create_fragment$E.name
    });
  }
  get Hst() {
    throw new Error("<Maximize_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Maximize_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$w = "src/stories/SVG/Peacediscipline.story.svelte";
function create_default_slot$b(ctx) {
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
      add_location(circle0, file$w, 44, 2, 1562);
      attr_dev(circle1, "r", "46");
      attr_dev(circle1, "cx", "684");
      attr_dev(circle1, "cy", "349");
      add_location(circle1, file$w, 45, 2, 1601);
      attr_dev(circle2, "r", "32");
      attr_dev(circle2, "cx", "676");
      attr_dev(circle2, "cy", "260");
      add_location(circle2, file$w, 46, 2, 1639);
      attr_dev(circle3, "r", "64");
      attr_dev(circle3, "cx", "577");
      attr_dev(circle3, "cy", "223");
      add_location(circle3, file$w, 47, 2, 1677);
      attr_dev(circle4, "r", "32");
      attr_dev(circle4, "cx", "492");
      attr_dev(circle4, "cy", "288");
      add_location(circle4, file$w, 48, 2, 1715);
      attr_dev(circle5, "r", "38");
      attr_dev(circle5, "cx", "483");
      attr_dev(circle5, "cy", "155");
      add_location(circle5, file$w, 49, 2, 1753);
      attr_dev(circle6, "r", "79");
      attr_dev(circle6, "cx", "372");
      attr_dev(circle6, "cy", "219");
      add_location(circle6, file$w, 50, 2, 1791);
      attr_dev(circle7, "r", "38");
      attr_dev(circle7, "cx", "325");
      attr_dev(circle7, "cy", "337");
      add_location(circle7, file$w, 51, 2, 1829);
      attr_dev(circle8, "r", "46");
      attr_dev(circle8, "cx", "378");
      attr_dev(circle8, "cy", "417");
      add_location(circle8, file$w, 52, 2, 1867);
      attr_dev(circle9, "r", "14");
      attr_dev(circle9, "cx", "338");
      attr_dev(circle9, "cy", "503");
      add_location(circle9, file$w, 53, 2, 1905);
      attr_dev(circle10, "r", "34");
      attr_dev(circle10, "cx", "262");
      attr_dev(circle10, "cy", "491");
      add_location(circle10, file$w, 54, 2, 1943);
      attr_dev(circle11, "r", "14");
      attr_dev(circle11, "cx", "213");
      attr_dev(circle11, "cy", "439");
      add_location(circle11, file$w, 55, 2, 1981);
      attr_dev(circle12, "r", "23");
      attr_dev(circle12, "cx", "164");
      attr_dev(circle12, "cy", "472");
      add_location(circle12, file$w, 56, 2, 2019);
      attr_dev(circle13, "r", "34");
      attr_dev(circle13, "cx", "109");
      attr_dev(circle13, "cy", "412");
      add_location(circle13, file$w, 57, 2, 2057);
      attr_dev(circle14, "r", "14");
      attr_dev(circle14, "cx", "170");
      attr_dev(circle14, "cy", "386");
      add_location(circle14, file$w, 58, 2, 2095);
      attr_dev(circle15, "r", "23");
      attr_dev(circle15, "cx", "197");
      attr_dev(circle15, "cy", "334");
      add_location(circle15, file$w, 59, 2, 2133);
      attr_dev(circle16, "r", "14");
      attr_dev(circle16, "cx", "150");
      attr_dev(circle16, "cy", "313");
      add_location(circle16, file$w, 60, 2, 2171);
      attr_dev(circle17, "r", "14");
      attr_dev(circle17, "cx", "97");
      attr_dev(circle17, "cy", "317");
      add_location(circle17, file$w, 61, 2, 2209);
      attr_dev(circle18, "r", "34");
      attr_dev(circle18, "cx", "34");
      attr_dev(circle18, "cy", "303");
      add_location(circle18, file$w, 62, 2, 2246);
      attr_dev(circle19, "r", "14");
      attr_dev(circle19, "cx", "62");
      attr_dev(circle19, "cy", "252");
      add_location(circle19, file$w, 63, 2, 2283);
      attr_dev(circle20, "r", "14");
      attr_dev(circle20, "cx", "203");
      attr_dev(circle20, "cy", "259");
      add_location(circle20, file$w, 64, 2, 2320);
      attr_dev(circle21, "r", "14");
      attr_dev(circle21, "cx", "139");
      attr_dev(circle21, "cy", "248");
      add_location(circle21, file$w, 65, 2, 2358);
      attr_dev(circle22, "r", "14");
      attr_dev(circle22, "cx", "185");
      attr_dev(circle22, "cy", "212");
      add_location(circle22, file$w, 66, 2, 2396);
      attr_dev(circle23, "r", "34");
      attr_dev(circle23, "cx", "93");
      attr_dev(circle23, "cy", "156");
      add_location(circle23, file$w, 67, 2, 2434);
      attr_dev(circle24, "r", "14");
      attr_dev(circle24, "cx", "155");
      attr_dev(circle24, "cy", "162");
      add_location(circle24, file$w, 68, 2, 2471);
      attr_dev(circle25, "r", "14");
      attr_dev(circle25, "cx", "222");
      attr_dev(circle25, "cy", "148");
      add_location(circle25, file$w, 69, 2, 2509);
      attr_dev(circle26, "r", "14");
      attr_dev(circle26, "cx", "182");
      attr_dev(circle26, "cy", "103");
      add_location(circle26, file$w, 70, 2, 2547);
      attr_dev(circle27, "r", "14");
      attr_dev(circle27, "cx", "248");
      attr_dev(circle27, "cy", "98");
      add_location(circle27, file$w, 71, 2, 2585);
      attr_dev(circle28, "r", "34");
      attr_dev(circle28, "cx", "304");
      attr_dev(circle28, "cy", "66");
      add_location(circle28, file$w, 72, 2, 2622);
      attr_dev(circle29, "r", "14");
      attr_dev(circle29, "cx", "359");
      attr_dev(circle29, "cy", "33");
      add_location(circle29, file$w, 73, 2, 2659);
      attr_dev(circle30, "r", "14");
      attr_dev(circle30, "cx", "405");
      attr_dev(circle30, "cy", "53");
      add_location(circle30, file$w, 74, 2, 2696);
      attr_dev(circle31, "r", "34");
      attr_dev(circle31, "cx", "463");
      attr_dev(circle31, "cy", "34");
      add_location(circle31, file$w, 75, 2, 2733);
      attr_dev(circle32, "r", "14");
      attr_dev(circle32, "cx", "515");
      attr_dev(circle32, "cy", "68");
      add_location(circle32, file$w, 76, 2, 2770);
      attr_dev(svg, "viewBox", "0 0 732 571");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$w, 43, 1, 1519);
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
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$b.name,
    type: "slot",
    source: '(43:0) <Hst.Story title=\\"SVGs/Peace Discipline\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$a(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$a.name,
    type: "slot",
    source: '(79:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$D(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Peace Discipline",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$a],
        default: [create_default_slot$b]
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$D.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$D($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Peacediscipline_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg viewBox="0 0 732 571" xmlns="http://www.w3.org/2000/svg" fill="currentcolor">
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Peacediscipline_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Peacediscipline_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$D, create_fragment$D, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Peacediscipline_story",
      options,
      id: create_fragment$D.name
    });
  }
  get Hst() {
    throw new Error("<Peacediscipline_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Peacediscipline_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$v = "src/stories/SVG/Warning.story.svelte";
function create_default_slot$a(ctx) {
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
      add_location(path0, file$v, 14, 2, 596);
      attr_dev(path1, "d", "M10 8v5");
      attr_dev(path1, "stroke-width", "2");
      attr_dev(path1, "stroke-linecap", "round");
      add_location(path1, file$v, 15, 2, 670);
      attr_dev(circle, "cx", "10");
      attr_dev(circle, "cy", "16");
      attr_dev(circle, "r", "1");
      attr_dev(
        circle,
        "fill",
        /*color*/
        ctx[1]
      );
      attr_dev(circle, "stroke", "none");
      add_location(circle, file$v, 16, 2, 733);
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(
        svg,
        "stroke",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$v, 13, 1, 541);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, circle);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*color*/
      2) {
        attr_dev(
          circle,
          "fill",
          /*color*/
          ctx2[1]
        );
      }
      if (dirty & /*color*/
      2) {
        attr_dev(
          svg,
          "stroke",
          /*color*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$a.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"SVGs/Warning\\" icon=\\"material-symbols:warning-outline-rounded\\" {source}>',
    ctx
  });
  return block;
}
function create_controls_slot$9(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[3](value);
  }
  let colorinput_props = { title: "Color" };
  if (
    /*color*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*color*/
    ctx[1];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  const block = {
    c: function create() {
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const colorinput_changes = {};
      if (!updating_value && dirty & /*color*/
      2) {
        updating_value = true;
        colorinput_changes.value = /*color*/
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$9.name,
    type: "slot",
    source: '(19:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$C(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "SVGs/Warning",
      icon: "material-symbols:warning-outline-rounded",
      source: (
        /*source*/
        ctx[2]
      ),
      $$slots: {
        controls: [create_controls_slot$9],
        default: [create_default_slot$a]
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
      if (dirty & /*$$scope, color*/
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
    id: create_fragment$C.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$C($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Warning_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
  let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentcolor">
	<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
	<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
	<circle cx="10" cy="16" r="1" fill="currentcolor" stroke="none" />
</svg>
	`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Warning_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Warning_story> was created with unknown prop '${key2}'`);
  });
  function colorinput_value_binding(value) {
    color = value;
    $$invalidate(1, color);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, color, source });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
    if ("source" in $$props2)
      $$invalidate(2, source = $$props2.source);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, source, colorinput_value_binding];
}
class Warning_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$C, create_fragment$C, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Warning_story",
      options,
      id: create_fragment$C.name
    });
  }
  get Hst() {
    throw new Error("<Warning_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Warning_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Circle_svelte_svelte_type_style_lang = "";
const file$u = "src/components/Burger Menus/Circle.svelte";
function create_fragment$B(ctx) {
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
      add_location(path, file$u, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-dHyQ544AJ32J");
      add_location(svg, file$u, 3, 0, 54);
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
    id: create_fragment$B.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$B($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Circle> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$B, create_fragment$B, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle",
      options,
      id: create_fragment$B.name
    });
  }
  get open() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Cross_svelte_svelte_type_style_lang = "";
const file$t = "src/components/Burger Menus/Cross.svelte";
function create_fragment$A(ctx) {
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
      add_location(path, file$t, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-PFeurwlplmMu");
      add_location(svg, file$t, 3, 0, 54);
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
    id: create_fragment$A.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$A($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cross", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Cross> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$A, create_fragment$A, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cross",
      options,
      id: create_fragment$A.name
    });
  }
  get open() {
    throw new Error("<Cross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Cross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const FoldIn_svelte_svelte_type_style_lang = "";
const file$s = "src/components/Burger Menus/FoldIn.svelte";
function create_fragment$z(ctx) {
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
      add_location(path, file$s, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-d96fjWfdBsq4");
      add_location(svg, file$s, 3, 0, 54);
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
    id: create_fragment$z.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$z($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FoldIn", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<FoldIn> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$z, create_fragment$z, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FoldIn",
      options,
      id: create_fragment$z.name
    });
  }
  get open() {
    throw new Error("<FoldIn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<FoldIn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Merge_svelte_svelte_type_style_lang = "";
const file$r = "src/components/Burger Menus/Merge.svelte";
function create_fragment$y(ctx) {
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
      add_location(path, file$r, 9, 1, 169);
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-jveDL8I0KC7Q");
      add_location(svg, file$r, 3, 0, 54);
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
    id: create_fragment$y.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$y($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Merge", slots, []);
  let { open = false } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Merge> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$y, create_fragment$y, safe_not_equal, { open: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Merge",
      options,
      id: create_fragment$y.name
    });
  }
  get open() {
    throw new Error("<Merge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Merge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_4$2(ctx) {
  let circle;
  let updating_open;
  let current;
  function circle_open_binding(value) {
    ctx[3](value);
  }
  let circle_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    circle_props.open = /*open*/
    ctx[1];
  }
  circle = new Circle({ props: circle_props, $$inline: true });
  binding_callbacks.push(() => bind(circle, "open", circle_open_binding));
  const block = {
    c: function create() {
      create_component(circle.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(circle, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const circle_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        circle_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      circle.$set(circle_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(circle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(circle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(circle, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$2.name,
    type: "slot",
    source: '(10:1) <Hst.Variant title=\\"Circle\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_default_slot_3$3(ctx) {
  let cross;
  let updating_open;
  let current;
  function cross_open_binding(value) {
    ctx[4](value);
  }
  let cross_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    cross_props.open = /*open*/
    ctx[1];
  }
  cross = new Cross({ props: cross_props, $$inline: true });
  binding_callbacks.push(() => bind(cross, "open", cross_open_binding));
  const block = {
    c: function create() {
      create_component(cross.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(cross, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const cross_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        cross_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      cross.$set(cross_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(cross.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cross.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cross, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$3.name,
    type: "slot",
    source: '(13:1) <Hst.Variant title=\\"Cross\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$5(ctx) {
  let foldin;
  let updating_open;
  let current;
  function foldin_open_binding(value) {
    ctx[5](value);
  }
  let foldin_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    foldin_props.open = /*open*/
    ctx[1];
  }
  foldin = new FoldIn({ props: foldin_props, $$inline: true });
  binding_callbacks.push(() => bind(foldin, "open", foldin_open_binding));
  const block = {
    c: function create() {
      create_component(foldin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(foldin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const foldin_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        foldin_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      foldin.$set(foldin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(foldin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(foldin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(foldin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$5.name,
    type: "slot",
    source: '(16:1) <Hst.Variant title=\\"Fold In\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$5(ctx) {
  let merge;
  let updating_open;
  let current;
  function merge_open_binding(value) {
    ctx[6](value);
  }
  let merge_props = {};
  if (
    /*open*/
    ctx[1] !== void 0
  ) {
    merge_props.open = /*open*/
    ctx[1];
  }
  merge = new Merge({ props: merge_props, $$inline: true });
  binding_callbacks.push(() => bind(merge, "open", merge_open_binding));
  const block = {
    c: function create() {
      create_component(merge.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(merge, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const merge_changes = {};
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        merge_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      merge.$set(merge_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(merge.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(merge.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(merge, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$5.name,
    type: "slot",
    source: '(19:1) <Hst.Variant title=\\"Merge\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_default_slot$9(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let t2;
  let hst_variant3;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Circle",
      icon: "material-symbols:menu",
      $$slots: { default: [create_default_slot_4$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Cross",
      icon: "material-symbols:menu",
      $$slots: { default: [create_default_slot_3$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Fold In",
      icon: "material-symbols:menu",
      $$slots: { default: [create_default_slot_2$5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Merge",
      icon: "material-symbols:menu",
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
      t2 = space();
      create_component(hst_variant3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_variant3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, open*/
      130) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, open*/
      130) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & /*$$scope, open*/
      130) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty & /*$$scope, open*/
      130) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      transition_in(hst_variant3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      transition_out(hst_variant3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_variant3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$9.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"Components/Burger Menus\\" icon=\\"material-symbols:menu\\" layout={{ type: \\"grid\\" }}>',
    ctx
  });
  return block;
}
function create_controls_slot$8(ctx) {
  let hst_checkbox;
  let updating_value;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[2](value);
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
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
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
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$8.name,
    type: "slot",
    source: '(23:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$x(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Burger Menus",
      icon: "material-symbols:menu",
      layout: { type: "grid" },
      $$slots: {
        controls: [create_controls_slot$8],
        default: [create_default_slot$9]
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
      if (dirty & /*$$scope, open*/
      130) {
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
    id: create_fragment$x.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$x($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BurgerMenus_story", slots, []);
  let { Hst } = $$props;
  let open = false;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<BurgerMenus_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BurgerMenus_story> was created with unknown prop '${key2}'`);
  });
  function hst_checkbox_value_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function circle_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function cross_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function foldin_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function merge_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Circle, Cross, FoldIn, Merge, Hst, open });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    open,
    hst_checkbox_value_binding,
    circle_open_binding,
    cross_open_binding,
    foldin_open_binding,
    merge_open_binding
  ];
}
class BurgerMenus_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$x, create_fragment$x, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BurgerMenus_story",
      options,
      id: create_fragment$x.name
    });
  }
  get Hst() {
    throw new Error("<BurgerMenus_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BurgerMenus_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ColorInput_story_svelte_svelte_type_style_lang = "";
const file$q = "src/stories/components/ColorInput.story.svelte";
function create_default_slot$8(ctx) {
  let div;
  let colorinput;
  let updating_value;
  let updating_title;
  let current;
  function colorinput_value_binding(value) {
    ctx[5](value);
  }
  function colorinput_title_binding(value) {
    ctx[6](value);
  }
  let colorinput_props = {};
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    colorinput_props.value = /*value*/
    ctx[1];
  }
  if (
    /*title*/
    ctx[2] !== void 0
  ) {
    colorinput_props.title = /*title*/
    ctx[2];
  }
  colorinput = new ColorInput({ props: colorinput_props, $$inline: true });
  binding_callbacks.push(() => bind(colorinput, "value", colorinput_value_binding));
  binding_callbacks.push(() => bind(colorinput, "title", colorinput_title_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(colorinput.$$.fragment);
      attr_dev(div, "class", "s-CfqT4eGixNkN");
      add_location(div, file$q, 7, 1, 221);
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
      if (!updating_title && dirty & /*title*/
      4) {
        updating_title = true;
        colorinput_changes.title = /*title*/
        ctx2[2];
        add_flush_callback(() => updating_title = false);
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
    id: create_default_slot$8.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Color Input\\" icon=\\"typcn:input-checked\\">',
    ctx
  });
  return block;
}
function create_controls_slot$7(ctx) {
  let hst_text0;
  let updating_value;
  let t;
  let hst_text1;
  let updating_value_1;
  let current;
  function hst_text0_value_binding(value) {
    ctx[3](value);
  }
  let hst_text0_props = { title: "Value" };
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    hst_text0_props.value = /*value*/
    ctx[1];
  }
  hst_text0 = new /*Hst*/
  ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[4](value);
  }
  let hst_text1_props = { title: "Title" };
  if (
    /*title*/
    ctx[2] !== void 0
  ) {
    hst_text1_props.value = /*title*/
    ctx[2];
  }
  hst_text1 = new /*Hst*/
  ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t = space();
      create_component(hst_text1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_text1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        hst_text0_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & /*title*/
      4) {
        updating_value_1 = true;
        hst_text1_changes.value = /*title*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_text1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$7.name,
    type: "slot",
    source: '(11:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$w(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Color Input",
      icon: "typcn:input-checked",
      $$slots: {
        controls: [create_controls_slot$7],
        default: [create_default_slot$8]
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
      if (dirty & /*$$scope, title, value*/
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
    id: create_fragment$w.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$w($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorInput_story", slots, []);
  let { Hst } = $$props;
  let value = "#22D3EE";
  let title = "Color";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ColorInput_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ColorInput_story> was created with unknown prop '${key2}'`);
  });
  function hst_text0_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function hst_text1_value_binding(value2) {
    title = value2;
    $$invalidate(2, title);
  }
  function colorinput_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function colorinput_title_binding(value2) {
    title = value2;
    $$invalidate(2, title);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorInput, Hst, value, title });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    value,
    title,
    hst_text0_value_binding,
    hst_text1_value_binding,
    colorinput_value_binding,
    colorinput_title_binding
  ];
}
class ColorInput_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput_story",
      options,
      id: create_fragment$w.name
    });
  }
  get Hst() {
    throw new Error("<ColorInput_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorInput_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$7(ctx) {
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
    id: create_default_slot$7.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Color Picker\\" icon=\\"ph:eyedropper-fill\\">',
    ctx
  });
  return block;
}
function create_controls_slot$6(ctx) {
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
    id: create_controls_slot$6.name,
    type: "slot",
    source: '(9:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$v(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Color Picker",
      icon: "ph:eyedropper-fill",
      $$slots: {
        controls: [create_controls_slot$6],
        default: [create_default_slot$7]
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
    id: create_fragment$v.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$v($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ColorPicker_story> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker_story",
      options,
      id: create_fragment$v.name
    });
  }
  get Hst() {
    throw new Error("<ColorPicker_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorPicker_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const GoogleInput_svelte_svelte_type_style_lang = "";
const file$p = "src/components/Inputs/GoogleInput.svelte";
function create_fragment$u(ctx) {
  let span;
  let input;
  let input_pattern_value;
  let t0;
  let label_1;
  let t1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = element("span");
      input = element("input");
      t0 = space();
      label_1 = element("label");
      t1 = text(
        /*label*/
        ctx[1]
      );
      attr_dev(input, "type", "text");
      attr_dev(
        input,
        "id",
        /*id*/
        ctx[5]
      );
      input.value = /*value*/
      ctx[0];
      attr_dev(
        input,
        "autocomplete",
        /*autocomplete*/
        ctx[2]
      );
      attr_dev(input, "pattern", input_pattern_value = /*pattern*/
      ctx[3].source);
      attr_dev(input, "class", "s-vuJjdyYTZXMg");
      add_location(input, file$p, 31, 1, 928);
      attr_dev(
        label_1,
        "for",
        /*id*/
        ctx[5]
      );
      attr_dev(label_1, "class", "s-vuJjdyYTZXMg");
      add_location(label_1, file$p, 41, 1, 1076);
      attr_dev(span, "class", "s-vuJjdyYTZXMg");
      toggle_class(
        span,
        "contents",
        /*value*/
        ctx[0].length > 0
      );
      toggle_class(span, "invalid", !/*valid*/
      ctx[4](
        /*value*/
        ctx[0]
      ) && /*value*/
      ctx[0].length > 0);
      add_location(span, file$p, 30, 0, 836);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, input);
      append_dev(span, t0);
      append_dev(span, label_1);
      append_dev(label_1, t1);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "focus",
            /*onFocus*/
            ctx[7],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*onBlur*/
            ctx[8],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "input",
            /*onInput*/
            ctx[6],
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
      if (dirty & /*autocomplete*/
      4) {
        attr_dev(
          input,
          "autocomplete",
          /*autocomplete*/
          ctx2[2]
        );
      }
      if (dirty & /*pattern*/
      8 && input_pattern_value !== (input_pattern_value = /*pattern*/
      ctx2[3].source)) {
        attr_dev(input, "pattern", input_pattern_value);
      }
      if (dirty & /*label*/
      2)
        set_data_dev(
          t1,
          /*label*/
          ctx2[1]
        );
      if (dirty & /*value*/
      1) {
        toggle_class(
          span,
          "contents",
          /*value*/
          ctx2[0].length > 0
        );
      }
      if (dirty & /*valid, value*/
      17) {
        toggle_class(span, "invalid", !/*valid*/
        ctx2[4](
          /*value*/
          ctx2[0]
        ) && /*value*/
        ctx2[0].length > 0);
      }
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
    id: create_fragment$u.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
let ids$1 = 0;
let base_id$1 = Date.now();
function UID$1() {
  return "input-" + (++ids$1 + base_id$1).toString(32);
}
function instance$u($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("GoogleInput", slots, []);
  let { value } = $$props;
  let { label } = $$props;
  let { max_length = Infinity } = $$props;
  let { autocomplete = "off" } = $$props;
  let { pattern = /.*/ } = $$props;
  let { valid = () => true } = $$props;
  const id = UID$1();
  const dispatch = createEventDispatcher();
  function onInput(e) {
    if (pattern.test(e.currentTarget.value.toLowerCase()) || e.inputType.startsWith("delete")) {
      $$invalidate(0, value = e.currentTarget.value.slice(0, max_length));
    }
    e.currentTarget.value = value;
  }
  function onFocus() {
    dispatch("focus", label.replaceAll(" ", "-").toLowerCase());
  }
  function onBlur() {
    dispatch("blur", label.replaceAll(" ", "-").toLowerCase());
  }
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<GoogleInput> was created without expected prop 'value'");
    }
    if (label === void 0 && !("label" in $$props || $$self.$$.bound[$$self.$$.props["label"]])) {
      console.warn("<GoogleInput> was created without expected prop 'label'");
    }
  });
  const writable_props = ["value", "label", "max_length", "autocomplete", "pattern", "valid"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<GoogleInput> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("max_length" in $$props2)
      $$invalidate(9, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(2, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(3, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(4, valid = $$props2.valid);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    ids: ids$1,
    base_id: base_id$1,
    UID: UID$1,
    value,
    label,
    max_length,
    autocomplete,
    pattern,
    valid,
    id,
    dispatch,
    onInput,
    onFocus,
    onBlur
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("max_length" in $$props2)
      $$invalidate(9, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(2, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(3, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(4, valid = $$props2.valid);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    value,
    label,
    autocomplete,
    pattern,
    valid,
    id,
    onInput,
    onFocus,
    onBlur,
    max_length
  ];
}
class GoogleInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$u, create_fragment$u, safe_not_equal, {
      value: 0,
      label: 1,
      max_length: 9,
      autocomplete: 2,
      pattern: 3,
      valid: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "GoogleInput",
      options,
      id: create_fragment$u.name
    });
  }
  get value() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max_length() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max_length(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autocomplete() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autocomplete(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pattern() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pattern(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get valid() {
    throw new Error("<GoogleInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set valid(value) {
    throw new Error("<GoogleInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const LastPassInput_svelte_svelte_type_style_lang = "";
const file$o = "src/components/Inputs/LastPassInput.svelte";
function create_fragment$t(ctx) {
  let span;
  let input;
  let input_pattern_value;
  let t0;
  let label_1;
  let t1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = element("span");
      input = element("input");
      t0 = space();
      label_1 = element("label");
      t1 = text(
        /*label*/
        ctx[1]
      );
      attr_dev(input, "type", "text");
      attr_dev(
        input,
        "id",
        /*id*/
        ctx[5]
      );
      input.value = /*value*/
      ctx[0];
      attr_dev(
        input,
        "autocomplete",
        /*autocomplete*/
        ctx[2]
      );
      attr_dev(input, "pattern", input_pattern_value = /*pattern*/
      ctx[3].source);
      attr_dev(input, "class", "s-BHZCeVmFXkuG");
      add_location(input, file$o, 31, 1, 928);
      attr_dev(
        label_1,
        "for",
        /*id*/
        ctx[5]
      );
      attr_dev(label_1, "class", "s-BHZCeVmFXkuG");
      add_location(label_1, file$o, 41, 1, 1076);
      attr_dev(span, "class", "s-BHZCeVmFXkuG");
      toggle_class(
        span,
        "contents",
        /*value*/
        ctx[0].length > 0
      );
      toggle_class(span, "invalid", !/*valid*/
      ctx[4](
        /*value*/
        ctx[0]
      ) && /*value*/
      ctx[0].length > 0);
      add_location(span, file$o, 30, 0, 836);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, input);
      append_dev(span, t0);
      append_dev(span, label_1);
      append_dev(label_1, t1);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "focus",
            /*onFocus*/
            ctx[7],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*onBlur*/
            ctx[8],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "input",
            /*onInput*/
            ctx[6],
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
      if (dirty & /*autocomplete*/
      4) {
        attr_dev(
          input,
          "autocomplete",
          /*autocomplete*/
          ctx2[2]
        );
      }
      if (dirty & /*pattern*/
      8 && input_pattern_value !== (input_pattern_value = /*pattern*/
      ctx2[3].source)) {
        attr_dev(input, "pattern", input_pattern_value);
      }
      if (dirty & /*label*/
      2)
        set_data_dev(
          t1,
          /*label*/
          ctx2[1]
        );
      if (dirty & /*value*/
      1) {
        toggle_class(
          span,
          "contents",
          /*value*/
          ctx2[0].length > 0
        );
      }
      if (dirty & /*valid, value*/
      17) {
        toggle_class(span, "invalid", !/*valid*/
        ctx2[4](
          /*value*/
          ctx2[0]
        ) && /*value*/
        ctx2[0].length > 0);
      }
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
    id: create_fragment$t.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
let ids = 0;
let base_id = Date.now();
function UID() {
  return "input-" + (++ids + base_id).toString(32);
}
function instance$t($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("LastPassInput", slots, []);
  let { value } = $$props;
  let { label } = $$props;
  let { max_length = Infinity } = $$props;
  let { autocomplete = "off" } = $$props;
  let { pattern = /.*/ } = $$props;
  let { valid = () => true } = $$props;
  const id = UID();
  const dispatch = createEventDispatcher();
  function onInput(e) {
    if (pattern.test(e.currentTarget.value.toLowerCase()) || e.inputType.startsWith("delete")) {
      $$invalidate(0, value = e.currentTarget.value.slice(0, max_length));
    }
    e.currentTarget.value = value;
  }
  function onFocus() {
    dispatch("focus", label.replaceAll(" ", "-").toLowerCase());
  }
  function onBlur() {
    dispatch("blur", label.replaceAll(" ", "-").toLowerCase());
  }
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<LastPassInput> was created without expected prop 'value'");
    }
    if (label === void 0 && !("label" in $$props || $$self.$$.bound[$$self.$$.props["label"]])) {
      console.warn("<LastPassInput> was created without expected prop 'label'");
    }
  });
  const writable_props = ["value", "label", "max_length", "autocomplete", "pattern", "valid"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<LastPassInput> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("max_length" in $$props2)
      $$invalidate(9, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(2, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(3, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(4, valid = $$props2.valid);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    ids,
    base_id,
    UID,
    value,
    label,
    max_length,
    autocomplete,
    pattern,
    valid,
    id,
    dispatch,
    onInput,
    onFocus,
    onBlur
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("max_length" in $$props2)
      $$invalidate(9, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(2, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(3, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(4, valid = $$props2.valid);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    value,
    label,
    autocomplete,
    pattern,
    valid,
    id,
    onInput,
    onFocus,
    onBlur,
    max_length
  ];
}
class LastPassInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$t, create_fragment$t, safe_not_equal, {
      value: 0,
      label: 1,
      max_length: 9,
      autocomplete: 2,
      pattern: 3,
      valid: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LastPassInput",
      options,
      id: create_fragment$t.name
    });
  }
  get value() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max_length() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max_length(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autocomplete() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autocomplete(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pattern() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pattern(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get valid() {
    throw new Error("<LastPassInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set valid(value) {
    throw new Error("<LastPassInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_2$4(ctx) {
  let googleinput;
  let updating_value;
  let updating_label;
  let updating_max_length;
  let updating_autocomplete;
  let updating_pattern;
  let current;
  function googleinput_value_binding(value) {
    ctx[13](value);
  }
  function googleinput_label_binding(value) {
    ctx[14](value);
  }
  function googleinput_max_length_binding(value) {
    ctx[15](value);
  }
  function googleinput_autocomplete_binding(value) {
    ctx[16](value);
  }
  function googleinput_pattern_binding(value) {
    ctx[17](value);
  }
  let googleinput_props = {};
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    googleinput_props.value = /*value*/
    ctx[2];
  }
  if (
    /*label*/
    ctx[3] !== void 0
  ) {
    googleinput_props.label = /*label*/
    ctx[3];
  }
  if (
    /*max_length*/
    ctx[4] !== void 0
  ) {
    googleinput_props.max_length = /*max_length*/
    ctx[4];
  }
  if (
    /*autocomplete*/
    ctx[5] !== void 0
  ) {
    googleinput_props.autocomplete = /*autocomplete*/
    ctx[5];
  }
  if (
    /*pattern*/
    ctx[6] !== void 0
  ) {
    googleinput_props.pattern = /*pattern*/
    ctx[6];
  }
  googleinput = new GoogleInput({ props: googleinput_props, $$inline: true });
  binding_callbacks.push(() => bind(googleinput, "value", googleinput_value_binding));
  binding_callbacks.push(() => bind(googleinput, "label", googleinput_label_binding));
  binding_callbacks.push(() => bind(googleinput, "max_length", googleinput_max_length_binding));
  binding_callbacks.push(() => bind(googleinput, "autocomplete", googleinput_autocomplete_binding));
  binding_callbacks.push(() => bind(googleinput, "pattern", googleinput_pattern_binding));
  const block = {
    c: function create() {
      create_component(googleinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(googleinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const googleinput_changes = {};
      if (!updating_value && dirty & /*value*/
      4) {
        updating_value = true;
        googleinput_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_label && dirty & /*label*/
      8) {
        updating_label = true;
        googleinput_changes.label = /*label*/
        ctx2[3];
        add_flush_callback(() => updating_label = false);
      }
      if (!updating_max_length && dirty & /*max_length*/
      16) {
        updating_max_length = true;
        googleinput_changes.max_length = /*max_length*/
        ctx2[4];
        add_flush_callback(() => updating_max_length = false);
      }
      if (!updating_autocomplete && dirty & /*autocomplete*/
      32) {
        updating_autocomplete = true;
        googleinput_changes.autocomplete = /*autocomplete*/
        ctx2[5];
        add_flush_callback(() => updating_autocomplete = false);
      }
      if (!updating_pattern && dirty & /*pattern*/
      64) {
        updating_pattern = true;
        googleinput_changes.pattern = /*pattern*/
        ctx2[6];
        add_flush_callback(() => updating_pattern = false);
      }
      googleinput.$set(googleinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(googleinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(googleinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(googleinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$4.name,
    type: "slot",
    source: '(79:1) <Hst.Variant title=\\"Google Style Input\\" icon=\\"iconoir:input-field\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$4(ctx) {
  let lastpassinput;
  let updating_value;
  let updating_label;
  let updating_max_length;
  let updating_autocomplete;
  let updating_pattern;
  let current;
  function lastpassinput_value_binding(value) {
    ctx[18](value);
  }
  function lastpassinput_label_binding(value) {
    ctx[19](value);
  }
  function lastpassinput_max_length_binding(value) {
    ctx[20](value);
  }
  function lastpassinput_autocomplete_binding(value) {
    ctx[21](value);
  }
  function lastpassinput_pattern_binding(value) {
    ctx[22](value);
  }
  let lastpassinput_props = {};
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    lastpassinput_props.value = /*value*/
    ctx[2];
  }
  if (
    /*label*/
    ctx[3] !== void 0
  ) {
    lastpassinput_props.label = /*label*/
    ctx[3];
  }
  if (
    /*max_length*/
    ctx[4] !== void 0
  ) {
    lastpassinput_props.max_length = /*max_length*/
    ctx[4];
  }
  if (
    /*autocomplete*/
    ctx[5] !== void 0
  ) {
    lastpassinput_props.autocomplete = /*autocomplete*/
    ctx[5];
  }
  if (
    /*pattern*/
    ctx[6] !== void 0
  ) {
    lastpassinput_props.pattern = /*pattern*/
    ctx[6];
  }
  lastpassinput = new LastPassInput({
    props: lastpassinput_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(lastpassinput, "value", lastpassinput_value_binding));
  binding_callbacks.push(() => bind(lastpassinput, "label", lastpassinput_label_binding));
  binding_callbacks.push(() => bind(lastpassinput, "max_length", lastpassinput_max_length_binding));
  binding_callbacks.push(() => bind(lastpassinput, "autocomplete", lastpassinput_autocomplete_binding));
  binding_callbacks.push(() => bind(lastpassinput, "pattern", lastpassinput_pattern_binding));
  const block = {
    c: function create() {
      create_component(lastpassinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(lastpassinput, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const lastpassinput_changes = {};
      if (!updating_value && dirty & /*value*/
      4) {
        updating_value = true;
        lastpassinput_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_label && dirty & /*label*/
      8) {
        updating_label = true;
        lastpassinput_changes.label = /*label*/
        ctx2[3];
        add_flush_callback(() => updating_label = false);
      }
      if (!updating_max_length && dirty & /*max_length*/
      16) {
        updating_max_length = true;
        lastpassinput_changes.max_length = /*max_length*/
        ctx2[4];
        add_flush_callback(() => updating_max_length = false);
      }
      if (!updating_autocomplete && dirty & /*autocomplete*/
      32) {
        updating_autocomplete = true;
        lastpassinput_changes.autocomplete = /*autocomplete*/
        ctx2[5];
        add_flush_callback(() => updating_autocomplete = false);
      }
      if (!updating_pattern && dirty & /*pattern*/
      64) {
        updating_pattern = true;
        lastpassinput_changes.pattern = /*pattern*/
        ctx2[6];
        add_flush_callback(() => updating_pattern = false);
      }
      lastpassinput.$set(lastpassinput_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lastpassinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lastpassinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lastpassinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$4.name,
    type: "slot",
    source: '(82:1) <Hst.Variant title=\\"LastPass Style Input\\" icon=\\"iconoir:input-field\\">',
    ctx
  });
  return block;
}
function create_default_slot$6(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Google Style Input",
      icon: "iconoir:input-field",
      $$slots: { default: [create_default_slot_2$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "LastPass Style Input",
      icon: "iconoir:input-field",
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, value, label, max_length, autocomplete, pattern*/
      8388732) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, value, label, max_length, autocomplete, pattern*/
      8388732) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: '(74:0) <Hst.Story  title=\\"Components/Input\\"  icon=\\"iconoir:input-field\\"  layout={{ type: \\"grid\\", width: \\"95%\\" }} >',
    ctx
  });
  return block;
}
function create_controls_slot$5(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_number;
  let updating_value_2;
  let t2;
  let hst_text2;
  let updating_value_3;
  let t3;
  let hst_select;
  let updating_value_4;
  let current;
  function hst_text0_value_binding(value) {
    ctx[8](value);
  }
  let hst_text0_props = { title: "Label" };
  if (
    /*label*/
    ctx[3] !== void 0
  ) {
    hst_text0_props.value = /*label*/
    ctx[3];
  }
  hst_text0 = new /*Hst*/
  ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[9](value);
  }
  let hst_text1_props = { title: "Value" };
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    hst_text1_props.value = /*value*/
    ctx[2];
  }
  hst_text1 = new /*Hst*/
  ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_number_value_binding(value) {
    ctx[10](value);
  }
  let hst_number_props = { title: "Max Length" };
  if (
    /*max_length*/
    ctx[4] !== void 0
  ) {
    hst_number_props.value = /*max_length*/
    ctx[4];
  }
  hst_number = new /*Hst*/
  ctx[0].Number({ props: hst_number_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number, "value", hst_number_value_binding));
  function hst_text2_value_binding(value) {
    ctx[11](value);
  }
  let hst_text2_props = { title: "Pattern" };
  if (
    /*pattern_string*/
    ctx[1] !== void 0
  ) {
    hst_text2_props.value = /*pattern_string*/
    ctx[1];
  }
  hst_text2 = new /*Hst*/
  ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  function hst_select_value_binding(value) {
    ctx[12](value);
  }
  let hst_select_props = {
    title: "Autocomplete",
    options: (
      /*autocomplete_options*/
      ctx[7]
    )
  };
  if (
    /*autocomplete*/
    ctx[5] !== void 0
  ) {
    hst_select_props.value = /*autocomplete*/
    ctx[5];
  }
  hst_select = new /*Hst*/
  ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_number.$$.fragment);
      t2 = space();
      create_component(hst_text2.$$.fragment);
      t3 = space();
      create_component(hst_select.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_number, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_text2, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(hst_select, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & /*label*/
      8) {
        updating_value = true;
        hst_text0_changes.value = /*label*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & /*value*/
      4) {
        updating_value_1 = true;
        hst_text1_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_number_changes = {};
      if (!updating_value_2 && dirty & /*max_length*/
      16) {
        updating_value_2 = true;
        hst_number_changes.value = /*max_length*/
        ctx2[4];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_number.$set(hst_number_changes);
      const hst_text2_changes = {};
      if (!updating_value_3 && dirty & /*pattern_string*/
      2) {
        updating_value_3 = true;
        hst_text2_changes.value = /*pattern_string*/
        ctx2[1];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text2.$set(hst_text2_changes);
      const hst_select_changes = {};
      if (!updating_value_4 && dirty & /*autocomplete*/
      32) {
        updating_value_4 = true;
        hst_select_changes.value = /*autocomplete*/
        ctx2[5];
        add_flush_callback(() => updating_value_4 = false);
      }
      hst_select.$set(hst_select_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_number.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      transition_in(hst_select.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_number.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      transition_out(hst_select.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_number, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_text2, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(hst_select, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$5.name,
    type: "slot",
    source: '(85:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Input",
      icon: "iconoir:input-field",
      layout: { type: "grid", width: "95%" },
      $$slots: {
        controls: [create_controls_slot$5],
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
      if (dirty & /*$$scope, autocomplete, pattern_string, max_length, value, label, pattern*/
      8388734) {
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
  validate_slots("Input_story", slots, []);
  let { Hst } = $$props;
  let value = "";
  let label = "Example";
  let max_length = 20;
  let autocomplete = "off";
  let pattern_string = ".*";
  let pattern = /^.*$/;
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
    photo: "photo"
  };
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Input_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Input_story> was created with unknown prop '${key2}'`);
  });
  function hst_text0_value_binding(value2) {
    label = value2;
    $$invalidate(3, label);
  }
  function hst_text1_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function hst_number_value_binding(value2) {
    max_length = value2;
    $$invalidate(4, max_length);
  }
  function hst_text2_value_binding(value2) {
    pattern_string = value2;
    $$invalidate(1, pattern_string);
  }
  function hst_select_value_binding(value2) {
    autocomplete = value2;
    $$invalidate(5, autocomplete);
  }
  function googleinput_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function googleinput_label_binding(value2) {
    label = value2;
    $$invalidate(3, label);
  }
  function googleinput_max_length_binding(value2) {
    max_length = value2;
    $$invalidate(4, max_length);
  }
  function googleinput_autocomplete_binding(value2) {
    autocomplete = value2;
    $$invalidate(5, autocomplete);
  }
  function googleinput_pattern_binding(value2) {
    pattern = value2;
    $$invalidate(6, pattern), $$invalidate(1, pattern_string);
  }
  function lastpassinput_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function lastpassinput_label_binding(value2) {
    label = value2;
    $$invalidate(3, label);
  }
  function lastpassinput_max_length_binding(value2) {
    max_length = value2;
    $$invalidate(4, max_length);
  }
  function lastpassinput_autocomplete_binding(value2) {
    autocomplete = value2;
    $$invalidate(5, autocomplete);
  }
  function lastpassinput_pattern_binding(value2) {
    pattern = value2;
    $$invalidate(6, pattern), $$invalidate(1, pattern_string);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    GoogleInput,
    LastPassInput,
    Hst,
    value,
    label,
    max_length,
    autocomplete,
    pattern_string,
    pattern,
    autocomplete_options
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(3, label = $$props2.label);
    if ("max_length" in $$props2)
      $$invalidate(4, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(5, autocomplete = $$props2.autocomplete);
    if ("pattern_string" in $$props2)
      $$invalidate(1, pattern_string = $$props2.pattern_string);
    if ("pattern" in $$props2)
      $$invalidate(6, pattern = $$props2.pattern);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*pattern_string*/
    2) {
      try {
        $$invalidate(6, pattern = new RegExp(`^${pattern_string}$`));
      } catch {
        $$invalidate(6, pattern = /^.*$/);
      }
    }
  };
  return [
    Hst,
    pattern_string,
    value,
    label,
    max_length,
    autocomplete,
    pattern,
    autocomplete_options,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_number_value_binding,
    hst_text2_value_binding,
    hst_select_value_binding,
    googleinput_value_binding,
    googleinput_label_binding,
    googleinput_max_length_binding,
    googleinput_autocomplete_binding,
    googleinput_pattern_binding,
    lastpassinput_value_binding,
    lastpassinput_label_binding,
    lastpassinput_max_length_binding,
    lastpassinput_autocomplete_binding,
    lastpassinput_pattern_binding
  ];
}
class Input_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Input_story",
      options,
      id: create_fragment$s.name
    });
  }
  get Hst() {
    throw new Error("<Input_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Input_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Container_svelte_svelte_type_style_lang = "";
const file$n = "src/components/MouseAuraCards.svelte/Container.svelte";
function create_fragment$r(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "container s-97S4FwKeKbLF");
      add_location(div, file$n, 13, 0, 375);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[4](div);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          div,
          "mousemove",
          /*onMouseMove*/
          ctx[1],
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
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
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
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[4](null);
      mounted = false;
      dispose();
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
function instance$r($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Container", slots, ["default"]);
  let x = 0;
  let y = 0;
  let container;
  function onMouseMove(e) {
    for (const child of container.childNodes) {
      if (child instanceof HTMLElement && child.classList.contains("card")) {
        child.style.setProperty("--x", `${e.clientX - child.offsetLeft}px`);
        child.style.setProperty("--y", `${e.clientY - child.offsetTop}px`);
      }
    }
  }
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Container> was created with unknown prop '${key2}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(0, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ x, y, container, onMouseMove });
  $$self.$inject_state = ($$props2) => {
    if ("x" in $$props2)
      x = $$props2.x;
    if ("y" in $$props2)
      y = $$props2.y;
    if ("container" in $$props2)
      $$invalidate(0, container = $$props2.container);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [container, onMouseMove, $$scope, slots, div_binding];
}
class Container extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Container",
      options,
      id: create_fragment$r.name
    });
  }
}
const Card_svelte_svelte_type_style_lang = "";
const file$m = "src/components/MouseAuraCards.svelte/Card.svelte";
function create_fragment$q(ctx) {
  let div;
  let current;
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
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "card s-NWYrS8C47Tch");
      add_location(div, file$m, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
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
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
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
  validate_slots("Card", slots, ["default"]);
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Card> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Card extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$q, create_fragment$q, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Card",
      options,
      id: create_fragment$q.name
    });
  }
}
const MAC = { Container, Card };
const file$l = "src/stories/components/MouseAuraCards.story.svelte";
function create_default_slot_6$1(ctx) {
  let h3;
  let t1;
  let p;
  const block = {
    c: function create() {
      h3 = element("h3");
      h3.textContent = "test title";
      t1 = space();
      p = element("p");
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea\n				totam eveniet corporis porro deleniti architecto dolorem sapiente!";
      add_location(h3, file$l, 7, 3, 216);
      add_location(p, file$l, 8, 3, 239);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h3);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6$1.name,
    type: "slot",
    source: "(7:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_5$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea\n			totam!");
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
    id: create_default_slot_5$1.name,
    type: "slot",
    source: "(14:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_4$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea\n			totam eveniet corporis porro deleniti architecto dolorem sapiente!");
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
    id: create_default_slot_4$1.name,
    type: "slot",
    source: "(18:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_3$2(ctx) {
  let h3;
  let t1;
  let p;
  const block = {
    c: function create() {
      h3 = element("h3");
      h3.textContent = "test title 2";
      t1 = space();
      p = element("p");
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea\n				totam!";
      add_location(h3, file$l, 22, 3, 748);
      add_location(p, file$l, 23, 3, 773);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h3);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$2.name,
    type: "slot",
    source: "(22:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_2$3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
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
    id: create_default_slot_2$3.name,
    type: "slot",
    source: "(29:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_1$3(ctx) {
  let mac_card0;
  let t0;
  let mac_card1;
  let t1;
  let mac_card2;
  let t2;
  let mac_card3;
  let t3;
  let mac_card4;
  let current;
  mac_card0 = new MAC.Card({
    props: {
      $$slots: { default: [create_default_slot_6$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  mac_card1 = new MAC.Card({
    props: {
      $$slots: { default: [create_default_slot_5$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  mac_card2 = new MAC.Card({
    props: {
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  mac_card3 = new MAC.Card({
    props: {
      $$slots: { default: [create_default_slot_3$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  mac_card4 = new MAC.Card({
    props: {
      $$slots: { default: [create_default_slot_2$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(mac_card0.$$.fragment);
      t0 = space();
      create_component(mac_card1.$$.fragment);
      t1 = space();
      create_component(mac_card2.$$.fragment);
      t2 = space();
      create_component(mac_card3.$$.fragment);
      t3 = space();
      create_component(mac_card4.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(mac_card0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(mac_card1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(mac_card2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(mac_card3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(mac_card4, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const mac_card0_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_card0.$set(mac_card0_changes);
      const mac_card1_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_card1.$set(mac_card1_changes);
      const mac_card2_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_card2.$set(mac_card2_changes);
      const mac_card3_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_card3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_card3.$set(mac_card3_changes);
      const mac_card4_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_card4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_card4.$set(mac_card4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(mac_card0.$$.fragment, local);
      transition_in(mac_card1.$$.fragment, local);
      transition_in(mac_card2.$$.fragment, local);
      transition_in(mac_card3.$$.fragment, local);
      transition_in(mac_card4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(mac_card0.$$.fragment, local);
      transition_out(mac_card1.$$.fragment, local);
      transition_out(mac_card2.$$.fragment, local);
      transition_out(mac_card3.$$.fragment, local);
      transition_out(mac_card4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(mac_card0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(mac_card1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(mac_card2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(mac_card3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(mac_card4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: "(6:1) <MAC.Container>",
    ctx
  });
  return block;
}
function create_default_slot$5(ctx) {
  let mac_container;
  let current;
  mac_container = new MAC.Container({
    props: {
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(mac_container.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(mac_container, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const mac_container_changes = {};
      if (dirty & /*$$scope*/
      2) {
        mac_container_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mac_container.$set(mac_container_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(mac_container.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(mac_container.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(mac_container, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: '(5:0) <Hst.Story title=\\"Components/Mouse Aura Cards\\" icon=\\"clarity:view-cards-line\\">',
    ctx
  });
  return block;
}
function create_fragment$p(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Mouse Aura Cards",
      icon: "clarity:view-cards-line",
      $$slots: { default: [create_default_slot$5] },
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
      2) {
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
    id: create_fragment$p.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$p($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("MouseAuraCards_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<MouseAuraCards_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<MouseAuraCards_story> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ MAC, Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class MouseAuraCards_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MouseAuraCards_story",
      options,
      id: create_fragment$p.name
    });
  }
  get Hst() {
    throw new Error("<MouseAuraCards_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<MouseAuraCards_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Morph_svelte_svelte_type_style_lang = "";
const file$k = "src/components/Pause/Morph.svelte";
function create_fragment$o(ctx) {
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
      add_location(path0, file$k, 10, 1, 191);
      attr_dev(path1, "class", "right s-r_IBm7hQpKjb");
      attr_dev(path1, "d", "M42,0L58,0V64L42,64z");
      add_location(path1, file$k, 11, 1, 237);
      attr_dev(svg, "viewBox", "0 0 64 64");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-r_IBm7hQpKjb");
      toggle_class(
        svg,
        "paused",
        /*paused*/
        ctx[0]
      );
      add_location(svg, file$k, 3, 0, 56);
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
    id: create_fragment$o.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$o($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Morph", slots, []);
  let { paused = false } = $$props;
  const writable_props = ["paused"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Morph> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { paused: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Morph",
      options,
      id: create_fragment$o.name
    });
  }
  get paused() {
    throw new Error("<Morph>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set paused(value) {
    throw new Error("<Morph>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Rotate_svelte_svelte_type_style_lang = "";
const file$j = "src/components/Pause/Rotate.svelte";
function create_fragment$n(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr_dev(path0, "class", "left s-FdClFgD2913W");
      attr_dev(path0, "d", "M6,0h16V64H6z");
      add_location(path0, file$j, 11, 2, 197);
      attr_dev(path1, "class", "right s-FdClFgD2913W");
      attr_dev(path1, "d", "M58,0H42V64h16z");
      add_location(path1, file$j, 12, 2, 239);
      attr_dev(g, "class", "s-FdClFgD2913W");
      add_location(g, file$j, 10, 1, 191);
      attr_dev(svg, "viewBox", "0 0 64 64");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-FdClFgD2913W");
      toggle_class(
        svg,
        "paused",
        /*paused*/
        ctx[0]
      );
      add_location(svg, file$j, 3, 0, 56);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      append_dev(g, path0);
      append_dev(g, path1);
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
    id: create_fragment$n.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$n($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Rotate", slots, []);
  let { paused = false } = $$props;
  const writable_props = ["paused"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Rotate> was created with unknown prop '${key2}'`);
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
class Rotate extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { paused: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rotate",
      options,
      id: create_fragment$n.name
    });
  }
  get paused() {
    throw new Error("<Rotate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set paused(value) {
    throw new Error("<Rotate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Pause_story_svelte_svelte_type_style_lang = "";
const file$i = "src/stories/components/Pause.story.svelte";
function create_default_slot_3$1(ctx) {
  let morph;
  let updating_paused;
  let current;
  function morph_paused_binding(value) {
    ctx[3](value);
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
      create_component(morph.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(morph, target, anchor);
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
      destroy_component(morph, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$1.name,
    type: "slot",
    source: '(8:1) <Hst.Variant title=\\"Morph\\" icon=\\"material-symbols:pause-outline\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$2(ctx) {
  let rotate;
  let updating_paused;
  let current;
  function rotate_paused_binding(value) {
    ctx[4](value);
  }
  let rotate_props = {};
  if (
    /*paused*/
    ctx[1] !== void 0
  ) {
    rotate_props.paused = /*paused*/
    ctx[1];
  }
  rotate = new Rotate({ props: rotate_props, $$inline: true });
  binding_callbacks.push(() => bind(rotate, "paused", rotate_paused_binding));
  const block = {
    c: function create() {
      create_component(rotate.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(rotate, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const rotate_changes = {};
      if (!updating_paused && dirty & /*paused*/
      2) {
        updating_paused = true;
        rotate_changes.paused = /*paused*/
        ctx2[1];
        add_flush_callback(() => updating_paused = false);
      }
      rotate.$set(rotate_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(rotate.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(rotate.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(rotate, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$2.name,
    type: "slot",
    source: '(11:1) <Hst.Variant title=\\"Rotate\\" icon=\\"material-symbols:pause-outline\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let div;
  let rotate;
  let updating_paused;
  let current;
  let mounted;
  let dispose;
  function rotate_paused_binding_1(value) {
    ctx[5](value);
  }
  let rotate_props = {};
  if (
    /*paused*/
    ctx[1] !== void 0
  ) {
    rotate_props.paused = /*paused*/
    ctx[1];
  }
  rotate = new Rotate({ props: rotate_props, $$inline: true });
  binding_callbacks.push(() => bind(rotate, "paused", rotate_paused_binding_1));
  const block = {
    c: function create() {
      div = element("div");
      create_component(rotate.$$.fragment);
      attr_dev(div, "class", "s-3GNHVAwR_FbV");
      toggle_class(
        div,
        "paused",
        /*paused*/
        ctx[1]
      );
      add_location(div, file$i, 15, 2, 633);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(rotate, div, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(div, "click", self(
          /*click_handler*/
          ctx[6]
        ), false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const rotate_changes = {};
      if (!updating_paused && dirty & /*paused*/
      2) {
        updating_paused = true;
        rotate_changes.paused = /*paused*/
        ctx2[1];
        add_flush_callback(() => updating_paused = false);
      }
      rotate.$set(rotate_changes);
      if (!current || dirty & /*paused*/
      2) {
        toggle_class(
          div,
          "paused",
          /*paused*/
          ctx2[1]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(rotate.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(rotate.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(rotate);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(14:1) <Hst.Variant title=\\"Rotate Circle\\" icon=\\"material-symbols:pause-circle\\">',
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Morph",
      icon: "material-symbols:pause-outline",
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Rotate",
      icon: "material-symbols:pause-outline",
      $$slots: { default: [create_default_slot_2$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Rotate Circle",
      icon: "material-symbols:pause-circle",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, paused*/
      130) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, paused*/
      130) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & /*$$scope, paused*/
      130) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Pause\\" icon=\\"material-symbols:pause-outline\\" layout={{ type: \\"grid\\" }}>',
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
  let hst_checkbox;
  let updating_value;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[2](value);
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
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
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
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$4.name,
    type: "slot",
    source: '(21:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Pause",
      icon: "material-symbols:pause-outline",
      layout: { type: "grid" },
      $$slots: {
        controls: [create_controls_slot$4],
        default: [create_default_slot$4]
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
      if (dirty & /*$$scope, paused*/
      130) {
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
  validate_slots("Pause_story", slots, []);
  let { Hst } = $$props;
  let paused = false;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Pause_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Pause_story> was created with unknown prop '${key2}'`);
  });
  function hst_checkbox_value_binding(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  function morph_paused_binding(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  function rotate_paused_binding(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  function rotate_paused_binding_1(value) {
    paused = value;
    $$invalidate(1, paused);
  }
  const click_handler = () => $$invalidate(1, paused = !paused);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Morph, Rotate, Hst, paused });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("paused" in $$props2)
      $$invalidate(1, paused = $$props2.paused);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    paused,
    hst_checkbox_value_binding,
    morph_paused_binding,
    rotate_paused_binding,
    rotate_paused_binding_1,
    click_handler
  ];
}
class Pause_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pause_story",
      options,
      id: create_fragment$m.name
    });
  }
  get Hst() {
    throw new Error("<Pause_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Pause_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Seg_svelte_svelte_type_style_lang = "";
const file$h = "src/components/Seven Segment/Seg.svelte";
function create_fragment$l(ctx) {
  let svg;
  let defs;
  let path0;
  let path1;
  let use0;
  let use1;
  let use2;
  let use3;
  let use4;
  let use5;
  let use6;
  let circle;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      defs = svg_element("defs");
      path0 = svg_element("path");
      path1 = svg_element("path");
      use0 = svg_element("use");
      use1 = svg_element("use");
      use2 = svg_element("use");
      use3 = svg_element("use");
      use4 = svg_element("use");
      use5 = svg_element("use");
      use6 = svg_element("use");
      circle = svg_element("circle");
      attr_dev(path0, "id", "h");
      attr_dev(path0, "d", "m0 2 l2-2h8l2 2l-2 2H2z");
      add_location(path0, file$h, 20, 2, 835);
      attr_dev(path1, "id", "v");
      attr_dev(path1, "d", "m2 0l2 2v8l-2 2l-2-2v-8z");
      add_location(path1, file$h, 21, 2, 881);
      add_location(defs, file$h, 19, 1, 826);
      xlink_attr(use0, "xlink:href", "#h");
      attr_dev(use0, "x", "2");
      attr_dev(use0, "y", "0");
      attr_dev(use0, "class", "s-oI42047qExcF");
      toggle_class(
        use0,
        "hidden",
        /*value*/
        ctx[0][0]
      );
      add_location(use0, file$h, 23, 1, 936);
      xlink_attr(use1, "xlink:href", "#v");
      attr_dev(use1, "x", "12");
      attr_dev(use1, "y", "2");
      attr_dev(use1, "class", "s-oI42047qExcF");
      toggle_class(
        use1,
        "hidden",
        /*value*/
        ctx[0][1]
      );
      add_location(use1, file$h, 24, 1, 997);
      xlink_attr(use2, "xlink:href", "#v");
      attr_dev(use2, "x", "12");
      attr_dev(use2, "y", "14");
      attr_dev(use2, "class", "s-oI42047qExcF");
      toggle_class(
        use2,
        "hidden",
        /*value*/
        ctx[0][2]
      );
      add_location(use2, file$h, 25, 1, 1059);
      xlink_attr(use3, "xlink:href", "#h");
      attr_dev(use3, "x", "2");
      attr_dev(use3, "y", "24");
      attr_dev(use3, "class", "s-oI42047qExcF");
      toggle_class(
        use3,
        "hidden",
        /*value*/
        ctx[0][3]
      );
      add_location(use3, file$h, 26, 1, 1122);
      xlink_attr(use4, "xlink:href", "#v");
      attr_dev(use4, "x", "0");
      attr_dev(use4, "y", "14");
      attr_dev(use4, "class", "s-oI42047qExcF");
      toggle_class(
        use4,
        "hidden",
        /*value*/
        ctx[0][4]
      );
      add_location(use4, file$h, 27, 1, 1184);
      xlink_attr(use5, "xlink:href", "#v");
      attr_dev(use5, "x", "0");
      attr_dev(use5, "y", "2");
      attr_dev(use5, "class", "s-oI42047qExcF");
      toggle_class(
        use5,
        "hidden",
        /*value*/
        ctx[0][5]
      );
      add_location(use5, file$h, 28, 1, 1246);
      xlink_attr(use6, "xlink:href", "#h");
      attr_dev(use6, "x", "2");
      attr_dev(use6, "y", "12");
      attr_dev(use6, "class", "s-oI42047qExcF");
      toggle_class(
        use6,
        "hidden",
        /*value*/
        ctx[0][6]
      );
      add_location(use6, file$h, 29, 1, 1307);
      attr_dev(circle, "cx", "17.5");
      attr_dev(circle, "cy", "26.5");
      attr_dev(circle, "r", "1.5");
      attr_dev(circle, "class", "s-oI42047qExcF");
      toggle_class(circle, "hidden", !/*point*/
      ctx[1]);
      add_location(circle, file$h, 30, 1, 1369);
      attr_dev(svg, "viewBox", "0 0 19 28");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "class", "s-oI42047qExcF");
      add_location(svg, file$h, 18, 0, 764);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, defs);
      append_dev(defs, path0);
      append_dev(defs, path1);
      append_dev(svg, use0);
      append_dev(svg, use1);
      append_dev(svg, use2);
      append_dev(svg, use3);
      append_dev(svg, use4);
      append_dev(svg, use5);
      append_dev(svg, use6);
      append_dev(svg, circle);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        toggle_class(
          use0,
          "hidden",
          /*value*/
          ctx2[0][0]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use1,
          "hidden",
          /*value*/
          ctx2[0][1]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use2,
          "hidden",
          /*value*/
          ctx2[0][2]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use3,
          "hidden",
          /*value*/
          ctx2[0][3]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use4,
          "hidden",
          /*value*/
          ctx2[0][4]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use5,
          "hidden",
          /*value*/
          ctx2[0][5]
        );
      }
      if (dirty & /*value*/
      1) {
        toggle_class(
          use6,
          "hidden",
          /*value*/
          ctx2[0][6]
        );
      }
      if (dirty & /*point*/
      2) {
        toggle_class(circle, "hidden", !/*point*/
        ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Seg", slots, []);
  let { value } = $$props;
  let { point = false } = $$props;
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Seg> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value", "point"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Seg> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("point" in $$props2)
      $$invalidate(1, point = $$props2.point);
  };
  $$self.$capture_state = () => ({ value, point });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("point" in $$props2)
      $$invalidate(1, point = $$props2.point);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, point];
}
class Seg extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { value: 0, point: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Seg",
      options,
      id: create_fragment$l.name
    });
  }
  get value() {
    throw new Error("<Seg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Seg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get point() {
    throw new Error("<Seg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set point(value) {
    throw new Error("<Seg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  child_ctx[5] = i;
  return child_ctx;
}
function create_each_block$3(ctx) {
  let seg;
  let current;
  seg = new Seg({
    props: {
      value: key[
        /*v*/
        ctx[3]
      ],
      point: (
        /*i*/
        ctx[5] === /*point*/
        ctx[1] - 1
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(seg.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(seg, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const seg_changes = {};
      if (dirty & /*str*/
      1)
        seg_changes.value = key[
          /*v*/
          ctx2[3]
        ];
      if (dirty & /*point*/
      2)
        seg_changes.point = /*i*/
        ctx2[5] === /*point*/
        ctx2[1] - 1;
      seg.$set(seg_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(seg.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(seg.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(seg, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$3.name,
    type: "each",
    source: "(25:0) {#each str as v, i}",
    ctx
  });
  return block;
}
function create_fragment$k(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*str*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*key, str, point*/
      3) {
        each_value = /*str*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
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
const key = {
  "0": [0, 0, 0, 0, 0, 0, 1],
  "1": [1, 0, 0, 1, 1, 1, 1],
  "2": [0, 0, 1, 0, 0, 1, 0],
  "3": [0, 0, 0, 0, 1, 1, 0],
  "4": [1, 0, 0, 1, 1, 0, 0],
  "5": [0, 1, 0, 0, 1, 0, 0],
  "6": [0, 1, 0, 0, 0, 0, 0],
  "7": [0, 0, 0, 1, 1, 1, 1],
  "8": [0, 0, 0, 0, 0, 0, 0],
  "9": [0, 0, 0, 0, 1, 0, 0]
};
function instance$k($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SevenSegDisplay", slots, []);
  let { value } = $$props;
  let str = "";
  let point = -1;
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<SevenSegDisplay> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SevenSegDisplay> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  $$self.$capture_state = () => ({ key, Seg, value, str, point });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("str" in $$props2)
      $$invalidate(0, str = $$props2.str);
    if ("point" in $$props2)
      $$invalidate(1, point = $$props2.point);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    4) {
      {
        $$invalidate(1, point = String(value).indexOf("."));
        $$invalidate(0, str = String(value).replace(".", ""));
      }
    }
  };
  return [str, point, value];
}
class SevenSegDisplay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { value: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SevenSegDisplay",
      options,
      id: create_fragment$k.name
    });
  }
  get value() {
    throw new Error("<SevenSegDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<SevenSegDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SevenSegment_story_svelte_svelte_type_style_lang = "";
const file$g = "src/stories/components/SevenSegment.story.svelte";
function create_default_slot$3(ctx) {
  let div;
  let display;
  let updating_value;
  let current;
  function display_value_binding(value) {
    ctx[3](value);
  }
  let display_props = {};
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    display_props.value = /*value*/
    ctx[1];
  }
  display = new SevenSegDisplay({ props: display_props, $$inline: true });
  binding_callbacks.push(() => bind(display, "value", display_value_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(display.$$.fragment);
      attr_dev(div, "class", "s-rRo3hylYteyr");
      add_location(div, file$g, 6, 1, 207);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(display, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const display_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        display_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      display.$set(display_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(display.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(display.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(display);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: '(6:0) <Hst.Story title=\\"Components/7 Segment\\" icon=\\"ri:number-8\\">',
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
  let hst_number;
  let updating_value;
  let current;
  function hst_number_value_binding(value) {
    ctx[2](value);
  }
  let hst_number_props = { title: "Value" };
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    hst_number_props.value = /*value*/
    ctx[1];
  }
  hst_number = new /*Hst*/
  ctx[0].Number({ props: hst_number_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number, "value", hst_number_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        hst_number_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_number.$set(hst_number_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_number, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(10:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$j(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/7 Segment",
      icon: "ri:number-8",
      $$slots: {
        controls: [create_controls_slot$3],
        default: [create_default_slot$3]
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
    id: create_fragment$j.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$j($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SevenSegment_story", slots, []);
  let { Hst } = $$props;
  let value = 12345.6789;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<SevenSegment_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SevenSegment_story> was created with unknown prop '${key2}'`);
  });
  function hst_number_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function display_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Display: SevenSegDisplay, Hst, value });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, value, hst_number_value_binding, display_value_binding];
}
class SevenSegment_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SevenSegment_story",
      options,
      id: create_fragment$j.name
    });
  }
  get Hst() {
    throw new Error("<SevenSegment_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<SevenSegment_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Spin_svelte_svelte_type_style_lang$1 = "";
const file$f = "src/components/Theme Toggles/Spin.svelte";
function create_fragment$i(ctx) {
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
      attr_dev(path, "d", "M12.94 0.9A9 9 0 1 0 12.94 17.1c6.75 -3.37 6.75 -12.83 0 -16.2z");
      attr_dev(path, "class", "s-qPp6Arpl19Zi");
      add_location(path, file$f, 10, 1, 185);
      attr_dev(circle0, "class", "a s-qPp6Arpl19Zi");
      attr_dev(circle0, "cx", "9");
      attr_dev(circle0, "cy", "1");
      attr_dev(circle0, "r", "1");
      add_location(circle0, file$f, 11, 1, 263);
      attr_dev(circle1, "class", "b s-qPp6Arpl19Zi");
      attr_dev(circle1, "cx", "15.93");
      attr_dev(circle1, "cy", "5");
      attr_dev(circle1, "r", "1");
      add_location(circle1, file$f, 12, 1, 305);
      attr_dev(circle2, "class", "c s-qPp6Arpl19Zi");
      attr_dev(circle2, "cx", "15.93");
      attr_dev(circle2, "cy", "13");
      attr_dev(circle2, "r", "1");
      add_location(circle2, file$f, 13, 1, 351);
      attr_dev(circle3, "class", "d s-qPp6Arpl19Zi");
      attr_dev(circle3, "cx", "9");
      attr_dev(circle3, "cy", "17");
      attr_dev(circle3, "r", "1");
      add_location(circle3, file$f, 14, 1, 398);
      attr_dev(circle4, "class", "e s-qPp6Arpl19Zi");
      attr_dev(circle4, "cx", "2.07");
      attr_dev(circle4, "cy", "13");
      attr_dev(circle4, "r", "1");
      add_location(circle4, file$f, 15, 1, 441);
      attr_dev(circle5, "class", "f s-qPp6Arpl19Zi");
      attr_dev(circle5, "cx", "2.07");
      attr_dev(circle5, "cy", "5");
      attr_dev(circle5, "r", "1");
      add_location(circle5, file$f, 16, 1, 487);
      attr_dev(svg, "viewBox", "0 0 18 18");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-qPp6Arpl19Zi");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$f, 3, 0, 55);
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
    id: create_fragment$i.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$i($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Spin", slots, []);
  let { light = false } = $$props;
  const writable_props = ["light"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Spin> was created with unknown prop '${key2}'`);
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
let Spin$1 = class Spin extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin",
      options,
      id: create_fragment$i.name
    });
  }
  get light() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set light(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
const Rise_svelte_svelte_type_style_lang = "";
const file$e = "src/components/Theme Toggles/Rise.svelte";
function create_fragment$h(ctx) {
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
      add_location(path0, file$e, 11, 2, 204);
      attr_dev(path1, "class", "moon s-pTKVn_h5v_UI");
      attr_dev(path1, "d", "M22.728 15.445c-3.71.885-6.47 4.162-6.47 8.055 0 4.573 3.804 8.293 8.479 8.293 2.995 0 5.697-1.522 7.214-3.933-.173.009-.348.013-.522.013-5.146 0-9.334-4.095-9.334-9.128a8.88 8.88 0 0 1 .633-3.3zM24.737 34C18.817 34 14 29.291 14 23.5S18.817 13 24.737 13c.423 0 .813.231 1.006.599a1.08 1.08 0 0 1-.079 1.146 6.76 6.76 0 0 0-1.31 4c0 3.816 3.173 6.92 7.075 6.92.719 0 1.428-.106 2.107-.311a1.14 1.14 0 0 1 1.138.277c.297.295.402.726.271 1.117C33.502 31.086 29.4 34 24.737 34z");
      add_location(path1, file$e, 15, 2, 1408);
      attr_dev(g, "class", "both s-pTKVn_h5v_UI");
      add_location(g, file$e, 10, 1, 185);
      attr_dev(circle, "cx", "24");
      attr_dev(circle, "cy", "24");
      attr_dev(circle, "r", "23");
      attr_dev(circle, "class", "s-pTKVn_h5v_UI");
      add_location(circle, file$e, 20, 1, 1923);
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-pTKVn_h5v_UI");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$e, 3, 0, 55);
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
    id: create_fragment$h.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$h($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Rise", slots, []);
  let { light = false } = $$props;
  const writable_props = ["light"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Rise> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rise",
      options,
      id: create_fragment$h.name
    });
  }
  get light() {
    throw new Error("<Rise>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set light(value) {
    throw new Error("<Rise>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_2$1(ctx) {
  let spin;
  let updating_light;
  let current;
  function spin_light_binding(value) {
    ctx[3](value);
  }
  let spin_props = {};
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    spin_props.light = /*light*/
    ctx[1];
  }
  spin = new Spin$1({ props: spin_props, $$inline: true });
  binding_callbacks.push(() => bind(spin, "light", spin_light_binding));
  const block = {
    c: function create() {
      create_component(spin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(spin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const spin_changes = {};
      if (!updating_light && dirty & /*light*/
      2) {
        updating_light = true;
        spin_changes.light = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_light = false);
      }
      spin.$set(spin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(spin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: '(12:1) <Hst.Variant title=\\"Spin\\" icon=\\"material-symbols:light-mode\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let rise;
  let updating_light;
  let current;
  function rise_light_binding(value) {
    ctx[4](value);
  }
  let rise_props = {};
  if (
    /*light*/
    ctx[1] !== void 0
  ) {
    rise_props.light = /*light*/
    ctx[1];
  }
  rise = new Rise({ props: rise_props, $$inline: true });
  binding_callbacks.push(() => bind(rise, "light", rise_light_binding));
  const block = {
    c: function create() {
      create_component(rise.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(rise, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const rise_changes = {};
      if (!updating_light && dirty & /*light*/
      2) {
        updating_light = true;
        rise_changes.light = /*light*/
        ctx2[1];
        add_flush_callback(() => updating_light = false);
      }
      rise.$set(rise_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(rise.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(rise.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(rise, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(15:1) <Hst.Variant title=\\"Rise\\" icon=\\"material-symbols:light-mode\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Spin",
      icon: "material-symbols:light-mode",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Rise",
      icon: "material-symbols:light-mode",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, light*/
      34) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, light*/
      34) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(7:0) <Hst.Story  title=\\"Components/Theme Toggles\\"  icon=\\"material-symbols:light-mode\\"  layout={{ type: \\"grid\\" }} >',
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
  let hst_checkbox;
  let updating_value;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[2](value);
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
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
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
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(19:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Theme Toggles",
      icon: "material-symbols:light-mode",
      layout: { type: "grid" },
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot$2]
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
      if (dirty & /*$$scope, light*/
      34) {
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
  validate_slots("ThemeToggles_story", slots, []);
  let { Hst } = $$props;
  let light = false;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ThemeToggles_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ThemeToggles_story> was created with unknown prop '${key2}'`);
  });
  function hst_checkbox_value_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  function spin_light_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  function rise_light_binding(value) {
    light = value;
    $$invalidate(1, light);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Spin: Spin$1, Rise, Hst, light });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("light" in $$props2)
      $$invalidate(1, light = $$props2.light);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, light, hst_checkbox_value_binding, spin_light_binding, rise_light_binding];
}
class ThemeToggles_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ThemeToggles_story",
      options,
      id: create_fragment$g.name
    });
  }
  get Hst() {
    throw new Error("<ThemeToggles_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ThemeToggles_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Glitch_svelte_svelte_type_style_lang = "";
const file$d = "src/components/Glitch.svelte";
function create_fragment$f(ctx) {
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
      add_location(span, file$d, 32, 0, 816);
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
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function instance$f($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Glitch> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {
      text: 2,
      iteration_factor: 3,
      flash_duration: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch",
      options,
      id: create_fragment$f.name
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
function create_default_slot$1(ctx) {
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
    id: create_default_slot$1.name,
    type: "slot",
    source: '(8:0) <Hst.Story title=\\"Components/Glitch Text\\" icon=\\"bx:text\\">',
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
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
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(10:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Glitch Text",
      icon: "bx:text",
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
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$e($$self, $$props, $$invalidate) {
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
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Glitch_story> was created with unknown prop '${key2}'`);
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
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch_story",
      options,
      id: create_fragment$e.name
    });
  }
  get Hst() {
    throw new Error("<Glitch_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Glitch_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$c = "src/lib/Range.svelte";
function create_fragment$d(ctx) {
  let label;
  let span0;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let span2;
  let span1;
  let div2;
  let div1;
  let div0;
  let t5;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      label = element("label");
      span0 = element("span");
      t0 = text(
        /*title*/
        ctx[1]
      );
      t1 = text(" (");
      t2 = text(
        /*value*/
        ctx[0]
      );
      t3 = text(")");
      t4 = space();
      span2 = element("span");
      span1 = element("span");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      t5 = space();
      input = element("input");
      attr_dev(span0, "class", "htw-w-28 htw-whitespace-nowrap htw-text-ellipsis htw-overflow-hidden htw-shrink-0 v-popper--has-tooltip");
      add_location(span0, file$c, 11, 1, 418);
      attr_dev(div0, "class", "htw-border htw-border-black/25 dark:htw-border-white/25 htw-h-1 htw-w-full htw-rounded-full");
      add_location(div0, file$c, 20, 5, 838);
      attr_dev(div1, "class", "htw-absolute htw-inset-0 htw-flex htw-items-center");
      add_location(div1, file$c, 19, 4, 768);
      attr_dev(input, "class", "htw-range-input htw-appearance-none htw-border-0 htw-bg-transparent htw-cursor-pointer htw-relative htw-w-full htw-m-0 htw-text-gray-700");
      attr_dev(input, "type", "range");
      attr_dev(
        input,
        "min",
        /*min*/
        ctx[2]
      );
      attr_dev(
        input,
        "max",
        /*max*/
        ctx[3]
      );
      attr_dev(
        input,
        "step",
        /*step*/
        ctx[4]
      );
      add_location(input, file$c, 24, 4, 972);
      attr_dev(div2, "class", "htw-relative htw-w-full htw-flex htw-items-center");
      add_location(div2, file$c, 18, 3, 700);
      attr_dev(span1, "class", "htw-block htw-grow htw-max-w-full");
      add_location(span1, file$c, 17, 2, 648);
      attr_dev(span2, "class", "htw-grow htw-max-w-full htw-flex htw-items-center htw-gap-1");
      add_location(span2, file$c, 16, 1, 571);
      attr_dev(label, "class", "histoire-wrapper htw-p-2 hover:htw-bg-primary-100 dark:hover:htw-bg-primary-800 htw-flex htw-gap-2 htw-flex-wrap histoire-slider htw-items-center");
      add_location(label, file$c, 8, 0, 253);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, span0);
      append_dev(span0, t0);
      append_dev(span0, t1);
      append_dev(span0, t2);
      append_dev(span0, t3);
      append_dev(label, t4);
      append_dev(label, span2);
      append_dev(span2, span1);
      append_dev(span1, div2);
      append_dev(div2, div1);
      append_dev(div1, div0);
      append_dev(div2, t5);
      append_dev(div2, input);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "change",
            /*input_change_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input,
            "input",
            /*input_change_input_handler*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*title*/
      2)
        set_data_dev(
          t0,
          /*title*/
          ctx2[1]
        );
      if (dirty & /*value*/
      1)
        set_data_dev(
          t2,
          /*value*/
          ctx2[0]
        );
      if (dirty & /*min*/
      4) {
        attr_dev(
          input,
          "min",
          /*min*/
          ctx2[2]
        );
      }
      if (dirty & /*max*/
      8) {
        attr_dev(
          input,
          "max",
          /*max*/
          ctx2[3]
        );
      }
      if (dirty & /*step*/
      16) {
        attr_dev(
          input,
          "step",
          /*step*/
          ctx2[4]
        );
      }
      if (dirty & /*value*/
      1) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(label);
      mounted = false;
      run_all(dispose);
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
  validate_slots("Range", slots, []);
  let { title } = $$props;
  let { value = 50 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  $$self.$$.on_mount.push(function() {
    if (title === void 0 && !("title" in $$props || $$self.$$.bound[$$self.$$.props["title"]])) {
      console.warn("<Range> was created without expected prop 'title'");
    }
  });
  const writable_props = ["title", "value", "min", "max", "step"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Range> was created with unknown prop '${key2}'`);
  });
  function input_change_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(2, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(4, step = $$props2.step);
  };
  $$self.$capture_state = () => ({ title, value, min, max, step });
  $$self.$inject_state = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(2, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(4, step = $$props2.step);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, title, min, max, step, input_change_input_handler];
}
class Range extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      title: 1,
      value: 0,
      min: 2,
      max: 3,
      step: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Range",
      options,
      id: create_fragment$d.name
    });
  }
  get title() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get step() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set step(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const DNA_svelte_svelte_type_style_lang = "";
const file$b = "src/loading-animations/DNA.svelte";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[9] = i;
  const constants_0 = 100 - 100 / /*count*/
  (child_ctx[0] + 1) * /*i*/
  (child_ctx[9] + 1);
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_each_block$2(ctx) {
  let circle0;
  let circle0_cx_value;
  let circle1;
  let circle1_cx_value;
  const block = {
    c: function create() {
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      attr_dev(circle0, "cx", circle0_cx_value = /*gap*/
      ctx[7]);
      attr_dev(circle0, "class", "top s-7QWBfYnXqF98");
      set_style(
        circle0,
        "animation-delay",
        /*delay*/
        ctx[5] * /*i*/
        ctx[9] + "s"
      );
      add_location(circle0, file$b, 22, 3, 486);
      attr_dev(circle1, "cx", circle1_cx_value = /*gap*/
      ctx[7]);
      attr_dev(circle1, "class", "bottom s-7QWBfYnXqF98");
      set_style(
        circle1,
        "animation-delay",
        /*delay*/
        ctx[5] * /*i*/
        ctx[9] + "s"
      );
      add_location(circle1, file$b, 23, 3, 559);
    },
    m: function mount(target, anchor) {
      insert_dev(target, circle0, anchor);
      insert_dev(target, circle1, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1 && circle0_cx_value !== (circle0_cx_value = /*gap*/
      ctx2[7])) {
        attr_dev(circle0, "cx", circle0_cx_value);
      }
      if (dirty & /*delay*/
      32) {
        set_style(
          circle0,
          "animation-delay",
          /*delay*/
          ctx2[5] * /*i*/
          ctx2[9] + "s"
        );
      }
      if (dirty & /*count*/
      1 && circle1_cx_value !== (circle1_cx_value = /*gap*/
      ctx2[7])) {
        attr_dev(circle1, "cx", circle1_cx_value);
      }
      if (dirty & /*delay*/
      32) {
        set_style(
          circle1,
          "animation-delay",
          /*delay*/
          ctx2[5] * /*i*/
          ctx2[9] + "s"
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(circle0);
      if (detaching)
        detach_dev(circle1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$2.name,
    type: "each",
    source: "(21:2) {#each new Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$2(ctx) {
  let each_1_anchor;
  let each_value = new Array(
    /*count*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count, delay*/
      33) {
        each_value = new Array(
          /*count*/
          ctx2[0]
        );
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$2.name,
    type: "key",
    source: "(20:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$c(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___r = `${/*r*/
  ctx[1]}px`;
  let style___r2 = `${/*r2*/
  ctx[2]}px`;
  let style___top = `${(100 - /*height*/
  ctx[3]) / 2}px`;
  let style___bottom = `${100 - (100 - /*height*/
  ctx[3]) / 2}px`;
  let style___speed = `${/*speed*/
  ctx[4]}s`;
  let key_block = create_key_block$2(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--r", style___r);
      set_style(svg, "--r2", style___r2);
      set_style(svg, "--top", style___top);
      set_style(svg, "--bottom", style___bottom);
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$b, 11, 0, 199);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      key_block.m(svg, null);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*count*/
      1 && safe_not_equal(previous_key, previous_key = /*count*/
      ctx2[0])) {
        key_block.d(1);
        key_block = create_key_block$2(ctx2);
        key_block.c();
        key_block.m(svg, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*r*/
      2 && style___r !== (style___r = `${/*r*/
      ctx2[1]}px`)) {
        set_style(svg, "--r", style___r);
      }
      if (dirty & /*r2*/
      4 && style___r2 !== (style___r2 = `${/*r2*/
      ctx2[2]}px`)) {
        set_style(svg, "--r2", style___r2);
      }
      if (dirty & /*height*/
      8 && style___top !== (style___top = `${(100 - /*height*/
      ctx2[3]) / 2}px`)) {
        set_style(svg, "--top", style___top);
      }
      if (dirty & /*height*/
      8 && style___bottom !== (style___bottom = `${100 - (100 - /*height*/
      ctx2[3]) / 2}px`)) {
        set_style(svg, "--bottom", style___bottom);
      }
      if (dirty & /*speed*/
      16 && style___speed !== (style___speed = `${/*speed*/
      ctx2[4]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      key_block.d(detaching);
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
  let delay;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("DNA", slots, []);
  let { count = 10 } = $$props;
  let { r = 4 } = $$props;
  let { r2 = r / 1.75 } = $$props;
  let { height = 36 } = $$props;
  let { speed = 1 } = $$props;
  const writable_props = ["count", "r", "r2", "height", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<DNA> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("r" in $$props2)
      $$invalidate(1, r = $$props2.r);
    if ("r2" in $$props2)
      $$invalidate(2, r2 = $$props2.r2);
    if ("height" in $$props2)
      $$invalidate(3, height = $$props2.height);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ count, r, r2, height, speed, delay });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("r" in $$props2)
      $$invalidate(1, r = $$props2.r);
    if ("r2" in $$props2)
      $$invalidate(2, r2 = $$props2.r2);
    if ("height" in $$props2)
      $$invalidate(3, height = $$props2.height);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
    if ("delay" in $$props2)
      $$invalidate(5, delay = $$props2.delay);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(1, count));
    }
    if ($$self.$$.dirty & /*speed*/
    16) {
      $$invalidate(5, delay = speed / 5);
    }
  };
  return [count, r, r2, height, speed, delay];
}
class DNA extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      count: 0,
      r: 1,
      r2: 2,
      height: 3,
      speed: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DNA",
      options,
      id: create_fragment$c.name
    });
  }
  get count() {
    throw new Error("<DNA>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<DNA>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r() {
    throw new Error("<DNA>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r(value) {
    throw new Error("<DNA>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r2() {
    throw new Error("<DNA>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r2(value) {
    throw new Error("<DNA>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<DNA>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<DNA>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<DNA>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<DNA>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const DualBalls_svelte_svelte_type_style_lang = "";
const file$a = "src/loading-animations/DualBalls.svelte";
function create_fragment$b(ctx) {
  let div;
  let span0;
  let t;
  let span1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      div = element("div");
      span0 = element("span");
      t = space();
      span1 = element("span");
      attr_dev(span0, "class", "right s-CiWtR4yewo-P");
      add_location(span0, file$a, 6, 1, 206);
      attr_dev(span1, "class", "left s-CiWtR4yewo-P");
      add_location(span1, file$a, 7, 1, 230);
      attr_dev(div, "class", "s-CiWtR4yewo-P");
      toggle_class(
        div,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(div, "--speed", style___speed);
      add_location(div, file$a, 5, 0, 160);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span0);
      append_dev(div, t);
      append_dev(div, span1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*reverse*/
      2) {
        toggle_class(
          div,
          "reverse",
          /*reverse*/
          ctx2[1]
        );
      }
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(div, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
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
  validate_slots("DualBalls", slots, []);
  let { speed = 1 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<DualBalls> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ speed, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, reverse];
}
class DualBalls extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DualBalls",
      options,
      id: create_fragment$b.name
    });
  }
  get speed() {
    throw new Error("<DualBalls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<DualBalls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<DualBalls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<DualBalls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Grow_svelte_svelte_type_style_lang = "";
const file$9 = "src/loading-animations/Grow.svelte";
function create_fragment$a(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      attr_dev(path0, "class", "a s-jIzc-yBNqDae");
      attr_dev(path0, "d", "M50,0 l50,0 l0,50 l-50,0z");
      add_location(path0, file$9, 5, 1, 147);
      attr_dev(path1, "class", "b s-jIzc-yBNqDae");
      attr_dev(path1, "d", "M0,0 l50,0 l0,50 l-50,0z");
      add_location(path1, file$9, 6, 1, 197);
      attr_dev(path2, "class", "c s-jIzc-yBNqDae");
      attr_dev(path2, "d", "M50,50 l50,0 l0,50 l-50,0z");
      add_location(path2, file$9, 7, 1, 246);
      attr_dev(path3, "class", "d s-jIzc-yBNqDae");
      attr_dev(path3, "d", "M0,50 l50,0 l0,50 l-50,0z");
      add_location(path3, file$9, 8, 1, 297);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-jIzc-yBNqDae");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$9, 4, 0, 79);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*reverse*/
      2) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[1]
        );
      }
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Grow", slots, []);
  let { speed = 2 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Grow> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ speed, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, reverse];
}
class Grow extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Grow",
      options,
      id: create_fragment$a.name
    });
  }
  get speed() {
    throw new Error("<Grow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Grow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<Grow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<Grow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Heart_svelte_svelte_type_style_lang = "";
const file$8 = "src/loading-animations/Heart.svelte";
function create_fragment$9(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M50 25C55 0 100 0 100 35C100 60 70 70 50 95C30 70 0 60 0 35C0 0 45 0 50 25");
      attr_dev(path, "class", "s-llPuSh1ePMW-");
      add_location(path, file$8, 4, 1, 105);
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$8, 3, 0, 51);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Heart", slots, []);
  let { speed = 1 } = $$props;
  const writable_props = ["speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Heart> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ speed });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed];
}
class Heart extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { speed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Heart",
      options,
      id: create_fragment$9.name
    });
  }
  get speed() {
    throw new Error("<Heart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Heart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Hourglass_svelte_svelte_type_style_lang = "";
const file$7 = "src/loading-animations/Hourglass.svelte";
function create_fragment$8(ctx) {
  let svg;
  let mask;
  let path0;
  let g;
  let rect0;
  let rect1;
  let path1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      mask = svg_element("mask");
      path0 = svg_element("path");
      g = svg_element("g");
      rect0 = svg_element("rect");
      rect1 = svg_element("rect");
      path1 = svg_element("path");
      attr_dev(path0, "d", "m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z");
      attr_dev(path0, "fill", "white");
      add_location(path0, file$7, 5, 2, 127);
      attr_dev(mask, "id", "hg-mask");
      add_location(mask, file$7, 4, 1, 105);
      attr_dev(rect0, "class", "bottom s-oQykrzs9huaA");
      attr_dev(rect0, "x", "50");
      attr_dev(rect0, "y", "12");
      attr_dev(rect0, "mask", "url(#hg-mask)");
      add_location(rect0, file$7, 11, 2, 281);
      attr_dev(rect1, "class", "top s-oQykrzs9huaA");
      attr_dev(rect1, "x", "50");
      attr_dev(rect1, "y", "100");
      attr_dev(rect1, "mask", "url(#hg-mask)");
      add_location(rect1, file$7, 12, 2, 342);
      attr_dev(path1, "class", "hg s-oQykrzs9huaA");
      attr_dev(path1, "d", "m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z");
      add_location(path1, file$7, 13, 2, 401);
      attr_dev(g, "class", "s-oQykrzs9huaA");
      add_location(g, file$7, 10, 1, 275);
      attr_dev(svg, "viewBox", "0 0 200 200");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$7, 3, 0, 51);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, mask);
      append_dev(mask, path0);
      append_dev(svg, g);
      append_dev(g, rect0);
      append_dev(g, rect1);
      append_dev(g, path1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Hourglass", slots, []);
  let { speed = 1 } = $$props;
  const writable_props = ["speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Hourglass> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ speed });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed];
}
class Hourglass extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { speed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Hourglass",
      options,
      id: create_fragment$8.name
    });
  }
  get speed() {
    throw new Error("<Hourglass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Hourglass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Oscillate_svelte_svelte_type_style_lang = "";
const file$6 = "src/loading-animations/Oscillate.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function create_each_block_1(ctx) {
  let rect;
  let rect_x_value;
  const block = {
    c: function create() {
      rect = svg_element("rect");
      attr_dev(rect, "x", rect_x_value = /*gap*/
      ctx[5] - /*bar_width*/
      ctx[3] / 2 + /*width*/
      ctx[2] / /*count*/
      (ctx[0] - 1) * /*i*/
      ctx[8]);
      set_style(
        rect,
        "animation-delay",
        /*speed*/
        ctx[1] / 2 * /*delays*/
        ((ctx[4] - /*i*/
        ctx[8]) / /*delays*/
        ctx[4]) + "s"
      );
      attr_dev(rect, "class", "s-Qndu0-RekCte");
      add_location(rect, file$6, 15, 3, 370);
    },
    m: function mount(target, anchor) {
      insert_dev(target, rect, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*gap, bar_width, width, count*/
      45 && rect_x_value !== (rect_x_value = /*gap*/
      ctx2[5] - /*bar_width*/
      ctx2[3] / 2 + /*width*/
      ctx2[2] / /*count*/
      (ctx2[0] - 1) * /*i*/
      ctx2[8])) {
        attr_dev(rect, "x", rect_x_value);
      }
      if (dirty & /*speed, delays*/
      18) {
        set_style(
          rect,
          "animation-delay",
          /*speed*/
          ctx2[1] / 2 * /*delays*/
          ((ctx2[4] - /*i*/
          ctx2[8]) / /*delays*/
          ctx2[4]) + "s"
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(rect);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(15:2) {#each Array(delays) as _, i}",
    ctx
  });
  return block;
}
function create_each_block$1(ctx) {
  let rect;
  let rect_x_value;
  const block = {
    c: function create() {
      rect = svg_element("rect");
      attr_dev(rect, "x", rect_x_value = 100 - /*gap*/
      ctx[5] - /*bar_width*/
      ctx[3] / 2 - /*width*/
      ctx[2] / /*count*/
      (ctx[0] - 1) * /*i*/
      ctx[8]);
      set_style(
        rect,
        "animation-delay",
        /*speed*/
        ctx[1] / 2 * /*delays*/
        ((ctx[4] - /*i*/
        ctx[8]) / /*delays*/
        ctx[4]) + "s"
      );
      attr_dev(rect, "class", "s-Qndu0-RekCte");
      add_location(rect, file$6, 22, 3, 587);
    },
    m: function mount(target, anchor) {
      insert_dev(target, rect, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*gap, bar_width, width, count*/
      45 && rect_x_value !== (rect_x_value = 100 - /*gap*/
      ctx2[5] - /*bar_width*/
      ctx2[3] / 2 - /*width*/
      ctx2[2] / /*count*/
      (ctx2[0] - 1) * /*i*/
      ctx2[8])) {
        attr_dev(rect, "x", rect_x_value);
      }
      if (dirty & /*speed, delays*/
      18) {
        set_style(
          rect,
          "animation-delay",
          /*speed*/
          ctx2[1] / 2 * /*delays*/
          ((ctx2[4] - /*i*/
          ctx2[8]) / /*delays*/
          ctx2[4]) + "s"
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(rect);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(22:2) {#each Array(delays) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$1(ctx) {
  let rect;
  let rect_x_value;
  let each1_anchor;
  let each_value_1 = Array(
    /*delays*/
    ctx[4]
  );
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = Array(
    /*delays*/
    ctx[4]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      rect = svg_element("rect");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each1_anchor = empty();
      attr_dev(rect, "x", rect_x_value = 50 - /*bar_width*/
      ctx[3] / 2);
      attr_dev(rect, "class", "s-Qndu0-RekCte");
      add_location(rect, file$6, 20, 2, 520);
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(target, anchor);
      }
      insert_dev(target, rect, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_dev(target, each1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*gap, bar_width, width, count, speed, delays*/
      63) {
        each_value_1 = Array(
          /*delays*/
          ctx2[4]
        );
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(rect.parentNode, rect);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*bar_width*/
      8 && rect_x_value !== (rect_x_value = 50 - /*bar_width*/
      ctx2[3] / 2)) {
        attr_dev(rect, "x", rect_x_value);
      }
      if (dirty & /*gap, bar_width, width, count, speed, delays*/
      63) {
        each_value = Array(
          /*delays*/
          ctx2[4]
        );
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach_dev(rect);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$1.name,
    type: "key",
    source: "(14:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$7(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let style___bar_width = `${/*bar_width*/
  ctx[3]}px`;
  let key_block = create_key_block$1(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--bar-width", style___bar_width);
      add_location(svg, file$6, 12, 0, 234);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      key_block.m(svg, null);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*count*/
      1 && safe_not_equal(previous_key, previous_key = /*count*/
      ctx2[0])) {
        key_block.d(1);
        key_block = create_key_block$1(ctx2);
        key_block.c();
        key_block.m(svg, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*bar_width*/
      8 && style___bar_width !== (style___bar_width = `${/*bar_width*/
      ctx2[3]}px`)) {
        set_style(svg, "--bar-width", style___bar_width);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      key_block.d(detaching);
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
  let gap;
  let delays;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Oscillate", slots, []);
  let { speed = 2 } = $$props;
  let { count = 5 } = $$props;
  let { width = 50 } = $$props;
  let { bar_width = 6 } = $$props;
  const writable_props = ["speed", "count", "width", "bar_width"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Oscillate> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("width" in $$props2)
      $$invalidate(2, width = $$props2.width);
    if ("bar_width" in $$props2)
      $$invalidate(3, bar_width = $$props2.bar_width);
  };
  $$self.$capture_state = () => ({
    speed,
    count,
    width,
    bar_width,
    delays,
    gap
  });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("width" in $$props2)
      $$invalidate(2, width = $$props2.width);
    if ("bar_width" in $$props2)
      $$invalidate(3, bar_width = $$props2.bar_width);
    if ("delays" in $$props2)
      $$invalidate(4, delays = $$props2.delays);
    if ("gap" in $$props2)
      $$invalidate(5, gap = $$props2.gap);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(1, count) + (1 - count % 2));
    }
    if ($$self.$$.dirty & /*width*/
    4) {
      $$invalidate(5, gap = (100 - width) / 2);
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(4, delays = (count - 1) / 2);
    }
  };
  return [count, speed, width, bar_width, delays, gap];
}
class Oscillate extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      speed: 1,
      count: 0,
      width: 2,
      bar_width: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Oscillate",
      options,
      id: create_fragment$7.name
    });
  }
  get speed() {
    throw new Error("<Oscillate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Oscillate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get count() {
    throw new Error("<Oscillate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<Oscillate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get width() {
    throw new Error("<Oscillate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<Oscillate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bar_width() {
    throw new Error("<Oscillate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bar_width(value) {
    throw new Error("<Oscillate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Pie_svelte_svelte_type_style_lang = "";
const file$5 = "src/loading-animations/Pie.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  child_ctx[7] = i;
  return child_ctx;
}
function create_each_block(ctx) {
  let path;
  let path_d_value;
  let style_rotate = `${360 / /*count*/
  ctx[0] * /*i*/
  ctx[7]}deg`;
  const block = {
    c: function create() {
      path = svg_element("path");
      attr_dev(path, "d", path_d_value = "M50 0a50 50 0 01 " + /*x*/
      ctx[4] + " " + /*y*/
      ctx[3] + "L50 50");
      set_style(
        path,
        "animation-delay",
        /*speed*/
        ctx[2] / /*count*/
        ctx[0] * /*i*/
        ctx[7] + "s"
      );
      set_style(path, "filter", "hue-rotate(" + 360 / /*count*/
      ctx[0] * /*i*/
      ctx[7] + "deg)");
      attr_dev(path, "class", "s-kOWPUeWbOD6l");
      set_style(path, "rotate", style_rotate);
      add_location(path, file$5, 16, 3, 398);
    },
    m: function mount(target, anchor) {
      insert_dev(target, path, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*x, y*/
      24 && path_d_value !== (path_d_value = "M50 0a50 50 0 01 " + /*x*/
      ctx2[4] + " " + /*y*/
      ctx2[3] + "L50 50")) {
        attr_dev(path, "d", path_d_value);
      }
      if (dirty & /*speed, count*/
      5) {
        set_style(
          path,
          "animation-delay",
          /*speed*/
          ctx2[2] / /*count*/
          ctx2[0] * /*i*/
          ctx2[7] + "s"
        );
      }
      if (dirty & /*count*/
      1) {
        set_style(path, "filter", "hue-rotate(" + 360 / /*count*/
        ctx2[0] * /*i*/
        ctx2[7] + "deg)");
      }
      if (dirty & /*count*/
      1 && style_rotate !== (style_rotate = `${360 / /*count*/
      ctx2[0] * /*i*/
      ctx2[7]}deg`)) {
        set_style(path, "rotate", style_rotate);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(path);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let each_1_anchor;
  let each_value = Array(
    /*count*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*x, y, speed, count*/
      29) {
        each_value = Array(
          /*count*/
          ctx2[0]
        );
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(15:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[2]}s`;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--scale",
        /*scale*/
        ctx[1]
      );
      add_location(svg, file$5, 13, 0, 275);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      key_block.m(svg, null);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*count*/
      1 && safe_not_equal(previous_key, previous_key = /*count*/
      ctx2[0])) {
        key_block.d(1);
        key_block = create_key_block(ctx2);
        key_block.c();
        key_block.m(svg, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*speed*/
      4 && style___speed !== (style___speed = `${/*speed*/
      ctx2[2]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*scale*/
      2) {
        set_style(
          svg,
          "--scale",
          /*scale*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      key_block.d(detaching);
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
  let x;
  let y;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Pie", slots, []);
  let { count = 8 } = $$props;
  let { speed = 1 } = $$props;
  let { scale = 0.5 } = $$props;
  const writable_props = ["count", "speed", "scale"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Pie> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("scale" in $$props2)
      $$invalidate(1, scale = $$props2.scale);
  };
  $$self.$capture_state = () => ({ count, speed, scale, y, x });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("scale" in $$props2)
      $$invalidate(1, scale = $$props2.scale);
    if ("y" in $$props2)
      $$invalidate(3, y = $$props2.y);
    if ("x" in $$props2)
      $$invalidate(4, x = $$props2.x);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(2, count));
    }
    if ($$self.$$.dirty & /*scale*/
    2) {
      $$invalidate(1, scale = Math.min(Math.max(0.1, scale), 0.9));
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(4, x = Math.sin(2 * Math.PI / count) * 50);
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(3, y = 50 - Math.cos(2 * Math.PI / count) * 50);
    }
  };
  return [count, scale, speed, y, x];
}
class Pie extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { count: 0, speed: 2, scale: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pie",
      options,
      id: create_fragment$6.name
    });
  }
  get count() {
    throw new Error("<Pie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<Pie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Pie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Pie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Pie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Pie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Shrink_svelte_svelte_type_style_lang = "";
const file$4 = "src/loading-animations/Shrink.svelte";
function create_fragment$5(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      attr_dev(path0, "class", "a s-gr3efppLmlhZ");
      attr_dev(path0, "d", "M0,0 l100,0 l0,100 l-100,0z");
      add_location(path0, file$4, 5, 1, 147);
      attr_dev(path1, "class", "b s-gr3efppLmlhZ");
      attr_dev(path1, "d", "M50,-50 l50,0 l0,50 l-50,0z");
      add_location(path1, file$4, 6, 1, 199);
      attr_dev(path2, "class", "c s-gr3efppLmlhZ");
      attr_dev(path2, "d", "M0,-100 l50,0 l0,50 l-50,0z");
      add_location(path2, file$4, 7, 1, 251);
      attr_dev(path3, "class", "d s-gr3efppLmlhZ");
      attr_dev(path3, "d", "M50,-100 l50,0 l0,50 l-50,0z");
      add_location(path3, file$4, 8, 1, 303);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-gr3efppLmlhZ");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$4, 4, 0, 79);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*reverse*/
      2) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[1]
        );
      }
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Shrink", slots, []);
  let { speed = 2 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Shrink> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ speed, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, reverse];
}
class Shrink extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Shrink",
      options,
      id: create_fragment$5.name
    });
  }
  get speed() {
    throw new Error("<Shrink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Shrink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<Shrink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<Shrink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Slide_svelte_svelte_type_style_lang = "";
const file$3 = "src/loading-animations/Slide.svelte";
function create_fragment$4(ctx) {
  let svg;
  let defs;
  let g;
  let path0;
  let path1;
  let path2;
  let path3;
  let use0;
  let use1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      defs = svg_element("defs");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      use0 = svg_element("use");
      use1 = svg_element("use");
      attr_dev(path0, "d", "M33.33 0.5L66.66 20.5L66.66 30.5L33.33 10.5L33.33 0.5Z");
      attr_dev(path0, "fill-opacity", "0.4");
      add_location(path0, file$3, 7, 3, 193);
      attr_dev(path1, "d", "M0 30.5L33.33 10.5V0.5L0 20.5V30.5Z");
      add_location(path1, file$3, 8, 3, 283);
      attr_dev(path2, "d", "M0 20.5L33.33 40.5L33.33 50.5L0 30.5L0 20.5Z");
      attr_dev(path2, "fill-opacity", "0.4");
      add_location(path2, file$3, 9, 3, 335);
      attr_dev(path3, "d", "M33.33 50.5L66.66 30.5V20.5L33.33 40.5V50.5Z");
      add_location(path3, file$3, 10, 3, 415);
      attr_dev(g, "id", "rect");
      add_location(g, file$3, 6, 2, 176);
      add_location(defs, file$3, 5, 1, 167);
      attr_dev(use0, "class", "a s-LizT1KLC5pZN");
      attr_dev(use0, "href", "#rect");
      add_location(use0, file$3, 13, 1, 490);
      attr_dev(use1, "class", "b s-LizT1KLC5pZN");
      attr_dev(use1, "href", "#rect");
      add_location(use1, file$3, 14, 1, 522);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "currentcolor");
      attr_dev(svg, "class", "s-LizT1KLC5pZN");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$3, 4, 0, 79);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, defs);
      append_dev(defs, g);
      append_dev(g, path0);
      append_dev(g, path1);
      append_dev(g, path2);
      append_dev(g, path3);
      append_dev(svg, use0);
      append_dev(svg, use1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*reverse*/
      2) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[1]
        );
      }
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Slide", slots, []);
  let { speed = 4 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Slide> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ speed, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, reverse];
}
class Slide extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Slide",
      options,
      id: create_fragment$4.name
    });
  }
  get speed() {
    throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Spin_svelte_svelte_type_style_lang = "";
const file$2 = "src/loading-animations/Spin.svelte";
function create_fragment$3(ctx) {
  let svg;
  let rect0;
  let rect1;
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let style___stroke = `${/*border_width*/
  ctx[2]}px`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      rect0 = svg_element("rect");
      rect1 = svg_element("rect");
      attr_dev(rect0, "class", "right s-E06QqMFOUiPA");
      attr_dev(rect0, "x", "15");
      attr_dev(rect0, "y", "15");
      attr_dev(rect0, "width", "70");
      attr_dev(rect0, "height", "70");
      add_location(rect0, file$2, 13, 1, 268);
      attr_dev(rect1, "class", "left s-E06QqMFOUiPA");
      attr_dev(rect1, "x", "15");
      attr_dev(rect1, "y", "15");
      attr_dev(rect1, "width", "70");
      attr_dev(rect1, "height", "70");
      add_location(rect1, file$2, 14, 1, 329);
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--scale",
        /*scale*/
        ctx[0]
      );
      set_style(svg, "--stroke", style___stroke);
      add_location(svg, file$2, 7, 0, 153);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, rect0);
      append_dev(svg, rect1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*scale*/
      1) {
        set_style(
          svg,
          "--scale",
          /*scale*/
          ctx2[0]
        );
      }
      if (dirty & /*border_width*/
      4 && style___stroke !== (style___stroke = `${/*border_width*/
      ctx2[2]}px`)) {
        set_style(svg, "--stroke", style___stroke);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("Spin", slots, []);
  let { speed = 3 } = $$props;
  let { scale = 0.25 } = $$props;
  let { border_width = 0 } = $$props;
  const writable_props = ["speed", "scale", "border_width"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Spin> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("scale" in $$props2)
      $$invalidate(0, scale = $$props2.scale);
    if ("border_width" in $$props2)
      $$invalidate(2, border_width = $$props2.border_width);
  };
  $$self.$capture_state = () => ({ speed, scale, border_width });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("scale" in $$props2)
      $$invalidate(0, scale = $$props2.scale);
    if ("border_width" in $$props2)
      $$invalidate(2, border_width = $$props2.border_width);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*scale*/
    1) {
      $$invalidate(0, scale = Math.max(0.1, Math.min(1, scale)));
    }
  };
  return [scale, speed, border_width];
}
class Spin2 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { speed: 1, scale: 0, border_width: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin",
      options,
      id: create_fragment$3.name
    });
  }
  get speed() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get border_width() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set border_width(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SpinCircles_svelte_svelte_type_style_lang = "";
const file$1 = "src/loading-animations/SpinCircles.svelte";
function create_fragment$2(ctx) {
  let svg;
  let g;
  let circle0;
  let circle1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      attr_dev(circle0, "class", "top s-sCtBIHGA6lSe");
      attr_dev(circle0, "r", "10");
      attr_dev(circle0, "cx", "50");
      attr_dev(circle0, "cy", "90");
      add_location(circle0, file$1, 5, 2, 131);
      attr_dev(circle1, "class", "bottom s-sCtBIHGA6lSe");
      attr_dev(circle1, "r", "10");
      attr_dev(circle1, "cx", "50");
      attr_dev(circle1, "cy", "90");
      add_location(circle1, file$1, 6, 2, 179);
      attr_dev(g, "class", "s-sCtBIHGA6lSe");
      add_location(g, file$1, 4, 1, 125);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "currentcolor");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$1, 3, 0, 51);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      append_dev(g, circle0);
      append_dev(g, circle1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("SpinCircles", slots, []);
  let { speed = 1 } = $$props;
  const writable_props = ["speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SpinCircles> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ speed });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed];
}
class SpinCircles extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { speed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SpinCircles",
      options,
      id: create_fragment$2.name
    });
  }
  get speed() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SpinGlass_svelte_svelte_type_style_lang = "";
const file = "src/loading-animations/SpinGlass.svelte";
function create_fragment$1(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M50 0v100a50 50 0 0050-50H0a50 50 0 0150-50z");
      attr_dev(path, "class", "s-tgqx5wfiLXO3");
      add_location(path, file, 6, 1, 203);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-tgqx5wfiLXO3");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[2]
      );
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--rotations",
        /*rotations*/
        ctx[1]
      );
      add_location(svg, file, 5, 0, 105);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*reverse*/
      4) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[2]
        );
      }
      if (dirty & /*speed*/
      1 && style___speed !== (style___speed = `${/*speed*/
      ctx2[0]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*rotations*/
      2) {
        set_style(
          svg,
          "--rotations",
          /*rotations*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
  validate_slots("SpinGlass", slots, []);
  let { speed = 1 } = $$props;
  let { rotations = 3 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "rotations", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SpinGlass> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("rotations" in $$props2)
      $$invalidate(1, rotations = $$props2.rotations);
    if ("reverse" in $$props2)
      $$invalidate(2, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ speed, rotations, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("rotations" in $$props2)
      $$invalidate(1, rotations = $$props2.rotations);
    if ("reverse" in $$props2)
      $$invalidate(2, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, rotations, reverse];
}
class SpinGlass extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { speed: 0, rotations: 1, reverse: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SpinGlass",
      options,
      id: create_fragment$1.name
    });
  }
  get speed() {
    throw new Error("<SpinGlass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<SpinGlass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotations() {
    throw new Error("<SpinGlass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotations(value) {
    throw new Error("<SpinGlass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<SpinGlass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<SpinGlass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_12(ctx) {
  let hourglass;
  let updating_speed;
  let current;
  function hourglass_speed_binding(value) {
    ctx[31](value);
  }
  let hourglass_props = {};
  if (
    /*hourglass_speed*/
    ctx[29] !== void 0
  ) {
    hourglass_props.speed = /*hourglass_speed*/
    ctx[29];
  }
  hourglass = new Hourglass({ props: hourglass_props, $$inline: true });
  binding_callbacks.push(() => bind(hourglass, "speed", hourglass_speed_binding));
  const block = {
    c: function create() {
      create_component(hourglass.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hourglass, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hourglass_changes = {};
      if (!updating_speed && dirty[0] & /*hourglass_speed*/
      536870912) {
        updating_speed = true;
        hourglass_changes.speed = /*hourglass_speed*/
        ctx2[29];
        add_flush_callback(() => updating_speed = false);
      }
      hourglass.$set(hourglass_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hourglass.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hourglass.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hourglass, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_12.name,
    type: "slot",
    source: '(47:1) <Hst.Variant title=\\"Hourglass\\" icon=\\"ic:round-hourglass-bottom\\">',
    ctx
  });
  return block;
}
function create_controls_slot_11(ctx) {
  let range;
  let updating_value;
  let current;
  function range_value_binding(value) {
    ctx[30](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*hourglass_speed*/
    ctx[29] !== void 0
  ) {
    range_props.value = /*hourglass_speed*/
    ctx[29];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*hourglass_speed*/
      536870912) {
        updating_value = true;
        range_changes.value = /*hourglass_speed*/
        ctx2[29];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_11.name,
    type: "slot",
    source: '(49:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_11(ctx) {
  let heart;
  let updating_speed;
  let current;
  function heart_speed_binding(value) {
    ctx[33](value);
  }
  let heart_props = {};
  if (
    /*heart_speed*/
    ctx[28] !== void 0
  ) {
    heart_props.speed = /*heart_speed*/
    ctx[28];
  }
  heart = new Heart({ props: heart_props, $$inline: true });
  binding_callbacks.push(() => bind(heart, "speed", heart_speed_binding));
  const block = {
    c: function create() {
      create_component(heart.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(heart, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const heart_changes = {};
      if (!updating_speed && dirty[0] & /*heart_speed*/
      268435456) {
        updating_speed = true;
        heart_changes.speed = /*heart_speed*/
        ctx2[28];
        add_flush_callback(() => updating_speed = false);
      }
      heart.$set(heart_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(heart.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(heart.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(heart, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_11.name,
    type: "slot",
    source: '(53:1) <Hst.Variant title=\\"Heart\\" icon=\\"material-symbols:favorite\\">',
    ctx
  });
  return block;
}
function create_controls_slot_10(ctx) {
  let range;
  let updating_value;
  let current;
  function range_value_binding_1(value) {
    ctx[32](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*heart_speed*/
    ctx[28] !== void 0
  ) {
    range_props.value = /*heart_speed*/
    ctx[28];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_1));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*heart_speed*/
      268435456) {
        updating_value = true;
        range_changes.value = /*heart_speed*/
        ctx2[28];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_10.name,
    type: "slot",
    source: '(55:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_10(ctx) {
  let pie;
  let updating_count;
  let updating_speed;
  let updating_scale;
  let current;
  function pie_count_binding(value) {
    ctx[37](value);
  }
  function pie_speed_binding(value) {
    ctx[38](value);
  }
  function pie_scale_binding(value) {
    ctx[39](value);
  }
  let pie_props = {};
  if (
    /*pie_count*/
    ctx[25] !== void 0
  ) {
    pie_props.count = /*pie_count*/
    ctx[25];
  }
  if (
    /*pie_speed*/
    ctx[26] !== void 0
  ) {
    pie_props.speed = /*pie_speed*/
    ctx[26];
  }
  if (
    /*pie_scale*/
    ctx[27] !== void 0
  ) {
    pie_props.scale = /*pie_scale*/
    ctx[27];
  }
  pie = new Pie({ props: pie_props, $$inline: true });
  binding_callbacks.push(() => bind(pie, "count", pie_count_binding));
  binding_callbacks.push(() => bind(pie, "speed", pie_speed_binding));
  binding_callbacks.push(() => bind(pie, "scale", pie_scale_binding));
  const block = {
    c: function create() {
      create_component(pie.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(pie, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const pie_changes = {};
      if (!updating_count && dirty[0] & /*pie_count*/
      33554432) {
        updating_count = true;
        pie_changes.count = /*pie_count*/
        ctx2[25];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_speed && dirty[0] & /*pie_speed*/
      67108864) {
        updating_speed = true;
        pie_changes.speed = /*pie_speed*/
        ctx2[26];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_scale && dirty[0] & /*pie_scale*/
      134217728) {
        updating_scale = true;
        pie_changes.scale = /*pie_scale*/
        ctx2[27];
        add_flush_callback(() => updating_scale = false);
      }
      pie.$set(pie_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(pie.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(pie.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(pie, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_10.name,
    type: "slot",
    source: '(59:1) <Hst.Variant title=\\"Pie\\" icon=\\"game-icons:swirled-shell\\">',
    ctx
  });
  return block;
}
function create_controls_slot_9(ctx) {
  let hst_slider;
  let updating_value;
  let t0;
  let range0;
  let updating_value_1;
  let t1;
  let range1;
  let updating_value_2;
  let current;
  function hst_slider_value_binding(value) {
    ctx[34](value);
  }
  let hst_slider_props = { title: "Count", min: 2, max: 50 };
  if (
    /*pie_count*/
    ctx[25] !== void 0
  ) {
    hst_slider_props.value = /*pie_count*/
    ctx[25];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  function range0_value_binding(value) {
    ctx[35](value);
  }
  let range0_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*pie_speed*/
    ctx[26] !== void 0
  ) {
    range0_props.value = /*pie_speed*/
    ctx[26];
  }
  range0 = new Range({ props: range0_props, $$inline: true });
  binding_callbacks.push(() => bind(range0, "value", range0_value_binding));
  function range1_value_binding(value) {
    ctx[36](value);
  }
  let range1_props = {
    title: "Scale",
    min: 0.1,
    max: 0.9,
    step: 0.1
  };
  if (
    /*pie_scale*/
    ctx[27] !== void 0
  ) {
    range1_props.value = /*pie_scale*/
    ctx[27];
  }
  range1 = new Range({ props: range1_props, $$inline: true });
  binding_callbacks.push(() => bind(range1, "value", range1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t0 = space();
      create_component(range0.$$.fragment);
      t1 = space();
      create_component(range1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(range0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(range1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*pie_count*/
      33554432) {
        updating_value = true;
        hst_slider_changes.value = /*pie_count*/
        ctx2[25];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const range0_changes = {};
      if (!updating_value_1 && dirty[0] & /*pie_speed*/
      67108864) {
        updating_value_1 = true;
        range0_changes.value = /*pie_speed*/
        ctx2[26];
        add_flush_callback(() => updating_value_1 = false);
      }
      range0.$set(range0_changes);
      const range1_changes = {};
      if (!updating_value_2 && dirty[0] & /*pie_scale*/
      134217728) {
        updating_value_2 = true;
        range1_changes.value = /*pie_scale*/
        ctx2[27];
        add_flush_callback(() => updating_value_2 = false);
      }
      range1.$set(range1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(range0.$$.fragment, local);
      transition_in(range1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(range0.$$.fragment, local);
      transition_out(range1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_slider, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(range0, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(range1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_9.name,
    type: "slot",
    source: '(61:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_9(ctx) {
  let dna;
  let updating_count;
  let updating_r;
  let updating_r2;
  let updating_height;
  let updating_speed;
  let current;
  function dna_count_binding(value) {
    ctx[45](value);
  }
  function dna_r_binding(value) {
    ctx[46](value);
  }
  function dna_r2_binding(value) {
    ctx[47](value);
  }
  function dna_height_binding(value) {
    ctx[48](value);
  }
  function dna_speed_binding(value) {
    ctx[49](value);
  }
  let dna_props = {};
  if (
    /*dna_count*/
    ctx[20] !== void 0
  ) {
    dna_props.count = /*dna_count*/
    ctx[20];
  }
  if (
    /*dna_r*/
    ctx[21] !== void 0
  ) {
    dna_props.r = /*dna_r*/
    ctx[21];
  }
  if (
    /*dna_r2*/
    ctx[22] !== void 0
  ) {
    dna_props.r2 = /*dna_r2*/
    ctx[22];
  }
  if (
    /*dna_height*/
    ctx[23] !== void 0
  ) {
    dna_props.height = /*dna_height*/
    ctx[23];
  }
  if (
    /*dna_speed*/
    ctx[24] !== void 0
  ) {
    dna_props.speed = /*dna_speed*/
    ctx[24];
  }
  dna = new DNA({ props: dna_props, $$inline: true });
  binding_callbacks.push(() => bind(dna, "count", dna_count_binding));
  binding_callbacks.push(() => bind(dna, "r", dna_r_binding));
  binding_callbacks.push(() => bind(dna, "r2", dna_r2_binding));
  binding_callbacks.push(() => bind(dna, "height", dna_height_binding));
  binding_callbacks.push(() => bind(dna, "speed", dna_speed_binding));
  const block = {
    c: function create() {
      create_component(dna.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(dna, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const dna_changes = {};
      if (!updating_count && dirty[0] & /*dna_count*/
      1048576) {
        updating_count = true;
        dna_changes.count = /*dna_count*/
        ctx2[20];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_r && dirty[0] & /*dna_r*/
      2097152) {
        updating_r = true;
        dna_changes.r = /*dna_r*/
        ctx2[21];
        add_flush_callback(() => updating_r = false);
      }
      if (!updating_r2 && dirty[0] & /*dna_r2*/
      4194304) {
        updating_r2 = true;
        dna_changes.r2 = /*dna_r2*/
        ctx2[22];
        add_flush_callback(() => updating_r2 = false);
      }
      if (!updating_height && dirty[0] & /*dna_height*/
      8388608) {
        updating_height = true;
        dna_changes.height = /*dna_height*/
        ctx2[23];
        add_flush_callback(() => updating_height = false);
      }
      if (!updating_speed && dirty[0] & /*dna_speed*/
      16777216) {
        updating_speed = true;
        dna_changes.speed = /*dna_speed*/
        ctx2[24];
        add_flush_callback(() => updating_speed = false);
      }
      dna.$set(dna_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(dna.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(dna.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(dna, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_9.name,
    type: "slot",
    source: '(67:1) <Hst.Variant title=\\"DNA\\" icon=\\"tabler:dna\\">',
    ctx
  });
  return block;
}
function create_controls_slot_8(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_slider2;
  let updating_value_2;
  let t2;
  let hst_slider3;
  let updating_value_3;
  let t3;
  let range;
  let updating_value_4;
  let current;
  function hst_slider0_value_binding(value) {
    ctx[40](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 50 };
  if (
    /*dna_count*/
    ctx[20] !== void 0
  ) {
    hst_slider0_props.value = /*dna_count*/
    ctx[20];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[41](value);
  }
  let hst_slider1_props = { title: "Height", min: 0, max: 100 };
  if (
    /*dna_height*/
    ctx[23] !== void 0
  ) {
    hst_slider1_props.value = /*dna_height*/
    ctx[23];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  function hst_slider2_value_binding(value) {
    ctx[42](value);
  }
  let hst_slider2_props = { title: "Radius from", min: 1, max: 10 };
  if (
    /*dna_r*/
    ctx[21] !== void 0
  ) {
    hst_slider2_props.value = /*dna_r*/
    ctx[21];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding));
  function hst_slider3_value_binding(value) {
    ctx[43](value);
  }
  let hst_slider3_props = { title: "Radius to", min: 1, max: 10 };
  if (
    /*dna_r2*/
    ctx[22] !== void 0
  ) {
    hst_slider3_props.value = /*dna_r2*/
    ctx[22];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding));
  function range_value_binding_2(value) {
    ctx[44](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dna_speed*/
    ctx[24] !== void 0
  ) {
    range_props.value = /*dna_speed*/
    ctx[24];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_2));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
      t2 = space();
      create_component(hst_slider3.$$.fragment);
      t3 = space();
      create_component(range.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_slider3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(range, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*dna_count*/
      1048576) {
        updating_value = true;
        hst_slider0_changes.value = /*dna_count*/
        ctx2[20];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*dna_height*/
      8388608) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*dna_height*/
        ctx2[23];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[0] & /*dna_r*/
      2097152) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*dna_r*/
        ctx2[21];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty[0] & /*dna_r2*/
      4194304) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*dna_r2*/
        ctx2[22];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider3.$set(hst_slider3_changes);
      const range_changes = {};
      if (!updating_value_4 && dirty[0] & /*dna_speed*/
      16777216) {
        updating_value_4 = true;
        range_changes.value = /*dna_speed*/
        ctx2[24];
        add_flush_callback(() => updating_value_4 = false);
      }
      range.$set(range_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_slider3.$$.fragment, local);
      transition_in(range.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_slider3.$$.fragment, local);
      transition_out(range.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_slider0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_slider1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_slider2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_slider3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(range, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_8.name,
    type: "slot",
    source: '(75:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_8(ctx) {
  let dualballs;
  let updating_speed;
  let updating_reverse;
  let current;
  function dualballs_speed_binding(value) {
    ctx[52](value);
  }
  function dualballs_reverse_binding(value) {
    ctx[53](value);
  }
  let dualballs_props = {};
  if (
    /*dualBalls_speed*/
    ctx[18] !== void 0
  ) {
    dualballs_props.speed = /*dualBalls_speed*/
    ctx[18];
  }
  if (
    /*dualBalls_reverse*/
    ctx[19] !== void 0
  ) {
    dualballs_props.reverse = /*dualBalls_reverse*/
    ctx[19];
  }
  dualballs = new DualBalls({ props: dualballs_props, $$inline: true });
  binding_callbacks.push(() => bind(dualballs, "speed", dualballs_speed_binding));
  binding_callbacks.push(() => bind(dualballs, "reverse", dualballs_reverse_binding));
  const block = {
    c: function create() {
      create_component(dualballs.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(dualballs, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const dualballs_changes = {};
      if (!updating_speed && dirty[0] & /*dualBalls_speed*/
      262144) {
        updating_speed = true;
        dualballs_changes.speed = /*dualBalls_speed*/
        ctx2[18];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*dualBalls_reverse*/
      524288) {
        updating_reverse = true;
        dualballs_changes.reverse = /*dualBalls_reverse*/
        ctx2[19];
        add_flush_callback(() => updating_reverse = false);
      }
      dualballs.$set(dualballs_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(dualballs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(dualballs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(dualballs, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_8.name,
    type: "slot",
    source: '(83:1) <Hst.Variant title=\\"DualBalls\\" icon=\\"ic:baseline-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot_7(ctx) {
  let range;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function range_value_binding_3(value) {
    ctx[50](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dualBalls_speed*/
    ctx[18] !== void 0
  ) {
    range_props.value = /*dualBalls_speed*/
    ctx[18];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_3));
  function hst_checkbox_value_binding(value) {
    ctx[51](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*dualBalls_reverse*/
    ctx[19] !== void 0
  ) {
    hst_checkbox_props.value = /*dualBalls_reverse*/
    ctx[19];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*dualBalls_speed*/
      262144) {
        updating_value = true;
        range_changes.value = /*dualBalls_speed*/
        ctx2[18];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*dualBalls_reverse*/
      524288) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*dualBalls_reverse*/
        ctx2[19];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_7.name,
    type: "slot",
    source: '(85:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_7(ctx) {
  let spinglass;
  let updating_rotations;
  let updating_speed;
  let updating_reverse;
  let current;
  function spinglass_rotations_binding(value) {
    ctx[57](value);
  }
  function spinglass_speed_binding(value) {
    ctx[58](value);
  }
  function spinglass_reverse_binding(value) {
    ctx[59](value);
  }
  let spinglass_props = {};
  if (
    /*spinGlass_rotations*/
    ctx[16] !== void 0
  ) {
    spinglass_props.rotations = /*spinGlass_rotations*/
    ctx[16];
  }
  if (
    /*spinGlass_speed*/
    ctx[15] !== void 0
  ) {
    spinglass_props.speed = /*spinGlass_speed*/
    ctx[15];
  }
  if (
    /*spinGlass_reverse*/
    ctx[17] !== void 0
  ) {
    spinglass_props.reverse = /*spinGlass_reverse*/
    ctx[17];
  }
  spinglass = new SpinGlass({ props: spinglass_props, $$inline: true });
  binding_callbacks.push(() => bind(spinglass, "rotations", spinglass_rotations_binding));
  binding_callbacks.push(() => bind(spinglass, "speed", spinglass_speed_binding));
  binding_callbacks.push(() => bind(spinglass, "reverse", spinglass_reverse_binding));
  const block = {
    c: function create() {
      create_component(spinglass.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(spinglass, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const spinglass_changes = {};
      if (!updating_rotations && dirty[0] & /*spinGlass_rotations*/
      65536) {
        updating_rotations = true;
        spinglass_changes.rotations = /*spinGlass_rotations*/
        ctx2[16];
        add_flush_callback(() => updating_rotations = false);
      }
      if (!updating_speed && dirty[0] & /*spinGlass_speed*/
      32768) {
        updating_speed = true;
        spinglass_changes.speed = /*spinGlass_speed*/
        ctx2[15];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*spinGlass_reverse*/
      131072) {
        updating_reverse = true;
        spinglass_changes.reverse = /*spinGlass_reverse*/
        ctx2[17];
        add_flush_callback(() => updating_reverse = false);
      }
      spinglass.$set(spinglass_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(spinglass.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spinglass.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spinglass, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7.name,
    type: "slot",
    source: '(90:1) <Hst.Variant title=\\"Spin Glass\\" icon=\\"ph:hourglass-fill\\">',
    ctx
  });
  return block;
}
function create_controls_slot_6(ctx) {
  let hst_slider;
  let updating_value;
  let t0;
  let range;
  let updating_value_1;
  let t1;
  let hst_checkbox;
  let updating_value_2;
  let current;
  function hst_slider_value_binding_1(value) {
    ctx[54](value);
  }
  let hst_slider_props = { title: "Rotations", min: 1, max: 10 };
  if (
    /*spinGlass_rotations*/
    ctx[16] !== void 0
  ) {
    hst_slider_props.value = /*spinGlass_rotations*/
    ctx[16];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_1));
  function range_value_binding_4(value) {
    ctx[55](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spinGlass_speed*/
    ctx[15] !== void 0
  ) {
    range_props.value = /*spinGlass_speed*/
    ctx[15];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_4));
  function hst_checkbox_value_binding_1(value) {
    ctx[56](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*spinGlass_reverse*/
    ctx[17] !== void 0
  ) {
    hst_checkbox_props.value = /*spinGlass_reverse*/
    ctx[17];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_1));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t0 = space();
      create_component(range.$$.fragment);
      t1 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(range, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*spinGlass_rotations*/
      65536) {
        updating_value = true;
        hst_slider_changes.value = /*spinGlass_rotations*/
        ctx2[16];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const range_changes = {};
      if (!updating_value_1 && dirty[0] & /*spinGlass_speed*/
      32768) {
        updating_value_1 = true;
        range_changes.value = /*spinGlass_speed*/
        ctx2[15];
        add_flush_callback(() => updating_value_1 = false);
      }
      range.$set(range_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_2 && dirty[0] & /*spinGlass_reverse*/
      131072) {
        updating_value_2 = true;
        hst_checkbox_changes.value = /*spinGlass_reverse*/
        ctx2[17];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(range.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(range.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_slider, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(range, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_6.name,
    type: "slot",
    source: '(96:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_6(ctx) {
  let spincircles;
  let updating_speed;
  let current;
  function spincircles_speed_binding(value) {
    ctx[61](value);
  }
  let spincircles_props = {};
  if (
    /*spinCircles_speed*/
    ctx[14] !== void 0
  ) {
    spincircles_props.speed = /*spinCircles_speed*/
    ctx[14];
  }
  spincircles = new SpinCircles({ props: spincircles_props, $$inline: true });
  binding_callbacks.push(() => bind(spincircles, "speed", spincircles_speed_binding));
  const block = {
    c: function create() {
      create_component(spincircles.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(spincircles, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const spincircles_changes = {};
      if (!updating_speed && dirty[0] & /*spinCircles_speed*/
      16384) {
        updating_speed = true;
        spincircles_changes.speed = /*spinCircles_speed*/
        ctx2[14];
        add_flush_callback(() => updating_speed = false);
      }
      spincircles.$set(spincircles_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(spincircles.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spincircles.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spincircles, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6.name,
    type: "slot",
    source: '(102:1) <Hst.Variant title=\\"Spin Circles\\" icon=\\"ic:baseline-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot_5(ctx) {
  let range;
  let updating_value;
  let current;
  function range_value_binding_5(value) {
    ctx[60](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spinCircles_speed*/
    ctx[14] !== void 0
  ) {
    range_props.value = /*spinCircles_speed*/
    ctx[14];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_5));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*spinCircles_speed*/
      16384) {
        updating_value = true;
        range_changes.value = /*spinCircles_speed*/
        ctx2[14];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_5.name,
    type: "slot",
    source: '(104:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let oscillate;
  let updating_speed;
  let updating_count;
  let updating_width;
  let updating_bar_width;
  let current;
  function oscillate_speed_binding(value) {
    ctx[66](value);
  }
  function oscillate_count_binding(value) {
    ctx[67](value);
  }
  function oscillate_width_binding(value) {
    ctx[68](value);
  }
  function oscillate_bar_width_binding(value) {
    ctx[69](value);
  }
  let oscillate_props = {};
  if (
    /*oscillate_speed*/
    ctx[8] !== void 0
  ) {
    oscillate_props.speed = /*oscillate_speed*/
    ctx[8];
  }
  if (
    /*oscillate_count*/
    ctx[9] !== void 0
  ) {
    oscillate_props.count = /*oscillate_count*/
    ctx[9];
  }
  if (
    /*oscillate_width*/
    ctx[10] !== void 0
  ) {
    oscillate_props.width = /*oscillate_width*/
    ctx[10];
  }
  if (
    /*oscillate_bar_width*/
    ctx[11] !== void 0
  ) {
    oscillate_props.bar_width = /*oscillate_bar_width*/
    ctx[11];
  }
  oscillate = new Oscillate({ props: oscillate_props, $$inline: true });
  binding_callbacks.push(() => bind(oscillate, "speed", oscillate_speed_binding));
  binding_callbacks.push(() => bind(oscillate, "count", oscillate_count_binding));
  binding_callbacks.push(() => bind(oscillate, "width", oscillate_width_binding));
  binding_callbacks.push(() => bind(oscillate, "bar_width", oscillate_bar_width_binding));
  const block = {
    c: function create() {
      create_component(oscillate.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(oscillate, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const oscillate_changes = {};
      if (!updating_speed && dirty[0] & /*oscillate_speed*/
      256) {
        updating_speed = true;
        oscillate_changes.speed = /*oscillate_speed*/
        ctx2[8];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[0] & /*oscillate_count*/
      512) {
        updating_count = true;
        oscillate_changes.count = /*oscillate_count*/
        ctx2[9];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_width && dirty[0] & /*oscillate_width*/
      1024) {
        updating_width = true;
        oscillate_changes.width = /*oscillate_width*/
        ctx2[10];
        add_flush_callback(() => updating_width = false);
      }
      if (!updating_bar_width && dirty[0] & /*oscillate_bar_width*/
      2048) {
        updating_bar_width = true;
        oscillate_changes.bar_width = /*oscillate_bar_width*/
        ctx2[11];
        add_flush_callback(() => updating_bar_width = false);
      }
      oscillate.$set(oscillate_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(oscillate.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(oscillate.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(oscillate, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5.name,
    type: "slot",
    source: '(108:1) <Hst.Variant title=\\"Oscillate\\" icon=\\"cil:audio-spectrum\\">',
    ctx
  });
  return block;
}
function create_controls_slot_4(ctx) {
  let range0;
  let updating_value;
  let t0;
  let range1;
  let updating_value_1;
  let t1;
  let hst_slider0;
  let updating_value_2;
  let t2;
  let hst_slider1;
  let updating_value_3;
  let current;
  function range0_value_binding_1(value) {
    ctx[62](value);
  }
  let range0_props = { title: "Count", min: 1, max: 21, step: 2 };
  if (
    /*oscillate_count*/
    ctx[9] !== void 0
  ) {
    range0_props.value = /*oscillate_count*/
    ctx[9];
  }
  range0 = new Range({ props: range0_props, $$inline: true });
  binding_callbacks.push(() => bind(range0, "value", range0_value_binding_1));
  function range1_value_binding_1(value) {
    ctx[63](value);
  }
  let range1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*oscillate_speed*/
    ctx[8] !== void 0
  ) {
    range1_props.value = /*oscillate_speed*/
    ctx[8];
  }
  range1 = new Range({ props: range1_props, $$inline: true });
  binding_callbacks.push(() => bind(range1, "value", range1_value_binding_1));
  function hst_slider0_value_binding_1(value) {
    ctx[64](value);
  }
  let hst_slider0_props = { title: "Width", min: 1, max: 100 };
  if (
    /*oscillate_width*/
    ctx[10] !== void 0
  ) {
    hst_slider0_props.value = /*oscillate_width*/
    ctx[10];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_1));
  function hst_slider1_value_binding_1(value) {
    ctx[65](value);
  }
  let hst_slider1_props = { title: "Bar Width", min: 2, max: 12 };
  if (
    /*oscillate_bar_width*/
    ctx[11] !== void 0
  ) {
    hst_slider1_props.value = /*oscillate_bar_width*/
    ctx[11];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_1));
  const block = {
    c: function create() {
      create_component(range0.$$.fragment);
      t0 = space();
      create_component(range1.$$.fragment);
      t1 = space();
      create_component(hst_slider0.$$.fragment);
      t2 = space();
      create_component(hst_slider1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(range1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_slider1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range0_changes = {};
      if (!updating_value && dirty[0] & /*oscillate_count*/
      512) {
        updating_value = true;
        range0_changes.value = /*oscillate_count*/
        ctx2[9];
        add_flush_callback(() => updating_value = false);
      }
      range0.$set(range0_changes);
      const range1_changes = {};
      if (!updating_value_1 && dirty[0] & /*oscillate_speed*/
      256) {
        updating_value_1 = true;
        range1_changes.value = /*oscillate_speed*/
        ctx2[8];
        add_flush_callback(() => updating_value_1 = false);
      }
      range1.$set(range1_changes);
      const hst_slider0_changes = {};
      if (!updating_value_2 && dirty[0] & /*oscillate_width*/
      1024) {
        updating_value_2 = true;
        hst_slider0_changes.value = /*oscillate_width*/
        ctx2[10];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_3 && dirty[0] & /*oscillate_bar_width*/
      2048) {
        updating_value_3 = true;
        hst_slider1_changes.value = /*oscillate_bar_width*/
        ctx2[11];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range0.$$.fragment, local);
      transition_in(range1.$$.fragment, local);
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range0.$$.fragment, local);
      transition_out(range1.$$.fragment, local);
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(range1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_slider0, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_4.name,
    type: "slot",
    source: '(115:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_4(ctx) {
  let slide;
  let updating_speed;
  let updating_reverse;
  let current;
  function slide_speed_binding(value) {
    ctx[72](value);
  }
  function slide_reverse_binding(value) {
    ctx[73](value);
  }
  let slide_props = {};
  if (
    /*slide_speed*/
    ctx[12] !== void 0
  ) {
    slide_props.speed = /*slide_speed*/
    ctx[12];
  }
  if (
    /*slide_reverse*/
    ctx[13] !== void 0
  ) {
    slide_props.reverse = /*slide_reverse*/
    ctx[13];
  }
  slide = new Slide({ props: slide_props, $$inline: true });
  binding_callbacks.push(() => bind(slide, "speed", slide_speed_binding));
  binding_callbacks.push(() => bind(slide, "reverse", slide_reverse_binding));
  const block = {
    c: function create() {
      create_component(slide.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(slide, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const slide_changes = {};
      if (!updating_speed && dirty[0] & /*slide_speed*/
      4096) {
        updating_speed = true;
        slide_changes.speed = /*slide_speed*/
        ctx2[12];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*slide_reverse*/
      8192) {
        updating_reverse = true;
        slide_changes.reverse = /*slide_reverse*/
        ctx2[13];
        add_flush_callback(() => updating_reverse = false);
      }
      slide.$set(slide_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(slide.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slide.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(slide, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: '(122:1) <Hst.Variant title=\\"Slide\\" icon=\\"teenyicons:layers-subtract-outline\\">',
    ctx
  });
  return block;
}
function create_controls_slot_3(ctx) {
  let range;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function range_value_binding_6(value) {
    ctx[70](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*slide_speed*/
    ctx[12] !== void 0
  ) {
    range_props.value = /*slide_speed*/
    ctx[12];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_6));
  function hst_checkbox_value_binding_2(value) {
    ctx[71](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*slide_reverse*/
    ctx[13] !== void 0
  ) {
    hst_checkbox_props.value = /*slide_reverse*/
    ctx[13];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_2));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*slide_speed*/
      4096) {
        updating_value = true;
        range_changes.value = /*slide_speed*/
        ctx2[12];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*slide_reverse*/
      8192) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*slide_reverse*/
        ctx2[13];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_3.name,
    type: "slot",
    source: '(124:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let grow;
  let updating_speed;
  let updating_reverse;
  let current;
  function grow_speed_binding(value) {
    ctx[76](value);
  }
  function grow_reverse_binding(value) {
    ctx[77](value);
  }
  let grow_props = {};
  if (
    /*grow_speed*/
    ctx[1] !== void 0
  ) {
    grow_props.speed = /*grow_speed*/
    ctx[1];
  }
  if (
    /*grow_reverse*/
    ctx[2] !== void 0
  ) {
    grow_props.reverse = /*grow_reverse*/
    ctx[2];
  }
  grow = new Grow({ props: grow_props, $$inline: true });
  binding_callbacks.push(() => bind(grow, "speed", grow_speed_binding));
  binding_callbacks.push(() => bind(grow, "reverse", grow_reverse_binding));
  const block = {
    c: function create() {
      create_component(grow.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(grow, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const grow_changes = {};
      if (!updating_speed && dirty[0] & /*grow_speed*/
      2) {
        updating_speed = true;
        grow_changes.speed = /*grow_speed*/
        ctx2[1];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*grow_reverse*/
      4) {
        updating_reverse = true;
        grow_changes.reverse = /*grow_reverse*/
        ctx2[2];
        add_flush_callback(() => updating_reverse = false);
      }
      grow.$set(grow_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(grow.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(grow.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(grow, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(129:1) <Hst.Variant title=\\"Grow\\" icon=\\"gg:extension\\">',
    ctx
  });
  return block;
}
function create_controls_slot_2(ctx) {
  let range;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function range_value_binding_7(value) {
    ctx[74](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*grow_speed*/
    ctx[1] !== void 0
  ) {
    range_props.value = /*grow_speed*/
    ctx[1];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_7));
  function hst_checkbox_value_binding_3(value) {
    ctx[75](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*grow_reverse*/
    ctx[2] !== void 0
  ) {
    hst_checkbox_props.value = /*grow_reverse*/
    ctx[2];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_3));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*grow_speed*/
      2) {
        updating_value = true;
        range_changes.value = /*grow_speed*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*grow_reverse*/
      4) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*grow_reverse*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_2.name,
    type: "slot",
    source: '(131:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let shrink;
  let updating_speed;
  let updating_reverse;
  let current;
  function shrink_speed_binding(value) {
    ctx[80](value);
  }
  function shrink_reverse_binding(value) {
    ctx[81](value);
  }
  let shrink_props = {};
  if (
    /*shrink_speed*/
    ctx[3] !== void 0
  ) {
    shrink_props.speed = /*shrink_speed*/
    ctx[3];
  }
  if (
    /*shrink_reverse*/
    ctx[4] !== void 0
  ) {
    shrink_props.reverse = /*shrink_reverse*/
    ctx[4];
  }
  shrink = new Shrink({ props: shrink_props, $$inline: true });
  binding_callbacks.push(() => bind(shrink, "speed", shrink_speed_binding));
  binding_callbacks.push(() => bind(shrink, "reverse", shrink_reverse_binding));
  const block = {
    c: function create() {
      create_component(shrink.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(shrink, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const shrink_changes = {};
      if (!updating_speed && dirty[0] & /*shrink_speed*/
      8) {
        updating_speed = true;
        shrink_changes.speed = /*shrink_speed*/
        ctx2[3];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*shrink_reverse*/
      16) {
        updating_reverse = true;
        shrink_changes.reverse = /*shrink_reverse*/
        ctx2[4];
        add_flush_callback(() => updating_reverse = false);
      }
      shrink.$set(shrink_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(shrink.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(shrink.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(shrink, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: '(136:1) <Hst.Variant title=\\"Shrink\\" icon=\\"gg:extension\\">',
    ctx
  });
  return block;
}
function create_controls_slot_1(ctx) {
  let range;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function range_value_binding_8(value) {
    ctx[78](value);
  }
  let range_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*shrink_speed*/
    ctx[3] !== void 0
  ) {
    range_props.value = /*shrink_speed*/
    ctx[3];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding_8));
  function hst_checkbox_value_binding_4(value) {
    ctx[79](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*shrink_reverse*/
    ctx[4] !== void 0
  ) {
    hst_checkbox_props.value = /*shrink_reverse*/
    ctx[4];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_4));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (!updating_value && dirty[0] & /*shrink_speed*/
      8) {
        updating_value = true;
        range_changes.value = /*shrink_speed*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*shrink_reverse*/
      16) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*shrink_reverse*/
        ctx2[4];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1.name,
    type: "slot",
    source: '(138:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let spin;
  let updating_scale;
  let updating_speed;
  let updating_border_width;
  let current;
  function spin_scale_binding(value) {
    ctx[85](value);
  }
  function spin_speed_binding(value) {
    ctx[86](value);
  }
  function spin_border_width_binding(value) {
    ctx[87](value);
  }
  let spin_props = {};
  if (
    /*spin_scale*/
    ctx[6] !== void 0
  ) {
    spin_props.scale = /*spin_scale*/
    ctx[6];
  }
  if (
    /*spin_speed*/
    ctx[5] !== void 0
  ) {
    spin_props.speed = /*spin_speed*/
    ctx[5];
  }
  if (
    /*spin_border_width*/
    ctx[7] !== void 0
  ) {
    spin_props.border_width = /*spin_border_width*/
    ctx[7];
  }
  spin = new Spin2({ props: spin_props, $$inline: true });
  binding_callbacks.push(() => bind(spin, "scale", spin_scale_binding));
  binding_callbacks.push(() => bind(spin, "speed", spin_speed_binding));
  binding_callbacks.push(() => bind(spin, "border_width", spin_border_width_binding));
  const block = {
    c: function create() {
      create_component(spin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(spin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const spin_changes = {};
      if (!updating_scale && dirty[0] & /*spin_scale*/
      64) {
        updating_scale = true;
        spin_changes.scale = /*spin_scale*/
        ctx2[6];
        add_flush_callback(() => updating_scale = false);
      }
      if (!updating_speed && dirty[0] & /*spin_speed*/
      32) {
        updating_speed = true;
        spin_changes.speed = /*spin_speed*/
        ctx2[5];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_border_width && dirty[0] & /*spin_border_width*/
      128) {
        updating_border_width = true;
        spin_changes.border_width = /*spin_border_width*/
        ctx2[7];
        add_flush_callback(() => updating_border_width = false);
      }
      spin.$set(spin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(spin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(143:1) <Hst.Variant title=\\"Spin\\" icon=\\"mdi:square-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let range0;
  let updating_value;
  let t0;
  let range1;
  let updating_value_1;
  let t1;
  let hst_slider;
  let updating_value_2;
  let current;
  function range0_value_binding_2(value) {
    ctx[82](value);
  }
  let range0_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spin_speed*/
    ctx[5] !== void 0
  ) {
    range0_props.value = /*spin_speed*/
    ctx[5];
  }
  range0 = new Range({ props: range0_props, $$inline: true });
  binding_callbacks.push(() => bind(range0, "value", range0_value_binding_2));
  function range1_value_binding_2(value) {
    ctx[83](value);
  }
  let range1_props = {
    title: "Scale",
    min: 0.1,
    max: 1,
    step: 0.1
  };
  if (
    /*spin_scale*/
    ctx[6] !== void 0
  ) {
    range1_props.value = /*spin_scale*/
    ctx[6];
  }
  range1 = new Range({ props: range1_props, $$inline: true });
  binding_callbacks.push(() => bind(range1, "value", range1_value_binding_2));
  function hst_slider_value_binding_2(value) {
    ctx[84](value);
  }
  let hst_slider_props = { title: "Border Width", min: 0, max: 10 };
  if (
    /*spin_border_width*/
    ctx[7] !== void 0
  ) {
    hst_slider_props.value = /*spin_border_width*/
    ctx[7];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_2));
  const block = {
    c: function create() {
      create_component(range0.$$.fragment);
      t0 = space();
      create_component(range1.$$.fragment);
      t1 = space();
      create_component(hst_slider.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(range0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(range1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range0_changes = {};
      if (!updating_value && dirty[0] & /*spin_speed*/
      32) {
        updating_value = true;
        range0_changes.value = /*spin_speed*/
        ctx2[5];
        add_flush_callback(() => updating_value = false);
      }
      range0.$set(range0_changes);
      const range1_changes = {};
      if (!updating_value_1 && dirty[0] & /*spin_scale*/
      64) {
        updating_value_1 = true;
        range1_changes.value = /*spin_scale*/
        ctx2[6];
        add_flush_callback(() => updating_value_1 = false);
      }
      range1.$set(range1_changes);
      const hst_slider_changes = {};
      if (!updating_value_2 && dirty[0] & /*spin_border_width*/
      128) {
        updating_value_2 = true;
        hst_slider_changes.value = /*spin_border_width*/
        ctx2[7];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider.$set(hst_slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range0.$$.fragment, local);
      transition_in(range1.$$.fragment, local);
      transition_in(hst_slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range0.$$.fragment, local);
      transition_out(range1.$$.fragment, local);
      transition_out(hst_slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(range1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(149:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let t2;
  let hst_variant3;
  let t3;
  let hst_variant4;
  let t4;
  let hst_variant5;
  let t5;
  let hst_variant6;
  let t6;
  let hst_variant7;
  let t7;
  let hst_variant8;
  let t8;
  let hst_variant9;
  let t9;
  let hst_variant10;
  let t10;
  let hst_variant11;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Hourglass",
      icon: "ic:round-hourglass-bottom",
      $$slots: {
        controls: [create_controls_slot_11],
        default: [create_default_slot_12]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Heart",
      icon: "material-symbols:favorite",
      $$slots: {
        controls: [create_controls_slot_10],
        default: [create_default_slot_11]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Pie",
      icon: "game-icons:swirled-shell",
      $$slots: {
        controls: [create_controls_slot_9],
        default: [create_default_slot_10]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "DNA",
      icon: "tabler:dna",
      $$slots: {
        controls: [create_controls_slot_8],
        default: [create_default_slot_9]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "DualBalls",
      icon: "ic:baseline-circle",
      $$slots: {
        controls: [create_controls_slot_7],
        default: [create_default_slot_8]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant5 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Spin Glass",
      icon: "ph:hourglass-fill",
      $$slots: {
        controls: [create_controls_slot_6],
        default: [create_default_slot_7]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant6 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Spin Circles",
      icon: "ic:baseline-circle",
      $$slots: {
        controls: [create_controls_slot_5],
        default: [create_default_slot_6]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant7 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Oscillate",
      icon: "cil:audio-spectrum",
      $$slots: {
        controls: [create_controls_slot_4],
        default: [create_default_slot_5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant8 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Slide",
      icon: "teenyicons:layers-subtract-outline",
      $$slots: {
        controls: [create_controls_slot_3],
        default: [create_default_slot_4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant9 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Grow",
      icon: "gg:extension",
      $$slots: {
        controls: [create_controls_slot_2],
        default: [create_default_slot_3]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant10 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Shrink",
      icon: "gg:extension",
      $$slots: {
        controls: [create_controls_slot_1],
        default: [create_default_slot_2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant11 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Spin",
      icon: "mdi:square-circle",
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
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
      t2 = space();
      create_component(hst_variant3.$$.fragment);
      t3 = space();
      create_component(hst_variant4.$$.fragment);
      t4 = space();
      create_component(hst_variant5.$$.fragment);
      t5 = space();
      create_component(hst_variant6.$$.fragment);
      t6 = space();
      create_component(hst_variant7.$$.fragment);
      t7 = space();
      create_component(hst_variant8.$$.fragment);
      t8 = space();
      create_component(hst_variant9.$$.fragment);
      t9 = space();
      create_component(hst_variant10.$$.fragment);
      t10 = space();
      create_component(hst_variant11.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_variant3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(hst_variant4, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(hst_variant5, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(hst_variant6, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(hst_variant7, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(hst_variant8, target, anchor);
      insert_dev(target, t8, anchor);
      mount_component(hst_variant9, target, anchor);
      insert_dev(target, t9, anchor);
      mount_component(hst_variant10, target, anchor);
      insert_dev(target, t10, anchor);
      mount_component(hst_variant11, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty[0] & /*hourglass_speed*/
      536870912 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty[0] & /*heart_speed*/
      268435456 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty[0] & /*pie_scale, pie_speed, pie_count*/
      234881024 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty[0] & /*dna_speed, dna_r2, dna_r, dna_height, dna_count*/
      32505856 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty[0] & /*dualBalls_reverse, dualBalls_speed*/
      786432 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant4.$set(hst_variant4_changes);
      const hst_variant5_changes = {};
      if (dirty[0] & /*spinGlass_reverse, spinGlass_speed, spinGlass_rotations*/
      229376 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant5.$set(hst_variant5_changes);
      const hst_variant6_changes = {};
      if (dirty[0] & /*spinCircles_speed*/
      16384 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant6.$set(hst_variant6_changes);
      const hst_variant7_changes = {};
      if (dirty[0] & /*oscillate_bar_width, oscillate_width, oscillate_speed, oscillate_count*/
      3840 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant7.$set(hst_variant7_changes);
      const hst_variant8_changes = {};
      if (dirty[0] & /*slide_reverse, slide_speed*/
      12288 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant8.$set(hst_variant8_changes);
      const hst_variant9_changes = {};
      if (dirty[0] & /*grow_reverse, grow_speed*/
      6 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant9_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant9.$set(hst_variant9_changes);
      const hst_variant10_changes = {};
      if (dirty[0] & /*shrink_reverse, shrink_speed*/
      24 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant10_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant10.$set(hst_variant10_changes);
      const hst_variant11_changes = {};
      if (dirty[0] & /*spin_border_width, spin_scale, spin_speed*/
      224 | dirty[2] & /*$$scope*/
      67108864) {
        hst_variant11_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant11.$set(hst_variant11_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      transition_in(hst_variant3.$$.fragment, local);
      transition_in(hst_variant4.$$.fragment, local);
      transition_in(hst_variant5.$$.fragment, local);
      transition_in(hst_variant6.$$.fragment, local);
      transition_in(hst_variant7.$$.fragment, local);
      transition_in(hst_variant8.$$.fragment, local);
      transition_in(hst_variant9.$$.fragment, local);
      transition_in(hst_variant10.$$.fragment, local);
      transition_in(hst_variant11.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      transition_out(hst_variant3.$$.fragment, local);
      transition_out(hst_variant4.$$.fragment, local);
      transition_out(hst_variant5.$$.fragment, local);
      transition_out(hst_variant6.$$.fragment, local);
      transition_out(hst_variant7.$$.fragment, local);
      transition_out(hst_variant8.$$.fragment, local);
      transition_out(hst_variant9.$$.fragment, local);
      transition_out(hst_variant10.$$.fragment, local);
      transition_out(hst_variant11.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_variant3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(hst_variant4, detaching);
      if (detaching)
        detach_dev(t4);
      destroy_component(hst_variant5, detaching);
      if (detaching)
        detach_dev(t5);
      destroy_component(hst_variant6, detaching);
      if (detaching)
        detach_dev(t6);
      destroy_component(hst_variant7, detaching);
      if (detaching)
        detach_dev(t7);
      destroy_component(hst_variant8, detaching);
      if (detaching)
        detach_dev(t8);
      destroy_component(hst_variant9, detaching);
      if (detaching)
        detach_dev(t9);
      destroy_component(hst_variant10, detaching);
      if (detaching)
        detach_dev(t10);
      destroy_component(hst_variant11, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(46:0) <Hst.Story title=\\"Loading Animations\\" icon=\\"mingcute:loading-fill\\" layout={{ type: \\"grid\\" }}>',
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
      title: "Loading Animations",
      icon: "mingcute:loading-fill",
      layout: { type: "grid" },
      $$slots: { default: [create_default_slot] },
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
    p: function update(ctx2, dirty) {
      const hst_story_changes = {};
      if (dirty[0] & /*spin_border_width, spin_scale, spin_speed, shrink_reverse, shrink_speed, grow_reverse, grow_speed, slide_reverse, slide_speed, oscillate_bar_width, oscillate_width, oscillate_speed, oscillate_count, spinCircles_speed, spinGlass_reverse, spinGlass_speed, spinGlass_rotations, dualBalls_reverse, dualBalls_speed, dna_speed, dna_r2, dna_r, dna_height, dna_count, pie_scale, pie_speed, pie_count, heart_speed, hourglass_speed*/
      1073741822 | dirty[2] & /*$$scope*/
      67108864) {
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
  validate_slots("LoadingAnimation_story", slots, []);
  let { Hst } = $$props;
  let grow_speed = 2;
  let grow_reverse = false;
  let shrink_speed = 2;
  let shrink_reverse = false;
  let spin_speed = 3;
  let spin_scale = 0.25;
  let spin_border_width = 0;
  let oscillate_speed = 2;
  let oscillate_count = 5;
  let oscillate_width = 50;
  let oscillate_bar_width = 6;
  let slide_speed = 4;
  let slide_reverse = false;
  let spinCircles_speed = 1;
  let spinGlass_speed = 1;
  let spinGlass_rotations = 3;
  let spinGlass_reverse = false;
  let dualBalls_speed = 1;
  let dualBalls_reverse = false;
  let dna_count = 10;
  let dna_r = 4;
  let dna_r2 = 2;
  let dna_height = 36;
  let dna_speed = 1;
  let pie_count = 8;
  let pie_speed = 1;
  let pie_scale = 0.5;
  let heart_speed = 1.5;
  let hourglass_speed = 1;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<LoadingAnimation_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<LoadingAnimation_story> was created with unknown prop '${key2}'`);
  });
  function range_value_binding(value) {
    hourglass_speed = value;
    $$invalidate(29, hourglass_speed);
  }
  function hourglass_speed_binding(value) {
    hourglass_speed = value;
    $$invalidate(29, hourglass_speed);
  }
  function range_value_binding_1(value) {
    heart_speed = value;
    $$invalidate(28, heart_speed);
  }
  function heart_speed_binding(value) {
    heart_speed = value;
    $$invalidate(28, heart_speed);
  }
  function hst_slider_value_binding(value) {
    pie_count = value;
    $$invalidate(25, pie_count);
  }
  function range0_value_binding(value) {
    pie_speed = value;
    $$invalidate(26, pie_speed);
  }
  function range1_value_binding(value) {
    pie_scale = value;
    $$invalidate(27, pie_scale);
  }
  function pie_count_binding(value) {
    pie_count = value;
    $$invalidate(25, pie_count);
  }
  function pie_speed_binding(value) {
    pie_speed = value;
    $$invalidate(26, pie_speed);
  }
  function pie_scale_binding(value) {
    pie_scale = value;
    $$invalidate(27, pie_scale);
  }
  function hst_slider0_value_binding(value) {
    dna_count = value;
    $$invalidate(20, dna_count);
  }
  function hst_slider1_value_binding(value) {
    dna_height = value;
    $$invalidate(23, dna_height);
  }
  function hst_slider2_value_binding(value) {
    dna_r = value;
    $$invalidate(21, dna_r);
  }
  function hst_slider3_value_binding(value) {
    dna_r2 = value;
    $$invalidate(22, dna_r2);
  }
  function range_value_binding_2(value) {
    dna_speed = value;
    $$invalidate(24, dna_speed);
  }
  function dna_count_binding(value) {
    dna_count = value;
    $$invalidate(20, dna_count);
  }
  function dna_r_binding(value) {
    dna_r = value;
    $$invalidate(21, dna_r);
  }
  function dna_r2_binding(value) {
    dna_r2 = value;
    $$invalidate(22, dna_r2);
  }
  function dna_height_binding(value) {
    dna_height = value;
    $$invalidate(23, dna_height);
  }
  function dna_speed_binding(value) {
    dna_speed = value;
    $$invalidate(24, dna_speed);
  }
  function range_value_binding_3(value) {
    dualBalls_speed = value;
    $$invalidate(18, dualBalls_speed);
  }
  function hst_checkbox_value_binding(value) {
    dualBalls_reverse = value;
    $$invalidate(19, dualBalls_reverse);
  }
  function dualballs_speed_binding(value) {
    dualBalls_speed = value;
    $$invalidate(18, dualBalls_speed);
  }
  function dualballs_reverse_binding(value) {
    dualBalls_reverse = value;
    $$invalidate(19, dualBalls_reverse);
  }
  function hst_slider_value_binding_1(value) {
    spinGlass_rotations = value;
    $$invalidate(16, spinGlass_rotations);
  }
  function range_value_binding_4(value) {
    spinGlass_speed = value;
    $$invalidate(15, spinGlass_speed);
  }
  function hst_checkbox_value_binding_1(value) {
    spinGlass_reverse = value;
    $$invalidate(17, spinGlass_reverse);
  }
  function spinglass_rotations_binding(value) {
    spinGlass_rotations = value;
    $$invalidate(16, spinGlass_rotations);
  }
  function spinglass_speed_binding(value) {
    spinGlass_speed = value;
    $$invalidate(15, spinGlass_speed);
  }
  function spinglass_reverse_binding(value) {
    spinGlass_reverse = value;
    $$invalidate(17, spinGlass_reverse);
  }
  function range_value_binding_5(value) {
    spinCircles_speed = value;
    $$invalidate(14, spinCircles_speed);
  }
  function spincircles_speed_binding(value) {
    spinCircles_speed = value;
    $$invalidate(14, spinCircles_speed);
  }
  function range0_value_binding_1(value) {
    oscillate_count = value;
    $$invalidate(9, oscillate_count);
  }
  function range1_value_binding_1(value) {
    oscillate_speed = value;
    $$invalidate(8, oscillate_speed);
  }
  function hst_slider0_value_binding_1(value) {
    oscillate_width = value;
    $$invalidate(10, oscillate_width);
  }
  function hst_slider1_value_binding_1(value) {
    oscillate_bar_width = value;
    $$invalidate(11, oscillate_bar_width);
  }
  function oscillate_speed_binding(value) {
    oscillate_speed = value;
    $$invalidate(8, oscillate_speed);
  }
  function oscillate_count_binding(value) {
    oscillate_count = value;
    $$invalidate(9, oscillate_count);
  }
  function oscillate_width_binding(value) {
    oscillate_width = value;
    $$invalidate(10, oscillate_width);
  }
  function oscillate_bar_width_binding(value) {
    oscillate_bar_width = value;
    $$invalidate(11, oscillate_bar_width);
  }
  function range_value_binding_6(value) {
    slide_speed = value;
    $$invalidate(12, slide_speed);
  }
  function hst_checkbox_value_binding_2(value) {
    slide_reverse = value;
    $$invalidate(13, slide_reverse);
  }
  function slide_speed_binding(value) {
    slide_speed = value;
    $$invalidate(12, slide_speed);
  }
  function slide_reverse_binding(value) {
    slide_reverse = value;
    $$invalidate(13, slide_reverse);
  }
  function range_value_binding_7(value) {
    grow_speed = value;
    $$invalidate(1, grow_speed);
  }
  function hst_checkbox_value_binding_3(value) {
    grow_reverse = value;
    $$invalidate(2, grow_reverse);
  }
  function grow_speed_binding(value) {
    grow_speed = value;
    $$invalidate(1, grow_speed);
  }
  function grow_reverse_binding(value) {
    grow_reverse = value;
    $$invalidate(2, grow_reverse);
  }
  function range_value_binding_8(value) {
    shrink_speed = value;
    $$invalidate(3, shrink_speed);
  }
  function hst_checkbox_value_binding_4(value) {
    shrink_reverse = value;
    $$invalidate(4, shrink_reverse);
  }
  function shrink_speed_binding(value) {
    shrink_speed = value;
    $$invalidate(3, shrink_speed);
  }
  function shrink_reverse_binding(value) {
    shrink_reverse = value;
    $$invalidate(4, shrink_reverse);
  }
  function range0_value_binding_2(value) {
    spin_speed = value;
    $$invalidate(5, spin_speed);
  }
  function range1_value_binding_2(value) {
    spin_scale = value;
    $$invalidate(6, spin_scale);
  }
  function hst_slider_value_binding_2(value) {
    spin_border_width = value;
    $$invalidate(7, spin_border_width);
  }
  function spin_scale_binding(value) {
    spin_scale = value;
    $$invalidate(6, spin_scale);
  }
  function spin_speed_binding(value) {
    spin_speed = value;
    $$invalidate(5, spin_speed);
  }
  function spin_border_width_binding(value) {
    spin_border_width = value;
    $$invalidate(7, spin_border_width);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Range,
    DNA,
    DualBalls,
    Grow,
    Heart,
    Hourglass,
    Oscillate,
    Pie,
    Shrink,
    Slide,
    Spin: Spin2,
    SpinCircles,
    SpinGlass,
    Hst,
    grow_speed,
    grow_reverse,
    shrink_speed,
    shrink_reverse,
    spin_speed,
    spin_scale,
    spin_border_width,
    oscillate_speed,
    oscillate_count,
    oscillate_width,
    oscillate_bar_width,
    slide_speed,
    slide_reverse,
    spinCircles_speed,
    spinGlass_speed,
    spinGlass_rotations,
    spinGlass_reverse,
    dualBalls_speed,
    dualBalls_reverse,
    dna_count,
    dna_r,
    dna_r2,
    dna_height,
    dna_speed,
    pie_count,
    pie_speed,
    pie_scale,
    heart_speed,
    hourglass_speed
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("grow_speed" in $$props2)
      $$invalidate(1, grow_speed = $$props2.grow_speed);
    if ("grow_reverse" in $$props2)
      $$invalidate(2, grow_reverse = $$props2.grow_reverse);
    if ("shrink_speed" in $$props2)
      $$invalidate(3, shrink_speed = $$props2.shrink_speed);
    if ("shrink_reverse" in $$props2)
      $$invalidate(4, shrink_reverse = $$props2.shrink_reverse);
    if ("spin_speed" in $$props2)
      $$invalidate(5, spin_speed = $$props2.spin_speed);
    if ("spin_scale" in $$props2)
      $$invalidate(6, spin_scale = $$props2.spin_scale);
    if ("spin_border_width" in $$props2)
      $$invalidate(7, spin_border_width = $$props2.spin_border_width);
    if ("oscillate_speed" in $$props2)
      $$invalidate(8, oscillate_speed = $$props2.oscillate_speed);
    if ("oscillate_count" in $$props2)
      $$invalidate(9, oscillate_count = $$props2.oscillate_count);
    if ("oscillate_width" in $$props2)
      $$invalidate(10, oscillate_width = $$props2.oscillate_width);
    if ("oscillate_bar_width" in $$props2)
      $$invalidate(11, oscillate_bar_width = $$props2.oscillate_bar_width);
    if ("slide_speed" in $$props2)
      $$invalidate(12, slide_speed = $$props2.slide_speed);
    if ("slide_reverse" in $$props2)
      $$invalidate(13, slide_reverse = $$props2.slide_reverse);
    if ("spinCircles_speed" in $$props2)
      $$invalidate(14, spinCircles_speed = $$props2.spinCircles_speed);
    if ("spinGlass_speed" in $$props2)
      $$invalidate(15, spinGlass_speed = $$props2.spinGlass_speed);
    if ("spinGlass_rotations" in $$props2)
      $$invalidate(16, spinGlass_rotations = $$props2.spinGlass_rotations);
    if ("spinGlass_reverse" in $$props2)
      $$invalidate(17, spinGlass_reverse = $$props2.spinGlass_reverse);
    if ("dualBalls_speed" in $$props2)
      $$invalidate(18, dualBalls_speed = $$props2.dualBalls_speed);
    if ("dualBalls_reverse" in $$props2)
      $$invalidate(19, dualBalls_reverse = $$props2.dualBalls_reverse);
    if ("dna_count" in $$props2)
      $$invalidate(20, dna_count = $$props2.dna_count);
    if ("dna_r" in $$props2)
      $$invalidate(21, dna_r = $$props2.dna_r);
    if ("dna_r2" in $$props2)
      $$invalidate(22, dna_r2 = $$props2.dna_r2);
    if ("dna_height" in $$props2)
      $$invalidate(23, dna_height = $$props2.dna_height);
    if ("dna_speed" in $$props2)
      $$invalidate(24, dna_speed = $$props2.dna_speed);
    if ("pie_count" in $$props2)
      $$invalidate(25, pie_count = $$props2.pie_count);
    if ("pie_speed" in $$props2)
      $$invalidate(26, pie_speed = $$props2.pie_speed);
    if ("pie_scale" in $$props2)
      $$invalidate(27, pie_scale = $$props2.pie_scale);
    if ("heart_speed" in $$props2)
      $$invalidate(28, heart_speed = $$props2.heart_speed);
    if ("hourglass_speed" in $$props2)
      $$invalidate(29, hourglass_speed = $$props2.hourglass_speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    grow_speed,
    grow_reverse,
    shrink_speed,
    shrink_reverse,
    spin_speed,
    spin_scale,
    spin_border_width,
    oscillate_speed,
    oscillate_count,
    oscillate_width,
    oscillate_bar_width,
    slide_speed,
    slide_reverse,
    spinCircles_speed,
    spinGlass_speed,
    spinGlass_rotations,
    spinGlass_reverse,
    dualBalls_speed,
    dualBalls_reverse,
    dna_count,
    dna_r,
    dna_r2,
    dna_height,
    dna_speed,
    pie_count,
    pie_speed,
    pie_scale,
    heart_speed,
    hourglass_speed,
    range_value_binding,
    hourglass_speed_binding,
    range_value_binding_1,
    heart_speed_binding,
    hst_slider_value_binding,
    range0_value_binding,
    range1_value_binding,
    pie_count_binding,
    pie_speed_binding,
    pie_scale_binding,
    hst_slider0_value_binding,
    hst_slider1_value_binding,
    hst_slider2_value_binding,
    hst_slider3_value_binding,
    range_value_binding_2,
    dna_count_binding,
    dna_r_binding,
    dna_r2_binding,
    dna_height_binding,
    dna_speed_binding,
    range_value_binding_3,
    hst_checkbox_value_binding,
    dualballs_speed_binding,
    dualballs_reverse_binding,
    hst_slider_value_binding_1,
    range_value_binding_4,
    hst_checkbox_value_binding_1,
    spinglass_rotations_binding,
    spinglass_speed_binding,
    spinglass_reverse_binding,
    range_value_binding_5,
    spincircles_speed_binding,
    range0_value_binding_1,
    range1_value_binding_1,
    hst_slider0_value_binding_1,
    hst_slider1_value_binding_1,
    oscillate_speed_binding,
    oscillate_count_binding,
    oscillate_width_binding,
    oscillate_bar_width_binding,
    range_value_binding_6,
    hst_checkbox_value_binding_2,
    slide_speed_binding,
    slide_reverse_binding,
    range_value_binding_7,
    hst_checkbox_value_binding_3,
    grow_speed_binding,
    grow_reverse_binding,
    range_value_binding_8,
    hst_checkbox_value_binding_4,
    shrink_speed_binding,
    shrink_reverse_binding,
    range0_value_binding_2,
    range1_value_binding_2,
    hst_slider_value_binding_2,
    spin_scale_binding,
    spin_speed_binding,
    spin_border_width_binding
  ];
}
class LoadingAnimation_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 }, null, [-1, -1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LoadingAnimation_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<LoadingAnimation_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<LoadingAnimation_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-stories-svg-close-story-svelte", "path": ["SVGs", "Close"], "filePath": "src/stories/SVG/Close.story.svelte", "story": { "id": "src-stories-svg-close-story-svelte", "title": "Close", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ic:round-close", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: Close_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-close-story-svelte-61b98d59.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-command-story-svelte", "path": ["SVGs", "Command"], "filePath": "src/stories/SVG/Command.story.svelte", "story": { "id": "src-stories-svg-command-story-svelte", "title": "Command", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:command", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 1, component: Command_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-command-story-svelte-ef756f46.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-dilk-story-svelte", "path": ["SVGs", "Dilk"], "filePath": "src/stories/SVG/Dilk.story.svelte", "story": { "id": "src-stories-svg-dilk-story-svelte", "title": "Dilk", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 2, component: Dilk_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-dilk-story-svelte-d141ade5.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-download-story-svelte", "path": ["SVGs", "Download"], "filePath": "src/stories/SVG/Download.story.svelte", "story": { "id": "src-stories-svg-download-story-svelte", "title": "Download", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "tabler:cloud-download", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 3, component: Download_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-download-story-svelte-ea00baa7.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-story-svelte", "path": ["Logo"], "filePath": "src/stories/SVG/Logo.story.svelte", "story": { "id": "src-stories-svg-logo-story-svelte", "title": "Logo", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-svg-logo-story-svelte-0", "title": "Default", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-1", "title": "Flat", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-2", "title": "Animated", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-3", "title": "Infinitely Animated", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-4", "title": "Animated With Name", "icon": "mdi:cog", "iconColor": null }] }, "supportPluginId": "svelte3", "index": 4, component: Logo_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-story-svelte-84335cc2.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-maximize-story-svelte", "path": ["SVGs", "Maximize"], "filePath": "src/stories/SVG/Maximize.story.svelte", "story": { "id": "src-stories-svg-maximize-story-svelte", "title": "Maximize", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "tabler:maximize", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 5, component: Maximize_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-maximize-story-svelte-c63683be.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-peacediscipline-story-svelte", "path": ["SVGs", "Peace Discipline"], "filePath": "src/stories/SVG/Peacediscipline.story.svelte", "story": { "id": "src-stories-svg-peacediscipline-story-svelte", "title": "Peace Discipline", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 6, component: Peacediscipline_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-peacediscipline-story-svelte-1bc8a0c0.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-warning-story-svelte", "path": ["SVGs", "Warning"], "filePath": "src/stories/SVG/Warning.story.svelte", "story": { "id": "src-stories-svg-warning-story-svelte", "title": "Warning", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:warning-outline-rounded", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 7, component: Warning_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-warning-story-svelte-e89f3600.js"), true ? [] : void 0) },
  { "id": "src-stories-components-burgermenus-story-svelte", "path": ["Components", "Burger Menus"], "filePath": "src/stories/components/BurgerMenus.story.svelte", "story": { "id": "src-stories-components-burgermenus-story-svelte", "title": "Burger Menus", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-burgermenus-story-svelte-0", "title": "Circle", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-1", "title": "Cross", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-2", "title": "Fold In", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-3", "title": "Merge", "icon": "material-symbols:menu", "iconColor": null }] }, "supportPluginId": "svelte3", "index": 8, component: BurgerMenus_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-burgermenus-story-svelte-047f2043.js"), true ? [] : void 0) },
  { "id": "src-stories-components-colorinput-story-svelte", "path": ["Components", "Color Input"], "filePath": "src/stories/components/ColorInput.story.svelte", "story": { "id": "src-stories-components-colorinput-story-svelte", "title": "Color Input", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "typcn:input-checked", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 9, component: ColorInput_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-colorinput-story-svelte-709f0f16.js"), true ? [] : void 0) },
  { "id": "src-stories-components-colorpicker-story-svelte", "path": ["Components", "Color Picker"], "filePath": "src/stories/components/ColorPicker.story.svelte", "story": { "id": "src-stories-components-colorpicker-story-svelte", "title": "Color Picker", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:eyedropper-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 10, component: ColorPicker_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-colorpicker-story-svelte-1fde3764.js"), true ? [] : void 0) },
  { "id": "src-stories-components-input-story-svelte", "path": ["Components", "Input"], "filePath": "src/stories/components/Input.story.svelte", "story": { "id": "src-stories-components-input-story-svelte", "title": "Input", "group": null, "layout": { "type": "grid", "width": "95%" }, "icon": "iconoir:input-field", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-input-story-svelte-0", "title": "Google Style Input", "icon": "iconoir:input-field", "iconColor": null }, { "id": "src-stories-components-input-story-svelte-1", "title": "LastPass Style Input", "icon": "iconoir:input-field", "iconColor": null }] }, "supportPluginId": "svelte3", "index": 11, component: Input_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-input-story-svelte-868b8471.js"), true ? [] : void 0) },
  { "id": "src-stories-components-mouseauracards-story-svelte", "path": ["Components", "Mouse Aura Cards"], "filePath": "src/stories/components/MouseAuraCards.story.svelte", "story": { "id": "src-stories-components-mouseauracards-story-svelte", "title": "Mouse Aura Cards", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "clarity:view-cards-line", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 12, component: MouseAuraCards_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-mouseauracards-story-svelte-691a1d7a.js"), true ? [] : void 0) },
  { "id": "src-stories-components-pause-story-svelte", "path": ["Components", "Pause"], "filePath": "src/stories/components/Pause.story.svelte", "story": { "id": "src-stories-components-pause-story-svelte", "title": "Pause", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:pause-outline", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-pause-story-svelte-0", "title": "Morph", "icon": "material-symbols:pause-outline", "iconColor": null }, { "id": "src-stories-components-pause-story-svelte-1", "title": "Rotate", "icon": "material-symbols:pause-outline", "iconColor": null }, { "id": "src-stories-components-pause-story-svelte-2", "title": "Rotate Circle", "icon": "material-symbols:pause-circle", "iconColor": null }] }, "supportPluginId": "svelte3", "index": 13, component: Pause_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-pause-story-svelte-2a2a844f.js"), true ? [] : void 0) },
  { "id": "src-stories-components-sevensegment-story-svelte", "path": ["Components", "7 Segment"], "filePath": "src/stories/components/SevenSegment.story.svelte", "story": { "id": "src-stories-components-sevensegment-story-svelte", "title": "7 Segment", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ri:number-8", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 14, component: SevenSegment_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-sevensegment-story-svelte-d48db634.js"), true ? [] : void 0) },
  { "id": "src-stories-components-themetoggles-story-svelte", "path": ["Components", "Theme Toggles"], "filePath": "src/stories/components/ThemeToggles.story.svelte", "story": { "id": "src-stories-components-themetoggles-story-svelte", "title": "Theme Toggles", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:light-mode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-themetoggles-story-svelte-0", "title": "Spin", "icon": "material-symbols:light-mode", "iconColor": null }, { "id": "src-stories-components-themetoggles-story-svelte-1", "title": "Rise", "icon": "material-symbols:light-mode", "iconColor": null }] }, "supportPluginId": "svelte3", "index": 15, component: ThemeToggles_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-themetoggles-story-svelte-2ae9082d.js"), true ? [] : void 0) },
  { "id": "src-stories-components-glitch-glitch-story-svelte", "path": ["Components", "Glitch Text"], "filePath": "src/stories/components/Glitch/Glitch.story.svelte", "story": { "id": "src-stories-components-glitch-glitch-story-svelte", "title": "Glitch Text", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "bx:text", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "docsFilePath": "src/stories/components/Glitch/Glitch.story.md", "index": 16, component: Glitch_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-glitch-glitch-story-svelte-1ea25b53.js"), true ? [] : void 0) },
  { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "path": ["Loading Animations"], "filePath": "src/stories/components/Loading Animations/LoadingAnimation.story.svelte", "story": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "title": "Loading Animations", "group": null, "layout": { "type": "grid" }, "icon": "mingcute:loading-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-0", "title": "Hourglass", "icon": "ic:round-hourglass-bottom", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-1", "title": "Heart", "icon": "material-symbols:favorite", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-2", "title": "Pie", "icon": "game-icons:swirled-shell", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-3", "title": "DNA", "icon": "tabler:dna", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-4", "title": "DualBalls", "icon": "ic:baseline-circle", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-5", "title": "Spin Glass", "icon": "ph:hourglass-fill", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-6", "title": "Spin Circles", "icon": "ic:baseline-circle", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-7", "title": "Oscillate", "icon": "cil:audio-spectrum", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-8", "title": "Slide", "icon": "teenyicons:layers-subtract-outline", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-9", "title": "Grow", "icon": "gg:extension", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-10", "title": "Shrink", "icon": "gg:extension", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-11", "title": "Spin", "icon": "mdi:square-circle", "iconColor": null }] }, "supportPluginId": "svelte3", "docsFilePath": "src/stories/components/Loading Animations/LoadingAnimation.story.md", "index": 17, component: LoadingAnimation_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-loading-animations-loadinganimation-story-svelte-e0f401a9.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "7 Segment", "index": 14 }, { "title": "Burger Menus", "index": 8 }, { "title": "Color Input", "index": 9 }, { "title": "Color Picker", "index": 10 }, { "title": "Glitch Text", "index": 16 }, { "title": "Input", "index": 11 }, { "title": "Mouse Aura Cards", "index": 12 }, { "title": "Pause", "index": 13 }, { "title": "Theme Toggles", "index": 15 }] }, { "title": "Loading Animations", "index": 17 }, { "title": "Logo", "index": 4 }, { "title": "SVGs", "children": [{ "title": "Close", "index": 0 }, { "title": "Command", "index": 1 }, { "title": "Dilk", "index": 2 }, { "title": "Download", "index": 3 }, { "title": "Maximize", "index": 5 }, { "title": "Peace Discipline", "index": 6 }, { "title": "Warning", "index": 7 }] }];
const Logo_light = "/svelte-component-library/img/logo-black.svg";
const Logo_dark = "/svelte-component-library/img/logo-white.svg";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/svelte-component-library/svelte-component-library/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/svelte-component-library/svelte-component-library/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Mikha's Components", "colors": { "primary": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "/img/logo-black.svg", "dark": "/img/logo-white.svg" }, "favicon": "/img/favicon.svg", "logoHref": "https://github.com/MikhaD" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"], "setupFile": "/src/histoire.setup.ts" };
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
      component: () => __vitePreload(() => import("./HomeView.vue-9b7e35bc.js"), true ? ["assets/HomeView.vue-9b7e35bc.js","assets/vendor-9cc9f24f.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-8229c683.js"), true ? ["assets/StoryView.vue-8229c683.js","assets/vendor-9cc9f24f.js","assets/MobileOverlay.vue2-f5806ac2.js","assets/BaseEmpty.vue-c5bad8ea.js","assets/state-b55e2a49.js"] : void 0)
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
    for (const key2 in file2) {
      if (key2 === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key2 !== "component") {
        result[key2] = file2[key2];
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
    for (const key2 in variant) {
      if (!copiedFromExistingVariant.includes(key2)) {
        result[key2] = variant[key2];
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
  "vanilla": () => __vitePreload(() => import("./vendor-9cc9f24f.js").then((n) => n.bc), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-9cc9f24f.js").then((n) => n.bd), true ? [] : void 0)
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
