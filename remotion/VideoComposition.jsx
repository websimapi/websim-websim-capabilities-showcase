import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, Img } from "remotion";
const MyComposition = ({ title, subtitle, imageUrl, accentColor }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps, config: { damping: 200 } });
  const textY = interpolate(frame, [0, 30], [50, 0], { extrapolateRight: "clamp" });
  const bgScale = interpolate(frame, [0, 150], [1, 1.1]);
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "black", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { transform: `scale(${bgScale})` }, children: /* @__PURE__ */ jsxDEV(Img, { src: imageUrl, style: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 20,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxDEV("div", { style: {
      transform: `scale(${scale})`,
      border: `4px solid ${accentColor}`,
      padding: "40px",
      background: "rgba(0,0,0,0.7)",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
      maxWidth: "80%"
    }, children: [
      /* @__PURE__ */ jsxDEV("h1", { style: {
        color: "white",
        fontSize: "60px",
        fontWeight: "900",
        fontFamily: "sans-serif",
        margin: "0 0 20px 0",
        opacity,
        transform: `translateY(${textY}px)`,
        textTransform: "uppercase",
        lineHeight: 1
      }, children: title }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 42,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("p", { style: {
        color: accentColor,
        fontSize: "32px",
        fontFamily: "monospace",
        margin: 0,
        opacity: interpolate(frame, [20, 40], [0, 1]),
        fontWeight: "bold"
      }, children: subtitle }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 56,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "8px",
      backgroundColor: accentColor,
      width: `${frame / 150 * 100}%`
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 71,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 5
  });
};
export {
  MyComposition
};
