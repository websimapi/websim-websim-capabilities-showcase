import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import FeatureSection from "../components/FeatureSection.jsx";
import { room } from "../lib/websim-socket.js";
import { MousePointer2 } from "lucide-react";
const CODE = `
// 1. Subscribe to presence changes
// 'peers' is auto-updated by the library
const peers = room.peers; 
const presence = room.presence;

// 2. Broadcast your state
room.updatePresence({
  x: mouseX,
  y: mouseY,
  cursor: "pointer"
});

// 3. Render other players
Object.keys(peers).map(clientId => {
  if (clientId === room.clientId) return;
  const p = presence[clientId];
  return <Cursor x={p.x} y={p.y} />;
});
`;
function Presence() {
  const containerRef = useRef(null);
  const presenceTick = useSyncExternalStore(
    (cb) => room.subscribePresence(cb),
    () => Date.now()
    // Just need a value to change
  );
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    room.updatePresence({
      cursorX: x,
      cursorY: y,
      lastActive: Date.now()
    });
  };
  const handleLeave = () => {
    room.updatePresence({ cursorX: null, cursorY: null });
  };
  return /* @__PURE__ */ jsxDEV(
    FeatureSection,
    {
      title: "Multiplayer Presence",
      description: "Ephemeral state for cursors, avatars, and live interactions.",
      codeSnippet: CODE,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative w-full h-full flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 bg-slate-900/80 backdrop-blur border border-slate-700 p-3 rounded-lg z-10 text-xs", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-slate-400 font-mono mb-2 uppercase tracking-wider", children: "Connected Peers" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex -space-x-2 overflow-hidden", children: Object.values(room.peers).map((peer) => /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: peer.avatarUrl,
                alt: peer.username,
                title: peer.username,
                className: "inline-block h-8 w-8 rounded-full ring-2 ring-slate-900"
              },
              peer.id,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 67,
                columnNumber: 15
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-right text-emerald-400", children: [
              Object.keys(room.peers).length,
              " online"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              ref: containerRef,
              onMouseMove: handleMouseMove,
              onMouseLeave: handleLeave,
              className: "flex-1 bg-grid-pattern border-2 border-dashed border-slate-700 rounded-lg relative overflow-hidden cursor-none group",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity", children: /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-bold text-slate-600", children: "Move your mouse here" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 88,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 87,
                  columnNumber: 11
                }, this),
                Object.entries(room.peers).map(([id, peer]) => {
                  if (id === room.clientId) return null;
                  const p = room.presence[id];
                  if (!p || p.cursorX == null || p.cursorY == null) return null;
                  return /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "absolute pointer-events-none transition-transform duration-100 ease-out flex flex-col items-start z-20",
                      style: {
                        left: 0,
                        top: 0,
                        transform: `translate(${p.cursorX * 100 * containerRef.current.getBoundingClientRect().width / 100}px, ${p.cursorY * 100 * containerRef.current.getBoundingClientRect().height / 100}px)`
                      },
                      children: [
                        /* @__PURE__ */ jsxDEV(
                          MousePointer2,
                          {
                            className: "text-blue-500 fill-blue-500/20",
                            size: 24,
                            style: { transform: "rotate(-15deg)" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "<stdin>",
                            lineNumber: 108,
                            columnNumber: 17
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-medium whitespace-nowrap shadow-lg", children: peer.username }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 113,
                          columnNumber: 17
                        }, this)
                      ]
                    },
                    id,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 99,
                      columnNumber: 15
                    },
                    this
                  );
                })
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 81,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("style", { children: `
        .bg-grid-pattern {
          background-image: radial-gradient(#334155 1px, transparent 1px);
          background-size: 20px 20px;
        }
      ` }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
}
export {
  Presence as default
};
