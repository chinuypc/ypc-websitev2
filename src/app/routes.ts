import { createHashRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import WaitlistPage from "./pages/WaitlistPage";
import BrochurePage from "./pages/BrochurePage";
import ReferralPage from "./pages/ReferralPage";
import AboutPage from "./pages/AboutPage";
import AuditReportPage from "./pages/AuditReportPage";
import AuditFinalPage from "./pages/AuditFinalPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";

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