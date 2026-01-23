import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function FeatureSection({ title, description, codeSnippet, children }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col h-full lg:flex-row gap-6 p-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col min-h-0", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-white mb-2", children: title }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 8,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400", children: description }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 9,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-800/50 p-3 border-b border-slate-800 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-red-500" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-green-500" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 16,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "ml-2 text-xs font-mono text-slate-400", children: "Interactive Demo" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto p-4 relative", children }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full lg:w-96 flex flex-col gap-4 min-h-0", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-800/50 p-3 border-b border-slate-800", children: /* @__PURE__ */ jsxDEV("h3", { className: "font-mono text-sm text-blue-400 font-bold", children: "Implementation Details" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-auto bg-[#1e1e1e] p-4 custom-scrollbar", children: /* @__PURE__ */ jsxDEV("pre", { className: "text-xs font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap", children: codeSnippet.trim() }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
export {
  FeatureSection as default
};
