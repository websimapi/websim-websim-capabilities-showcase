import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import FeatureSection from "../components/FeatureSection.jsx";
import { room } from "../lib/websim-socket.js";
import { Plus, Trash2, Clock } from "lucide-react";
const CODE = `
// 1. Get the collection
const collection = room.collection('tasks');

// 2. Subscribe to changes (React Hook pattern)
const tasks = useSyncExternalStore(
  collection.subscribe,
  collection.getList
);

// 3. Create a record
await collection.create({
  text: "New Task",
  status: "pending"
});

// 4. Update a record
await collection.update(id, {
  status: "completed"
});

// 5. Delete a record
await collection.delete(id);
`;
function RealtimeDatabase() {
  const [newItem, setNewItem] = useState("");
  const items = useSyncExternalStore(
    (callback) => room.collection("todo_demo").subscribe(callback),
    () => room.collection("todo_demo").getList()
  ) || [];
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    await room.collection("todo_demo").create({
      text: newItem,
      completed: false,
      color: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500"][Math.floor(Math.random() * 4)]
    });
    setNewItem("");
  };
  const toggleComplete = async (item) => {
    try {
      await room.collection("todo_demo").update(item.id, {
        completed: !item.completed
      });
    } catch (e) {
      alert("You can only edit items you created!");
    }
  };
  const deleteItem = async (id) => {
    try {
      await room.collection("todo_demo").delete(id);
    } catch (e) {
      alert("You can only delete items you created!");
    }
  };
  return /* @__PURE__ */ jsxDEV(
    FeatureSection,
    {
      title: "Realtime Database",
      description: "Persistent, synchronized records shared across all users.",
      codeSnippet: CODE,
      children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleAdd, className: "flex gap-2 mb-8", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: newItem,
              onChange: (e) => setNewItem(e.target.value),
              placeholder: "Add a shared task...",
              className: "flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 80,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV(Plus, { size: 18 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 91,
                  columnNumber: 13
                }, this),
                " Add"
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 87,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
          items.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-center text-slate-500 py-10 italic", children: "No items yet. Be the first to add one!" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          items.map((item) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `group flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all hover:bg-slate-800 ${item.completed ? "opacity-50" : ""}`,
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => toggleComplete(item),
                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.completed ? "bg-green-500 border-green-500" : "border-slate-500 hover:border-blue-400"}`,
                    children: item.completed && /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-white rounded-full" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 115,
                      columnNumber: 36
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 107,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: `text-lg truncate ${item.completed ? "line-through text-slate-500" : "text-white"}`, children: item.text }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 119,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-xs text-slate-500 mt-1", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-slate-400", children: [
                      "@",
                      item.username
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 123,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "\u2022" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 124,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDEV(Clock, { size: 10 }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 126,
                        columnNumber: 21
                      }, this),
                      new Date(item.created_at).toLocaleTimeString()
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 125,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 122,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 118,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: `w-3 h-3 rounded-full ${item.color || "bg-slate-500"}` }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 132,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => deleteItem(item.id),
                    className: "opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-red-400 transition-all",
                    title: "Delete",
                    children: /* @__PURE__ */ jsxDEV(Trash2, { size: 18 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 139,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 134,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            item.id,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 103,
              columnNumber: 13
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 95,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}
export {
  RealtimeDatabase as default
};
