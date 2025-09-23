import React, { useEffect } from "react";
import CategoryV2 from "./section-components/category-v2";

export default function EmbedDonation() {
  const qs = new URLSearchParams(window.location.search);

  // pass props from query if you like:
  const showAllSections = qs.get("showAllSections") !== "false"; // default: true
  // const project = qs.get("project") ?? "apna_ghar"; // example extra prop

  // Auto-height for iframe parent (WordPress)
  useEffect(() => {
    const post = () => {
      const h = document.documentElement.scrollHeight;
      window.parent?.postMessage({ type: "WIDGET_HEIGHT", height: h }, "*"); // or target WP origin
    };
    const ro = new ResizeObserver(post);
    ro.observe(document.documentElement);
    window.addEventListener("load", post);
    post();
    return () => {
      ro.disconnect();
      window.removeEventListener("load", post);
    };
  }, []);

  return <CategoryV2 showAllSections={showAllSections} />;
}
