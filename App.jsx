import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { Database, Users, Video, MessageSquare, Terminal } from "lucide-react";
import { initRoom } from "./lib/websim-socket.js";
import RealtimeDatabase from "./views/RealtimeDatabase.jsx";
import Presence from "./views/Presence.jsx";
import GenerativeStudio from "./views/GenerativeStudio.jsx";
import CommentsSystem from "./views/CommentsSystem.jsx";
const TABS = [
  { id: "db", label: "Database", icon: Database, component: RealtimeDatabase },
  { id: "presence", label: "Presence", icon: Users, component: Presence },
  { id: "gen", label: "AI Studio", icon: Video, component: GenerativeStudio },
  { id: "comments", label: "Comments", icon: MessageSquare, component: CommentsSystem }
];
function App() {
  const [activeTab, setActiveTab] = useState("gen");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initRoom().then(() => setReady(true));
  }, []);
  if (!ready) {
    return /* @__PURE__ */ jsxDEV("div", { className: "h-full flex items-center justify-center bg-slate-950 text-blue-400 font-mono", children: /* @__PURE__ */ jsxDEV("span", { className: "animate-pulse", children: "Connecting to Websim Runtime Environment..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 27,
      columnNumber: 7
    }, this);
  }
  const ActiveComponent = TABS.find((t) => t.id === activeTab)?.component || RealtimeDatabase;
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full bg-slate-950 text-white font-sans selection:bg-blue-500/30", children: [
    /* @__PURE__ */ jsxDEV("nav", { className: "w-20 lg:w-64 border-r border-slate-800 flex flex-col bg-slate-900/50 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 lg:p-6 border-b border-slate-800", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 text-blue-400", children: [
        /* @__PURE__ */ jsxDEV(Terminal, { size: 24 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-lg hidden lg:block tracking-tight", children: [
          "Websim",
          /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "Dev" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 42,
            columnNumber: 86
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 py-4 flex flex-col gap-2 px-2", children: TABS.map((tab) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center gap-3 p-3 rounded-lg transition-all ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(tab.icon, { size: 20 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "hidden lg:block font-medium", children: tab.label }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ]
        },
        tab.id,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-t border-slate-800", children: /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-slate-500 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "hidden lg:inline", children: "Running on " }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        "Websim OS v1.0"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 bg-slate-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 pointer-events-none" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ActiveComponent, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
