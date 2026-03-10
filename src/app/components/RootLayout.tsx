import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { Suspense, useEffect } from "react";

export function RootLayout() {
  // Set document language for accessibility
  useEffect(() => {
    document.documentElement.lang = "en";
    
    // Add viewport meta if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }

    // Add charset meta if not present
    if (!document.querySelector('meta[charset]')) {
      const meta = document.createElement("meta");
      meta.setAttribute("charset", "UTF-8");
      document.head.prepend(meta);
    }

    // Add theme-color meta
    if (!document.querySelector('meta[name="theme-color"]')) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#1a1414";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1e4d57] focus:text-[#fcfcfc] focus:px-4 focus:py-2 focus:rounded-sm font-['Inter',sans-serif] font-medium text-[12px] tracking-[1.5px] uppercase"
      >
        Skip to main content
      </a>
      <Suspense fallback={<div className="min-h-screen bg-[#1a1414]" />}>
        <Outlet />
      </Suspense>
    </>
  );
}