function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/search-docs-data-B8PY67Vp.js","assets/vendor-BdZlzQxY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, aT as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, D as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, b4 as toRefs, b5 as useRouter, w as withCtx, aP as markRaw, bj as useFocus, bk as refDebounced, B as withDirectives, a_ as vModelText, aZ as withModifiers, _ as __vitePreload, bl as flexsearch_bundleExports } from "./vendor-BdZlzQxY.js";
import { u as useStoryStore } from "./story-uL5H_X0I.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-qotunv4H.js";
import "./GenericMountStory.vue2-BNt-OzEh.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-msMIDFj0.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-DLktUxbn.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"7":[51,52],"k":[0,1,2,3,30,31,32,33,58,59],"kl":[0,1,58,59],"klo":[0,1],"klos":[0,1],"klose":[0,1],"ko":[2,3,30,31,32,33],"kom":[2,3],"koma":[2,3],"komam":[2,3],"komamt":[2,3],"t":[4,5,6,7,55,56,57],"te":[4,5,55,56,57],"tel":[4,5],"telk":[4,5],"to":[6,7],"tof":[6,7],"tofm":[6,7],"tofml":[6,7],"tofmlo":[6,7],"tofmloa":[6,7],"tofmloat":[6,7],"o":[8,9],"ot":[8,9],"l":[10,11,12,13,14,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"lo":[10,11,12,13,14,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"lok":[10,11,12,13,14,15],"loko":[10,11,12,13,14,15],"m":[16,17,41,42,43,44],"ma":[16,17],"mas":[16,17],"mase":[16,17],"masem":[16,17],"maseme":[16,17],"masemes":[16,17],"masemese":[16,17],"p":[18,19,22,23,24,25,26,27,28,29,45,46,47,48,49,50],"pe":[18,19],"pea":[18,19],"peak":[18,19],"peake":[18,19],"f":[20,21,36,37],"fa":[20,21],"far":[20,21],"farm":[20,21],"farme":[20,21],"farmem":[20,21],"farmemk":[20,21],"pr":[22,23],"pre":[22,23],"prek":[22,23],"prekt":[22,23],"prektm":[22,23],"prektme":[22,23],"prektmes":[22,23],"po":[24,25,26,27,28,29],"por":[24,25,26,27,28,29],"pork":[24,25,26,27,28,29],"porke":[24,25,26,27,28,29],"porker":[24,25,26,27,28,29],"kol":[30,31,32,33],"kolo":[30,31,32,33],"kolor":[30,31,32,33],"e":[34,35,38,39,40],"es":[34,35],"esp":[34,35],"espe":[34,35],"esper":[34,35],"espere":[34,35],"esperem":[34,35],"espereme":[34,35],"esperemem":[34,35],"esperememt":[34,35],"fl":[36,37],"fle":[36,37],"flep":[36,37],"em":[38,39,40],"emp":[38,39,40],"empo":[38,39,40],"empot":[38,39,40],"mo":[41,42,43,44],"mos":[41,42],"mose":[41,42],"mom":[43,44],"momp":[43,44],"mompe":[43,44],"momper":[43,44],"pa":[45,46,47,48,49,50],"pao":[45,46,47,48],"paos":[45,46,47,48],"paose":[45,46,47,48],"pam":[49,50],"pame":[49,50],"pamem":[49,50],"pamemt":[49,50],"s":[53,54],"st":[53,54],"sta":[53,54],"star":[53,54],"starf":[53,54],"starfe":[53,54],"starfel":[53,54],"starfelt":[53,54],"tem":[55,56,57],"teme":[55,56,57],"kle":[58,59],"klet":[58,59],"kletk":[58,59],"loa":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"loat":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"loate":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"loatem":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"loatemk":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]},{"t":[1,3,11,17,18,19,21,35,54,58,59],"te":[1,3,7,11,17,18,19,21,35,54,58,59],"tef":[1,3,5,7,11,17,21,35,54],"tefa":[1,3,5,7,11,17,21,35,54],"tefao":[1,3,5,7,11,17,21,35,54],"tefaol":[1,3,5,7,11,17,21,35,54],"tefaolt":[1,3,5,7,11,17,21,35,54],"a":[8,9,13,15,41,42,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"ar":[8,9],"f":[12,49,50],"fl":[12],"fla":[12],"flat":[12],"am":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"ame":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amem":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amema":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amemat":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amemate":[13,15,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amematet":[13,15],"e":[14,22,23,30,31,43,44],"em":[14,30,31,43,44],"emf":[14],"emfe":[14],"emfem":[14],"emfeme":[14],"emfemet":[14],"emfemete":[14],"emfemetel":[14],"emfemetele":[14],"tes":[18,19,58,59],"tesk":[18,19],"teske":[18,19],"teskep":[18,19],"teskepl":[18,19],"teskeple":[18,19],"teskeplem":[18,19],"teskepleme":[18,19],"ek":[22,23],"eko":[22,23],"ekom":[22,23],"m":[24,25,26,27,28,29,46],"me":[24,25,26,27,28,29],"mem":[24,25,26,27,28,29],"memo":[24,25,26,27,28,29],"memos":[24,25,26,27,28,29],"emp":[30,31,43,44],"empo":[30,31,43,44],"empot":[30,31,43,44],"p":[32,33],"pe":[32,33],"pek":[32,33],"peke":[32,33],"peker":[32,33],"k":[36,37,39],"ka":[36,37],"kar":[36,37],"kart":[36,37],"ko":[39],"kok":[39],"kokl":[39],"kokle":[39],"l":[40],"la":[40],"las":[40],"last":[40],"ao":[41,42],"aor":[41,42],"aora":[41,42],"mo":[46],"mor":[46],"morf":[46],"r":[47,48],"ro":[47,48],"rot":[47,48],"rota":[47,48],"rotat":[47,48],"rotate":[47,48],"fo":[49,50],"for":[49,50],"form":[49,50],"s":[51,52],"se":[51,52],"sek":[51,52],"sekm":[51,52],"sekme":[51,52],"sekmem":[51,52],"sekmemt":[51,52],"to":[55,56,57],"tok":[55,56,57],"tokl":[55,56,57],"tokle":[55,56,57],"tokles":[55,56,57],"test":[58,59],"amemateo":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amemateom":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"amemateoms":[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]},{"p":[8,9,40,61,63,64],"pa":[8,9,40],"pal":[8,9],"palo":[8,9],"palom":[8,9],"a":[14],"am":[14],"ame":[14],"amem":[14],"amema":[14],"amemat":[14],"amemate":[14],"amematet":[14],"f":[15,27],"fe":[15],"fet":[15],"tef":[19,23,31,33,37,44,50,52,59],"tefa":[19,23,31,33,37,44,50,52,59],"tefao":[19,23,31,33,37,44,50,52,59],"tefaol":[19,23,31,33,37,44,50,52,59],"tefaolt":[19,23,31,33,37,44,50,52,59],"t":[23,31,33,37,44,50,52,62,70,78,79],"te":[23,31,33,37,44,50,52],"k":[25,26,41,42,48,65,75],"ke":[25,48],"ker":[25,48],"kerk":[25,48],"kerkl":[25,48],"kerkle":[25,48],"kr":[26,75],"kro":[26,75],"kros":[26],"fo":[27],"fol":[27],"folt":[27],"mer":[28,29],"merk":[28,29],"merke":[28,29],"s":[39,56,71,72,74,76,77],"st":[39],"ste":[39],"stel":[39],"stele":[39],"pas":[40],"ka":[41,42],"kar":[41,42],"kart":[41,42],"karts":[41,42],"sp":[56,71,72,77],"spe":[56,71,72,77],"spem":[56,71,72,77],"r":[57,66],"re":[57],"res":[57],"rese":[57],"pe":[61],"tm":[62],"tma":[62],"pl":[63,64],"plo":[63,64],"plok":[63,64],"kl":[65],"klo":[65],"klok":[65],"ro":[66],"rot":[66],"rota":[66],"rotat":[66],"rotate":[66],"o":[67,73],"or":[67],"ork":[67],"orkl":[67],"orkla":[67],"orklas":[67],"e":[68,69],"ea":[68,69],"ear":[68,69],"eart":[68,69],"to":[70,78,79],"toa":[70],"toal":[70],"os":[73],"osk":[73],"oske":[73],"oskel":[73],"oskela":[73],"oskelat":[73],"oskelate":[73],"sl":[74],"sle":[74],"slet":[74],"slete":[74],"krof":[75],"sr":[76],"sre":[76],"srem":[76],"sremk":[76],"tot":[78,79]},{"1":[66],"t":[9,42],"te":[9,42],"tef":[9,42],"tefa":[9,42],"tefao":[9,42],"tefaol":[9,42],"tefaolt":[9,42],"m":[15],"ma":[15],"mam":[15],"mame":[15],"e":[27],"em":[27],"k":[29,71,72],"kr":[29],"kro":[29],"kros":[29],"s":[40,63,78,79],"st":[40],"ste":[40],"stel":[40],"stele":[40],"so":[63],"sof":[63],"sofl":[63],"sofle":[63],"f":[64],"fa":[64],"faf":[64],"fafe":[64],"o":[68],"ot":[68],"otl":[68],"otle":[68],"otlem":[68],"otleme":[68],"p":[70],"pa":[70],"pal":[70],"pals":[70],"kl":[71],"kla":[71],"klas":[71],"ke":[72],"ker":[72],"kerk":[72],"kerkl":[72],"kerkle":[72],"kerkles":[72],"sp":[78],"spe":[78],"spem":[78],"sl":[79],"sle":[79],"slet":[79],"slete":[79]},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-stories-svg-close-story-svelte", "kind": "story" }, "1": { "id": "src-stories-svg-close-story-svelte:_default", "kind": "variant" }, "2": { "id": "src-stories-svg-command-story-svelte", "kind": "story" }, "3": { "id": "src-stories-svg-command-story-svelte:_default", "kind": "variant" }, "4": { "id": "src-stories-svg-dilk-story-svelte", "kind": "story" }, "5": { "id": "src-stories-svg-dilk-story-svelte:_default", "kind": "variant" }, "6": { "id": "src-stories-svg-download-story-svelte", "kind": "story" }, "7": { "id": "src-stories-svg-download-story-svelte:_default", "kind": "variant" }, "8": { "id": "src-stories-svg-hotairballoon-story-svelte", "kind": "story" }, "9": { "id": "src-stories-svg-hotairballoon-story-svelte:_default", "kind": "variant" }, "10": { "id": "src-stories-svg-logo-story-svelte", "kind": "story" }, "11": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-0", "kind": "variant" }, "12": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-1", "kind": "variant" }, "13": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-2", "kind": "variant" }, "14": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-3", "kind": "variant" }, "15": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-4", "kind": "variant" }, "16": { "id": "src-stories-svg-maximize-story-svelte", "kind": "story" }, "17": { "id": "src-stories-svg-maximize-story-svelte:_default", "kind": "variant" }, "18": { "id": "src-stories-svg-peacediscipline-story-svelte", "kind": "story" }, "19": { "id": "src-stories-svg-peacediscipline-story-svelte:_default", "kind": "variant" }, "20": { "id": "src-stories-svg-warning-story-svelte", "kind": "story" }, "21": { "id": "src-stories-svg-warning-story-svelte:_default", "kind": "variant" }, "22": { "id": "src-stories-components-brightnessicon-story-svelte", "kind": "story" }, "23": { "id": "src-stories-components-brightnessicon-story-svelte:_default", "kind": "variant" }, "24": { "id": "src-stories-components-burgermenus-story-svelte", "kind": "story" }, "25": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-0", "kind": "variant" }, "26": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-1", "kind": "variant" }, "27": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-2", "kind": "variant" }, "28": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-3", "kind": "variant" }, "29": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-4", "kind": "variant" }, "30": { "id": "src-stories-components-colorinput-story-svelte", "kind": "story" }, "31": { "id": "src-stories-components-colorinput-story-svelte:_default", "kind": "variant" }, "32": { "id": "src-stories-components-colorpicker-story-svelte", "kind": "story" }, "33": { "id": "src-stories-components-colorpicker-story-svelte:_default", "kind": "variant" }, "34": { "id": "src-stories-components-experiment-story-svelte", "kind": "story" }, "35": { "id": "src-stories-components-experiment-story-svelte:_default", "kind": "variant" }, "36": { "id": "src-stories-components-flipcard-story-svelte", "kind": "story" }, "37": { "id": "src-stories-components-flipcard-story-svelte:_default", "kind": "variant" }, "38": { "id": "src-stories-components-input-story-svelte", "kind": "story" }, "39": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-0", "kind": "variant" }, "40": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-1", "kind": "variant" }, "41": { "id": "src-stories-components-mouseauracards-story-svelte", "kind": "story" }, "42": { "id": "src-stories-components-mouseauracards-story-svelte:_default", "kind": "variant" }, "43": { "id": "src-stories-components-numberinput-story-svelte", "kind": "story" }, "44": { "id": "src-stories-components-numberinput-story-svelte:_default", "kind": "variant" }, "45": { "id": "src-stories-components-pause-story-svelte", "kind": "story" }, "46": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-0", "kind": "variant" }, "47": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-1", "kind": "variant" }, "48": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-2", "kind": "variant" }, "49": { "id": "src-stories-components-paymentform-story-svelte", "kind": "story" }, "50": { "id": "src-stories-components-paymentform-story-svelte:_default", "kind": "variant" }, "51": { "id": "src-stories-components-sevensegment-story-svelte", "kind": "story" }, "52": { "id": "src-stories-components-sevensegment-story-svelte:_default", "kind": "variant" }, "53": { "id": "src-stories-components-starfield-story-svelte", "kind": "story" }, "54": { "id": "src-stories-components-starfield-story-svelte:_default", "kind": "variant" }, "55": { "id": "src-stories-components-themetoggles-story-svelte", "kind": "story" }, "56": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-0", "kind": "variant" }, "57": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-1", "kind": "variant" }, "58": { "id": "src-stories-components-glitch-glitch-story-svelte", "kind": "story" }, "59": { "id": "src-stories-components-glitch-glitch-story-svelte:_default", "kind": "variant" }, "60": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "kind": "story" }, "61": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-0", "kind": "variant" }, "62": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-1", "kind": "variant" }, "63": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-2", "kind": "variant" }, "64": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-3", "kind": "variant" }, "65": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-4", "kind": "variant" }, "66": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-5", "kind": "variant" }, "67": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-6", "kind": "variant" }, "68": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-7", "kind": "variant" }, "69": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-8", "kind": "variant" }, "70": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-9", "kind": "variant" }, "71": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-10", "kind": "variant" }, "72": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-11", "kind": "variant" }, "73": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-12", "kind": "variant" }, "74": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-13", "kind": "variant" }, "75": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-14", "kind": "variant" }, "76": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-15", "kind": "variant" }, "77": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-16", "kind": "variant" }, "78": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-17", "kind": "variant" }, "79": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-18", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-B8PY67Vp.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
