import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as validate_slots, W as element, X as space, Y as attr_dev, Z as add_location, _ as add_render_callback, $ as set_style, a0 as insert_dev, a1 as append_dev, a2 as select_option, a3 as listen_dev, a4 as prop_dev, a5 as noop, a6 as detach_dev, a7 as run_all, a8 as select_value, a9 as binding_callbacks, aa as bind, ab as create_component, ac as mount_component, ad as transition_in, ae as transition_out, af as destroy_component, ag as add_flush_callback, ah as text, ai as set_data_dev, aj as svg_element, ak as create_slot, al as update_slot_base, am as get_all_dirty_from_scope, an as get_slot_changes, ao as bubble, ap as empty, aq as Logo_square, ar as createRouter, as as createWebHistory, at as createWebHashHistory, au as useDark, av as useToggle, k as watch, aw as markRaw, E as reactive, d as defineComponent, r as ref, ax as watchEffect, o as openBlock, q as createBlock, ay as mergeProps, az as resolveDynamicComponent, h as createCommentVNode } from "./vendor-dca8bd66.js";
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
const ColorPicker_svelte_svelte_type_style_lang = "";
const file$b = "src/lib/ColorPicker.svelte";
function create_if_block_3(ctx) {
  let input0;
  let t0;
  let input1;
  let input1_value_value;
  let t1;
  let input2;
  let input2_value_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      input2 = element("input");
      attr_dev(input0, "type", "text");
      attr_dev(input0, "inputmode", "numeric");
      input0.value = /*h*/
      ctx[2];
      attr_dev(input0, "class", "s-LNHmHYmw3TZt");
      add_location(input0, file$b, 222, 5, 6021);
      attr_dev(input1, "type", "text");
      attr_dev(input1, "inputmode", "numeric");
      input1.value = input1_value_value = Math.round(
        /*w*/
        ctx[6]
      );
      attr_dev(input1, "class", "s-LNHmHYmw3TZt");
      add_location(input1, file$b, 230, 5, 6180);
      attr_dev(input2, "type", "text");
      attr_dev(input2, "inputmode", "numeric");
      input2.value = input2_value_value = Math.round(
        /*b*/
        ctx[0]
      );
      attr_dev(input2, "class", "s-LNHmHYmw3TZt");
      add_location(input2, file$b, 238, 5, 6369);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, input1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input2, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            input0,
            "keydown",
            /*hueChanged*/
            ctx[20],
            false,
            false,
            false
          ),
          listen_dev(
            input0,
            "input",
            /*hueInput*/
            ctx[21],
            false,
            false,
            false
          ),
          listen_dev(
            input0,
            "blur",
            /*setHue*/
            ctx[22],
            false,
            false,
            false
          ),
          listen_dev(
            input1,
            "keydown",
            /*whitenessChanged*/
            ctx[26],
            false,
            false,
            false
          ),
          listen_dev(
            input1,
            "input",
            /*whitenessInput*/
            ctx[27],
            false,
            false,
            false
          ),
          listen_dev(
            input1,
            "blur",
            /*setWhiteness*/
            ctx[28],
            false,
            false,
            false
          ),
          listen_dev(
            input2,
            "keydown",
            /*blacknessChanged*/
            ctx[23],
            false,
            false,
            false
          ),
          listen_dev(
            input2,
            "input",
            /*blacknessInput*/
            ctx[24],
            false,
            false,
            false
          ),
          listen_dev(
            input2,
            "blur",
            /*setBlackness*/
            ctx[25],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*h*/
      4 && input0.value !== /*h*/
      ctx2[2]) {
        prop_dev(
          input0,
          "value",
          /*h*/
          ctx2[2]
        );
      }
      if (dirty[0] & /*w*/
      64 && input1_value_value !== (input1_value_value = Math.round(
        /*w*/
        ctx2[6]
      )) && input1.value !== input1_value_value) {
        prop_dev(input1, "value", input1_value_value);
      }
      if (dirty[0] & /*b*/
      1 && input2_value_value !== (input2_value_value = Math.round(
        /*b*/
        ctx2[0]
      )) && input2.value !== input2_value_value) {
        prop_dev(input2, "value", input2_value_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(input1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input2);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(222:34) ",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let input0;
  let t0;
  let input1;
  let t1;
  let input2;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      input2 = element("input");
      attr_dev(input0, "type", "text");
      attr_dev(input0, "inputmode", "numeric");
      input0.value = /*h*/
      ctx[2];
      attr_dev(input0, "class", "s-LNHmHYmw3TZt");
      add_location(input0, file$b, 212, 5, 5739);
      attr_dev(input1, "type", "text");
      attr_dev(input1, "inputmode", "numeric");
      input1.value = /*s*/
      ctx[9];
      attr_dev(input1, "class", "s-LNHmHYmw3TZt");
      add_location(input1, file$b, 219, 5, 5872);
      attr_dev(input2, "type", "text");
      attr_dev(input2, "inputmode", "numeric");
      input2.value = /*l*/
      ctx[8];
      attr_dev(input2, "class", "s-LNHmHYmw3TZt");
      add_location(input2, file$b, 220, 5, 5929);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, input1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input2, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            input0,
            "keydown",
            /*hueChanged*/
            ctx[20],
            false,
            false,
            false
          ),
          listen_dev(
            input0,
            "blur",
            /*setHue*/
            ctx[22],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*h*/
      4 && input0.value !== /*h*/
      ctx2[2]) {
        prop_dev(
          input0,
          "value",
          /*h*/
          ctx2[2]
        );
      }
      if (dirty[0] & /*s*/
      512 && input1.value !== /*s*/
      ctx2[9]) {
        prop_dev(
          input1,
          "value",
          /*s*/
          ctx2[9]
        );
      }
      if (dirty[0] & /*l*/
      256 && input2.value !== /*l*/
      ctx2[8]) {
        prop_dev(
          input2,
          "value",
          /*l*/
          ctx2[8]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(input1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input2);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(212:34) ",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let input0;
  let t0;
  let input1;
  let t1;
  let input2;
  const block = {
    c: function create() {
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      input2 = element("input");
      attr_dev(input0, "type", "text");
      attr_dev(input0, "inputmode", "numeric");
      input0.value = /*red*/
      ctx[12];
      attr_dev(input0, "class", "s-LNHmHYmw3TZt");
      add_location(input0, file$b, 208, 5, 5524);
      attr_dev(input1, "type", "text");
      attr_dev(input1, "inputmode", "numeric");
      input1.value = /*green*/
      ctx[11];
      attr_dev(input1, "class", "s-LNHmHYmw3TZt");
      add_location(input1, file$b, 209, 5, 5583);
      attr_dev(input2, "type", "text");
      attr_dev(input2, "inputmode", "numeric");
      input2.value = /*blue*/
      ctx[10];
      attr_dev(input2, "class", "s-LNHmHYmw3TZt");
      add_location(input2, file$b, 210, 5, 5644);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, input1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*red*/
      4096 && input0.value !== /*red*/
      ctx2[12]) {
        prop_dev(
          input0,
          "value",
          /*red*/
          ctx2[12]
        );
      }
      if (dirty[0] & /*green*/
      2048 && input1.value !== /*green*/
      ctx2[11]) {
        prop_dev(
          input1,
          "value",
          /*green*/
          ctx2[11]
        );
      }
      if (dirty[0] & /*blue*/
      1024 && input2.value !== /*blue*/
      ctx2[10]) {
        prop_dev(
          input2,
          "value",
          /*blue*/
          ctx2[10]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(input1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(208:34) ",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let input;
  const block = {
    c: function create() {
      input = element("input");
      attr_dev(input, "class", "hex s-LNHmHYmw3TZt");
      attr_dev(input, "type", "text");
      input.value = /*value*/
      ctx[3];
      add_location(input, file$b, 206, 5, 5442);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*value*/
      8 && input.value !== /*value*/
      ctx2[3]) {
        prop_dev(
          input,
          "value",
          /*value*/
          ctx2[3]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: '(206:4) {#if colorType === \\"hex\\"}',
    ctx
  });
  return block;
}
function create_fragment$d(ctx) {
  let div9;
  let div0;
  let t0;
  let div5;
  let div1;
  let t1;
  let div4;
  let div2;
  let t2;
  let div3;
  let t3;
  let div8;
  let div7;
  let select;
  let option0;
  let option1;
  let option2;
  let option3;
  let t8;
  let div6;
  let t9;
  let input;
  let input_value_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*colorType*/
      ctx2[5] === "hex"
    )
      return create_if_block;
    if (
      /*colorType*/
      ctx2[5] === "rgb"
    )
      return create_if_block_1;
    if (
      /*colorType*/
      ctx2[5] === "hsl"
    )
      return create_if_block_2;
    if (
      /*colorType*/
      ctx2[5] === "hwb"
    )
      return create_if_block_3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  const block = {
    c: function create() {
      div9 = element("div");
      div0 = element("div");
      t0 = space();
      div5 = element("div");
      div1 = element("div");
      t1 = space();
      div4 = element("div");
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      t3 = space();
      div8 = element("div");
      div7 = element("div");
      select = element("select");
      option0 = element("option");
      option0.textContent = "Hex";
      option1 = element("option");
      option1.textContent = "RGB";
      option2 = element("option");
      option2.textContent = "HSL";
      option3 = element("option");
      option3.textContent = "HWB";
      t8 = space();
      div6 = element("div");
      if (if_block)
        if_block.c();
      t9 = space();
      input = element("input");
      attr_dev(div0, "class", "select-wb s-LNHmHYmw3TZt");
      add_location(div0, file$b, 188, 1, 4890);
      attr_dev(div1, "class", "color s-LNHmHYmw3TZt");
      add_location(div1, file$b, 190, 2, 4966);
      attr_dev(div2, "class", "slider hue s-LNHmHYmw3TZt");
      add_location(div2, file$b, 192, 3, 5024);
      attr_dev(div3, "class", "slider alpha s-LNHmHYmw3TZt");
      add_location(div3, file$b, 193, 3, 5079);
      attr_dev(div4, "class", "slider-container s-LNHmHYmw3TZt");
      add_location(div4, file$b, 191, 2, 4990);
      attr_dev(div5, "class", "controls s-LNHmHYmw3TZt");
      add_location(div5, file$b, 189, 1, 4941);
      option0.__value = "hex";
      option0.value = option0.__value;
      add_location(option0, file$b, 199, 4, 5226);
      option1.__value = "rgb";
      option1.value = option1.__value;
      add_location(option1, file$b, 200, 4, 5263);
      option2.__value = "hsl";
      option2.value = option2.__value;
      add_location(option2, file$b, 201, 4, 5300);
      option3.__value = "hwb";
      option3.value = option3.__value;
      add_location(option3, file$b, 202, 4, 5337);
      attr_dev(select, "class", "s-LNHmHYmw3TZt");
      if (
        /*colorType*/
        ctx[5] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[30].call(select)
        ));
      add_location(select, file$b, 198, 3, 5190);
      attr_dev(input, "type", "text");
      attr_dev(input, "inputmode", "numeric");
      input.value = input_value_value = /*displayAlpha*/
      ctx[7] + "%";
      attr_dev(input, "class", "s-LNHmHYmw3TZt");
      add_location(input, file$b, 247, 4, 6567);
      attr_dev(div6, "class", "values s-LNHmHYmw3TZt");
      add_location(div6, file$b, 204, 3, 5386);
      attr_dev(div7, "class", "value-input s-LNHmHYmw3TZt");
      add_location(div7, file$b, 197, 2, 5161);
      add_location(div8, file$b, 196, 1, 5153);
      attr_dev(div9, "class", "color-picker s-LNHmHYmw3TZt");
      set_style(
        div9,
        "--hue",
        /*h*/
        ctx[2]
      );
      set_style(
        div9,
        "--whiteness",
        /*w*/
        ctx[6]
      );
      set_style(
        div9,
        "--blackness",
        /*b*/
        ctx[0]
      );
      set_style(
        div9,
        "--alpha",
        /*a*/
        ctx[4]
      );
      set_style(
        div9,
        "--max-whiteness",
        /*max_w*/
        ctx[1]
      );
      add_location(div9, file$b, 180, 0, 4747);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div9, anchor);
      append_dev(div9, div0);
      append_dev(div9, t0);
      append_dev(div9, div5);
      append_dev(div5, div1);
      append_dev(div5, t1);
      append_dev(div5, div4);
      append_dev(div4, div2);
      append_dev(div4, t2);
      append_dev(div4, div3);
      append_dev(div9, t3);
      append_dev(div9, div8);
      append_dev(div8, div7);
      append_dev(div7, select);
      append_dev(select, option0);
      append_dev(select, option1);
      append_dev(select, option2);
      append_dev(select, option3);
      select_option(
        select,
        /*colorType*/
        ctx[5]
      );
      append_dev(div7, t8);
      append_dev(div7, div6);
      if (if_block)
        if_block.m(div6, null);
      append_dev(div6, t9);
      append_dev(div6, input);
      if (!mounted) {
        dispose = [
          listen_dev(
            window,
            "mouseup",
            /*selectEnd*/
            ctx[17],
            false,
            false,
            false
          ),
          listen_dev(
            window,
            "mousemove",
            /*selectMove*/
            ctx[16],
            false,
            false,
            false
          ),
          listen_dev(
            div0,
            "mousedown",
            /*selectWB*/
            ctx[13],
            false,
            false,
            false
          ),
          listen_dev(
            div2,
            "mousedown",
            /*selectHue*/
            ctx[14],
            false,
            false,
            false
          ),
          listen_dev(
            div3,
            "mousedown",
            /*selectAlpha*/
            ctx[15],
            false,
            false,
            false
          ),
          listen_dev(
            select,
            "change",
            /*select_change_handler*/
            ctx[30]
          ),
          listen_dev(
            input,
            "keydown",
            /*alphaChanged*/
            ctx[18],
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*setAlpha*/
            ctx[19],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*colorType*/
      32) {
        select_option(
          select,
          /*colorType*/
          ctx2[5]
        );
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div6, t9);
        }
      }
      if (dirty[0] & /*displayAlpha*/
      128 && input_value_value !== (input_value_value = /*displayAlpha*/
      ctx2[7] + "%") && input.value !== input_value_value) {
        prop_dev(input, "value", input_value_value);
      }
      if (dirty[0] & /*h*/
      4) {
        set_style(
          div9,
          "--hue",
          /*h*/
          ctx2[2]
        );
      }
      if (dirty[0] & /*w*/
      64) {
        set_style(
          div9,
          "--whiteness",
          /*w*/
          ctx2[6]
        );
      }
      if (dirty[0] & /*b*/
      1) {
        set_style(
          div9,
          "--blackness",
          /*b*/
          ctx2[0]
        );
      }
      if (dirty[0] & /*a*/
      16) {
        set_style(
          div9,
          "--alpha",
          /*a*/
          ctx2[4]
        );
      }
      if (dirty[0] & /*max_w*/
      2) {
        set_style(
          div9,
          "--max-whiteness",
          /*max_w*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div9);
      if (if_block) {
        if_block.d();
      }
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
function roundTo(num, places) {
  const factor = Math.pow(10, places);
  return Math.round(num * factor) / factor;
}
function clamp(min, num, max) {
  return Math.min(Math.max(num, min), max);
}
function instance$d($$self, $$props, $$invalidate) {
  let red;
  let green;
  let blue;
  let a;
  let displayAlpha;
  let s;
  let l;
  let w;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ColorPicker", slots, []);
  let { value = "#f00" } = $$props;
  let { alpha = 100 } = $$props;
  let { h = 200 } = $$props;
  let { b = 0 } = $$props;
  let { max_w = 100 } = $$props;
  let colorType = "hwb";
  let selectingWB = false;
  let wbBCR;
  function selectWB(e) {
    wbBCR = e.currentTarget.getBoundingClientRect();
    $$invalidate(1, max_w = Math.round(100 - (e.clientX - wbBCR.x) / wbBCR.width * 100));
    $$invalidate(0, b = Math.round((e.clientY - wbBCR.y) / wbBCR.height * 100));
    selectingWB = true;
  }
  let selectingHue = false;
  let hueBCR;
  function selectHue(e) {
    hueBCR = e.currentTarget.getBoundingClientRect();
    $$invalidate(2, h = Math.round((e.clientX - hueBCR.x) / hueBCR.width * 360));
    selectingHue = true;
  }
  let selectingAlpha = false;
  let alphaBCR;
  function selectAlpha(e) {
    alphaBCR = e.currentTarget.getBoundingClientRect();
    $$invalidate(29, alpha = Math.round((e.clientX - alphaBCR.x) / alphaBCR.width * 100));
    selectingAlpha = true;
  }
  function selectMove(e) {
    if (selectingWB) {
      $$invalidate(1, max_w = clamp(0, 100 - (e.clientX - wbBCR.x) / wbBCR.width * 100, 100));
      $$invalidate(0, b = clamp(0, Math.round((e.clientY - wbBCR.y) / wbBCR.height * 100), 100));
    } else if (selectingHue) {
      $$invalidate(2, h = clamp(0, Math.round((e.clientX - hueBCR.x) / hueBCR.width * 360), 360));
    } else if (selectingAlpha) {
      $$invalidate(29, alpha = clamp(0, Math.round((e.clientX - alphaBCR.x) / alphaBCR.width * 100), 100));
    }
  }
  function selectEnd() {
    selectingWB = false;
    selectingHue = false;
    selectingAlpha = false;
  }
  function alphaChanged(e) {
    if (e.key === "ArrowUp") {
      $$invalidate(7, displayAlpha = clamp(0, displayAlpha + 1, 100));
    } else if (e.key === "ArrowDown") {
      $$invalidate(7, displayAlpha = clamp(0, displayAlpha - 1, 100));
    } else if (e.key === "Enter") {
      e.currentTarget.blur();
    }
    $$invalidate(4, a = displayAlpha / 100);
  }
  function setAlpha(e) {
    if (e.currentTarget.value === "" || e.currentTarget.value === "%") {
      $$invalidate(7, displayAlpha = 0);
    } else if (e.currentTarget.value.endsWith("%")) {
      if (!isNaN(+e.currentTarget.value.slice(0, -1))) {
        $$invalidate(7, displayAlpha = clamp(0, +e.currentTarget.value.slice(0, -1), 100));
      } else {
        e.currentTarget.value = displayAlpha + "%";
      }
    } else {
      if (!isNaN(+e.currentTarget.value)) {
        $$invalidate(7, displayAlpha = clamp(0, +e.currentTarget.value, 100));
      }
      e.currentTarget.value = displayAlpha + "%";
    }
    $$invalidate(4, a = displayAlpha / 100);
  }
  function hueChanged(e) {
    if (e.key === "ArrowUp") {
      $$invalidate(2, h = clamp(0, h + 1, 360));
    } else if (e.key === "ArrowDown") {
      $$invalidate(2, h = clamp(0, h - 1, 360));
    } else if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  }
  function hueInput(e) {
    if (!isNaN(+e.currentTarget.value)) {
      $$invalidate(2, h = clamp(0, +e.currentTarget.value, 360));
    }
    e.currentTarget.value = String(h);
  }
  function setHue(e) {
    if (e.currentTarget.value === "") {
      $$invalidate(2, h = 0);
    } else {
      if (!isNaN(+e.currentTarget.value)) {
        $$invalidate(2, h = clamp(0, +e.currentTarget.value, 360));
      }
      e.currentTarget.value = String(h);
    }
  }
  function blacknessChanged(e) {
    if (e.key === "ArrowUp") {
      $$invalidate(0, b = clamp(0, b + 1, 100));
    } else if (e.key === "ArrowDown") {
      $$invalidate(0, b = clamp(0, b - 1, 100));
    } else if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  }
  function blacknessInput(e) {
    if (!isNaN(+e.currentTarget.value)) {
      $$invalidate(0, b = clamp(0, +e.currentTarget.value, 100));
    }
    e.currentTarget.value = String(b);
  }
  function setBlackness(e) {
    if (e.currentTarget.value === "") {
      $$invalidate(0, b = 0);
    } else {
      if (!isNaN(+e.currentTarget.value)) {
        $$invalidate(0, b = clamp(0, +e.currentTarget.value, 100));
      }
      e.currentTarget.value = String(b);
    }
  }
  function whitenessChanged(e) {
    if (e.key === "ArrowUp") {
      if (max_w === 100) {
        $$invalidate(0, b = clamp(0, b - 1, 100));
      }
      $$invalidate(6, w = clamp(0, w + 1, 100));
    } else if (e.key === "ArrowDown") {
      $$invalidate(6, w = clamp(0, w - 1, 100));
    } else if (e.key === "Enter") {
      e.currentTarget.blur();
    }
    $$invalidate(1, max_w = clamp(0, 100 * w / (100 - b), 100));
  }
  function whitenessInput(e) {
    if (!isNaN(+e.currentTarget.value)) {
      $$invalidate(6, w = clamp(0, +e.currentTarget.value, 100));
    }
    e.currentTarget.value = String(w);
    $$invalidate(1, max_w = clamp(0, 100 * w / (100 - b), 100));
  }
  function setWhiteness(e) {
    if (e.currentTarget.value === "") {
      $$invalidate(6, w = 0);
    } else {
      if (!isNaN(+e.currentTarget.value)) {
        $$invalidate(6, w = clamp(0, +e.currentTarget.value, 100));
      }
      e.currentTarget.value = String(w);
    }
    $$invalidate(1, max_w = clamp(0, 100 * w / (100 - b), 100));
  }
  const writable_props = ["value", "alpha", "h", "b", "max_w"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ColorPicker> was created with unknown prop '${key}'`);
  });
  function select_change_handler() {
    colorType = select_value(this);
    $$invalidate(5, colorType);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("alpha" in $$props2)
      $$invalidate(29, alpha = $$props2.alpha);
    if ("h" in $$props2)
      $$invalidate(2, h = $$props2.h);
    if ("b" in $$props2)
      $$invalidate(0, b = $$props2.b);
    if ("max_w" in $$props2)
      $$invalidate(1, max_w = $$props2.max_w);
  };
  $$self.$capture_state = () => ({
    value,
    alpha,
    h,
    b,
    max_w,
    colorType,
    roundTo,
    clamp,
    selectingWB,
    wbBCR,
    selectWB,
    selectingHue,
    hueBCR,
    selectHue,
    selectingAlpha,
    alphaBCR,
    selectAlpha,
    selectMove,
    selectEnd,
    alphaChanged,
    setAlpha,
    hueChanged,
    hueInput,
    setHue,
    blacknessChanged,
    blacknessInput,
    setBlackness,
    whitenessChanged,
    whitenessInput,
    setWhiteness,
    w,
    displayAlpha,
    a,
    l,
    s,
    blue,
    green,
    red
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("alpha" in $$props2)
      $$invalidate(29, alpha = $$props2.alpha);
    if ("h" in $$props2)
      $$invalidate(2, h = $$props2.h);
    if ("b" in $$props2)
      $$invalidate(0, b = $$props2.b);
    if ("max_w" in $$props2)
      $$invalidate(1, max_w = $$props2.max_w);
    if ("colorType" in $$props2)
      $$invalidate(5, colorType = $$props2.colorType);
    if ("selectingWB" in $$props2)
      selectingWB = $$props2.selectingWB;
    if ("wbBCR" in $$props2)
      wbBCR = $$props2.wbBCR;
    if ("selectingHue" in $$props2)
      selectingHue = $$props2.selectingHue;
    if ("hueBCR" in $$props2)
      hueBCR = $$props2.hueBCR;
    if ("selectingAlpha" in $$props2)
      selectingAlpha = $$props2.selectingAlpha;
    if ("alphaBCR" in $$props2)
      alphaBCR = $$props2.alphaBCR;
    if ("w" in $$props2)
      $$invalidate(6, w = $$props2.w);
    if ("displayAlpha" in $$props2)
      $$invalidate(7, displayAlpha = $$props2.displayAlpha);
    if ("a" in $$props2)
      $$invalidate(4, a = $$props2.a);
    if ("l" in $$props2)
      $$invalidate(8, l = $$props2.l);
    if ("s" in $$props2)
      $$invalidate(9, s = $$props2.s);
    if ("blue" in $$props2)
      $$invalidate(10, blue = $$props2.blue);
    if ("green" in $$props2)
      $$invalidate(11, green = $$props2.green);
    if ("red" in $$props2)
      $$invalidate(12, red = $$props2.red);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*alpha*/
    536870912) {
      $$invalidate(4, a = alpha / 100);
    }
    if ($$self.$$.dirty[0] & /*a*/
    16) {
      $$invalidate(7, displayAlpha = Math.round(a * 100));
    }
    if ($$self.$$.dirty[0] & /*b, max_w*/
    3) {
      $$invalidate(6, w = (100 - b) * 0.01 * max_w);
    }
  };
  $$invalidate(12, red = 255);
  $$invalidate(11, green = 0);
  $$invalidate(10, blue = 0);
  $$invalidate(9, s = 0);
  $$invalidate(8, l = 50);
  return [
    b,
    max_w,
    h,
    value,
    a,
    colorType,
    w,
    displayAlpha,
    l,
    s,
    blue,
    green,
    red,
    selectWB,
    selectHue,
    selectAlpha,
    selectMove,
    selectEnd,
    alphaChanged,
    setAlpha,
    hueChanged,
    hueInput,
    setHue,
    blacknessChanged,
    blacknessInput,
    setBlackness,
    whitenessChanged,
    whitenessInput,
    setWhiteness,
    alpha,
    select_change_handler
  ];
}
class ColorPicker extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$d,
      create_fragment$d,
      safe_not_equal,
      {
        value: 3,
        alpha: 29,
        h: 2,
        b: 0,
        max_w: 1
      },
      null,
      [-1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker",
      options,
      id: create_fragment$d.name
    });
  }
  get value() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get alpha() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set alpha(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get h() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set h(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get b() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set b(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max_w() {
    throw new Error("<ColorPicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max_w(value) {
    throw new Error("<ColorPicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$a(ctx) {
  let colorpicker;
  let updating_h;
  let updating_b;
  let updating_max_w;
  let updating_alpha;
  let current;
  function colorpicker_h_binding(value) {
    ctx[9](value);
  }
  function colorpicker_b_binding(value) {
    ctx[10](value);
  }
  function colorpicker_max_w_binding(value) {
    ctx[11](value);
  }
  function colorpicker_alpha_binding(value) {
    ctx[12](value);
  }
  let colorpicker_props = {};
  if (
    /*h*/
    ctx[1] !== void 0
  ) {
    colorpicker_props.h = /*h*/
    ctx[1];
  }
  if (
    /*b*/
    ctx[2] !== void 0
  ) {
    colorpicker_props.b = /*b*/
    ctx[2];
  }
  if (
    /*max_w*/
    ctx[3] !== void 0
  ) {
    colorpicker_props.max_w = /*max_w*/
    ctx[3];
  }
  if (
    /*alpha*/
    ctx[4] !== void 0
  ) {
    colorpicker_props.alpha = /*alpha*/
    ctx[4];
  }
  colorpicker = new ColorPicker({ props: colorpicker_props, $$inline: true });
  binding_callbacks.push(() => bind(colorpicker, "h", colorpicker_h_binding));
  binding_callbacks.push(() => bind(colorpicker, "b", colorpicker_b_binding));
  binding_callbacks.push(() => bind(colorpicker, "max_w", colorpicker_max_w_binding));
  binding_callbacks.push(() => bind(colorpicker, "alpha", colorpicker_alpha_binding));
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
      if (!updating_h && dirty & /*h*/
      2) {
        updating_h = true;
        colorpicker_changes.h = /*h*/
        ctx2[1];
        add_flush_callback(() => updating_h = false);
      }
      if (!updating_b && dirty & /*b*/
      4) {
        updating_b = true;
        colorpicker_changes.b = /*b*/
        ctx2[2];
        add_flush_callback(() => updating_b = false);
      }
      if (!updating_max_w && dirty & /*max_w*/
      8) {
        updating_max_w = true;
        colorpicker_changes.max_w = /*max_w*/
        ctx2[3];
        add_flush_callback(() => updating_max_w = false);
      }
      if (!updating_alpha && dirty & /*alpha*/
      16) {
        updating_alpha = true;
        colorpicker_changes.alpha = /*alpha*/
        ctx2[4];
        add_flush_callback(() => updating_alpha = false);
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
    id: create_default_slot$a.name,
    type: "slot",
    source: '(10:0) <Hst.Story title=\\"Components/Color Picker\\" icon=\\"ph:eyedropper-fill\\">',
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
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
  function hst_slider0_value_binding(value) {
    ctx[5](value);
  }
  let hst_slider0_props = { title: "Hue", min: 0, max: 360 };
  if (
    /*h*/
    ctx[1] !== void 0
  ) {
    hst_slider0_props.value = /*h*/
    ctx[1];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[6](value);
  }
  let hst_slider1_props = { title: "Max Whiteness", min: 0, max: 100 };
  if (
    /*max_w*/
    ctx[3] !== void 0
  ) {
    hst_slider1_props.value = /*max_w*/
    ctx[3];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  function hst_slider2_value_binding(value) {
    ctx[7](value);
  }
  let hst_slider2_props = { title: "Blackness", min: 0, max: 100 };
  if (
    /*b*/
    ctx[2] !== void 0
  ) {
    hst_slider2_props.value = /*b*/
    ctx[2];
  }
  hst_slider2 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider2, "value", hst_slider2_value_binding));
  function hst_slider3_value_binding(value) {
    ctx[8](value);
  }
  let hst_slider3_props = { title: "Alpha", min: 0, max: 100 };
  if (
    /*alpha*/
    ctx[4] !== void 0
  ) {
    hst_slider3_props.value = /*alpha*/
    ctx[4];
  }
  hst_slider3 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider3, "value", hst_slider3_value_binding));
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
      if (!updating_value && dirty & /*h*/
      2) {
        updating_value = true;
        hst_slider0_changes.value = /*h*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty & /*max_w*/
      8) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*max_w*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
      const hst_slider2_changes = {};
      if (!updating_value_2 && dirty & /*b*/
      4) {
        updating_value_2 = true;
        hst_slider2_changes.value = /*b*/
        ctx2[2];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_slider2.$set(hst_slider2_changes);
      const hst_slider3_changes = {};
      if (!updating_value_3 && dirty & /*alpha*/
      16) {
        updating_value_3 = true;
        hst_slider3_changes.value = /*alpha*/
        ctx2[4];
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
function create_fragment$c(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Components/Color Picker",
      icon: "ph:eyedropper-fill",
      $$slots: {
        controls: [create_controls_slot$4],
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
      if (dirty & /*$$scope, alpha, b, max_w, h*/
      16414) {
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
  validate_slots("ColorPicker_story", slots, []);
  let { Hst } = $$props;
  let h = 0;
  let w = 0;
  let b = 0;
  let max_w = 100;
  let alpha = 100;
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
  function hst_slider0_value_binding(value) {
    h = value;
    $$invalidate(1, h);
  }
  function hst_slider1_value_binding(value) {
    max_w = value;
    $$invalidate(3, max_w);
  }
  function hst_slider2_value_binding(value) {
    b = value;
    $$invalidate(2, b);
  }
  function hst_slider3_value_binding(value) {
    alpha = value;
    $$invalidate(4, alpha);
  }
  function colorpicker_h_binding(value) {
    h = value;
    $$invalidate(1, h);
  }
  function colorpicker_b_binding(value) {
    b = value;
    $$invalidate(2, b);
  }
  function colorpicker_max_w_binding(value) {
    max_w = value;
    $$invalidate(3, max_w);
  }
  function colorpicker_alpha_binding(value) {
    alpha = value;
    $$invalidate(4, alpha);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ColorPicker, Hst, h, w, b, max_w, alpha });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("h" in $$props2)
      $$invalidate(1, h = $$props2.h);
    if ("w" in $$props2)
      w = $$props2.w;
    if ("b" in $$props2)
      $$invalidate(2, b = $$props2.b);
    if ("max_w" in $$props2)
      $$invalidate(3, max_w = $$props2.max_w);
    if ("alpha" in $$props2)
      $$invalidate(4, alpha = $$props2.alpha);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    h,
    b,
    max_w,
    alpha,
    hst_slider0_value_binding,
    hst_slider1_value_binding,
    hst_slider2_value_binding,
    hst_slider3_value_binding,
    colorpicker_h_binding,
    colorpicker_b_binding,
    colorpicker_max_w_binding,
    colorpicker_alpha_binding
  ];
}
class ColorPicker_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ColorPicker_story",
      options,
      id: create_fragment$c.name
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
const file$a = "src/components/Glitch.svelte";
function create_fragment$b(ctx) {
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
      add_location(span, file$a, 32, 0, 816);
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
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      text: 2,
      iteration_factor: 3,
      flash_duration: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch",
      options,
      id: create_fragment$b.name
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
function create_default_slot$9(ctx) {
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
    id: create_default_slot$9.name,
    type: "slot",
    source: '(8:0) <Hst.Story title=\\"Components/Glitch Text\\" icon=\\"bx:text\\">',
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
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
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(10:1) <svelte:fragment slot=\\"controls\\">',
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
      title: "Components/Glitch Text",
      icon: "bx:text",
      $$slots: {
        controls: [create_controls_slot$3],
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
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
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
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Glitch_story",
      options,
      id: create_fragment$a.name
    });
  }
  get Hst() {
    throw new Error("<Glitch_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Glitch_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$9 = "src/stories/SVG/Command.story.svelte";
function create_default_slot$8(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z");
      add_location(path, file$9, 10, 2, 514);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 19 19");
      attr_dev(svg, "fill-rule", "evenodd");
      add_location(svg, file$9, 9, 1, 417);
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
    id: create_default_slot$8.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Command\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$9(ctx) {
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
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
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
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Command_story",
      options,
      id: create_fragment$9.name
    });
  }
  get Hst() {
    throw new Error("<Command_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Command_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$8 = "src/stories/SVG/Dilk.story.svelte";
function create_default_slot$7(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z");
      add_location(path, file$8, 10, 2, 323);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 6 6");
      add_location(svg, file$8, 9, 1, 248);
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
    id: create_default_slot$7.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"SVGs/Dilk\\" icon=\\"lucide:image\\" {source}>',
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
      title: "SVGs/Dilk",
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
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
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
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Dilk_story",
      options,
      id: create_fragment$8.name
    });
  }
  get Hst() {
    throw new Error("<Dilk_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Dilk_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$7 = "src/stories/SVG/Maximize.story.svelte";
function create_default_slot$6(ctx) {
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
      add_location(style, file$7, 23, 2, 786);
      attr_dev(path0, "class", "tl");
      attr_dev(path0, "d", "M10,10h30v10h-20v20h-10z");
      add_location(path0, file$7, 45, 2, 1139);
      attr_dev(path1, "class", "tr");
      attr_dev(path1, "d", "M60,10 h30v30h-10v-20h-20z");
      add_location(path1, file$7, 46, 2, 1190);
      attr_dev(path2, "class", "bl");
      attr_dev(path2, "d", "M10,60v30h30v-10h-20v-20z");
      add_location(path2, file$7, 47, 2, 1243);
      attr_dev(path3, "class", "br");
      attr_dev(path3, "d", "M80,60h10v30h-30v-10h20z");
      add_location(path3, file$7, 48, 2, 1295);
      attr_dev(svg, "height", "95vh");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 100 100");
      add_location(svg, file$7, 22, 1, 707);
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
    id: create_default_slot$6.name,
    type: "slot",
    source: '(22:0) <Hst.Story title=\\"SVGs/Maximize\\" icon=\\"lucide:image\\" {source}>',
    ctx
  });
  return block;
}
function create_fragment$7(ctx) {
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
      $$slots: { default: [create_default_slot$6] },
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
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Maximize_story",
      options,
      id: create_fragment$7.name
    });
  }
  get Hst() {
    throw new Error("<Maximize_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Maximize_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$6 = "src/stories/SVG/Peacediscipline.story.svelte";
function create_default_slot$5(ctx) {
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
      add_location(circle0, file$6, 42, 2, 1483);
      attr_dev(circle1, "r", "46");
      attr_dev(circle1, "cx", "684");
      attr_dev(circle1, "cy", "349");
      add_location(circle1, file$6, 43, 2, 1522);
      attr_dev(circle2, "r", "32");
      attr_dev(circle2, "cx", "676");
      attr_dev(circle2, "cy", "260");
      add_location(circle2, file$6, 44, 2, 1560);
      attr_dev(circle3, "r", "64");
      attr_dev(circle3, "cx", "577");
      attr_dev(circle3, "cy", "223");
      add_location(circle3, file$6, 45, 2, 1598);
      attr_dev(circle4, "r", "32");
      attr_dev(circle4, "cx", "492");
      attr_dev(circle4, "cy", "288");
      add_location(circle4, file$6, 46, 2, 1636);
      attr_dev(circle5, "r", "38");
      attr_dev(circle5, "cx", "483");
      attr_dev(circle5, "cy", "155");
      add_location(circle5, file$6, 47, 2, 1674);
      attr_dev(circle6, "r", "79");
      attr_dev(circle6, "cx", "372");
      attr_dev(circle6, "cy", "219");
      add_location(circle6, file$6, 48, 2, 1712);
      attr_dev(circle7, "r", "38");
      attr_dev(circle7, "cx", "325");
      attr_dev(circle7, "cy", "337");
      add_location(circle7, file$6, 49, 2, 1750);
      attr_dev(circle8, "r", "46");
      attr_dev(circle8, "cx", "378");
      attr_dev(circle8, "cy", "417");
      add_location(circle8, file$6, 50, 2, 1788);
      attr_dev(circle9, "r", "14");
      attr_dev(circle9, "cx", "338");
      attr_dev(circle9, "cy", "503");
      add_location(circle9, file$6, 51, 2, 1826);
      attr_dev(circle10, "r", "34");
      attr_dev(circle10, "cx", "262");
      attr_dev(circle10, "cy", "491");
      add_location(circle10, file$6, 52, 2, 1864);
      attr_dev(circle11, "r", "14");
      attr_dev(circle11, "cx", "213");
      attr_dev(circle11, "cy", "439");
      add_location(circle11, file$6, 53, 2, 1902);
      attr_dev(circle12, "r", "23");
      attr_dev(circle12, "cx", "164");
      attr_dev(circle12, "cy", "472");
      add_location(circle12, file$6, 54, 2, 1940);
      attr_dev(circle13, "r", "34");
      attr_dev(circle13, "cx", "109");
      attr_dev(circle13, "cy", "412");
      add_location(circle13, file$6, 55, 2, 1978);
      attr_dev(circle14, "r", "14");
      attr_dev(circle14, "cx", "170");
      attr_dev(circle14, "cy", "386");
      add_location(circle14, file$6, 56, 2, 2016);
      attr_dev(circle15, "r", "23");
      attr_dev(circle15, "cx", "197");
      attr_dev(circle15, "cy", "334");
      add_location(circle15, file$6, 57, 2, 2054);
      attr_dev(circle16, "r", "14");
      attr_dev(circle16, "cx", "150");
      attr_dev(circle16, "cy", "313");
      add_location(circle16, file$6, 58, 2, 2092);
      attr_dev(circle17, "r", "14");
      attr_dev(circle17, "cx", "97");
      attr_dev(circle17, "cy", "317");
      add_location(circle17, file$6, 59, 2, 2130);
      attr_dev(circle18, "r", "34");
      attr_dev(circle18, "cx", "34");
      attr_dev(circle18, "cy", "303");
      add_location(circle18, file$6, 60, 2, 2167);
      attr_dev(circle19, "r", "14");
      attr_dev(circle19, "cx", "62");
      attr_dev(circle19, "cy", "252");
      add_location(circle19, file$6, 61, 2, 2204);
      attr_dev(circle20, "r", "14");
      attr_dev(circle20, "cx", "203");
      attr_dev(circle20, "cy", "259");
      add_location(circle20, file$6, 62, 2, 2241);
      attr_dev(circle21, "r", "14");
      attr_dev(circle21, "cx", "139");
      attr_dev(circle21, "cy", "248");
      add_location(circle21, file$6, 63, 2, 2279);
      attr_dev(circle22, "r", "14");
      attr_dev(circle22, "cx", "185");
      attr_dev(circle22, "cy", "212");
      add_location(circle22, file$6, 64, 2, 2317);
      attr_dev(circle23, "r", "34");
      attr_dev(circle23, "cx", "93");
      attr_dev(circle23, "cy", "156");
      add_location(circle23, file$6, 65, 2, 2355);
      attr_dev(circle24, "r", "14");
      attr_dev(circle24, "cx", "155");
      attr_dev(circle24, "cy", "162");
      add_location(circle24, file$6, 66, 2, 2392);
      attr_dev(circle25, "r", "14");
      attr_dev(circle25, "cx", "222");
      attr_dev(circle25, "cy", "148");
      add_location(circle25, file$6, 67, 2, 2430);
      attr_dev(circle26, "r", "14");
      attr_dev(circle26, "cx", "182");
      attr_dev(circle26, "cy", "103");
      add_location(circle26, file$6, 68, 2, 2468);
      attr_dev(circle27, "r", "14");
      attr_dev(circle27, "cx", "248");
      attr_dev(circle27, "cy", "98");
      add_location(circle27, file$6, 69, 2, 2506);
      attr_dev(circle28, "r", "34");
      attr_dev(circle28, "cx", "304");
      attr_dev(circle28, "cy", "66");
      add_location(circle28, file$6, 70, 2, 2543);
      attr_dev(circle29, "r", "14");
      attr_dev(circle29, "cx", "359");
      attr_dev(circle29, "cy", "33");
      add_location(circle29, file$6, 71, 2, 2580);
      attr_dev(circle30, "r", "14");
      attr_dev(circle30, "cx", "405");
      attr_dev(circle30, "cy", "53");
      add_location(circle30, file$6, 72, 2, 2617);
      attr_dev(circle31, "r", "34");
      attr_dev(circle31, "cx", "463");
      attr_dev(circle31, "cy", "34");
      add_location(circle31, file$6, 73, 2, 2654);
      attr_dev(circle32, "r", "14");
      attr_dev(circle32, "cx", "515");
      attr_dev(circle32, "cy", "68");
      add_location(circle32, file$6, 74, 2, 2691);
      attr_dev(svg, "viewBox", "0 0 732 571");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$6, 41, 1, 1418);
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
    id: create_default_slot$5.name,
    type: "slot",
    source: '(41:0) <Hst.Story title=\\"SVGs/Peace Discipline\\" icon=\\"lucide:image\\" {source}>',
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
      title: "SVGs/Peace Discipline",
      icon: "lucide:image",
      source: (
        /*source*/
        ctx[1]
      ),
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
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Peacediscipline_story",
      options,
      id: create_fragment$6.name
    });
  }
  get Hst() {
    throw new Error("<Peacediscipline_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Peacediscipline_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
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
  { "id": "src-stories-colorpicker-story-svelte", "path": ["Components", "Color Picker"], "filePath": "src/stories/ColorPicker.story.svelte", "story": { "id": "src-stories-colorpicker-story-svelte", "title": "Color Picker", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "ph:eyedropper-fill", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: ColorPicker_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-colorpicker-story-svelte-c7862c82.js"), true ? [] : void 0) },
  { "id": "src-stories-glitch-story-svelte", "path": ["Components", "Glitch Text"], "filePath": "src/stories/Glitch.story.svelte", "story": { "id": "src-stories-glitch-story-svelte", "title": "Glitch Text", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "bx:text", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "docsFilePath": "src/stories/Glitch.story.md", "index": 1, component: Glitch_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-glitch-story-svelte-d44fd770.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-command-story-svelte", "path": ["SVGs", "Command"], "filePath": "src/stories/SVG/Command.story.svelte", "story": { "id": "src-stories-svg-command-story-svelte", "title": "Command", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 2, component: Command_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-command-story-svelte-e8238967.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-dilk-story-svelte", "path": ["SVGs", "Dilk"], "filePath": "src/stories/SVG/Dilk.story.svelte", "story": { "id": "src-stories-svg-dilk-story-svelte", "title": "Dilk", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 3, component: Dilk_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-dilk-story-svelte-e4726728.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-maximize-story-svelte", "path": ["SVGs", "Maximize"], "filePath": "src/stories/SVG/Maximize.story.svelte", "story": { "id": "src-stories-svg-maximize-story-svelte", "title": "Maximize", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 4, component: Maximize_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-maximize-story-svelte-4d2af987.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-peacediscipline-story-svelte", "path": ["SVGs", "Peace Discipline"], "filePath": "src/stories/SVG/Peacediscipline.story.svelte", "story": { "id": "src-stories-svg-peacediscipline-story-svelte", "title": "Peace Discipline", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "lucide:image", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 5, component: Peacediscipline_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-peacediscipline-story-svelte-7e09b1ec.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-animated-story-svelte", "path": ["Logo", "Animated"], "filePath": "src/stories/SVG/logo/Animated.story.svelte", "story": { "id": "src-stories-svg-logo-animated-story-svelte", "title": "Animated", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 6, component: Animated_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-animated-story-svelte-b68dc546.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-default-story-svelte", "path": ["Logo", "Default"], "filePath": "src/stories/SVG/logo/Default.story.svelte", "story": { "id": "src-stories-svg-logo-default-story-svelte", "title": "Default", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 7, component: Default_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-default-story-svelte-8fe8cf3e.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-flat-story-svelte", "path": ["Logo", "Flat"], "filePath": "src/stories/SVG/logo/Flat.story.svelte", "story": { "id": "src-stories-svg-logo-flat-story-svelte", "title": "Flat", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 8, component: Flat_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-flat-story-svelte-784d6674.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-infinitelyanimated-story-svelte", "path": ["Logo", "Infinitely Animated"], "filePath": "src/stories/SVG/logo/InfinitelyAnimated.story.svelte", "story": { "id": "src-stories-svg-logo-infinitelyanimated-story-svelte", "title": "Infinitely Animated", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 9, component: InfinitelyAnimated_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-infinitelyanimated-story-svelte-95266539.js"), true ? [] : void 0) },
  { "id": "src-stories-svg-logo-logowithname-story-svelte", "path": ["Logo", "Logo with name"], "filePath": "src/stories/SVG/logo/LogoWithName.story.svelte", "story": { "id": "src-stories-svg-logo-logowithname-story-svelte", "title": "Logo with name", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:cog", "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 10, component: LogoWithName_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-svg-logo-logowithname-story-svelte-5165d113.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "Color Picker", "index": 0 }, { "title": "Glitch Text", "index": 1 }] }, { "title": "Logo", "children": [{ "title": "Animated", "index": 6 }, { "title": "Default", "index": 7 }, { "title": "Flat", "index": 8 }, { "title": "Infinitely Animated", "index": 9 }, { "title": "Logo with name", "index": 10 }] }, { "title": "SVGs", "children": [{ "title": "Command", "index": 2 }, { "title": "Dilk", "index": 3 }, { "title": "Maximize", "index": 4 }, { "title": "Peace Discipline", "index": 5 }] }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-673a7ec3.js"), true ? ["assets/HomeView.vue-673a7ec3.js","assets/vendor-dca8bd66.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-790c0dc8.js"), true ? ["assets/StoryView.vue-790c0dc8.js","assets/vendor-dca8bd66.js","assets/MobileOverlay.vue2-94e1393a.js","assets/BaseEmpty.vue-402dd622.js","assets/state-1effbe21.js"] : void 0)
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
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
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
  "vanilla": () => __vitePreload(() => import("./vendor-dca8bd66.js").then((n) => n.b2), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-dca8bd66.js").then((n) => n.b3), true ? [] : void 0)
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
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
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
