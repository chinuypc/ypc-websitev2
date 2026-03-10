import { createHashRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const WaitlistPage = lazy(() => import("./pages/WaitlistPage"));
const BrochurePage = lazy(() => import("./pages/BrochurePage"));
const ReferralPage = lazy(() => import("./pages/ReferralPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AuditReportPage = lazy(() => import("./pages/AuditReportPage"));
const AuditFinalPage = lazy(() => import("./pages/AuditFinalPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiesPolicyPage = lazy(() => import("./pages/CookiesPolicyPage"));

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "waitlist", Component: WaitlistPage },
      { path: "brochure", Component: BrochurePage },
      { path: "referral", Component: ReferralPage },
      { path: "about", Component: AboutPage },
      { path: "faq", Component: FAQPage },
      { path: "audit", Component: AuditReportPage },
      { path: "audit-final", Component: AuditFinalPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "cookies", Component: CookiesPolicyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
