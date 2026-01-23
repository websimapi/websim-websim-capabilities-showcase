import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Book, Database, Users, MessageSquare, Video, Cpu, Terminal, Image as ImageIcon } from "lucide-react";
const DocSection = ({ title, icon: Icon, children, id }) => /* @__PURE__ */ jsxDEV("section", { id, className: "mb-16 scroll-mt-24", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6 pb-4 border-b border-slate-800", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-slate-900 rounded-lg border border-slate-800 text-blue-400", children: /* @__PURE__ */ jsxDEV(Icon, { size: 28 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 7,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-slate-100 tracking-tight", children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 5
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed", children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 5
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 5,
  columnNumber: 3
});
const CodeBlock = ({ children, label = "Example" }) => /* @__PURE__ */ jsxDEV("div", { className: "my-6 bg-[#0d1117] rounded-xl border border-slate-800 overflow-hidden shadow-xl", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-2 bg-slate-900/50 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV(Terminal, { size: 12 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 7
    }),
    label
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 20,
    columnNumber: 5
  }),
  /* @__PURE__ */ jsxDEV("pre", { className: "p-5 text-sm font-mono text-emerald-400 overflow-x-auto custom-scrollbar leading-relaxed", children: children.trim() }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 24,
    columnNumber: 5
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 19,
  columnNumber: 3
});
function Documentation() {
  return /* @__PURE__ */ jsxDEV("div", { className: "h-full overflow-y-auto custom-scrollbar bg-slate-950 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto p-6 lg:p-12 pb-32", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "mb-16 text-center lg:text-left", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20", children: [
        /* @__PURE__ */ jsxDEV(Book, { size: 14 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "Developer Guide" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight", children: [
        "Websim ",
        /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400", children: "SDK" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 20
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-400 max-w-2xl leading-relaxed", children: "Complete documentation for building multiplayer, AI-enhanced, and interactive media experiences directly in the browser." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(DocSection, { title: "Realtime Database", icon: Database, id: "database", children: [
      /* @__PURE__ */ jsxDEV("p", { children: [
        "The WebsimSocket library provides a globally available ",
        /* @__PURE__ */ jsxDEV("code", { children: "room" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 49,
          columnNumber: 68
        }, this),
        ' object that handles persistent data storage. Data is stored in "collections" (like tables) of JSON objects.'
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mt-8 mb-4", children: "Core Concepts" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxDEV("li", { className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "text-white block mb-1", children: "Persistence" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          "Data persists forever, even after all users leave the room."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "text-white block mb-1", children: "Sync" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          "Changes update on all clients instantly via WebSocket."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "text-white block mb-1", children: "Identity" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          "Records are automatically tagged with the creator's username and ID."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "text-white block mb-1", children: "Security" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          "Users can only edit or delete records they created."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "Database Operations", children: `// 1. Initialize (do this once)
const room = new WebsimSocket();
await room.initialize();

// 2. Subscribe to a collection (React Hook)
const todos = useSyncExternalStore(
  (cb) => room.collection('todos').subscribe(cb),
  () => room.collection('todos').getList()
);

// 3. Create Data
await room.collection('todos').create({
  task: "Build something cool",
  priority: "high"
});

// 4. Update Data (ID is required)
await room.collection('todos').update(recordId, {
  priority: "low"
});

// 5. Delete Data
await room.collection('todos').delete(recordId);` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(DocSection, { title: "Multiplayer Presence", icon: Users, id: "presence", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Presence is for ephemeral, high-frequency data that doesn't need to be saved permanently. It's perfect for showing where users are, what they are selecting, or their current status." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4", children: "Unlike the database, presence data clears when a user disconnects." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "Presence API", children: `// 1. Broadcast your state
room.updatePresence({
  cursorX: 0.5,
  cursorY: 0.3,
  selection: 'item-123'
});

// 2. Read all connected peers
const peers = room.peers; // { [clientId]: { username, avatarUrl } }

// 3. Read their state
const presence = room.presence; // { [clientId]: { cursorX: 0.5, ... } }

// Example: Rendering cursors
Object.entries(peers).map(([id, peer]) => {
  if (id === room.clientId) return null; // Skip self
  const state = presence[id];
  return <Cursor x={state.cursorX} y={state.cursorY} label={peer.username} />;
});` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(DocSection, { title: "Generative AI (LLMs)", icon: Cpu, id: "ai", children: [
      /* @__PURE__ */ jsxDEV("p", { children: [
        "You can prompt Large Language Models to generate text, code, or structured JSON data. This is powered by the ",
        /* @__PURE__ */ jsxDEV("code", { children: "window.websim.chat.completions" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 135,
          columnNumber: 36
        }, this),
        " API."
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "Text Generation", children: `const completion = await window.websim.chat.completions.create({
  messages: [
    { role: "system", content: "You are a pirate." },
    { role: "user", content: "Tell me a joke." }
  ]
});

console.log(completion.content); 
// "Why couldn't the pirate play cards? He was sitting on the deck!"` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mt-8 mb-4", children: "Structured JSON Output" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Force the AI to return valid JSON for use in your application logic." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "JSON Generation", children: `const result = await window.websim.chat.completions.create({
  messages: [
    { role: "system", content: "Extract ingredients. Return JSON: { ingredients: string[] }" },
    { role: "user", content: "I want to bake a cake with flour, sugar, and eggs." }
  ],
  json: true // Important!
});

const data = JSON.parse(result.content);
console.log(data.ingredients); // ["flour", "sugar", "eggs"]` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 154,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(DocSection, { title: "Image Generation", icon: ImageIcon, id: "image-gen", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Generate images on the fly. The process takes about 10 seconds, so always show a loading state." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "Image Gen API", children: `const image = await window.websim.imageGen({
  prompt: "A futuristic city with flying cars, synthwave style",
  aspect_ratio: "16:9", // Options: "1:1", "16:9", "9:16", etc.
  transparent: false    // Set true for PNGs with no background
});

// Returns: { url: "https://..." }
myImgElement.src = image.url;` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 168,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(DocSection, { title: "Comments System", icon: MessageSquare, id: "comments", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "The Comments API lets you access the native social layer of Websim. You can read comments, post new ones (triggering a user confirmation), and listen for updates in real-time." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 185,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CodeBlock, { label: "Comments API", children: `// Fetch existing comments
const project = await window.websim.getCurrentProject();
const res = await fetch(\`/api/v1/projects/\${project.id}/comments\`);
const data = await res.json();

// Post a comment (with optional images)
await window.websim.postComment({
  content: "Check out this screenshot!",
  images: ["https://example.com/image.png"]
});

// Listen for new comments
window.websim.addEventListener('comment:created', (e) => {
  const newComment = e.comment;
  alert(\`New comment from \${newComment.author.username}!\`);
});` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 184,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
export {
  Documentation as default
};
