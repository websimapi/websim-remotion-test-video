import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
const TestComposition = ({ title = "Remotion Test" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = interpolate(frame, [0, 30, 150, 179], [0.8, 1.05, 1.05, 0.95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const seconds = Math.floor(frame / fps);
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { background: "linear-gradient(180deg,#071026 0%, #0b1220 100%)", justifyContent: "center", alignItems: "center", color: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18, padding: 36, transform: `scale(${scale})`, opacity }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { width: 220, height: 220, borderRadius: 18, background: "linear-gradient(135deg,#0ea5a4,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 30px rgba(6,12,26,0.6)" }, children: /* @__PURE__ */ jsxDEV("svg", { width: "120", height: "120", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxDEV("path", { d: "M12 3v18", stroke: "#012", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.18" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 17,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("path", { d: "M5 12h14", stroke: "#021", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.18" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 18,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("circle", { cx: "12", cy: "12", r: "4.5", fill: "white", opacity: "0.9" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 19,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 11
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", maxWidth: 420 }, children: [
        /* @__PURE__ */ jsxDEV("h1", { style: { margin: 0, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em" }, children: title }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("p", { style: { margin: "8px 0 0", color: "#c7d2fe", fontSize: 16 }, children: [
          "Frame: ",
          frame,
          " \u2022 Seconds: ",
          seconds
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", left: 18, bottom: 18, fontSize: 12, color: "rgba(255,255,255,0.6)" }, children: [
      "test-video \u2022 ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 5
  });
};
export {
  TestComposition
};
