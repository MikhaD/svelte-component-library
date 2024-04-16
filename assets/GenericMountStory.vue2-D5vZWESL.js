function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView.vue-DWdM2v1Y.js","assets/vendor-Ja7Mn0EQ.js","assets/story-B6RHHWk-.js","assets/StoryView.vue-qzOuEai0.js","assets/MobileOverlay.vue2-BsiVAWKt.js","assets/BaseEmpty.vue-CgvTMRxY.js","assets/state-2ELynPSU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
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
import { Y as SvelteComponentDev, Z as init, $ as safe_not_equal, a0 as dispatch_dev, a1 as validate_slots, a2 as element, a3 as attr_dev, a4 as add_location, a5 as insert_dev, a6 as listen_dev, a7 as prop_dev, a8 as noop, a9 as detach_dev, aa as run_all, ab as text, ac as append_dev, ad as set_data_dev, ae as toggle_class, af as set_style, ag as binding_callbacks, ah as bind, ai as space, aj as create_component, ak as set_input_value, al as add_render_callback, am as mount_component, an as select_option, ao as group_outros, ap as transition_out, aq as check_outros, ar as transition_in, as as add_flush_callback, at as destroy_component, au as select_value, av as self, aw as svg_element, ax as create_slot, ay as update_slot_base, az as get_all_dirty_from_scope, aA as get_slot_changes, aB as bubble, aC as empty, aD as ensure_array_like_dev, aE as destroy_each, aF as createEventDispatcher, aG as null_to_empty, aH as src_url_equal, aI as xlink_attr, aJ as onMount, C as toggleDark, _ as __vitePreload, aK as createRouter, y as histoireConfig, aL as createWebHistory, aM as createWebHashHistory, aN as markRaw, K as reactive, d as defineComponent, r as ref, aO as watchEffect, o as openBlock, q as createBlock, aP as mergeProps, aQ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-Ja7Mn0EQ.js";
function clamp$1(min, num, max) {
  return Math.min(Math.max(num, min), max);
}
class colorType {
  constructor(color) {
    __publicField(this, "color");
    this.color = color;
  }
}
const _RGB = class _RGB extends colorType {
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
__privateAdd(_RGB, _calculateHue);
let RGB = _RGB;
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
const _Color = class _Color {
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
_a = new WeakMap();
let Color = _Color;
const file$V = "src/components/ColorPicker/HexInput.svelte";
function create_fragment$15(ctx) {
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
      add_location(input, file$V, 51, 0, 950);
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
      if (detaching) {
        detach_dev(input);
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$15.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$15($$self, $$props, $$invalidate) {
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
    init(this, options, instance$15, create_fragment$15, safe_not_equal, { value: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HexInput",
      options,
      id: create_fragment$15.name
    });
  }
  get value() {
    throw new Error("<HexInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<HexInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$U = "src/components/ColorPicker/NumberInput.svelte";
function create_fragment$14(ctx) {
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
      add_location(input, file$U, 43, 1, 1102);
      attr_dev(span0, "class", "pad s-AtPy_6gOzO0N");
      add_location(span0, file$U, 52, 2, 1244);
      attr_dev(span1, "class", "value s-AtPy_6gOzO0N");
      add_location(span1, file$U, 52, 34, 1276);
      attr_dev(span2, "class", "suffix s-AtPy_6gOzO0N");
      add_location(span2, file$U, 51, 3, 1220);
      attr_dev(span3, "class", "input s-AtPy_6gOzO0N");
      add_location(span3, file$U, 42, 0, 1080);
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
      if (detaching) {
        detach_dev(span3);
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$14.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function clamp(min2, num, max2) {
  return Math.min(Math.max(num, min2), max2);
}
function instance$14($$self, $$props, $$invalidate) {
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
    init(this, options, instance$14, create_fragment$14, safe_not_equal, {
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
      id: create_fragment$14.name
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
const file$T = "src/components/ColorPicker/Slider.svelte";
function create_fragment$13(ctx) {
  let div;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "role", "slider");
      attr_dev(
        div,
        "aria-valuenow",
        /*value*/
        ctx[0]
      );
      attr_dev(div, "tabindex", "0");
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
      add_location(div, file$T, 27, 0, 558);
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
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        attr_dev(
          div,
          "aria-valuenow",
          /*value*/
          ctx2[0]
        );
      }
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
      if (detaching) {
        detach_dev(div);
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$13.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$13($$self, $$props, $$invalidate) {
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
    init(this, options, instance$13, create_fragment$13, safe_not_equal, {
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
      id: create_fragment$13.name
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
const file$S = "src/components/ColorPicker/TwoDSelect.svelte";
function create_fragment$12(ctx) {
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
      attr_dev(div, "role", "slider");
      attr_dev(div, "tabindex", "-1");
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
      add_location(div, file$S, 31, 0, 622);
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
      if (detaching) {
        detach_dev(div);
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$12.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$12($$self, $$props, $$invalidate) {
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
    init(this, options, instance$12, create_fragment$12, safe_not_equal, { h: 2, bg: 3, x: 0, y: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TwoDSelect",
      options,
      id: create_fragment$12.name
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
const file$R = "src/components/ColorPicker/ColorPicker.svelte";
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(numberinput0, detaching);
      destroy_component(numberinput1, detaching);
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(numberinput0, detaching);
      destroy_component(numberinput1, detaching);
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(numberinput0, detaching);
      destroy_component(numberinput1, detaching);
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
function create_if_block$2(ctx) {
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
      add_location(span, file$R, 53, 5, 1427);
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
      if (detaching) {
        detach_dev(span);
      }
      destroy_component(hexinput);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: '(51:4) {#if colorType === \\"hex\\"}',
    ctx
  });
  return block;
}
function create_fragment$11(ctx) {
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
  const if_block_creators_1 = [create_if_block$2, create_if_block_1, create_if_block_2, create_if_block_3];
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
      add_location(div0, file$R, 33, 2, 887);
      attr_dev(div1, "class", "slider-container s-tCXq3qTKsCNT");
      add_location(div1, file$R, 34, 2, 911);
      attr_dev(div2, "class", "controls s-tCXq3qTKsCNT");
      add_location(div2, file$R, 32, 1, 862);
      option0.__value = "hex";
      set_input_value(option0, option0.__value);
      add_location(option0, file$R, 46, 4, 1211);
      option1.__value = "rgb";
      set_input_value(option1, option1.__value);
      add_location(option1, file$R, 47, 4, 1248);
      option2.__value = "hsl";
      set_input_value(option2, option2.__value);
      add_location(option2, file$R, 48, 4, 1285);
      option3.__value = "hsv";
      set_input_value(option3, option3.__value);
      add_location(option3, file$R, 49, 4, 1322);
      attr_dev(select, "class", "s-tCXq3qTKsCNT");
      if (
        /*colorType*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[9].call(select)
        ));
      add_location(select, file$R, 45, 3, 1175);
      attr_dev(div3, "class", "values s-tCXq3qTKsCNT");
      add_location(div3, file$R, 51, 3, 1371);
      attr_dev(div4, "class", "value-input s-tCXq3qTKsCNT");
      add_location(div4, file$R, 44, 2, 1146);
      add_location(div5, file$R, 43, 1, 1138);
      attr_dev(div6, "class", "color-picker s-tCXq3qTKsCNT");
      set_style(div6, "--color", style___color);
      add_location(div6, file$R, 14, 0, 352);
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
        ctx[0],
        true
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
      if (detaching) {
        detach_dev(div6);
      }
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
    id: create_fragment$11.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$11($$self, $$props, $$invalidate) {
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
    init(this, options, instance$11, create_fragment$11, safe_not_equal, { value: 2, colorType: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker",
      options,
      id: create_fragment$11.name
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
const file$Q = "src/components/ColorInput.svelte";
function create_if_block$1(ctx) {
  let div;
  let colorpicker;
  let updating_value;
  let current;
  function colorpicker_value_binding(value) {
    ctx[5](value);
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
      add_location(div, file$Q, 28, 3, 609);
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
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(colorpicker);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(26:2) {#if open}",
    ctx
  });
  return block;
}
function create_fragment$10(ctx) {
  let span1;
  let t0;
  let t1;
  let span0;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*open*/
    ctx[2] && create_if_block$1(ctx)
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
      attr_dev(span0, "role", "button");
      attr_dev(span0, "tabindex", "-1");
      attr_dev(span0, "class", "input s-KRbMAwMhhDv-");
      add_location(span0, file$Q, 26, 1, 521);
      attr_dev(span1, "role", "button");
      attr_dev(span1, "class", "container s-KRbMAwMhhDv-");
      attr_dev(span1, "tabindex", "-1");
      set_style(
        span1,
        "--color",
        /*value*/
        ctx[0]
      );
      add_location(span1, file$Q, 14, 0, 233);
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
            /*toggle*/
            ctx[4]
          ), false, false, false, false),
          listen_dev(span1, "click", self(
            /*toggle*/
            ctx[4]
          ), false, false, false, false),
          listen_dev(span1, "keydown", self(
            /*keydown_handler*/
            ctx[7]
          ), false, false, false, false),
          listen_dev(
            span1,
            "blur",
            /*blur_handler*/
            ctx[8],
            false,
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
          if_block = create_if_block$1(ctx2);
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
      if (detaching) {
        detach_dev(span1);
      }
      if (if_block)
        if_block.d();
      ctx[6](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$10.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$10($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorInput", slots, []);
  let { value } = $$props;
  let { title } = $$props;
  let open = false;
  let element2;
  function toggle() {
    $$invalidate(2, open = !open);
  }
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
  function span1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  const keydown_handler = (e) => e.key === "Escape" && $$invalidate(2, open = false);
  const blur_handler = () => $$invalidate(2, open = false);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
  };
  $$self.$capture_state = () => ({
    ColorPicker,
    value,
    title,
    open,
    element: element2,
    toggle
  });
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
    toggle,
    colorpicker_value_binding,
    span1_binding,
    keydown_handler,
    blur_handler
  ];
}
class ColorInput extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$10, create_fragment$10, safe_not_equal, { value: 0, title: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput",
      options,
      id: create_fragment$10.name
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
const file$P = "src/stories/SVG/Close.story.svelte";
function create_default_slot$n(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M1 1L9 9M1 9L9 1");
      add_location(path, file$P, 15, 2, 449);
      attr_dev(svg, "viewBox", "0 0 10 10");
      attr_dev(svg, "stroke-width", "2");
      attr_dev(
        svg,
        "stroke",
        /*color*/
        ctx[1]
      );
      attr_dev(svg, "stroke-linecap", "round");
      add_location(svg, file$P, 14, 0, 366);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$n.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 10 10\\" stroke-width=\\"2\\" stroke=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`} stroke-linecap=\\"round\\">     <path d=\\"M1 1L9 9M1 9L9 1\\" /> </svg> `} title=\\"SVGs/Close\\" icon=\\"ic:round-close\\">',
    ctx
  });
  return block;
}
function create_controls_slot$j(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    id: create_controls_slot$j.name,
    type: "slot",
    source: '(14:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$$(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 10 10" stroke-width="2" stroke=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`} stroke-linecap="round">
    <path d="M1 1L9 9M1 9L9 1" />
</svg>
`,
      title: "SVGs/Close",
      icon: "ic:round-close",
      $$slots: {
        controls: [create_controls_slot$j],
        default: [create_default_slot$n]
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 10 10" stroke-width="2" stroke=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`} stroke-linecap="round">
    <path d="M1 1L9 9M1 9L9 1" />
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$$.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$$($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Close_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Close_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$$, create_fragment$$, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Close_story",
      options,
      id: create_fragment$$.name
    });
  }
  get Hst() {
    throw new Error("<Close_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Close_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$O = "src/stories/SVG/Command.story.svelte";
function create_default_slot$m(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z");
      add_location(path, file$O, 17, 2, 574);
      attr_dev(svg, "viewBox", "0 0 19 19");
      attr_dev(svg, "fill-rule", "evenodd");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$O, 16, 0, 513);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$m.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 19 19\\" fill-rule=\\"evenodd\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <path d=\\"M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z\\" /> </svg> `} title=\\"SVGs/Command\\" icon=\\"ph:command\\">',
    ctx
  });
  return block;
}
function create_controls_slot$i(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    id: create_controls_slot$i.name,
    type: "slot",
    source: '(18:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$_(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 19 19" fill-rule="evenodd" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}>
    <path
d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z"
/>
</svg>
`,
      title: "SVGs/Command",
      icon: "ph:command",
      $$slots: {
        controls: [create_controls_slot$i],
        default: [create_default_slot$m]
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 19 19" fill-rule="evenodd" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}>
    <path
d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z"
/>
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$_.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$_($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Command_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Command_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$_, create_fragment$_, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Command_story",
      options,
      id: create_fragment$_.name
    });
  }
  get Hst() {
    throw new Error("<Command_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Command_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$N = "src/stories/SVG/Dilk.story.svelte";
function create_default_slot$l(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z");
      add_location(path, file$N, 15, 2, 385);
      attr_dev(svg, "viewBox", "0 0 6 6");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$N, 14, 0, 346);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$l.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 6 6\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <path d=\\"M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z\\" /> </svg> `} title=\\"SVGs/Dilk\\" icon=\\"lucide:image\\">',
    ctx
  });
  return block;
}
function create_controls_slot$h(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    id: create_controls_slot$h.name,
    type: "slot",
    source: '(14:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$Z(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 6 6" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}>
    <path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
</svg>
`,
      title: "SVGs/Dilk",
      icon: "lucide:image",
      $$slots: {
        controls: [create_controls_slot$h],
        default: [create_default_slot$l]
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 6 6" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}>
    <path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$Z.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$Z($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Dilk_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Dilk_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$Z, create_fragment$Z, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Dilk_story",
      options,
      id: create_fragment$Z.name
    });
  }
  get Hst() {
    throw new Error("<Dilk_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Dilk_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$M = "src/stories/SVG/Download.story.svelte";
function create_default_slot$k(ctx) {
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
      add_location(path0, file$M, 20, 2, 573);
      attr_dev(path1, "d", "M48 89l-20-20h13v-27h14v27h13z");
      attr_dev(
        path1,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(path1, file$M, -1, 700);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "none");
      add_location(svg, file$M, 19, 0, 531);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$k.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 100 100\\" fill=\\"none\\">     <path d=\\"M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5\\" stroke=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`} stroke-width=\\"8\\" />     <path d=\\"M48 89l-20-20h13v-27h14v27h13z\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`} /> </svg> `} title=\\"SVGs/Download\\" icon=\\"tabler:cloud-download\\">',
    ctx
  });
  return block;
}
function create_controls_slot$g(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    source: '(24:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$Y(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 100 100" fill="none">
    <path
d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
stroke=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}
stroke-width="8"
/>
    <path d="M48 89l-20-20h13v-27h14v27h13z" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`} />
</svg>
`,
      title: "SVGs/Download",
      icon: "tabler:cloud-download",
      $$slots: {
        controls: [create_controls_slot$g],
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 100 100" fill="none">
    <path
d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
stroke=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}
stroke-width="8"
/>
    <path d="M48 89l-20-20h13v-27h14v27h13z" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`} />
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$Y.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$Y($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Download_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Download_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$Y, create_fragment$Y, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Download_story",
      options,
      id: create_fragment$Y.name
    });
  }
  get Hst() {
    throw new Error("<Download_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Download_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$L = "src/stories/SVG/HotAirBalloon.story.svelte";
function create_default_slot$j(ctx) {
  let svg;
  let style;
  let t;
  let circle;
  let path0;
  let path1;
  let g;
  let path2;
  let path3;
  let path4;
  let path5;
  let path6;
  let path7;
  let path8;
  let path9;
  let path10;
  let path11;
  let path12;
  let path13;
  let path14;
  let path15;
  let defs;
  let linearGradient0;
  let stop0;
  let stop1;
  let linearGradient1;
  let stop2;
  let stop3;
  let linearGradient2;
  let stop4;
  let stop5;
  let linearGradient3;
  let stop6;
  let stop7;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text("svg {\n				border-radius: 50%;\n			}\n\n			.cloud {\n				fill: #fff;\n			}\n\n			.cloud.a {\n				transform: translateX(-100%);\n				animation: cloud1 2.3s 2s infinite linear;\n			}\n\n			.cloud.b {\n				transform: translateX(82%);\n				animation: cloud2 3.6s 1s infinite linear;\n			}\n\n			.cloud.c {\n				animation: cloud3 6s infinite linear;\n			}\n\n			#balloon {\n				animation: balloon 3s infinite alternate-reverse ease-in-out;\n			}\n\n			@keyframes cloud1 {\n				from {\n					transform: translateX(-100%);\n				}\n\n				to {\n					transform: translateX(90%);\n				}\n			}\n\n			@keyframes cloud2 {\n				from {\n					transform: translateX(-82%);\n				}\n\n				to {\n					transform: translateX(85%);\n				}\n			}\n\n			@keyframes cloud3 {\n				from {\n					transform: translateX(-32%);\n				}\n\n				to {\n					transform: translateX(97%);\n				}\n			}\n\n			@keyframes balloon {\n				from {\n					transform: translateY(-25px);\n				}\n\n				to {\n					transform: translateY(25px);\n				}\n			}\n		");
      circle = svg_element("circle");
      path0 = svg_element("path");
      path1 = svg_element("path");
      g = svg_element("g");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      path6 = svg_element("path");
      path7 = svg_element("path");
      path8 = svg_element("path");
      path9 = svg_element("path");
      path10 = svg_element("path");
      path11 = svg_element("path");
      path12 = svg_element("path");
      path13 = svg_element("path");
      path14 = svg_element("path");
      path15 = svg_element("path");
      defs = svg_element("defs");
      linearGradient0 = svg_element("linearGradient");
      stop0 = svg_element("stop");
      stop1 = svg_element("stop");
      linearGradient1 = svg_element("linearGradient");
      stop2 = svg_element("stop");
      stop3 = svg_element("stop");
      linearGradient2 = svg_element("linearGradient");
      stop4 = svg_element("stop");
      stop5 = svg_element("stop");
      linearGradient3 = svg_element("linearGradient");
      stop6 = svg_element("stop");
      stop7 = svg_element("stop");
      add_location(style, file$L, -1, 5525);
      attr_dev(circle, "cx", "300");
      attr_dev(circle, "cy", "300");
      attr_dev(circle, "r", "300");
      attr_dev(circle, "fill", "#b0e2f8");
      add_location(circle, file$L, -1, 6486);
      attr_dev(path0, "class", "cloud b");
      attr_dev(path0, "d", "M331 498a32 32 0 01 0-65a18 18 0 0128-20a61 61 0 01118 10a39 39 0 1110 75z");
      add_location(path0, file$L, -1, 6540);
      attr_dev(path1, "class", "cloud c");
      attr_dev(path1, "d", "M45 370a33 33 0 11 15-65a45 45 0 01 87-10a15 15 0 01 20 18a27 27 0 013 54z");
      add_location(path1, file$L, -1, 6654);
      attr_dev(path2, "d", "M279.8 487.867v14.892a11 11 0 0 0 11 11h16.847a11 11 0 0 0 11-11v-14.892H279.8z");
      attr_dev(path2, "fill", "#92573e");
      add_location(path2, file$L, -1, 6788);
      attr_dev(path3, "d", "M279.797 469.236c10.485-7 24.325-7.94 38.463 0 0 0-13.73-36.634 30.662-98.73-51.584-17.073-113.37-1.858-137.052 26.08 32.78 30.56 66.238 61.784 67.927 72.65z");
      attr_dev(path3, "fill", "url(#A)");
      add_location(path3, file$L, -1, 6910);
      attr_dev(path4, "d", "M211.54 396.278l.33.31c23.682-27.938 85.468-43.153 137.052-26.08 4.565-6.387 9.745-13.042 15.62-19.955 12.8-15.077 25.32-32.268 35.685-50.592-85.955-47.727-223.136-4.254-245.564 40.025 10.907 13.435 33.695 34.68 56.877 56.293z");
      attr_dev(path4, "fill", "url(#B)");
      add_location(path4, file$L, -1, 7110);
      attr_dev(path5, "d", "M154.662 339.985c22.428-44.28 159.61-87.752 245.564-40.025 11.285-19.95 20.03-41.246 23.853-62.62-89.77-34.857-252-38.092-307.966 45.313 8.593 19.404 21.734 36.622 38.55 57.333z");
      attr_dev(path5, "fill", "#ffd600");
      add_location(path5, file$L, -1, 7379);
      attr_dev(path6, "d", "M106.027 246.37c1.783 13.498 5.2 25.243 10.086 36.28 55.976-83.405 218.197-80.17 307.966-45.313 1.956-10.932 2.624-21.885 1.687-32.7-127.1-55.217-272.86-11.118-319.74 41.722z");
      attr_dev(path6, "fill", "#fff");
      add_location(path6, file$L, -1, 7599);
      attr_dev(path7, "d", "M106.027 246.37c46.88-52.84 192.64-96.94 319.74-41.722-1.58-18.224-7.726-36.027-19.967-52.597-111.307-41.332-282.866-15.52-299.772 94.32z");
      attr_dev(path7, "fill", "url(#C)");
      add_location(path7, file$L, -1, 7813);
      attr_dev(path8, "d", "M299.13 86.867C112.16 86.455 101.11 209.145 106.027 246.37c16.906-109.838 188.465-135.65 299.772-94.32-18.99-25.705-52.645-48.444-106.668-65.185z");
      attr_dev(path8, "fill", "url(#D)");
      add_location(path8, file$L, -1, 7993);
      attr_dev(path9, "d", "M495.508 229.252c.47-50.768-30.48-142.02-196.377-142.385 54.023 16.74 87.68 39.48 106.668 65.185 43.086 16 77.144 42.06 89.71 77.2z");
      attr_dev(path9, "fill", "#e46a11");
      add_location(path9, file$L, -1, 8181);
      attr_dev(path10, "d", "M494.02 246.37c.862-4.873 1.428-10.67 1.488-17.12-12.565-35.14-46.623-61.2-89.71-77.2 12.24 16.57 18.388 34.373 19.967 52.597 23.65 10.274 46.654 23.987 68.254 41.722z");
      attr_dev(path10, "fill", "#e6a600");
      add_location(path10, file$L, -1, 8355);
      attr_dev(path11, "d", "M482.502 279.437c9.59-20.56 10.33-26.343 11.518-33.066a288.19 288.19 0 0 0-68.253-41.722c.936 10.805.268 21.758-1.688 32.7 29.164 11.324 50.68 25.985 58.423 42.098z");
      attr_dev(path11, "fill", "#e6e6e6");
      add_location(path11, file$L, -1, 8565);
      attr_dev(path12, "d", "M400.226 299.96c16.957 9.415 31.92 22.38 43.615 39.588 19.24-23.48 31.243-44.206 38.66-60.11-7.743-16.113-29.26-30.774-58.423-42.098-3.824 21.375-12.568 42.67-23.853 62.62z");
      attr_dev(path12, "fill", "#ccab00");
      add_location(path12, file$L, -1, 8772);
      attr_dev(path13, "d", "M389.193 393.223c22.782-20.366 43.807-40.444 54.648-53.675-11.695-17.208-26.658-30.173-43.615-39.588-10.366 18.324-22.875 35.515-35.685 50.592-5.874 6.913-11.054 13.568-15.62 19.954 14.607 4.835 28.397 12.26 40.27 22.717z");
      attr_dev(path13, "fill", "#ee7e16");
      add_location(path13, file$L, -1, 8987);
      attr_dev(path14, "d", "M318.26 469.236c3.2-15.177 37.767-46.363 70.933-76.012-11.874-10.458-25.664-17.883-40.27-22.717-44.393 62.095-30.662 98.73-30.662 98.73z");
      attr_dev(path14, "fill", "#d1610f");
      add_location(path14, file$L, -1, 9251);
      attr_dev(g, "id", "balloon");
      add_location(g, file$L, -1, 6768);
      attr_dev(path15, "class", "cloud a");
      attr_dev(path15, "d", "M280 255a60 60 0 1120-115a93 93 0 01180-20a30 30 0 0140 30a50 50 0 010 100z");
      add_location(path15, file$L, -1, 9436);
      attr_dev(stop0, "stop-color", "#e79f11");
      add_location(stop0, file$L, -1, 9700);
      attr_dev(stop1, "offset", "1");
      attr_dev(stop1, "stop-color", "#e76b11");
      add_location(stop1, file$L, -1, 9734);
      attr_dev(linearGradient0, "id", "A");
      attr_dev(linearGradient0, "x1", "239.679");
      attr_dev(linearGradient0, "y1", "421.758");
      attr_dev(linearGradient0, "x2", "330.642");
      attr_dev(linearGradient0, "y2", "401.983");
      attr_dev(linearGradient0, "gradientUnits", "userSpaceOnUse");
      add_location(linearGradient0, file$L, -1, 9561);
      attr_dev(stop2, "stop-color", "#f0d230");
      add_location(stop2, file$L, -1, 9936);
      attr_dev(stop3, "offset", ".911");
      attr_dev(stop3, "stop-color", "#f08c30");
      add_location(stop3, file$L, -1, 9970);
      attr_dev(linearGradient1, "id", "B");
      attr_dev(linearGradient1, "x1", "176.4");
      attr_dev(linearGradient1, "y1", "359.468");
      attr_dev(linearGradient1, "x2", "400.226");
      attr_dev(linearGradient1, "y2", "310.031");
      attr_dev(linearGradient1, "gradientUnits", "userSpaceOnUse");
      add_location(linearGradient1, file$L, -1, 9799);
      attr_dev(stop4, "stop-color", "#f9d659");
      add_location(stop4, file$L, -1, 10177);
      attr_dev(stop5, "offset", "1");
      attr_dev(stop5, "stop-color", "#ffb800");
      add_location(stop5, file$L, -1, 10211);
      attr_dev(linearGradient2, "id", "C");
      attr_dev(linearGradient2, "x1", "106.027");
      attr_dev(linearGradient2, "y1", "238.842");
      attr_dev(linearGradient2, "x2", "409.741");
      attr_dev(linearGradient2, "y2", "174.575");
      attr_dev(linearGradient2, "gradientUnits", "userSpaceOnUse");
      add_location(linearGradient2, file$L, -1, 10038);
      attr_dev(stop6, "stop-color", "#f0af30");
      add_location(stop6, file$L, -1, 10414);
      attr_dev(stop7, "offset", "1");
      attr_dev(stop7, "stop-color", "#ef7d2b");
      add_location(stop7, file$L, -1, 10448);
      attr_dev(linearGradient3, "id", "D");
      attr_dev(linearGradient3, "x1", "105.191");
      attr_dev(linearGradient3, "y1", "234.887");
      attr_dev(linearGradient3, "x2", "320.755");
      attr_dev(linearGradient3, "y2", "95.476");
      attr_dev(linearGradient3, "gradientUnits", "userSpaceOnUse");
      add_location(linearGradient3, file$L, -1, 10276);
      add_location(defs, file$L, -1, 9551);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 600 600");
      attr_dev(svg, "fill", "none");
      add_location(svg, file$L, -1, 5448);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, style);
      append_dev(style, t);
      append_dev(svg, circle);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, g);
      append_dev(g, path2);
      append_dev(g, path3);
      append_dev(g, path4);
      append_dev(g, path5);
      append_dev(g, path6);
      append_dev(g, path7);
      append_dev(g, path8);
      append_dev(g, path9);
      append_dev(g, path10);
      append_dev(g, path11);
      append_dev(g, path12);
      append_dev(g, path13);
      append_dev(g, path14);
      append_dev(svg, path15);
      append_dev(svg, defs);
      append_dev(defs, linearGradient0);
      append_dev(linearGradient0, stop0);
      append_dev(linearGradient0, stop1);
      append_dev(defs, linearGradient1);
      append_dev(linearGradient1, stop2);
      append_dev(linearGradient1, stop3);
      append_dev(defs, linearGradient2);
      append_dev(linearGradient2, stop4);
      append_dev(linearGradient2, stop5);
      append_dev(defs, linearGradient3);
      append_dev(linearGradient3, stop6);
      append_dev(linearGradient3, stop7);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$j.name,
    type: "slot",
    source: '(4:0) <Hst.Story source={` <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 600 600\\" fill=\\"none\\">     <style>         svg {         border-radius: 50%;         }                  .cloud {         fill: #fff;         }                  .cloud.a {         transform: translateX(-100%);         animation: cloud1 2.3s 2s infinite linear;         }                  .cloud.b {         transform: translateX(82%);         animation: cloud2 3.6s 1s infinite linear;         }                  .cloud.c {         animation: cloud3 6s infinite linear;         }                  #balloon {         animation: balloon 3s infinite alternate-reverse ease-in-out;         }                  @keyframes cloud1 {         from {         transform: translateX(-100%);         }                  to {         transform: translateX(90%);         }         }                  @keyframes cloud2 {         from {         transform: translateX(-82%);         }                  to {         transform: translateX(85%);         }         }                  @keyframes cloud3 {         from {         transform: translateX(-32%);         }                  to {         transform: translateX(97%);         }         }                  @keyframes balloon {         from {         transform: translateY(-25px);         }                  to {         transform: translateY(25px);         }         }     </style>     <circle cx=\\"300\\" cy=\\"300\\" r=\\"300\\" fill=\\"#b0e2f8\\" />     <path class=\\"cloud b\\" d=\\"M331 498a32 32 0 01 0-65a18 18 0 0128-20a61 61 0 01118 10a39 39 0 1110 75z\\" />     <path class=\\"cloud c\\" d=\\"M45 370a33 33 0 11 15-65a45 45 0 01 87-10a15 15 0 01 20 18a27 27 0 013 54z\\" />     <g id=\\"balloon\\">         <path d=\\"M279.8 487.867v14.892a11 11 0 0 0 11 11h16.847a11 11 0 0 0 11-11v-14.892H279.8z\\" fill=\\"#92573e\\" />         <path d=\\"M279.797 469.236c10.485-7 24.325-7.94 38.463 0 0 0-13.73-36.634 30.662-98.73-51.584-17.073-113.37-1.858-137.052 26.08 32.78 30.56 66.238 61.784 67.927 72.65z\\" fill=\\"url(#A)\\" />         <path d=\\"M211.54 396.278l.33.31c23.682-27.938 85.468-43.153 137.052-26.08 4.565-6.387 9.745-13.042 15.62-19.955 12.8-15.077 25.32-32.268 35.685-50.592-85.955-47.727-223.136-4.254-245.564 40.025 10.907 13.435 33.695 34.68 56.877 56.293z\\" fill=\\"url(#B)\\" />         <path d=\\"M154.662 339.985c22.428-44.28 159.61-87.752 245.564-40.025 11.285-19.95 20.03-41.246 23.853-62.62-89.77-34.857-252-38.092-307.966 45.313 8.593 19.404 21.734 36.622 38.55 57.333z\\" fill=\\"#ffd600\\" />         <path d=\\"M106.027 246.37c1.783 13.498 5.2 25.243 10.086 36.28 55.976-83.405 218.197-80.17 307.966-45.313 1.956-10.932 2.624-21.885 1.687-32.7-127.1-55.217-272.86-11.118-319.74 41.722z\\" fill=\\"#fff\\" />         <path d=\\"M106.027 246.37c46.88-52.84 192.64-96.94 319.74-41.722-1.58-18.224-7.726-36.027-19.967-52.597-111.307-41.332-282.866-15.52-299.772 94.32z\\" fill=\\"url(#C)\\" />         <path d=\\"M299.13 86.867C112.16 86.455 101.11 209.145 106.027 246.37c16.906-109.838 188.465-135.65 299.772-94.32-18.99-25.705-52.645-48.444-106.668-65.185z\\" fill=\\"url(#D)\\" />         <path d=\\"M495.508 229.252c.47-50.768-30.48-142.02-196.377-142.385 54.023 16.74 87.68 39.48 106.668 65.185 43.086 16 77.144 42.06 89.71 77.2z\\" fill=\\"#e46a11\\" />         <path d=\\"M494.02 246.37c.862-4.873 1.428-10.67 1.488-17.12-12.565-35.14-46.623-61.2-89.71-77.2 12.24 16.57 18.388 34.373 19.967 52.597 23.65 10.274 46.654 23.987 68.254 41.722z\\" fill=\\"#e6a600\\" />         <path d=\\"M482.502 279.437c9.59-20.56 10.33-26.343 11.518-33.066a288.19 288.19 0 0 0-68.253-41.722c.936 10.805.268 21.758-1.688 32.7 29.164 11.324 50.68 25.985 58.423 42.098z\\" fill=\\"#e6e6e6\\" />         <path d=\\"M400.226 299.96c16.957 9.415 31.92 22.38 43.615 39.588 19.24-23.48 31.243-44.206 38.66-60.11-7.743-16.113-29.26-30.774-58.423-42.098-3.824 21.375-12.568 42.67-23.853 62.62z\\" fill=\\"#ccab00\\" />         <path d=\\"M389.193 393.223c22.782-20.366 43.807-40.444 54.648-53.675-11.695-17.208-26.658-30.173-43.615-39.588-10.366 18.324-22.875 35.515-35.685 50.592-5.874 6.913-11.054 13.568-15.62 19.954 14.607 4.835 28.397 12.26 40.27 22.717z\\" fill=\\"#ee7e16\\" />         <path d=\\"M318.26 469.236c3.2-15.177 37.767-46.363 70.933-76.012-11.874-10.458-25.664-17.883-40.27-22.717-44.393 62.095-30.662 98.73-30.662 98.73z\\" fill=\\"#d1610f\\" />     </g>     <path class=\\"cloud a\\" d=\\"M280 255a60 60 0 1120-115a93 93 0 01180-20a30 30 0 0140 30a50 50 0 010 100z\\" />     <defs>         <linearGradient id=\\"A\\" x1=\\"239.679\\" y1=\\"421.758\\" x2=\\"330.642\\" y2=\\"401.983\\" gradientUnits=\\"userSpaceOnUse\\" >             <stop stop-color=\\"#e79f11\\" />             <stop offset=\\"1\\" stop-color=\\"#e76b11\\" />         </linearGradient>         <linearGradient id=\\"B\\" x1=\\"176.4\\" y1=\\"359.468\\" x2=\\"400.226\\" y2=\\"310.031\\" gradientUnits=\\"userSpaceOnUse\\" >             <stop stop-color=\\"#f0d230\\" />             <stop offset=\\".911\\" stop-color=\\"#f08c30\\" />         </linearGradient>         <linearGradient id=\\"C\\" x1=\\"106.027\\" y1=\\"238.842\\" x2=\\"409.741\\" y2=\\"174.575\\" gradientUnits=\\"userSpaceOnUse\\" >             <stop stop-color=\\"#f9d659\\" />             <stop offset=\\"1\\" stop-color=\\"#ffb800\\" />         </linearGradient>         <linearGradient id=\\"D\\" x1=\\"105.191\\" y1=\\"234.887\\" x2=\\"320.755\\" y2=\\"95.476\\" gradientUnits=\\"userSpaceOnUse\\" >             <stop stop-color=\\"#f0af30\\" />             <stop offset=\\"1\\" stop-color=\\"#ef7d2b\\" />         </linearGradient>     </defs> </svg> `} title=\\"SVGs/Hot Air Balloon\\" icon=\\"iconoir:hot-air-balloon\\">',
    ctx
  });
  return block;
}
function create_fragment$X(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
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
`,
      title: "SVGs/Hot Air Balloon",
      icon: "iconoir:hot-air-balloon",
      $$slots: { default: [create_default_slot$j] },
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
    id: create_fragment$X.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$X($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("HotAirBalloon_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<HotAirBalloon_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<HotAirBalloon_story> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class HotAirBalloon_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$X, create_fragment$X, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HotAirBalloon_story",
      options,
      id: create_fragment$X.name
    });
  }
  get Hst() {
    throw new Error("<HotAirBalloon_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<HotAirBalloon_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$K = "src/lib/Button.svelte";
function create_fragment$W(ctx) {
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
      add_location(button, file$K, 0, 0, 0);
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
      if (detaching) {
        detach_dev(button);
      }
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$W.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$W($$self, $$props, $$invalidate) {
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
    init(this, options, instance$W, create_fragment$W, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment$W.name
    });
  }
}
const file$J = "src/stories/SVG/Logo.story.svelte";
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
      add_location(rect, file$J, 156, 3, 9772);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$J, 157, 2, 9837);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$J, 155, 3, 9749);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$J, 160, 4, 9939);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$J, 159, 3, 9911);
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$J, 165, 3, 10808);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$J, 154, 0, 9705);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7$1.name,
    type: "slot",
    source: '(136:1) <Hst.Variant title=\\"Default\\" icon=\\"mdi:cog\\"  source={` <svg viewBox=\\"0 0 100 100\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <mask id=\\"cutout\\">         <rect x=\\"0\\" y=\\"0\\" width=\\"100%\\" height=\\"100%\\" fill=\\"white\\" />         <path fill=\\"#000\\" d=\\"M0 -11l70 51c7 5 7 15 0 20l-70 51z\\" />     </mask>     <g mask=\\"url(#cutout)\\">         <path fill-rule=\\"evenodd\\" d=\\"M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z\\" />     </g>     <path d=\\"M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z\\" /> </svg> `}>',
    ctx
  });
  return block;
}
function create_controls_slot_4$2(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[4](value);
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
    id: create_controls_slot_4$2.name,
    type: "slot",
    source: '(164:2) <svelte:fragment slot=\\"controls\\">',
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
      add_location(path, file$J, 179, 0, 12014);
      attr_dev(svg, "viewBox", "0 0 256 256");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$J, 178, 0, 11970);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6$2.name,
    type: "slot",
    source: '(168:1) <Hst.Variant title=\\"Flat\\" icon=\\"mdi:cog\\"  source={` <svg viewBox=\\"0 0 256 256\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <path d=\\"M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z\\" /> </svg> `}>',
    ctx
  });
  return block;
}
function create_controls_slot_3$2(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding_1(value) {
    ctx[5](value);
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
    id: create_controls_slot_3$2.name,
    type: "slot",
    source: '(180:2) <svelte:fragment slot=\\"controls\\">',
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
      add_location(style, file$J, 191, 0, 13058);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$J, 235, 4, 13846);
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$J, 236, 3, 13911);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$J, 234, 4, 13822);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      attr_dev(
        path1,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(path1, file$J, 239, 4, 14021);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$J, 238, 3, 13992);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      attr_dev(
        path2,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(path2, file$J, -1, 14929);
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$J, -1, 13026);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block_1.name,
    type: "key",
    source: "(186:2) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_5$3(ctx) {
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
      if (detaching) {
        detach_dev(key_block_anchor);
      }
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5$3.name,
    type: "slot",
    source: '(184:1) <Hst.Variant title=\\"Animated\\" icon=\\"mdi:cog\\"  source={` `}>',
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
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$3.name,
    type: "slot",
    source: "(251:3) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot_2$2(ctx) {
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
    ctx[6]
  );
  function colorinput_value_binding_2(value) {
    ctx[7](value);
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(button, detaching);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_2$2.name,
    type: "slot",
    source: '(250:2) <svelte:fragment slot=\\"controls\\">',
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
      add_location(style, file$J, 292, 0, 17061);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "#fff");
      add_location(rect, file$J, 310, 0, 17389);
      attr_dev(path0, "fill", "#000");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$J, 311, 0, 17453);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$J, 309, 0, 17366);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$J, 314, 0, 17572);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$J, 313, 0, 17544);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$J, 320, 0, 18455);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$J, 291, 0, 16983);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$4.name,
    type: "slot",
    source: '(255:1) <Hst.Variant title=\\"Infinitely Animated\\" icon=\\"mdi:cog\\"  source={` <svg viewBox=\\"0 0 100 100\\" style:--speed=\\"{rotation_speed}s\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <style>         #cog {         animation: cog linear infinite;         animation-duration: var(--speed);         transform-origin: center;         transform-box: fill-box;         }                  @keyframes cog {         from {         transform: rotate(0deg);         }         to {         transform: rotate(360deg);         }         }     </style>     <mask id=\\"cutout\\">         <rect x=\\"0\\" y=\\"0\\" width=\\"100%\\" height=\\"100%\\" fill=\\"#fff\\" />         <path fill=\\"#000\\" id=\\"cutout-path\\" d=\\"M0 -11l70 51c7 5 7 15 0 20l-70 51z\\" />     </mask>     <g mask=\\"url(#cutout)\\">         <path id=\\"cog\\" fill-rule=\\"evenodd\\" d=\\"M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z\\" />     </g>     <path id=\\"m\\" d=\\"M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z\\" /> </svg> `}>',
    ctx
  });
  return block;
}
function create_controls_slot_1$2(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let colorinput;
  let updating_value_1;
  let current;
  function hst_slider_value_binding(value) {
    ctx[8](value);
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1$2.name,
    type: "slot",
    source: '(319:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_key_block$9(ctx) {
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
      add_location(style, file$J, 331, 0, 18896);
      attr_dev(rect, "x", "0");
      attr_dev(rect, "y", "0");
      attr_dev(rect, "width", "100%");
      attr_dev(rect, "height", "100%");
      attr_dev(rect, "fill", "white");
      add_location(rect, file$J, -1, 20283);
      attr_dev(path0, "fill", "black");
      attr_dev(path0, "id", "cutout-path");
      attr_dev(path0, "d", "M0 -11l70 51c7 5 7 15 0 20l-70 51z");
      add_location(path0, file$J, -1, 20349);
      attr_dev(mask, "id", "cutout");
      add_location(mask, file$J, -1, 20259);
      attr_dev(path1, "id", "cog");
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z");
      add_location(path1, file$J, -1, 20472);
      attr_dev(g, "mask", "url(#cutout)");
      add_location(g, file$J, -1, 20443);
      attr_dev(path2, "id", "m");
      attr_dev(path2, "d", "M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z");
      add_location(path2, file$J, -1, 21361);
      attr_dev(text0, "textLength", "46");
      attr_dev(text0, "x", "50");
      attr_dev(text0, "y", "120");
      attr_dev(text0, "class", "name text");
      add_location(text0, file$J, -1, 21444);
      attr_dev(text1, "textLength", "74");
      attr_dev(text1, "x", "50");
      attr_dev(text1, "y", "145");
      attr_dev(text1, "class", "surname text");
      add_location(text1, file$J, -1, 21516);
      attr_dev(svg, "width", "65%");
      attr_dev(svg, "viewBox", "0 0 100 150");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[3]
      );
      add_location(svg, file$J, 330, 0, 18839);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$9.name,
    type: "key",
    source: "(326:2) {#key key}",
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
  let key_block = create_key_block$9(ctx);
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
        key_block = create_key_block$9(ctx2);
        key_block.c();
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(key_block_anchor);
      }
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$6.name,
    type: "slot",
    source: '(324:1) <Hst.Variant title=\\"Animated With Name\\" icon=\\"mdi:cog\\"  source={` `}>',
    ctx
  });
  return block;
}
function create_default_slot_1$7(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Play Animation");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$7.name,
    type: "slot",
    source: "(406:3) <Button on:click={() => (key = !key)}>",
    ctx
  });
  return block;
}
function create_controls_slot$f(ctx) {
  let button;
  let t;
  let colorinput;
  let updating_value;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot_1$7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_1*/
    ctx[10]
  );
  function colorinput_value_binding_4(value) {
    ctx[11](value);
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(button, detaching);
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$f.name,
    type: "slot",
    source: '(405:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot$i(ctx) {
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
      source: `
<svg viewBox="0 0 100 100" fill=${typeof /*color*/
      ctx[3] === "string" ? `"${/*color*/
      ctx[3]}"` : `{${/*color*/
      ctx[3]}}`}>
    <mask id="cutout">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <path fill="#000" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
    </mask>
    <g mask="url(#cutout)">
        <path
fill-rule="evenodd"
d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z"
/>
    </g>
    <path d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
`,
      $$slots: {
        controls: [create_controls_slot_4$2],
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
      source: `
<svg viewBox="0 0 256 256" fill=${typeof /*color*/
      ctx[3] === "string" ? `"${/*color*/
      ctx[3]}"` : `{${/*color*/
      ctx[3]}}`}>
    <path
d="M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z"
/>
</svg>
`,
      $$slots: {
        controls: [create_controls_slot_3$2],
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
      source: `
`,
      $$slots: {
        controls: [create_controls_slot_2$2],
        default: [create_default_slot_5$3]
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
      source: `
<svg viewBox="0 0 100 100" style:--speed="{rotation_speed}s" fill=${typeof /*color*/
      ctx[3] === "string" ? `"${/*color*/
      ctx[3]}"` : `{${/*color*/
      ctx[3]}}`}>
    <style>
        #cog {
        animation: cog linear infinite;
        animation-duration: var(--speed);
        transform-origin: center;
        transform-box: fill-box;
        }
        
        @keyframes cog {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
        }
    </style>
    <mask id="cutout">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <path fill="#000" id="cutout-path" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
    </mask>
    <g mask="url(#cutout)">
        <path
id="cog"
fill-rule="evenodd"
d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z"
/>
    </g>
    <path id="m" d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
`,
      $$slots: {
        controls: [create_controls_slot_1$2],
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
      source: `
`,
      $$slots: {
        controls: [create_controls_slot$f],
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
      if (dirty & /*color*/
      8)
        hst_variant0_changes.source = `
<svg viewBox="0 0 100 100" fill=${typeof /*color*/
        ctx2[3] === "string" ? `"${/*color*/
        ctx2[3]}"` : `{${/*color*/
        ctx2[3]}}`}>
    <mask id="cutout">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <path fill="#000" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
    </mask>
    <g mask="url(#cutout)">
        <path
fill-rule="evenodd"
d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z"
/>
    </g>
    <path d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
`;
      if (dirty & /*$$scope, color*/
      131080) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*color*/
      8)
        hst_variant1_changes.source = `
<svg viewBox="0 0 256 256" fill=${typeof /*color*/
        ctx2[3] === "string" ? `"${/*color*/
        ctx2[3]}"` : `{${/*color*/
        ctx2[3]}}`}>
    <path
d="M103.559 209.461l-33.01 24.243-.29 8.924 17.523 7.258 10.352-11.056 15.048 2.994 5.338 14.175h18.967l5.333-14.176 15.048-2.993 10.357 11.054 17.523-7.259-.498-15.138 12.758-8.523 13.798 6.249 13.412-13.412-6.253-13.795 8.524-12.756 15.14.492 7.258-17.523-11.056-10.352 2.994-15.048L256 137.481v-18.967l-14.176-5.333-2.993-15.048 11.056-10.352-7.258-17.523-15.14.492-8.524-12.757 6.253-13.795-13.412-13.412-13.798 6.249-12.758-8.523.498-15.138-17.523-7.258-10.357 11.053-15.048-2.992L137.487.001H118.52l-5.338 14.175-15.048 2.994L87.782 6.114l-17.523 7.258.29 8.924 33.01 24.243c7.741-2.319 15.946-3.566 24.442-3.566 46.959 0 85.026 38.068 85.026 85.026s-38.067 85.026-85.026 85.026c-8.496 0-16.701-1.246-24.442-3.565zM95.2 61.6h26v133h-18v-104l-33 104-33-104v104h-18v-133h26l25 82z"
/>
</svg>
`;
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
      if (dirty & /*color*/
      8)
        hst_variant3_changes.source = `
<svg viewBox="0 0 100 100" style:--speed="{rotation_speed}s" fill=${typeof /*color*/
        ctx2[3] === "string" ? `"${/*color*/
        ctx2[3]}"` : `{${/*color*/
        ctx2[3]}}`}>
    <style>
        #cog {
        animation: cog linear infinite;
        animation-duration: var(--speed);
        transform-origin: center;
        transform-box: fill-box;
        }
        
        @keyframes cog {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
        }
    </style>
    <mask id="cutout">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <path fill="#000" id="cutout-path" d="M0 -11l70 51c7 5 7 15 0 20l-70 51z" />
    </mask>
    <g mask="url(#cutout)">
        <path
id="cog"
fill-rule="evenodd"
d="M53.706 0h-7.41l-2.085 5.537-5.878 1.17-4.044-4.32-6.845 2.835.192 5.914-4.983 3.33-5.39-2.443-5.24 5.24 2.44 5.4-3.33 4.983-5.913-.195L2.4 34.287l4.318 4.046-1.17 5.878-5.538 2.083v7.41l5.537 2.085 1.17 5.878L2.4 65.713l2.835 6.845 5.913-.195 3.33 4.983-2.44 5.4 5.24 5.24 5.39-2.443 4.983 3.33-.192 5.914 6.845 2.835 4.044-4.32 5.878 1.17L46.297 100h7.41l2.083-5.538 5.878-1.17 4.046 4.318 6.845-2.835-.195-5.913 4.983-3.33 5.4 2.44 5.24-5.24-2.443-5.39 3.33-4.983 5.914.192 2.835-6.845-4.32-4.044 1.17-5.878L100 53.703v-7.41l-5.538-2.083-1.17-5.878 4.32-4.044-2.835-6.845-5.914.192-3.33-4.983 2.443-5.39-5.24-5.24-5.4 2.44-4.983-3.33.195-5.913-6.845-2.835-4.046 4.318-5.878-1.17L53.706 0zM50 83.213c18.343 0 33.214-14.87 33.214-33.213S68.344 16.787 50 16.787 16.787 31.657 16.787 50 31.657 83.213 50 83.213z"
/>
    </g>
    <path id="m" d="M7.5 24v52h7v-39l13 39l13 -39v39h7v-52h-10l-10 32l-10 -32z" />
</svg>
`;
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
      destroy_component(hst_variant2, detaching);
      destroy_component(hst_variant3, detaching);
      destroy_component(hst_variant4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$i.name,
    type: "slot",
    source: '(135:0) <Hst.Story title=\\"Logo\\" icon=\\"mdi:cog\\">',
    ctx
  });
  return block;
}
function create_fragment$V(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Logo",
      icon: "mdi:cog",
      $$slots: { default: [create_default_slot$i] },
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
    id: create_fragment$V.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$V($$self, $$props, $$invalidate) {
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
    init(this, options, instance$V, create_fragment$V, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Logo_story",
      options,
      id: create_fragment$V.name
    });
  }
  get Hst() {
    throw new Error("<Logo_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Logo_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$I = "src/stories/SVG/Maximize.story.svelte";
function create_default_slot$h(ctx) {
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
      add_location(style, file$I, 39, 2, 997);
      attr_dev(path0, "class", "tl");
      attr_dev(path0, "d", "M10,10h30v10h-20v20h-10z");
      add_location(path0, file$I, -1, 1334);
      attr_dev(path1, "class", "tr");
      attr_dev(path1, "d", "M60,10 h30v30h-10v-20h-20z");
      add_location(path1, file$I, -1, 1385);
      attr_dev(path2, "class", "bl");
      attr_dev(path2, "d", "M10,60v30h30v-10h-20v-20z");
      add_location(path2, file$I, -1, 1438);
      attr_dev(path3, "class", "br");
      attr_dev(path3, "d", "M80,60h10v30h-30v-10h20z");
      add_location(path3, file$I, -1, 1490);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$I, 38, 0, 954);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$h.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 100 100\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <style>         path {         transition: transform 0.25s ease-in-out;         }                  svg:hover .tl {         transform: translate(-10px, -10px);         }                  svg:hover .tr {         transform: translate(10px, -10px);         }                  svg:hover .bl {         transform: translate(-10px, 10px);         }                  svg:hover .br {         transform: translate(10px, 10px);         }     </style>     <path class=\\"tl\\" d=\\"M10,10h30v10h-20v20h-10z\\" />     <path class=\\"tr\\" d=\\"M60,10 h30v30h-10v-20h-20z\\" />     <path class=\\"bl\\" d=\\"M10,60v30h30v-10h-20v-20z\\" />     <path class=\\"br\\" d=\\"M80,60h10v30h-30v-10h20z\\" /> </svg> `} title=\\"SVGs/Maximize\\" icon=\\"tabler:maximize\\">',
    ctx
  });
  return block;
}
function create_controls_slot$e(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    source: '(62:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$U(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 100 100" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}>
    <style>
        path {
        transition: transform 0.25s ease-in-out;
        }
        
        svg:hover .tl {
        transform: translate(-10px, -10px);
        }
        
        svg:hover .tr {
        transform: translate(10px, -10px);
        }
        
        svg:hover .bl {
        transform: translate(-10px, 10px);
        }
        
        svg:hover .br {
        transform: translate(10px, 10px);
        }
    </style>
    <path class="tl" d="M10,10h30v10h-20v20h-10z" />
    <path class="tr" d="M60,10 h30v30h-10v-20h-20z" />
    <path class="bl" d="M10,60v30h30v-10h-20v-20z" />
    <path class="br" d="M80,60h10v30h-30v-10h20z" />
</svg>
`,
      title: "SVGs/Maximize",
      icon: "tabler:maximize",
      $$slots: {
        controls: [create_controls_slot$e],
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 100 100" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}>
    <style>
        path {
        transition: transform 0.25s ease-in-out;
        }
        
        svg:hover .tl {
        transform: translate(-10px, -10px);
        }
        
        svg:hover .tr {
        transform: translate(10px, -10px);
        }
        
        svg:hover .bl {
        transform: translate(-10px, 10px);
        }
        
        svg:hover .br {
        transform: translate(10px, 10px);
        }
    </style>
    <path class="tl" d="M10,10h30v10h-20v20h-10z" />
    <path class="tr" d="M60,10 h30v30h-10v-20h-20z" />
    <path class="bl" d="M10,60v30h30v-10h-20v-20z" />
    <path class="br" d="M80,60h10v30h-30v-10h20z" />
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$U.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$U($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Maximize_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Maximize_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$U, create_fragment$U, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Maximize_story",
      options,
      id: create_fragment$U.name
    });
  }
  get Hst() {
    throw new Error("<Maximize_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Maximize_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$H = "src/stories/SVG/Peacediscipline.story.svelte";
function create_default_slot$g(ctx) {
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
      add_location(circle0, file$H, 47, 2, 1655);
      attr_dev(circle1, "r", "46");
      attr_dev(circle1, "cx", "684");
      attr_dev(circle1, "cy", "349");
      add_location(circle1, file$H, 48, 2, 1694);
      attr_dev(circle2, "r", "32");
      attr_dev(circle2, "cx", "676");
      attr_dev(circle2, "cy", "260");
      add_location(circle2, file$H, -1, 1732);
      attr_dev(circle3, "r", "64");
      attr_dev(circle3, "cx", "577");
      attr_dev(circle3, "cy", "223");
      add_location(circle3, file$H, -1, 1770);
      attr_dev(circle4, "r", "32");
      attr_dev(circle4, "cx", "492");
      attr_dev(circle4, "cy", "288");
      add_location(circle4, file$H, -1, 1808);
      attr_dev(circle5, "r", "38");
      attr_dev(circle5, "cx", "483");
      attr_dev(circle5, "cy", "155");
      add_location(circle5, file$H, -1, 1846);
      attr_dev(circle6, "r", "79");
      attr_dev(circle6, "cx", "372");
      attr_dev(circle6, "cy", "219");
      add_location(circle6, file$H, -1, 1884);
      attr_dev(circle7, "r", "38");
      attr_dev(circle7, "cx", "325");
      attr_dev(circle7, "cy", "337");
      add_location(circle7, file$H, -1, 1922);
      attr_dev(circle8, "r", "46");
      attr_dev(circle8, "cx", "378");
      attr_dev(circle8, "cy", "417");
      add_location(circle8, file$H, -1, 1960);
      attr_dev(circle9, "r", "14");
      attr_dev(circle9, "cx", "338");
      attr_dev(circle9, "cy", "503");
      add_location(circle9, file$H, -1, 1998);
      attr_dev(circle10, "r", "34");
      attr_dev(circle10, "cx", "262");
      attr_dev(circle10, "cy", "491");
      add_location(circle10, file$H, -1, 2036);
      attr_dev(circle11, "r", "14");
      attr_dev(circle11, "cx", "213");
      attr_dev(circle11, "cy", "439");
      add_location(circle11, file$H, -1, 2074);
      attr_dev(circle12, "r", "23");
      attr_dev(circle12, "cx", "164");
      attr_dev(circle12, "cy", "472");
      add_location(circle12, file$H, -1, 2112);
      attr_dev(circle13, "r", "34");
      attr_dev(circle13, "cx", "109");
      attr_dev(circle13, "cy", "412");
      add_location(circle13, file$H, -1, 2150);
      attr_dev(circle14, "r", "14");
      attr_dev(circle14, "cx", "170");
      attr_dev(circle14, "cy", "386");
      add_location(circle14, file$H, -1, 2188);
      attr_dev(circle15, "r", "23");
      attr_dev(circle15, "cx", "197");
      attr_dev(circle15, "cy", "334");
      add_location(circle15, file$H, -1, 2226);
      attr_dev(circle16, "r", "14");
      attr_dev(circle16, "cx", "150");
      attr_dev(circle16, "cy", "313");
      add_location(circle16, file$H, -1, 2264);
      attr_dev(circle17, "r", "14");
      attr_dev(circle17, "cx", "97");
      attr_dev(circle17, "cy", "317");
      add_location(circle17, file$H, -1, 2302);
      attr_dev(circle18, "r", "34");
      attr_dev(circle18, "cx", "34");
      attr_dev(circle18, "cy", "303");
      add_location(circle18, file$H, -1, 2339);
      attr_dev(circle19, "r", "14");
      attr_dev(circle19, "cx", "62");
      attr_dev(circle19, "cy", "252");
      add_location(circle19, file$H, -1, 2376);
      attr_dev(circle20, "r", "14");
      attr_dev(circle20, "cx", "203");
      attr_dev(circle20, "cy", "259");
      add_location(circle20, file$H, -1, 2413);
      attr_dev(circle21, "r", "14");
      attr_dev(circle21, "cx", "139");
      attr_dev(circle21, "cy", "248");
      add_location(circle21, file$H, -1, 2451);
      attr_dev(circle22, "r", "14");
      attr_dev(circle22, "cx", "185");
      attr_dev(circle22, "cy", "212");
      add_location(circle22, file$H, -1, 2489);
      attr_dev(circle23, "r", "34");
      attr_dev(circle23, "cx", "93");
      attr_dev(circle23, "cy", "156");
      add_location(circle23, file$H, -1, 2527);
      attr_dev(circle24, "r", "14");
      attr_dev(circle24, "cx", "155");
      attr_dev(circle24, "cy", "162");
      add_location(circle24, file$H, -1, 2564);
      attr_dev(circle25, "r", "14");
      attr_dev(circle25, "cx", "222");
      attr_dev(circle25, "cy", "148");
      add_location(circle25, file$H, -1, 2602);
      attr_dev(circle26, "r", "14");
      attr_dev(circle26, "cx", "182");
      attr_dev(circle26, "cy", "103");
      add_location(circle26, file$H, -1, 2640);
      attr_dev(circle27, "r", "14");
      attr_dev(circle27, "cx", "248");
      attr_dev(circle27, "cy", "98");
      add_location(circle27, file$H, -1, 2678);
      attr_dev(circle28, "r", "34");
      attr_dev(circle28, "cx", "304");
      attr_dev(circle28, "cy", "66");
      add_location(circle28, file$H, -1, 2715);
      attr_dev(circle29, "r", "14");
      attr_dev(circle29, "cx", "359");
      attr_dev(circle29, "cy", "33");
      add_location(circle29, file$H, -1, 2752);
      attr_dev(circle30, "r", "14");
      attr_dev(circle30, "cx", "405");
      attr_dev(circle30, "cy", "53");
      add_location(circle30, file$H, -1, 2789);
      attr_dev(circle31, "r", "34");
      attr_dev(circle31, "cx", "463");
      attr_dev(circle31, "cy", "34");
      add_location(circle31, file$H, -1, 2826);
      attr_dev(circle32, "r", "14");
      attr_dev(circle32, "cx", "515");
      attr_dev(circle32, "cy", "68");
      add_location(circle32, file$H, -1, 2863);
      attr_dev(svg, "viewBox", "0 0 732 571");
      attr_dev(
        svg,
        "fill",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$H, 46, 0, 1612);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$g.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 732 571\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <circle r=\\"116\\" cx=\\"548\\" cy=\\"454\\" />     <circle r=\\"46\\" cx=\\"684\\" cy=\\"349\\" />     <circle r=\\"32\\" cx=\\"676\\" cy=\\"260\\" />     <circle r=\\"64\\" cx=\\"577\\" cy=\\"223\\" />     <circle r=\\"32\\" cx=\\"492\\" cy=\\"288\\" />     <circle r=\\"38\\" cx=\\"483\\" cy=\\"155\\" />     <circle r=\\"79\\" cx=\\"372\\" cy=\\"219\\" />     <circle r=\\"38\\" cx=\\"325\\" cy=\\"337\\" />     <circle r=\\"46\\" cx=\\"378\\" cy=\\"417\\" />     <circle r=\\"14\\" cx=\\"338\\" cy=\\"503\\" />     <circle r=\\"34\\" cx=\\"262\\" cy=\\"491\\" />     <circle r=\\"14\\" cx=\\"213\\" cy=\\"439\\" />     <circle r=\\"23\\" cx=\\"164\\" cy=\\"472\\" />     <circle r=\\"34\\" cx=\\"109\\" cy=\\"412\\" />     <circle r=\\"14\\" cx=\\"170\\" cy=\\"386\\" />     <circle r=\\"23\\" cx=\\"197\\" cy=\\"334\\" />     <circle r=\\"14\\" cx=\\"150\\" cy=\\"313\\" />     <circle r=\\"14\\" cx=\\"97\\" cy=\\"317\\" />     <circle r=\\"34\\" cx=\\"34\\" cy=\\"303\\" />     <circle r=\\"14\\" cx=\\"62\\" cy=\\"252\\" />     <circle r=\\"14\\" cx=\\"203\\" cy=\\"259\\" />     <circle r=\\"14\\" cx=\\"139\\" cy=\\"248\\" />     <circle r=\\"14\\" cx=\\"185\\" cy=\\"212\\" />     <circle r=\\"34\\" cx=\\"93\\" cy=\\"156\\" />     <circle r=\\"14\\" cx=\\"155\\" cy=\\"162\\" />     <circle r=\\"14\\" cx=\\"222\\" cy=\\"148\\" />     <circle r=\\"14\\" cx=\\"182\\" cy=\\"103\\" />     <circle r=\\"14\\" cx=\\"248\\" cy=\\"98\\" />     <circle r=\\"34\\" cx=\\"304\\" cy=\\"66\\" />     <circle r=\\"14\\" cx=\\"359\\" cy=\\"33\\" />     <circle r=\\"14\\" cx=\\"405\\" cy=\\"53\\" />     <circle r=\\"34\\" cx=\\"463\\" cy=\\"34\\" />     <circle r=\\"14\\" cx=\\"515\\" cy=\\"68\\" /> </svg> `} title=\\"SVGs/Peace Discipline\\" icon=\\"lucide:image\\">',
    ctx
  });
  return block;
}
function create_controls_slot$d(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    source: '(78:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$T(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 732 571" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}>
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
`,
      title: "SVGs/Peace Discipline",
      icon: "lucide:image",
      $$slots: {
        controls: [create_controls_slot$d],
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 732 571" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}>
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
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$T.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$T($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Peacediscipline_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Peacediscipline_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$T, create_fragment$T, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Peacediscipline_story",
      options,
      id: create_fragment$T.name
    });
  }
  get Hst() {
    throw new Error("<Peacediscipline_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Peacediscipline_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$G = "src/stories/SVG/Warning.story.svelte";
function create_default_slot$f(ctx) {
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
      add_location(path0, file$G, 17, 2, 643);
      attr_dev(path1, "d", "M10 8v5");
      attr_dev(path1, "stroke-width", "2");
      attr_dev(path1, "stroke-linecap", "round");
      add_location(path1, file$G, 18, 2, 717);
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
      add_location(circle, file$G, -1, 780);
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(
        svg,
        "stroke",
        /*color*/
        ctx[1]
      );
      add_location(svg, file$G, 16, 0, 588);
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
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$f.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <svg viewBox=\\"0 0 20 20\\" fill=\\"none\\" stroke=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`}>     <path d=\\"M10 1L19 19L1 19z\\" stroke-width=\\"2\\" stroke-linejoin=\\"round\\" />     <path d=\\"M10 8v5\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" />     <circle cx=\\"10\\" cy=\\"16\\" r=\\"1\\" fill=${typeof color === \\"string\\" ? `\\"${color}\\"` : `{${color}}`} stroke=\\"none\\" /> </svg> `} title=\\"SVGs/Warning\\" icon=\\"material-symbols:warning-outline-rounded\\">',
    ctx
  });
  return block;
}
function create_controls_slot$c(ctx) {
  let colorinput;
  let updating_value;
  let current;
  function colorinput_value_binding(value) {
    ctx[2](value);
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
    id: create_controls_slot$c.name,
    type: "slot",
    source: '(18:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$S(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<svg viewBox="0 0 20 20" fill="none" stroke=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`}>
    <path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
    <path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
    <circle cx="10" cy="16" r="1" fill=${typeof /*color*/
      ctx[1] === "string" ? `"${/*color*/
      ctx[1]}"` : `{${/*color*/
      ctx[1]}}`} stroke="none" />
</svg>
`,
      title: "SVGs/Warning",
      icon: "material-symbols:warning-outline-rounded",
      $$slots: {
        controls: [create_controls_slot$c],
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
      if (dirty & /*color*/
      2)
        hst_story_changes.source = `
<svg viewBox="0 0 20 20" fill="none" stroke=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`}>
    <path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
    <path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
    <circle cx="10" cy="16" r="1" fill=${typeof /*color*/
        ctx2[1] === "string" ? `"${/*color*/
        ctx2[1]}"` : `{${/*color*/
        ctx2[1]}}`} stroke="none" />
</svg>
`;
      if (dirty & /*$$scope, color*/
      10) {
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
    id: create_fragment$S.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$S($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Warning_story", slots, []);
  let { Hst } = $$props;
  let color = "#000";
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
  $$self.$capture_state = () => ({ ColorInput, Hst, color });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, color, colorinput_value_binding];
}
class Warning_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$S, create_fragment$S, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Warning_story",
      options,
      id: create_fragment$S.name
    });
  }
  get Hst() {
    throw new Error("<Warning_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Warning_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$F = "src/components/BrightnessIcon.svelte";
function get_each_context$9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  child_ctx[4] = i;
  return child_ctx;
}
function create_each_block$9(ctx) {
  let path;
  let style___angle = `${/*i*/
  ctx[4] * 360 / /*rays*/
  ctx[1]}deg`;
  const block = {
    c: function create() {
      path = svg_element("path");
      attr_dev(path, "d", "M0 0V40");
      attr_dev(path, "class", "s-sJEcZagb1zUd");
      set_style(path, "--angle", style___angle);
      add_location(path, file$F, 8, 3, 230);
    },
    m: function mount(target, anchor) {
      insert_dev(target, path, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*rays*/
      2 && style___angle !== (style___angle = `${/*i*/
      ctx2[4] * 360 / /*rays*/
      ctx2[1]}deg`)) {
        set_style(path, "--angle", style___angle);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(path);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$9.name,
    type: "each",
    source: "(7:2) {#each Array(rays) as _, i}",
    ctx
  });
  return block;
}
function create_fragment$R(ctx) {
  let svg;
  let g;
  let circle;
  let each_value = ensure_array_like_dev(Array(
    /*rays*/
    ctx[1]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      circle = svg_element("circle");
      set_style(g, "stroke-dasharray", 0.16 * /*value*/
      ctx[0] + " 50");
      set_style(g, "rotate", 0.9 * /*value*/
      ctx[0] + "deg");
      attr_dev(g, "class", "s-sJEcZagb1zUd");
      add_location(g, file$F, 6, 1, 123);
      attr_dev(circle, "cx", "50");
      attr_dev(circle, "cy", "50");
      attr_dev(circle, "r", "16");
      add_location(circle, file$F, 11, 1, 306);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "currentcolor");
      add_location(svg, file$F, 5, 0, 74);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(g, null);
        }
      }
      append_dev(svg, circle);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*rays*/
      2) {
        each_value = ensure_array_like_dev(Array(
          /*rays*/
          ctx2[1]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$9(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$9(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(g, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*value*/
      1) {
        set_style(g, "stroke-dasharray", 0.16 * /*value*/
        ctx2[0] + " 50");
      }
      if (dirty & /*value*/
      1) {
        set_style(g, "rotate", 0.9 * /*value*/
        ctx2[0] + "deg");
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$R.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$R($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessIcon", slots, []);
  let { value = 100 } = $$props;
  let { rays = 8 } = $$props;
  const writable_props = ["value", "rays"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BrightnessIcon> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("rays" in $$props2)
      $$invalidate(1, rays = $$props2.rays);
  };
  $$self.$capture_state = () => ({ value, rays });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("rays" in $$props2)
      $$invalidate(1, rays = $$props2.rays);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, rays];
}
class BrightnessIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$R, create_fragment$R, safe_not_equal, { value: 0, rays: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessIcon",
      options,
      id: create_fragment$R.name
    });
  }
  get value() {
    throw new Error("<BrightnessIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<BrightnessIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rays() {
    throw new Error("<BrightnessIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rays(value) {
    throw new Error("<BrightnessIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$e(ctx) {
  let brightnessicon;
  let updating_value;
  let updating_rays;
  let current;
  function brightnessicon_value_binding(value) {
    ctx[5](value);
  }
  function brightnessicon_rays_binding(value) {
    ctx[6](value);
  }
  let brightnessicon_props = {};
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    brightnessicon_props.value = /*value*/
    ctx[1];
  }
  if (
    /*rays*/
    ctx[2] !== void 0
  ) {
    brightnessicon_props.rays = /*rays*/
    ctx[2];
  }
  brightnessicon = new BrightnessIcon({
    props: brightnessicon_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(brightnessicon, "value", brightnessicon_value_binding));
  binding_callbacks.push(() => bind(brightnessicon, "rays", brightnessicon_rays_binding));
  const block = {
    c: function create() {
      create_component(brightnessicon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(brightnessicon, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const brightnessicon_changes = {};
      if (!updating_value && dirty & /*value*/
      2) {
        updating_value = true;
        brightnessicon_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_rays && dirty & /*rays*/
      4) {
        updating_rays = true;
        brightnessicon_changes.rays = /*rays*/
        ctx2[2];
        add_flush_callback(() => updating_rays = false);
      }
      brightnessicon.$set(brightnessicon_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(brightnessicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(brightnessicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(brightnessicon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$e.name,
    type: "slot",
    source: '(7:0) <Hst.Story source={` <BrightnessIcon value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} rays=${typeof rays === \\"string\\" ? `\\"${rays}\\"` : `{${rays}}`} /> `}  title=\\"Components/Brightness Icon\\"  icon=\\"zondicons:brightness-up\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_controls_slot$b(ctx) {
  let hst_slider0;
  let updating_value;
  let t;
  let hst_slider1;
  let updating_value_1;
  let current;
  function hst_slider0_value_binding(value) {
    ctx[3](value);
  }
  let hst_slider0_props = { title: "Rays", min: 1, max: 16 };
  if (
    /*rays*/
    ctx[2] !== void 0
  ) {
    hst_slider0_props.value = /*rays*/
    ctx[2];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider1_props = { title: "Brightness", min: 0, max: 100 };
  if (
    /*value*/
    ctx[1] !== void 0
  ) {
    hst_slider1_props.value = /*value*/
    ctx[1];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t = space();
      create_component(hst_slider1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty & /*rays*/
      4) {
        updating_value = true;
        hst_slider0_changes.value = /*rays*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty & /*value*/
      2) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*value*/
        ctx2[1];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$b.name,
    type: "slot",
    source: '(15:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$Q(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<BrightnessIcon value=${typeof /*value*/
      ctx[1] === "string" ? `"${/*value*/
      ctx[1]}"` : `{${/*value*/
      ctx[1]}}`} rays=${typeof /*rays*/
      ctx[2] === "string" ? `"${/*rays*/
      ctx[2]}"` : `{${/*rays*/
      ctx[2]}}`} />
`,
      title: "Components/Brightness Icon",
      icon: "zondicons:brightness-up",
      layout: { type: "single", iframe: false },
      $$slots: {
        controls: [create_controls_slot$b],
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
      if (dirty & /*value, rays*/
      6)
        hst_story_changes.source = `
<BrightnessIcon value=${typeof /*value*/
        ctx2[1] === "string" ? `"${/*value*/
        ctx2[1]}"` : `{${/*value*/
        ctx2[1]}}`} rays=${typeof /*rays*/
        ctx2[2] === "string" ? `"${/*rays*/
        ctx2[2]}"` : `{${/*rays*/
        ctx2[2]}}`} />
`;
      if (dirty & /*$$scope, value, rays*/
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
    id: create_fragment$Q.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$Q($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessIcon_story", slots, []);
  let { Hst } = $$props;
  let value = 1;
  let rays = 8;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<BrightnessIcon_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BrightnessIcon_story> was created with unknown prop '${key2}'`);
  });
  function hst_slider0_value_binding(value2) {
    rays = value2;
    $$invalidate(2, rays);
  }
  function hst_slider1_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function brightnessicon_value_binding(value$1) {
    value = value$1;
    $$invalidate(1, value);
  }
  function brightnessicon_rays_binding(value2) {
    rays = value2;
    $$invalidate(2, rays);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BrightnessIcon, Hst, value, rays });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("rays" in $$props2)
      $$invalidate(2, rays = $$props2.rays);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    value,
    rays,
    hst_slider0_value_binding,
    hst_slider1_value_binding,
    brightnessicon_value_binding,
    brightnessicon_rays_binding
  ];
}
class BrightnessIcon_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$Q, create_fragment$Q, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessIcon_story",
      options,
      id: create_fragment$Q.name
    });
  }
  get Hst() {
    throw new Error("<BrightnessIcon_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BrightnessIcon_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$E = "src/components/Burger Menus/Circle.svelte";
function create_fragment$P(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[1]}s`;
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
      add_location(path, file$E, 13, 1, 234);
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-dHyQ544AJ32J");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$E, 5, 0, 78);
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
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[3],
            false,
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
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
function instance$P($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle", slots, []);
  let { open = false } = $$props;
  let { speed = 0.5 } = $$props;
  const writable_props = ["open", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Circle> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ open, speed });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, speed, click_handler, keypress_handler];
}
class Circle extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$P, create_fragment$P, safe_not_equal, { open: 0, speed: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle",
      options,
      id: create_fragment$P.name
    });
  }
  get open() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$D = "src/components/Burger Menus/Cross.svelte";
function create_fragment$O(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let style___direction = `${/*direction*/
  ctx[2]}deg`;
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
      add_location(path, file$D, 24, 1, 426);
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-PFeurwlplmMu");
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--direction", style___direction);
      add_location(svg, file$D, 15, 0, 234);
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
            ctx[3],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[4],
            false,
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
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*direction*/
      4 && style___direction !== (style___direction = `${/*direction*/
      ctx2[2]}deg`)) {
        set_style(svg, "--direction", style___direction);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
const DIRECTION = { LEFT: 0, UP: 90, RIGHT: 180, DOWN: 270 };
function instance$O($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cross", slots, []);
  let { open = false } = $$props;
  let { speed = 0.5 } = $$props;
  let { direction = DIRECTION.LEFT } = $$props;
  const writable_props = ["open", "speed", "direction"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Cross> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("direction" in $$props2)
      $$invalidate(2, direction = $$props2.direction);
  };
  $$self.$capture_state = () => ({ DIRECTION, open, speed, direction });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("direction" in $$props2)
      $$invalidate(2, direction = $$props2.direction);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, speed, direction, click_handler, keypress_handler];
}
class Cross extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$O, create_fragment$O, safe_not_equal, { open: 0, speed: 1, direction: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cross",
      options,
      id: create_fragment$O.name
    });
  }
  get open() {
    throw new Error("<Cross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Cross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Cross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Cross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get direction() {
    throw new Error("<Cross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set direction(value) {
    throw new Error("<Cross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$C = "src/components/Burger Menus/FoldIn.svelte";
function create_fragment$N(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[1]}s`;
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
      add_location(path, file$C, 13, 1, 234);
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-d96fjWfdBsq4");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$C, 5, 0, 78);
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
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[3],
            false,
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
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
  validate_slots("FoldIn", slots, []);
  let { open = false } = $$props;
  let { speed = 0.5 } = $$props;
  const writable_props = ["open", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<FoldIn> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ open, speed });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, speed, click_handler, keypress_handler];
}
class FoldIn extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$N, create_fragment$N, safe_not_equal, { open: 0, speed: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FoldIn",
      options,
      id: create_fragment$N.name
    });
  }
  get open() {
    throw new Error("<FoldIn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<FoldIn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<FoldIn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<FoldIn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$B = "src/components/Burger Menus/Merge.svelte";
function create_fragment$M(ctx) {
  let svg;
  let path;
  let style___speed = `${/*speed*/
  ctx[1]}s`;
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
      add_location(path, file$B, 13, 1, 234);
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-jveDL8I0KC7Q");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$B, 5, 0, 78);
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
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[3],
            false,
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
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      mounted = false;
      run_all(dispose);
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
  validate_slots("Merge", slots, []);
  let { open = false } = $$props;
  let { speed = 0.5 } = $$props;
  const writable_props = ["open", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Merge> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ open, speed });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, speed, click_handler, keypress_handler];
}
class Merge extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$M, create_fragment$M, safe_not_equal, { open: 0, speed: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Merge",
      options,
      id: create_fragment$M.name
    });
  }
  get open() {
    throw new Error("<Merge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Merge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Merge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Merge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$A = "src/components/Burger Menus/MergeCross.svelte";
function create_fragment$L(ctx) {
  let svg;
  let rect0;
  let rect1;
  let rect2;
  let style___speed = `${/*speed*/
  ctx[1] / 2}s`;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      rect0 = svg_element("rect");
      rect1 = svg_element("rect");
      rect2 = svg_element("rect");
      attr_dev(rect0, "class", "a s-R7HktHOIOG17");
      attr_dev(rect0, "y", "10");
      add_location(rect0, file$A, 14, 1, 250);
      attr_dev(rect1, "class", "b s-R7HktHOIOG17");
      attr_dev(rect1, "y", "42");
      add_location(rect1, file$A, 15, 1, 277);
      attr_dev(rect2, "class", "c s-R7HktHOIOG17");
      attr_dev(rect2, "y", "74");
      add_location(rect2, file$A, 16, 1, 304);
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-R7HktHOIOG17");
      toggle_class(
        svg,
        "open",
        /*open*/
        ctx[0]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$A, 5, 0, 78);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, rect0);
      append_dev(svg, rect1);
      append_dev(svg, rect2);
      if (!mounted) {
        dispose = [
          listen_dev(
            svg,
            "click",
            /*click_handler*/
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            svg,
            "keypress",
            /*keypress_handler*/
            ctx[3],
            false,
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
          svg,
          "open",
          /*open*/
          ctx2[0]
        );
      }
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1] / 2}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
  validate_slots("MergeCross", slots, []);
  let { open = false } = $$props;
  let { speed = 0.5 } = $$props;
  const writable_props = ["open", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<MergeCross> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(0, open = !open);
  const keypress_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ open, speed });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [open, speed, click_handler, keypress_handler];
}
class MergeCross extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$L, create_fragment$L, safe_not_equal, { open: 0, speed: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MergeCross",
      options,
      id: create_fragment$L.name
    });
  }
  get open() {
    throw new Error("<MergeCross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<MergeCross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<MergeCross>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<MergeCross>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Menu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle,
  Cross,
  FoldIn,
  Merge,
  MergeCross
}, Symbol.toStringTag, { value: "Module" }));
function create_default_slot_5$2(ctx) {
  let menu_circle;
  let updating_open;
  let updating_speed;
  let current;
  function menu_circle_open_binding(value) {
    ctx[15](value);
  }
  function menu_circle_speed_binding(value) {
    ctx[16](value);
  }
  let menu_circle_props = {};
  if (
    /*circle_open*/
    ctx[2] !== void 0
  ) {
    menu_circle_props.open = /*circle_open*/
    ctx[2];
  }
  if (
    /*circle_speed*/
    ctx[3] !== void 0
  ) {
    menu_circle_props.speed = /*circle_speed*/
    ctx[3];
  }
  menu_circle = new Circle({ props: menu_circle_props, $$inline: true });
  binding_callbacks.push(() => bind(menu_circle, "open", menu_circle_open_binding));
  binding_callbacks.push(() => bind(menu_circle, "speed", menu_circle_speed_binding));
  const block = {
    c: function create() {
      create_component(menu_circle.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(menu_circle, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const menu_circle_changes = {};
      if (!updating_open && dirty[0] & /*circle_open*/
      4) {
        updating_open = true;
        menu_circle_changes.open = /*circle_open*/
        ctx2[2];
        add_flush_callback(() => updating_open = false);
      }
      if (!updating_speed && dirty[0] & /*circle_speed*/
      8) {
        updating_speed = true;
        menu_circle_changes.speed = /*circle_speed*/
        ctx2[3];
        add_flush_callback(() => updating_speed = false);
      }
      menu_circle.$set(menu_circle_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(menu_circle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu_circle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(menu_circle, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5$2.name,
    type: "slot",
    source: '(20:1) <Hst.Variant source={` <Menu.Circle open=${typeof circle_open === \\"string\\" ? `\\"${circle_open}\\"` : `{${circle_open}}`} speed=${typeof circle_speed === \\"string\\" ? `\\"${circle_speed}\\"` : `{${circle_speed}}`} /> `} title=\\"Circle\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot_4$1(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding(value) {
    ctx[13](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0,
    max: 2,
    step: 0.1
  };
  if (
    /*circle_speed*/
    ctx[3] !== void 0
  ) {
    hst_slider_props.value = /*circle_speed*/
    ctx[3];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding));
  function hst_checkbox_value_binding(value) {
    ctx[14](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*circle_open*/
    ctx[2] !== void 0
  ) {
    hst_checkbox_props.value = /*circle_open*/
    ctx[2];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*circle_speed*/
      8) {
        updating_value = true;
        hst_slider_changes.value = /*circle_speed*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*circle_open*/
      4) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*circle_open*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_4$1.name,
    type: "slot",
    source: '(24:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_4$2(ctx) {
  let menu_cross;
  let updating_open;
  let updating_speed;
  let updating_direction;
  let current;
  function menu_cross_open_binding(value) {
    ctx[20](value);
  }
  function menu_cross_speed_binding(value) {
    ctx[21](value);
  }
  function menu_cross_direction_binding(value) {
    ctx[22](value);
  }
  let menu_cross_props = {};
  if (
    /*cross_open*/
    ctx[4] !== void 0
  ) {
    menu_cross_props.open = /*cross_open*/
    ctx[4];
  }
  if (
    /*cross_speed*/
    ctx[5] !== void 0
  ) {
    menu_cross_props.speed = /*cross_speed*/
    ctx[5];
  }
  if (
    /*cross_direction*/
    ctx[12] !== void 0
  ) {
    menu_cross_props.direction = /*cross_direction*/
    ctx[12];
  }
  menu_cross = new Cross({ props: menu_cross_props, $$inline: true });
  binding_callbacks.push(() => bind(menu_cross, "open", menu_cross_open_binding));
  binding_callbacks.push(() => bind(menu_cross, "speed", menu_cross_speed_binding));
  binding_callbacks.push(() => bind(menu_cross, "direction", menu_cross_direction_binding));
  const block = {
    c: function create() {
      create_component(menu_cross.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(menu_cross, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const menu_cross_changes = {};
      if (!updating_open && dirty[0] & /*cross_open*/
      16) {
        updating_open = true;
        menu_cross_changes.open = /*cross_open*/
        ctx2[4];
        add_flush_callback(() => updating_open = false);
      }
      if (!updating_speed && dirty[0] & /*cross_speed*/
      32) {
        updating_speed = true;
        menu_cross_changes.speed = /*cross_speed*/
        ctx2[5];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_direction && dirty[0] & /*cross_direction*/
      4096) {
        updating_direction = true;
        menu_cross_changes.direction = /*cross_direction*/
        ctx2[12];
        add_flush_callback(() => updating_direction = false);
      }
      menu_cross.$set(menu_cross_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(menu_cross.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu_cross.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(menu_cross, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$2.name,
    type: "slot",
    source: '(30:1) <Hst.Variant source={` <Menu.Cross open=${typeof cross_open === \\"string\\" ? `\\"${cross_open}\\"` : `{${cross_open}}`} speed=${typeof cross_speed === \\"string\\" ? `\\"${cross_speed}\\"` : `{${cross_speed}}`} direction=${typeof cross_direction === \\"string\\" ? `\\"${cross_direction}\\"` : `{${cross_direction}}`} /> `} title=\\"Cross\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot_3$1(ctx) {
  let hst_slider;
  let updating_value;
  let t0;
  let hst_checkbox;
  let updating_value_1;
  let t1;
  let hst_buttongroup;
  let updating_value_2;
  let current;
  function hst_slider_value_binding_1(value) {
    ctx[17](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0,
    max: 2,
    step: 0.1
  };
  if (
    /*cross_speed*/
    ctx[5] !== void 0
  ) {
    hst_slider_props.value = /*cross_speed*/
    ctx[5];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_1));
  function hst_checkbox_value_binding_1(value) {
    ctx[18](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*cross_open*/
    ctx[4] !== void 0
  ) {
    hst_checkbox_props.value = /*cross_open*/
    ctx[4];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_1));
  function hst_buttongroup_value_binding(value) {
    ctx[19](value);
  }
  let hst_buttongroup_props = {
    title: "Direction",
    options: [
      {
        label: "Left",
        value: String(DIRECTION.LEFT)
      },
      {
        label: "Right",
        value: String(DIRECTION.RIGHT)
      },
      { label: "Up", value: String(DIRECTION.UP) },
      {
        label: "Down",
        value: String(DIRECTION.DOWN)
      }
    ]
  };
  if (
    /*str_cross_direction*/
    ctx[1] !== void 0
  ) {
    hst_buttongroup_props.value = /*str_cross_direction*/
    ctx[1];
  }
  hst_buttongroup = new /*Hst*/
  ctx[0].ButtonGroup({
    props: hst_buttongroup_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_buttongroup, "value", hst_buttongroup_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t0 = space();
      create_component(hst_checkbox.$$.fragment);
      t1 = space();
      create_component(hst_buttongroup.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_buttongroup, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*cross_speed*/
      32) {
        updating_value = true;
        hst_slider_changes.value = /*cross_speed*/
        ctx2[5];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*cross_open*/
      16) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*cross_open*/
        ctx2[4];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_buttongroup_changes = {};
      if (!updating_value_2 && dirty[0] & /*str_cross_direction*/
      2) {
        updating_value_2 = true;
        hst_buttongroup_changes.value = /*str_cross_direction*/
        ctx2[1];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_buttongroup.$set(hst_buttongroup_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_buttongroup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_buttongroup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
      destroy_component(hst_buttongroup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_3$1.name,
    type: "slot",
    source: '(42:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_3$3(ctx) {
  let menu_foldin;
  let updating_open;
  let updating_speed;
  let current;
  function menu_foldin_open_binding(value) {
    ctx[25](value);
  }
  function menu_foldin_speed_binding(value) {
    ctx[26](value);
  }
  let menu_foldin_props = {};
  if (
    /*foldIn_open*/
    ctx[6] !== void 0
  ) {
    menu_foldin_props.open = /*foldIn_open*/
    ctx[6];
  }
  if (
    /*foldIn_speed*/
    ctx[7] !== void 0
  ) {
    menu_foldin_props.speed = /*foldIn_speed*/
    ctx[7];
  }
  menu_foldin = new FoldIn({ props: menu_foldin_props, $$inline: true });
  binding_callbacks.push(() => bind(menu_foldin, "open", menu_foldin_open_binding));
  binding_callbacks.push(() => bind(menu_foldin, "speed", menu_foldin_speed_binding));
  const block = {
    c: function create() {
      create_component(menu_foldin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(menu_foldin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const menu_foldin_changes = {};
      if (!updating_open && dirty[0] & /*foldIn_open*/
      64) {
        updating_open = true;
        menu_foldin_changes.open = /*foldIn_open*/
        ctx2[6];
        add_flush_callback(() => updating_open = false);
      }
      if (!updating_speed && dirty[0] & /*foldIn_speed*/
      128) {
        updating_speed = true;
        menu_foldin_changes.speed = /*foldIn_speed*/
        ctx2[7];
        add_flush_callback(() => updating_speed = false);
      }
      menu_foldin.$set(menu_foldin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(menu_foldin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu_foldin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(menu_foldin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$3.name,
    type: "slot",
    source: '(58:1) <Hst.Variant source={` <Menu.FoldIn open=${typeof foldIn_open === \\"string\\" ? `\\"${foldIn_open}\\"` : `{${foldIn_open}}`} speed=${typeof foldIn_speed === \\"string\\" ? `\\"${foldIn_speed}\\"` : `{${foldIn_speed}}`} /> `} title=\\"Fold In\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot_2$1(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_2(value) {
    ctx[23](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0,
    max: 2,
    step: 0.1
  };
  if (
    /*foldIn_speed*/
    ctx[7] !== void 0
  ) {
    hst_slider_props.value = /*foldIn_speed*/
    ctx[7];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_2));
  function hst_checkbox_value_binding_2(value) {
    ctx[24](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*foldIn_open*/
    ctx[6] !== void 0
  ) {
    hst_checkbox_props.value = /*foldIn_open*/
    ctx[6];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_2));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*foldIn_speed*/
      128) {
        updating_value = true;
        hst_slider_changes.value = /*foldIn_speed*/
        ctx2[7];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*foldIn_open*/
      64) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*foldIn_open*/
        ctx2[6];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_2$1.name,
    type: "slot",
    source: '(62:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$5(ctx) {
  let menu_merge;
  let updating_open;
  let updating_speed;
  let current;
  function menu_merge_open_binding(value) {
    ctx[29](value);
  }
  function menu_merge_speed_binding(value) {
    ctx[30](value);
  }
  let menu_merge_props = {};
  if (
    /*merge_open*/
    ctx[8] !== void 0
  ) {
    menu_merge_props.open = /*merge_open*/
    ctx[8];
  }
  if (
    /*merge_speed*/
    ctx[9] !== void 0
  ) {
    menu_merge_props.speed = /*merge_speed*/
    ctx[9];
  }
  menu_merge = new Merge({ props: menu_merge_props, $$inline: true });
  binding_callbacks.push(() => bind(menu_merge, "open", menu_merge_open_binding));
  binding_callbacks.push(() => bind(menu_merge, "speed", menu_merge_speed_binding));
  const block = {
    c: function create() {
      create_component(menu_merge.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(menu_merge, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const menu_merge_changes = {};
      if (!updating_open && dirty[0] & /*merge_open*/
      256) {
        updating_open = true;
        menu_merge_changes.open = /*merge_open*/
        ctx2[8];
        add_flush_callback(() => updating_open = false);
      }
      if (!updating_speed && dirty[0] & /*merge_speed*/
      512) {
        updating_speed = true;
        menu_merge_changes.speed = /*merge_speed*/
        ctx2[9];
        add_flush_callback(() => updating_speed = false);
      }
      menu_merge.$set(menu_merge_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(menu_merge.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu_merge.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(menu_merge, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$5.name,
    type: "slot",
    source: '(68:1) <Hst.Variant source={` <Menu.Merge open=${typeof merge_open === \\"string\\" ? `\\"${merge_open}\\"` : `{${merge_open}}`} speed=${typeof merge_speed === \\"string\\" ? `\\"${merge_speed}\\"` : `{${merge_speed}}`} /> `} title=\\"Merge\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot_1$1(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_3(value) {
    ctx[27](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0,
    max: 2,
    step: 0.1
  };
  if (
    /*merge_speed*/
    ctx[9] !== void 0
  ) {
    hst_slider_props.value = /*merge_speed*/
    ctx[9];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_3));
  function hst_checkbox_value_binding_3(value) {
    ctx[28](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*merge_open*/
    ctx[8] !== void 0
  ) {
    hst_checkbox_props.value = /*merge_open*/
    ctx[8];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_3));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*merge_speed*/
      512) {
        updating_value = true;
        hst_slider_changes.value = /*merge_speed*/
        ctx2[9];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*merge_open*/
      256) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*merge_open*/
        ctx2[8];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1$1.name,
    type: "slot",
    source: '(72:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$6(ctx) {
  let menu_mergecross;
  let updating_open;
  let updating_speed;
  let current;
  function menu_mergecross_open_binding(value) {
    ctx[33](value);
  }
  function menu_mergecross_speed_binding(value) {
    ctx[34](value);
  }
  let menu_mergecross_props = {};
  if (
    /*mergeCross_open*/
    ctx[10] !== void 0
  ) {
    menu_mergecross_props.open = /*mergeCross_open*/
    ctx[10];
  }
  if (
    /*mergeCross_speed*/
    ctx[11] !== void 0
  ) {
    menu_mergecross_props.speed = /*mergeCross_speed*/
    ctx[11];
  }
  menu_mergecross = new MergeCross({
    props: menu_mergecross_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(menu_mergecross, "open", menu_mergecross_open_binding));
  binding_callbacks.push(() => bind(menu_mergecross, "speed", menu_mergecross_speed_binding));
  const block = {
    c: function create() {
      create_component(menu_mergecross.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(menu_mergecross, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const menu_mergecross_changes = {};
      if (!updating_open && dirty[0] & /*mergeCross_open*/
      1024) {
        updating_open = true;
        menu_mergecross_changes.open = /*mergeCross_open*/
        ctx2[10];
        add_flush_callback(() => updating_open = false);
      }
      if (!updating_speed && dirty[0] & /*mergeCross_speed*/
      2048) {
        updating_speed = true;
        menu_mergecross_changes.speed = /*mergeCross_speed*/
        ctx2[11];
        add_flush_callback(() => updating_speed = false);
      }
      menu_mergecross.$set(menu_mergecross_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(menu_mergecross.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu_mergecross.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(menu_mergecross, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$6.name,
    type: "slot",
    source: '(78:1) <Hst.Variant source={` <Menu.MergeCross open=${typeof mergeCross_open === \\"string\\" ? `\\"${mergeCross_open}\\"` : `{${mergeCross_open}}`} speed=${typeof mergeCross_speed === \\"string\\" ? `\\"${mergeCross_speed}\\"` : `{${mergeCross_speed}}`} /> `} title=\\"Merge Cross\\" icon=\\"material-symbols:menu\\">',
    ctx
  });
  return block;
}
function create_controls_slot$a(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_4(value) {
    ctx[31](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0,
    max: 2,
    step: 0.1
  };
  if (
    /*mergeCross_speed*/
    ctx[11] !== void 0
  ) {
    hst_slider_props.value = /*mergeCross_speed*/
    ctx[11];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_4));
  function hst_checkbox_value_binding_4(value) {
    ctx[32](value);
  }
  let hst_checkbox_props = { title: "Open" };
  if (
    /*mergeCross_open*/
    ctx[10] !== void 0
  ) {
    hst_checkbox_props.value = /*mergeCross_open*/
    ctx[10];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_4));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*mergeCross_speed*/
      2048) {
        updating_value = true;
        hst_slider_changes.value = /*mergeCross_speed*/
        ctx2[11];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*mergeCross_open*/
      1024) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*mergeCross_open*/
        ctx2[10];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$a.name,
    type: "slot",
    source: '(82:2) <svelte:fragment slot=\\"controls\\">',
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
      source: `
<Menu.Circle open=${typeof /*circle_open*/
      ctx[2] === "string" ? `"${/*circle_open*/
      ctx[2]}"` : `{${/*circle_open*/
      ctx[2]}}`} speed=${typeof /*circle_speed*/
      ctx[3] === "string" ? `"${/*circle_speed*/
      ctx[3]}"` : `{${/*circle_speed*/
      ctx[3]}}`} />
`,
      title: "Circle",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot_4$1],
        default: [create_default_slot_5$2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Menu.Cross
open=${typeof /*cross_open*/
      ctx[4] === "string" ? `"${/*cross_open*/
      ctx[4]}"` : `{${/*cross_open*/
      ctx[4]}}`}
speed=${typeof /*cross_speed*/
      ctx[5] === "string" ? `"${/*cross_speed*/
      ctx[5]}"` : `{${/*cross_speed*/
      ctx[5]}}`}
direction=${typeof /*cross_direction*/
      ctx[12] === "string" ? `"${/*cross_direction*/
      ctx[12]}"` : `{${/*cross_direction*/
      ctx[12]}}`}
/>
`,
      title: "Cross",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot_3$1],
        default: [create_default_slot_4$2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Menu.FoldIn open=${typeof /*foldIn_open*/
      ctx[6] === "string" ? `"${/*foldIn_open*/
      ctx[6]}"` : `{${/*foldIn_open*/
      ctx[6]}}`} speed=${typeof /*foldIn_speed*/
      ctx[7] === "string" ? `"${/*foldIn_speed*/
      ctx[7]}"` : `{${/*foldIn_speed*/
      ctx[7]}}`} />
`,
      title: "Fold In",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot_2$1],
        default: [create_default_slot_3$3]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Menu.Merge open=${typeof /*merge_open*/
      ctx[8] === "string" ? `"${/*merge_open*/
      ctx[8]}"` : `{${/*merge_open*/
      ctx[8]}}`} speed=${typeof /*merge_speed*/
      ctx[9] === "string" ? `"${/*merge_speed*/
      ctx[9]}"` : `{${/*merge_speed*/
      ctx[9]}}`} />
`,
      title: "Merge",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot_1$1],
        default: [create_default_slot_2$5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Menu.MergeCross open=${typeof /*mergeCross_open*/
      ctx[10] === "string" ? `"${/*mergeCross_open*/
      ctx[10]}"` : `{${/*mergeCross_open*/
      ctx[10]}}`} speed=${typeof /*mergeCross_speed*/
      ctx[11] === "string" ? `"${/*mergeCross_speed*/
      ctx[11]}"` : `{${/*mergeCross_speed*/
      ctx[11]}}`} />
`,
      title: "Merge Cross",
      icon: "material-symbols:menu",
      $$slots: {
        controls: [create_controls_slot$a],
        default: [create_default_slot_1$6]
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
      if (dirty[0] & /*circle_open, circle_speed*/
      12)
        hst_variant0_changes.source = `
<Menu.Circle open=${typeof /*circle_open*/
        ctx2[2] === "string" ? `"${/*circle_open*/
        ctx2[2]}"` : `{${/*circle_open*/
        ctx2[2]}}`} speed=${typeof /*circle_speed*/
        ctx2[3] === "string" ? `"${/*circle_speed*/
        ctx2[3]}"` : `{${/*circle_speed*/
        ctx2[3]}}`} />
`;
      if (dirty[0] & /*circle_open, circle_speed*/
      12 | dirty[1] & /*$$scope*/
      16) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty[0] & /*cross_open, cross_speed, cross_direction*/
      4144)
        hst_variant1_changes.source = `
<Menu.Cross
open=${typeof /*cross_open*/
        ctx2[4] === "string" ? `"${/*cross_open*/
        ctx2[4]}"` : `{${/*cross_open*/
        ctx2[4]}}`}
speed=${typeof /*cross_speed*/
        ctx2[5] === "string" ? `"${/*cross_speed*/
        ctx2[5]}"` : `{${/*cross_speed*/
        ctx2[5]}}`}
direction=${typeof /*cross_direction*/
        ctx2[12] === "string" ? `"${/*cross_direction*/
        ctx2[12]}"` : `{${/*cross_direction*/
        ctx2[12]}}`}
/>
`;
      if (dirty[0] & /*str_cross_direction, cross_open, cross_speed, cross_direction*/
      4146 | dirty[1] & /*$$scope*/
      16) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty[0] & /*foldIn_open, foldIn_speed*/
      192)
        hst_variant2_changes.source = `
<Menu.FoldIn open=${typeof /*foldIn_open*/
        ctx2[6] === "string" ? `"${/*foldIn_open*/
        ctx2[6]}"` : `{${/*foldIn_open*/
        ctx2[6]}}`} speed=${typeof /*foldIn_speed*/
        ctx2[7] === "string" ? `"${/*foldIn_speed*/
        ctx2[7]}"` : `{${/*foldIn_speed*/
        ctx2[7]}}`} />
`;
      if (dirty[0] & /*foldIn_open, foldIn_speed*/
      192 | dirty[1] & /*$$scope*/
      16) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty[0] & /*merge_open, merge_speed*/
      768)
        hst_variant3_changes.source = `
<Menu.Merge open=${typeof /*merge_open*/
        ctx2[8] === "string" ? `"${/*merge_open*/
        ctx2[8]}"` : `{${/*merge_open*/
        ctx2[8]}}`} speed=${typeof /*merge_speed*/
        ctx2[9] === "string" ? `"${/*merge_speed*/
        ctx2[9]}"` : `{${/*merge_speed*/
        ctx2[9]}}`} />
`;
      if (dirty[0] & /*merge_open, merge_speed*/
      768 | dirty[1] & /*$$scope*/
      16) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty[0] & /*mergeCross_open, mergeCross_speed*/
      3072)
        hst_variant4_changes.source = `
<Menu.MergeCross open=${typeof /*mergeCross_open*/
        ctx2[10] === "string" ? `"${/*mergeCross_open*/
        ctx2[10]}"` : `{${/*mergeCross_open*/
        ctx2[10]}}`} speed=${typeof /*mergeCross_speed*/
        ctx2[11] === "string" ? `"${/*mergeCross_speed*/
        ctx2[11]}"` : `{${/*mergeCross_speed*/
        ctx2[11]}}`} />
`;
      if (dirty[0] & /*mergeCross_open, mergeCross_speed*/
      3072 | dirty[1] & /*$$scope*/
      16) {
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
      destroy_component(hst_variant2, detaching);
      destroy_component(hst_variant3, detaching);
      destroy_component(hst_variant4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$d.name,
    type: "slot",
    source: '(19:0) <Hst.Story title=\\"Components/Burger Menus\\" icon=\\"material-symbols:menu\\" layout={{ type: \\"grid\\" }}>',
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
      title: "Components/Burger Menus",
      icon: "material-symbols:menu",
      layout: { type: "grid" },
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
    p: function update(ctx2, dirty) {
      const hst_story_changes = {};
      if (dirty[0] & /*mergeCross_open, mergeCross_speed, merge_open, merge_speed, foldIn_open, foldIn_speed, cross_open, cross_speed, cross_direction, str_cross_direction, circle_open, circle_speed*/
      8190 | dirty[1] & /*$$scope*/
      16) {
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
  let cross_direction;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BurgerMenus_story", slots, []);
  let { Hst } = $$props;
  let circle_open = false;
  let circle_speed = 0.5;
  let cross_open = false;
  let cross_speed = 0.5;
  let str_cross_direction = String(DIRECTION.LEFT);
  let foldIn_open = false;
  let foldIn_speed = 0.5;
  let merge_open = false;
  let merge_speed = 0.5;
  let mergeCross_open = false;
  let mergeCross_speed = 0.5;
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
  function hst_slider_value_binding(value) {
    circle_speed = value;
    $$invalidate(3, circle_speed);
  }
  function hst_checkbox_value_binding(value) {
    circle_open = value;
    $$invalidate(2, circle_open);
  }
  function menu_circle_open_binding(value) {
    circle_open = value;
    $$invalidate(2, circle_open);
  }
  function menu_circle_speed_binding(value) {
    circle_speed = value;
    $$invalidate(3, circle_speed);
  }
  function hst_slider_value_binding_1(value) {
    cross_speed = value;
    $$invalidate(5, cross_speed);
  }
  function hst_checkbox_value_binding_1(value) {
    cross_open = value;
    $$invalidate(4, cross_open);
  }
  function hst_buttongroup_value_binding(value) {
    str_cross_direction = value;
    $$invalidate(1, str_cross_direction);
  }
  function menu_cross_open_binding(value) {
    cross_open = value;
    $$invalidate(4, cross_open);
  }
  function menu_cross_speed_binding(value) {
    cross_speed = value;
    $$invalidate(5, cross_speed);
  }
  function menu_cross_direction_binding(value) {
    cross_direction = value;
    $$invalidate(12, cross_direction), $$invalidate(1, str_cross_direction);
  }
  function hst_slider_value_binding_2(value) {
    foldIn_speed = value;
    $$invalidate(7, foldIn_speed);
  }
  function hst_checkbox_value_binding_2(value) {
    foldIn_open = value;
    $$invalidate(6, foldIn_open);
  }
  function menu_foldin_open_binding(value) {
    foldIn_open = value;
    $$invalidate(6, foldIn_open);
  }
  function menu_foldin_speed_binding(value) {
    foldIn_speed = value;
    $$invalidate(7, foldIn_speed);
  }
  function hst_slider_value_binding_3(value) {
    merge_speed = value;
    $$invalidate(9, merge_speed);
  }
  function hst_checkbox_value_binding_3(value) {
    merge_open = value;
    $$invalidate(8, merge_open);
  }
  function menu_merge_open_binding(value) {
    merge_open = value;
    $$invalidate(8, merge_open);
  }
  function menu_merge_speed_binding(value) {
    merge_speed = value;
    $$invalidate(9, merge_speed);
  }
  function hst_slider_value_binding_4(value) {
    mergeCross_speed = value;
    $$invalidate(11, mergeCross_speed);
  }
  function hst_checkbox_value_binding_4(value) {
    mergeCross_open = value;
    $$invalidate(10, mergeCross_open);
  }
  function menu_mergecross_open_binding(value) {
    mergeCross_open = value;
    $$invalidate(10, mergeCross_open);
  }
  function menu_mergecross_speed_binding(value) {
    mergeCross_speed = value;
    $$invalidate(11, mergeCross_speed);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Menu,
    DIRECTION,
    Hst,
    circle_open,
    circle_speed,
    cross_open,
    cross_speed,
    str_cross_direction,
    foldIn_open,
    foldIn_speed,
    merge_open,
    merge_speed,
    mergeCross_open,
    mergeCross_speed,
    cross_direction
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("circle_open" in $$props2)
      $$invalidate(2, circle_open = $$props2.circle_open);
    if ("circle_speed" in $$props2)
      $$invalidate(3, circle_speed = $$props2.circle_speed);
    if ("cross_open" in $$props2)
      $$invalidate(4, cross_open = $$props2.cross_open);
    if ("cross_speed" in $$props2)
      $$invalidate(5, cross_speed = $$props2.cross_speed);
    if ("str_cross_direction" in $$props2)
      $$invalidate(1, str_cross_direction = $$props2.str_cross_direction);
    if ("foldIn_open" in $$props2)
      $$invalidate(6, foldIn_open = $$props2.foldIn_open);
    if ("foldIn_speed" in $$props2)
      $$invalidate(7, foldIn_speed = $$props2.foldIn_speed);
    if ("merge_open" in $$props2)
      $$invalidate(8, merge_open = $$props2.merge_open);
    if ("merge_speed" in $$props2)
      $$invalidate(9, merge_speed = $$props2.merge_speed);
    if ("mergeCross_open" in $$props2)
      $$invalidate(10, mergeCross_open = $$props2.mergeCross_open);
    if ("mergeCross_speed" in $$props2)
      $$invalidate(11, mergeCross_speed = $$props2.mergeCross_speed);
    if ("cross_direction" in $$props2)
      $$invalidate(12, cross_direction = $$props2.cross_direction);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*str_cross_direction*/
    2) {
      $$invalidate(12, cross_direction = Number(str_cross_direction));
    }
  };
  return [
    Hst,
    str_cross_direction,
    circle_open,
    circle_speed,
    cross_open,
    cross_speed,
    foldIn_open,
    foldIn_speed,
    merge_open,
    merge_speed,
    mergeCross_open,
    mergeCross_speed,
    cross_direction,
    hst_slider_value_binding,
    hst_checkbox_value_binding,
    menu_circle_open_binding,
    menu_circle_speed_binding,
    hst_slider_value_binding_1,
    hst_checkbox_value_binding_1,
    hst_buttongroup_value_binding,
    menu_cross_open_binding,
    menu_cross_speed_binding,
    menu_cross_direction_binding,
    hst_slider_value_binding_2,
    hst_checkbox_value_binding_2,
    menu_foldin_open_binding,
    menu_foldin_speed_binding,
    hst_slider_value_binding_3,
    hst_checkbox_value_binding_3,
    menu_merge_open_binding,
    menu_merge_speed_binding,
    hst_slider_value_binding_4,
    hst_checkbox_value_binding_4,
    menu_mergecross_open_binding,
    menu_mergecross_speed_binding
  ];
}
class BurgerMenus_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$K, create_fragment$K, safe_not_equal, { Hst: 0 }, null, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BurgerMenus_story",
      options,
      id: create_fragment$K.name
    });
  }
  get Hst() {
    throw new Error("<BurgerMenus_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BurgerMenus_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$c(ctx) {
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
      create_component(colorinput.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(colorinput, target, anchor);
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
      destroy_component(colorinput, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$c.name,
    type: "slot",
    source: '(7:0) <Hst.Story source={` <ColorInput value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} title=${typeof title === \\"string\\" ? `\\"${title}\\"` : `{${title}}`} /> `}  title=\\"Components/Color Input\\"  icon=\\"typcn:input-checked\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_controls_slot$9(ctx) {
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_text0, detaching);
      destroy_component(hst_text1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$9.name,
    type: "slot",
    source: '(15:1) <svelte:fragment slot=\\"controls\\">',
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
      source: `
<ColorInput value=${typeof /*value*/
      ctx[1] === "string" ? `"${/*value*/
      ctx[1]}"` : `{${/*value*/
      ctx[1]}}`} title=${typeof /*title*/
      ctx[2] === "string" ? `"${/*title*/
      ctx[2]}"` : `{${/*title*/
      ctx[2]}}`} />
`,
      title: "Components/Color Input",
      icon: "typcn:input-checked",
      layout: { type: "single", iframe: false },
      $$slots: {
        controls: [create_controls_slot$9],
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
      if (dirty & /*value, title*/
      6)
        hst_story_changes.source = `
<ColorInput value=${typeof /*value*/
        ctx2[1] === "string" ? `"${/*value*/
        ctx2[1]}"` : `{${/*value*/
        ctx2[1]}}`} title=${typeof /*title*/
        ctx2[2] === "string" ? `"${/*title*/
        ctx2[2]}"` : `{${/*title*/
        ctx2[2]}}`} />
`;
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
    id: create_fragment$J.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$J($$self, $$props, $$invalidate) {
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
    init(this, options, instance$J, create_fragment$J, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorInput_story",
      options,
      id: create_fragment$J.name
    });
  }
  get Hst() {
    throw new Error("<ColorInput_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorInput_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$b(ctx) {
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
    id: create_default_slot$b.name,
    type: "slot",
    source: '(7:0) <Hst.Story source={` <ColorPicker colorType=${typeof colorType === \\"string\\" ? `\\"${colorType}\\"` : `{${colorType}}`} value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} /> `} title=\\"Components/Color Picker\\" icon=\\"ph:eyedropper-fill\\">',
    ctx
  });
  return block;
}
function create_controls_slot$8(ctx) {
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_select, detaching);
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$8.name,
    type: "slot",
    source: '(11:1) <svelte:fragment slot=\\"controls\\">',
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
      source: `
<ColorPicker colorType=${typeof /*colorType*/
      ctx[1] === "string" ? `"${/*colorType*/
      ctx[1]}"` : `{${/*colorType*/
      ctx[1]}}`} value=${typeof /*value*/
      ctx[2] === "string" ? `"${/*value*/
      ctx[2]}"` : `{${/*value*/
      ctx[2]}}`} />
`,
      title: "Components/Color Picker",
      icon: "ph:eyedropper-fill",
      $$slots: {
        controls: [create_controls_slot$8],
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
      if (dirty & /*colorType, value*/
      6)
        hst_story_changes.source = `
<ColorPicker colorType=${typeof /*colorType*/
        ctx2[1] === "string" ? `"${/*colorType*/
        ctx2[1]}"` : `{${/*colorType*/
        ctx2[1]}}`} value=${typeof /*value*/
        ctx2[2] === "string" ? `"${/*value*/
        ctx2[2]}"` : `{${/*value*/
        ctx2[2]}}`} />
`;
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
    id: create_fragment$I.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$I($$self, $$props, $$invalidate) {
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
    init(this, options, instance$I, create_fragment$I, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker_story",
      options,
      id: create_fragment$I.name
    });
  }
  get Hst() {
    throw new Error("<ColorPicker_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ColorPicker_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$z = "src/components/Experiment.svelte";
function create_fragment$H(ctx) {
  let section;
  let span;
  let div0;
  let t0;
  let div1;
  let t1;
  let div2;
  let t2;
  let div3;
  let t3;
  let div4;
  let t4;
  let div5;
  let t5;
  let div6;
  let t6;
  let div7;
  let t7;
  let div8;
  const block = {
    c: function create() {
      section = element("section");
      span = element("span");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      t3 = space();
      div4 = element("div");
      t4 = space();
      div5 = element("div");
      t5 = space();
      div6 = element("div");
      t6 = space();
      div7 = element("div");
      t7 = space();
      div8 = element("div");
      attr_dev(div0, "class", "circle s-5a40SxRMigyo");
      add_location(div0, file$z, 2, 2, 35);
      attr_dev(div1, "class", "circle s-5a40SxRMigyo");
      add_location(div1, file$z, 3, 2, 60);
      attr_dev(div2, "class", "circle s-5a40SxRMigyo");
      add_location(div2, file$z, 4, 2, 85);
      attr_dev(div3, "class", "circle s-5a40SxRMigyo");
      add_location(div3, file$z, 5, 2, 110);
      attr_dev(div4, "class", "circle s-5a40SxRMigyo");
      add_location(div4, file$z, 6, 2, 135);
      attr_dev(div5, "class", "circle s-5a40SxRMigyo");
      add_location(div5, file$z, 7, 2, 160);
      attr_dev(div6, "class", "circle s-5a40SxRMigyo");
      add_location(div6, file$z, 8, 2, 185);
      attr_dev(div7, "class", "circle s-5a40SxRMigyo");
      add_location(div7, file$z, 9, 2, 210);
      attr_dev(div8, "class", "center s-5a40SxRMigyo");
      add_location(div8, file$z, 10, 2, 235);
      attr_dev(span, "class", "rotate s-5a40SxRMigyo");
      add_location(span, file$z, 1, 1, 11);
      attr_dev(section, "class", "s-5a40SxRMigyo");
      add_location(section, file$z, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, span);
      append_dev(span, div0);
      append_dev(span, t0);
      append_dev(span, div1);
      append_dev(span, t1);
      append_dev(span, div2);
      append_dev(span, t2);
      append_dev(span, div3);
      append_dev(span, t3);
      append_dev(span, div4);
      append_dev(span, t4);
      append_dev(span, div5);
      append_dev(span, t5);
      append_dev(span, div6);
      append_dev(span, t6);
      append_dev(span, div7);
      append_dev(span, t7);
      append_dev(span, div8);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(section);
      }
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
function instance$H($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Experiment", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Experiment> was created with unknown prop '${key2}'`);
  });
  return [];
}
class Experiment extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$H, create_fragment$H, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Experiment",
      options,
      id: create_fragment$H.name
    });
  }
}
function create_default_slot$a(ctx) {
  let experiment;
  let current;
  experiment = new Experiment({ $$inline: true });
  const block = {
    c: function create() {
      create_component(experiment.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(experiment, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(experiment.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(experiment.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(experiment, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$a.name,
    type: "slot",
    source: '(5:0) <Hst.Story source={` <Experiment /> `}  title=\\"Components/.Experiment\\"  icon=\\"tabler:test-pipe\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_fragment$G(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<Experiment />
`,
      title: "Components/.Experiment",
      icon: "tabler:test-pipe",
      layout: { type: "single", iframe: false },
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
    id: create_fragment$G.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$G($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Experiment_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Experiment_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Experiment_story> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Experiment, Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Experiment_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$G, create_fragment$G, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Experiment_story",
      options,
      id: create_fragment$G.name
    });
  }
  get Hst() {
    throw new Error("<Experiment_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Experiment_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$y = "src/components/FlipCard.svelte";
const get_back_slot_changes = (dirty) => ({});
const get_back_slot_context = (ctx) => ({});
const get_front_slot_changes = (dirty) => ({});
const get_front_slot_context = (ctx) => ({});
function create_fragment$F(ctx) {
  let div;
  let section0;
  let t;
  let section1;
  let style___speed = `${/*speed*/
  ctx[2]}s`;
  let current;
  const front_slot_template = (
    /*#slots*/
    ctx[4].front
  );
  const front_slot = create_slot(
    front_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_front_slot_context
  );
  const back_slot_template = (
    /*#slots*/
    ctx[4].back
  );
  const back_slot = create_slot(
    back_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_back_slot_context
  );
  const block = {
    c: function create() {
      div = element("div");
      section0 = element("section");
      if (front_slot)
        front_slot.c();
      t = space();
      section1 = element("section");
      if (back_slot)
        back_slot.c();
      attr_dev(section0, "class", "front s-ZhLSNUKpZCFl");
      add_location(section0, file$y, 10, 1, 175);
      attr_dev(section1, "class", "back s-ZhLSNUKpZCFl");
      add_location(section1, file$y, 13, 1, 236);
      attr_dev(div, "class", "flip-card s-ZhLSNUKpZCFl");
      attr_dev(
        div,
        "data-axis",
        /*axis*/
        ctx[1]
      );
      toggle_class(
        div,
        "flipped",
        /*flipped*/
        ctx[0]
      );
      set_style(div, "--speed", style___speed);
      add_location(div, file$y, 9, 0, 94);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, section0);
      if (front_slot) {
        front_slot.m(section0, null);
      }
      append_dev(div, t);
      append_dev(div, section1);
      if (back_slot) {
        back_slot.m(section1, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (front_slot) {
        if (front_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            front_slot,
            front_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              front_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              get_front_slot_changes
            ),
            get_front_slot_context
          );
        }
      }
      if (back_slot) {
        if (back_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            back_slot,
            back_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              back_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              get_back_slot_changes
            ),
            get_back_slot_context
          );
        }
      }
      if (!current || dirty & /*axis*/
      2) {
        attr_dev(
          div,
          "data-axis",
          /*axis*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*flipped*/
      1) {
        toggle_class(
          div,
          "flipped",
          /*flipped*/
          ctx2[0]
        );
      }
      if (dirty & /*speed*/
      4 && style___speed !== (style___speed = `${/*speed*/
      ctx2[2]}s`)) {
        set_style(div, "--speed", style___speed);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(front_slot, local);
      transition_in(back_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(front_slot, local);
      transition_out(back_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      if (front_slot)
        front_slot.d(detaching);
      if (back_slot)
        back_slot.d(detaching);
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
  validate_slots("FlipCard", slots, ["front", "back"]);
  let { flipped } = $$props;
  let { axis = "x" } = $$props;
  let { speed = 2 } = $$props;
  $$self.$$.on_mount.push(function() {
    if (flipped === void 0 && !("flipped" in $$props || $$self.$$.bound[$$self.$$.props["flipped"]])) {
      console.warn("<FlipCard> was created without expected prop 'flipped'");
    }
  });
  const writable_props = ["flipped", "axis", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<FlipCard> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("flipped" in $$props2)
      $$invalidate(0, flipped = $$props2.flipped);
    if ("axis" in $$props2)
      $$invalidate(1, axis = $$props2.axis);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ flipped, axis, speed });
  $$self.$inject_state = ($$props2) => {
    if ("flipped" in $$props2)
      $$invalidate(0, flipped = $$props2.flipped);
    if ("axis" in $$props2)
      $$invalidate(1, axis = $$props2.axis);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [flipped, axis, speed, $$scope, slots];
}
class FlipCard extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$F, create_fragment$F, safe_not_equal, { flipped: 0, axis: 1, speed: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FlipCard",
      options,
      id: create_fragment$F.name
    });
  }
  get flipped() {
    throw new Error("<FlipCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set flipped(value) {
    throw new Error("<FlipCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get axis() {
    throw new Error("<FlipCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set axis(value) {
    throw new Error("<FlipCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<FlipCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<FlipCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$x = "src/stories/components/FlipCard.story.svelte";
function create_front_slot$1(ctx) {
  let h1;
  let t1;
  let p;
  const block = {
    c: function create() {
      h1 = element("h1");
      h1.textContent = "Front Side";
      t1 = space();
      p = element("p");
      p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum modi\n					reiciendis debitis est dignissimos aspernatur dicta qui officia? Sequi!";
      add_location(h1, file$x, 34, 3, 1011);
      add_location(p, file$x, 35, 4, 1035);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h1);
        detach_dev(t1);
        detach_dev(p);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_front_slot$1.name,
    type: "slot",
    source: '(30:3) <svelte:fragment slot=\\"front\\">',
    ctx
  });
  return block;
}
function create_back_slot$1(ctx) {
  let h1;
  let t1;
  let p;
  const block = {
    c: function create() {
      h1 = element("h1");
      h1.textContent = "Back Side";
      t1 = space();
      p = element("p");
      p.textContent = "Some more text that is different to the front text.";
      add_location(h1, file$x, 41, 2, 1270);
      add_location(p, file$x, -1, 1293);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h1);
        detach_dev(t1);
        detach_dev(p);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_back_slot$1.name,
    type: "slot",
    source: '(37:3) <svelte:fragment slot=\\"back\\">',
    ctx
  });
  return block;
}
function create_default_slot$9(ctx) {
  let div;
  let flipcard;
  let updating_flipped;
  let updating_axis;
  let current;
  function flipcard_flipped_binding(value) {
    ctx[5](value);
  }
  function flipcard_axis_binding(value) {
    ctx[6](value);
  }
  let flipcard_props = {
    $$slots: {
      back: [create_back_slot$1],
      front: [create_front_slot$1]
    },
    $$scope: { ctx }
  };
  if (
    /*flipped*/
    ctx[1] !== void 0
  ) {
    flipcard_props.flipped = /*flipped*/
    ctx[1];
  }
  if (
    /*axis*/
    ctx[2] !== void 0
  ) {
    flipcard_props.axis = /*axis*/
    ctx[2];
  }
  flipcard = new FlipCard({ props: flipcard_props, $$inline: true });
  binding_callbacks.push(() => bind(flipcard, "flipped", flipcard_flipped_binding));
  binding_callbacks.push(() => bind(flipcard, "axis", flipcard_axis_binding));
  const block = {
    c: function create() {
      div = element("div");
      create_component(flipcard.$$.fragment);
      attr_dev(div, "class", "s-WWxcQXH0EtG0");
      add_location(div, file$x, 31, 0, 931);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(flipcard, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const flipcard_changes = {};
      if (dirty & /*$$scope*/
      128) {
        flipcard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_flipped && dirty & /*flipped*/
      2) {
        updating_flipped = true;
        flipcard_changes.flipped = /*flipped*/
        ctx2[1];
        add_flush_callback(() => updating_flipped = false);
      }
      if (!updating_axis && dirty & /*axis*/
      4) {
        updating_axis = true;
        flipcard_changes.axis = /*axis*/
        ctx2[2];
        add_flush_callback(() => updating_axis = false);
      }
      flipcard.$set(flipcard_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(flipcard.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(flipcard.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(flipcard);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$9.name,
    type: "slot",
    source: '(7:0) <Hst.Story source={` <div>     <FlipCard flipped=${typeof flipped === \\"string\\" ? `\\"${flipped}\\"` : `{${flipped}}`} axis=${typeof axis === \\"string\\" ? `\\"${axis}\\"` : `{${axis}}`}>         <svelte:fragment slot=\\"front\\">             <h1>Front Side</h1>             <p>                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum modi                 reiciendis debitis est dignissimos aspernatur dicta qui officia? Sequi!             </p>         </svelte:fragment>         <svelte:fragment slot=\\"back\\">             <h1>Back Side</h1>             <p>Some more text that is different to the front text.</p>         </svelte:fragment>     </FlipCard> </div> `}  title=\\"Components/Flip Card\\"  icon=\\"mdi:card-text-outline\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_controls_slot$7(ctx) {
  let hst_checkbox;
  let updating_value;
  let t;
  let hst_buttongroup;
  let updating_value_1;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Flipped" };
  if (
    /*flipped*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*flipped*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_buttongroup_value_binding(value) {
    ctx[4](value);
  }
  let hst_buttongroup_props = {
    title: "Flip Axis",
    options: [{ label: "X", value: "x" }, { label: "Y", value: "y" }]
  };
  if (
    /*axis*/
    ctx[2] !== void 0
  ) {
    hst_buttongroup_props.value = /*axis*/
    ctx[2];
  }
  hst_buttongroup = new /*Hst*/
  ctx[0].ButtonGroup({
    props: hst_buttongroup_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_buttongroup, "value", hst_buttongroup_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t = space();
      create_component(hst_buttongroup.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_buttongroup, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*flipped*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*flipped*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_buttongroup_changes = {};
      if (!updating_value_1 && dirty & /*axis*/
      4) {
        updating_value_1 = true;
        hst_buttongroup_changes.value = /*axis*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_buttongroup.$set(hst_buttongroup_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_buttongroup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_buttongroup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_checkbox, detaching);
      destroy_component(hst_buttongroup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$7.name,
    type: "slot",
    source: '(43:1) <svelte:fragment slot=\\"controls\\">',
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
      source: `
<div>
    <FlipCard flipped=${typeof /*flipped*/
      ctx[1] === "string" ? `"${/*flipped*/
      ctx[1]}"` : `{${/*flipped*/
      ctx[1]}}`} axis=${typeof /*axis*/
      ctx[2] === "string" ? `"${/*axis*/
      ctx[2]}"` : `{${/*axis*/
      ctx[2]}}`}>
        <svelte:fragment slot="front">
            <h1>Front Side</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum modi
                reiciendis debitis est dignissimos aspernatur dicta qui officia? Sequi!
            </p>
        </svelte:fragment>
        <svelte:fragment slot="back">
            <h1>Back Side</h1>
            <p>Some more text that is different to the front text.</p>
        </svelte:fragment>
    </FlipCard>
</div>
`,
      title: "Components/Flip Card",
      icon: "mdi:card-text-outline",
      layout: { type: "single", iframe: false },
      $$slots: {
        controls: [create_controls_slot$7],
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
      if (dirty & /*flipped, axis*/
      6)
        hst_story_changes.source = `
<div>
    <FlipCard flipped=${typeof /*flipped*/
        ctx2[1] === "string" ? `"${/*flipped*/
        ctx2[1]}"` : `{${/*flipped*/
        ctx2[1]}}`} axis=${typeof /*axis*/
        ctx2[2] === "string" ? `"${/*axis*/
        ctx2[2]}"` : `{${/*axis*/
        ctx2[2]}}`}>
        <svelte:fragment slot="front">
            <h1>Front Side</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum modi
                reiciendis debitis est dignissimos aspernatur dicta qui officia? Sequi!
            </p>
        </svelte:fragment>
        <svelte:fragment slot="back">
            <h1>Back Side</h1>
            <p>Some more text that is different to the front text.</p>
        </svelte:fragment>
    </FlipCard>
</div>
`;
      if (dirty & /*$$scope, axis, flipped*/
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
    id: create_fragment$E.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$E($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FlipCard_story", slots, []);
  let { Hst } = $$props;
  let flipped = false;
  let axis = "x";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<FlipCard_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<FlipCard_story> was created with unknown prop '${key2}'`);
  });
  function hst_checkbox_value_binding(value) {
    flipped = value;
    $$invalidate(1, flipped);
  }
  function hst_buttongroup_value_binding(value) {
    axis = value;
    $$invalidate(2, axis);
  }
  function flipcard_flipped_binding(value) {
    flipped = value;
    $$invalidate(1, flipped);
  }
  function flipcard_axis_binding(value) {
    axis = value;
    $$invalidate(2, axis);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ FlipCard, Hst, flipped, axis });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("flipped" in $$props2)
      $$invalidate(1, flipped = $$props2.flipped);
    if ("axis" in $$props2)
      $$invalidate(2, axis = $$props2.axis);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    flipped,
    axis,
    hst_checkbox_value_binding,
    hst_buttongroup_value_binding,
    flipcard_flipped_binding,
    flipcard_axis_binding
  ];
}
class FlipCard_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$E, create_fragment$E, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FlipCard_story",
      options,
      id: create_fragment$E.name
    });
  }
  get Hst() {
    throw new Error("<FlipCard_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<FlipCard_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$w = "src/components/Input.svelte";
function create_fragment$D(ctx) {
  let span;
  let input;
  let input_pattern_value;
  let t0;
  let label_1;
  let t1;
  let span_class_value;
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
        ctx[6]
      );
      input.value = /*value*/
      ctx[0];
      attr_dev(
        input,
        "autocomplete",
        /*autocomplete*/
        ctx[3]
      );
      attr_dev(input, "pattern", input_pattern_value = /*pattern*/
      ctx[4].source);
      attr_dev(input, "class", "s-Fe6WNbR-55zp");
      add_location(input, file$w, 43, 1, 979);
      attr_dev(
        label_1,
        "for",
        /*id*/
        ctx[6]
      );
      attr_dev(label_1, "class", "s-Fe6WNbR-55zp");
      add_location(label_1, file$w, 53, 1, 1127);
      attr_dev(span, "class", span_class_value = null_to_empty(
        /*variant*/
        ctx[2]
      ) + " s-Fe6WNbR-55zp");
      toggle_class(
        span,
        "contents",
        /*value*/
        ctx[0].length > 0
      );
      toggle_class(span, "invalid", !/*valid*/
      ctx[5](
        /*value*/
        ctx[0]
      ) && /*value*/
      ctx[0].length > 0);
      add_location(span, file$w, 38, 0, 867);
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
            ctx[8],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*onBlur*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "input",
            /*onInput*/
            ctx[7],
            false,
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
      8) {
        attr_dev(
          input,
          "autocomplete",
          /*autocomplete*/
          ctx2[3]
        );
      }
      if (dirty & /*pattern*/
      16 && input_pattern_value !== (input_pattern_value = /*pattern*/
      ctx2[4].source)) {
        attr_dev(input, "pattern", input_pattern_value);
      }
      if (dirty & /*label*/
      2)
        set_data_dev(
          t1,
          /*label*/
          ctx2[1]
        );
      if (dirty & /*variant*/
      4 && span_class_value !== (span_class_value = null_to_empty(
        /*variant*/
        ctx2[2]
      ) + " s-Fe6WNbR-55zp")) {
        attr_dev(span, "class", span_class_value);
      }
      if (dirty & /*variant, value*/
      5) {
        toggle_class(
          span,
          "contents",
          /*value*/
          ctx2[0].length > 0
        );
      }
      if (dirty & /*variant, valid, value*/
      37) {
        toggle_class(span, "invalid", !/*valid*/
        ctx2[5](
          /*value*/
          ctx2[0]
        ) && /*value*/
        ctx2[0].length > 0);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }
      mounted = false;
      run_all(dispose);
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
let ids = 0;
let base_id = Date.now();
function UID() {
  return "input-" + (++ids + base_id).toString(32);
}
function instance$D($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Input", slots, []);
  let { value } = $$props;
  let { label } = $$props;
  let { variant = "google" } = $$props;
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
      console.warn("<Input> was created without expected prop 'value'");
    }
    if (label === void 0 && !("label" in $$props || $$self.$$.bound[$$self.$$.props["label"]])) {
      console.warn("<Input> was created without expected prop 'label'");
    }
  });
  const writable_props = ["value", "label", "variant", "max_length", "autocomplete", "pattern", "valid"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Input> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("variant" in $$props2)
      $$invalidate(2, variant = $$props2.variant);
    if ("max_length" in $$props2)
      $$invalidate(10, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(3, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(4, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(5, valid = $$props2.valid);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    ids,
    base_id,
    UID,
    value,
    label,
    variant,
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
    if ("variant" in $$props2)
      $$invalidate(2, variant = $$props2.variant);
    if ("max_length" in $$props2)
      $$invalidate(10, max_length = $$props2.max_length);
    if ("autocomplete" in $$props2)
      $$invalidate(3, autocomplete = $$props2.autocomplete);
    if ("pattern" in $$props2)
      $$invalidate(4, pattern = $$props2.pattern);
    if ("valid" in $$props2)
      $$invalidate(5, valid = $$props2.valid);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    value,
    label,
    variant,
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
class Input extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$D, create_fragment$D, safe_not_equal, {
      value: 0,
      label: 1,
      variant: 2,
      max_length: 10,
      autocomplete: 3,
      pattern: 4,
      valid: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Input",
      options,
      id: create_fragment$D.name
    });
  }
  get value() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get variant() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max_length() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max_length(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autocomplete() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autocomplete(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pattern() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pattern(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get valid() {
    throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set valid(value) {
    throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_2$4(ctx) {
  let input;
  let updating_value;
  let updating_label;
  let updating_max_length;
  let updating_autocomplete;
  let updating_pattern;
  let current;
  function input_value_binding(value) {
    ctx[13](value);
  }
  function input_label_binding(value) {
    ctx[14](value);
  }
  function input_max_length_binding(value) {
    ctx[15](value);
  }
  function input_autocomplete_binding(value) {
    ctx[16](value);
  }
  function input_pattern_binding(value) {
    ctx[17](value);
  }
  let input_props = { variant: "google" };
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    input_props.value = /*value*/
    ctx[2];
  }
  if (
    /*label*/
    ctx[3] !== void 0
  ) {
    input_props.label = /*label*/
    ctx[3];
  }
  if (
    /*max_length*/
    ctx[4] !== void 0
  ) {
    input_props.max_length = /*max_length*/
    ctx[4];
  }
  if (
    /*autocomplete*/
    ctx[5] !== void 0
  ) {
    input_props.autocomplete = /*autocomplete*/
    ctx[5];
  }
  if (
    /*pattern*/
    ctx[6] !== void 0
  ) {
    input_props.pattern = /*pattern*/
    ctx[6];
  }
  input = new Input({ props: input_props, $$inline: true });
  binding_callbacks.push(() => bind(input, "value", input_value_binding));
  binding_callbacks.push(() => bind(input, "label", input_label_binding));
  binding_callbacks.push(() => bind(input, "max_length", input_max_length_binding));
  binding_callbacks.push(() => bind(input, "autocomplete", input_autocomplete_binding));
  binding_callbacks.push(() => bind(input, "pattern", input_pattern_binding));
  const block = {
    c: function create() {
      create_component(input.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(input, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const input_changes = {};
      if (!updating_value && dirty & /*value*/
      4) {
        updating_value = true;
        input_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_label && dirty & /*label*/
      8) {
        updating_label = true;
        input_changes.label = /*label*/
        ctx2[3];
        add_flush_callback(() => updating_label = false);
      }
      if (!updating_max_length && dirty & /*max_length*/
      16) {
        updating_max_length = true;
        input_changes.max_length = /*max_length*/
        ctx2[4];
        add_flush_callback(() => updating_max_length = false);
      }
      if (!updating_autocomplete && dirty & /*autocomplete*/
      32) {
        updating_autocomplete = true;
        input_changes.autocomplete = /*autocomplete*/
        ctx2[5];
        add_flush_callback(() => updating_autocomplete = false);
      }
      if (!updating_pattern && dirty & /*pattern*/
      64) {
        updating_pattern = true;
        input_changes.pattern = /*pattern*/
        ctx2[6];
        add_flush_callback(() => updating_pattern = false);
      }
      input.$set(input_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(input.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(input.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(input, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$4.name,
    type: "slot",
    source: '(78:1) <Hst.Variant source={` <Input variant=\\"google\\" value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} label=${typeof label === \\"string\\" ? `\\"${label}\\"` : `{${label}}`} max_length=${typeof max_length === \\"string\\" ? `\\"${max_length}\\"` : `{${max_length}}`} autocomplete=${typeof autocomplete === \\"string\\" ? `\\"${autocomplete}\\"` : `{${autocomplete}}`} pattern=${typeof pattern === \\"string\\" ? `\\"${pattern}\\"` : `{${pattern}}`} /> `} title=\\"Google Style Input\\" icon=\\"iconoir:input-field\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$5(ctx) {
  let input;
  let updating_value;
  let updating_label;
  let updating_max_length;
  let updating_autocomplete;
  let updating_pattern;
  let current;
  function input_value_binding_1(value) {
    ctx[18](value);
  }
  function input_label_binding_1(value) {
    ctx[19](value);
  }
  function input_max_length_binding_1(value) {
    ctx[20](value);
  }
  function input_autocomplete_binding_1(value) {
    ctx[21](value);
  }
  function input_pattern_binding_1(value) {
    ctx[22](value);
  }
  let input_props = { variant: "lastpass" };
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    input_props.value = /*value*/
    ctx[2];
  }
  if (
    /*label*/
    ctx[3] !== void 0
  ) {
    input_props.label = /*label*/
    ctx[3];
  }
  if (
    /*max_length*/
    ctx[4] !== void 0
  ) {
    input_props.max_length = /*max_length*/
    ctx[4];
  }
  if (
    /*autocomplete*/
    ctx[5] !== void 0
  ) {
    input_props.autocomplete = /*autocomplete*/
    ctx[5];
  }
  if (
    /*pattern*/
    ctx[6] !== void 0
  ) {
    input_props.pattern = /*pattern*/
    ctx[6];
  }
  input = new Input({ props: input_props, $$inline: true });
  binding_callbacks.push(() => bind(input, "value", input_value_binding_1));
  binding_callbacks.push(() => bind(input, "label", input_label_binding_1));
  binding_callbacks.push(() => bind(input, "max_length", input_max_length_binding_1));
  binding_callbacks.push(() => bind(input, "autocomplete", input_autocomplete_binding_1));
  binding_callbacks.push(() => bind(input, "pattern", input_pattern_binding_1));
  const block = {
    c: function create() {
      create_component(input.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(input, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const input_changes = {};
      if (!updating_value && dirty & /*value*/
      4) {
        updating_value = true;
        input_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_label && dirty & /*label*/
      8) {
        updating_label = true;
        input_changes.label = /*label*/
        ctx2[3];
        add_flush_callback(() => updating_label = false);
      }
      if (!updating_max_length && dirty & /*max_length*/
      16) {
        updating_max_length = true;
        input_changes.max_length = /*max_length*/
        ctx2[4];
        add_flush_callback(() => updating_max_length = false);
      }
      if (!updating_autocomplete && dirty & /*autocomplete*/
      32) {
        updating_autocomplete = true;
        input_changes.autocomplete = /*autocomplete*/
        ctx2[5];
        add_flush_callback(() => updating_autocomplete = false);
      }
      if (!updating_pattern && dirty & /*pattern*/
      64) {
        updating_pattern = true;
        input_changes.pattern = /*pattern*/
        ctx2[6];
        add_flush_callback(() => updating_pattern = false);
      }
      input.$set(input_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(input.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(input.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(input, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$5.name,
    type: "slot",
    source: '(97:1) <Hst.Variant source={` <Input variant=\\"lastpass\\" value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} label=${typeof label === \\"string\\" ? `\\"${label}\\"` : `{${label}}`} max_length=${typeof max_length === \\"string\\" ? `\\"${max_length}\\"` : `{${max_length}}`} autocomplete=${typeof autocomplete === \\"string\\" ? `\\"${autocomplete}\\"` : `{${autocomplete}}`} pattern=${typeof pattern === \\"string\\" ? `\\"${pattern}\\"` : `{${pattern}}`} /> `} title=\\"LastPass Style Input\\" icon=\\"iconoir:input-field\\">',
    ctx
  });
  return block;
}
function create_default_slot$8(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Input
variant="google"
value=${typeof /*value*/
      ctx[2] === "string" ? `"${/*value*/
      ctx[2]}"` : `{${/*value*/
      ctx[2]}}`}
label=${typeof /*label*/
      ctx[3] === "string" ? `"${/*label*/
      ctx[3]}"` : `{${/*label*/
      ctx[3]}}`}
max_length=${typeof /*max_length*/
      ctx[4] === "string" ? `"${/*max_length*/
      ctx[4]}"` : `{${/*max_length*/
      ctx[4]}}`}
autocomplete=${typeof /*autocomplete*/
      ctx[5] === "string" ? `"${/*autocomplete*/
      ctx[5]}"` : `{${/*autocomplete*/
      ctx[5]}}`}
pattern=${typeof /*pattern*/
      ctx[6] === "string" ? `"${/*pattern*/
      ctx[6]}"` : `{${/*pattern*/
      ctx[6]}}`}
/>
`,
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
      source: `
<Input
variant="lastpass"
value=${typeof /*value*/
      ctx[2] === "string" ? `"${/*value*/
      ctx[2]}"` : `{${/*value*/
      ctx[2]}}`}
label=${typeof /*label*/
      ctx[3] === "string" ? `"${/*label*/
      ctx[3]}"` : `{${/*label*/
      ctx[3]}}`}
max_length=${typeof /*max_length*/
      ctx[4] === "string" ? `"${/*max_length*/
      ctx[4]}"` : `{${/*max_length*/
      ctx[4]}}`}
autocomplete=${typeof /*autocomplete*/
      ctx[5] === "string" ? `"${/*autocomplete*/
      ctx[5]}"` : `{${/*autocomplete*/
      ctx[5]}}`}
pattern=${typeof /*pattern*/
      ctx[6] === "string" ? `"${/*pattern*/
      ctx[6]}"` : `{${/*pattern*/
      ctx[6]}}`}
/>
`,
      title: "LastPass Style Input",
      icon: "iconoir:input-field",
      $$slots: { default: [create_default_slot_1$5] },
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
      if (dirty & /*value, label, max_length, autocomplete, pattern*/
      124)
        hst_variant0_changes.source = `
<Input
variant="google"
value=${typeof /*value*/
        ctx2[2] === "string" ? `"${/*value*/
        ctx2[2]}"` : `{${/*value*/
        ctx2[2]}}`}
label=${typeof /*label*/
        ctx2[3] === "string" ? `"${/*label*/
        ctx2[3]}"` : `{${/*label*/
        ctx2[3]}}`}
max_length=${typeof /*max_length*/
        ctx2[4] === "string" ? `"${/*max_length*/
        ctx2[4]}"` : `{${/*max_length*/
        ctx2[4]}}`}
autocomplete=${typeof /*autocomplete*/
        ctx2[5] === "string" ? `"${/*autocomplete*/
        ctx2[5]}"` : `{${/*autocomplete*/
        ctx2[5]}}`}
pattern=${typeof /*pattern*/
        ctx2[6] === "string" ? `"${/*pattern*/
        ctx2[6]}"` : `{${/*pattern*/
        ctx2[6]}}`}
/>
`;
      if (dirty & /*$$scope, value, label, max_length, autocomplete, pattern*/
      8388732) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*value, label, max_length, autocomplete, pattern*/
      124)
        hst_variant1_changes.source = `
<Input
variant="lastpass"
value=${typeof /*value*/
        ctx2[2] === "string" ? `"${/*value*/
        ctx2[2]}"` : `{${/*value*/
        ctx2[2]}}`}
label=${typeof /*label*/
        ctx2[3] === "string" ? `"${/*label*/
        ctx2[3]}"` : `{${/*label*/
        ctx2[3]}}`}
max_length=${typeof /*max_length*/
        ctx2[4] === "string" ? `"${/*max_length*/
        ctx2[4]}"` : `{${/*max_length*/
        ctx2[4]}}`}
autocomplete=${typeof /*autocomplete*/
        ctx2[5] === "string" ? `"${/*autocomplete*/
        ctx2[5]}"` : `{${/*autocomplete*/
        ctx2[5]}}`}
pattern=${typeof /*pattern*/
        ctx2[6] === "string" ? `"${/*pattern*/
        ctx2[6]}"` : `{${/*pattern*/
        ctx2[6]}}`}
/>
`;
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$8.name,
    type: "slot",
    source: '(73:0) <Hst.Story  title=\\"Components/Input\\"  icon=\\"iconoir:input-field\\"  layout={{ type: \\"grid\\", width: \\"95%\\" }} >',
    ctx
  });
  return block;
}
function create_controls_slot$6(ctx) {
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(hst_text0, detaching);
      destroy_component(hst_text1, detaching);
      destroy_component(hst_number, detaching);
      destroy_component(hst_text2, detaching);
      destroy_component(hst_select, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$6.name,
    type: "slot",
    source: '(116:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Input",
      icon: "iconoir:input-field",
      layout: { type: "grid", width: "95%" },
      $$slots: {
        controls: [create_controls_slot$6],
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
    id: create_fragment$C.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$C($$self, $$props, $$invalidate) {
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
  function input_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function input_label_binding(value2) {
    label = value2;
    $$invalidate(3, label);
  }
  function input_max_length_binding(value2) {
    max_length = value2;
    $$invalidate(4, max_length);
  }
  function input_autocomplete_binding(value2) {
    autocomplete = value2;
    $$invalidate(5, autocomplete);
  }
  function input_pattern_binding(value2) {
    pattern = value2;
    $$invalidate(6, pattern), $$invalidate(1, pattern_string);
  }
  function input_value_binding_1(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  function input_label_binding_1(value2) {
    label = value2;
    $$invalidate(3, label);
  }
  function input_max_length_binding_1(value2) {
    max_length = value2;
    $$invalidate(4, max_length);
  }
  function input_autocomplete_binding_1(value2) {
    autocomplete = value2;
    $$invalidate(5, autocomplete);
  }
  function input_pattern_binding_1(value2) {
    pattern = value2;
    $$invalidate(6, pattern), $$invalidate(1, pattern_string);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Input,
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
    input_value_binding,
    input_label_binding,
    input_max_length_binding,
    input_autocomplete_binding,
    input_pattern_binding,
    input_value_binding_1,
    input_label_binding_1,
    input_max_length_binding_1,
    input_autocomplete_binding_1,
    input_pattern_binding_1
  ];
}
class Input_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$C, create_fragment$C, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Input_story",
      options,
      id: create_fragment$C.name
    });
  }
  get Hst() {
    throw new Error("<Input_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Input_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$v = "src/components/MouseAuraCards.svelte/Container.svelte";
function create_fragment$B(ctx) {
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
      attr_dev(div, "role", "region");
      add_location(div, file$v, 14, 0, 375);
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
      if (detaching) {
        detach_dev(div);
      }
      if (default_slot)
        default_slot.d(detaching);
      ctx[4](null);
      mounted = false;
      dispose();
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
    init(this, options, instance$B, create_fragment$B, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Container",
      options,
      id: create_fragment$B.name
    });
  }
}
const file$u = "src/components/MouseAuraCards.svelte/Card.svelte";
function create_fragment$A(ctx) {
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
      add_location(div, file$u, 0, 0, 0);
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
      if (detaching) {
        detach_dev(div);
      }
      if (default_slot)
        default_slot.d(detaching);
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
    init(this, options, instance$A, create_fragment$A, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Card",
      options,
      id: create_fragment$A.name
    });
  }
}
const MAC = { Container, Card };
const file$t = "src/stories/components/MouseAuraCards.story.svelte";
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
      add_location(h3, file$t, -1, 1140);
      add_location(p, file$t, -1, 1163);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h3);
        detach_dev(t1);
        detach_dev(p);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6$1.name,
    type: "slot",
    source: "(33:2) <MAC.Card>",
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
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5$1.name,
    type: "slot",
    source: "(40:2) <MAC.Card>",
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
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$1.name,
    type: "slot",
    source: "(44:2) <MAC.Card>",
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
      add_location(h3, file$t, -1, 1672);
      add_location(p, file$t, -1, 1697);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h3);
        detach_dev(t1);
        detach_dev(p);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$2.name,
    type: "slot",
    source: "(48:2) <MAC.Card>",
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
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$3.name,
    type: "slot",
    source: "(55:2) <MAC.Card>",
    ctx
  });
  return block;
}
function create_default_slot_1$4(ctx) {
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(mac_card0, detaching);
      destroy_component(mac_card1, detaching);
      destroy_component(mac_card2, detaching);
      destroy_component(mac_card3, detaching);
      destroy_component(mac_card4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$4.name,
    type: "slot",
    source: "(32:1) <MAC.Container>",
    ctx
  });
  return block;
}
function create_default_slot$7(ctx) {
  let mac_container;
  let current;
  mac_container = new MAC.Container({
    props: {
      $$slots: { default: [create_default_slot_1$4] },
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
    id: create_default_slot$7.name,
    type: "slot",
    source: '(5:0) <Hst.Story source={` <MAC.Container>     <MAC.Card>         <h3>test title</h3>         <p>             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea             totam eveniet corporis porro deleniti architecto dolorem sapiente!         </p>     </MAC.Card>     <MAC.Card>         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea         totam!     </MAC.Card>     <MAC.Card>         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea         totam eveniet corporis porro deleniti architecto dolorem sapiente!     </MAC.Card>     <MAC.Card>         <h3>test title 2</h3>         <p>             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea             totam!         </p>     </MAC.Card>     <MAC.Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</MAC.Card> </MAC.Container> `} title=\\"Components/Mouse Aura Cards\\" icon=\\"clarity:view-cards-line\\">',
    ctx
  });
  return block;
}
function create_fragment$z(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<MAC.Container>
    <MAC.Card>
        <h3>test title</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
            totam eveniet corporis porro deleniti architecto dolorem sapiente!
        </p>
    </MAC.Card>
    <MAC.Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
        totam!
    </MAC.Card>
    <MAC.Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
        totam eveniet corporis porro deleniti architecto dolorem sapiente!
    </MAC.Card>
    <MAC.Card>
        <h3>test title 2</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
            totam!
        </p>
    </MAC.Card>
    <MAC.Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</MAC.Card>
</MAC.Container>
`,
      title: "Components/Mouse Aura Cards",
      icon: "clarity:view-cards-line",
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
    id: create_fragment$z.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$z($$self, $$props, $$invalidate) {
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
    init(this, options, instance$z, create_fragment$z, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MouseAuraCards_story",
      options,
      id: create_fragment$z.name
    });
  }
  get Hst() {
    throw new Error("<MouseAuraCards_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<MouseAuraCards_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$s = "src/components/Pause/Morph.svelte";
function create_fragment$y(ctx) {
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
      add_location(path0, file$s, 12, 1, 206);
      attr_dev(path1, "class", "right s-r_IBm7hQpKjb");
      attr_dev(path1, "d", "M42,0L58,0V64L42,64z");
      add_location(path1, file$s, 13, 1, 252);
      attr_dev(svg, "viewBox", "0 0 64 64");
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-r_IBm7hQpKjb");
      toggle_class(
        svg,
        "paused",
        /*paused*/
        ctx[0]
      );
      add_location(svg, file$s, 4, 0, 56);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$y, create_fragment$y, safe_not_equal, { paused: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Morph",
      options,
      id: create_fragment$y.name
    });
  }
  get paused() {
    throw new Error("<Morph>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set paused(value) {
    throw new Error("<Morph>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$r = "src/components/Pause/Rotate.svelte";
function create_fragment$x(ctx) {
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
      add_location(path0, file$r, 13, 2, 212);
      attr_dev(path1, "class", "right s-FdClFgD2913W");
      attr_dev(path1, "d", "M58,0H42V64h16z");
      add_location(path1, file$r, 14, 2, 254);
      attr_dev(g, "class", "s-FdClFgD2913W");
      add_location(g, file$r, 12, 1, 206);
      attr_dev(svg, "viewBox", "0 0 64 64");
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-FdClFgD2913W");
      toggle_class(
        svg,
        "paused",
        /*paused*/
        ctx[0]
      );
      add_location(svg, file$r, 4, 0, 56);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$x, create_fragment$x, safe_not_equal, { paused: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rotate",
      options,
      id: create_fragment$x.name
    });
  }
  get paused() {
    throw new Error("<Rotate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set paused(value) {
    throw new Error("<Rotate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$q = "src/stories/components/Pause.story.svelte";
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
    source: '(8:1) <Hst.Variant source={` <Morph paused=${typeof paused === \\"string\\" ? `\\"${paused}\\"` : `{${paused}}`} /> `} title=\\"Morph\\" icon=\\"material-symbols:pause-outline\\">',
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
    source: '(13:1) <Hst.Variant source={` <Rotate paused=${typeof paused === \\"string\\" ? `\\"${paused}\\"` : `{${paused}}`} /> `} title=\\"Rotate\\" icon=\\"material-symbols:pause-outline\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$3(ctx) {
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
      attr_dev(div, "role", "button");
      attr_dev(div, "tabindex", "0");
      attr_dev(div, "class", "s-3GNHVAwR_FbV");
      toggle_class(
        div,
        "paused",
        /*paused*/
        ctx[1]
      );
      add_location(div, file$q, 27, 2, 1009);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(rotate, div, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(div, "click", self(
          /*click_handler*/
          ctx[6]
        ), false, false, false, false);
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
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(rotate);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: '(18:1) <Hst.Variant source={` <div role=\\"button\\" tabindex=\\"0\\" class:paused on:click|self={() => (paused = !paused)}>     <Rotate paused=${typeof paused === \\"string\\" ? `\\"${paused}\\"` : `{${paused}}`} /> </div> `} title=\\"Rotate Circle\\" icon=\\"material-symbols:pause-circle\\">',
    ctx
  });
  return block;
}
function create_default_slot$6(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Morph paused=${typeof /*paused*/
      ctx[1] === "string" ? `"${/*paused*/
      ctx[1]}"` : `{${/*paused*/
      ctx[1]}}`} />
`,
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
      source: `
<Rotate paused=${typeof /*paused*/
      ctx[1] === "string" ? `"${/*paused*/
      ctx[1]}"` : `{${/*paused*/
      ctx[1]}}`} />
`,
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
      source: `
<div role="button" tabindex="0" class:paused on:click|self={() => (paused = !paused)}>
    <Rotate paused=${typeof /*paused*/
      ctx[1] === "string" ? `"${/*paused*/
      ctx[1]}"` : `{${/*paused*/
      ctx[1]}}`} />
</div>
`,
      title: "Rotate Circle",
      icon: "material-symbols:pause-circle",
      $$slots: { default: [create_default_slot_1$3] },
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
      if (dirty & /*paused*/
      2)
        hst_variant0_changes.source = `
<Morph paused=${typeof /*paused*/
        ctx2[1] === "string" ? `"${/*paused*/
        ctx2[1]}"` : `{${/*paused*/
        ctx2[1]}}`} />
`;
      if (dirty & /*$$scope, paused*/
      130) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*paused*/
      2)
        hst_variant1_changes.source = `
<Rotate paused=${typeof /*paused*/
        ctx2[1] === "string" ? `"${/*paused*/
        ctx2[1]}"` : `{${/*paused*/
        ctx2[1]}}`} />
`;
      if (dirty & /*$$scope, paused*/
      130) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & /*paused*/
      2)
        hst_variant2_changes.source = `
<div role="button" tabindex="0" class:paused on:click|self={() => (paused = !paused)}>
    <Rotate paused=${typeof /*paused*/
        ctx2[1] === "string" ? `"${/*paused*/
        ctx2[1]}"` : `{${/*paused*/
        ctx2[1]}}`} />
</div>
`;
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
      destroy_component(hst_variant2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Components/Pause\\" icon=\\"material-symbols:pause-outline\\" layout={{ type: \\"grid\\" }}>',
    ctx
  });
  return block;
}
function create_controls_slot$5(ctx) {
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
    id: create_controls_slot$5.name,
    type: "slot",
    source: '(29:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Pause",
      icon: "material-symbols:pause-outline",
      layout: { type: "grid" },
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
    id: create_fragment$w.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$w($$self, $$props, $$invalidate) {
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
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pause_story",
      options,
      id: create_fragment$w.name
    });
  }
  get Hst() {
    throw new Error("<Pause_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Pause_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const visa = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20256%20256'%20fill='none'%3e%3cpath%20d='M166.742%2086.615c-18.177%200-34.421%209.402-34.421%2026.772%200%2019.92%2028.809%2021.295%2028.809%2031.303%200%204.214-4.839%207.986-13.104%207.986-11.729%200-20.496-5.271-20.496-5.271l-3.751%2017.529s10.099%204.452%2023.507%204.452c19.873%200%2035.511-9.864%2035.511-27.531%200-21.049-28.929-22.384-28.929-31.673%200-3.301%203.973-6.917%2012.214-6.917%209.299%200%2016.885%203.833%2016.885%203.833l3.671-16.93s-8.254-3.554-19.896-3.554zM.44%2087.893L0%2090.448s7.647%201.396%2014.535%204.182c8.868%203.194%209.5%205.054%2010.993%2010.831l16.275%2062.607H63.62l33.611-80.175H75.464l-21.597%2054.511-8.813-46.207c-.808-5.288-4.902-8.305-9.913-8.305H.44zm105.543%200l-17.075%2080.175h20.756l17.016-80.176h-20.697%200zm115.766%200c-5.005%200-7.657%202.674-9.603%207.347l-30.409%2072.829h21.767l4.211-12.139h26.518l2.561%2012.139H256l-16.755-80.175h-17.496zm2.831%2021.66l6.452%2030.086h-17.285l10.833-30.086z'%20fill='%231434cb'%20/%3e%3c/svg%3e";
const mastercard = "/svelte-component-library/assets/mastercard-ZnjN6nRC.svg";
const discover = "/svelte-component-library/assets/discover-CRg1Kif1.svg";
const amex = "/svelte-component-library/assets/amex-G2iFzRne.svg";
const file$p = "src/components/PaymentForm.svelte/PaymentForm.svelte";
function create_if_block(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      attr_dev(img, "class", "img-2 s-eJ7hmZ8GS5lq");
      if (!src_url_equal(img.src, img_src_value = /*card_images*/
      ctx[9][
        /*card_type*/
        ctx[8]
      ]))
        attr_dev(img, "src", img_src_value);
      attr_dev(
        img,
        "alt",
        /*card_type*/
        ctx[8]
      );
      add_location(img, file$p, 187, 8, 4148);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*card_type*/
      256 && !src_url_equal(img.src, img_src_value = /*card_images*/
      ctx2[9][
        /*card_type*/
        ctx2[8]
      ])) {
        attr_dev(img, "src", img_src_value);
      }
      if (dirty & /*card_type*/
      256) {
        attr_dev(
          img,
          "alt",
          /*card_type*/
          ctx2[8]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(img);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: '(161:7) {#if card_type != \\"\\"}',
    ctx
  });
  return block;
}
function create_front_slot(ctx) {
  let div6;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let t1_value = formatNumber(
    /*card_number*/
    ctx[3],
    4,
    16,
    "•"
  ) + "";
  let t1;
  let t2;
  let div5;
  let div3;
  let span4;
  let span0;
  let div1;
  let t4;
  let div2;
  let t6;
  let span3;
  let span1;
  let t7_value = formatNumber(
    /*validateMonth*/
    ctx[12](
      /*month*/
      ctx[5]
    ),
    Infinity,
    2,
    "•"
  ) + "";
  let t7;
  let t8;
  let span2;
  let t9_value = formatNumber(
    /*year*/
    ctx[6].slice(
      -2,
      /*year*/
      ctx[6].length
    ),
    Infinity,
    2,
    "•"
  ) + "";
  let t9;
  let t10;
  let span5;
  let t11_value = (
    /*name*/
    (ctx[2].trim().length > 0 ? (
      /*name*/
      ctx[2]
    ) : "Full Name") + ""
  );
  let t11;
  let t12;
  let div4;
  let if_block = (
    /*card_type*/
    ctx[8] != "" && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      div6 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      t1 = text(t1_value);
      t2 = space();
      div5 = element("div");
      div3 = element("div");
      span4 = element("span");
      span0 = element("span");
      div1 = element("div");
      div1.textContent = "valid";
      t4 = space();
      div2 = element("div");
      div2.textContent = "thru";
      t6 = space();
      span3 = element("span");
      span1 = element("span");
      t7 = text(t7_value);
      t8 = text("/");
      span2 = element("span");
      t9 = text(t9_value);
      t10 = space();
      span5 = element("span");
      t11 = text(t11_value);
      t12 = space();
      div4 = element("div");
      if (if_block)
        if_block.c();
      attr_dev(img, "class", "img-1 s-eJ7hmZ8GS5lq");
      if (!src_url_equal(img.src, img_src_value = /*card_images*/
      ctx[9][
        /*card_type*/
        ctx[8]
      ]))
        attr_dev(img, "src", img_src_value);
      attr_dev(
        img,
        "alt",
        /*card_type*/
        ctx[8]
      );
      add_location(img, file$p, 154, 5, 3249);
      attr_dev(div0, "class", "card-number s-eJ7hmZ8GS5lq");
      add_location(div0, file$p, 155, 5, 3321);
      add_location(div1, file$p, 162, 9, 3528);
      attr_dev(div2, "class", "thru s-eJ7hmZ8GS5lq");
      add_location(div2, file$p, 163, 9, 3554);
      attr_dev(span0, "class", "valid-thru s-eJ7hmZ8GS5lq");
      add_location(span0, file$p, 161, 8, 3493);
      attr_dev(span1, "class", "month s-eJ7hmZ8GS5lq");
      add_location(span1, file$p, 166, 9, 3636);
      attr_dev(span2, "class", "year s-eJ7hmZ8GS5lq");
      add_location(span2, file$p, 173, 11, 3796);
      attr_dev(span3, "class", "date");
      add_location(span3, file$p, 165, 8, 3607);
      attr_dev(span4, "class", "expiry s-eJ7hmZ8GS5lq");
      add_location(span4, file$p, 160, 7, 3463);
      attr_dev(span5, "class", "name s-eJ7hmZ8GS5lq");
      add_location(span5, file$p, 183, 7, 4e3);
      attr_dev(div3, "class", "left s-eJ7hmZ8GS5lq");
      add_location(div3, file$p, 159, 6, 3437);
      attr_dev(div4, "class", "right s-eJ7hmZ8GS5lq");
      add_location(div4, file$p, 185, 6, 4091);
      attr_dev(div5, "class", "bottom s-eJ7hmZ8GS5lq");
      add_location(div5, file$p, 158, 5, 3410);
      attr_dev(div6, "class", "front s-eJ7hmZ8GS5lq");
      add_location(div6, file$p, 153, 4, 3224);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      append_dev(div6, img);
      append_dev(div6, t0);
      append_dev(div6, div0);
      append_dev(div0, t1);
      append_dev(div6, t2);
      append_dev(div6, div5);
      append_dev(div5, div3);
      append_dev(div3, span4);
      append_dev(span4, span0);
      append_dev(span0, div1);
      append_dev(span0, t4);
      append_dev(span0, div2);
      append_dev(span4, t6);
      append_dev(span4, span3);
      append_dev(span3, span1);
      append_dev(span1, t7);
      append_dev(span3, t8);
      append_dev(span3, span2);
      append_dev(span2, t9);
      append_dev(div3, t10);
      append_dev(div3, span5);
      append_dev(span5, t11);
      append_dev(div5, t12);
      append_dev(div5, div4);
      if (if_block)
        if_block.m(div4, null);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*card_type*/
      256 && !src_url_equal(img.src, img_src_value = /*card_images*/
      ctx2[9][
        /*card_type*/
        ctx2[8]
      ])) {
        attr_dev(img, "src", img_src_value);
      }
      if (dirty & /*card_type*/
      256) {
        attr_dev(
          img,
          "alt",
          /*card_type*/
          ctx2[8]
        );
      }
      if (dirty & /*card_number*/
      8 && t1_value !== (t1_value = formatNumber(
        /*card_number*/
        ctx2[3],
        4,
        16,
        "•"
      ) + ""))
        set_data_dev(t1, t1_value);
      if (dirty & /*month*/
      32 && t7_value !== (t7_value = formatNumber(
        /*validateMonth*/
        ctx2[12](
          /*month*/
          ctx2[5]
        ),
        Infinity,
        2,
        "•"
      ) + ""))
        set_data_dev(t7, t7_value);
      if (dirty & /*year*/
      64 && t9_value !== (t9_value = formatNumber(
        /*year*/
        ctx2[6].slice(
          -2,
          /*year*/
          ctx2[6].length
        ),
        Infinity,
        2,
        "•"
      ) + ""))
        set_data_dev(t9, t9_value);
      if (dirty & /*name*/
      4 && t11_value !== (t11_value = /*name*/
      (ctx2[2].trim().length > 0 ? (
        /*name*/
        ctx2[2]
      ) : "Full Name") + ""))
        set_data_dev(t11, t11_value);
      if (
        /*card_type*/
        ctx2[8] != ""
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div4, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div6);
      }
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_front_slot.name,
    type: "slot",
    source: '(127:3) <svelte:fragment slot=\\"front\\">',
    ctx
  });
  return block;
}
function create_back_slot(ctx) {
  let div2;
  let div0;
  let t0;
  let div1;
  let t1_value = formatNumber(
    /*cvv*/
    ctx[4],
    Infinity,
    3,
    "•"
  ) + "";
  let t1;
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = text(t1_value);
      attr_dev(div0, "class", "m-strip s-eJ7hmZ8GS5lq");
      add_location(div0, file$p, 195, 5, 4347);
      attr_dev(div1, "class", "signature-strip s-eJ7hmZ8GS5lq");
      add_location(div1, file$p, 196, 5, 4376);
      attr_dev(div2, "class", "back s-eJ7hmZ8GS5lq");
      add_location(div2, file$p, 194, 4, 4323);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, t1);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*cvv*/
      16 && t1_value !== (t1_value = formatNumber(
        /*cvv*/
        ctx2[4],
        Infinity,
        3,
        "•"
      ) + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div2);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_back_slot.name,
    type: "slot",
    source: '(168:3) <svelte:fragment slot=\\"back\\">',
    ctx
  });
  return block;
}
function create_fragment$v(ctx) {
  let section;
  let div0;
  let flipcard;
  let t0;
  let form;
  let div1;
  let span0;
  let t2;
  let img0;
  let img0_src_value;
  let t3;
  let img1;
  let img1_src_value;
  let t4;
  let img2;
  let img2_src_value;
  let t5;
  let img3;
  let img3_src_value;
  let t6;
  let input0;
  let updating_value;
  let t7;
  let input1;
  let updating_value_1;
  let t8;
  let span1;
  let input2;
  let updating_value_2;
  let t9;
  let input3;
  let updating_value_3;
  let t10;
  let input4;
  let updating_value_4;
  let t11;
  let button;
  let t12;
  let button_disabled_value;
  let section_class_value;
  let current;
  flipcard = new FlipCard({
    props: {
      flipped: (
        /*focused_input*/
        ctx[7] == "cvv"
      ),
      axis: "y",
      speed: 1,
      $$slots: {
        back: [create_back_slot],
        front: [create_front_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  function input0_value_binding(value) {
    ctx[13](value);
  }
  let input0_props = {
    label: "Full Name",
    max_length: 25,
    autocomplete: "cc-name"
  };
  if (
    /*name*/
    ctx[2] !== void 0
  ) {
    input0_props.value = /*name*/
    ctx[2];
  }
  input0 = new Input({ props: input0_props, $$inline: true });
  binding_callbacks.push(() => bind(input0, "value", input0_value_binding));
  input0.$on(
    "focus",
    /*onInputFocus*/
    ctx[10]
  );
  input0.$on(
    "blur",
    /*onInputBlur*/
    ctx[11]
  );
  function input1_value_binding(value) {
    ctx[14](value);
  }
  let input1_props = {
    label: "Card Number",
    max_length: 16,
    autocomplete: "cc-number",
    pattern: /^\d*$/,
    valid: validateCardNumber
  };
  if (
    /*card_number*/
    ctx[3] !== void 0
  ) {
    input1_props.value = /*card_number*/
    ctx[3];
  }
  input1 = new Input({ props: input1_props, $$inline: true });
  binding_callbacks.push(() => bind(input1, "value", input1_value_binding));
  input1.$on(
    "focus",
    /*onInputFocus*/
    ctx[10]
  );
  input1.$on(
    "blur",
    /*onInputBlur*/
    ctx[11]
  );
  function input2_value_binding(value) {
    ctx[15](value);
  }
  let input2_props = {
    label: "CVV",
    max_length: 3,
    autocomplete: "cc-csc",
    pattern: /^\d*$/,
    valid: validateCVV
  };
  if (
    /*cvv*/
    ctx[4] !== void 0
  ) {
    input2_props.value = /*cvv*/
    ctx[4];
  }
  input2 = new Input({ props: input2_props, $$inline: true });
  binding_callbacks.push(() => bind(input2, "value", input2_value_binding));
  input2.$on(
    "focus",
    /*onInputFocus*/
    ctx[10]
  );
  input2.$on(
    "blur",
    /*onInputBlur*/
    ctx[11]
  );
  function input3_value_binding(value) {
    ctx[17](value);
  }
  let input3_props = {
    label: "Month",
    max_length: 3,
    autocomplete: "cc-exp-month",
    pattern: /^[\djfmasond]?[\daepuco]?[nbrylgptyc]?$/,
    valid: (
      /*func*/
      ctx[16]
    )
  };
  if (
    /*month*/
    ctx[5] !== void 0
  ) {
    input3_props.value = /*month*/
    ctx[5];
  }
  input3 = new Input({ props: input3_props, $$inline: true });
  binding_callbacks.push(() => bind(input3, "value", input3_value_binding));
  input3.$on(
    "focus",
    /*onInputFocus*/
    ctx[10]
  );
  input3.$on(
    "blur",
    /*onInputBlur*/
    ctx[11]
  );
  function input4_value_binding(value) {
    ctx[19](value);
  }
  let input4_props = {
    label: "Year",
    max_length: 4,
    autocomplete: "cc-exp-year",
    pattern: /^\d*$/,
    valid: (
      /*func_1*/
      ctx[18]
    )
  };
  if (
    /*year*/
    ctx[6] !== void 0
  ) {
    input4_props.value = /*year*/
    ctx[6];
  }
  input4 = new Input({ props: input4_props, $$inline: true });
  binding_callbacks.push(() => bind(input4, "value", input4_value_binding));
  input4.$on(
    "focus",
    /*onInputFocus*/
    ctx[10]
  );
  input4.$on(
    "blur",
    /*onInputBlur*/
    ctx[11]
  );
  const block = {
    c: function create() {
      section = element("section");
      div0 = element("div");
      create_component(flipcard.$$.fragment);
      t0 = space();
      form = element("form");
      div1 = element("div");
      span0 = element("span");
      span0.textContent = "We accept:";
      t2 = space();
      img0 = element("img");
      t3 = space();
      img1 = element("img");
      t4 = space();
      img2 = element("img");
      t5 = space();
      img3 = element("img");
      t6 = space();
      create_component(input0.$$.fragment);
      t7 = space();
      create_component(input1.$$.fragment);
      t8 = space();
      span1 = element("span");
      create_component(input2.$$.fragment);
      t9 = space();
      create_component(input3.$$.fragment);
      t10 = space();
      create_component(input4.$$.fragment);
      t11 = space();
      button = element("button");
      t12 = text("Continue");
      attr_dev(div0, "class", "card s-eJ7hmZ8GS5lq");
      add_location(div0, file$p, 150, 1, 3102);
      add_location(span0, file$p, 205, 3, 4553);
      if (!src_url_equal(img0.src, img0_src_value = visa))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "visa");
      attr_dev(img0, "class", "s-eJ7hmZ8GS5lq");
      add_location(img0, file$p, 206, 3, 4580);
      if (!src_url_equal(img1.src, img1_src_value = mastercard))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "mastercard");
      attr_dev(img1, "class", "s-eJ7hmZ8GS5lq");
      add_location(img1, file$p, 207, 3, 4613);
      if (!src_url_equal(img2.src, img2_src_value = amex))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "amex");
      attr_dev(img2, "class", "s-eJ7hmZ8GS5lq");
      add_location(img2, file$p, 208, 3, 4658);
      if (!src_url_equal(img3.src, img3_src_value = discover))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "discover");
      set_style(img3, "background-color", "#fff");
      attr_dev(img3, "class", "s-eJ7hmZ8GS5lq");
      add_location(img3, file$p, 209, 3, 4691);
      attr_dev(div1, "class", "accepted s-eJ7hmZ8GS5lq");
      add_location(div1, file$p, 204, 2, 4527);
      attr_dev(span1, "class", "bottom-inputs s-eJ7hmZ8GS5lq");
      add_location(span1, file$p, 229, 2, 5139);
      button.disabled = button_disabled_value = /*errors*/
      ctx[0].length > 0;
      attr_dev(button, "class", "s-eJ7hmZ8GS5lq");
      add_location(button, file$p, 267, 2, 6028);
      attr_dev(form, "class", "s-eJ7hmZ8GS5lq");
      add_location(form, file$p, 203, 1, 4518);
      attr_dev(section, "class", section_class_value = /*card_type*/
      ctx[8] + " f-" + /*focused_input*/
      ctx[7] + " s-eJ7hmZ8GS5lq");
      add_location(section, file$p, 149, 0, 3053);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div0);
      mount_component(flipcard, div0, null);
      append_dev(section, t0);
      append_dev(section, form);
      append_dev(form, div1);
      append_dev(div1, span0);
      append_dev(div1, t2);
      append_dev(div1, img0);
      append_dev(div1, t3);
      append_dev(div1, img1);
      append_dev(div1, t4);
      append_dev(div1, img2);
      append_dev(div1, t5);
      append_dev(div1, img3);
      append_dev(form, t6);
      mount_component(input0, form, null);
      append_dev(form, t7);
      mount_component(input1, form, null);
      append_dev(form, t8);
      append_dev(form, span1);
      mount_component(input2, span1, null);
      append_dev(span1, t9);
      mount_component(input3, span1, null);
      append_dev(span1, t10);
      mount_component(input4, span1, null);
      append_dev(form, t11);
      append_dev(form, button);
      append_dev(button, t12);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const flipcard_changes = {};
      if (dirty & /*focused_input*/
      128)
        flipcard_changes.flipped = /*focused_input*/
        ctx2[7] == "cvv";
      if (dirty & /*$$scope, cvv, card_type, name, year, month, card_number*/
      4194684) {
        flipcard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      flipcard.$set(flipcard_changes);
      const input0_changes = {};
      if (!updating_value && dirty & /*name*/
      4) {
        updating_value = true;
        input0_changes.value = /*name*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      input0.$set(input0_changes);
      const input1_changes = {};
      if (!updating_value_1 && dirty & /*card_number*/
      8) {
        updating_value_1 = true;
        input1_changes.value = /*card_number*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      input1.$set(input1_changes);
      const input2_changes = {};
      if (!updating_value_2 && dirty & /*cvv*/
      16) {
        updating_value_2 = true;
        input2_changes.value = /*cvv*/
        ctx2[4];
        add_flush_callback(() => updating_value_2 = false);
      }
      input2.$set(input2_changes);
      const input3_changes = {};
      if (dirty & /*year*/
      64)
        input3_changes.valid = /*func*/
        ctx2[16];
      if (!updating_value_3 && dirty & /*month*/
      32) {
        updating_value_3 = true;
        input3_changes.value = /*month*/
        ctx2[5];
        add_flush_callback(() => updating_value_3 = false);
      }
      input3.$set(input3_changes);
      const input4_changes = {};
      if (dirty & /*month*/
      32)
        input4_changes.valid = /*func_1*/
        ctx2[18];
      if (!updating_value_4 && dirty & /*year*/
      64) {
        updating_value_4 = true;
        input4_changes.value = /*year*/
        ctx2[6];
        add_flush_callback(() => updating_value_4 = false);
      }
      input4.$set(input4_changes);
      if (!current || dirty & /*errors*/
      1 && button_disabled_value !== (button_disabled_value = /*errors*/
      ctx2[0].length > 0)) {
        prop_dev(button, "disabled", button_disabled_value);
      }
      if (!current || dirty & /*card_type, focused_input*/
      384 && section_class_value !== (section_class_value = /*card_type*/
      ctx2[8] + " f-" + /*focused_input*/
      ctx2[7] + " s-eJ7hmZ8GS5lq")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(flipcard.$$.fragment, local);
      transition_in(input0.$$.fragment, local);
      transition_in(input1.$$.fragment, local);
      transition_in(input2.$$.fragment, local);
      transition_in(input3.$$.fragment, local);
      transition_in(input4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(flipcard.$$.fragment, local);
      transition_out(input0.$$.fragment, local);
      transition_out(input1.$$.fragment, local);
      transition_out(input2.$$.fragment, local);
      transition_out(input3.$$.fragment, local);
      transition_out(input4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(section);
      }
      destroy_component(flipcard);
      destroy_component(input0);
      destroy_component(input1);
      destroy_component(input2);
      destroy_component(input3);
      destroy_component(input4);
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
function formatNumber(num, sections = 3, minChars = 0, fillChar = "-") {
  const result = [];
  let str = num.toString();
  str += fillChar.repeat(Math.max(0, minChars - str.length));
  for (let i = 0; i < str.length; ++i) {
    if (i % sections === 0 && i !== 0)
      result.unshift(" ");
    result.unshift(str[str.length - 1 - i]);
  }
  return result.join("");
}
function getCardType(card_number2) {
  return {
    "4": "visa",
    "2": "mastercard",
    "5": "mastercard",
    "6": "discover",
    "3": "amex"
  }[card_number2.slice(0, 1)] || "";
}
function validateName(name2) {
  return name2.trim().length > 0;
}
function validateCardNumber(card_number2) {
  return card_number2.trim().length === 16 && !isNaN(+card_number2) && +card_number2 > 0;
}
function validateCVV(cvv2) {
  return cvv2.trim().length === 3 && !isNaN(+cvv2) && +cvv2 > 0;
}
function validateYear(year2) {
  if (isNaN(+year2) || +year2 < 0)
    return "";
  if (year2.trim().length === 2) {
    return +year2 + 2e3;
  } else
    return +year2;
}
function isExpired(month2, year2) {
  const date = /* @__PURE__ */ new Date();
  return year2 < date.getFullYear() || year2 === date.getFullYear() && month2 < date.getMonth() + 1;
}
function instance$v($$self, $$props, $$invalidate) {
  let card_type;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PaymentForm", slots, []);
  let { errors = [] } = $$props;
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
    "dec"
  ];
  const card_images = { visa, mastercard, discover, amex };
  let name = "";
  let card_number = "";
  let cvv = "";
  let month = "";
  let year = "";
  let focused_input = "";
  function onInputFocus(e) {
    $$invalidate(7, focused_input = e.detail);
  }
  function onInputBlur() {
    $$invalidate(7, focused_input = "");
  }
  function validateMonth(month2) {
    month2 = month2.trim();
    if (!isNaN(+month2)) {
      if (+month2 > 0 && +month2 <= 12) {
        return (+month2).toString().padStart(2, "0");
      }
    } else if (month2.length === 3) {
      const month_index = months.indexOf(month2.toLowerCase());
      if (month_index === -1)
        return "";
      return (month_index + 1).toString().padStart(2, "0");
    }
    return "";
  }
  function validate(name2, card_number2, cvv2, month2, year2) {
    const errors2 = [];
    if (!validateName(name2)) {
      errors2.push("No name entered");
    }
    if (!validateCardNumber(card_number2)) {
      errors2.push("invalid card number");
    }
    if (!validateCVV(cvv2)) {
      errors2.push("invalid cvv");
    }
    const valid_year = validateYear(year2);
    if (!valid_year) {
      errors2.push("invalid year");
    }
    const valid_month = validateMonth(month2);
    if (!valid_month) {
      errors2.push("invalid month");
    } else if (valid_year && isExpired(+valid_month, valid_year)) {
      errors2.push("card expired");
    }
    return errors2;
  }
  const writable_props = ["errors"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<PaymentForm> was created with unknown prop '${key2}'`);
  });
  function input0_value_binding(value) {
    name = value;
    $$invalidate(2, name);
  }
  function input1_value_binding(value) {
    card_number = value;
    $$invalidate(3, card_number);
  }
  function input2_value_binding(value) {
    cvv = value;
    $$invalidate(4, cvv);
  }
  const func = (m) => {
    m = validateMonth(m);
    return m && (year == "" || !isExpired(+m, +validateYear(year)));
  };
  function input3_value_binding(value) {
    month = value;
    $$invalidate(5, month);
  }
  const func_1 = (y) => {
    let year2 = validateYear(y);
    return year2 != "" && !isExpired(+validateMonth(month), year2);
  };
  function input4_value_binding(value) {
    year = value;
    $$invalidate(6, year);
  }
  $$self.$$set = ($$props2) => {
    if ("errors" in $$props2)
      $$invalidate(0, errors = $$props2.errors);
  };
  $$self.$capture_state = () => ({
    FlipCard,
    Input,
    visa,
    mastercard,
    discover,
    amex,
    errors,
    months,
    card_images,
    name,
    card_number,
    cvv,
    month,
    year,
    focused_input,
    formatNumber,
    getCardType,
    onInputFocus,
    onInputBlur,
    validateName,
    validateCardNumber,
    validateCVV,
    validateYear,
    validateMonth,
    isExpired,
    validate,
    card_type
  });
  $$self.$inject_state = ($$props2) => {
    if ("errors" in $$props2)
      $$invalidate(0, errors = $$props2.errors);
    if ("name" in $$props2)
      $$invalidate(2, name = $$props2.name);
    if ("card_number" in $$props2)
      $$invalidate(3, card_number = $$props2.card_number);
    if ("cvv" in $$props2)
      $$invalidate(4, cvv = $$props2.cvv);
    if ("month" in $$props2)
      $$invalidate(5, month = $$props2.month);
    if ("year" in $$props2)
      $$invalidate(6, year = $$props2.year);
    if ("focused_input" in $$props2)
      $$invalidate(7, focused_input = $$props2.focused_input);
    if ("card_type" in $$props2)
      $$invalidate(8, card_type = $$props2.card_type);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*card_number*/
    8) {
      $$invalidate(8, card_type = getCardType(card_number));
    }
    if ($$self.$$.dirty & /*name, card_number, cvv, month, year*/
    124) {
      $$invalidate(0, errors = validate(name, card_number, cvv, month, year));
    }
  };
  return [
    errors,
    formatNumber,
    name,
    card_number,
    cvv,
    month,
    year,
    focused_input,
    card_type,
    card_images,
    onInputFocus,
    onInputBlur,
    validateMonth,
    input0_value_binding,
    input1_value_binding,
    input2_value_binding,
    func,
    input3_value_binding,
    func_1,
    input4_value_binding
  ];
}
class PaymentForm extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { errors: 0, formatNumber: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PaymentForm",
      options,
      id: create_fragment$v.name
    });
  }
  get errors() {
    throw new Error("<PaymentForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set errors(value) {
    throw new Error("<PaymentForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get formatNumber() {
    return formatNumber;
  }
  set formatNumber(value) {
    throw new Error("<PaymentForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$5(ctx) {
  let paymentform;
  let current;
  paymentform = new PaymentForm({ $$inline: true });
  const block = {
    c: function create() {
      create_component(paymentform.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(paymentform, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(paymentform.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(paymentform.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(paymentform, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: '(5:0) <Hst.Story source={` <PaymentForm /> `}  title=\\"Components/Payment Form\\"  icon=\\"bi:credit-card-2-front\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_fragment$u(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<PaymentForm />
`,
      title: "Components/Payment Form",
      icon: "bi:credit-card-2-front",
      layout: { type: "single", iframe: false },
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
    id: create_fragment$u.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$u($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PaymentForm_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<PaymentForm_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<PaymentForm_story> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ PaymentForm, Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class PaymentForm_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$u, create_fragment$u, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PaymentForm_story",
      options,
      id: create_fragment$u.name
    });
  }
  get Hst() {
    throw new Error("<PaymentForm_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<PaymentForm_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$o = "src/components/Seven Segment/Seg.svelte";
function create_fragment$t(ctx) {
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
      add_location(path0, file$o, 7, 2, 144);
      attr_dev(path1, "id", "v");
      attr_dev(path1, "d", "m2 0l2 2v8l-2 2l-2-2v-8z");
      add_location(path1, file$o, 8, 2, 190);
      add_location(defs, file$o, 6, 1, 135);
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
      add_location(use0, file$o, 10, 1, 245);
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
      add_location(use1, file$o, 11, 1, 306);
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
      add_location(use2, file$o, 12, 1, 368);
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
      add_location(use3, file$o, 13, 1, 431);
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
      add_location(use4, file$o, 14, 1, 493);
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
      add_location(use5, file$o, 15, 1, 555);
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
      add_location(use6, file$o, 16, 1, 616);
      attr_dev(circle, "cx", "17.5");
      attr_dev(circle, "cy", "26.5");
      attr_dev(circle, "r", "1.5");
      attr_dev(circle, "class", "s-oI42047qExcF");
      toggle_class(circle, "hidden", !/*point*/
      ctx[1]);
      add_location(circle, file$o, 17, 1, 678);
      attr_dev(svg, "viewBox", "0 0 19 28");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "class", "s-oI42047qExcF");
      add_location(svg, file$o, 5, 0, 73);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$t, create_fragment$t, safe_not_equal, { value: 0, point: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Seg",
      options,
      id: create_fragment$t.name
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
function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  child_ctx[5] = i;
  return child_ctx;
}
function create_each_block$8(ctx) {
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
    id: create_each_block$8.name,
    type: "each",
    source: "(25:0) {#each str as v, i}",
    ctx
  });
  return block;
}
function create_fragment$s(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ensure_array_like_dev(
    /*str*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*key, str, point*/
      3) {
        each_value = ensure_array_like_dev(
          /*str*/
          ctx2[0]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
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
function instance$s($$self, $$props, $$invalidate) {
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
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { value: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SevenSegDisplay",
      options,
      id: create_fragment$s.name
    });
  }
  get value() {
    throw new Error("<SevenSegDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<SevenSegDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$n = "src/stories/components/SevenSegment.story.svelte";
function create_default_slot$4(ctx) {
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
      add_location(div, file$n, 18, 0, 361);
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
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(display);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: '(6:0) <Hst.Story source={` <div>     <Display value=${typeof value === \\"string\\" ? `\\"${value}\\"` : `{${value}}`} /> </div> `}  title=\\"Components/7 Segment\\"  icon=\\"ri:number-8\\"  layout={{ type: \\"single\\", iframe: false }} >',
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
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
    id: create_controls_slot$4.name,
    type: "slot",
    source: '(18:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$r(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      source: `
<div>
    <Display value=${typeof /*value*/
      ctx[1] === "string" ? `"${/*value*/
      ctx[1]}"` : `{${/*value*/
      ctx[1]}}`} />
</div>
`,
      title: "Components/7 Segment",
      icon: "ri:number-8",
      layout: { type: "single", iframe: false },
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
      if (dirty & /*value*/
      2)
        hst_story_changes.source = `
<div>
    <Display value=${typeof /*value*/
        ctx2[1] === "string" ? `"${/*value*/
        ctx2[1]}"` : `{${/*value*/
        ctx2[1]}}`} />
</div>
`;
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
    id: create_fragment$r.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$r($$self, $$props, $$invalidate) {
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
    init(this, options, instance$r, create_fragment$r, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SevenSegment_story",
      options,
      id: create_fragment$r.name
    });
  }
  get Hst() {
    throw new Error("<SevenSegment_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<SevenSegment_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$m = "src/components/Canvas/Starfield.svelte";
function create_fragment$q(ctx) {
  let canvas_1;
  const block = {
    c: function create() {
      canvas_1 = element("canvas");
      add_location(canvas_1, file$m, 87, 0, 1769);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, canvas_1, anchor);
      ctx[5](canvas_1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(canvas_1);
      }
      ctx[5](null);
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
  validate_slots("Starfield", slots, []);
  let { width = 500 } = $$props;
  let { height = 500 } = $$props;
  let { stars = 500 } = $$props;
  let { speed = 0.3 } = $$props;
  let canvas;
  let stars_array = [];
  const vanishing_point = { x: width / 2, y: height / 2 };
  const _Star = class _Star {
    constructor(x, y, z) {
      __publicField(this, "x");
      __publicField(this, "y");
      __publicField(this, "z");
      this.x = x;
      this.y = y;
      this.z = z;
    }
    draw(ctx) {
      const x = vanishing_point.x + this.x / (this.z / 1e3);
      const y = vanishing_point.y + this.y / (this.z / 1e3);
      if (x < 0 || x > width || y < 0 || y > height)
        return;
      const color = Math.floor((1 - (this.z / _Star.MAX_Z) ** 2) * 255);
      ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
      ctx.fillRect(x, y, 1, 1);
    }
    move(distance) {
      this.z -= distance;
      if (this.z <= 0) {
        this.z = _Star.MAX_Z;
      }
    }
    static create() {
      return new _Star(Math.random() * (_Star.MAX_X - _Star.MIN_X) + _Star.MIN_X, Math.random() * (_Star.MAX_Y - _Star.MIN_Y) + _Star.MIN_Y, Math.random() * (_Star.MAX_Z - _Star.MIN_Z) + _Star.MIN_Z);
    }
  };
  __publicField(_Star, "MAX_X", width / 2);
  __publicField(_Star, "MIN_X", -width / 2);
  __publicField(_Star, "MAX_Y", height / 2);
  __publicField(_Star, "MIN_Y", -height / 2);
  __publicField(_Star, "MAX_Z", 500);
  __publicField(_Star, "MIN_Z", 0);
  let Star = _Star;
  function clear(ctx) {
    ctx.fillStyle = "#0005";
    ctx.fillRect(0, 0, width, height);
  }
  for (let i = 0; i < stars; ++i) {
    stars_array.push(Star.create());
  }
  onMount(() => {
    $$invalidate(0, canvas.width = width, canvas);
    $$invalidate(0, canvas.height = height, canvas);
    const ctx = canvas.getContext("2d");
    let previous_time = 0;
    function tick(time) {
      clear(ctx);
      const duration = time - previous_time;
      for (const star of stars_array) {
        star.move(duration * speed);
        star.draw(ctx);
      }
      previous_time = time;
      requestAnimationFrame(tick);
    }
    tick(0);
  });
  const writable_props = ["width", "height", "stars", "speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Starfield> was created with unknown prop '${key2}'`);
  });
  function canvas_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(0, canvas);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(2, height = $$props2.height);
    if ("stars" in $$props2)
      $$invalidate(3, stars = $$props2.stars);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({
    onMount,
    width,
    height,
    stars,
    speed,
    canvas,
    stars_array,
    vanishing_point,
    Star,
    clear
  });
  $$self.$inject_state = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(2, height = $$props2.height);
    if ("stars" in $$props2)
      $$invalidate(3, stars = $$props2.stars);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
    if ("canvas" in $$props2)
      $$invalidate(0, canvas = $$props2.canvas);
    if ("stars_array" in $$props2)
      stars_array = $$props2.stars_array;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [canvas, width, height, stars, speed, canvas_1_binding];
}
class Starfield extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$q, create_fragment$q, safe_not_equal, { width: 1, height: 2, stars: 3, speed: 4 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Starfield",
      options,
      id: create_fragment$q.name
    });
  }
  get width() {
    throw new Error("<Starfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<Starfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<Starfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<Starfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get stars() {
    throw new Error("<Starfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set stars(value) {
    throw new Error("<Starfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Starfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Starfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_key_block$8(ctx) {
  let starfield;
  let updating_width;
  let updating_height;
  let updating_stars;
  let updating_speed;
  let current;
  function starfield_width_binding(value) {
    ctx[11](value);
  }
  function starfield_height_binding(value) {
    ctx[12](value);
  }
  function starfield_stars_binding(value) {
    ctx[13](value);
  }
  function starfield_speed_binding(value) {
    ctx[14](value);
  }
  let starfield_props = {};
  if (
    /*width*/
    ctx[1] !== void 0
  ) {
    starfield_props.width = /*width*/
    ctx[1];
  }
  if (
    /*height*/
    ctx[2] !== void 0
  ) {
    starfield_props.height = /*height*/
    ctx[2];
  }
  if (
    /*stars*/
    ctx[3] !== void 0
  ) {
    starfield_props.stars = /*stars*/
    ctx[3];
  }
  if (
    /*speed*/
    ctx[5] !== void 0
  ) {
    starfield_props.speed = /*speed*/
    ctx[5];
  }
  starfield = new Starfield({ props: starfield_props, $$inline: true });
  binding_callbacks.push(() => bind(starfield, "width", starfield_width_binding));
  binding_callbacks.push(() => bind(starfield, "height", starfield_height_binding));
  binding_callbacks.push(() => bind(starfield, "stars", starfield_stars_binding));
  binding_callbacks.push(() => bind(starfield, "speed", starfield_speed_binding));
  const block = {
    c: function create() {
      create_component(starfield.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(starfield, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const starfield_changes = {};
      if (!updating_width && dirty & /*width*/
      2) {
        updating_width = true;
        starfield_changes.width = /*width*/
        ctx2[1];
        add_flush_callback(() => updating_width = false);
      }
      if (!updating_height && dirty & /*height*/
      4) {
        updating_height = true;
        starfield_changes.height = /*height*/
        ctx2[2];
        add_flush_callback(() => updating_height = false);
      }
      if (!updating_stars && dirty & /*stars*/
      8) {
        updating_stars = true;
        starfield_changes.stars = /*stars*/
        ctx2[3];
        add_flush_callback(() => updating_stars = false);
      }
      if (!updating_speed && dirty & /*speed*/
      32) {
        updating_speed = true;
        starfield_changes.speed = /*speed*/
        ctx2[5];
        add_flush_callback(() => updating_speed = false);
      }
      starfield.$set(starfield_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(starfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(starfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(starfield, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$8.name,
    type: "key",
    source: "(18:1) {#key key}",
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let previous_key = (
    /*key*/
    ctx[4]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block$8(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*key*/
      16 && safe_not_equal(previous_key, previous_key = /*key*/
      ctx2[4])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block$8(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(key_block_anchor);
      }
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(16:0) <Hst.Story source={` `} title=\\"Canvas/Starfield\\" icon=\\"ion:sparkles\\">',
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Reset");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: "(22:2) <Button on:click={changed}>",
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
  let button;
  let t0;
  let hst_number0;
  let updating_value;
  let t1;
  let hst_number1;
  let updating_value_1;
  let t2;
  let hst_number2;
  let updating_value_2;
  let t3;
  let hst_number3;
  let updating_value_3;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*changed*/
    ctx[6]
  );
  function hst_number0_value_binding(value) {
    ctx[7](value);
  }
  let hst_number0_props = { title: "Width" };
  if (
    /*width*/
    ctx[1] !== void 0
  ) {
    hst_number0_props.value = /*width*/
    ctx[1];
  }
  hst_number0 = new /*Hst*/
  ctx[0].Number({ props: hst_number0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number0, "value", hst_number0_value_binding));
  function hst_number1_value_binding(value) {
    ctx[8](value);
  }
  let hst_number1_props = { title: "Height" };
  if (
    /*height*/
    ctx[2] !== void 0
  ) {
    hst_number1_props.value = /*height*/
    ctx[2];
  }
  hst_number1 = new /*Hst*/
  ctx[0].Number({ props: hst_number1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number1, "value", hst_number1_value_binding));
  function hst_number2_value_binding(value) {
    ctx[9](value);
  }
  let hst_number2_props = { title: "Stars", step: 100 };
  if (
    /*stars*/
    ctx[3] !== void 0
  ) {
    hst_number2_props.value = /*stars*/
    ctx[3];
  }
  hst_number2 = new /*Hst*/
  ctx[0].Number({ props: hst_number2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number2, "value", hst_number2_value_binding));
  function hst_number3_value_binding(value) {
    ctx[10](value);
  }
  let hst_number3_props = { title: "Speed", step: 0.1 };
  if (
    /*speed*/
    ctx[5] !== void 0
  ) {
    hst_number3_props.value = /*speed*/
    ctx[5];
  }
  hst_number3 = new /*Hst*/
  ctx[0].Number({ props: hst_number3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number3, "value", hst_number3_value_binding));
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
      t0 = space();
      create_component(hst_number0.$$.fragment);
      t1 = space();
      create_component(hst_number1.$$.fragment);
      t2 = space();
      create_component(hst_number2.$$.fragment);
      t3 = space();
      create_component(hst_number3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_number0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_number1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_number2, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(hst_number3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      32768) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const hst_number0_changes = {};
      if (!updating_value && dirty & /*width*/
      2) {
        updating_value = true;
        hst_number0_changes.value = /*width*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_number0.$set(hst_number0_changes);
      const hst_number1_changes = {};
      if (!updating_value_1 && dirty & /*height*/
      4) {
        updating_value_1 = true;
        hst_number1_changes.value = /*height*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_number1.$set(hst_number1_changes);
      const hst_number2_changes = {};
      if (!updating_value_2 && dirty & /*stars*/
      8) {
        updating_value_2 = true;
        hst_number2_changes.value = /*stars*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_number2.$set(hst_number2_changes);
      const hst_number3_changes = {};
      if (!updating_value_3 && dirty & /*speed*/
      32) {
        updating_value_3 = true;
        hst_number3_changes.value = /*speed*/
        ctx2[5];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_number3.$set(hst_number3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(hst_number0.$$.fragment, local);
      transition_in(hst_number1.$$.fragment, local);
      transition_in(hst_number2.$$.fragment, local);
      transition_in(hst_number3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(hst_number0.$$.fragment, local);
      transition_out(hst_number1.$$.fragment, local);
      transition_out(hst_number2.$$.fragment, local);
      transition_out(hst_number3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(button, detaching);
      destroy_component(hst_number0, detaching);
      destroy_component(hst_number1, detaching);
      destroy_component(hst_number2, detaching);
      destroy_component(hst_number3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(21:1) <svelte:fragment slot=\\"controls\\">',
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
      source: `
`,
      title: "Canvas/Starfield",
      icon: "ion:sparkles",
      $$slots: {
        controls: [create_controls_slot$3],
        default: [create_default_slot_1$2]
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
      if (dirty & /*$$scope, speed, stars, height, width, key*/
      32830) {
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
  validate_slots("Starfield_story", slots, []);
  let { Hst } = $$props;
  let key2 = false;
  let width = 500;
  let height = 500;
  let stars = 500;
  let speed = 0.3;
  function changed(...args) {
    $$invalidate(4, key2 = !key2);
  }
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Starfield_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key3) => {
    if (!~writable_props.indexOf(key3) && key3.slice(0, 2) !== "$$" && key3 !== "slot")
      console.warn(`<Starfield_story> was created with unknown prop '${key3}'`);
  });
  function hst_number0_value_binding(value) {
    width = value;
    $$invalidate(1, width);
  }
  function hst_number1_value_binding(value) {
    height = value;
    $$invalidate(2, height);
  }
  function hst_number2_value_binding(value) {
    stars = value;
    $$invalidate(3, stars);
  }
  function hst_number3_value_binding(value) {
    speed = value;
    $$invalidate(5, speed);
  }
  function starfield_width_binding(value) {
    width = value;
    $$invalidate(1, width);
  }
  function starfield_height_binding(value) {
    height = value;
    $$invalidate(2, height);
  }
  function starfield_stars_binding(value) {
    stars = value;
    $$invalidate(3, stars);
  }
  function starfield_speed_binding(value) {
    speed = value;
    $$invalidate(5, speed);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Starfield,
    Button,
    Hst,
    key: key2,
    width,
    height,
    stars,
    speed,
    changed
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("key" in $$props2)
      $$invalidate(4, key2 = $$props2.key);
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(2, height = $$props2.height);
    if ("stars" in $$props2)
      $$invalidate(3, stars = $$props2.stars);
    if ("speed" in $$props2)
      $$invalidate(5, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*width, height, stars*/
    14) {
      changed(width, height, stars);
    }
  };
  return [
    Hst,
    width,
    height,
    stars,
    key2,
    speed,
    changed,
    hst_number0_value_binding,
    hst_number1_value_binding,
    hst_number2_value_binding,
    hst_number3_value_binding,
    starfield_width_binding,
    starfield_height_binding,
    starfield_stars_binding,
    starfield_speed_binding
  ];
}
class Starfield_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Starfield_story",
      options,
      id: create_fragment$p.name
    });
  }
  get Hst() {
    throw new Error("<Starfield_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Starfield_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$l = "src/components/Theme Toggles/Spin.svelte";
function create_fragment$o(ctx) {
  let svg;
  let circle0;
  let circle1;
  let circle2;
  let circle3;
  let circle4;
  let circle5;
  let path;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      circle2 = svg_element("circle");
      circle3 = svg_element("circle");
      circle4 = svg_element("circle");
      circle5 = svg_element("circle");
      path = svg_element("path");
      attr_dev(circle0, "class", "a s-qPp6Arpl19Zi");
      attr_dev(circle0, "cx", "9");
      attr_dev(circle0, "cy", "1");
      attr_dev(circle0, "r", "1");
      add_location(circle0, file$l, 15, 1, 271);
      attr_dev(circle1, "class", "b s-qPp6Arpl19Zi");
      attr_dev(circle1, "cx", "15.93");
      attr_dev(circle1, "cy", "5");
      attr_dev(circle1, "r", "1");
      add_location(circle1, file$l, 16, 1, 313);
      attr_dev(circle2, "class", "c s-qPp6Arpl19Zi");
      attr_dev(circle2, "cx", "15.93");
      attr_dev(circle2, "cy", "13");
      attr_dev(circle2, "r", "1");
      add_location(circle2, file$l, 17, 1, 359);
      attr_dev(circle3, "class", "d s-qPp6Arpl19Zi");
      attr_dev(circle3, "cx", "9");
      attr_dev(circle3, "cy", "17");
      attr_dev(circle3, "r", "1");
      add_location(circle3, file$l, 18, 1, 406);
      attr_dev(circle4, "class", "e s-qPp6Arpl19Zi");
      attr_dev(circle4, "cx", "2.07");
      attr_dev(circle4, "cy", "13");
      attr_dev(circle4, "r", "1");
      add_location(circle4, file$l, 19, 1, 449);
      attr_dev(circle5, "class", "f s-qPp6Arpl19Zi");
      attr_dev(circle5, "cx", "2.07");
      attr_dev(circle5, "cy", "5");
      attr_dev(circle5, "r", "1");
      add_location(circle5, file$l, 20, 1, 495);
      attr_dev(path, "d", "M12.94 0.9A9 9 0 1 0 12.94 17.1c6.75 -3.37 6.75 -12.83 0 -16.2z");
      attr_dev(path, "class", "s-qPp6Arpl19Zi");
      add_location(path, file$l, 21, 1, 540);
      attr_dev(svg, "viewBox", "0 0 18 18");
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-qPp6Arpl19Zi");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$l, 7, 0, 126);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, circle0);
      append_dev(svg, circle1);
      append_dev(svg, circle2);
      append_dev(svg, circle3);
      append_dev(svg, circle4);
      append_dev(svg, circle5);
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
      if (detaching) {
        detach_dev(svg);
      }
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
  $$self.$capture_state = () => ({ toggleDark, light });
  $$self.$inject_state = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*light*/
    1) {
      toggleDark(!light);
    }
  };
  return [light, click_handler, keypress_handler];
}
let Spin$1 = class Spin extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin",
      options,
      id: create_fragment$o.name
    });
  }
  get light() {
    throw new Error("<Spin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set light(value) {
    throw new Error("<Spin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
const file$k = "src/components/Theme Toggles/Rise.svelte";
function create_fragment$n(ctx) {
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
      add_location(path0, file$k, 16, 2, 290);
      attr_dev(path1, "class", "moon s-pTKVn_h5v_UI");
      attr_dev(path1, "d", "M22.728 15.445c-3.71.885-6.47 4.162-6.47 8.055 0 4.573 3.804 8.293 8.479 8.293 2.995 0 5.697-1.522 7.214-3.933-.173.009-.348.013-.522.013-5.146 0-9.334-4.095-9.334-9.128a8.88 8.88 0 0 1 .633-3.3zM24.737 34C18.817 34 14 29.291 14 23.5S18.817 13 24.737 13c.423 0 .813.231 1.006.599a1.08 1.08 0 0 1-.079 1.146 6.76 6.76 0 0 0-1.31 4c0 3.816 3.173 6.92 7.075 6.92.719 0 1.428-.106 2.107-.311a1.14 1.14 0 0 1 1.138.277c.297.295.402.726.271 1.117C33.502 31.086 29.4 34 24.737 34z");
      add_location(path1, file$k, 20, 2, 1494);
      attr_dev(g, "class", "both s-pTKVn_h5v_UI");
      add_location(g, file$k, 15, 1, 271);
      attr_dev(circle, "cx", "24");
      attr_dev(circle, "cy", "24");
      attr_dev(circle, "r", "23");
      attr_dev(circle, "class", "s-pTKVn_h5v_UI");
      add_location(circle, file$k, 25, 1, 2009);
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "role", "button");
      attr_dev(svg, "tabindex", "-1");
      attr_dev(svg, "class", "s-pTKVn_h5v_UI");
      toggle_class(
        svg,
        "light",
        /*light*/
        ctx[0]
      );
      add_location(svg, file$k, 7, 0, 126);
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
      if (detaching) {
        detach_dev(svg);
      }
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
  $$self.$capture_state = () => ({ toggleDark, light });
  $$self.$inject_state = ($$props2) => {
    if ("light" in $$props2)
      $$invalidate(0, light = $$props2.light);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*light*/
    1) {
      toggleDark(!light);
    }
  };
  return [light, click_handler, keypress_handler];
}
class Rise extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { light: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rise",
      options,
      id: create_fragment$n.name
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
    source: '(12:1) <Hst.Variant source={` <Spin light=${typeof light === \\"string\\" ? `\\"${light}\\"` : `{${light}}`} /> `} title=\\"Spin\\" icon=\\"material-symbols:light-mode\\">',
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
    source: '(17:1) <Hst.Variant source={` <Rise light=${typeof light === \\"string\\" ? `\\"${light}\\"` : `{${light}}`} /> `} title=\\"Rise\\" icon=\\"material-symbols:light-mode\\">',
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
      source: `
<Spin light=${typeof /*light*/
      ctx[1] === "string" ? `"${/*light*/
      ctx[1]}"` : `{${/*light*/
      ctx[1]}}`} />
`,
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
      source: `
<Rise light=${typeof /*light*/
      ctx[1] === "string" ? `"${/*light*/
      ctx[1]}"` : `{${/*light*/
      ctx[1]}}`} />
`,
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
      if (dirty & /*light*/
      2)
        hst_variant0_changes.source = `
<Spin light=${typeof /*light*/
        ctx2[1] === "string" ? `"${/*light*/
        ctx2[1]}"` : `{${/*light*/
        ctx2[1]}}`} />
`;
      if (dirty & /*$$scope, light*/
      34) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*light*/
      2)
        hst_variant1_changes.source = `
<Rise light=${typeof /*light*/
        ctx2[1] === "string" ? `"${/*light*/
        ctx2[1]}"` : `{${/*light*/
        ctx2[1]}}`} />
`;
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
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_variant0, detaching);
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
    source: '(23:1) <svelte:fragment slot=\\"controls\\">',
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
    id: create_fragment$m.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$m($$self, $$props, $$invalidate) {
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
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ThemeToggles_story",
      options,
      id: create_fragment$m.name
    });
  }
  get Hst() {
    throw new Error("<ThemeToggles_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ThemeToggles_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$j = "src/components/Glitch.svelte";
function create_fragment$l(ctx) {
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
      add_location(span, file$j, 34, 0, 875);
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
      if (detaching) {
        detach_dev(span);
      }
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
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function instance$l($$self, $$props, $$invalidate) {
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
    init(this, options, instance$l, create_fragment$l, safe_not_equal, {
      text: 2,
      iteration_factor: 3,
      flash_duration: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch",
      options,
      id: create_fragment$l.name
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
    source: '(8:0) <Hst.Story source={` <Glitch text=${typeof text === \\"string\\" ? `\\"${text}\\"` : `{${text}}`} iteration_factor=${typeof iteration_factor === \\"string\\" ? `\\"${iteration_factor}\\"` : `{${iteration_factor}}`} flash_duration=${typeof flash_duration === \\"string\\" ? `\\"${flash_duration}\\"` : `{${flash_duration}}`} /> `} title=\\"Components/Glitch Text\\" icon=\\"bx:text\\">',
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_text, detaching);
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
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
      source: `
<Glitch text=${typeof /*text*/
      ctx[1] === "string" ? `"${/*text*/
      ctx[1]}"` : `{${/*text*/
      ctx[1]}}`} iteration_factor=${typeof /*iteration_factor*/
      ctx[2] === "string" ? `"${/*iteration_factor*/
      ctx[2]}"` : `{${/*iteration_factor*/
      ctx[2]}}`} flash_duration=${typeof /*flash_duration*/
      ctx[3] === "string" ? `"${/*flash_duration*/
      ctx[3]}"` : `{${/*flash_duration*/
      ctx[3]}}`} />
`,
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
      if (dirty & /*text, iteration_factor, flash_duration*/
      14)
        hst_story_changes.source = `
<Glitch text=${typeof /*text*/
        ctx2[1] === "string" ? `"${/*text*/
        ctx2[1]}"` : `{${/*text*/
        ctx2[1]}}`} iteration_factor=${typeof /*iteration_factor*/
        ctx2[2] === "string" ? `"${/*iteration_factor*/
        ctx2[2]}"` : `{${/*iteration_factor*/
        ctx2[2]}}`} flash_duration=${typeof /*flash_duration*/
        ctx2[3] === "string" ? `"${/*flash_duration*/
        ctx2[3]}"` : `{${/*flash_duration*/
        ctx2[3]}}`} />
`;
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
    id: create_fragment$k.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$k($$self, $$props, $$invalidate) {
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
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch_story",
      options,
      id: create_fragment$k.name
    });
  }
  get Hst() {
    throw new Error("<Glitch_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Glitch_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$i = "src/loading-animations/Spin.svelte";
function create_fragment$j(ctx) {
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
      add_location(rect0, file$i, 28, 1, 268);
      attr_dev(rect1, "class", "left s-E06QqMFOUiPA");
      attr_dev(rect1, "x", "15");
      attr_dev(rect1, "y", "15");
      attr_dev(rect1, "width", "70");
      attr_dev(rect1, "height", "70");
      add_location(rect1, file$i, 29, 1, 329);
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--scale",
        /*scale*/
        ctx[0]
      );
      set_style(svg, "--stroke", style___stroke);
      add_location(svg, file$i, 22, 0, 153);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { speed: 1, scale: 0, border_width: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spin",
      options,
      id: create_fragment$j.name
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
const file$h = "src/loading-animations/Shrink.svelte";
function create_fragment$i(ctx) {
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
      add_location(path0, file$h, 14, 1, 147);
      attr_dev(path1, "class", "b s-gr3efppLmlhZ");
      attr_dev(path1, "d", "M50,-50 l50,0 l0,50 l-50,0z");
      add_location(path1, file$h, 15, 1, 199);
      attr_dev(path2, "class", "c s-gr3efppLmlhZ");
      attr_dev(path2, "d", "M0,-100 l50,0 l0,50 l-50,0z");
      add_location(path2, file$h, 16, 1, 251);
      attr_dev(path3, "class", "d s-gr3efppLmlhZ");
      attr_dev(path3, "d", "M50,-100 l50,0 l0,50 l-50,0z");
      add_location(path3, file$h, 17, 1, 303);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-gr3efppLmlhZ");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$h, 13, 0, 79);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Shrink",
      options,
      id: create_fragment$i.name
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
const file$g = "src/loading-animations/Grow.svelte";
function create_fragment$h(ctx) {
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
      add_location(path0, file$g, 14, 1, 147);
      attr_dev(path1, "class", "b s-jIzc-yBNqDae");
      attr_dev(path1, "d", "M0,0 l50,0 l0,50 l-50,0z");
      add_location(path1, file$g, 15, 1, 197);
      attr_dev(path2, "class", "c s-jIzc-yBNqDae");
      attr_dev(path2, "d", "M50,50 l50,0 l0,50 l-50,0z");
      add_location(path2, file$g, 16, 1, 246);
      attr_dev(path3, "class", "d s-jIzc-yBNqDae");
      attr_dev(path3, "d", "M0,50 l50,0 l0,50 l-50,0z");
      add_location(path3, file$g, 17, 1, 297);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-jIzc-yBNqDae");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$g, 13, 0, 79);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Grow",
      options,
      id: create_fragment$h.name
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
const file$f = "src/loading-animations/Slide.svelte";
function create_fragment$g(ctx) {
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
      add_location(path0, file$f, 16, 3, 193);
      attr_dev(path1, "d", "M0 30.5L33.33 10.5V0.5L0 20.5V30.5Z");
      add_location(path1, file$f, 17, 3, 283);
      attr_dev(path2, "d", "M0 20.5L33.33 40.5L33.33 50.5L0 30.5L0 20.5Z");
      attr_dev(path2, "fill-opacity", "0.4");
      add_location(path2, file$f, 18, 3, 335);
      attr_dev(path3, "d", "M33.33 50.5L66.66 30.5V20.5L33.33 40.5V50.5Z");
      add_location(path3, file$f, 19, 3, 415);
      attr_dev(g, "id", "rect");
      add_location(g, file$f, 15, 2, 176);
      add_location(defs, file$f, 14, 1, 167);
      attr_dev(use0, "class", "a s-LizT1KLC5pZN");
      attr_dev(use0, "href", "#rect");
      add_location(use0, file$f, 22, 1, 490);
      attr_dev(use1, "class", "b s-LizT1KLC5pZN");
      attr_dev(use1, "href", "#rect");
      add_location(use1, file$f, 23, 1, 522);
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
      add_location(svg, file$f, 13, 0, 79);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Slide",
      options,
      id: create_fragment$g.name
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
const file$e = "src/loading-animations/Oscillate.svelte";
function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function create_each_block_1$1(ctx) {
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
      add_location(rect, file$e, 32, 3, 370);
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
      if (detaching) {
        detach_dev(rect);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1$1.name,
    type: "each",
    source: "(15:2) {#each Array(delays) as _, i}",
    ctx
  });
  return block;
}
function create_each_block$7(ctx) {
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
      add_location(rect, file$e, 39, 3, 587);
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
      if (detaching) {
        detach_dev(rect);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$7.name,
    type: "each",
    source: "(22:2) {#each Array(delays) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$7(ctx) {
  let rect;
  let rect_x_value;
  let each1_anchor;
  let each_value_1 = ensure_array_like_dev(Array(
    /*delays*/
    ctx[4]
  ));
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like_dev(Array(
    /*delays*/
    ctx[4]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
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
      add_location(rect, file$e, 37, 2, 520);
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(target, anchor);
        }
      }
      insert_dev(target, rect, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*gap, bar_width, width, count, speed, delays*/
      63) {
        each_value_1 = ensure_array_like_dev(Array(
          /*delays*/
          ctx2[4]
        ));
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1$1(child_ctx);
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
        each_value = ensure_array_like_dev(Array(
          /*delays*/
          ctx2[4]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$7(child_ctx);
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
      if (detaching) {
        detach_dev(rect);
        detach_dev(each1_anchor);
      }
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$7.name,
    type: "key",
    source: "(14:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$f(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let style___bar_width = `${/*bar_width*/
  ctx[3]}px`;
  let key_block = create_key_block$7(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--bar-width", style___bar_width);
      add_location(svg, file$e, 29, 0, 234);
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
        key_block = create_key_block$7(ctx2);
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
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {
      speed: 1,
      count: 0,
      width: 2,
      bar_width: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Oscillate",
      options,
      id: create_fragment$f.name
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
const file$d = "src/loading-animations/SpinCircles.svelte";
function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function create_each_block$6(ctx) {
  let circle;
  let style___angle = `${/*i*/
  ctx[8] * 360 / /*count*/
  ctx[0]}deg`;
  const block = {
    c: function create() {
      circle = svg_element("circle");
      attr_dev(circle, "cx", "50");
      attr_dev(circle, "cy", "50");
      attr_dev(circle, "class", "s-sCtBIHGA6lSe");
      set_style(circle, "--angle", style___angle);
      add_location(circle, file$d, 48, 4, 406);
    },
    m: function mount(target, anchor) {
      insert_dev(target, circle, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1 && style___angle !== (style___angle = `${/*i*/
      ctx2[8] * 360 / /*count*/
      ctx2[0]}deg`)) {
        set_style(circle, "--angle", style___angle);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(circle);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$6.name,
    type: "each",
    source: "(22:3) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$6(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1) {
        each_value = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$6(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$6.name,
    type: "key",
    source: "(21:2) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$e(ctx) {
  let svg;
  let g;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[4]}s`;
  let style___r = `${/*r*/
  ctx[2]}px`;
  let style___r2 = `${/*r2*/
  ctx[3]}px`;
  let key_block = create_key_block$6(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      key_block.c();
      attr_dev(g, "class", "s-sCtBIHGA6lSe");
      add_location(g, file$d, 45, 1, 351);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "currentcolor");
      attr_dev(svg, "class", "s-sCtBIHGA6lSe");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[5]
      );
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--merge",
        /*merge*/
        ctx[1]
      );
      set_style(svg, "--r", style___r);
      set_style(svg, "--r2", style___r2);
      add_location(svg, file$d, 36, 0, 195);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      key_block.m(g, null);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*count*/
      1 && safe_not_equal(previous_key, previous_key = /*count*/
      ctx2[0])) {
        key_block.d(1);
        key_block = create_key_block$6(ctx2);
        key_block.c();
        key_block.m(g, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*reverse*/
      32) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[5]
        );
      }
      if (dirty & /*speed*/
      16 && style___speed !== (style___speed = `${/*speed*/
      ctx2[4]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*merge*/
      2) {
        set_style(
          svg,
          "--merge",
          /*merge*/
          ctx2[1]
        );
      }
      if (dirty & /*r*/
      4 && style___r !== (style___r = `${/*r*/
      ctx2[2]}px`)) {
        set_style(svg, "--r", style___r);
      }
      if (dirty & /*r2*/
      8 && style___r2 !== (style___r2 = `${/*r2*/
      ctx2[3]}px`)) {
        set_style(svg, "--r2", style___r2);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
  validate_slots("SpinCircles", slots, []);
  let { count = 2 } = $$props;
  let { merge = 1 } = $$props;
  let { r = 10 } = $$props;
  let { r2 = 10 } = $$props;
  let { speed = 1 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["count", "merge", "r", "r2", "speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SpinCircles> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("merge" in $$props2)
      $$invalidate(1, merge = $$props2.merge);
    if ("r" in $$props2)
      $$invalidate(2, r = $$props2.r);
    if ("r2" in $$props2)
      $$invalidate(3, r2 = $$props2.r2);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(5, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ count, merge, r, r2, speed, reverse });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("merge" in $$props2)
      $$invalidate(1, merge = $$props2.merge);
    if ("r" in $$props2)
      $$invalidate(2, r = $$props2.r);
    if ("r2" in $$props2)
      $$invalidate(3, r2 = $$props2.r2);
    if ("speed" in $$props2)
      $$invalidate(4, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(5, reverse = $$props2.reverse);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(1, count));
    }
  };
  return [count, merge, r, r2, speed, reverse];
}
class SpinCircles extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {
      count: 0,
      merge: 1,
      r: 2,
      r2: 3,
      speed: 4,
      reverse: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SpinCircles",
      options,
      id: create_fragment$e.name
    });
  }
  get count() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get merge() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set merge(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r2() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r2(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<SpinCircles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<SpinCircles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$c = "src/loading-animations/SpinGlass.svelte";
function create_fragment$d(ctx) {
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
      add_location(path, file$c, 20, 1, 203);
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
      add_location(svg, file$c, 19, 0, 105);
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
      if (detaching) {
        detach_dev(svg);
      }
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
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { speed: 0, rotations: 1, reverse: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SpinGlass",
      options,
      id: create_fragment$d.name
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
const file$b = "src/loading-animations/DualBalls.svelte";
function create_fragment$c(ctx) {
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
      add_location(span0, file$b, 15, 1, 206);
      attr_dev(span1, "class", "left s-CiWtR4yewo-P");
      add_location(span1, file$b, 16, 1, 230);
      attr_dev(div, "class", "s-CiWtR4yewo-P");
      toggle_class(
        div,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(div, "--speed", style___speed);
      add_location(div, file$b, 14, 0, 160);
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
      if (detaching) {
        detach_dev(div);
      }
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
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DualBalls",
      options,
      id: create_fragment$c.name
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
const file$a = "src/loading-animations/DNA.svelte";
function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[9] = i;
  const constants_0 = 100 - 100 / /*count*/
  (child_ctx[0] + 1) * /*i*/
  (child_ctx[9] + 1);
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_each_block$5(ctx) {
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
      set_style(circle0, "animation-delay", "-" + /*delay*/
      ctx[5] * /*count*/
      (ctx[0] - /*i*/
      ctx[9]) + "s");
      add_location(circle0, file$a, 45, 3, 494);
      attr_dev(circle1, "cx", circle1_cx_value = /*gap*/
      ctx[7]);
      attr_dev(circle1, "class", "bottom s-7QWBfYnXqF98");
      set_style(circle1, "animation-delay", "-" + /*delay*/
      ctx[5] * /*count*/
      (ctx[0] - /*i*/
      ctx[9]) + "s");
      add_location(circle1, file$a, 46, 3, 578);
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
      if (dirty & /*delay, count*/
      33) {
        set_style(circle0, "animation-delay", "-" + /*delay*/
        ctx2[5] * /*count*/
        (ctx2[0] - /*i*/
        ctx2[9]) + "s");
      }
      if (dirty & /*count*/
      1 && circle1_cx_value !== (circle1_cx_value = /*gap*/
      ctx2[7])) {
        attr_dev(circle1, "cx", circle1_cx_value);
      }
      if (dirty & /*delay, count*/
      33) {
        set_style(circle1, "animation-delay", "-" + /*delay*/
        ctx2[5] * /*count*/
        (ctx2[0] - /*i*/
        ctx2[9]) + "s");
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(circle0);
        detach_dev(circle1);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$5.name,
    type: "each",
    source: "(21:2) {#each new Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$5(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(new Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count, delay*/
      33) {
        each_value = ensure_array_like_dev(new Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$5(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$5.name,
    type: "key",
    source: "(20:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$b(ctx) {
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
  let key_block = create_key_block$5(ctx);
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
      add_location(svg, file$a, 34, 0, 207);
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
        key_block = create_key_block$5(ctx2);
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
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
    if ($$self.$$.dirty & /*speed, count*/
    17) {
      $$invalidate(5, delay = 2 * speed / count);
    }
  };
  return [count, r, r2, height, speed, delay];
}
class DNA extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
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
      id: create_fragment$b.name
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
const file$9 = "src/loading-animations/Pie.svelte";
function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[9] = i;
  const constants_0 = 360 / /*count*/
  child_ctx[0] * /*i*/
  child_ctx[9];
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_each_block$4(ctx) {
  let path;
  let path_d_value;
  let style_rotate = `${/*rotation*/
  ctx[7]}deg`;
  let style_filter = `hue-rotate(${/*rotation*/
  ctx[7]}deg)`;
  const block = {
    c: function create() {
      path = svg_element("path");
      attr_dev(path, "d", path_d_value = "M50 0a50 50 0 01 " + /*x*/
      ctx[5] + " " + /*y*/
      ctx[4] + "L50 50");
      set_style(path, "animation-delay", "-" + /*speed*/
      (ctx[2] - /*speed*/
      ctx[2] / /*count*/
      ctx[0] * /*i*/
      ctx[9]) + "s");
      attr_dev(path, "class", "s-kOWPUeWbOD6l");
      set_style(path, "rotate", style_rotate);
      set_style(path, "filter", style_filter);
      add_location(path, file$9, 36, 3, 481);
    },
    m: function mount(target, anchor) {
      insert_dev(target, path, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*x, y*/
      48 && path_d_value !== (path_d_value = "M50 0a50 50 0 01 " + /*x*/
      ctx2[5] + " " + /*y*/
      ctx2[4] + "L50 50")) {
        attr_dev(path, "d", path_d_value);
      }
      if (dirty & /*speed, count*/
      5) {
        set_style(path, "animation-delay", "-" + /*speed*/
        (ctx2[2] - /*speed*/
        ctx2[2] / /*count*/
        ctx2[0] * /*i*/
        ctx2[9]) + "s");
      }
      const style_changed = dirty & /*speed, count*/
      5;
      if (dirty & /*count, speed*/
      5 && style_rotate !== (style_rotate = `${/*rotation*/
      ctx2[7]}deg`) || style_changed) {
        set_style(path, "rotate", style_rotate);
      }
      if (dirty & /*count, speed*/
      5 && style_filter !== (style_filter = `hue-rotate(${/*rotation*/
      ctx2[7]}deg)`) || style_changed) {
        set_style(path, "filter", style_filter);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(path);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$4.name,
    type: "each",
    source: "(17:2) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$4(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*x, y, speed, count*/
      53) {
        each_value = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$4(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$4(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$4.name,
    type: "key",
    source: "(16:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$a(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[2]}s`;
  let key_block = create_key_block$4(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-kOWPUeWbOD6l");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[3]
      );
      set_style(svg, "--speed", style___speed);
      set_style(
        svg,
        "--scale",
        /*scale*/
        ctx[1]
      );
      add_location(svg, file$9, 32, 0, 303);
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
        key_block = create_key_block$4(ctx2);
        key_block.c();
        key_block.m(svg, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*reverse*/
      8) {
        toggle_class(
          svg,
          "reverse",
          /*reverse*/
          ctx2[3]
        );
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
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
  let x;
  let y;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Pie", slots, []);
  let { count = 8 } = $$props;
  let { speed = 1 } = $$props;
  let { scale = 0.5 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["count", "speed", "scale", "reverse"];
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
    if ("reverse" in $$props2)
      $$invalidate(3, reverse = $$props2.reverse);
  };
  $$self.$capture_state = () => ({ count, speed, scale, reverse, y, x });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("scale" in $$props2)
      $$invalidate(1, scale = $$props2.scale);
    if ("reverse" in $$props2)
      $$invalidate(3, reverse = $$props2.reverse);
    if ("y" in $$props2)
      $$invalidate(4, y = $$props2.y);
    if ("x" in $$props2)
      $$invalidate(5, x = $$props2.x);
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
      $$invalidate(5, x = Math.sin(2 * Math.PI / count) * 50);
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(4, y = 50 - Math.cos(2 * Math.PI / count) * 50);
    }
  };
  return [count, scale, speed, reverse, y, x];
}
class Pie extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { count: 0, speed: 2, scale: 1, reverse: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pie",
      options,
      id: create_fragment$a.name
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
  get reverse() {
    throw new Error("<Pie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<Pie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
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
      add_location(path, file$8, 9, 1, 105);
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$8, 8, 0, 51);
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
      if (detaching) {
        detach_dev(svg);
      }
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
      add_location(path0, file$7, 10, 2, 127);
      attr_dev(mask, "id", "hg-mask");
      add_location(mask, file$7, 9, 1, 105);
      attr_dev(rect0, "class", "bottom s-oQykrzs9huaA");
      attr_dev(rect0, "x", "50");
      attr_dev(rect0, "y", "12");
      attr_dev(rect0, "mask", "url(#hg-mask)");
      add_location(rect0, file$7, 16, 2, 281);
      attr_dev(rect1, "class", "top s-oQykrzs9huaA");
      attr_dev(rect1, "x", "50");
      attr_dev(rect1, "y", "100");
      attr_dev(rect1, "mask", "url(#hg-mask)");
      add_location(rect1, file$7, 17, 2, 342);
      attr_dev(path1, "class", "hg s-oQykrzs9huaA");
      attr_dev(path1, "d", "m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z");
      add_location(path1, file$7, 18, 2, 401);
      attr_dev(g, "class", "s-oQykrzs9huaA");
      add_location(g, file$7, 15, 1, 275);
      attr_dev(svg, "viewBox", "0 0 200 200");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$7, 8, 0, 51);
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
      if (detaching) {
        detach_dev(svg);
      }
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
const file$6 = "src/loading-animations/HeartOutline.svelte";
function create_fragment$7(ctx) {
  let svg;
  let path0;
  let path1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr_dev(path0, "d", "M50 25C55 0 100 0 100 35C100 60 70 70 50 95");
      attr_dev(path0, "class", "s-lf9jUTVaip-j");
      add_location(path0, file$6, 14, 1, 147);
      attr_dev(path1, "d", "M50 25C45 0 0 0 0 35C0 60 30 70 50 95z");
      attr_dev(path1, "class", "s-lf9jUTVaip-j");
      add_location(path1, file$6, 15, 1, 205);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-lf9jUTVaip-j");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$6, 13, 0, 79);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
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
      if (detaching) {
        detach_dev(svg);
      }
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
  validate_slots("HeartOutline", slots, []);
  let { speed = 2 } = $$props;
  let { reverse = false } = $$props;
  const writable_props = ["speed", "reverse"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<HeartOutline> was created with unknown prop '${key2}'`);
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
class HeartOutline extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { speed: 0, reverse: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HeartOutline",
      options,
      id: create_fragment$7.name
    });
  }
  get speed() {
    throw new Error("<HeartOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<HeartOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<HeartOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<HeartOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$5 = "src/loading-animations/RotateOne.svelte";
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
}
function create_each_block$3(ctx) {
  let path;
  let style___angle = `${/*i*/
  ctx[6] * 360 / /*count*/
  ctx[0]}deg`;
  let style___delay = `${/*speed*/
  ctx[3] / /*count*/
  ctx[0] * /*i*/
  ctx[6]}s`;
  const block = {
    c: function create() {
      path = svg_element("path");
      attr_dev(path, "d", "M0 0V50");
      attr_dev(path, "class", "s-wGDkwetzcU3E");
      set_style(path, "--angle", style___angle);
      set_style(path, "--delay", style___delay);
      add_location(path, file$5, 36, 4, 434);
    },
    m: function mount(target, anchor) {
      insert_dev(target, path, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1 && style___angle !== (style___angle = `${/*i*/
      ctx2[6] * 360 / /*count*/
      ctx2[0]}deg`)) {
        set_style(path, "--angle", style___angle);
      }
      if (dirty & /*speed, count*/
      9 && style___delay !== (style___delay = `${/*speed*/
      ctx2[3] / /*count*/
      ctx2[0] * /*i*/
      ctx2[6]}s`)) {
        set_style(path, "--delay", style___delay);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(path);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$3.name,
    type: "each",
    source: "(16:3) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$3(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count, speed*/
      9) {
        each_value = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$3.name,
    type: "key",
    source: "(15:2) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let svg;
  let g;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[3]}s`;
  let style___width = `${/*width*/
  ctx[1]}px`;
  let key_block = create_key_block$3(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      key_block.c();
      set_style(
        g,
        "stroke-dasharray",
        /*length*/
        ctx[2] + " " + (50 - /*length*/
        ctx[2])
      );
      set_style(
        g,
        "stroke-dashoffset",
        /*length*/
        ctx[2]
      );
      attr_dev(g, "class", "s-wGDkwetzcU3E");
      add_location(g, file$5, 33, 1, 301);
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--width", style___width);
      add_location(svg, file$5, 32, 0, 221);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      key_block.m(g, null);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*count*/
      1 && safe_not_equal(previous_key, previous_key = /*count*/
      ctx2[0])) {
        key_block.d(1);
        key_block = create_key_block$3(ctx2);
        key_block.c();
        key_block.m(g, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (dirty & /*length*/
      4) {
        set_style(
          g,
          "stroke-dasharray",
          /*length*/
          ctx2[2] + " " + (50 - /*length*/
          ctx2[2])
        );
      }
      if (dirty & /*length*/
      4) {
        set_style(
          g,
          "stroke-dashoffset",
          /*length*/
          ctx2[2]
        );
      }
      if (dirty & /*speed*/
      8 && style___speed !== (style___speed = `${/*speed*/
      ctx2[3]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*width*/
      2 && style___width !== (style___width = `${/*width*/
      ctx2[1]}px`)) {
        set_style(svg, "--width", style___width);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("RotateOne", slots, []);
  let { count = 2 } = $$props;
  let { speed = 2 } = $$props;
  let { width = 10 } = $$props;
  let { length = 25 } = $$props;
  const writable_props = ["count", "speed", "width", "length"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<RotateOne> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(3, speed = $$props2.speed);
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
    if ("length" in $$props2)
      $$invalidate(2, length = $$props2.length);
  };
  $$self.$capture_state = () => ({ count, speed, width, length });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(3, speed = $$props2.speed);
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
    if ("length" in $$props2)
      $$invalidate(2, length = $$props2.length);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(1, count));
    }
    if ($$self.$$.dirty & /*width*/
    2) {
      $$invalidate(1, width = Math.max(1, width));
    }
    if ($$self.$$.dirty & /*length*/
    4) {
      $$invalidate(2, length = Math.max(1, length));
    }
  };
  return [count, width, length, speed];
}
class RotateOne extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { count: 0, speed: 3, width: 1, length: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "RotateOne",
      options,
      id: create_fragment$6.name
    });
  }
  get count() {
    throw new Error("<RotateOne>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<RotateOne>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<RotateOne>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<RotateOne>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get width() {
    throw new Error("<RotateOne>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<RotateOne>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get length() {
    throw new Error("<RotateOne>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set length(value) {
    throw new Error("<RotateOne>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$4 = "src/loading-animations/Clock.svelte";
function create_fragment$5(ctx) {
  let svg;
  let circle;
  let path0;
  let path1;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr_dev(circle, "cx", "50");
      attr_dev(circle, "cy", "50");
      attr_dev(circle, "r", "45");
      add_location(circle, file$4, 9, 1, 117);
      attr_dev(path0, "class", "minute s-wgbjDjTgYsn7");
      attr_dev(path0, "d", "M50 50v-30");
      add_location(path0, file$4, 10, 1, 152);
      attr_dev(path1, "class", "hour s-wgbjDjTgYsn7");
      attr_dev(path1, "d", "M50 50v-20");
      add_location(path1, file$4, 11, 1, 192);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "class", "s-wgbjDjTgYsn7");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$4, 8, 0, 51);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, circle);
      append_dev(svg, path0);
      append_dev(svg, path1);
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
      if (detaching) {
        detach_dev(svg);
      }
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
  validate_slots("Clock", slots, []);
  let { speed = 1 } = $$props;
  const writable_props = ["speed"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Clock> was created with unknown prop '${key2}'`);
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
class Clock extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { speed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Clock",
      options,
      id: create_fragment$5.name
    });
  }
  get speed() {
    throw new Error("<Clock>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Clock>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/loading-animations/BlockWave.svelte";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  child_ctx[5] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  child_ctx[7] = i;
  return child_ctx;
}
function create_each_block_1(ctx) {
  let rect;
  let rect_x_value;
  let rect_y_value;
  let style___delay = `${/*speed*/
  ctx[1] / /*count*/
  (ctx[0] * 5) * /*i*/
  (ctx[5] + /*j*/
  ctx[7])}s`;
  const block = {
    c: function create() {
      rect = svg_element("rect");
      attr_dev(rect, "x", rect_x_value = /*i*/
      ctx[5] * /*frac*/
      ctx[2]);
      attr_dev(rect, "y", rect_y_value = /*j*/
      ctx[7] * /*frac*/
      ctx[2]);
      attr_dev(
        rect,
        "width",
        /*frac*/
        ctx[2]
      );
      attr_dev(
        rect,
        "height",
        /*frac*/
        ctx[2]
      );
      set_style(
        rect,
        "transform-origin",
        /*i*/
        ctx[5] * /*frac*/
        ctx[2] + 50 / /*count*/
        ctx[0] + "% " + /*j*/
        (ctx[7] * /*frac*/
        ctx[2] + 50 / /*count*/
        ctx[0]) + "%"
      );
      attr_dev(rect, "class", "s-X5kC9bIcz6z6");
      set_style(rect, "--delay", style___delay);
      add_location(rect, file$3, 21, 4, 265);
    },
    m: function mount(target, anchor) {
      insert_dev(target, rect, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*frac*/
      4 && rect_x_value !== (rect_x_value = /*i*/
      ctx2[5] * /*frac*/
      ctx2[2])) {
        attr_dev(rect, "x", rect_x_value);
      }
      if (dirty & /*frac*/
      4 && rect_y_value !== (rect_y_value = /*j*/
      ctx2[7] * /*frac*/
      ctx2[2])) {
        attr_dev(rect, "y", rect_y_value);
      }
      if (dirty & /*frac*/
      4) {
        attr_dev(
          rect,
          "width",
          /*frac*/
          ctx2[2]
        );
      }
      if (dirty & /*frac*/
      4) {
        attr_dev(
          rect,
          "height",
          /*frac*/
          ctx2[2]
        );
      }
      if (dirty & /*frac, count*/
      5) {
        set_style(
          rect,
          "transform-origin",
          /*i*/
          ctx2[5] * /*frac*/
          ctx2[2] + 50 / /*count*/
          ctx2[0] + "% " + /*j*/
          (ctx2[7] * /*frac*/
          ctx2[2] + 50 / /*count*/
          ctx2[0]) + "%"
        );
      }
      const style_changed = dirty & /*frac, count*/
      5;
      if (dirty & /*speed, count, frac*/
      7 && style___delay !== (style___delay = `${/*speed*/
      ctx2[1] / /*count*/
      (ctx2[0] * 5) * /*i*/
      (ctx2[5] + /*j*/
      ctx2[7])}s`) || style_changed) {
        set_style(rect, "--delay", style___delay);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(rect);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(12:3) {#each Array(count) as _, j}",
    ctx
  });
  return block;
}
function create_each_block$2(ctx) {
  let each_1_anchor;
  let each_value_1 = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*frac, count, speed*/
      7) {
        each_value_1 = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$2.name,
    type: "each",
    source: "(11:2) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$2(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*Array, count, frac, speed*/
      7) {
        each_value = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$2.name,
    type: "key",
    source: "(10:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let key_block = create_key_block$2(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      add_location(svg, file$3, 17, 0, 131);
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
      if (dirty & /*speed*/
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
  let frac;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BlockWave", slots, []);
  let { speed = 2 } = $$props;
  let { count = 4 } = $$props;
  const writable_props = ["speed", "count"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BlockWave> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
  };
  $$self.$capture_state = () => ({ speed, count, frac });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("frac" in $$props2)
      $$invalidate(2, frac = $$props2.frac);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(1, count));
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(2, frac = 100 / count);
    }
  };
  return [count, speed, frac];
}
class BlockWave extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { speed: 1, count: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BlockWave",
      options,
      id: create_fragment$4.name
    });
  }
  get speed() {
    throw new Error("<BlockWave>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<BlockWave>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get count() {
    throw new Error("<BlockWave>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<BlockWave>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/loading-animations/BlockShuffle.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
}
function create_each_block$1(ctx) {
  let rect;
  const block = {
    c: function create() {
      rect = svg_element("rect");
      set_style(rect, "animation-delay", "-" + /*i*/
      ctx[6] * /*offset*/
      ctx[3] * /*speed*/
      ctx[2] + "s");
      attr_dev(rect, "class", "s-CgPE29yiHtmi");
      add_location(rect, file$2, 27, 3, 336);
    },
    m: function mount(target, anchor) {
      insert_dev(target, rect, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*offset, speed*/
      12) {
        set_style(rect, "animation-delay", "-" + /*i*/
        ctx2[6] * /*offset*/
        ctx2[3] * /*speed*/
        ctx2[2] + "s");
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(rect);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(12:2) {#each Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block$1(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(Array(
    /*count*/
    ctx[0]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*offset, speed, count*/
      13) {
        each_value = ensure_array_like_dev(Array(
          /*count*/
          ctx2[0]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block$1.name,
    type: "key",
    source: "(11:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let svg;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[2]}s`;
  let style___rx = `${/*border_radius*/
  ctx[1] / 100 * 45}px`;
  let key_block = create_key_block$1(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      key_block.c();
      attr_dev(svg, "viewBox", "0 0 100 100");
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--rx", style___rx);
      add_location(svg, file$2, 24, 0, 191);
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
      4 && style___speed !== (style___speed = `${/*speed*/
      ctx2[2]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*border_radius*/
      2 && style___rx !== (style___rx = `${/*border_radius*/
      ctx2[1] / 100 * 45}px`)) {
        set_style(svg, "--rx", style___rx);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
  let offset;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BlockShuffle", slots, []);
  let { border_radius = 10 } = $$props;
  let { speed = 2 } = $$props;
  let { count = 3 } = $$props;
  const writable_props = ["border_radius", "speed", "count"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BlockShuffle> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("border_radius" in $$props2)
      $$invalidate(1, border_radius = $$props2.border_radius);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
  };
  $$self.$capture_state = () => ({ border_radius, speed, count, offset });
  $$self.$inject_state = ($$props2) => {
    if ("border_radius" in $$props2)
      $$invalidate(1, border_radius = $$props2.border_radius);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("offset" in $$props2)
      $$invalidate(3, offset = $$props2.offset);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.min(3, Math.max(1, count)));
    }
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(3, offset = count == 3 ? 0.665 : 0.38);
    }
  };
  return [count, border_radius, speed, offset];
}
class BlockShuffle extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { border_radius: 1, speed: 2, count: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BlockShuffle",
      options,
      id: create_fragment$3.name
    });
  }
  get border_radius() {
    throw new Error("<BlockShuffle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set border_radius(value) {
    throw new Error("<BlockShuffle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<BlockShuffle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<BlockShuffle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get count() {
    throw new Error("<BlockShuffle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<BlockShuffle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/loading-animations/DotSlide.svelte";
function create_fragment$2(ctx) {
  let svg;
  let circle0;
  let circle1;
  let circle2;
  let circle3;
  let circle3_cx_value;
  let style___speed = `${/*speed*/
  ctx[0]}s`;
  let style___r = `${/*r*/
  ctx[2]}px`;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      circle2 = svg_element("circle");
      circle3 = svg_element("circle");
      attr_dev(
        circle0,
        "cx",
        /*r*/
        ctx[2]
      );
      attr_dev(circle0, "cy", "50");
      attr_dev(circle0, "class", "s-mUj8A-86zzbj");
      add_location(circle0, file$1, 19, 1, 184);
      attr_dev(circle1, "class", "inner s-mUj8A-86zzbj");
      attr_dev(
        circle1,
        "cx",
        /*r*/
        ctx[2]
      );
      attr_dev(circle1, "cy", "50");
      add_location(circle1, file$1, 20, 1, 211);
      attr_dev(circle2, "class", "inner s-mUj8A-86zzbj");
      attr_dev(circle2, "cx", "50");
      attr_dev(circle2, "cy", "50");
      add_location(circle2, file$1, 21, 1, 252);
      attr_dev(circle3, "cx", circle3_cx_value = 100 - /*r*/
      ctx[2]);
      attr_dev(circle3, "cy", "50");
      attr_dev(circle3, "class", "s-mUj8A-86zzbj");
      add_location(circle3, file$1, 22, 1, 294);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-mUj8A-86zzbj");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[1]
      );
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--r", style___r);
      add_location(svg, file$1, 18, 0, 98);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, circle0);
      append_dev(svg, circle1);
      append_dev(svg, circle2);
      append_dev(svg, circle3);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*r*/
      4) {
        attr_dev(
          circle0,
          "cx",
          /*r*/
          ctx2[2]
        );
      }
      if (dirty & /*r*/
      4) {
        attr_dev(
          circle1,
          "cx",
          /*r*/
          ctx2[2]
        );
      }
      if (dirty & /*r*/
      4 && circle3_cx_value !== (circle3_cx_value = 100 - /*r*/
      ctx2[2])) {
        attr_dev(circle3, "cx", circle3_cx_value);
      }
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
      if (dirty & /*r*/
      4 && style___r !== (style___r = `${/*r*/
      ctx2[2]}px`)) {
        set_style(svg, "--r", style___r);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
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
  validate_slots("DotSlide", slots, []);
  let { speed = 1 } = $$props;
  let { reverse = false } = $$props;
  let { r = 15 } = $$props;
  const writable_props = ["speed", "reverse", "r"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<DotSlide> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
    if ("r" in $$props2)
      $$invalidate(2, r = $$props2.r);
  };
  $$self.$capture_state = () => ({ speed, reverse, r });
  $$self.$inject_state = ($$props2) => {
    if ("speed" in $$props2)
      $$invalidate(0, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(1, reverse = $$props2.reverse);
    if ("r" in $$props2)
      $$invalidate(2, r = $$props2.r);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [speed, reverse, r];
}
class DotSlide extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { speed: 0, reverse: 1, r: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DotSlide",
      options,
      id: create_fragment$2.name
    });
  }
  get speed() {
    throw new Error("<DotSlide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<DotSlide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<DotSlide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<DotSlide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r() {
    throw new Error("<DotSlide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r(value) {
    throw new Error("<DotSlide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/loading-animations/DotSpin.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
}
function create_each_block(ctx) {
  let circle;
  let style___angle = `${/*i*/
  ctx[6] * 360 / /*count*/
  ctx[0]}deg`;
  const block = {
    c: function create() {
      circle = svg_element("circle");
      attr_dev(circle, "class", "outer s-Yib6qo0uZj0E");
      attr_dev(circle, "cx", "50");
      attr_dev(circle, "cy", "50");
      set_style(circle, "--angle", style___angle);
      add_location(circle, file, 30, 3, 330);
    },
    m: function mount(target, anchor) {
      insert_dev(target, circle, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1 && style___angle !== (style___angle = `${/*i*/
      ctx2[6] * 360 / /*count*/
      ctx2[0]}deg`)) {
        set_style(circle, "--angle", style___angle);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(circle);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(12:2) {#each new Array(count) as _, i}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(new Array(
    /*count*/
    ctx[0]
  ));
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
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      1) {
        each_value = ensure_array_like_dev(new Array(
          /*count*/
          ctx2[0]
        ));
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
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(11:1) {#key count}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let svg;
  let circle;
  let previous_key = (
    /*count*/
    ctx[0]
  );
  let style___speed = `${/*speed*/
  ctx[1]}s`;
  let style___r = `${/*r*/
  ctx[3]}px`;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      key_block.c();
      attr_dev(circle, "cx", "50");
      attr_dev(circle, "cy", "50");
      attr_dev(circle, "class", "s-Yib6qo0uZj0E");
      add_location(circle, file, 27, 1, 251);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "s-Yib6qo0uZj0E");
      toggle_class(
        svg,
        "reverse",
        /*reverse*/
        ctx[2]
      );
      set_style(svg, "--speed", style___speed);
      set_style(svg, "--r", style___r);
      add_location(svg, file, 26, 0, 165);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, circle);
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
      2 && style___speed !== (style___speed = `${/*speed*/
      ctx2[1]}s`)) {
        set_style(svg, "--speed", style___speed);
      }
      if (dirty & /*r*/
      8 && style___r !== (style___r = `${/*r*/
      ctx2[3]}px`)) {
        set_style(svg, "--r", style___r);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
      key_block.d(detaching);
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
  validate_slots("DotSpin", slots, []);
  let { count = 2 } = $$props;
  let { speed = 1 } = $$props;
  let { reverse = false } = $$props;
  let { r = 15 } = $$props;
  const writable_props = ["count", "speed", "reverse", "r"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<DotSpin> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(2, reverse = $$props2.reverse);
    if ("r" in $$props2)
      $$invalidate(3, r = $$props2.r);
  };
  $$self.$capture_state = () => ({ count, speed, reverse, r });
  $$self.$inject_state = ($$props2) => {
    if ("count" in $$props2)
      $$invalidate(0, count = $$props2.count);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
    if ("reverse" in $$props2)
      $$invalidate(2, reverse = $$props2.reverse);
    if ("r" in $$props2)
      $$invalidate(3, r = $$props2.r);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*count*/
    1) {
      $$invalidate(0, count = Math.max(2, count) - count % 2);
    }
  };
  return [count, speed, reverse, r];
}
class DotSpin extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { count: 0, speed: 1, reverse: 2, r: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DotSpin",
      options,
      id: create_fragment$1.name
    });
  }
  get count() {
    throw new Error("<DotSpin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<DotSpin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<DotSpin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<DotSpin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reverse() {
    throw new Error("<DotSpin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reverse(value) {
    throw new Error("<DotSpin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get r() {
    throw new Error("<DotSpin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set r(value) {
    throw new Error("<DotSpin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Loading = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockShuffle,
  BlockWave,
  Clock,
  DNA,
  DotSlide,
  DotSpin,
  DualBalls,
  Grow,
  Heart,
  HeartOutline,
  Hourglass,
  Oscillate,
  Pie,
  RotateOne,
  Shrink,
  Slide,
  Spin: Spin2,
  SpinCircles,
  SpinGlass
}, Symbol.toStringTag, { value: "Module" }));
function create_default_slot_19(ctx) {
  let loading_pie;
  let updating_count;
  let updating_speed;
  let updating_scale;
  let updating_reverse;
  let current;
  function loading_pie_count_binding(value) {
    ctx[59](value);
  }
  function loading_pie_speed_binding(value) {
    ctx[60](value);
  }
  function loading_pie_scale_binding(value) {
    ctx[61](value);
  }
  function loading_pie_reverse_binding(value) {
    ctx[62](value);
  }
  let loading_pie_props = {};
  if (
    /*pie_count*/
    ctx[30] !== void 0
  ) {
    loading_pie_props.count = /*pie_count*/
    ctx[30];
  }
  if (
    /*pie_speed*/
    ctx[31] !== void 0
  ) {
    loading_pie_props.speed = /*pie_speed*/
    ctx[31];
  }
  if (
    /*pie_scale*/
    ctx[32] !== void 0
  ) {
    loading_pie_props.scale = /*pie_scale*/
    ctx[32];
  }
  if (
    /*pie_reverse*/
    ctx[33] !== void 0
  ) {
    loading_pie_props.reverse = /*pie_reverse*/
    ctx[33];
  }
  loading_pie = new Pie({ props: loading_pie_props, $$inline: true });
  binding_callbacks.push(() => bind(loading_pie, "count", loading_pie_count_binding));
  binding_callbacks.push(() => bind(loading_pie, "speed", loading_pie_speed_binding));
  binding_callbacks.push(() => bind(loading_pie, "scale", loading_pie_scale_binding));
  binding_callbacks.push(() => bind(loading_pie, "reverse", loading_pie_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_pie.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_pie, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_pie_changes = {};
      if (!updating_count && dirty[0] & /*pie_count*/
      1073741824) {
        updating_count = true;
        loading_pie_changes.count = /*pie_count*/
        ctx2[30];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_speed && dirty[1] & /*pie_speed*/
      1) {
        updating_speed = true;
        loading_pie_changes.speed = /*pie_speed*/
        ctx2[31];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_scale && dirty[1] & /*pie_scale*/
      2) {
        updating_scale = true;
        loading_pie_changes.scale = /*pie_scale*/
        ctx2[32];
        add_flush_callback(() => updating_scale = false);
      }
      if (!updating_reverse && dirty[1] & /*pie_reverse*/
      4) {
        updating_reverse = true;
        loading_pie_changes.reverse = /*pie_reverse*/
        ctx2[33];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_pie.$set(loading_pie_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_pie.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_pie.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_pie, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_19.name,
    type: "slot",
    source: '(60:1) <Hst.Variant source={` <Loading.Pie count=${typeof pie_count === \\"string\\" ? `\\"${pie_count}\\"` : `{${pie_count}}`} speed=${typeof pie_speed === \\"string\\" ? `\\"${pie_speed}\\"` : `{${pie_speed}}`} scale=${typeof pie_scale === \\"string\\" ? `\\"${pie_scale}\\"` : `{${pie_scale}}`} reverse=${typeof pie_reverse === \\"string\\" ? `\\"${pie_reverse}\\"` : `{${pie_reverse}}`} /> `} title=\\"Pie\\" icon=\\"game-icons:swirled-shell\\">',
    ctx
  });
  return block;
}
function create_controls_slot_18(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_slider2;
  let updating_value_2;
  let t2;
  let hst_checkbox;
  let updating_value_3;
  let current;
  function hst_slider0_value_binding(value) {
    ctx[55](value);
  }
  let hst_slider0_props = { title: "Count", min: 2, max: 50 };
  if (
    /*pie_count*/
    ctx[30] !== void 0
  ) {
    hst_slider0_props.value = /*pie_count*/
    ctx[30];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[56](value);
  }
  let hst_slider1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*pie_speed*/
    ctx[31] !== void 0
  ) {
    hst_slider1_props.value = /*pie_speed*/
    ctx[31];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  function hst_slider2_value_binding(value) {
    ctx[57](value);
  }
  let hst_slider2_props = {
    title: "Scale",
    min: 0.1,
    max: 0.9,
    step: 0.1
  };
  if (
    /*pie_scale*/
    ctx[32] !== void 0
  ) {
    hst_slider2_props.value = /*pie_scale*/
    ctx[32];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding));
  function hst_checkbox_value_binding(value) {
    ctx[58](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*pie_reverse*/
    ctx[33] !== void 0
  ) {
    hst_checkbox_props.value = /*pie_reverse*/
    ctx[33];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
      t2 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*pie_count*/
      1073741824) {
        updating_value = true;
        hst_slider0_changes.value = /*pie_count*/
        ctx2[30];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*pie_speed*/
      1) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*pie_speed*/
        ctx2[31];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[1] & /*pie_scale*/
      2) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*pie_scale*/
        ctx2[32];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_3 && dirty[1] & /*pie_reverse*/
      4) {
        updating_value_3 = true;
        hst_checkbox_changes.value = /*pie_reverse*/
        ctx2[33];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_18.name,
    type: "slot",
    source: '(74:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_18(ctx) {
  let loading_dna;
  let updating_count;
  let updating_r;
  let updating_r2;
  let updating_height;
  let updating_speed;
  let current;
  function loading_dna_count_binding(value) {
    ctx[68](value);
  }
  function loading_dna_r_binding(value) {
    ctx[69](value);
  }
  function loading_dna_r2_binding(value) {
    ctx[70](value);
  }
  function loading_dna_height_binding(value) {
    ctx[71](value);
  }
  function loading_dna_speed_binding(value) {
    ctx[72](value);
  }
  let loading_dna_props = {};
  if (
    /*dna_count*/
    ctx[25] !== void 0
  ) {
    loading_dna_props.count = /*dna_count*/
    ctx[25];
  }
  if (
    /*dna_r*/
    ctx[26] !== void 0
  ) {
    loading_dna_props.r = /*dna_r*/
    ctx[26];
  }
  if (
    /*dna_r2*/
    ctx[27] !== void 0
  ) {
    loading_dna_props.r2 = /*dna_r2*/
    ctx[27];
  }
  if (
    /*dna_height*/
    ctx[28] !== void 0
  ) {
    loading_dna_props.height = /*dna_height*/
    ctx[28];
  }
  if (
    /*dna_speed*/
    ctx[29] !== void 0
  ) {
    loading_dna_props.speed = /*dna_speed*/
    ctx[29];
  }
  loading_dna = new DNA({ props: loading_dna_props, $$inline: true });
  binding_callbacks.push(() => bind(loading_dna, "count", loading_dna_count_binding));
  binding_callbacks.push(() => bind(loading_dna, "r", loading_dna_r_binding));
  binding_callbacks.push(() => bind(loading_dna, "r2", loading_dna_r2_binding));
  binding_callbacks.push(() => bind(loading_dna, "height", loading_dna_height_binding));
  binding_callbacks.push(() => bind(loading_dna, "speed", loading_dna_speed_binding));
  const block = {
    c: function create() {
      create_component(loading_dna.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_dna, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_dna_changes = {};
      if (!updating_count && dirty[0] & /*dna_count*/
      33554432) {
        updating_count = true;
        loading_dna_changes.count = /*dna_count*/
        ctx2[25];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_r && dirty[0] & /*dna_r*/
      67108864) {
        updating_r = true;
        loading_dna_changes.r = /*dna_r*/
        ctx2[26];
        add_flush_callback(() => updating_r = false);
      }
      if (!updating_r2 && dirty[0] & /*dna_r2*/
      134217728) {
        updating_r2 = true;
        loading_dna_changes.r2 = /*dna_r2*/
        ctx2[27];
        add_flush_callback(() => updating_r2 = false);
      }
      if (!updating_height && dirty[0] & /*dna_height*/
      268435456) {
        updating_height = true;
        loading_dna_changes.height = /*dna_height*/
        ctx2[28];
        add_flush_callback(() => updating_height = false);
      }
      if (!updating_speed && dirty[0] & /*dna_speed*/
      536870912) {
        updating_speed = true;
        loading_dna_changes.speed = /*dna_speed*/
        ctx2[29];
        add_flush_callback(() => updating_speed = false);
      }
      loading_dna.$set(loading_dna_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_dna.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_dna.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_dna, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_18.name,
    type: "slot",
    source: '(82:1) <Hst.Variant source={` <Loading.DNA count=${typeof dna_count === \\"string\\" ? `\\"${dna_count}\\"` : `{${dna_count}}`} r=${typeof dna_r === \\"string\\" ? `\\"${dna_r}\\"` : `{${dna_r}}`} r2=${typeof dna_r2 === \\"string\\" ? `\\"${dna_r2}\\"` : `{${dna_r2}}`} height=${typeof dna_height === \\"string\\" ? `\\"${dna_height}\\"` : `{${dna_height}}`} speed=${typeof dna_speed === \\"string\\" ? `\\"${dna_speed}\\"` : `{${dna_speed}}`} /> `} title=\\"DNA\\" icon=\\"tabler:dna\\">',
    ctx
  });
  return block;
}
function create_controls_slot_17(ctx) {
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
  let hst_slider4;
  let updating_value_4;
  let current;
  function hst_slider0_value_binding_1(value) {
    ctx[63](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 50 };
  if (
    /*dna_count*/
    ctx[25] !== void 0
  ) {
    hst_slider0_props.value = /*dna_count*/
    ctx[25];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_1));
  function hst_slider1_value_binding_1(value) {
    ctx[64](value);
  }
  let hst_slider1_props = { title: "Height", min: 0, max: 100 };
  if (
    /*dna_height*/
    ctx[28] !== void 0
  ) {
    hst_slider1_props.value = /*dna_height*/
    ctx[28];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_1));
  function hst_slider2_value_binding_1(value) {
    ctx[65](value);
  }
  let hst_slider2_props = { title: "Radius from", min: 1, max: 10 };
  if (
    /*dna_r*/
    ctx[26] !== void 0
  ) {
    hst_slider2_props.value = /*dna_r*/
    ctx[26];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_1));
  function hst_slider3_value_binding(value) {
    ctx[66](value);
  }
  let hst_slider3_props = { title: "Radius to", min: 1, max: 10 };
  if (
    /*dna_r2*/
    ctx[27] !== void 0
  ) {
    hst_slider3_props.value = /*dna_r2*/
    ctx[27];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding));
  function hst_slider4_value_binding(value) {
    ctx[67](value);
  }
  let hst_slider4_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dna_speed*/
    ctx[29] !== void 0
  ) {
    hst_slider4_props.value = /*dna_speed*/
    ctx[29];
  }
  hst_slider4 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider4_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider4, "value", hst_slider4_value_binding));
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
      create_component(hst_slider4.$$.fragment);
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
      mount_component(hst_slider4, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*dna_count*/
      33554432) {
        updating_value = true;
        hst_slider0_changes.value = /*dna_count*/
        ctx2[25];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*dna_height*/
      268435456) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*dna_height*/
        ctx2[28];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[0] & /*dna_r*/
      67108864) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*dna_r*/
        ctx2[26];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty[0] & /*dna_r2*/
      134217728) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*dna_r2*/
        ctx2[27];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider3.$set(hst_slider3_changes);
      const hst_slider4_changes = {};
      if (!updating_value_4 && dirty[0] & /*dna_speed*/
      536870912) {
        updating_value_4 = true;
        hst_slider4_changes.value = /*dna_speed*/
        ctx2[29];
        add_flush_callback(() => updating_value_4 = false);
      }
      hst_slider4.$set(hst_slider4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_slider3.$$.fragment, local);
      transition_in(hst_slider4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_slider3.$$.fragment, local);
      transition_out(hst_slider4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_slider3, detaching);
      destroy_component(hst_slider4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_17.name,
    type: "slot",
    source: '(98:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_17(ctx) {
  let loading_blockshuffle;
  let updating_speed;
  let updating_count;
  let updating_border_radius;
  let current;
  function loading_blockshuffle_speed_binding(value) {
    ctx[76](value);
  }
  function loading_blockshuffle_count_binding(value) {
    ctx[77](value);
  }
  function loading_blockshuffle_border_radius_binding(value) {
    ctx[78](value);
  }
  let loading_blockshuffle_props = {};
  if (
    /*blockShuffle_speed*/
    ctx[45] !== void 0
  ) {
    loading_blockshuffle_props.speed = /*blockShuffle_speed*/
    ctx[45];
  }
  if (
    /*blockShuffle_count*/
    ctx[46] !== void 0
  ) {
    loading_blockshuffle_props.count = /*blockShuffle_count*/
    ctx[46];
  }
  if (
    /*blockShuffle_br*/
    ctx[47] !== void 0
  ) {
    loading_blockshuffle_props.border_radius = /*blockShuffle_br*/
    ctx[47];
  }
  loading_blockshuffle = new BlockShuffle({
    props: loading_blockshuffle_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_blockshuffle, "speed", loading_blockshuffle_speed_binding));
  binding_callbacks.push(() => bind(loading_blockshuffle, "count", loading_blockshuffle_count_binding));
  binding_callbacks.push(() => bind(loading_blockshuffle, "border_radius", loading_blockshuffle_border_radius_binding));
  const block = {
    c: function create() {
      create_component(loading_blockshuffle.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_blockshuffle, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_blockshuffle_changes = {};
      if (!updating_speed && dirty[1] & /*blockShuffle_speed*/
      16384) {
        updating_speed = true;
        loading_blockshuffle_changes.speed = /*blockShuffle_speed*/
        ctx2[45];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[1] & /*blockShuffle_count*/
      32768) {
        updating_count = true;
        loading_blockshuffle_changes.count = /*blockShuffle_count*/
        ctx2[46];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_border_radius && dirty[1] & /*blockShuffle_br*/
      65536) {
        updating_border_radius = true;
        loading_blockshuffle_changes.border_radius = /*blockShuffle_br*/
        ctx2[47];
        add_flush_callback(() => updating_border_radius = false);
      }
      loading_blockshuffle.$set(loading_blockshuffle_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_blockshuffle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_blockshuffle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_blockshuffle, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_17.name,
    type: "slot",
    source: '(107:1) <Hst.Variant source={` <Loading.BlockShuffle speed=${typeof blockShuffle_speed === \\"string\\" ? `\\"${blockShuffle_speed}\\"` : `{${blockShuffle_speed}}`} count=${typeof blockShuffle_count === \\"string\\" ? `\\"${blockShuffle_count}\\"` : `{${blockShuffle_count}}`} border_radius=${typeof blockShuffle_br === \\"string\\" ? `\\"${blockShuffle_br}\\"` : `{${blockShuffle_br}}`} /> `} title=\\"Block Shuffle\\" icon=\\"zondicons:view-tile\\">',
    ctx
  });
  return block;
}
function create_controls_slot_16(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_slider2;
  let updating_value_2;
  let current;
  function hst_slider0_value_binding_2(value) {
    ctx[73](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 3 };
  if (
    /*blockShuffle_count*/
    ctx[46] !== void 0
  ) {
    hst_slider0_props.value = /*blockShuffle_count*/
    ctx[46];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_2));
  function hst_slider1_value_binding_2(value) {
    ctx[74](value);
  }
  let hst_slider1_props = {
    title: "Border Radius %",
    min: 0,
    max: 50
  };
  if (
    /*blockShuffle_br*/
    ctx[47] !== void 0
  ) {
    hst_slider1_props.value = /*blockShuffle_br*/
    ctx[47];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_2));
  function hst_slider2_value_binding_2(value) {
    ctx[75](value);
  }
  let hst_slider2_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*blockShuffle_speed*/
    ctx[45] !== void 0
  ) {
    hst_slider2_props.value = /*blockShuffle_speed*/
    ctx[45];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_2));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[1] & /*blockShuffle_count*/
      32768) {
        updating_value = true;
        hst_slider0_changes.value = /*blockShuffle_count*/
        ctx2[46];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*blockShuffle_br*/
      65536) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*blockShuffle_br*/
        ctx2[47];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[1] & /*blockShuffle_speed*/
      16384) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*blockShuffle_speed*/
        ctx2[45];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_16.name,
    type: "slot",
    source: '(119:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_16(ctx) {
  let loading_blockwave;
  let updating_speed;
  let updating_count;
  let current;
  function loading_blockwave_speed_binding(value) {
    ctx[81](value);
  }
  function loading_blockwave_count_binding(value) {
    ctx[82](value);
  }
  let loading_blockwave_props = {};
  if (
    /*blockWave_speed*/
    ctx[43] !== void 0
  ) {
    loading_blockwave_props.speed = /*blockWave_speed*/
    ctx[43];
  }
  if (
    /*blockWave_count*/
    ctx[44] !== void 0
  ) {
    loading_blockwave_props.count = /*blockWave_count*/
    ctx[44];
  }
  loading_blockwave = new BlockWave({
    props: loading_blockwave_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_blockwave, "speed", loading_blockwave_speed_binding));
  binding_callbacks.push(() => bind(loading_blockwave, "count", loading_blockwave_count_binding));
  const block = {
    c: function create() {
      create_component(loading_blockwave.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_blockwave, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_blockwave_changes = {};
      if (!updating_speed && dirty[1] & /*blockWave_speed*/
      4096) {
        updating_speed = true;
        loading_blockwave_changes.speed = /*blockWave_speed*/
        ctx2[43];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[1] & /*blockWave_count*/
      8192) {
        updating_count = true;
        loading_blockwave_changes.count = /*blockWave_count*/
        ctx2[44];
        add_flush_callback(() => updating_count = false);
      }
      loading_blockwave.$set(loading_blockwave_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_blockwave.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_blockwave.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_blockwave, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_16.name,
    type: "slot",
    source: '(132:1) <Hst.Variant source={` <Loading.BlockWave speed=${typeof blockWave_speed === \\"string\\" ? `\\"${blockWave_speed}\\"` : `{${blockWave_speed}}`} count=${typeof blockWave_count === \\"string\\" ? `\\"${blockWave_count}\\"` : `{${blockWave_count}}`} /> `} title=\\"Block Wave\\" icon=\\"fe:tiled\\">',
    ctx
  });
  return block;
}
function create_controls_slot_15(ctx) {
  let hst_slider0;
  let updating_value;
  let t;
  let hst_slider1;
  let updating_value_1;
  let current;
  function hst_slider0_value_binding_3(value) {
    ctx[79](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 15 };
  if (
    /*blockWave_count*/
    ctx[44] !== void 0
  ) {
    hst_slider0_props.value = /*blockWave_count*/
    ctx[44];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_3));
  function hst_slider1_value_binding_3(value) {
    ctx[80](value);
  }
  let hst_slider1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*blockWave_speed*/
    ctx[43] !== void 0
  ) {
    hst_slider1_props.value = /*blockWave_speed*/
    ctx[43];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_3));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t = space();
      create_component(hst_slider1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[1] & /*blockWave_count*/
      8192) {
        updating_value = true;
        hst_slider0_changes.value = /*blockWave_count*/
        ctx2[44];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*blockWave_speed*/
      4096) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*blockWave_speed*/
        ctx2[43];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_15.name,
    type: "slot",
    source: '(136:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_15(ctx) {
  let loading_clock;
  let updating_speed;
  let current;
  function loading_clock_speed_binding(value) {
    ctx[84](value);
  }
  let loading_clock_props = {};
  if (
    /*clock_speed*/
    ctx[42] !== void 0
  ) {
    loading_clock_props.speed = /*clock_speed*/
    ctx[42];
  }
  loading_clock = new Clock({
    props: loading_clock_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_clock, "speed", loading_clock_speed_binding));
  const block = {
    c: function create() {
      create_component(loading_clock.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_clock, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_clock_changes = {};
      if (!updating_speed && dirty[1] & /*clock_speed*/
      2048) {
        updating_speed = true;
        loading_clock_changes.speed = /*clock_speed*/
        ctx2[42];
        add_flush_callback(() => updating_speed = false);
      }
      loading_clock.$set(loading_clock_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_clock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_clock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_clock, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_15.name,
    type: "slot",
    source: '(142:1) <Hst.Variant source={` <Loading.Clock speed=${typeof clock_speed === \\"string\\" ? `\\"${clock_speed}\\"` : `{${clock_speed}}`} /> `} title=\\"Clock\\" icon=\\"ic:baseline-access-time\\">',
    ctx
  });
  return block;
}
function create_controls_slot_14(ctx) {
  let hst_slider;
  let updating_value;
  let current;
  function hst_slider_value_binding(value) {
    ctx[83](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*clock_speed*/
    ctx[42] !== void 0
  ) {
    hst_slider_props.value = /*clock_speed*/
    ctx[42];
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
      if (!updating_value && dirty[1] & /*clock_speed*/
      2048) {
        updating_value = true;
        hst_slider_changes.value = /*clock_speed*/
        ctx2[42];
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
    id: create_controls_slot_14.name,
    type: "slot",
    source: '(146:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_14(ctx) {
  let loading_rotateone;
  let updating_speed;
  let updating_count;
  let updating_width;
  let updating_length;
  let current;
  function loading_rotateone_speed_binding(value) {
    ctx[89](value);
  }
  function loading_rotateone_count_binding(value) {
    ctx[90](value);
  }
  function loading_rotateone_width_binding(value) {
    ctx[91](value);
  }
  function loading_rotateone_length_binding(value) {
    ctx[92](value);
  }
  let loading_rotateone_props = {};
  if (
    /*rotateOne_speed*/
    ctx[38] !== void 0
  ) {
    loading_rotateone_props.speed = /*rotateOne_speed*/
    ctx[38];
  }
  if (
    /*rotateOne_count*/
    ctx[39] !== void 0
  ) {
    loading_rotateone_props.count = /*rotateOne_count*/
    ctx[39];
  }
  if (
    /*rotateOne_width*/
    ctx[40] !== void 0
  ) {
    loading_rotateone_props.width = /*rotateOne_width*/
    ctx[40];
  }
  if (
    /*rotateOne_length*/
    ctx[41] !== void 0
  ) {
    loading_rotateone_props.length = /*rotateOne_length*/
    ctx[41];
  }
  loading_rotateone = new RotateOne({
    props: loading_rotateone_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_rotateone, "speed", loading_rotateone_speed_binding));
  binding_callbacks.push(() => bind(loading_rotateone, "count", loading_rotateone_count_binding));
  binding_callbacks.push(() => bind(loading_rotateone, "width", loading_rotateone_width_binding));
  binding_callbacks.push(() => bind(loading_rotateone, "length", loading_rotateone_length_binding));
  const block = {
    c: function create() {
      create_component(loading_rotateone.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_rotateone, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_rotateone_changes = {};
      if (!updating_speed && dirty[1] & /*rotateOne_speed*/
      128) {
        updating_speed = true;
        loading_rotateone_changes.speed = /*rotateOne_speed*/
        ctx2[38];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[1] & /*rotateOne_count*/
      256) {
        updating_count = true;
        loading_rotateone_changes.count = /*rotateOne_count*/
        ctx2[39];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_width && dirty[1] & /*rotateOne_width*/
      512) {
        updating_width = true;
        loading_rotateone_changes.width = /*rotateOne_width*/
        ctx2[40];
        add_flush_callback(() => updating_width = false);
      }
      if (!updating_length && dirty[1] & /*rotateOne_length*/
      1024) {
        updating_length = true;
        loading_rotateone_changes.length = /*rotateOne_length*/
        ctx2[41];
        add_flush_callback(() => updating_length = false);
      }
      loading_rotateone.$set(loading_rotateone_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_rotateone.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_rotateone.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_rotateone, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_14.name,
    type: "slot",
    source: '(151:1) <Hst.Variant source={` <Loading.RotateOne speed=${typeof rotateOne_speed === \\"string\\" ? `\\"${rotateOne_speed}\\"` : `{${rotateOne_speed}}`} count=${typeof rotateOne_count === \\"string\\" ? `\\"${rotateOne_count}\\"` : `{${rotateOne_count}}`} width=${typeof rotateOne_width === \\"string\\" ? `\\"${rotateOne_width}\\"` : `{${rotateOne_width}}`} length=${typeof rotateOne_length === \\"string\\" ? `\\"${rotateOne_length}\\"` : `{${rotateOne_length}}`} /> `} title=\\"Rotate 1\\" icon=\\"ph:circle-dashed-bold\\">',
    ctx
  });
  return block;
}
function create_controls_slot_13(ctx) {
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
  let current;
  function hst_slider0_value_binding_4(value) {
    ctx[85](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 25 };
  if (
    /*rotateOne_count*/
    ctx[39] !== void 0
  ) {
    hst_slider0_props.value = /*rotateOne_count*/
    ctx[39];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_4));
  function hst_slider1_value_binding_4(value) {
    ctx[86](value);
  }
  let hst_slider1_props = { title: "Width", min: 1, max: 50 };
  if (
    /*rotateOne_width*/
    ctx[40] !== void 0
  ) {
    hst_slider1_props.value = /*rotateOne_width*/
    ctx[40];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_4));
  function hst_slider2_value_binding_3(value) {
    ctx[87](value);
  }
  let hst_slider2_props = { title: "Length", min: 1, max: 50 };
  if (
    /*rotateOne_length*/
    ctx[41] !== void 0
  ) {
    hst_slider2_props.value = /*rotateOne_length*/
    ctx[41];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_3));
  function hst_slider3_value_binding_1(value) {
    ctx[88](value);
  }
  let hst_slider3_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*rotateOne_speed*/
    ctx[38] !== void 0
  ) {
    hst_slider3_props.value = /*rotateOne_speed*/
    ctx[38];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding_1));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
      t2 = space();
      create_component(hst_slider3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_slider3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[1] & /*rotateOne_count*/
      256) {
        updating_value = true;
        hst_slider0_changes.value = /*rotateOne_count*/
        ctx2[39];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*rotateOne_width*/
      512) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*rotateOne_width*/
        ctx2[40];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[1] & /*rotateOne_length*/
      1024) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*rotateOne_length*/
        ctx2[41];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty[1] & /*rotateOne_speed*/
      128) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*rotateOne_speed*/
        ctx2[38];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider3.$set(hst_slider3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_slider3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_slider3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_slider3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_13.name,
    type: "slot",
    source: '(165:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_13(ctx) {
  let loading_hourglass;
  let updating_speed;
  let current;
  function loading_hourglass_speed_binding(value) {
    ctx[94](value);
  }
  let loading_hourglass_props = {};
  if (
    /*hourglass_speed*/
    ctx[37] !== void 0
  ) {
    loading_hourglass_props.speed = /*hourglass_speed*/
    ctx[37];
  }
  loading_hourglass = new Hourglass({
    props: loading_hourglass_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_hourglass, "speed", loading_hourglass_speed_binding));
  const block = {
    c: function create() {
      create_component(loading_hourglass.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_hourglass, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_hourglass_changes = {};
      if (!updating_speed && dirty[1] & /*hourglass_speed*/
      64) {
        updating_speed = true;
        loading_hourglass_changes.speed = /*hourglass_speed*/
        ctx2[37];
        add_flush_callback(() => updating_speed = false);
      }
      loading_hourglass.$set(loading_hourglass_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_hourglass.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_hourglass.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_hourglass, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_13.name,
    type: "slot",
    source: '(173:1) <Hst.Variant source={` <Loading.Hourglass speed=${typeof hourglass_speed === \\"string\\" ? `\\"${hourglass_speed}\\"` : `{${hourglass_speed}}`} /> `} title=\\"Hourglass\\" icon=\\"ic:round-hourglass-bottom\\">',
    ctx
  });
  return block;
}
function create_controls_slot_12(ctx) {
  let hst_slider;
  let updating_value;
  let current;
  function hst_slider_value_binding_1(value) {
    ctx[93](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*hourglass_speed*/
    ctx[37] !== void 0
  ) {
    hst_slider_props.value = /*hourglass_speed*/
    ctx[37];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_1));
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
      if (!updating_value && dirty[1] & /*hourglass_speed*/
      64) {
        updating_value = true;
        hst_slider_changes.value = /*hourglass_speed*/
        ctx2[37];
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
    id: create_controls_slot_12.name,
    type: "slot",
    source: '(177:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_12(ctx) {
  let loading_heartoutline;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_heartoutline_speed_binding(value) {
    ctx[97](value);
  }
  function loading_heartoutline_reverse_binding(value) {
    ctx[98](value);
  }
  let loading_heartoutline_props = {};
  if (
    /*heartOutline_speed*/
    ctx[35] !== void 0
  ) {
    loading_heartoutline_props.speed = /*heartOutline_speed*/
    ctx[35];
  }
  if (
    /*heartOutline_reverse*/
    ctx[36] !== void 0
  ) {
    loading_heartoutline_props.reverse = /*heartOutline_reverse*/
    ctx[36];
  }
  loading_heartoutline = new HeartOutline({
    props: loading_heartoutline_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_heartoutline, "speed", loading_heartoutline_speed_binding));
  binding_callbacks.push(() => bind(loading_heartoutline, "reverse", loading_heartoutline_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_heartoutline.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_heartoutline, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_heartoutline_changes = {};
      if (!updating_speed && dirty[1] & /*heartOutline_speed*/
      16) {
        updating_speed = true;
        loading_heartoutline_changes.speed = /*heartOutline_speed*/
        ctx2[35];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[1] & /*heartOutline_reverse*/
      32) {
        updating_reverse = true;
        loading_heartoutline_changes.reverse = /*heartOutline_reverse*/
        ctx2[36];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_heartoutline.$set(loading_heartoutline_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_heartoutline.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_heartoutline.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_heartoutline, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_12.name,
    type: "slot",
    source: '(182:1) <Hst.Variant source={` <Loading.HeartOutline speed=${typeof heartOutline_speed === \\"string\\" ? `\\"${heartOutline_speed}\\"` : `{${heartOutline_speed}}`} reverse=${typeof heartOutline_reverse === \\"string\\" ? `\\"${heartOutline_reverse}\\"` : `{${heartOutline_reverse}}`} /> `} title=\\"Heart Outline\\" icon=\\"material-symbols:favorite\\">',
    ctx
  });
  return block;
}
function create_controls_slot_11(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_2(value) {
    ctx[95](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*heartOutline_speed*/
    ctx[35] !== void 0
  ) {
    hst_slider_props.value = /*heartOutline_speed*/
    ctx[35];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_2));
  function hst_checkbox_value_binding_1(value) {
    ctx[96](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*heartOutline_reverse*/
    ctx[36] !== void 0
  ) {
    hst_checkbox_props.value = /*heartOutline_reverse*/
    ctx[36];
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
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[1] & /*heartOutline_speed*/
      16) {
        updating_value = true;
        hst_slider_changes.value = /*heartOutline_speed*/
        ctx2[35];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[1] & /*heartOutline_reverse*/
      32) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*heartOutline_reverse*/
        ctx2[36];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_11.name,
    type: "slot",
    source: '(186:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_11(ctx) {
  let loading_heart;
  let updating_speed;
  let current;
  function loading_heart_speed_binding(value) {
    ctx[100](value);
  }
  let loading_heart_props = {};
  if (
    /*heart_speed*/
    ctx[34] !== void 0
  ) {
    loading_heart_props.speed = /*heart_speed*/
    ctx[34];
  }
  loading_heart = new Heart({
    props: loading_heart_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_heart, "speed", loading_heart_speed_binding));
  const block = {
    c: function create() {
      create_component(loading_heart.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_heart, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_heart_changes = {};
      if (!updating_speed && dirty[1] & /*heart_speed*/
      8) {
        updating_speed = true;
        loading_heart_changes.speed = /*heart_speed*/
        ctx2[34];
        add_flush_callback(() => updating_speed = false);
      }
      loading_heart.$set(loading_heart_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_heart.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_heart.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_heart, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_11.name,
    type: "slot",
    source: '(198:1) <Hst.Variant source={` <Loading.Heart speed=${typeof heart_speed === \\"string\\" ? `\\"${heart_speed}\\"` : `{${heart_speed}}`} /> `} title=\\"Heart\\" icon=\\"material-symbols:favorite\\">',
    ctx
  });
  return block;
}
function create_controls_slot_10(ctx) {
  let hst_slider;
  let updating_value;
  let current;
  function hst_slider_value_binding_3(value) {
    ctx[99](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*heart_speed*/
    ctx[34] !== void 0
  ) {
    hst_slider_props.value = /*heart_speed*/
    ctx[34];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_3));
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
      if (!updating_value && dirty[1] & /*heart_speed*/
      8) {
        updating_value = true;
        hst_slider_changes.value = /*heart_speed*/
        ctx2[34];
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
    id: create_controls_slot_10.name,
    type: "slot",
    source: '(202:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_10(ctx) {
  let loading_dualballs;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_dualballs_speed_binding(value) {
    ctx[103](value);
  }
  function loading_dualballs_reverse_binding(value) {
    ctx[104](value);
  }
  let loading_dualballs_props = {};
  if (
    /*dualBalls_speed*/
    ctx[23] !== void 0
  ) {
    loading_dualballs_props.speed = /*dualBalls_speed*/
    ctx[23];
  }
  if (
    /*dualBalls_reverse*/
    ctx[24] !== void 0
  ) {
    loading_dualballs_props.reverse = /*dualBalls_reverse*/
    ctx[24];
  }
  loading_dualballs = new DualBalls({
    props: loading_dualballs_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_dualballs, "speed", loading_dualballs_speed_binding));
  binding_callbacks.push(() => bind(loading_dualballs, "reverse", loading_dualballs_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_dualballs.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_dualballs, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_dualballs_changes = {};
      if (!updating_speed && dirty[0] & /*dualBalls_speed*/
      8388608) {
        updating_speed = true;
        loading_dualballs_changes.speed = /*dualBalls_speed*/
        ctx2[23];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*dualBalls_reverse*/
      16777216) {
        updating_reverse = true;
        loading_dualballs_changes.reverse = /*dualBalls_reverse*/
        ctx2[24];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_dualballs.$set(loading_dualballs_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_dualballs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_dualballs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_dualballs, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_10.name,
    type: "slot",
    source: '(207:1) <Hst.Variant source={` <Loading.DualBalls speed=${typeof dualBalls_speed === \\"string\\" ? `\\"${dualBalls_speed}\\"` : `{${dualBalls_speed}}`} reverse=${typeof dualBalls_reverse === \\"string\\" ? `\\"${dualBalls_reverse}\\"` : `{${dualBalls_reverse}}`} /> `} title=\\"DualBalls\\" icon=\\"ic:baseline-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot_9(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_4(value) {
    ctx[101](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dualBalls_speed*/
    ctx[23] !== void 0
  ) {
    hst_slider_props.value = /*dualBalls_speed*/
    ctx[23];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_4));
  function hst_checkbox_value_binding_2(value) {
    ctx[102](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*dualBalls_reverse*/
    ctx[24] !== void 0
  ) {
    hst_checkbox_props.value = /*dualBalls_reverse*/
    ctx[24];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_2));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*dualBalls_speed*/
      8388608) {
        updating_value = true;
        hst_slider_changes.value = /*dualBalls_speed*/
        ctx2[23];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*dualBalls_reverse*/
      16777216) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*dualBalls_reverse*/
        ctx2[24];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_9.name,
    type: "slot",
    source: '(211:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_9(ctx) {
  let loading_spinglass;
  let updating_rotations;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_spinglass_rotations_binding(value) {
    ctx[108](value);
  }
  function loading_spinglass_speed_binding(value) {
    ctx[109](value);
  }
  function loading_spinglass_reverse_binding(value) {
    ctx[110](value);
  }
  let loading_spinglass_props = {};
  if (
    /*spinGlass_rotations*/
    ctx[21] !== void 0
  ) {
    loading_spinglass_props.rotations = /*spinGlass_rotations*/
    ctx[21];
  }
  if (
    /*spinGlass_speed*/
    ctx[20] !== void 0
  ) {
    loading_spinglass_props.speed = /*spinGlass_speed*/
    ctx[20];
  }
  if (
    /*spinGlass_reverse*/
    ctx[22] !== void 0
  ) {
    loading_spinglass_props.reverse = /*spinGlass_reverse*/
    ctx[22];
  }
  loading_spinglass = new SpinGlass({
    props: loading_spinglass_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_spinglass, "rotations", loading_spinglass_rotations_binding));
  binding_callbacks.push(() => bind(loading_spinglass, "speed", loading_spinglass_speed_binding));
  binding_callbacks.push(() => bind(loading_spinglass, "reverse", loading_spinglass_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_spinglass.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_spinglass, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_spinglass_changes = {};
      if (!updating_rotations && dirty[0] & /*spinGlass_rotations*/
      2097152) {
        updating_rotations = true;
        loading_spinglass_changes.rotations = /*spinGlass_rotations*/
        ctx2[21];
        add_flush_callback(() => updating_rotations = false);
      }
      if (!updating_speed && dirty[0] & /*spinGlass_speed*/
      1048576) {
        updating_speed = true;
        loading_spinglass_changes.speed = /*spinGlass_speed*/
        ctx2[20];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*spinGlass_reverse*/
      4194304) {
        updating_reverse = true;
        loading_spinglass_changes.reverse = /*spinGlass_reverse*/
        ctx2[22];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_spinglass.$set(loading_spinglass_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_spinglass.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_spinglass.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_spinglass, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_9.name,
    type: "slot",
    source: '(217:1) <Hst.Variant source={` <Loading.SpinGlass rotations=${typeof spinGlass_rotations === \\"string\\" ? `\\"${spinGlass_rotations}\\"` : `{${spinGlass_rotations}}`} speed=${typeof spinGlass_speed === \\"string\\" ? `\\"${spinGlass_speed}\\"` : `{${spinGlass_speed}}`} reverse=${typeof spinGlass_reverse === \\"string\\" ? `\\"${spinGlass_reverse}\\"` : `{${spinGlass_reverse}}`} /> `} title=\\"Spin Glass\\" icon=\\"ph:hourglass-fill\\">',
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
  let hst_checkbox;
  let updating_value_2;
  let current;
  function hst_slider0_value_binding_5(value) {
    ctx[105](value);
  }
  let hst_slider0_props = { title: "Rotations", min: 1, max: 10 };
  if (
    /*spinGlass_rotations*/
    ctx[21] !== void 0
  ) {
    hst_slider0_props.value = /*spinGlass_rotations*/
    ctx[21];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_5));
  function hst_slider1_value_binding_5(value) {
    ctx[106](value);
  }
  let hst_slider1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spinGlass_speed*/
    ctx[20] !== void 0
  ) {
    hst_slider1_props.value = /*spinGlass_speed*/
    ctx[20];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_5));
  function hst_checkbox_value_binding_3(value) {
    ctx[107](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*spinGlass_reverse*/
    ctx[22] !== void 0
  ) {
    hst_checkbox_props.value = /*spinGlass_reverse*/
    ctx[22];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_3));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*spinGlass_rotations*/
      2097152) {
        updating_value = true;
        hst_slider0_changes.value = /*spinGlass_rotations*/
        ctx2[21];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*spinGlass_speed*/
      1048576) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*spinGlass_speed*/
        ctx2[20];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_2 && dirty[0] & /*spinGlass_reverse*/
      4194304) {
        updating_value_2 = true;
        hst_checkbox_changes.value = /*spinGlass_reverse*/
        ctx2[22];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_8.name,
    type: "slot",
    source: '(229:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_8(ctx) {
  let loading_spincircles;
  let updating_speed;
  let updating_count;
  let updating_merge;
  let updating_r;
  let updating_r2;
  let updating_reverse;
  let current;
  function loading_spincircles_speed_binding(value) {
    ctx[117](value);
  }
  function loading_spincircles_count_binding(value) {
    ctx[118](value);
  }
  function loading_spincircles_merge_binding(value) {
    ctx[119](value);
  }
  function loading_spincircles_r_binding(value) {
    ctx[120](value);
  }
  function loading_spincircles_r2_binding(value) {
    ctx[121](value);
  }
  function loading_spincircles_reverse_binding(value) {
    ctx[122](value);
  }
  let loading_spincircles_props = {};
  if (
    /*spinCircles_speed*/
    ctx[18] !== void 0
  ) {
    loading_spincircles_props.speed = /*spinCircles_speed*/
    ctx[18];
  }
  if (
    /*spinCircles_count*/
    ctx[14] !== void 0
  ) {
    loading_spincircles_props.count = /*spinCircles_count*/
    ctx[14];
  }
  if (
    /*spinCircles_merge*/
    ctx[15] !== void 0
  ) {
    loading_spincircles_props.merge = /*spinCircles_merge*/
    ctx[15];
  }
  if (
    /*spinCircles_r*/
    ctx[16] !== void 0
  ) {
    loading_spincircles_props.r = /*spinCircles_r*/
    ctx[16];
  }
  if (
    /*spinCircles_r2*/
    ctx[17] !== void 0
  ) {
    loading_spincircles_props.r2 = /*spinCircles_r2*/
    ctx[17];
  }
  if (
    /*spinCircles_reverse*/
    ctx[19] !== void 0
  ) {
    loading_spincircles_props.reverse = /*spinCircles_reverse*/
    ctx[19];
  }
  loading_spincircles = new SpinCircles({
    props: loading_spincircles_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_spincircles, "speed", loading_spincircles_speed_binding));
  binding_callbacks.push(() => bind(loading_spincircles, "count", loading_spincircles_count_binding));
  binding_callbacks.push(() => bind(loading_spincircles, "merge", loading_spincircles_merge_binding));
  binding_callbacks.push(() => bind(loading_spincircles, "r", loading_spincircles_r_binding));
  binding_callbacks.push(() => bind(loading_spincircles, "r2", loading_spincircles_r2_binding));
  binding_callbacks.push(() => bind(loading_spincircles, "reverse", loading_spincircles_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_spincircles.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_spincircles, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_spincircles_changes = {};
      if (!updating_speed && dirty[0] & /*spinCircles_speed*/
      262144) {
        updating_speed = true;
        loading_spincircles_changes.speed = /*spinCircles_speed*/
        ctx2[18];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[0] & /*spinCircles_count*/
      16384) {
        updating_count = true;
        loading_spincircles_changes.count = /*spinCircles_count*/
        ctx2[14];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_merge && dirty[0] & /*spinCircles_merge*/
      32768) {
        updating_merge = true;
        loading_spincircles_changes.merge = /*spinCircles_merge*/
        ctx2[15];
        add_flush_callback(() => updating_merge = false);
      }
      if (!updating_r && dirty[0] & /*spinCircles_r*/
      65536) {
        updating_r = true;
        loading_spincircles_changes.r = /*spinCircles_r*/
        ctx2[16];
        add_flush_callback(() => updating_r = false);
      }
      if (!updating_r2 && dirty[0] & /*spinCircles_r2*/
      131072) {
        updating_r2 = true;
        loading_spincircles_changes.r2 = /*spinCircles_r2*/
        ctx2[17];
        add_flush_callback(() => updating_r2 = false);
      }
      if (!updating_reverse && dirty[0] & /*spinCircles_reverse*/
      524288) {
        updating_reverse = true;
        loading_spincircles_changes.reverse = /*spinCircles_reverse*/
        ctx2[19];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_spincircles.$set(loading_spincircles_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_spincircles.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_spincircles.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_spincircles, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_8.name,
    type: "slot",
    source: '(236:1) <Hst.Variant source={` <Loading.SpinCircles speed=${typeof spinCircles_speed === \\"string\\" ? `\\"${spinCircles_speed}\\"` : `{${spinCircles_speed}}`} count=${typeof spinCircles_count === \\"string\\" ? `\\"${spinCircles_count}\\"` : `{${spinCircles_count}}`} merge=${typeof spinCircles_merge === \\"string\\" ? `\\"${spinCircles_merge}\\"` : `{${spinCircles_merge}}`} r=${typeof spinCircles_r === \\"string\\" ? `\\"${spinCircles_r}\\"` : `{${spinCircles_r}}`} r2=${typeof spinCircles_r2 === \\"string\\" ? `\\"${spinCircles_r2}\\"` : `{${spinCircles_r2}}`} reverse=${typeof spinCircles_reverse === \\"string\\" ? `\\"${spinCircles_reverse}\\"` : `{${spinCircles_reverse}}`} /> `} title=\\"Spin Circles\\" icon=\\"ic:baseline-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot_7(ctx) {
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
  let hst_slider4;
  let updating_value_4;
  let t4;
  let hst_checkbox;
  let updating_value_5;
  let current;
  function hst_slider0_value_binding_6(value) {
    ctx[111](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 15 };
  if (
    /*spinCircles_count*/
    ctx[14] !== void 0
  ) {
    hst_slider0_props.value = /*spinCircles_count*/
    ctx[14];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_6));
  function hst_slider1_value_binding_6(value) {
    ctx[112](value);
  }
  let hst_slider1_props = { title: "Radius from", min: 1, max: 20 };
  if (
    /*spinCircles_r*/
    ctx[16] !== void 0
  ) {
    hst_slider1_props.value = /*spinCircles_r*/
    ctx[16];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_6));
  function hst_slider2_value_binding_4(value) {
    ctx[113](value);
  }
  let hst_slider2_props = { title: "Radius to", min: 1, max: 20 };
  if (
    /*spinCircles_r2*/
    ctx[17] !== void 0
  ) {
    hst_slider2_props.value = /*spinCircles_r2*/
    ctx[17];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_4));
  function hst_slider3_value_binding_2(value) {
    ctx[114](value);
  }
  let hst_slider3_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spinCircles_speed*/
    ctx[18] !== void 0
  ) {
    hst_slider3_props.value = /*spinCircles_speed*/
    ctx[18];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding_2));
  function hst_slider4_value_binding_1(value) {
    ctx[115](value);
  }
  let hst_slider4_props = {
    title: "Merge Factor",
    min: 0,
    max: 1,
    step: 0.1
  };
  if (
    /*spinCircles_merge*/
    ctx[15] !== void 0
  ) {
    hst_slider4_props.value = /*spinCircles_merge*/
    ctx[15];
  }
  hst_slider4 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider4_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider4, "value", hst_slider4_value_binding_1));
  function hst_checkbox_value_binding_4(value) {
    ctx[116](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*spinCircles_reverse*/
    ctx[19] !== void 0
  ) {
    hst_checkbox_props.value = /*spinCircles_reverse*/
    ctx[19];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_4));
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
      create_component(hst_slider4.$$.fragment);
      t4 = space();
      create_component(hst_checkbox.$$.fragment);
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
      mount_component(hst_slider4, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*spinCircles_count*/
      16384) {
        updating_value = true;
        hst_slider0_changes.value = /*spinCircles_count*/
        ctx2[14];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*spinCircles_r*/
      65536) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*spinCircles_r*/
        ctx2[16];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[0] & /*spinCircles_r2*/
      131072) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*spinCircles_r2*/
        ctx2[17];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty[0] & /*spinCircles_speed*/
      262144) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*spinCircles_speed*/
        ctx2[18];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider3.$set(hst_slider3_changes);
      const hst_slider4_changes = {};
      if (!updating_value_4 && dirty[0] & /*spinCircles_merge*/
      32768) {
        updating_value_4 = true;
        hst_slider4_changes.value = /*spinCircles_merge*/
        ctx2[15];
        add_flush_callback(() => updating_value_4 = false);
      }
      hst_slider4.$set(hst_slider4_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_5 && dirty[0] & /*spinCircles_reverse*/
      524288) {
        updating_value_5 = true;
        hst_checkbox_changes.value = /*spinCircles_reverse*/
        ctx2[19];
        add_flush_callback(() => updating_value_5 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_slider3.$$.fragment, local);
      transition_in(hst_slider4.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_slider3.$$.fragment, local);
      transition_out(hst_slider4.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
        detach_dev(t4);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_slider3, detaching);
      destroy_component(hst_slider4, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_7.name,
    type: "slot",
    source: '(254:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_7(ctx) {
  let loading_oscillate;
  let updating_speed;
  let updating_count;
  let updating_width;
  let updating_bar_width;
  let current;
  function loading_oscillate_speed_binding(value) {
    ctx[127](value);
  }
  function loading_oscillate_count_binding(value) {
    ctx[128](value);
  }
  function loading_oscillate_width_binding(value) {
    ctx[129](value);
  }
  function loading_oscillate_bar_width_binding(value) {
    ctx[130](value);
  }
  let loading_oscillate_props = {};
  if (
    /*oscillate_speed*/
    ctx[10] !== void 0
  ) {
    loading_oscillate_props.speed = /*oscillate_speed*/
    ctx[10];
  }
  if (
    /*oscillate_count*/
    ctx[11] !== void 0
  ) {
    loading_oscillate_props.count = /*oscillate_count*/
    ctx[11];
  }
  if (
    /*oscillate_width*/
    ctx[12] !== void 0
  ) {
    loading_oscillate_props.width = /*oscillate_width*/
    ctx[12];
  }
  if (
    /*oscillate_bar_width*/
    ctx[13] !== void 0
  ) {
    loading_oscillate_props.bar_width = /*oscillate_bar_width*/
    ctx[13];
  }
  loading_oscillate = new Oscillate({
    props: loading_oscillate_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_oscillate, "speed", loading_oscillate_speed_binding));
  binding_callbacks.push(() => bind(loading_oscillate, "count", loading_oscillate_count_binding));
  binding_callbacks.push(() => bind(loading_oscillate, "width", loading_oscillate_width_binding));
  binding_callbacks.push(() => bind(loading_oscillate, "bar_width", loading_oscillate_bar_width_binding));
  const block = {
    c: function create() {
      create_component(loading_oscillate.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_oscillate, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_oscillate_changes = {};
      if (!updating_speed && dirty[0] & /*oscillate_speed*/
      1024) {
        updating_speed = true;
        loading_oscillate_changes.speed = /*oscillate_speed*/
        ctx2[10];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_count && dirty[0] & /*oscillate_count*/
      2048) {
        updating_count = true;
        loading_oscillate_changes.count = /*oscillate_count*/
        ctx2[11];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_width && dirty[0] & /*oscillate_width*/
      4096) {
        updating_width = true;
        loading_oscillate_changes.width = /*oscillate_width*/
        ctx2[12];
        add_flush_callback(() => updating_width = false);
      }
      if (!updating_bar_width && dirty[0] & /*oscillate_bar_width*/
      8192) {
        updating_bar_width = true;
        loading_oscillate_changes.bar_width = /*oscillate_bar_width*/
        ctx2[13];
        add_flush_callback(() => updating_bar_width = false);
      }
      loading_oscillate.$set(loading_oscillate_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_oscillate.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_oscillate.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_oscillate, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7.name,
    type: "slot",
    source: '(276:1) <Hst.Variant source={` <Loading.Oscillate speed=${typeof oscillate_speed === \\"string\\" ? `\\"${oscillate_speed}\\"` : `{${oscillate_speed}}`} count=${typeof oscillate_count === \\"string\\" ? `\\"${oscillate_count}\\"` : `{${oscillate_count}}`} width=${typeof oscillate_width === \\"string\\" ? `\\"${oscillate_width}\\"` : `{${oscillate_width}}`} bar_width=${typeof oscillate_bar_width === \\"string\\" ? `\\"${oscillate_bar_width}\\"` : `{${oscillate_bar_width}}`} /> `} title=\\"Oscillate\\" icon=\\"cil:audio-spectrum\\">',
    ctx
  });
  return block;
}
function create_controls_slot_6(ctx) {
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
  let current;
  function hst_slider0_value_binding_7(value) {
    ctx[123](value);
  }
  let hst_slider0_props = { title: "Count", min: 1, max: 21, step: 2 };
  if (
    /*oscillate_count*/
    ctx[11] !== void 0
  ) {
    hst_slider0_props.value = /*oscillate_count*/
    ctx[11];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_7));
  function hst_slider1_value_binding_7(value) {
    ctx[124](value);
  }
  let hst_slider1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*oscillate_speed*/
    ctx[10] !== void 0
  ) {
    hst_slider1_props.value = /*oscillate_speed*/
    ctx[10];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_7));
  function hst_slider2_value_binding_5(value) {
    ctx[125](value);
  }
  let hst_slider2_props = { title: "Width", min: 1, max: 100 };
  if (
    /*oscillate_width*/
    ctx[12] !== void 0
  ) {
    hst_slider2_props.value = /*oscillate_width*/
    ctx[12];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_5));
  function hst_slider3_value_binding_3(value) {
    ctx[126](value);
  }
  let hst_slider3_props = { title: "Bar Width", min: 2, max: 12 };
  if (
    /*oscillate_bar_width*/
    ctx[13] !== void 0
  ) {
    hst_slider3_props.value = /*oscillate_bar_width*/
    ctx[13];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding_3));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
      t2 = space();
      create_component(hst_slider3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_slider3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*oscillate_count*/
      2048) {
        updating_value = true;
        hst_slider0_changes.value = /*oscillate_count*/
        ctx2[11];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*oscillate_speed*/
      1024) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*oscillate_speed*/
        ctx2[10];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[0] & /*oscillate_width*/
      4096) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*oscillate_width*/
        ctx2[12];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty[0] & /*oscillate_bar_width*/
      8192) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*oscillate_bar_width*/
        ctx2[13];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_slider3.$set(hst_slider3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_slider3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_slider3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_slider3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_6.name,
    type: "slot",
    source: '(290:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_6(ctx) {
  let loading_slide;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_slide_speed_binding(value) {
    ctx[133](value);
  }
  function loading_slide_reverse_binding(value) {
    ctx[134](value);
  }
  let loading_slide_props = {};
  if (
    /*slide_speed*/
    ctx[8] !== void 0
  ) {
    loading_slide_props.speed = /*slide_speed*/
    ctx[8];
  }
  if (
    /*slide_reverse*/
    ctx[9] !== void 0
  ) {
    loading_slide_props.reverse = /*slide_reverse*/
    ctx[9];
  }
  loading_slide = new Slide({
    props: loading_slide_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_slide, "speed", loading_slide_speed_binding));
  binding_callbacks.push(() => bind(loading_slide, "reverse", loading_slide_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_slide.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_slide, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_slide_changes = {};
      if (!updating_speed && dirty[0] & /*slide_speed*/
      256) {
        updating_speed = true;
        loading_slide_changes.speed = /*slide_speed*/
        ctx2[8];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*slide_reverse*/
      512) {
        updating_reverse = true;
        loading_slide_changes.reverse = /*slide_reverse*/
        ctx2[9];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_slide.$set(loading_slide_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_slide.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_slide.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_slide, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6.name,
    type: "slot",
    source: '(298:1) <Hst.Variant source={` <Loading.Slide speed=${typeof slide_speed === \\"string\\" ? `\\"${slide_speed}\\"` : `{${slide_speed}}`} reverse=${typeof slide_reverse === \\"string\\" ? `\\"${slide_reverse}\\"` : `{${slide_reverse}}`} /> `} title=\\"Slide\\" icon=\\"teenyicons:layers-subtract-outline\\">',
    ctx
  });
  return block;
}
function create_controls_slot_5(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_5(value) {
    ctx[131](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*slide_speed*/
    ctx[8] !== void 0
  ) {
    hst_slider_props.value = /*slide_speed*/
    ctx[8];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_5));
  function hst_checkbox_value_binding_5(value) {
    ctx[132](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*slide_reverse*/
    ctx[9] !== void 0
  ) {
    hst_checkbox_props.value = /*slide_reverse*/
    ctx[9];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_5));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*slide_speed*/
      256) {
        updating_value = true;
        hst_slider_changes.value = /*slide_speed*/
        ctx2[8];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*slide_reverse*/
      512) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*slide_reverse*/
        ctx2[9];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_5.name,
    type: "slot",
    source: '(302:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let loading_grow;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_grow_speed_binding(value) {
    ctx[137](value);
  }
  function loading_grow_reverse_binding(value) {
    ctx[138](value);
  }
  let loading_grow_props = {};
  if (
    /*grow_speed*/
    ctx[6] !== void 0
  ) {
    loading_grow_props.speed = /*grow_speed*/
    ctx[6];
  }
  if (
    /*grow_reverse*/
    ctx[7] !== void 0
  ) {
    loading_grow_props.reverse = /*grow_reverse*/
    ctx[7];
  }
  loading_grow = new Grow({
    props: loading_grow_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_grow, "speed", loading_grow_speed_binding));
  binding_callbacks.push(() => bind(loading_grow, "reverse", loading_grow_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_grow.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_grow, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_grow_changes = {};
      if (!updating_speed && dirty[0] & /*grow_speed*/
      64) {
        updating_speed = true;
        loading_grow_changes.speed = /*grow_speed*/
        ctx2[6];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*grow_reverse*/
      128) {
        updating_reverse = true;
        loading_grow_changes.reverse = /*grow_reverse*/
        ctx2[7];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_grow.$set(loading_grow_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_grow.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_grow.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_grow, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5.name,
    type: "slot",
    source: '(308:1) <Hst.Variant source={` <Loading.Grow speed=${typeof grow_speed === \\"string\\" ? `\\"${grow_speed}\\"` : `{${grow_speed}}`} reverse=${typeof grow_reverse === \\"string\\" ? `\\"${grow_reverse}\\"` : `{${grow_reverse}}`} /> `} title=\\"Grow\\" icon=\\"gg:extension\\">',
    ctx
  });
  return block;
}
function create_controls_slot_4(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_6(value) {
    ctx[135](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*grow_speed*/
    ctx[6] !== void 0
  ) {
    hst_slider_props.value = /*grow_speed*/
    ctx[6];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_6));
  function hst_checkbox_value_binding_6(value) {
    ctx[136](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*grow_reverse*/
    ctx[7] !== void 0
  ) {
    hst_checkbox_props.value = /*grow_reverse*/
    ctx[7];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_6));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*grow_speed*/
      64) {
        updating_value = true;
        hst_slider_changes.value = /*grow_speed*/
        ctx2[6];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*grow_reverse*/
      128) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*grow_reverse*/
        ctx2[7];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_4.name,
    type: "slot",
    source: '(312:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_4(ctx) {
  let loading_shrink;
  let updating_speed;
  let updating_reverse;
  let current;
  function loading_shrink_speed_binding(value) {
    ctx[141](value);
  }
  function loading_shrink_reverse_binding(value) {
    ctx[142](value);
  }
  let loading_shrink_props = {};
  if (
    /*shrink_speed*/
    ctx[4] !== void 0
  ) {
    loading_shrink_props.speed = /*shrink_speed*/
    ctx[4];
  }
  if (
    /*shrink_reverse*/
    ctx[5] !== void 0
  ) {
    loading_shrink_props.reverse = /*shrink_reverse*/
    ctx[5];
  }
  loading_shrink = new Shrink({
    props: loading_shrink_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_shrink, "speed", loading_shrink_speed_binding));
  binding_callbacks.push(() => bind(loading_shrink, "reverse", loading_shrink_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_shrink.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_shrink, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_shrink_changes = {};
      if (!updating_speed && dirty[0] & /*shrink_speed*/
      16) {
        updating_speed = true;
        loading_shrink_changes.speed = /*shrink_speed*/
        ctx2[4];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[0] & /*shrink_reverse*/
      32) {
        updating_reverse = true;
        loading_shrink_changes.reverse = /*shrink_reverse*/
        ctx2[5];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_shrink.$set(loading_shrink_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_shrink.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_shrink.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_shrink, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: '(318:1) <Hst.Variant source={` <Loading.Shrink speed=${typeof shrink_speed === \\"string\\" ? `\\"${shrink_speed}\\"` : `{${shrink_speed}}`} reverse=${typeof shrink_reverse === \\"string\\" ? `\\"${shrink_reverse}\\"` : `{${shrink_reverse}}`} /> `} title=\\"Shrink\\" icon=\\"gg:extension\\">',
    ctx
  });
  return block;
}
function create_controls_slot_3(ctx) {
  let hst_slider;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_slider_value_binding_7(value) {
    ctx[139](value);
  }
  let hst_slider_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*shrink_speed*/
    ctx[4] !== void 0
  ) {
    hst_slider_props.value = /*shrink_speed*/
    ctx[4];
  }
  hst_slider = new /*Hst*/
  ctx[0].Slider({ props: hst_slider_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider, "value", hst_slider_value_binding_7));
  function hst_checkbox_value_binding_7(value) {
    ctx[140](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*shrink_reverse*/
    ctx[5] !== void 0
  ) {
    hst_checkbox_props.value = /*shrink_reverse*/
    ctx[5];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_7));
  const block = {
    c: function create() {
      create_component(hst_slider.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider_changes = {};
      if (!updating_value && dirty[0] & /*shrink_speed*/
      16) {
        updating_value = true;
        hst_slider_changes.value = /*shrink_speed*/
        ctx2[4];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider.$set(hst_slider_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty[0] & /*shrink_reverse*/
      32) {
        updating_value_1 = true;
        hst_checkbox_changes.value = /*shrink_reverse*/
        ctx2[5];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_3.name,
    type: "slot",
    source: '(322:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let loading_spin;
  let updating_scale;
  let updating_speed;
  let updating_border_width;
  let current;
  function loading_spin_scale_binding(value) {
    ctx[146](value);
  }
  function loading_spin_speed_binding(value) {
    ctx[147](value);
  }
  function loading_spin_border_width_binding(value) {
    ctx[148](value);
  }
  let loading_spin_props = {};
  if (
    /*spin_scale*/
    ctx[2] !== void 0
  ) {
    loading_spin_props.scale = /*spin_scale*/
    ctx[2];
  }
  if (
    /*spin_speed*/
    ctx[1] !== void 0
  ) {
    loading_spin_props.speed = /*spin_speed*/
    ctx[1];
  }
  if (
    /*spin_border_width*/
    ctx[3] !== void 0
  ) {
    loading_spin_props.border_width = /*spin_border_width*/
    ctx[3];
  }
  loading_spin = new Spin2({
    props: loading_spin_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_spin, "scale", loading_spin_scale_binding));
  binding_callbacks.push(() => bind(loading_spin, "speed", loading_spin_speed_binding));
  binding_callbacks.push(() => bind(loading_spin, "border_width", loading_spin_border_width_binding));
  const block = {
    c: function create() {
      create_component(loading_spin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_spin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_spin_changes = {};
      if (!updating_scale && dirty[0] & /*spin_scale*/
      4) {
        updating_scale = true;
        loading_spin_changes.scale = /*spin_scale*/
        ctx2[2];
        add_flush_callback(() => updating_scale = false);
      }
      if (!updating_speed && dirty[0] & /*spin_speed*/
      2) {
        updating_speed = true;
        loading_spin_changes.speed = /*spin_speed*/
        ctx2[1];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_border_width && dirty[0] & /*spin_border_width*/
      8) {
        updating_border_width = true;
        loading_spin_changes.border_width = /*spin_border_width*/
        ctx2[3];
        add_flush_callback(() => updating_border_width = false);
      }
      loading_spin.$set(loading_spin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_spin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_spin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_spin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(328:1) <Hst.Variant source={` <Loading.Spin scale=${typeof spin_scale === \\"string\\" ? `\\"${spin_scale}\\"` : `{${spin_scale}}`} speed=${typeof spin_speed === \\"string\\" ? `\\"${spin_speed}\\"` : `{${spin_speed}}`} border_width=${typeof spin_border_width === \\"string\\" ? `\\"${spin_border_width}\\"` : `{${spin_border_width}}`} /> `} title=\\"Spin\\" icon=\\"mdi:square-circle\\">',
    ctx
  });
  return block;
}
function create_controls_slot_2(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_slider2;
  let updating_value_2;
  let current;
  function hst_slider0_value_binding_8(value) {
    ctx[143](value);
  }
  let hst_slider0_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*spin_speed*/
    ctx[1] !== void 0
  ) {
    hst_slider0_props.value = /*spin_speed*/
    ctx[1];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_8));
  function hst_slider1_value_binding_8(value) {
    ctx[144](value);
  }
  let hst_slider1_props = {
    title: "Scale",
    min: 0.1,
    max: 1,
    step: 0.1
  };
  if (
    /*spin_scale*/
    ctx[2] !== void 0
  ) {
    hst_slider1_props.value = /*spin_scale*/
    ctx[2];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_8));
  function hst_slider2_value_binding_6(value) {
    ctx[145](value);
  }
  let hst_slider2_props = { title: "Border Width", min: 0, max: 10 };
  if (
    /*spin_border_width*/
    ctx[3] !== void 0
  ) {
    hst_slider2_props.value = /*spin_border_width*/
    ctx[3];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_6));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[0] & /*spin_speed*/
      2) {
        updating_value = true;
        hst_slider0_changes.value = /*spin_speed*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[0] & /*spin_scale*/
      4) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*spin_scale*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[0] & /*spin_border_width*/
      8) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*spin_border_width*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_2.name,
    type: "slot",
    source: '(340:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let loading_dotspin;
  let updating_count;
  let updating_speed;
  let updating_reverse;
  let updating_r;
  let current;
  function loading_dotspin_count_binding(value) {
    ctx[153](value);
  }
  function loading_dotspin_speed_binding(value) {
    ctx[154](value);
  }
  function loading_dotspin_reverse_binding(value) {
    ctx[155](value);
  }
  function loading_dotspin_r_binding(value) {
    ctx[156](value);
  }
  let loading_dotspin_props = {};
  if (
    /*dotSpin_count*/
    ctx[51] !== void 0
  ) {
    loading_dotspin_props.count = /*dotSpin_count*/
    ctx[51];
  }
  if (
    /*dotSpin_speed*/
    ctx[52] !== void 0
  ) {
    loading_dotspin_props.speed = /*dotSpin_speed*/
    ctx[52];
  }
  if (
    /*dotSpin_reverse*/
    ctx[53] !== void 0
  ) {
    loading_dotspin_props.reverse = /*dotSpin_reverse*/
    ctx[53];
  }
  if (
    /*dotSpin_r*/
    ctx[54] !== void 0
  ) {
    loading_dotspin_props.r = /*dotSpin_r*/
    ctx[54];
  }
  loading_dotspin = new DotSpin({
    props: loading_dotspin_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_dotspin, "count", loading_dotspin_count_binding));
  binding_callbacks.push(() => bind(loading_dotspin, "speed", loading_dotspin_speed_binding));
  binding_callbacks.push(() => bind(loading_dotspin, "reverse", loading_dotspin_reverse_binding));
  binding_callbacks.push(() => bind(loading_dotspin, "r", loading_dotspin_r_binding));
  const block = {
    c: function create() {
      create_component(loading_dotspin.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_dotspin, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_dotspin_changes = {};
      if (!updating_count && dirty[1] & /*dotSpin_count*/
      1048576) {
        updating_count = true;
        loading_dotspin_changes.count = /*dotSpin_count*/
        ctx2[51];
        add_flush_callback(() => updating_count = false);
      }
      if (!updating_speed && dirty[1] & /*dotSpin_speed*/
      2097152) {
        updating_speed = true;
        loading_dotspin_changes.speed = /*dotSpin_speed*/
        ctx2[52];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_reverse && dirty[1] & /*dotSpin_reverse*/
      4194304) {
        updating_reverse = true;
        loading_dotspin_changes.reverse = /*dotSpin_reverse*/
        ctx2[53];
        add_flush_callback(() => updating_reverse = false);
      }
      if (!updating_r && dirty[1] & /*dotSpin_r*/
      8388608) {
        updating_r = true;
        loading_dotspin_changes.r = /*dotSpin_r*/
        ctx2[54];
        add_flush_callback(() => updating_r = false);
      }
      loading_dotspin.$set(loading_dotspin_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_dotspin.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_dotspin.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_dotspin, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: '(347:1) <Hst.Variant source={` <Loading.DotSpin count=${typeof dotSpin_count === \\"string\\" ? `\\"${dotSpin_count}\\"` : `{${dotSpin_count}}`} speed=${typeof dotSpin_speed === \\"string\\" ? `\\"${dotSpin_speed}\\"` : `{${dotSpin_speed}}`} reverse=${typeof dotSpin_reverse === \\"string\\" ? `\\"${dotSpin_reverse}\\"` : `{${dotSpin_reverse}}`} r=${typeof dotSpin_r === \\"string\\" ? `\\"${dotSpin_r}\\"` : `{${dotSpin_r}}`} /> `} title=\\"Dot Spin\\" icon=\\"ion:more\\">',
    ctx
  });
  return block;
}
function create_controls_slot_1(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_slider2;
  let updating_value_2;
  let t2;
  let hst_checkbox;
  let updating_value_3;
  let current;
  function hst_slider0_value_binding_9(value) {
    ctx[149](value);
  }
  let hst_slider0_props = { title: "Count", min: 2, max: 12, step: 2 };
  if (
    /*dotSpin_count*/
    ctx[51] !== void 0
  ) {
    hst_slider0_props.value = /*dotSpin_count*/
    ctx[51];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_9));
  function hst_slider1_value_binding_9(value) {
    ctx[150](value);
  }
  let hst_slider1_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dotSpin_speed*/
    ctx[52] !== void 0
  ) {
    hst_slider1_props.value = /*dotSpin_speed*/
    ctx[52];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_9));
  function hst_slider2_value_binding_7(value) {
    ctx[151](value);
  }
  let hst_slider2_props = {
    title: "Radius",
    min: 1,
    max: 20,
    step: 0.5
  };
  if (
    /*dotSpin_r*/
    ctx[54] !== void 0
  ) {
    hst_slider2_props.value = /*dotSpin_r*/
    ctx[54];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding_7));
  function hst_checkbox_value_binding_8(value) {
    ctx[152](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*dotSpin_reverse*/
    ctx[53] !== void 0
  ) {
    hst_checkbox_props.value = /*dotSpin_reverse*/
    ctx[53];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_8));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_slider2.$$.fragment);
      t2 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_slider2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[1] & /*dotSpin_count*/
      1048576) {
        updating_value = true;
        hst_slider0_changes.value = /*dotSpin_count*/
        ctx2[51];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*dotSpin_speed*/
      2097152) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*dotSpin_speed*/
        ctx2[52];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty[1] & /*dotSpin_r*/
      8388608) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*dotSpin_r*/
        ctx2[54];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_3 && dirty[1] & /*dotSpin_reverse*/
      4194304) {
        updating_value_3 = true;
        hst_checkbox_changes.value = /*dotSpin_reverse*/
        ctx2[53];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_slider2.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_slider2.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_slider2, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1.name,
    type: "slot",
    source: '(361:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let loading_dotslide;
  let updating_speed;
  let updating_r;
  let updating_reverse;
  let current;
  function loading_dotslide_speed_binding(value) {
    ctx[160](value);
  }
  function loading_dotslide_r_binding(value) {
    ctx[161](value);
  }
  function loading_dotslide_reverse_binding(value) {
    ctx[162](value);
  }
  let loading_dotslide_props = {};
  if (
    /*dotSlide_speed*/
    ctx[48] !== void 0
  ) {
    loading_dotslide_props.speed = /*dotSlide_speed*/
    ctx[48];
  }
  if (
    /*dotSlide_r*/
    ctx[49] !== void 0
  ) {
    loading_dotslide_props.r = /*dotSlide_r*/
    ctx[49];
  }
  if (
    /*dotSlide_reverse*/
    ctx[50] !== void 0
  ) {
    loading_dotslide_props.reverse = /*dotSlide_reverse*/
    ctx[50];
  }
  loading_dotslide = new DotSlide({
    props: loading_dotslide_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(loading_dotslide, "speed", loading_dotslide_speed_binding));
  binding_callbacks.push(() => bind(loading_dotslide, "r", loading_dotslide_r_binding));
  binding_callbacks.push(() => bind(loading_dotslide, "reverse", loading_dotslide_reverse_binding));
  const block = {
    c: function create() {
      create_component(loading_dotslide.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(loading_dotslide, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const loading_dotslide_changes = {};
      if (!updating_speed && dirty[1] & /*dotSlide_speed*/
      131072) {
        updating_speed = true;
        loading_dotslide_changes.speed = /*dotSlide_speed*/
        ctx2[48];
        add_flush_callback(() => updating_speed = false);
      }
      if (!updating_r && dirty[1] & /*dotSlide_r*/
      262144) {
        updating_r = true;
        loading_dotslide_changes.r = /*dotSlide_r*/
        ctx2[49];
        add_flush_callback(() => updating_r = false);
      }
      if (!updating_reverse && dirty[1] & /*dotSlide_reverse*/
      524288) {
        updating_reverse = true;
        loading_dotslide_changes.reverse = /*dotSlide_reverse*/
        ctx2[50];
        add_flush_callback(() => updating_reverse = false);
      }
      loading_dotslide.$set(loading_dotslide_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(loading_dotslide.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading_dotslide.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading_dotslide, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(369:1) <Hst.Variant source={` <Loading.DotSlide speed=${typeof dotSlide_speed === \\"string\\" ? `\\"${dotSlide_speed}\\"` : `{${dotSlide_speed}}`} r=${typeof dotSlide_r === \\"string\\" ? `\\"${dotSlide_r}\\"` : `{${dotSlide_r}}`} reverse=${typeof dotSlide_reverse === \\"string\\" ? `\\"${dotSlide_reverse}\\"` : `{${dotSlide_reverse}}`} /> `} title=\\"Dot Slide\\" icon=\\"ion:more\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_slider0;
  let updating_value;
  let t0;
  let hst_slider1;
  let updating_value_1;
  let t1;
  let hst_checkbox;
  let updating_value_2;
  let current;
  function hst_slider0_value_binding_10(value) {
    ctx[157](value);
  }
  let hst_slider0_props = {
    title: "Speed",
    min: 0.1,
    max: 10,
    step: 0.1
  };
  if (
    /*dotSlide_speed*/
    ctx[48] !== void 0
  ) {
    hst_slider0_props.value = /*dotSlide_speed*/
    ctx[48];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding_10));
  function hst_slider1_value_binding_10(value) {
    ctx[158](value);
  }
  let hst_slider1_props = {
    title: "Radius",
    min: 1,
    max: 20,
    step: 0.5
  };
  if (
    /*dotSlide_r*/
    ctx[49] !== void 0
  ) {
    hst_slider1_props.value = /*dotSlide_r*/
    ctx[49];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding_10));
  function hst_checkbox_value_binding_9(value) {
    ctx[159](value);
  }
  let hst_checkbox_props = { title: "Reverse" };
  if (
    /*dotSlide_reverse*/
    ctx[50] !== void 0
  ) {
    hst_checkbox_props.value = /*dotSlide_reverse*/
    ctx[50];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_9));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t0 = space();
      create_component(hst_slider1.$$.fragment);
      t1 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_slider1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty[1] & /*dotSlide_speed*/
      131072) {
        updating_value = true;
        hst_slider0_changes.value = /*dotSlide_speed*/
        ctx2[48];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty[1] & /*dotSlide_r*/
      262144) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*dotSlide_r*/
        ctx2[49];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_2 && dirty[1] & /*dotSlide_reverse*/
      524288) {
        updating_value_2 = true;
        hst_checkbox_changes.value = /*dotSlide_reverse*/
        ctx2[50];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(381:2) <svelte:fragment slot=\\"controls\\">',
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
  let t11;
  let hst_variant12;
  let t12;
  let hst_variant13;
  let t13;
  let hst_variant14;
  let t14;
  let hst_variant15;
  let t15;
  let hst_variant16;
  let t16;
  let hst_variant17;
  let t17;
  let hst_variant18;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Pie
count=${typeof /*pie_count*/
      ctx[30] === "string" ? `"${/*pie_count*/
      ctx[30]}"` : `{${/*pie_count*/
      ctx[30]}}`}
speed=${typeof /*pie_speed*/
      ctx[31] === "string" ? `"${/*pie_speed*/
      ctx[31]}"` : `{${/*pie_speed*/
      ctx[31]}}`}
scale=${typeof /*pie_scale*/
      ctx[32] === "string" ? `"${/*pie_scale*/
      ctx[32]}"` : `{${/*pie_scale*/
      ctx[32]}}`}
reverse=${typeof /*pie_reverse*/
      ctx[33] === "string" ? `"${/*pie_reverse*/
      ctx[33]}"` : `{${/*pie_reverse*/
      ctx[33]}}`}
/>
`,
      title: "Pie",
      icon: "game-icons:swirled-shell",
      $$slots: {
        controls: [create_controls_slot_18],
        default: [create_default_slot_19]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.DNA
count=${typeof /*dna_count*/
      ctx[25] === "string" ? `"${/*dna_count*/
      ctx[25]}"` : `{${/*dna_count*/
      ctx[25]}}`}
r=${typeof /*dna_r*/
      ctx[26] === "string" ? `"${/*dna_r*/
      ctx[26]}"` : `{${/*dna_r*/
      ctx[26]}}`}
r2=${typeof /*dna_r2*/
      ctx[27] === "string" ? `"${/*dna_r2*/
      ctx[27]}"` : `{${/*dna_r2*/
      ctx[27]}}`}
height=${typeof /*dna_height*/
      ctx[28] === "string" ? `"${/*dna_height*/
      ctx[28]}"` : `{${/*dna_height*/
      ctx[28]}}`}
speed=${typeof /*dna_speed*/
      ctx[29] === "string" ? `"${/*dna_speed*/
      ctx[29]}"` : `{${/*dna_speed*/
      ctx[29]}}`}
/>
`,
      title: "DNA",
      icon: "tabler:dna",
      $$slots: {
        controls: [create_controls_slot_17],
        default: [create_default_slot_18]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.BlockShuffle
speed=${typeof /*blockShuffle_speed*/
      ctx[45] === "string" ? `"${/*blockShuffle_speed*/
      ctx[45]}"` : `{${/*blockShuffle_speed*/
      ctx[45]}}`}
count=${typeof /*blockShuffle_count*/
      ctx[46] === "string" ? `"${/*blockShuffle_count*/
      ctx[46]}"` : `{${/*blockShuffle_count*/
      ctx[46]}}`}
border_radius=${typeof /*blockShuffle_br*/
      ctx[47] === "string" ? `"${/*blockShuffle_br*/
      ctx[47]}"` : `{${/*blockShuffle_br*/
      ctx[47]}}`}
/>
`,
      title: "Block Shuffle",
      icon: "zondicons:view-tile",
      $$slots: {
        controls: [create_controls_slot_16],
        default: [create_default_slot_17]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.BlockWave speed=${typeof /*blockWave_speed*/
      ctx[43] === "string" ? `"${/*blockWave_speed*/
      ctx[43]}"` : `{${/*blockWave_speed*/
      ctx[43]}}`} count=${typeof /*blockWave_count*/
      ctx[44] === "string" ? `"${/*blockWave_count*/
      ctx[44]}"` : `{${/*blockWave_count*/
      ctx[44]}}`} />
`,
      title: "Block Wave",
      icon: "fe:tiled",
      $$slots: {
        controls: [create_controls_slot_15],
        default: [create_default_slot_16]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Clock speed=${typeof /*clock_speed*/
      ctx[42] === "string" ? `"${/*clock_speed*/
      ctx[42]}"` : `{${/*clock_speed*/
      ctx[42]}}`} />
`,
      title: "Clock",
      icon: "ic:baseline-access-time",
      $$slots: {
        controls: [create_controls_slot_14],
        default: [create_default_slot_15]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant5 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.RotateOne
speed=${typeof /*rotateOne_speed*/
      ctx[38] === "string" ? `"${/*rotateOne_speed*/
      ctx[38]}"` : `{${/*rotateOne_speed*/
      ctx[38]}}`}
count=${typeof /*rotateOne_count*/
      ctx[39] === "string" ? `"${/*rotateOne_count*/
      ctx[39]}"` : `{${/*rotateOne_count*/
      ctx[39]}}`}
width=${typeof /*rotateOne_width*/
      ctx[40] === "string" ? `"${/*rotateOne_width*/
      ctx[40]}"` : `{${/*rotateOne_width*/
      ctx[40]}}`}
length=${typeof /*rotateOne_length*/
      ctx[41] === "string" ? `"${/*rotateOne_length*/
      ctx[41]}"` : `{${/*rotateOne_length*/
      ctx[41]}}`}
/>
`,
      title: "Rotate 1",
      icon: "ph:circle-dashed-bold",
      $$slots: {
        controls: [create_controls_slot_13],
        default: [create_default_slot_14]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant6 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Hourglass speed=${typeof /*hourglass_speed*/
      ctx[37] === "string" ? `"${/*hourglass_speed*/
      ctx[37]}"` : `{${/*hourglass_speed*/
      ctx[37]}}`} />
`,
      title: "Hourglass",
      icon: "ic:round-hourglass-bottom",
      $$slots: {
        controls: [create_controls_slot_12],
        default: [create_default_slot_13]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant7 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.HeartOutline speed=${typeof /*heartOutline_speed*/
      ctx[35] === "string" ? `"${/*heartOutline_speed*/
      ctx[35]}"` : `{${/*heartOutline_speed*/
      ctx[35]}}`} reverse=${typeof /*heartOutline_reverse*/
      ctx[36] === "string" ? `"${/*heartOutline_reverse*/
      ctx[36]}"` : `{${/*heartOutline_reverse*/
      ctx[36]}}`} />
`,
      title: "Heart Outline",
      icon: "material-symbols:favorite",
      $$slots: {
        controls: [create_controls_slot_11],
        default: [create_default_slot_12]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant8 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Heart speed=${typeof /*heart_speed*/
      ctx[34] === "string" ? `"${/*heart_speed*/
      ctx[34]}"` : `{${/*heart_speed*/
      ctx[34]}}`} />
`,
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
  hst_variant9 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.DualBalls speed=${typeof /*dualBalls_speed*/
      ctx[23] === "string" ? `"${/*dualBalls_speed*/
      ctx[23]}"` : `{${/*dualBalls_speed*/
      ctx[23]}}`} reverse=${typeof /*dualBalls_reverse*/
      ctx[24] === "string" ? `"${/*dualBalls_reverse*/
      ctx[24]}"` : `{${/*dualBalls_reverse*/
      ctx[24]}}`} />
`,
      title: "DualBalls",
      icon: "ic:baseline-circle",
      $$slots: {
        controls: [create_controls_slot_9],
        default: [create_default_slot_10]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant10 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.SpinGlass
rotations=${typeof /*spinGlass_rotations*/
      ctx[21] === "string" ? `"${/*spinGlass_rotations*/
      ctx[21]}"` : `{${/*spinGlass_rotations*/
      ctx[21]}}`}
speed=${typeof /*spinGlass_speed*/
      ctx[20] === "string" ? `"${/*spinGlass_speed*/
      ctx[20]}"` : `{${/*spinGlass_speed*/
      ctx[20]}}`}
reverse=${typeof /*spinGlass_reverse*/
      ctx[22] === "string" ? `"${/*spinGlass_reverse*/
      ctx[22]}"` : `{${/*spinGlass_reverse*/
      ctx[22]}}`}
/>
`,
      title: "Spin Glass",
      icon: "ph:hourglass-fill",
      $$slots: {
        controls: [create_controls_slot_8],
        default: [create_default_slot_9]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant11 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.SpinCircles
speed=${typeof /*spinCircles_speed*/
      ctx[18] === "string" ? `"${/*spinCircles_speed*/
      ctx[18]}"` : `{${/*spinCircles_speed*/
      ctx[18]}}`}
count=${typeof /*spinCircles_count*/
      ctx[14] === "string" ? `"${/*spinCircles_count*/
      ctx[14]}"` : `{${/*spinCircles_count*/
      ctx[14]}}`}
merge=${typeof /*spinCircles_merge*/
      ctx[15] === "string" ? `"${/*spinCircles_merge*/
      ctx[15]}"` : `{${/*spinCircles_merge*/
      ctx[15]}}`}
r=${typeof /*spinCircles_r*/
      ctx[16] === "string" ? `"${/*spinCircles_r*/
      ctx[16]}"` : `{${/*spinCircles_r*/
      ctx[16]}}`}
r2=${typeof /*spinCircles_r2*/
      ctx[17] === "string" ? `"${/*spinCircles_r2*/
      ctx[17]}"` : `{${/*spinCircles_r2*/
      ctx[17]}}`}
reverse=${typeof /*spinCircles_reverse*/
      ctx[19] === "string" ? `"${/*spinCircles_reverse*/
      ctx[19]}"` : `{${/*spinCircles_reverse*/
      ctx[19]}}`}
/>
`,
      title: "Spin Circles",
      icon: "ic:baseline-circle",
      $$slots: {
        controls: [create_controls_slot_7],
        default: [create_default_slot_8]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant12 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Oscillate
speed=${typeof /*oscillate_speed*/
      ctx[10] === "string" ? `"${/*oscillate_speed*/
      ctx[10]}"` : `{${/*oscillate_speed*/
      ctx[10]}}`}
count=${typeof /*oscillate_count*/
      ctx[11] === "string" ? `"${/*oscillate_count*/
      ctx[11]}"` : `{${/*oscillate_count*/
      ctx[11]}}`}
width=${typeof /*oscillate_width*/
      ctx[12] === "string" ? `"${/*oscillate_width*/
      ctx[12]}"` : `{${/*oscillate_width*/
      ctx[12]}}`}
bar_width=${typeof /*oscillate_bar_width*/
      ctx[13] === "string" ? `"${/*oscillate_bar_width*/
      ctx[13]}"` : `{${/*oscillate_bar_width*/
      ctx[13]}}`}
/>
`,
      title: "Oscillate",
      icon: "cil:audio-spectrum",
      $$slots: {
        controls: [create_controls_slot_6],
        default: [create_default_slot_7]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant13 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Slide speed=${typeof /*slide_speed*/
      ctx[8] === "string" ? `"${/*slide_speed*/
      ctx[8]}"` : `{${/*slide_speed*/
      ctx[8]}}`} reverse=${typeof /*slide_reverse*/
      ctx[9] === "string" ? `"${/*slide_reverse*/
      ctx[9]}"` : `{${/*slide_reverse*/
      ctx[9]}}`} />
`,
      title: "Slide",
      icon: "teenyicons:layers-subtract-outline",
      $$slots: {
        controls: [create_controls_slot_5],
        default: [create_default_slot_6]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant14 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Grow speed=${typeof /*grow_speed*/
      ctx[6] === "string" ? `"${/*grow_speed*/
      ctx[6]}"` : `{${/*grow_speed*/
      ctx[6]}}`} reverse=${typeof /*grow_reverse*/
      ctx[7] === "string" ? `"${/*grow_reverse*/
      ctx[7]}"` : `{${/*grow_reverse*/
      ctx[7]}}`} />
`,
      title: "Grow",
      icon: "gg:extension",
      $$slots: {
        controls: [create_controls_slot_4],
        default: [create_default_slot_5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant15 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Shrink speed=${typeof /*shrink_speed*/
      ctx[4] === "string" ? `"${/*shrink_speed*/
      ctx[4]}"` : `{${/*shrink_speed*/
      ctx[4]}}`} reverse=${typeof /*shrink_reverse*/
      ctx[5] === "string" ? `"${/*shrink_reverse*/
      ctx[5]}"` : `{${/*shrink_reverse*/
      ctx[5]}}`} />
`,
      title: "Shrink",
      icon: "gg:extension",
      $$slots: {
        controls: [create_controls_slot_3],
        default: [create_default_slot_4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant16 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.Spin
scale=${typeof /*spin_scale*/
      ctx[2] === "string" ? `"${/*spin_scale*/
      ctx[2]}"` : `{${/*spin_scale*/
      ctx[2]}}`}
speed=${typeof /*spin_speed*/
      ctx[1] === "string" ? `"${/*spin_speed*/
      ctx[1]}"` : `{${/*spin_speed*/
      ctx[1]}}`}
border_width=${typeof /*spin_border_width*/
      ctx[3] === "string" ? `"${/*spin_border_width*/
      ctx[3]}"` : `{${/*spin_border_width*/
      ctx[3]}}`}
/>
`,
      title: "Spin",
      icon: "mdi:square-circle",
      $$slots: {
        controls: [create_controls_slot_2],
        default: [create_default_slot_3]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant17 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.DotSpin
count=${typeof /*dotSpin_count*/
      ctx[51] === "string" ? `"${/*dotSpin_count*/
      ctx[51]}"` : `{${/*dotSpin_count*/
      ctx[51]}}`}
speed=${typeof /*dotSpin_speed*/
      ctx[52] === "string" ? `"${/*dotSpin_speed*/
      ctx[52]}"` : `{${/*dotSpin_speed*/
      ctx[52]}}`}
reverse=${typeof /*dotSpin_reverse*/
      ctx[53] === "string" ? `"${/*dotSpin_reverse*/
      ctx[53]}"` : `{${/*dotSpin_reverse*/
      ctx[53]}}`}
r=${typeof /*dotSpin_r*/
      ctx[54] === "string" ? `"${/*dotSpin_r*/
      ctx[54]}"` : `{${/*dotSpin_r*/
      ctx[54]}}`}
/>
`,
      title: "Dot Spin",
      icon: "ion:more",
      $$slots: {
        controls: [create_controls_slot_1],
        default: [create_default_slot_2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant18 = new /*Hst*/
  ctx[0].Variant({
    props: {
      source: `
<Loading.DotSlide
speed=${typeof /*dotSlide_speed*/
      ctx[48] === "string" ? `"${/*dotSlide_speed*/
      ctx[48]}"` : `{${/*dotSlide_speed*/
      ctx[48]}}`}
r=${typeof /*dotSlide_r*/
      ctx[49] === "string" ? `"${/*dotSlide_r*/
      ctx[49]}"` : `{${/*dotSlide_r*/
      ctx[49]}}`}
reverse=${typeof /*dotSlide_reverse*/
      ctx[50] === "string" ? `"${/*dotSlide_reverse*/
      ctx[50]}"` : `{${/*dotSlide_reverse*/
      ctx[50]}}`}
/>
`,
      title: "Dot Slide",
      icon: "ion:more",
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
      t11 = space();
      create_component(hst_variant12.$$.fragment);
      t12 = space();
      create_component(hst_variant13.$$.fragment);
      t13 = space();
      create_component(hst_variant14.$$.fragment);
      t14 = space();
      create_component(hst_variant15.$$.fragment);
      t15 = space();
      create_component(hst_variant16.$$.fragment);
      t16 = space();
      create_component(hst_variant17.$$.fragment);
      t17 = space();
      create_component(hst_variant18.$$.fragment);
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
      insert_dev(target, t11, anchor);
      mount_component(hst_variant12, target, anchor);
      insert_dev(target, t12, anchor);
      mount_component(hst_variant13, target, anchor);
      insert_dev(target, t13, anchor);
      mount_component(hst_variant14, target, anchor);
      insert_dev(target, t14, anchor);
      mount_component(hst_variant15, target, anchor);
      insert_dev(target, t15, anchor);
      mount_component(hst_variant16, target, anchor);
      insert_dev(target, t16, anchor);
      mount_component(hst_variant17, target, anchor);
      insert_dev(target, t17, anchor);
      mount_component(hst_variant18, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty[0] & /*pie_count*/
      1073741824 | dirty[1] & /*pie_speed, pie_scale, pie_reverse*/
      7)
        hst_variant0_changes.source = `
<Loading.Pie
count=${typeof /*pie_count*/
        ctx2[30] === "string" ? `"${/*pie_count*/
        ctx2[30]}"` : `{${/*pie_count*/
        ctx2[30]}}`}
speed=${typeof /*pie_speed*/
        ctx2[31] === "string" ? `"${/*pie_speed*/
        ctx2[31]}"` : `{${/*pie_speed*/
        ctx2[31]}}`}
scale=${typeof /*pie_scale*/
        ctx2[32] === "string" ? `"${/*pie_scale*/
        ctx2[32]}"` : `{${/*pie_scale*/
        ctx2[32]}}`}
reverse=${typeof /*pie_reverse*/
        ctx2[33] === "string" ? `"${/*pie_reverse*/
        ctx2[33]}"` : `{${/*pie_reverse*/
        ctx2[33]}}`}
/>
`;
      if (dirty[0] & /*pie_count*/
      1073741824 | dirty[1] & /*pie_reverse, pie_scale, pie_speed*/
      7 | dirty[5] & /*$$scope*/
      256) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty[0] & /*dna_count, dna_r, dna_r2, dna_height, dna_speed*/
      1040187392)
        hst_variant1_changes.source = `
<Loading.DNA
count=${typeof /*dna_count*/
        ctx2[25] === "string" ? `"${/*dna_count*/
        ctx2[25]}"` : `{${/*dna_count*/
        ctx2[25]}}`}
r=${typeof /*dna_r*/
        ctx2[26] === "string" ? `"${/*dna_r*/
        ctx2[26]}"` : `{${/*dna_r*/
        ctx2[26]}}`}
r2=${typeof /*dna_r2*/
        ctx2[27] === "string" ? `"${/*dna_r2*/
        ctx2[27]}"` : `{${/*dna_r2*/
        ctx2[27]}}`}
height=${typeof /*dna_height*/
        ctx2[28] === "string" ? `"${/*dna_height*/
        ctx2[28]}"` : `{${/*dna_height*/
        ctx2[28]}}`}
speed=${typeof /*dna_speed*/
        ctx2[29] === "string" ? `"${/*dna_speed*/
        ctx2[29]}"` : `{${/*dna_speed*/
        ctx2[29]}}`}
/>
`;
      if (dirty[0] & /*dna_speed, dna_r2, dna_r, dna_height, dna_count*/
      1040187392 | dirty[5] & /*$$scope*/
      256) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty[1] & /*blockShuffle_speed, blockShuffle_count, blockShuffle_br*/
      114688)
        hst_variant2_changes.source = `
<Loading.BlockShuffle
speed=${typeof /*blockShuffle_speed*/
        ctx2[45] === "string" ? `"${/*blockShuffle_speed*/
        ctx2[45]}"` : `{${/*blockShuffle_speed*/
        ctx2[45]}}`}
count=${typeof /*blockShuffle_count*/
        ctx2[46] === "string" ? `"${/*blockShuffle_count*/
        ctx2[46]}"` : `{${/*blockShuffle_count*/
        ctx2[46]}}`}
border_radius=${typeof /*blockShuffle_br*/
        ctx2[47] === "string" ? `"${/*blockShuffle_br*/
        ctx2[47]}"` : `{${/*blockShuffle_br*/
        ctx2[47]}}`}
/>
`;
      if (dirty[1] & /*blockShuffle_speed, blockShuffle_br, blockShuffle_count*/
      114688 | dirty[5] & /*$$scope*/
      256) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty[1] & /*blockWave_speed, blockWave_count*/
      12288)
        hst_variant3_changes.source = `
<Loading.BlockWave speed=${typeof /*blockWave_speed*/
        ctx2[43] === "string" ? `"${/*blockWave_speed*/
        ctx2[43]}"` : `{${/*blockWave_speed*/
        ctx2[43]}}`} count=${typeof /*blockWave_count*/
        ctx2[44] === "string" ? `"${/*blockWave_count*/
        ctx2[44]}"` : `{${/*blockWave_count*/
        ctx2[44]}}`} />
`;
      if (dirty[1] & /*blockWave_speed, blockWave_count*/
      12288 | dirty[5] & /*$$scope*/
      256) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty[1] & /*clock_speed*/
      2048)
        hst_variant4_changes.source = `
<Loading.Clock speed=${typeof /*clock_speed*/
        ctx2[42] === "string" ? `"${/*clock_speed*/
        ctx2[42]}"` : `{${/*clock_speed*/
        ctx2[42]}}`} />
`;
      if (dirty[1] & /*clock_speed*/
      2048 | dirty[5] & /*$$scope*/
      256) {
        hst_variant4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant4.$set(hst_variant4_changes);
      const hst_variant5_changes = {};
      if (dirty[1] & /*rotateOne_speed, rotateOne_count, rotateOne_width, rotateOne_length*/
      1920)
        hst_variant5_changes.source = `
<Loading.RotateOne
speed=${typeof /*rotateOne_speed*/
        ctx2[38] === "string" ? `"${/*rotateOne_speed*/
        ctx2[38]}"` : `{${/*rotateOne_speed*/
        ctx2[38]}}`}
count=${typeof /*rotateOne_count*/
        ctx2[39] === "string" ? `"${/*rotateOne_count*/
        ctx2[39]}"` : `{${/*rotateOne_count*/
        ctx2[39]}}`}
width=${typeof /*rotateOne_width*/
        ctx2[40] === "string" ? `"${/*rotateOne_width*/
        ctx2[40]}"` : `{${/*rotateOne_width*/
        ctx2[40]}}`}
length=${typeof /*rotateOne_length*/
        ctx2[41] === "string" ? `"${/*rotateOne_length*/
        ctx2[41]}"` : `{${/*rotateOne_length*/
        ctx2[41]}}`}
/>
`;
      if (dirty[1] & /*rotateOne_speed, rotateOne_length, rotateOne_width, rotateOne_count*/
      1920 | dirty[5] & /*$$scope*/
      256) {
        hst_variant5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant5.$set(hst_variant5_changes);
      const hst_variant6_changes = {};
      if (dirty[1] & /*hourglass_speed*/
      64)
        hst_variant6_changes.source = `
<Loading.Hourglass speed=${typeof /*hourglass_speed*/
        ctx2[37] === "string" ? `"${/*hourglass_speed*/
        ctx2[37]}"` : `{${/*hourglass_speed*/
        ctx2[37]}}`} />
`;
      if (dirty[1] & /*hourglass_speed*/
      64 | dirty[5] & /*$$scope*/
      256) {
        hst_variant6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant6.$set(hst_variant6_changes);
      const hst_variant7_changes = {};
      if (dirty[1] & /*heartOutline_speed, heartOutline_reverse*/
      48)
        hst_variant7_changes.source = `
<Loading.HeartOutline speed=${typeof /*heartOutline_speed*/
        ctx2[35] === "string" ? `"${/*heartOutline_speed*/
        ctx2[35]}"` : `{${/*heartOutline_speed*/
        ctx2[35]}}`} reverse=${typeof /*heartOutline_reverse*/
        ctx2[36] === "string" ? `"${/*heartOutline_reverse*/
        ctx2[36]}"` : `{${/*heartOutline_reverse*/
        ctx2[36]}}`} />
`;
      if (dirty[1] & /*heartOutline_reverse, heartOutline_speed*/
      48 | dirty[5] & /*$$scope*/
      256) {
        hst_variant7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant7.$set(hst_variant7_changes);
      const hst_variant8_changes = {};
      if (dirty[1] & /*heart_speed*/
      8)
        hst_variant8_changes.source = `
<Loading.Heart speed=${typeof /*heart_speed*/
        ctx2[34] === "string" ? `"${/*heart_speed*/
        ctx2[34]}"` : `{${/*heart_speed*/
        ctx2[34]}}`} />
`;
      if (dirty[1] & /*heart_speed*/
      8 | dirty[5] & /*$$scope*/
      256) {
        hst_variant8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant8.$set(hst_variant8_changes);
      const hst_variant9_changes = {};
      if (dirty[0] & /*dualBalls_speed, dualBalls_reverse*/
      25165824)
        hst_variant9_changes.source = `
<Loading.DualBalls speed=${typeof /*dualBalls_speed*/
        ctx2[23] === "string" ? `"${/*dualBalls_speed*/
        ctx2[23]}"` : `{${/*dualBalls_speed*/
        ctx2[23]}}`} reverse=${typeof /*dualBalls_reverse*/
        ctx2[24] === "string" ? `"${/*dualBalls_reverse*/
        ctx2[24]}"` : `{${/*dualBalls_reverse*/
        ctx2[24]}}`} />
`;
      if (dirty[0] & /*dualBalls_reverse, dualBalls_speed*/
      25165824 | dirty[5] & /*$$scope*/
      256) {
        hst_variant9_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant9.$set(hst_variant9_changes);
      const hst_variant10_changes = {};
      if (dirty[0] & /*spinGlass_rotations, spinGlass_speed, spinGlass_reverse*/
      7340032)
        hst_variant10_changes.source = `
<Loading.SpinGlass
rotations=${typeof /*spinGlass_rotations*/
        ctx2[21] === "string" ? `"${/*spinGlass_rotations*/
        ctx2[21]}"` : `{${/*spinGlass_rotations*/
        ctx2[21]}}`}
speed=${typeof /*spinGlass_speed*/
        ctx2[20] === "string" ? `"${/*spinGlass_speed*/
        ctx2[20]}"` : `{${/*spinGlass_speed*/
        ctx2[20]}}`}
reverse=${typeof /*spinGlass_reverse*/
        ctx2[22] === "string" ? `"${/*spinGlass_reverse*/
        ctx2[22]}"` : `{${/*spinGlass_reverse*/
        ctx2[22]}}`}
/>
`;
      if (dirty[0] & /*spinGlass_reverse, spinGlass_speed, spinGlass_rotations*/
      7340032 | dirty[5] & /*$$scope*/
      256) {
        hst_variant10_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant10.$set(hst_variant10_changes);
      const hst_variant11_changes = {};
      if (dirty[0] & /*spinCircles_speed, spinCircles_count, spinCircles_merge, spinCircles_r, spinCircles_r2, spinCircles_reverse*/
      1032192)
        hst_variant11_changes.source = `
<Loading.SpinCircles
speed=${typeof /*spinCircles_speed*/
        ctx2[18] === "string" ? `"${/*spinCircles_speed*/
        ctx2[18]}"` : `{${/*spinCircles_speed*/
        ctx2[18]}}`}
count=${typeof /*spinCircles_count*/
        ctx2[14] === "string" ? `"${/*spinCircles_count*/
        ctx2[14]}"` : `{${/*spinCircles_count*/
        ctx2[14]}}`}
merge=${typeof /*spinCircles_merge*/
        ctx2[15] === "string" ? `"${/*spinCircles_merge*/
        ctx2[15]}"` : `{${/*spinCircles_merge*/
        ctx2[15]}}`}
r=${typeof /*spinCircles_r*/
        ctx2[16] === "string" ? `"${/*spinCircles_r*/
        ctx2[16]}"` : `{${/*spinCircles_r*/
        ctx2[16]}}`}
r2=${typeof /*spinCircles_r2*/
        ctx2[17] === "string" ? `"${/*spinCircles_r2*/
        ctx2[17]}"` : `{${/*spinCircles_r2*/
        ctx2[17]}}`}
reverse=${typeof /*spinCircles_reverse*/
        ctx2[19] === "string" ? `"${/*spinCircles_reverse*/
        ctx2[19]}"` : `{${/*spinCircles_reverse*/
        ctx2[19]}}`}
/>
`;
      if (dirty[0] & /*spinCircles_reverse, spinCircles_merge, spinCircles_speed, spinCircles_r2, spinCircles_r, spinCircles_count*/
      1032192 | dirty[5] & /*$$scope*/
      256) {
        hst_variant11_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant11.$set(hst_variant11_changes);
      const hst_variant12_changes = {};
      if (dirty[0] & /*oscillate_speed, oscillate_count, oscillate_width, oscillate_bar_width*/
      15360)
        hst_variant12_changes.source = `
<Loading.Oscillate
speed=${typeof /*oscillate_speed*/
        ctx2[10] === "string" ? `"${/*oscillate_speed*/
        ctx2[10]}"` : `{${/*oscillate_speed*/
        ctx2[10]}}`}
count=${typeof /*oscillate_count*/
        ctx2[11] === "string" ? `"${/*oscillate_count*/
        ctx2[11]}"` : `{${/*oscillate_count*/
        ctx2[11]}}`}
width=${typeof /*oscillate_width*/
        ctx2[12] === "string" ? `"${/*oscillate_width*/
        ctx2[12]}"` : `{${/*oscillate_width*/
        ctx2[12]}}`}
bar_width=${typeof /*oscillate_bar_width*/
        ctx2[13] === "string" ? `"${/*oscillate_bar_width*/
        ctx2[13]}"` : `{${/*oscillate_bar_width*/
        ctx2[13]}}`}
/>
`;
      if (dirty[0] & /*oscillate_bar_width, oscillate_width, oscillate_speed, oscillate_count*/
      15360 | dirty[5] & /*$$scope*/
      256) {
        hst_variant12_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant12.$set(hst_variant12_changes);
      const hst_variant13_changes = {};
      if (dirty[0] & /*slide_speed, slide_reverse*/
      768)
        hst_variant13_changes.source = `
<Loading.Slide speed=${typeof /*slide_speed*/
        ctx2[8] === "string" ? `"${/*slide_speed*/
        ctx2[8]}"` : `{${/*slide_speed*/
        ctx2[8]}}`} reverse=${typeof /*slide_reverse*/
        ctx2[9] === "string" ? `"${/*slide_reverse*/
        ctx2[9]}"` : `{${/*slide_reverse*/
        ctx2[9]}}`} />
`;
      if (dirty[0] & /*slide_reverse, slide_speed*/
      768 | dirty[5] & /*$$scope*/
      256) {
        hst_variant13_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant13.$set(hst_variant13_changes);
      const hst_variant14_changes = {};
      if (dirty[0] & /*grow_speed, grow_reverse*/
      192)
        hst_variant14_changes.source = `
<Loading.Grow speed=${typeof /*grow_speed*/
        ctx2[6] === "string" ? `"${/*grow_speed*/
        ctx2[6]}"` : `{${/*grow_speed*/
        ctx2[6]}}`} reverse=${typeof /*grow_reverse*/
        ctx2[7] === "string" ? `"${/*grow_reverse*/
        ctx2[7]}"` : `{${/*grow_reverse*/
        ctx2[7]}}`} />
`;
      if (dirty[0] & /*grow_reverse, grow_speed*/
      192 | dirty[5] & /*$$scope*/
      256) {
        hst_variant14_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant14.$set(hst_variant14_changes);
      const hst_variant15_changes = {};
      if (dirty[0] & /*shrink_speed, shrink_reverse*/
      48)
        hst_variant15_changes.source = `
<Loading.Shrink speed=${typeof /*shrink_speed*/
        ctx2[4] === "string" ? `"${/*shrink_speed*/
        ctx2[4]}"` : `{${/*shrink_speed*/
        ctx2[4]}}`} reverse=${typeof /*shrink_reverse*/
        ctx2[5] === "string" ? `"${/*shrink_reverse*/
        ctx2[5]}"` : `{${/*shrink_reverse*/
        ctx2[5]}}`} />
`;
      if (dirty[0] & /*shrink_reverse, shrink_speed*/
      48 | dirty[5] & /*$$scope*/
      256) {
        hst_variant15_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant15.$set(hst_variant15_changes);
      const hst_variant16_changes = {};
      if (dirty[0] & /*spin_scale, spin_speed, spin_border_width*/
      14)
        hst_variant16_changes.source = `
<Loading.Spin
scale=${typeof /*spin_scale*/
        ctx2[2] === "string" ? `"${/*spin_scale*/
        ctx2[2]}"` : `{${/*spin_scale*/
        ctx2[2]}}`}
speed=${typeof /*spin_speed*/
        ctx2[1] === "string" ? `"${/*spin_speed*/
        ctx2[1]}"` : `{${/*spin_speed*/
        ctx2[1]}}`}
border_width=${typeof /*spin_border_width*/
        ctx2[3] === "string" ? `"${/*spin_border_width*/
        ctx2[3]}"` : `{${/*spin_border_width*/
        ctx2[3]}}`}
/>
`;
      if (dirty[0] & /*spin_border_width, spin_scale, spin_speed*/
      14 | dirty[5] & /*$$scope*/
      256) {
        hst_variant16_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant16.$set(hst_variant16_changes);
      const hst_variant17_changes = {};
      if (dirty[1] & /*dotSpin_count, dotSpin_speed, dotSpin_reverse, dotSpin_r*/
      15728640)
        hst_variant17_changes.source = `
<Loading.DotSpin
count=${typeof /*dotSpin_count*/
        ctx2[51] === "string" ? `"${/*dotSpin_count*/
        ctx2[51]}"` : `{${/*dotSpin_count*/
        ctx2[51]}}`}
speed=${typeof /*dotSpin_speed*/
        ctx2[52] === "string" ? `"${/*dotSpin_speed*/
        ctx2[52]}"` : `{${/*dotSpin_speed*/
        ctx2[52]}}`}
reverse=${typeof /*dotSpin_reverse*/
        ctx2[53] === "string" ? `"${/*dotSpin_reverse*/
        ctx2[53]}"` : `{${/*dotSpin_reverse*/
        ctx2[53]}}`}
r=${typeof /*dotSpin_r*/
        ctx2[54] === "string" ? `"${/*dotSpin_r*/
        ctx2[54]}"` : `{${/*dotSpin_r*/
        ctx2[54]}}`}
/>
`;
      if (dirty[1] & /*dotSpin_reverse, dotSpin_r, dotSpin_speed, dotSpin_count*/
      15728640 | dirty[5] & /*$$scope*/
      256) {
        hst_variant17_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant17.$set(hst_variant17_changes);
      const hst_variant18_changes = {};
      if (dirty[1] & /*dotSlide_speed, dotSlide_r, dotSlide_reverse*/
      917504)
        hst_variant18_changes.source = `
<Loading.DotSlide
speed=${typeof /*dotSlide_speed*/
        ctx2[48] === "string" ? `"${/*dotSlide_speed*/
        ctx2[48]}"` : `{${/*dotSlide_speed*/
        ctx2[48]}}`}
r=${typeof /*dotSlide_r*/
        ctx2[49] === "string" ? `"${/*dotSlide_r*/
        ctx2[49]}"` : `{${/*dotSlide_r*/
        ctx2[49]}}`}
reverse=${typeof /*dotSlide_reverse*/
        ctx2[50] === "string" ? `"${/*dotSlide_reverse*/
        ctx2[50]}"` : `{${/*dotSlide_reverse*/
        ctx2[50]}}`}
/>
`;
      if (dirty[1] & /*dotSlide_reverse, dotSlide_r, dotSlide_speed*/
      917504 | dirty[5] & /*$$scope*/
      256) {
        hst_variant18_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant18.$set(hst_variant18_changes);
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
      transition_in(hst_variant12.$$.fragment, local);
      transition_in(hst_variant13.$$.fragment, local);
      transition_in(hst_variant14.$$.fragment, local);
      transition_in(hst_variant15.$$.fragment, local);
      transition_in(hst_variant16.$$.fragment, local);
      transition_in(hst_variant17.$$.fragment, local);
      transition_in(hst_variant18.$$.fragment, local);
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
      transition_out(hst_variant12.$$.fragment, local);
      transition_out(hst_variant13.$$.fragment, local);
      transition_out(hst_variant14.$$.fragment, local);
      transition_out(hst_variant15.$$.fragment, local);
      transition_out(hst_variant16.$$.fragment, local);
      transition_out(hst_variant17.$$.fragment, local);
      transition_out(hst_variant18.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
        detach_dev(t4);
        detach_dev(t5);
        detach_dev(t6);
        detach_dev(t7);
        detach_dev(t8);
        detach_dev(t9);
        detach_dev(t10);
        detach_dev(t11);
        detach_dev(t12);
        detach_dev(t13);
        detach_dev(t14);
        detach_dev(t15);
        detach_dev(t16);
        detach_dev(t17);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
      destroy_component(hst_variant2, detaching);
      destroy_component(hst_variant3, detaching);
      destroy_component(hst_variant4, detaching);
      destroy_component(hst_variant5, detaching);
      destroy_component(hst_variant6, detaching);
      destroy_component(hst_variant7, detaching);
      destroy_component(hst_variant8, detaching);
      destroy_component(hst_variant9, detaching);
      destroy_component(hst_variant10, detaching);
      destroy_component(hst_variant11, detaching);
      destroy_component(hst_variant12, detaching);
      destroy_component(hst_variant13, detaching);
      destroy_component(hst_variant14, detaching);
      destroy_component(hst_variant15, detaching);
      destroy_component(hst_variant16, detaching);
      destroy_component(hst_variant17, detaching);
      destroy_component(hst_variant18, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(59:0) <Hst.Story title=\\"Loading Animations\\" icon=\\"mingcute:loading-fill\\" layout={{ type: \\"grid\\" }}>',
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
      if (dirty[0] & /*spin_scale, spin_speed, spin_border_width, shrink_speed, shrink_reverse, grow_speed, grow_reverse, slide_speed, slide_reverse, oscillate_speed, oscillate_count, oscillate_width, oscillate_bar_width, spinCircles_speed, spinCircles_count, spinCircles_merge, spinCircles_r, spinCircles_r2, spinCircles_reverse, spinGlass_rotations, spinGlass_speed, spinGlass_reverse, dualBalls_speed, dualBalls_reverse, dna_count, dna_r, dna_r2, dna_height, dna_speed, pie_count*/
      2147483646 | dirty[1] & /*dotSlide_speed, dotSlide_r, dotSlide_reverse, dotSpin_count, dotSpin_speed, dotSpin_reverse, dotSpin_r, heart_speed, heartOutline_speed, heartOutline_reverse, hourglass_speed, rotateOne_speed, rotateOne_count, rotateOne_width, rotateOne_length, clock_speed, blockWave_speed, blockWave_count, blockShuffle_speed, blockShuffle_count, blockShuffle_br, pie_speed, pie_scale, pie_reverse*/
      16777215 | dirty[5] & /*$$scope*/
      256) {
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
  let spin_speed = 3;
  let spin_scale = 0.25;
  let spin_border_width = 0;
  let shrink_speed = 2;
  let shrink_reverse = false;
  let grow_speed = 2;
  let grow_reverse = false;
  let slide_speed = 4;
  let slide_reverse = false;
  let oscillate_speed = 2;
  let oscillate_count = 5;
  let oscillate_width = 50;
  let oscillate_bar_width = 6;
  let spinCircles_count = 2;
  let spinCircles_merge = 0.9;
  let spinCircles_r = 10;
  let spinCircles_r2 = 15;
  let spinCircles_speed = 1;
  let spinCircles_reverse = false;
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
  let pie_reverse = false;
  let heart_speed = 1.5;
  let heartOutline_speed = 2;
  let heartOutline_reverse = false;
  let hourglass_speed = 1;
  let rotateOne_speed = 1;
  let rotateOne_count = 12;
  let rotateOne_width = 10;
  let rotateOne_length = 25;
  let clock_speed = 1;
  let blockWave_speed = 2;
  let blockWave_count = 4;
  let blockShuffle_speed = 2;
  let blockShuffle_count = 3;
  let blockShuffle_br = 10;
  let dotSlide_speed = 0.5;
  let dotSlide_r = 15;
  let dotSlide_reverse = false;
  let dotSpin_count = 2;
  let dotSpin_speed = 1;
  let dotSpin_reverse = false;
  let dotSpin_r = 15;
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
  function hst_slider0_value_binding(value) {
    pie_count = value;
    $$invalidate(30, pie_count);
  }
  function hst_slider1_value_binding(value) {
    pie_speed = value;
    $$invalidate(31, pie_speed);
  }
  function hst_slider2_value_binding(value) {
    pie_scale = value;
    $$invalidate(32, pie_scale);
  }
  function hst_checkbox_value_binding(value) {
    pie_reverse = value;
    $$invalidate(33, pie_reverse);
  }
  function loading_pie_count_binding(value) {
    pie_count = value;
    $$invalidate(30, pie_count);
  }
  function loading_pie_speed_binding(value) {
    pie_speed = value;
    $$invalidate(31, pie_speed);
  }
  function loading_pie_scale_binding(value) {
    pie_scale = value;
    $$invalidate(32, pie_scale);
  }
  function loading_pie_reverse_binding(value) {
    pie_reverse = value;
    $$invalidate(33, pie_reverse);
  }
  function hst_slider0_value_binding_1(value) {
    dna_count = value;
    $$invalidate(25, dna_count);
  }
  function hst_slider1_value_binding_1(value) {
    dna_height = value;
    $$invalidate(28, dna_height);
  }
  function hst_slider2_value_binding_1(value) {
    dna_r = value;
    $$invalidate(26, dna_r);
  }
  function hst_slider3_value_binding(value) {
    dna_r2 = value;
    $$invalidate(27, dna_r2);
  }
  function hst_slider4_value_binding(value) {
    dna_speed = value;
    $$invalidate(29, dna_speed);
  }
  function loading_dna_count_binding(value) {
    dna_count = value;
    $$invalidate(25, dna_count);
  }
  function loading_dna_r_binding(value) {
    dna_r = value;
    $$invalidate(26, dna_r);
  }
  function loading_dna_r2_binding(value) {
    dna_r2 = value;
    $$invalidate(27, dna_r2);
  }
  function loading_dna_height_binding(value) {
    dna_height = value;
    $$invalidate(28, dna_height);
  }
  function loading_dna_speed_binding(value) {
    dna_speed = value;
    $$invalidate(29, dna_speed);
  }
  function hst_slider0_value_binding_2(value) {
    blockShuffle_count = value;
    $$invalidate(46, blockShuffle_count);
  }
  function hst_slider1_value_binding_2(value) {
    blockShuffle_br = value;
    $$invalidate(47, blockShuffle_br);
  }
  function hst_slider2_value_binding_2(value) {
    blockShuffle_speed = value;
    $$invalidate(45, blockShuffle_speed);
  }
  function loading_blockshuffle_speed_binding(value) {
    blockShuffle_speed = value;
    $$invalidate(45, blockShuffle_speed);
  }
  function loading_blockshuffle_count_binding(value) {
    blockShuffle_count = value;
    $$invalidate(46, blockShuffle_count);
  }
  function loading_blockshuffle_border_radius_binding(value) {
    blockShuffle_br = value;
    $$invalidate(47, blockShuffle_br);
  }
  function hst_slider0_value_binding_3(value) {
    blockWave_count = value;
    $$invalidate(44, blockWave_count);
  }
  function hst_slider1_value_binding_3(value) {
    blockWave_speed = value;
    $$invalidate(43, blockWave_speed);
  }
  function loading_blockwave_speed_binding(value) {
    blockWave_speed = value;
    $$invalidate(43, blockWave_speed);
  }
  function loading_blockwave_count_binding(value) {
    blockWave_count = value;
    $$invalidate(44, blockWave_count);
  }
  function hst_slider_value_binding(value) {
    clock_speed = value;
    $$invalidate(42, clock_speed);
  }
  function loading_clock_speed_binding(value) {
    clock_speed = value;
    $$invalidate(42, clock_speed);
  }
  function hst_slider0_value_binding_4(value) {
    rotateOne_count = value;
    $$invalidate(39, rotateOne_count);
  }
  function hst_slider1_value_binding_4(value) {
    rotateOne_width = value;
    $$invalidate(40, rotateOne_width);
  }
  function hst_slider2_value_binding_3(value) {
    rotateOne_length = value;
    $$invalidate(41, rotateOne_length);
  }
  function hst_slider3_value_binding_1(value) {
    rotateOne_speed = value;
    $$invalidate(38, rotateOne_speed);
  }
  function loading_rotateone_speed_binding(value) {
    rotateOne_speed = value;
    $$invalidate(38, rotateOne_speed);
  }
  function loading_rotateone_count_binding(value) {
    rotateOne_count = value;
    $$invalidate(39, rotateOne_count);
  }
  function loading_rotateone_width_binding(value) {
    rotateOne_width = value;
    $$invalidate(40, rotateOne_width);
  }
  function loading_rotateone_length_binding(value) {
    rotateOne_length = value;
    $$invalidate(41, rotateOne_length);
  }
  function hst_slider_value_binding_1(value) {
    hourglass_speed = value;
    $$invalidate(37, hourglass_speed);
  }
  function loading_hourglass_speed_binding(value) {
    hourglass_speed = value;
    $$invalidate(37, hourglass_speed);
  }
  function hst_slider_value_binding_2(value) {
    heartOutline_speed = value;
    $$invalidate(35, heartOutline_speed);
  }
  function hst_checkbox_value_binding_1(value) {
    heartOutline_reverse = value;
    $$invalidate(36, heartOutline_reverse);
  }
  function loading_heartoutline_speed_binding(value) {
    heartOutline_speed = value;
    $$invalidate(35, heartOutline_speed);
  }
  function loading_heartoutline_reverse_binding(value) {
    heartOutline_reverse = value;
    $$invalidate(36, heartOutline_reverse);
  }
  function hst_slider_value_binding_3(value) {
    heart_speed = value;
    $$invalidate(34, heart_speed);
  }
  function loading_heart_speed_binding(value) {
    heart_speed = value;
    $$invalidate(34, heart_speed);
  }
  function hst_slider_value_binding_4(value) {
    dualBalls_speed = value;
    $$invalidate(23, dualBalls_speed);
  }
  function hst_checkbox_value_binding_2(value) {
    dualBalls_reverse = value;
    $$invalidate(24, dualBalls_reverse);
  }
  function loading_dualballs_speed_binding(value) {
    dualBalls_speed = value;
    $$invalidate(23, dualBalls_speed);
  }
  function loading_dualballs_reverse_binding(value) {
    dualBalls_reverse = value;
    $$invalidate(24, dualBalls_reverse);
  }
  function hst_slider0_value_binding_5(value) {
    spinGlass_rotations = value;
    $$invalidate(21, spinGlass_rotations);
  }
  function hst_slider1_value_binding_5(value) {
    spinGlass_speed = value;
    $$invalidate(20, spinGlass_speed);
  }
  function hst_checkbox_value_binding_3(value) {
    spinGlass_reverse = value;
    $$invalidate(22, spinGlass_reverse);
  }
  function loading_spinglass_rotations_binding(value) {
    spinGlass_rotations = value;
    $$invalidate(21, spinGlass_rotations);
  }
  function loading_spinglass_speed_binding(value) {
    spinGlass_speed = value;
    $$invalidate(20, spinGlass_speed);
  }
  function loading_spinglass_reverse_binding(value) {
    spinGlass_reverse = value;
    $$invalidate(22, spinGlass_reverse);
  }
  function hst_slider0_value_binding_6(value) {
    spinCircles_count = value;
    $$invalidate(14, spinCircles_count);
  }
  function hst_slider1_value_binding_6(value) {
    spinCircles_r = value;
    $$invalidate(16, spinCircles_r);
  }
  function hst_slider2_value_binding_4(value) {
    spinCircles_r2 = value;
    $$invalidate(17, spinCircles_r2);
  }
  function hst_slider3_value_binding_2(value) {
    spinCircles_speed = value;
    $$invalidate(18, spinCircles_speed);
  }
  function hst_slider4_value_binding_1(value) {
    spinCircles_merge = value;
    $$invalidate(15, spinCircles_merge);
  }
  function hst_checkbox_value_binding_4(value) {
    spinCircles_reverse = value;
    $$invalidate(19, spinCircles_reverse);
  }
  function loading_spincircles_speed_binding(value) {
    spinCircles_speed = value;
    $$invalidate(18, spinCircles_speed);
  }
  function loading_spincircles_count_binding(value) {
    spinCircles_count = value;
    $$invalidate(14, spinCircles_count);
  }
  function loading_spincircles_merge_binding(value) {
    spinCircles_merge = value;
    $$invalidate(15, spinCircles_merge);
  }
  function loading_spincircles_r_binding(value) {
    spinCircles_r = value;
    $$invalidate(16, spinCircles_r);
  }
  function loading_spincircles_r2_binding(value) {
    spinCircles_r2 = value;
    $$invalidate(17, spinCircles_r2);
  }
  function loading_spincircles_reverse_binding(value) {
    spinCircles_reverse = value;
    $$invalidate(19, spinCircles_reverse);
  }
  function hst_slider0_value_binding_7(value) {
    oscillate_count = value;
    $$invalidate(11, oscillate_count);
  }
  function hst_slider1_value_binding_7(value) {
    oscillate_speed = value;
    $$invalidate(10, oscillate_speed);
  }
  function hst_slider2_value_binding_5(value) {
    oscillate_width = value;
    $$invalidate(12, oscillate_width);
  }
  function hst_slider3_value_binding_3(value) {
    oscillate_bar_width = value;
    $$invalidate(13, oscillate_bar_width);
  }
  function loading_oscillate_speed_binding(value) {
    oscillate_speed = value;
    $$invalidate(10, oscillate_speed);
  }
  function loading_oscillate_count_binding(value) {
    oscillate_count = value;
    $$invalidate(11, oscillate_count);
  }
  function loading_oscillate_width_binding(value) {
    oscillate_width = value;
    $$invalidate(12, oscillate_width);
  }
  function loading_oscillate_bar_width_binding(value) {
    oscillate_bar_width = value;
    $$invalidate(13, oscillate_bar_width);
  }
  function hst_slider_value_binding_5(value) {
    slide_speed = value;
    $$invalidate(8, slide_speed);
  }
  function hst_checkbox_value_binding_5(value) {
    slide_reverse = value;
    $$invalidate(9, slide_reverse);
  }
  function loading_slide_speed_binding(value) {
    slide_speed = value;
    $$invalidate(8, slide_speed);
  }
  function loading_slide_reverse_binding(value) {
    slide_reverse = value;
    $$invalidate(9, slide_reverse);
  }
  function hst_slider_value_binding_6(value) {
    grow_speed = value;
    $$invalidate(6, grow_speed);
  }
  function hst_checkbox_value_binding_6(value) {
    grow_reverse = value;
    $$invalidate(7, grow_reverse);
  }
  function loading_grow_speed_binding(value) {
    grow_speed = value;
    $$invalidate(6, grow_speed);
  }
  function loading_grow_reverse_binding(value) {
    grow_reverse = value;
    $$invalidate(7, grow_reverse);
  }
  function hst_slider_value_binding_7(value) {
    shrink_speed = value;
    $$invalidate(4, shrink_speed);
  }
  function hst_checkbox_value_binding_7(value) {
    shrink_reverse = value;
    $$invalidate(5, shrink_reverse);
  }
  function loading_shrink_speed_binding(value) {
    shrink_speed = value;
    $$invalidate(4, shrink_speed);
  }
  function loading_shrink_reverse_binding(value) {
    shrink_reverse = value;
    $$invalidate(5, shrink_reverse);
  }
  function hst_slider0_value_binding_8(value) {
    spin_speed = value;
    $$invalidate(1, spin_speed);
  }
  function hst_slider1_value_binding_8(value) {
    spin_scale = value;
    $$invalidate(2, spin_scale);
  }
  function hst_slider2_value_binding_6(value) {
    spin_border_width = value;
    $$invalidate(3, spin_border_width);
  }
  function loading_spin_scale_binding(value) {
    spin_scale = value;
    $$invalidate(2, spin_scale);
  }
  function loading_spin_speed_binding(value) {
    spin_speed = value;
    $$invalidate(1, spin_speed);
  }
  function loading_spin_border_width_binding(value) {
    spin_border_width = value;
    $$invalidate(3, spin_border_width);
  }
  function hst_slider0_value_binding_9(value) {
    dotSpin_count = value;
    $$invalidate(51, dotSpin_count);
  }
  function hst_slider1_value_binding_9(value) {
    dotSpin_speed = value;
    $$invalidate(52, dotSpin_speed);
  }
  function hst_slider2_value_binding_7(value) {
    dotSpin_r = value;
    $$invalidate(54, dotSpin_r);
  }
  function hst_checkbox_value_binding_8(value) {
    dotSpin_reverse = value;
    $$invalidate(53, dotSpin_reverse);
  }
  function loading_dotspin_count_binding(value) {
    dotSpin_count = value;
    $$invalidate(51, dotSpin_count);
  }
  function loading_dotspin_speed_binding(value) {
    dotSpin_speed = value;
    $$invalidate(52, dotSpin_speed);
  }
  function loading_dotspin_reverse_binding(value) {
    dotSpin_reverse = value;
    $$invalidate(53, dotSpin_reverse);
  }
  function loading_dotspin_r_binding(value) {
    dotSpin_r = value;
    $$invalidate(54, dotSpin_r);
  }
  function hst_slider0_value_binding_10(value) {
    dotSlide_speed = value;
    $$invalidate(48, dotSlide_speed);
  }
  function hst_slider1_value_binding_10(value) {
    dotSlide_r = value;
    $$invalidate(49, dotSlide_r);
  }
  function hst_checkbox_value_binding_9(value) {
    dotSlide_reverse = value;
    $$invalidate(50, dotSlide_reverse);
  }
  function loading_dotslide_speed_binding(value) {
    dotSlide_speed = value;
    $$invalidate(48, dotSlide_speed);
  }
  function loading_dotslide_r_binding(value) {
    dotSlide_r = value;
    $$invalidate(49, dotSlide_r);
  }
  function loading_dotslide_reverse_binding(value) {
    dotSlide_reverse = value;
    $$invalidate(50, dotSlide_reverse);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Loading,
    Hst,
    spin_speed,
    spin_scale,
    spin_border_width,
    shrink_speed,
    shrink_reverse,
    grow_speed,
    grow_reverse,
    slide_speed,
    slide_reverse,
    oscillate_speed,
    oscillate_count,
    oscillate_width,
    oscillate_bar_width,
    spinCircles_count,
    spinCircles_merge,
    spinCircles_r,
    spinCircles_r2,
    spinCircles_speed,
    spinCircles_reverse,
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
    pie_reverse,
    heart_speed,
    heartOutline_speed,
    heartOutline_reverse,
    hourglass_speed,
    rotateOne_speed,
    rotateOne_count,
    rotateOne_width,
    rotateOne_length,
    clock_speed,
    blockWave_speed,
    blockWave_count,
    blockShuffle_speed,
    blockShuffle_count,
    blockShuffle_br,
    dotSlide_speed,
    dotSlide_r,
    dotSlide_reverse,
    dotSpin_count,
    dotSpin_speed,
    dotSpin_reverse,
    dotSpin_r
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("spin_speed" in $$props2)
      $$invalidate(1, spin_speed = $$props2.spin_speed);
    if ("spin_scale" in $$props2)
      $$invalidate(2, spin_scale = $$props2.spin_scale);
    if ("spin_border_width" in $$props2)
      $$invalidate(3, spin_border_width = $$props2.spin_border_width);
    if ("shrink_speed" in $$props2)
      $$invalidate(4, shrink_speed = $$props2.shrink_speed);
    if ("shrink_reverse" in $$props2)
      $$invalidate(5, shrink_reverse = $$props2.shrink_reverse);
    if ("grow_speed" in $$props2)
      $$invalidate(6, grow_speed = $$props2.grow_speed);
    if ("grow_reverse" in $$props2)
      $$invalidate(7, grow_reverse = $$props2.grow_reverse);
    if ("slide_speed" in $$props2)
      $$invalidate(8, slide_speed = $$props2.slide_speed);
    if ("slide_reverse" in $$props2)
      $$invalidate(9, slide_reverse = $$props2.slide_reverse);
    if ("oscillate_speed" in $$props2)
      $$invalidate(10, oscillate_speed = $$props2.oscillate_speed);
    if ("oscillate_count" in $$props2)
      $$invalidate(11, oscillate_count = $$props2.oscillate_count);
    if ("oscillate_width" in $$props2)
      $$invalidate(12, oscillate_width = $$props2.oscillate_width);
    if ("oscillate_bar_width" in $$props2)
      $$invalidate(13, oscillate_bar_width = $$props2.oscillate_bar_width);
    if ("spinCircles_count" in $$props2)
      $$invalidate(14, spinCircles_count = $$props2.spinCircles_count);
    if ("spinCircles_merge" in $$props2)
      $$invalidate(15, spinCircles_merge = $$props2.spinCircles_merge);
    if ("spinCircles_r" in $$props2)
      $$invalidate(16, spinCircles_r = $$props2.spinCircles_r);
    if ("spinCircles_r2" in $$props2)
      $$invalidate(17, spinCircles_r2 = $$props2.spinCircles_r2);
    if ("spinCircles_speed" in $$props2)
      $$invalidate(18, spinCircles_speed = $$props2.spinCircles_speed);
    if ("spinCircles_reverse" in $$props2)
      $$invalidate(19, spinCircles_reverse = $$props2.spinCircles_reverse);
    if ("spinGlass_speed" in $$props2)
      $$invalidate(20, spinGlass_speed = $$props2.spinGlass_speed);
    if ("spinGlass_rotations" in $$props2)
      $$invalidate(21, spinGlass_rotations = $$props2.spinGlass_rotations);
    if ("spinGlass_reverse" in $$props2)
      $$invalidate(22, spinGlass_reverse = $$props2.spinGlass_reverse);
    if ("dualBalls_speed" in $$props2)
      $$invalidate(23, dualBalls_speed = $$props2.dualBalls_speed);
    if ("dualBalls_reverse" in $$props2)
      $$invalidate(24, dualBalls_reverse = $$props2.dualBalls_reverse);
    if ("dna_count" in $$props2)
      $$invalidate(25, dna_count = $$props2.dna_count);
    if ("dna_r" in $$props2)
      $$invalidate(26, dna_r = $$props2.dna_r);
    if ("dna_r2" in $$props2)
      $$invalidate(27, dna_r2 = $$props2.dna_r2);
    if ("dna_height" in $$props2)
      $$invalidate(28, dna_height = $$props2.dna_height);
    if ("dna_speed" in $$props2)
      $$invalidate(29, dna_speed = $$props2.dna_speed);
    if ("pie_count" in $$props2)
      $$invalidate(30, pie_count = $$props2.pie_count);
    if ("pie_speed" in $$props2)
      $$invalidate(31, pie_speed = $$props2.pie_speed);
    if ("pie_scale" in $$props2)
      $$invalidate(32, pie_scale = $$props2.pie_scale);
    if ("pie_reverse" in $$props2)
      $$invalidate(33, pie_reverse = $$props2.pie_reverse);
    if ("heart_speed" in $$props2)
      $$invalidate(34, heart_speed = $$props2.heart_speed);
    if ("heartOutline_speed" in $$props2)
      $$invalidate(35, heartOutline_speed = $$props2.heartOutline_speed);
    if ("heartOutline_reverse" in $$props2)
      $$invalidate(36, heartOutline_reverse = $$props2.heartOutline_reverse);
    if ("hourglass_speed" in $$props2)
      $$invalidate(37, hourglass_speed = $$props2.hourglass_speed);
    if ("rotateOne_speed" in $$props2)
      $$invalidate(38, rotateOne_speed = $$props2.rotateOne_speed);
    if ("rotateOne_count" in $$props2)
      $$invalidate(39, rotateOne_count = $$props2.rotateOne_count);
    if ("rotateOne_width" in $$props2)
      $$invalidate(40, rotateOne_width = $$props2.rotateOne_width);
    if ("rotateOne_length" in $$props2)
      $$invalidate(41, rotateOne_length = $$props2.rotateOne_length);
    if ("clock_speed" in $$props2)
      $$invalidate(42, clock_speed = $$props2.clock_speed);
    if ("blockWave_speed" in $$props2)
      $$invalidate(43, blockWave_speed = $$props2.blockWave_speed);
    if ("blockWave_count" in $$props2)
      $$invalidate(44, blockWave_count = $$props2.blockWave_count);
    if ("blockShuffle_speed" in $$props2)
      $$invalidate(45, blockShuffle_speed = $$props2.blockShuffle_speed);
    if ("blockShuffle_count" in $$props2)
      $$invalidate(46, blockShuffle_count = $$props2.blockShuffle_count);
    if ("blockShuffle_br" in $$props2)
      $$invalidate(47, blockShuffle_br = $$props2.blockShuffle_br);
    if ("dotSlide_speed" in $$props2)
      $$invalidate(48, dotSlide_speed = $$props2.dotSlide_speed);
    if ("dotSlide_r" in $$props2)
      $$invalidate(49, dotSlide_r = $$props2.dotSlide_r);
    if ("dotSlide_reverse" in $$props2)
      $$invalidate(50, dotSlide_reverse = $$props2.dotSlide_reverse);
    if ("dotSpin_count" in $$props2)
      $$invalidate(51, dotSpin_count = $$props2.dotSpin_count);
    if ("dotSpin_speed" in $$props2)
      $$invalidate(52, dotSpin_speed = $$props2.dotSpin_speed);
    if ("dotSpin_reverse" in $$props2)
      $$invalidate(53, dotSpin_reverse = $$props2.dotSpin_reverse);
    if ("dotSpin_r" in $$props2)
      $$invalidate(54, dotSpin_r = $$props2.dotSpin_r);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    spin_speed,
    spin_scale,
    spin_border_width,
    shrink_speed,
    shrink_reverse,
    grow_speed,
    grow_reverse,
    slide_speed,
    slide_reverse,
    oscillate_speed,
    oscillate_count,
    oscillate_width,
    oscillate_bar_width,
    spinCircles_count,
    spinCircles_merge,
    spinCircles_r,
    spinCircles_r2,
    spinCircles_speed,
    spinCircles_reverse,
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
    pie_reverse,
    heart_speed,
    heartOutline_speed,
    heartOutline_reverse,
    hourglass_speed,
    rotateOne_speed,
    rotateOne_count,
    rotateOne_width,
    rotateOne_length,
    clock_speed,
    blockWave_speed,
    blockWave_count,
    blockShuffle_speed,
    blockShuffle_count,
    blockShuffle_br,
    dotSlide_speed,
    dotSlide_r,
    dotSlide_reverse,
    dotSpin_count,
    dotSpin_speed,
    dotSpin_reverse,
    dotSpin_r,
    hst_slider0_value_binding,
    hst_slider1_value_binding,
    hst_slider2_value_binding,
    hst_checkbox_value_binding,
    loading_pie_count_binding,
    loading_pie_speed_binding,
    loading_pie_scale_binding,
    loading_pie_reverse_binding,
    hst_slider0_value_binding_1,
    hst_slider1_value_binding_1,
    hst_slider2_value_binding_1,
    hst_slider3_value_binding,
    hst_slider4_value_binding,
    loading_dna_count_binding,
    loading_dna_r_binding,
    loading_dna_r2_binding,
    loading_dna_height_binding,
    loading_dna_speed_binding,
    hst_slider0_value_binding_2,
    hst_slider1_value_binding_2,
    hst_slider2_value_binding_2,
    loading_blockshuffle_speed_binding,
    loading_blockshuffle_count_binding,
    loading_blockshuffle_border_radius_binding,
    hst_slider0_value_binding_3,
    hst_slider1_value_binding_3,
    loading_blockwave_speed_binding,
    loading_blockwave_count_binding,
    hst_slider_value_binding,
    loading_clock_speed_binding,
    hst_slider0_value_binding_4,
    hst_slider1_value_binding_4,
    hst_slider2_value_binding_3,
    hst_slider3_value_binding_1,
    loading_rotateone_speed_binding,
    loading_rotateone_count_binding,
    loading_rotateone_width_binding,
    loading_rotateone_length_binding,
    hst_slider_value_binding_1,
    loading_hourglass_speed_binding,
    hst_slider_value_binding_2,
    hst_checkbox_value_binding_1,
    loading_heartoutline_speed_binding,
    loading_heartoutline_reverse_binding,
    hst_slider_value_binding_3,
    loading_heart_speed_binding,
    hst_slider_value_binding_4,
    hst_checkbox_value_binding_2,
    loading_dualballs_speed_binding,
    loading_dualballs_reverse_binding,
    hst_slider0_value_binding_5,
    hst_slider1_value_binding_5,
    hst_checkbox_value_binding_3,
    loading_spinglass_rotations_binding,
    loading_spinglass_speed_binding,
    loading_spinglass_reverse_binding,
    hst_slider0_value_binding_6,
    hst_slider1_value_binding_6,
    hst_slider2_value_binding_4,
    hst_slider3_value_binding_2,
    hst_slider4_value_binding_1,
    hst_checkbox_value_binding_4,
    loading_spincircles_speed_binding,
    loading_spincircles_count_binding,
    loading_spincircles_merge_binding,
    loading_spincircles_r_binding,
    loading_spincircles_r2_binding,
    loading_spincircles_reverse_binding,
    hst_slider0_value_binding_7,
    hst_slider1_value_binding_7,
    hst_slider2_value_binding_5,
    hst_slider3_value_binding_3,
    loading_oscillate_speed_binding,
    loading_oscillate_count_binding,
    loading_oscillate_width_binding,
    loading_oscillate_bar_width_binding,
    hst_slider_value_binding_5,
    hst_checkbox_value_binding_5,
    loading_slide_speed_binding,
    loading_slide_reverse_binding,
    hst_slider_value_binding_6,
    hst_checkbox_value_binding_6,
    loading_grow_speed_binding,
    loading_grow_reverse_binding,
    hst_slider_value_binding_7,
    hst_checkbox_value_binding_7,
    loading_shrink_speed_binding,
    loading_shrink_reverse_binding,
    hst_slider0_value_binding_8,
    hst_slider1_value_binding_8,
    hst_slider2_value_binding_6,
    loading_spin_scale_binding,
    loading_spin_speed_binding,
    loading_spin_border_width_binding,
    hst_slider0_value_binding_9,
    hst_slider1_value_binding_9,
    hst_slider2_value_binding_7,
    hst_checkbox_value_binding_8,
    loading_dotspin_count_binding,
    loading_dotspin_speed_binding,
    loading_dotspin_reverse_binding,
    loading_dotspin_r_binding,
    hst_slider0_value_binding_10,
    hst_slider1_value_binding_10,
    hst_checkbox_value_binding_9,
    loading_dotslide_speed_binding,
    loading_dotslide_r_binding,
    loading_dotslide_reverse_binding
  ];
}
class LoadingAnimation_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 }, null, [-1, -1, -1, -1, -1, -1]);
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
  { "id": "src-stories-svg-close-story-svelte", "path": ["SVGs", "Close"], "filePath": "src/stories/SVG/Close.story.svelte", "story": { "id": "src-stories-svg-close-story-svelte", "title": "Close", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ic:round-close", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 0, component: Close_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-close-story-svelte-j1_IZdEh.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-command-story-svelte", "path": ["SVGs", "Command"], "filePath": "src/stories/SVG/Command.story.svelte", "story": { "id": "src-stories-svg-command-story-svelte", "title": "Command", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:command", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 1, component: Command_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-command-story-svelte-_Zuf-K4w.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-dilk-story-svelte", "path": ["SVGs", "Dilk"], "filePath": "src/stories/SVG/Dilk.story.svelte", "story": { "id": "src-stories-svg-dilk-story-svelte", "title": "Dilk", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 2, component: Dilk_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-dilk-story-svelte-MZPLIeir.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-download-story-svelte", "path": ["SVGs", "Download"], "filePath": "src/stories/SVG/Download.story.svelte", "story": { "id": "src-stories-svg-download-story-svelte", "title": "Download", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "tabler:cloud-download", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 3, component: Download_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-download-story-svelte-ZZuOLiBw.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-hotairballoon-story-svelte", "path": ["SVGs", "Hot Air Balloon"], "filePath": "src/stories/SVG/HotAirBalloon.story.svelte", "story": { "id": "src-stories-svg-hotairballoon-story-svelte", "title": "Hot Air Balloon", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "iconoir:hot-air-balloon", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 4, component: HotAirBalloon_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-hotairballoon-story-svelte-DjJGGq2u.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-story-svelte", "path": ["Logo"], "filePath": "src/stories/SVG/Logo.story.svelte", "story": { "id": "src-stories-svg-logo-story-svelte", "title": "Logo", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-svg-logo-story-svelte-0", "title": "Default", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-1", "title": "Flat", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-2", "title": "Animated", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-3", "title": "Infinitely Animated", "icon": "mdi:cog", "iconColor": null }, { "id": "src-stories-svg-logo-story-svelte-4", "title": "Animated With Name", "icon": "mdi:cog", "iconColor": null }] }, "supportPluginId": "svelte4", "index": 5, component: Logo_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-story-svelte-Zel79plO.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-maximize-story-svelte", "path": ["SVGs", "Maximize"], "filePath": "src/stories/SVG/Maximize.story.svelte", "story": { "id": "src-stories-svg-maximize-story-svelte", "title": "Maximize", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "tabler:maximize", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 6, component: Maximize_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-maximize-story-svelte-jAxt3GH-.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-peacediscipline-story-svelte", "path": ["SVGs", "Peace Discipline"], "filePath": "src/stories/SVG/Peacediscipline.story.svelte", "story": { "id": "src-stories-svg-peacediscipline-story-svelte", "title": "Peace Discipline", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 7, component: Peacediscipline_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-peacediscipline-story-svelte-CcZBhX9E.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-warning-story-svelte", "path": ["SVGs", "Warning"], "filePath": "src/stories/SVG/Warning.story.svelte", "story": { "id": "src-stories-svg-warning-story-svelte", "title": "Warning", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "material-symbols:warning-outline-rounded", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 8, component: Warning_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-warning-story-svelte-Jm7f8cAb.js"), true ? [] : void 0) },
  { "id": "src-stories-components-brightnessicon-story-svelte", "path": ["Components", "Brightness Icon"], "filePath": "src/stories/components/BrightnessIcon.story.svelte", "story": { "id": "src-stories-components-brightnessicon-story-svelte", "title": "Brightness Icon", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "zondicons:brightness-up", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 9, component: BrightnessIcon_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-brightnessicon-story-svelte-BUi3DQAU.js"), true ? [] : void 0) },
  { "id": "src-stories-components-burgermenus-story-svelte", "path": ["Components", "Burger Menus"], "filePath": "src/stories/components/BurgerMenus.story.svelte", "story": { "id": "src-stories-components-burgermenus-story-svelte", "title": "Burger Menus", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:menu", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-burgermenus-story-svelte-0", "title": "Circle", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-1", "title": "Cross", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-2", "title": "Fold In", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-3", "title": "Merge", "icon": "material-symbols:menu", "iconColor": null }, { "id": "src-stories-components-burgermenus-story-svelte-4", "title": "Merge Cross", "icon": "material-symbols:menu", "iconColor": null }] }, "supportPluginId": "svelte4", "index": 10, component: BurgerMenus_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-burgermenus-story-svelte-D6x0xop_.js"), true ? [] : void 0) },
  { "id": "src-stories-components-colorinput-story-svelte", "path": ["Components", "Color Input"], "filePath": "src/stories/components/ColorInput.story.svelte", "story": { "id": "src-stories-components-colorinput-story-svelte", "title": "Color Input", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "typcn:input-checked", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 11, component: ColorInput_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-colorinput-story-svelte-t9nVvC10.js"), true ? [] : void 0) },
  { "id": "src-stories-components-colorpicker-story-svelte", "path": ["Components", "Color Picker"], "filePath": "src/stories/components/ColorPicker.story.svelte", "story": { "id": "src-stories-components-colorpicker-story-svelte", "title": "Color Picker", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:eyedropper-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 12, component: ColorPicker_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-colorpicker-story-svelte-BRgzmcCf.js"), true ? [] : void 0) },
  { "id": "src-stories-components-experiment-story-svelte", "path": ["Components", ".Experiment"], "filePath": "src/stories/components/Experiment.story.svelte", "story": { "id": "src-stories-components-experiment-story-svelte", "title": ".Experiment", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "tabler:test-pipe", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 13, component: Experiment_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-experiment-story-svelte-DhLiZCPB.js"), true ? [] : void 0) },
  { "id": "src-stories-components-flipcard-story-svelte", "path": ["Components", "Flip Card"], "filePath": "src/stories/components/FlipCard.story.svelte", "story": { "id": "src-stories-components-flipcard-story-svelte", "title": "Flip Card", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "mdi:card-text-outline", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 14, component: FlipCard_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-flipcard-story-svelte-DmZLpqEv.js"), true ? [] : void 0) },
  { "id": "src-stories-components-input-story-svelte", "path": ["Components", "Input"], "filePath": "src/stories/components/Input.story.svelte", "story": { "id": "src-stories-components-input-story-svelte", "title": "Input", "group": null, "layout": { "type": "grid", "width": "95%" }, "icon": "iconoir:input-field", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-input-story-svelte-0", "title": "Google Style Input", "icon": "iconoir:input-field", "iconColor": null }, { "id": "src-stories-components-input-story-svelte-1", "title": "LastPass Style Input", "icon": "iconoir:input-field", "iconColor": null }] }, "supportPluginId": "svelte4", "index": 15, component: Input_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-input-story-svelte-CMv32IZA.js"), true ? [] : void 0) },
  { "id": "src-stories-components-mouseauracards-story-svelte", "path": ["Components", "Mouse Aura Cards"], "filePath": "src/stories/components/MouseAuraCards.story.svelte", "story": { "id": "src-stories-components-mouseauracards-story-svelte", "title": "Mouse Aura Cards", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "clarity:view-cards-line", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 16, component: MouseAuraCards_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-mouseauracards-story-svelte-CvNqDpVt.js"), true ? [] : void 0) },
  { "id": "src-stories-components-pause-story-svelte", "path": ["Components", "Pause"], "filePath": "src/stories/components/Pause.story.svelte", "story": { "id": "src-stories-components-pause-story-svelte", "title": "Pause", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:pause-outline", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-pause-story-svelte-0", "title": "Morph", "icon": "material-symbols:pause-outline", "iconColor": null }, { "id": "src-stories-components-pause-story-svelte-1", "title": "Rotate", "icon": "material-symbols:pause-outline", "iconColor": null }, { "id": "src-stories-components-pause-story-svelte-2", "title": "Rotate Circle", "icon": "material-symbols:pause-circle", "iconColor": null }] }, "supportPluginId": "svelte4", "index": 17, component: Pause_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-pause-story-svelte-lBzYCxl0.js"), true ? [] : void 0) },
  { "id": "src-stories-components-paymentform-story-svelte", "path": ["Components", "Payment Form"], "filePath": "src/stories/components/PaymentForm.story.svelte", "story": { "id": "src-stories-components-paymentform-story-svelte", "title": "Payment Form", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "bi:credit-card-2-front", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 18, component: PaymentForm_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-paymentform-story-svelte-BLJBnJfN.js"), true ? [] : void 0) },
  { "id": "src-stories-components-sevensegment-story-svelte", "path": ["Components", "7 Segment"], "filePath": "src/stories/components/SevenSegment.story.svelte", "story": { "id": "src-stories-components-sevensegment-story-svelte", "title": "7 Segment", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "ri:number-8", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 19, component: SevenSegment_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-sevensegment-story-svelte-DNnzQR_V.js"), true ? [] : void 0) },
  { "id": "src-stories-components-starfield-story-svelte", "path": ["Canvas", "Starfield"], "filePath": "src/stories/components/Starfield.story.svelte", "story": { "id": "src-stories-components-starfield-story-svelte", "title": "Starfield", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ion:sparkles", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 20, component: Starfield_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-starfield-story-svelte-BfFGBBda.js"), true ? [] : void 0) },
  { "id": "src-stories-components-themetoggles-story-svelte", "path": ["Components", "Theme Toggles"], "filePath": "src/stories/components/ThemeToggles.story.svelte", "story": { "id": "src-stories-components-themetoggles-story-svelte", "title": "Theme Toggles", "group": null, "layout": { "type": "grid" }, "icon": "material-symbols:light-mode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-themetoggles-story-svelte-0", "title": "Spin", "icon": "material-symbols:light-mode", "iconColor": null }, { "id": "src-stories-components-themetoggles-story-svelte-1", "title": "Rise", "icon": "material-symbols:light-mode", "iconColor": null }] }, "supportPluginId": "svelte4", "index": 21, component: ThemeToggles_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-themetoggles-story-svelte-3BOYKepx.js"), true ? [] : void 0) },
  { "id": "src-stories-components-glitch-glitch-story-svelte", "path": ["Components", "Glitch Text"], "filePath": "src/stories/components/Glitch/Glitch.story.svelte", "story": { "id": "src-stories-components-glitch-glitch-story-svelte", "title": "Glitch Text", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "bx:text", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "docsFilePath": "src/stories/components/Glitch/Glitch.story.md", "index": 22, component: Glitch_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-glitch-glitch-story-svelte-BFUdtMG-.js"), true ? [] : void 0) },
  { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "path": ["Loading Animations"], "filePath": "src/stories/components/Loading Animations/LoadingAnimation.story.svelte", "story": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "title": "Loading Animations", "group": null, "layout": { "type": "grid" }, "icon": "mingcute:loading-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-0", "title": "Pie", "icon": "game-icons:swirled-shell", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-1", "title": "DNA", "icon": "tabler:dna", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-2", "title": "Block Shuffle", "icon": "zondicons:view-tile", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-3", "title": "Block Wave", "icon": "fe:tiled", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-4", "title": "Clock", "icon": "ic:baseline-access-time", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-5", "title": "Rotate 1", "icon": "ph:circle-dashed-bold", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-6", "title": "Hourglass", "icon": "ic:round-hourglass-bottom", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-7", "title": "Heart Outline", "icon": "material-symbols:favorite", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-8", "title": "Heart", "icon": "material-symbols:favorite", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-9", "title": "DualBalls", "icon": "ic:baseline-circle", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-10", "title": "Spin Glass", "icon": "ph:hourglass-fill", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-11", "title": "Spin Circles", "icon": "ic:baseline-circle", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-12", "title": "Oscillate", "icon": "cil:audio-spectrum", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-13", "title": "Slide", "icon": "teenyicons:layers-subtract-outline", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-14", "title": "Grow", "icon": "gg:extension", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-15", "title": "Shrink", "icon": "gg:extension", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-16", "title": "Spin", "icon": "mdi:square-circle", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-17", "title": "Dot Spin", "icon": "ion:more", "iconColor": null }, { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte-18", "title": "Dot Slide", "icon": "ion:more", "iconColor": null }] }, "supportPluginId": "svelte4", "docsFilePath": "src/stories/components/Loading Animations/LoadingAnimation.story.md", "index": 23, component: LoadingAnimation_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-components-loading-animations-loadinganimation-story-svelte-DerUgM6h.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Canvas", "children": [{ "title": "Starfield", "index": 20 }] }, { "title": "Components", "children": [{ "title": ".Experiment", "index": 13 }, { "title": "7 Segment", "index": 19 }, { "title": "Brightness Icon", "index": 9 }, { "title": "Burger Menus", "index": 10 }, { "title": "Color Input", "index": 11 }, { "title": "Color Picker", "index": 12 }, { "title": "Flip Card", "index": 14 }, { "title": "Glitch Text", "index": 22 }, { "title": "Input", "index": 15 }, { "title": "Mouse Aura Cards", "index": 16 }, { "title": "Pause", "index": 17 }, { "title": "Payment Form", "index": 18 }, { "title": "Theme Toggles", "index": 21 }] }, { "title": "Loading Animations", "index": 23 }, { "title": "Logo", "index": 5 }, { "title": "SVGs", "children": [{ "title": "Close", "index": 0 }, { "title": "Command", "index": 1 }, { "title": "Dilk", "index": 2 }, { "title": "Download", "index": 3 }, { "title": "Hot Air Balloon", "index": 4 }, { "title": "Maximize", "index": 6 }, { "title": "Peace Discipline", "index": 7 }, { "title": "Warning", "index": 8 }] }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-DWdM2v1Y.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-qzOuEai0.js"), true ? __vite__mapDeps([3,1,2,4,5,6]) : void 0)
    }
  ]
});
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
  "vanilla": () => __vitePreload(() => import("./vendor-Ja7Mn0EQ.js").then((n) => n.bk), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-Ja7Mn0EQ.js").then((n) => n.bl), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
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
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};
