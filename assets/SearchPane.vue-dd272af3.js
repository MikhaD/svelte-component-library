import { d as defineComponent, o as openBlock, e as createElementBlock, aY as renderSlot, n as normalizeClass, m as withKeys, c as computed, a as unref, q as createBlock, I as Icon, f as createVNode, g as createBaseVNode, D as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, aS as toRefs, aU as useRouter, w as withCtx, aO as markRaw, k as watch, bi as useFocus, bj as refDebounced, B as withDirectives, aZ as vModelText, aX as withModifiers, _ as __vitePreload, bk as flexsearch_bundleExports } from "./vendor-26cb3ca3.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink, a as useStoryStore } from "./MobileOverlay.vue2-05040767.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-8b91d8da.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-6d236a55.js";
import "./GenericMountStory.vue2-e9273e88.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"7":[47,48],"k":[0,1,2,3,28,29,30,31,54,55],"kl":[0,1,54,55],"klo":[0,1],"klos":[0,1],"klose":[0,1],"ko":[2,3,28,29,30,31],"kom":[2,3],"koma":[2,3],"komam":[2,3],"komamt":[2,3],"t":[4,5,6,7,51,52,53],"te":[4,5,51,52,53],"tel":[4,5],"telk":[4,5],"to":[6,7],"tof":[6,7],"tofm":[6,7],"tofml":[6,7],"tofmlo":[6,7],"tofmloa":[6,7],"tofmloat":[6,7],"l":[8,9,10,11,12,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"lo":[8,9,10,11,12,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"lok":[8,9,10,11,12,13],"loko":[8,9,10,11,12,13],"m":[14,15,39,40],"ma":[14,15],"mas":[14,15],"mase":[14,15],"masem":[14,15],"maseme":[14,15],"masemes":[14,15],"masemese":[14,15],"p":[16,17,20,21,22,23,24,25,26,27,41,42,43,44,45,46],"pe":[16,17],"pea":[16,17],"peak":[16,17],"peake":[16,17],"f":[18,19,34,35],"fa":[18,19],"far":[18,19],"farm":[18,19],"farme":[18,19],"farmem":[18,19],"farmemk":[18,19],"pr":[20,21],"pre":[20,21],"prek":[20,21],"prekt":[20,21],"prektm":[20,21],"prektme":[20,21],"prektmes":[20,21],"po":[22,23,24,25,26,27],"por":[22,23,24,25,26,27],"pork":[22,23,24,25,26,27],"porke":[22,23,24,25,26,27],"porker":[22,23,24,25,26,27],"kol":[28,29,30,31],"kolo":[28,29,30,31],"kolor":[28,29,30,31],"e":[32,33,36,37,38],"es":[32,33],"esp":[32,33],"espe":[32,33],"esper":[32,33],"espere":[32,33],"esperem":[32,33],"espereme":[32,33],"esperemem":[32,33],"esperememt":[32,33],"fl":[34,35],"fle":[34,35],"flep":[34,35],"em":[36,37,38],"emp":[36,37,38],"empo":[36,37,38],"empot":[36,37,38],"mo":[39,40],"mos":[39,40],"mose":[39,40],"pa":[41,42,43,44,45,46],"pao":[41,42,43,44],"paos":[41,42,43,44],"paose":[41,42,43,44],"pam":[45,46],"pame":[45,46],"pamem":[45,46],"pamemt":[45,46],"s":[49,50],"st":[49,50],"sta":[49,50],"star":[49,50],"starf":[49,50],"starfe":[49,50],"starfel":[49,50],"starfelt":[49,50],"tem":[51,52,53],"teme":[51,52,53],"kle":[54,55],"klet":[54,55],"kletk":[54,55],"loa":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"loat":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"loate":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"loatem":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"loatemk":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},{"t":[1,3,9,15,16,17,19,33,50,54,55],"te":[1,3,7,9,15,16,17,19,33,50,54,55],"tef":[1,3,5,7,9,15,19,33,50],"tefa":[1,3,5,7,9,15,19,33,50],"tefao":[1,3,5,7,9,15,19,33,50],"tefaol":[1,3,5,7,9,15,19,33,50],"tefaolt":[1,3,5,7,9,15,19,33,50],"f":[10,45,46],"fl":[10],"fla":[10],"flat":[10],"a":[11,13,39,40,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"am":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"ame":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amem":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amema":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amemat":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amemate":[11,13,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amematet":[11,13],"e":[12,20,21,28,29],"em":[12,28,29],"emf":[12],"emfe":[12],"emfem":[12],"emfeme":[12],"emfemet":[12],"emfemete":[12],"emfemetel":[12],"emfemetele":[12],"tes":[16,17,54,55],"tesk":[16,17],"teske":[16,17],"teskep":[16,17],"teskepl":[16,17],"teskeple":[16,17],"teskeplem":[16,17],"teskepleme":[16,17],"ek":[20,21],"eko":[20,21],"ekom":[20,21],"m":[22,23,24,25,26,27,42],"me":[22,23,24,25,26,27],"mem":[22,23,24,25,26,27],"memo":[22,23,24,25,26,27],"memos":[22,23,24,25,26,27],"emp":[28,29],"empo":[28,29],"empot":[28,29],"p":[30,31],"pe":[30,31],"pek":[30,31],"peke":[30,31],"peker":[30,31],"k":[34,35,37],"ka":[34,35],"kar":[34,35],"kart":[34,35],"ko":[37],"kok":[37],"kokl":[37],"kokle":[37],"l":[38],"la":[38],"las":[38],"last":[38],"ao":[39,40],"aor":[39,40],"aora":[39,40],"mo":[42],"mor":[42],"morf":[42],"r":[43,44],"ro":[43,44],"rot":[43,44],"rota":[43,44],"rotat":[43,44],"rotate":[43,44],"fo":[45,46],"for":[45,46],"form":[45,46],"s":[47,48],"se":[47,48],"sek":[47,48],"sekm":[47,48],"sekme":[47,48],"sekmem":[47,48],"sekmemt":[47,48],"to":[51,52,53],"tok":[51,52,53],"tokl":[51,52,53],"tokle":[51,52,53],"tokles":[51,52,53],"test":[54,55],"amemateo":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amemateom":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"amemateoms":[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},{"a":[12],"am":[12],"ame":[12],"amem":[12],"amema":[12],"amemat":[12],"amemate":[12],"amematet":[12],"f":[13,25],"fe":[13],"fet":[13],"tef":[17,21,29,31,35,46,48,55],"tefa":[17,21,29,31,35,46,48,55],"tefao":[17,21,29,31,35,46,48,55],"tefaol":[17,21,29,31,35,46,48,55],"tefaolt":[17,21,29,31,35,46,48,55],"t":[21,29,31,35,46,48,57,58,59,68,69],"te":[21,29,31,35,46,48],"k":[23,24,39,40,44,62,74],"ke":[23,44],"ker":[23,44],"kerk":[23,44],"kerkl":[23,44],"kerkle":[23,44],"kr":[24,74],"kro":[24,74],"kros":[24],"fo":[25],"fol":[25],"folt":[25],"mer":[26,27],"merk":[26,27],"merke":[26,27],"s":[37,52,70,71,73,75,76],"st":[37],"ste":[37],"stel":[37],"stele":[37],"p":[38,60,61,67],"pa":[38],"pas":[38],"ka":[39,40],"kar":[39,40],"kart":[39,40],"karts":[39,40],"sp":[52,70,71,76],"spe":[52,70,71,76],"spem":[52,70,71,76],"r":[53,63],"re":[53],"res":[53],"rese":[53],"to":[57,58,59,69],"tot":[57,58,59],"pl":[60,61],"plo":[60,61],"plok":[60,61],"kl":[62],"klo":[62],"klok":[62],"ro":[63],"rot":[63],"rota":[63],"rotat":[63],"rotate":[63],"o":[64,72],"or":[64],"ork":[64],"orkl":[64],"orkla":[64],"orklas":[64],"e":[65,66],"ea":[65,66],"ear":[65,66],"eart":[65,66],"pe":[67],"tm":[68],"tma":[68],"toa":[69],"toal":[69],"os":[72],"osk":[72],"oske":[72],"oskel":[72],"oskela":[72],"oskelat":[72],"oskelate":[72],"sl":[73],"sle":[73],"slet":[73],"slete":[73],"krof":[74],"sr":[75],"sre":[75],"srem":[75],"sremk":[75]},{"1":[63],"m":[13],"ma":[13],"mam":[13],"mame":[13],"e":[25],"em":[25],"k":[27,70,71],"kr":[27],"kro":[27],"kros":[27],"s":[38,57,58,59,60],"st":[38],"ste":[38],"stel":[38],"stele":[38],"t":[40],"te":[40],"tef":[40],"tefa":[40],"tefao":[40],"tefaol":[40],"tefaolt":[40],"sp":[57,58],"spe":[57,58],"spem":[57,58],"sl":[59],"sle":[59],"slet":[59],"slete":[59],"so":[60],"sof":[60],"sofl":[60],"sofle":[60],"f":[61],"fa":[61],"faf":[61],"fafe":[61],"o":[65],"ot":[65],"otl":[65],"otle":[65],"otlem":[65],"otleme":[65],"p":[69],"pa":[69],"pal":[69],"pals":[69],"kl":[70],"kla":[70],"klas":[70],"ke":[71],"ker":[71],"kerk":[71],"kerkl":[71],"kerkle":[71],"kerkles":[71]},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-stories-svg-close-story-svelte", "kind": "story" }, "1": { "id": "src-stories-svg-close-story-svelte:_default", "kind": "variant" }, "2": { "id": "src-stories-svg-command-story-svelte", "kind": "story" }, "3": { "id": "src-stories-svg-command-story-svelte:_default", "kind": "variant" }, "4": { "id": "src-stories-svg-dilk-story-svelte", "kind": "story" }, "5": { "id": "src-stories-svg-dilk-story-svelte:_default", "kind": "variant" }, "6": { "id": "src-stories-svg-download-story-svelte", "kind": "story" }, "7": { "id": "src-stories-svg-download-story-svelte:_default", "kind": "variant" }, "8": { "id": "src-stories-svg-logo-story-svelte", "kind": "story" }, "9": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-0", "kind": "variant" }, "10": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-1", "kind": "variant" }, "11": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-2", "kind": "variant" }, "12": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-3", "kind": "variant" }, "13": { "id": "src-stories-svg-logo-story-svelte:src-stories-svg-logo-story-svelte-4", "kind": "variant" }, "14": { "id": "src-stories-svg-maximize-story-svelte", "kind": "story" }, "15": { "id": "src-stories-svg-maximize-story-svelte:_default", "kind": "variant" }, "16": { "id": "src-stories-svg-peacediscipline-story-svelte", "kind": "story" }, "17": { "id": "src-stories-svg-peacediscipline-story-svelte:_default", "kind": "variant" }, "18": { "id": "src-stories-svg-warning-story-svelte", "kind": "story" }, "19": { "id": "src-stories-svg-warning-story-svelte:_default", "kind": "variant" }, "20": { "id": "src-stories-components-brightnessicon-story-svelte", "kind": "story" }, "21": { "id": "src-stories-components-brightnessicon-story-svelte:_default", "kind": "variant" }, "22": { "id": "src-stories-components-burgermenus-story-svelte", "kind": "story" }, "23": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-0", "kind": "variant" }, "24": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-1", "kind": "variant" }, "25": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-2", "kind": "variant" }, "26": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-3", "kind": "variant" }, "27": { "id": "src-stories-components-burgermenus-story-svelte:src-stories-components-burgermenus-story-svelte-4", "kind": "variant" }, "28": { "id": "src-stories-components-colorinput-story-svelte", "kind": "story" }, "29": { "id": "src-stories-components-colorinput-story-svelte:_default", "kind": "variant" }, "30": { "id": "src-stories-components-colorpicker-story-svelte", "kind": "story" }, "31": { "id": "src-stories-components-colorpicker-story-svelte:_default", "kind": "variant" }, "32": { "id": "src-stories-components-experiment-story-svelte", "kind": "story" }, "33": { "id": "src-stories-components-experiment-story-svelte:_default", "kind": "variant" }, "34": { "id": "src-stories-components-flipcard-story-svelte", "kind": "story" }, "35": { "id": "src-stories-components-flipcard-story-svelte:_default", "kind": "variant" }, "36": { "id": "src-stories-components-input-story-svelte", "kind": "story" }, "37": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-0", "kind": "variant" }, "38": { "id": "src-stories-components-input-story-svelte:src-stories-components-input-story-svelte-1", "kind": "variant" }, "39": { "id": "src-stories-components-mouseauracards-story-svelte", "kind": "story" }, "40": { "id": "src-stories-components-mouseauracards-story-svelte:_default", "kind": "variant" }, "41": { "id": "src-stories-components-pause-story-svelte", "kind": "story" }, "42": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-0", "kind": "variant" }, "43": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-1", "kind": "variant" }, "44": { "id": "src-stories-components-pause-story-svelte:src-stories-components-pause-story-svelte-2", "kind": "variant" }, "45": { "id": "src-stories-components-paymentform-story-svelte", "kind": "story" }, "46": { "id": "src-stories-components-paymentform-story-svelte:_default", "kind": "variant" }, "47": { "id": "src-stories-components-sevensegment-story-svelte", "kind": "story" }, "48": { "id": "src-stories-components-sevensegment-story-svelte:_default", "kind": "variant" }, "49": { "id": "src-stories-components-starfield-story-svelte", "kind": "story" }, "50": { "id": "src-stories-components-starfield-story-svelte:_default", "kind": "variant" }, "51": { "id": "src-stories-components-themetoggles-story-svelte", "kind": "story" }, "52": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-0", "kind": "variant" }, "53": { "id": "src-stories-components-themetoggles-story-svelte:src-stories-components-themetoggles-story-svelte-1", "kind": "variant" }, "54": { "id": "src-stories-components-glitch-glitch-story-svelte", "kind": "story" }, "55": { "id": "src-stories-components-glitch-glitch-story-svelte:_default", "kind": "variant" }, "56": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte", "kind": "story" }, "57": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-0", "kind": "variant" }, "58": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-1", "kind": "variant" }, "59": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-2", "kind": "variant" }, "60": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-3", "kind": "variant" }, "61": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-4", "kind": "variant" }, "62": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-5", "kind": "variant" }, "63": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-6", "kind": "variant" }, "64": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-7", "kind": "variant" }, "65": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-8", "kind": "variant" }, "66": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-9", "kind": "variant" }, "67": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-10", "kind": "variant" }, "68": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-11", "kind": "variant" }, "69": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-12", "kind": "variant" }, "70": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-13", "kind": "variant" }, "71": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-14", "kind": "variant" }, "72": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-15", "kind": "variant" }, "73": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-16", "kind": "variant" }, "74": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-17", "kind": "variant" }, "75": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-18", "kind": "variant" }, "76": { "id": "src-stories-components-loading-animations-loadinganimation-story-svelte:src-stories-components-loading-animations-loadinganimation-story-svelte-19", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-d5f49aa8.js"), true ? ["assets/search-docs-data-d5f49aa8.js","assets/vendor-26cb3ca3.js"] : void 0);
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
