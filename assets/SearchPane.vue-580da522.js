import { d as defineComponent, o as openBlock, e as createElementBlock, aX as renderSlot, n as normalizeClass, m as withKeys, c as computed, a as unref, q as createBlock, I as Icon, f as createVNode, g as createBaseVNode, D as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, aR as toRefs, aT as useRouter, w as withCtx, aN as markRaw, k as watch, bh as useFocus, bi as refDebounced, B as withDirectives, aY as vModelText, aW as withModifiers, _ as __vitePreload, bj as flexsearch_bundleExports } from "./vendor-2d92fb2a.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink, a as useStoryStore } from "./MobileOverlay.vue2-e9398eb8.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-44d30ec4.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-2ccf8b40.js";
import "./GenericMountStory.vue2-58fa7051.js";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit }) {
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          __props.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
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
    icon: null
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return unref(isUrl) ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: __props.icon,
        alt: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74182813"]]);
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
    result: null,
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
          icon: __props.result.icon ?? defaultIcons[__props.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !__props.selected ? [
              __props.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": __props.result.kind === "story",
                "htw-text-gray-500": __props.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": __props.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(__props.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[__props.result.kind]), 1)
          ]),
          ((_a = __props.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
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
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "a8c1277e": __props.result.iconColor
    }));
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
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c8e9661"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"7":[43,44],"k":[0,1,2,3,26,27,28,29,48,49],"kl":[0,1,48,49],"klo":[0,1],"klos":[0,1],"klose":[0,1],"ko":[2,3,26,27,28,29],"kom":[2,3],"koma":[2,3],"komam":[2,3],"komamt":[2,3],"t":[4,5,6,7,45,46,47],"te":[4,5,45,46,47],"tel":[4,5],"telk":[4,5],"to":[6,7],"tof":[6,7],"tofm":[6,7],"tofml":[6,7],"tofmlo":[6,7],"tofmloa":[6,7],"tofmloat":[6,7],"l":[8,9,10,11,12,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"lo":[8,9,10,11,12,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"lok":[8,9,10,11,12,13],"loko":[8,9,10,11,12,13],"m":[14,15,35,36],"ma":[14,15],"mas":[14,15],"mase":[14,15],"masem":[14,15],"maseme":[14,15],"masemes":[14,15],"masemese":[14,15],"p":[16,17,20,21,22,23,24,25,37,38,39,40,41,42],"pe":[16,17],"pea":[16,17],"peak":[16,17],"peake":[16,17],"f":[18,19,30,31],"fa":[18,19],"far":[18,19],"farm":[18,19],"farme":[18,19],"farmem":[18,19],"farmemk":[18,19],"po":[20,21,22,23,24,25],"por":[20,21,22,23,24,25],"pork":[20,21,22,23,24,25],"porke":[20,21,22,23,24,25],"porker":[20,21,22,23,24,25],"kol":[26,27,28,29],"kolo":[26,27,28,29],"kolor":[26,27,28,29],"fl":[30,31],"fle":[30,31],"flep":[30,31],"e":[32,33,34],"em":[32,33,34],"emp":[32,33,34],"empo":[32,33,34],"empot":[32,33,34],"mo":[35,36],"mos":[35,36],"mose":[35,36],"pa":[37,38,39,40,41,42],"pao":[37,38,39,40],"paos":[37,38,39,40],"paose":[37,38,39,40],"pam":[41,42],"pame":[41,42],"pamem":[41,42],"pamemt":[41,42],"tem":[45,46,47],"teme":[45,46,47],"kle":[48,49],"klet":[48,49],"kletk":[48,49],"loa":[50,51,52,53,54,55,56,57,58,59,60,61,62],"loat":[50,51,52,53,54,55,56,57,58,59,60,61,62],"loate":[50,51,52,53,54,55,56,57,58,59,60,61,62],"loatem":[50,51,52,53,54,55,56,57,58,59,60,61,62],"loatemk":[50,51,52,53,54,55,56,57,58,59,60,61,62]},{"t":[1,3,9,15,16,17,19,48,49],"te":[1,3,7,9,15,16,17,19,48,49],"tef":[1,3,5,7,9,15,19],"tefa":[1,3,5,7,9,15,19],"tefao":[1,3,5,7,9,15,19],"tefaol":[1,3,5,7,9,15,19],"tefaolt":[1,3,5,7,9,15,19],"f":[10,41,42],"fl":[10],"fla":[10],"flat":[10],"a":[11,13,35,36,50,51,52,53,54,55,56,57,58,59,60,61,62],"am":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"ame":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"amem":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"amema":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"amemat":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"amemate":[11,13,50,51,52,53,54,55,56,57,58,59,60,61,62],"amematet":[11,13],"e":[12,26,27],"em":[12,26,27],"emf":[12],"emfe":[12],"emfem":[12],"emfeme":[12],"emfemet":[12],"emfemete":[12],"emfemetel":[12],"emfemetele":[12],"tes":[16,17,48,49],"tesk":[16,17],"teske":[16,17],"teskep":[16,17],"teskepl":[16,17],"teskeple":[16,17],"teskeplem":[16,17],"teskepleme":[16,17],"m":[20,21,22,23,24,25,38],"me":[20,21,22,23,24,25],"mem":[20,21,22,23,24,25],"memo":[20,21,22,23,24,25],"memos":[20,21,22,23,24,25],"emp":[26,27],"empo":[26,27],"empot":[26,27],"p":[28,29],"pe":[28,29],"pek":[28,29],"peke":[28,29],"peker":[28,29],"k":[30,31,33],"ka":[30,31],"kar":[30,31],"kart":[30,31],"ko":[33],"kok":[33],"kokl":[33],"kokle":[33],"l":[34],"la":[34],"las":[34],"last":[34],"ao":[35,36],"aor":[35,36],"aora":[35,36],"mo":[38],"mor":[38],"morf":[38],"r":[39,40],"ro":[39,40],"rot":[39,40],"rota":[39,40],"rotat":[39,40],"rotate":[39,40],"fo":[41,42],"for":[41,42],"form":[41,42],"s":[43,44],"se":[43,44],"sek":[43,44],"sekm":[43,44],"sekme":[43,44],"sekmem":[43,44],"sekmemt":[43,44],"to":[45,46,47],"tok":[45,46,47],"tokl":[45,46,47],"tokle":[45,46,47],"tokles":[45,46,47],"test":[48,49],"amemateo":[50,51,52,53,54,55,56,57,58,59,60,61,62],"amemateom":[50,51,52,53,54,55,56,57,58,59,60,61,62],"amemateoms":[50,51,52,53,54,55,56,57,58,59,60,61,62]},{"a":[12],"am":[12],"ame":[12],"amem":[12],"amema":[12],"amemat":[12],"amemate":[12],"amematet":[12],"f":[13,23],"fe":[13],"fet":[13],"tef":[17,27,29,31,42,44,49],"tefa":[17,27,29,31,42,44,49],"tefao":[17,27,29,31,42,44,49],"tefaol":[17,27,29,31,42,44,49],"tefaolt":[17,27,29,31,42,44,49],"k":[21,22,35,36,40,60],"ke":[21,40],"ker":[21,40],"kerk":[21,40],"kerkl":[21,40],"kerkle":[21,40],"kr":[22,60],"kro":[22,60],"kros":[22],"fo":[23],"fol":[23],"folt":[23],"mer":[24,25],"merk":[24,25],"merke":[24,25],"t":[27,29,31,42,44,54,55],"te":[27,29,31,42,44],"s":[33,46,56,57,59,61,62],"st":[33],"ste":[33],"stel":[33],"stele":[33],"p":[34,53],"pa":[34],"pas":[34],"ka":[35,36],"kar":[35,36],"kart":[35,36],"karts":[35,36],"sp":[46,56,57,62],"spe":[46,56,57,62],"spem":[46,56,57,62],"r":[47],"re":[47],"res":[47],"rese":[47],"o":[51,58],"or":[51],"ork":[51],"orkl":[51],"orkla":[51],"orklas":[51],"e":[52],"ea":[52],"ear":[52],"eart":[52],"pe":[53],"tm":[54],"tma":[54],"to":[55],"toa":[55],"toal":[55],"os":[58],"osk":[58],"oske":[58],"oskel":[58],"oskela":[58],"oskelat":[58],"oskelate":[58],"sl":[59],"sle":[59],"slet":[59],"slete":[59],"krof":[60],"sr":[61],"sre":[61],"srem":[61],"sremk":[61]},{"m":[13],"ma":[13],"mam":[13],"mame":[13],"e":[23],"em":[23],"k":[25,56,57],"kr":[25],"kro":[25],"kros":[25],"s":[34],"st":[34],"ste":[34],"stel":[34],"stele":[34],"t":[36],"te":[36],"tef":[36],"tefa":[36],"tefao":[36],"tefaol":[36],"tefaolt":[36],"p":[55],"pa":[55],"pal":[55],"pals":[55],"kl":[56],"kla":[56],"klas":[56],"ke":[57],"ker":[57],"kerk":[57],"kerkl":[57],"kerkle":[57],"kerkles":[57]},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-stories-svg-close-story-svelte", "kind": "story" }, "1": { "id": "src-stories-svg-close-story-svelte:_default", "kind": "variant" }, "2": { "id": "src-stories-svg-command-story-svelte", "kind": "story" }, "3": { "id": "src-stories-svg-command-story-svelte:_default", "kind": "variant" }, "4": { "id": "src-stories-svg-dilk-story-svelte", "kind": "story" }, "5": { "id": "src-stories-svg-dilk-story-svelte:_default", "kind": "variant" }, "6": { "id": "src-stories-svg-download-story-svelte", "kind": "story" }, "7": { "id": "src-stories-svg-download-story-svelte:_default", "kind": "variant" }, "8": { "id": "src-stories-svg-logo-story-svelte", "kind": "story" }, "9": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-0", "kind": "variant" }, "10": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-1", "kind": "variant" }, "11": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-2", "kind": "variant" }, "12": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-3", "kind": "variant" }, "13": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-4", "kind": "variant" }, "14": { "id": "src-stories-svg-maximize-story-svelte", "kind": "story" }, "15": { "id": "src-stories-svg-maximize-story-svelte:_default", "kind": "variant" }, "16": { "id": "src-stories-svg-peacediscipline-story-svelte", "kind": "story" }, "17": { "id": "src-stories-svg-peacediscipline-story-svelte:_default", "kind": "variant" }, "18": { "id": "src-stories-svg-warning-story-svelte", "kind": "story" }, "19": { "id": "src-stories-svg-warning-story-svelte:_default", "kind": "variant" }, "20": { "id": "src-stories-components-burgermenus-story-svelte", "kind": "story" }, "21": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-0", "kind": "variant" }, "22": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-1", "kind": "variant" }, "23": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-2", "kind": "variant" }, "24": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-3", "kind": "variant" }, "25": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-4", "kind": "variant" }, "26": { "id": "src-stories-components-colorinput-story-svelte", "kind": "story" }, "27": { "id": "src-stories-components-colorinput-story-svelte:_default", "kind": "variant" }, "28": { "id": "src-stories-components-colorpicker-story-svelte", "kind": "story" }, "29": { "id": "src-stories-components-colorpicker-story-svelte:_default", "kind": "variant" }, "30": { "id": "src-stories-components-flipcard-story-svelte", "kind": "story" }, "31": { "id": "src-stories-components-flipcard-story-svelte:_default", "kind": "variant" }, "32": { "id": "src-stories-components-input-story-svelte", "kind": "story" }, "33": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-0", "kind": "variant" }, "34": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-1", "kind": "variant" }, "35": { "id": "src-stories-components-mouseauracards-story-svelte", "kind": "story" }, "36": { "id": "src-stories-components-mouseauracards-story-svelte:_default", "kind": "variant" }, "37": { "id": "src-stories-components-pause-story-svelte", "kind": "story" }, "38": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-0", "kind": "variant" }, "39": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-1", "kind": "variant" }, "40": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-2", "kind": "variant" }, "41": { "id": "src-stories-components-paymentform-story-svelte", "kind": "story" }, "42": { "id": "src-stories-components-paymentform-story-svelte:_default", "kind": "variant" }, "43": { "id": "src-stories-components-sevensegment-story-svelte", "kind": "story" }, "44": { "id": "src-stories-components-sevensegment-story-svelte:_default", "kind": "variant" }, "45": { "id": "src-stories-components-themetoggles-story-svelte", "kind": "story" }, "46": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-0", "kind": "variant" }, "47": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-1", "kind": "variant" }, "48": { "id": "src-stories-components-glitch-glitch-story-svelte", "kind": "story" }, "49": { "id": "src-stories-components-glitch-glitch-story-svelte:_default", "kind": "variant" }, "50": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "kind": "story" }, "51": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-0", "kind": "variant" }, "52": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-1", "kind": "variant" }, "53": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-2", "kind": "variant" }, "54": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-3", "kind": "variant" }, "55": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-4", "kind": "variant" }, "56": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-5", "kind": "variant" }, "57": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-6", "kind": "variant" }, "58": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-7", "kind": "variant" }, "59": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-8", "kind": "variant" }, "60": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-9", "kind": "variant" }, "61": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-10", "kind": "variant" }, "62": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-11", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
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
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-687a4c82.js"), true ? ["assets/search-docs-data-687a4c82.js","assets/vendor-2d92fb2a.js"] : void 0);
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
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
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
