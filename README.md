<div align="center">

<img src="app/apple-icon.png" width="88" height="88" alt="GradSteps" />

# GradSteps

**A degree planner that builds a student's whole path to graduation in seconds.**

[![Live site](https://img.shields.io/badge/live-gradsteps.com-2563eb)](https://gradsteps.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-animations-ff0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Built by [Tanmai Kalisipudi](https://github.com/tanmaik).

<br />

<img src="docs/screenshots/hero.png" alt="The GradSteps landing page: the headline, and Jamie's undergraduate plan with semesters, courses, GPA and an MCAT prep marker" width="100%" />

</div>

## What it is

A student enters a major, a minor and a pre-professional track. GradSteps builds a
semester-by-semester plan that meets every requirement and shows when they will
graduate. Advisors see every student's plan in one dashboard and can tell who is off
track.

The first version targets the University of Pittsburgh. This repo holds the marketing
site at [gradsteps.com](https://gradsteps.com) and `janitor`, the internal tool that
builds training data for the requirement parser.

## The site

The landing page walks through the product the way a student and an advisor would use
it. Every mock on the page is a live React component animated with Framer Motion, so
the plan, the course cards and the advisor table move as you scroll.

<table>
<tr>
<td width="50%" valign="top">

### For students

Pick a major, a minor and a track like pre-med. The card fills in the total credits
and an estimated graduation term. Course cards carry an AI summary of the class, its
syllabus, a contact for the department and how hard past students found it.

</td>
<td width="50%" valign="top">

<img src="docs/screenshots/students.png" alt="The plan generator for Justin, with major, minor and pre-professional tracks, and course cards below" />

</td>
</tr>
<tr>
<td width="50%" valign="top">

<img src="docs/screenshots/advisors.png" alt="A tuition-saved counter and the advisor section with a student status table" />

</td>
<td width="50%" valign="top">

### For advisors

A running counter shows the tuition a student saves by graduating on time. The
advisor dashboard lists every student with a status of on track, check in or needs
attention.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### For the university

Cohort charts track 4-year graduation and first-year retention, with a projection
for the current class.

</td>
<td width="50%" valign="top">

<img src="docs/screenshots/metrics.png" alt="Charts of 4-year graduation rate and fall-to-spring retention for the last and current cohort" />

</td>
</tr>
</table>

## janitor

Course catalogs write enrollment rules as free text. `janitor` is a small Next.js app
that builds training data to parse them. It shows one rule at a time. You type the
structured version, or accept the output of the model trained so far. Every 50 or so
labels, you fine-tune again, so the model does more of the work each round.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The page uses a fixed desktop layout, so view it in a wide
window. The site needs no environment variables. It deploys to Vercel on every push to
`main`.
