export type ProjectLink = { label: string; href: string };

export type Stage = { title: string; detail: string };

export type CaseStudy = {
  /** One or two sentences: the problem and what was built. */
  summary: string;
  /** Headline numbers shown as tiles. */
  results: { value: string; label: string }[];
  /** Ordered steps drawn as the pipeline diagram. */
  stages: Stage[];
  table?: { caption: string; columns: string[]; rows: string[][]; highlightRow?: number; note?: string };
  sections: { heading: string; points: string[] }[];
  images: { src: string; alt: string; caption: string; width: number; height: number }[];
};

export type Project = {
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  badge: string;
  links: ProjectLink[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "sp500-abnormal-move-prediction",
    name: "Abnormal Move Prediction in S&P 500 Stocks",
    description:
      "Random Forest reached test AUC 0.72 (F1 0.31 at a 2% move threshold) predicting abnormal next-day price moves across 505 S&P 500 stocks. End-to-end ML pipeline over 619K+ daily OHLCV rows spanning 5 years, with 12 no-lookahead features engineered from price and volume history. Used strict time-based train/validation/test splits to prevent data leakage and tuned hyperparameters on validation F1 across four model families. Feature importance and L1 sparsification identified volatility and price-range features as the strongest signals.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Time-Series Validation", "Feature Engineering"],
    badge: "Published on GitHub",
    links: [{ label: "GitHub", href: "https://github.com/ikeshav42/sp500-abnormal-move-prediction" }],
    caseStudy: {
      summary:
        "Will a stock make an abnormal move tomorrow? A binary classifier over 5 years of daily price and volume data for 505 S&P 500 stocks, built for CSE 5367 (Pattern Recognition) at UT Arlington.",
      results: [
        { value: "0.723", label: "Test AUC (Random Forest)" },
        { value: "0.307", label: "Test F1 at a 2% threshold" },
        { value: "619,040", label: "Daily OHLCV rows" },
        { value: "12", label: "No-lookahead features" },
      ],
      stages: [
        { title: "Load", detail: "619,040 daily OHLCV rows for 505 stocks, 2013–2018" },
        { title: "Engineer features", detail: "12 per stock-day (returns, volatility, price range, gap, true range), past data only" },
        { title: "Label", detail: "Next-day return beyond 2% or 1.5% in either direction" },
        { title: "Split by time", detail: "Train, validation and test in date order, no shuffling" },
        { title: "Train and tune", detail: "Five models, hyperparameters chosen on validation F1" },
        { title: "Evaluate", detail: "All models scored on the same held-out test period" },
      ],
      table: {
        caption: "Test set at the 2% threshold (12,455 abnormal and 106,397 normal stock-days)",
        columns: ["Model", "Test F1", "AUC", "Precision", "Recall"],
        rows: [
          ["Logistic regression, L1", "0.303", "0.716", "0.226", "0.460"],
          ["Logistic regression, L2", "0.303", "0.716", "0.226", "0.456"],
          ["Linear SVM", "0.300", "0.715", "0.229", "0.435"],
          ["Random Forest", "0.307", "0.723", "0.221", "0.502"],
          ["Logistic regression, L2 + PCA", "0.301", "0.715", "0.226", "0.451"],
        ],
        highlightRow: 3,
      },
      sections: [
        {
          heading: "What I found",
          points: [
            "Random Forest was best at both thresholds, which suggests nonlinear feature interactions matter.",
            "L1 and L2 regularization gave nearly identical results. L1 zeroed 2 of the 12 features without hurting performance, so those carried little independent signal.",
            "PCA at 95% variance cut 12 features to 9 components and slightly hurt performance: the dropped components held a small amount of real signal.",
            "Volatility and price-range features were consistently the strongest predictors.",
          ],
        },
        {
          heading: "Limitations",
          points: [
            "Validation F1 was higher than test F1 for every model. The test year (2017) was a calmer market than the validation year (2016), which is a real cost of a time-based split.",
            "All stochastic steps use a fixed random seed, so the numbers above reproduce from the repo.",
          ],
        },
      ],
      images: [
        {
          src: "/images/projects/sp500-roc.webp",
          alt: "ROC curves for the five models at the 2% threshold",
          caption: "ROC curves at the 2% threshold.",
          width: 1600,
          height: 1143,
        },
        {
          src: "/images/projects/sp500-feature-importance.webp",
          alt: "Random Forest feature importances at the 2% threshold",
          caption: "Feature importances at the 2% threshold.",
          width: 1600,
          height: 1067,
        },
      ],
    },
  },
  {
    slug: "bestpick",
    name: "BestPick",
    subtitle: "Chrome Extension",
    description:
      "Live Chrome extension that scans all variants on an Amazon product page and finds the lowest price across every condition: New, Like New, Very Good, Good, and Acceptable. Shipped v1.1 within 24 hours of launch, adding support for size-and-color variant grids and bundle listings. Designed the architecture first, then built it with Claude as a dev partner.",
    technologies: ["JavaScript", "Chrome Extensions", "Manifest V3", "Async/Concurrency", "HTML Parsing"],
    badge: "Live on Chrome Web Store",
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/bestpick/pgfllnifhaeoglmpdafpmmodfalpckln" },
      { label: "GitHub", href: "https://github.com/ikeshav42/bestpick-chrome-extension" },
    ],
    caseStudy: {
      summary:
        "Amazon listings can have dozens of variants, each with its own third-party offers in five conditions. Checking them by hand means opening every variant. BestPick scans them all in one pass and shows the cheapest option.",
      results: [
        { value: "5", label: "Conditions priced per variant" },
        { value: "5", label: "Concurrent fetch workers" },
        { value: "~2×", label: "Faster than one-at-a-time fetching" },
        { value: "24 h", label: "From launch to v1.1" },
      ],
      stages: [
        { title: "Detect variants", detail: "Content script finds every variant swatch on the product page" },
        { title: "Queue", detail: "Each variant's offer listing goes into a shared queue" },
        { title: "Fetch", detail: "Pool of 5 workers, each with a randomized 250–600 ms delay" },
        { title: "Parse", detail: "Match condition headings in the markup and take the lowest price under each" },
        { title: "Stream", detail: "One result message per variant as it completes, then a done signal" },
        { title: "Display", detail: "Best overall price, a card per condition, and a sortable detail table" },
      ],
      sections: [
        {
          heading: "Design decisions",
          points: [
            "Rate-limit aware: if Amazon's bot check appears repeatedly, the scan stops and starts a cooldown (5 minutes, doubling up to a 1-hour cap) instead of reporting a false “no offers found”.",
            "Resilient parsing: prices are found by matching the condition heading text, not CSS class names, which Amazon changes over time.",
            "No account ties: every fetch omits credentials, so scans are not linked to the shopper's Amazon session.",
            "No telemetry: the only network calls are to amazon.com for the scan itself.",
            "One scan, all conditions: each variant is fetched once, and switching tabs or sort order never re-fetches.",
          ],
        },
        {
          heading: "Architecture",
          points: [
            "Manifest V3 with no build step or bundler.",
            "The service worker is an ES module split by concern: config, parser, scanner, cooldown and entry point.",
            "The panel UI runs as content scripts sharing one namespace object, split into state, rendering and event binding.",
            "Built with AI assistance: I designed the architecture first, then implemented and iterated with Claude.",
          ],
        },
      ],
      images: [
        {
          src: "/images/projects/bestpick-hero.webp",
          alt: "BestPick panel open on an Amazon product page, showing the best overall price and a price per condition",
          caption: "BestPick open on a product page with many color variants.",
          width: 1600,
          height: 860,
        },
        {
          src: "/images/projects/bestpick-summary.webp",
          alt: "BestPick summary view with the best overall price and a best-price card for each condition",
          caption: "Summary view.",
          width: 375,
          height: 370,
        },
      ],
    },
  },
  {
    slug: "f1-podium-predictions",
    name: "F1 Podium Predictions",
    description:
      "Picks 2.19 of 3 podium drivers right per race, against 2.07 for “top 3 on the grid”. Predicts the podium of each 2026 Formula 1 race from qualifying results, recent form, practice pace and weather. For every race it tests 7 scikit-learn models on 43 past races, training on earlier races only, and keeps the best one. Each race has its own notebook and a public scorecard, misses included.",
    technologies: ["Python", "scikit-learn", "XGBoost", "pandas", "OpenF1 API"],
    badge: "Published on GitHub",
    links: [{ label: "GitHub", href: "https://github.com/ikeshav42/f1-podium-predictions" }],
    caseStudy: {
      summary:
        "Before each 2026 race I predict the podium from the qualifying result and publish it. There is one notebook per race, so every prediction can be traced and checked against what happened.",
      results: [
        { value: "2.19 / 3", label: "Podium drivers right per race (best model)" },
        { value: "2.07 / 3", label: "Baseline: top 3 on the grid" },
        { value: "43", label: "Races in the walk-forward test" },
        { value: "7", label: "Models compared" },
      ],
      stages: [
        { title: "Download", detail: "Race results from Jolpica through fastf1; weather and practice times from OpenF1" },
        { title: "Build inputs", detail: "Grid position, form over the last 5 races, podium rate, team points, circuit history" },
        { title: "Walk-forward test", detail: "7 models, each race predicted using earlier races only" },
        { title: "Select", detail: "Keep the model with the most podium drivers right per race" },
        { title: "Predict", detail: "Apply it to the new grid, with penalties added by hand" },
        { title: "Publish", detail: "Notebook, podium card and a public scorecard" },
      ],
      table: {
        caption: "Scorecard",
        columns: ["Race", "Predicted podium", "Actual podium", "Right"],
        rows: [
          ["Mexico City (1 Nov)", "Russell, Verstappen, Hamilton", "Verstappen, Hamilton, Antonelli", "2 of 3"],
          ["Brazil (8 Nov), first version", "Russell, Norris, Verstappen", "Norris, Verstappen, Hadjar", "2 of 3"],
          ["Brazil (8 Nov), corrected version", "Russell, Norris, Leclerc", "Norris, Verstappen, Hadjar", "1 of 3"],
        ],
        note: "Mexico was re-run after the race using only pre-race data. The first Brazil version ignored grid penalties; the corrected run was committed during the race, so it is not a true pre-race prediction.",
      },
      sections: [
        {
          heading: "What I found",
          points: [
            "The edge over the grid rule is small (2.19 against 2.07) and I would not call it proven.",
            "The models mostly agree with the grid, then move a few drivers up or down based on recent form.",
            "Practice pace and how wet qualifying was did not help. Recent form without the grid was clearly worse.",
          ],
        },
        {
          heading: "Limitations",
          points: [
            "Penalties are entered by hand from news and race control messages.",
            "The race-day weather forecast is not an input.",
            "With about 43 test races, small differences between models are mostly luck.",
            "Drivers starting far back with strong recent form are where the models disagree most.",
          ],
        },
      ],
      images: [],
    },
  },
  {
    slug: "claude-networking-tracker",
    name: "Claude Networking Tracker",
    description:
      "A private tracker for LinkedIn connection requests, built to be updated by Claude in one line. It has a blank tracker page, a Claude skill that adds and updates rows with minimal tokens, and a guide to writing short, specific connect notes. Nothing is automated; you send requests yourself and it tracks status and follow-up timing.",
    technologies: ["HTML", "JavaScript", "Claude skills", "Claude artifacts"],
    badge: "Published on GitHub",
    links: [{ label: "GitHub", href: "https://github.com/ikeshav42/claude-networking-tracker" }],
  },
  {
    slug: "label-efficiency-satellite-imagery",
    name: "Label-Efficiency Study on Satellite Imagery",
    description:
      "Comparing three pretrained vision backbones (ResNet-50, CLIP, DINOv2) as frozen feature extractors on EuroSAT, measuring how classification accuracy scales with labels-per-class to find where a trained probe overtakes zero-shot transfer. Pipeline validated end-to-end at reduced scale.",
    technologies: ["Python", "ML", "Neural Nets", "Data Analysis"],
    badge: "In Progress",
    links: [],
  },
];

export const caseStudyProjects = projects.filter(
  (p): p is Project & { caseStudy: CaseStudy } => p.caseStudy !== undefined
);
