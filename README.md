# MTX Case Management for BFSI

Interactive product landing-page prototype for connected customer service and operational case management in banking, lending, wealth management, financial services, and insurance.

## Local setup

```bash
npm install
npm run dev
```

The local development server uses Vite. No backend, database, authentication, credentials, or external service calls are required.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The Vite base path is `/MTXCaseManagementBFSI/`, matching this repository name. Static assets in `public/` are emitted under that repository subpath.

## Content assumptions

* Product views, profiles, references, analytics, documents, tasks, and timelines are fictional.
* The interface demonstrates configurable product patterns rather than a production deployment.
* Salesforce Financial Services Cloud and Service Cloud are presented as the primary application foundation.
* Institutional systems retain their designated core responsibilities.
* Integration patterns depend on approved interfaces, implementation scope, security review, and source-system behavior.

## Safeguards

* Consequential credit, fraud, dispute, suitability, coverage, claims, compliance, and enforcement decisions remain with authorized personnel.
* Customer-facing views exclude internal notes, confidential review activity, and internal risk indicators.
* The demonstration form neither sends nor retains entered information.
* Illustrative analytics are labeled and do not represent MTX or customer results.
* Security and governance language describes configurable controls, not automatic regulatory compliance.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site after changes reach `main`, or when started manually. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** once if it is not already selected.
