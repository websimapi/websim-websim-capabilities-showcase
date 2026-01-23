import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import FeatureSection from "../components/FeatureSection.jsx";
import { Send, User } from "lucide-react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify/dist/purify.es.min.js";
const CODE = `
// 1. Post a comment
await window.websim.postComment({
  content: "This is a comment!",
  images: [url1, url2] // Optional
});

// 2. Fetch comments via API
const project = await websim.getCurrentProject();
const res = await fetch(\`/api/v1/projects/\${project.id}/comments\`);
const data = await res.json();

// 3. Listen for realtime new comments
window.websim.addEventListener('comment:created', (e) => {
  const newComment = e.comment;
  // Update UI...
});
`;
function CommentsSystem() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const loadComments = async () => {
    try {
      const project = await window.websim.getCurrentProject();
      const response = await fetch(`/api/v1/projects/${project.id}/comments`);
      const data = await response.json();
      setComments(data.comments.data || []);
    } catch (e) {
      console.error("Failed to load comments", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadComments();
    const handleNewComment = (e) => {
      setComments((prev) => [e.comment, ...prev]);
    };
    window.websim.addEventListener("comment:created", handleNewComment);
    return () => window.websim.removeEventListener("comment:created", handleNewComment);
  }, []);
  const handlePost = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      await window.websim.postComment({
        content: commentText
      });
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };
  return /* @__PURE__ */ jsxDEV(
    FeatureSection,
    {
      title: "Native Comments API",
      description: "Integrate the platform's social layer directly into your experience.",
      codeSnippet: CODE,
      children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-xl mx-auto flex flex-col h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: loading ? /* @__PURE__ */ jsxDEV("div", { className: "text-center text-slate-500 mt-10", children: "Loading comments..." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 87,
          columnNumber: 13
        }, this) : comments.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center text-slate-500 mt-10", children: "No comments yet." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 89,
          columnNumber: 13
        }, this) : comments.map((comment) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 animate-in fade-in slide-in-from-bottom-2", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: comment.author.avatar_url,
              className: "w-10 h-10 rounded-full bg-slate-700",
              alt: comment.author.username
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 93,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-slate-200", children: comment.author.display_name || comment.author.username }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 100,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-slate-500", children: new Date(comment.created_at).toLocaleDateString() }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 101,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 99,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "text-slate-300 mt-1 prose prose-invert prose-sm",
                dangerouslySetInnerHTML: {
                  __html: DOMPurify.sanitize(marked.parse(comment.raw_content))
                }
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 103,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 98,
            columnNumber: 17
          }, this)
        ] }, comment.id, true, {
          fileName: "<stdin>",
          lineNumber: 92,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-slate-800 border-t border-slate-700", children: [
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handlePost, className: "relative", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: commentText,
                onChange: (e) => setCommentText(e.target.value),
                placeholder: "Write a comment...",
                className: "w-full bg-slate-900 border border-slate-700 rounded-full py-3 px-5 pr-12 text-white focus:outline-none focus:border-blue-500 transition-colors"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 119,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "submit",
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300 transition-colors",
                children: /* @__PURE__ */ jsxDEV(Send, { size: 20 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 130,
                  columnNumber: 15
                }, this)
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 126,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-slate-500 mt-2 text-center", children: "Posting triggers the native Websim confirmation UI." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 133,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  );
}
export {
  CommentsSystem as default
};
