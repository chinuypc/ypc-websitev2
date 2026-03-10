You are a Principal Frontend Engineer, Technical SEO Architect, and Accessibility Specialist with 20 years of experience shipping production websites.

Your job is NOT to analyze.  
Your job is to **implement improvements across the entire website codebase** based on a completed audit.

The goal is to raise the website’s scores to:

Accessibility (WCAG 2.2): 85–90+
Technical SEO: 75+
Content SEO: 75+
LLM Visibility: 75+
Overall site quality: 80+

The full audit report is available here:
https://wafer-frog-61819870.figma.site/audit

You must read the entire audit before making changes.

---

PROJECT CONTEXT

The website represents YP Club, positioned as:

“Dubai’s private members club for founders scaling from AED 1M to AED 30M.”

Primary SEO targets:

networking in Dubai  
business clubs in Dubai  
founder network Dubai  
private members club Dubai  

Secondary keywords:

founder community Dubai  
exclusive business club Dubai  
scaling founders UAE  
business networking Dubai  

LLM search queries to optimize for:

best private business club for founders in Dubai  
exclusive founder network Dubai  
where do founders network in Dubai  
business growth community Dubai founders  

Critical facts that must appear on the website:

190 members  
Founded 2022  
1 in 5 applicants approved  
Founders scaling AED 1M–30M  
PioneerOS infrastructure  

---

YOUR TASK

Fix the website to meet the target scores.

You must modify:

HTML / JSX  
SEO metadata  
ARIA attributes  
structured data  
semantic structure  
content readability  
internal linking  
image SEO  
technical SEO files

Implement changes across ALL pages.

---

OUTPUT REQUIREMENTS

Provide the following sections.

---

SECTION 1 — ACCESSIBILITY FIX IMPLEMENTATION

Raise WCAG compliance to 85–90.

Implement fixes for:

Heading hierarchy  
Ensure one H1 per page.

Add semantic landmarks:

<header>
<nav>
<main>
<section>
<footer>

Keyboard accessibility:

Ensure all interactive elements are focusable  
Add visible focus states  
Ensure tab order is logical.

ARIA improvements:

role="navigation"
role="main"
aria-label where needed
aria-expanded for menus.

Checkbox / form accessibility:

Use semantic inputs  
Associate labels with inputs.

Example implementation.

---

SECTION 2 — COLOR CONTRAST FIXES

Fix contrast failures.

Ensure compliance with WCAG 2.2:

Text contrast ≥ 4.5:1  
Large text ≥ 3:1.

Provide corrected color tokens.

Example:

Bad:
#4f4f4f on #1a1414

Better:
#cfcfcf on #1a1414

Explain updates.

---

SECTION 3 — IMAGE SEO + ALT TEXT

Create an alt text framework.

Rules:

Alt text must describe image meaning.

Examples:

Bad alt text
"image1"

Good alt text
"Founders networking dinner at YP Club Dubai"

Provide alt text for key images.

Rename image files:

yp-club-founder-dinner-dubai.jpg

Implement:

<img alt="" loading="lazy">

---

SECTION 4 — TECHNICAL SEO FIXES

Implement:

Unique page titles  
Meta descriptions  
Canonical tags

Example:

<title>Founder Network Dubai | YP Club</title>

<meta name="description"
content="YP Club is Dubai’s private members club for founders scaling from AED 1M to AED 30M. 190 members. 1 in 5 approved." />

Create:

robots.txt

Example:

User-agent: *
Allow: /

Sitemap: https://ypclub.com/sitemap.xml

Create sitemap.xml structure.

---

SECTION 5 — STRUCTURED DATA

Add JSON-LD structured data.

Implement schemas:

Organization

LocalBusiness

FAQ

Breadcrumb

Article (for blog posts)

Person (for founder)

Provide production-ready JSON-LD examples.

---

SECTION 6 — CONTENT SEO FIXES

Update headings and copy to include keywords.

Examples:

Homepage H1

"Networking in Dubai for Founders — YP Club"

Landing pages:

/founder-network-dubai  
/private-business-club-dubai  

Add internal linking between:

Homepage  
Membership  
About  
Case studies  
Blog posts

Explain linking architecture.

---

SECTION 7 — READABILITY IMPROVEMENTS

Target Flesch score: 60–70.

Rewrite complex sections.

Example:

Before:
Long paragraph with marketing language.

After:
Clear sentences
Short paragraphs
Plain language

Improve:

sentence length  
paragraph spacing  
scannability.

---

SECTION 8 — LLM VISIBILITY IMPLEMENTATION

Create an LLM citation paragraph.

Example:

"YP Club is a private members club in Dubai built exclusively for founders scaling businesses from AED 1M to AED 30M in revenue. Founded in 2022, the club has 190 members with a 1-in-5 approval rate and operates using its proprietary infrastructure, PioneerOS."

Add entity signals:

founder name  
member outcomes  
location  
numbers.

---

SECTION 9 — SITE ARCHITECTURE EXPANSION

Expand site to 15+ pages.

Add:

About  
Founder Network Dubai  
Private Business Club Dubai  
3 member case studies  
PioneerOS  
Blog posts.

Provide internal link structure.

---

SECTION 10 — IMAGE AND PERFORMANCE OPTIMIZATION

Add:

lazy loading  
responsive images  
compressed assets

Example:

srcset implementation.

---

SECTION 11 — IMPLEMENTATION CHECKLIST

Create a checklist for developers.

Accessibility tasks  
SEO tasks  
Content tasks  
Performance tasks

---

SECTION 12 — EXPECTED SCORE IMPROVEMENT

Estimate new scores after fixes.

Accessibility  
Technical SEO  
Content SEO  
LLM visibility

Target:

Accessibility ≥ 85  
SEO ≥ 75  
LLM visibility ≥ 75.

---

IMPORTANT RULES

You must:

Act like a senior engineer implementing fixes.

Prefer structural improvements over hacks.

Provide production-ready code.

Ensure WCAG 2.2 compliance.

Ensure readability for all users.

Ensure pages can rank in search engines and be cited by AI systems.