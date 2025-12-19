import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { TestComposition } from "./composition.jsx";
const App = () => {
  return /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", maxWidth: 420, height: 740, borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }, children: /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: TestComposition,
      durationInFrames: 180,
      fps: 30,
      compositionWidth: 540,
      compositionHeight: 960,
      loop: true,
      controls: true,
      autoplay: true,
      inputProps: { title: "Remotion Test" },
      style: { width: "100%", height: "100%", background: "#0b1220" }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 7
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 5
  });
};
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 25,
  columnNumber: 51
}));
