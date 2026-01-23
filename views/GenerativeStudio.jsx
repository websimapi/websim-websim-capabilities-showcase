import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { Player } from "@websim/remotion/player";
import FeatureSection from "../components/FeatureSection.jsx";
import { MyComposition } from "../remotion/VideoComposition.jsx";
import { Sparkles, Video, Image as ImageIcon, MessageSquare } from "lucide-react";
const CODE = `
// 1. LLM Generation
const completion = await websim.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  json: true // Force JSON output
});

// 2. Image Generation
const image = await websim.imageGen({
  prompt: "Cyberpunk city",
  aspect_ratio: "16:9"
});

// 3. Remotion Video Player
<Player
  component={MyComposition}
  inputProps={{ 
    text: aiText, 
    bgImage: aiImage 
  }}
  durationInFrames={150}
  compositionWidth={1080}
  compositionHeight={1080}
  controls
/>
`;
function GenerativeStudio() {
  const [prompt, setPrompt] = useState("A mysterious forest");
  const [loading, setLoading] = useState(false);
  const [videoProps, setVideoProps] = useState({
    title: "AI Video Demo",
    subtitle: "Generated content will appear here",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7f1c91ade630?w=1000&auto=format&fit=crop&q=60",
    accentColor: "#3b82f6"
  });
  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const [imageResult, textResult] = await Promise.all([
        // Image Gen
        window.websim.imageGen({
          prompt: prompt + ", cinematic, high quality, 4k, atmospheric lighting",
          aspect_ratio: "1:1"
        }),
        // LLM Text Gen
        window.websim.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are a creative director. Generate a short, punchy title and subtitle based on the user's concept. Output JSON only: { title: string, subtitle: string, colorHex: string }"
            },
            {
              role: "user",
              content: prompt
            }
          ],
          json: true
        })
      ]);
      const textData = JSON.parse(textResult.content);
      setVideoProps({
        title: textData.title,
        subtitle: textData.subtitle,
        imageUrl: imageResult.url,
        accentColor: textData.colorHex || "#3b82f6"
      });
    } catch (err) {
      console.error(err);
      alert("Generation failed. See console.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV(
    FeatureSection,
    {
      title: "AI & Video Studio",
      description: "Combine LLMs, Image Gen, and Remotion to create dynamic media.",
      codeSnippet: CODE,
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6 h-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-800 p-4 rounded-xl border border-slate-700", children: /* @__PURE__ */ jsxDEV("form", { onSubmit: handleGenerate, className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-slate-400", children: "Creative Prompt" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: prompt,
                onChange: (e) => setPrompt(e.target.value),
                className: "flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 101,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: "bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors",
                children: [
                  loading ? /* @__PURE__ */ jsxDEV("span", { className: "animate-spin", children: "\u23F3" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 112,
                    columnNumber: 28
                  }, this) : /* @__PURE__ */ jsxDEV(Sparkles, { size: 18 }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 112,
                    columnNumber: 70
                  }, this),
                  "Generate"
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 107,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-h-0 flex flex-col md:flex-row gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative", children: /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%", maxWidth: "400px", maxHeight: "400px" }, children: /* @__PURE__ */ jsxDEV(
            Player,
            {
              component: MyComposition,
              durationInFrames: 150,
              fps: 30,
              compositionWidth: 1080,
              compositionHeight: 1080,
              controls: true,
              loop: true,
              inputProps: videoProps,
              style: { width: "100%", height: "100%" }
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 125,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 124,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 123,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 122,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-48 flex flex-col gap-3 overflow-y-auto", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-800/50 p-3 rounded-lg border border-slate-700", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-blue-400 mb-2", children: [
                /* @__PURE__ */ jsxDEV(ImageIcon, { size: 16 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 144,
                  columnNumber: 17
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold uppercase", children: "Source Image" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 144,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 143,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("img", { src: videoProps.imageUrl, className: "w-full aspect-square object-cover rounded bg-slate-900" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 146,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 142,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-800/50 p-3 rounded-lg border border-slate-700", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-green-400 mb-2", children: [
                /* @__PURE__ */ jsxDEV(MessageSquare, { size: 16 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 151,
                  columnNumber: 17
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold uppercase", children: "Generated Text" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 151,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 150,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-slate-500 uppercase", children: "Title" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 155,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-medium", children: videoProps.title }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 156,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 154,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-slate-500 uppercase", children: "Subtitle" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 159,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-slate-300", children: videoProps.subtitle }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 160,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 158,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 153,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 149,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 141,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 120,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}
export {
  GenerativeStudio as default
};
