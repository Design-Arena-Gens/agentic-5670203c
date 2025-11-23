const highlights = [
  {
    title: "Framework-Agnostic Blueprints",
    description:
      "Pre-baked project scaffolds for frontend-heavy workloads with React Server Components, streaming, and edge deployments."
  },
  {
    title: "Agent-Centric Workflows",
    description:
      "Codify structured decision trees to orchestrate LLM agents, human approvals, and automated QA across environments."
  },
  {
    title: "Iterative Delivery",
    description:
      "Versioned checkpoints with Git-aware diffs keep every AI-driven change auditable, reversible, and production ready."
  }
];

const capabilityMatrix = [
  {
    name: "Design → Build Sync",
    details:
      "Translate design tokens and UX narratives into fully themed component libraries with zero-runtime CSS patterns."
  },
  {
    name: "Data Layer Hardening",
    details:
      "Infers validation, typing, and caching strategies from schema introspection. Ships Zod-powered contracts by default."
  },
  {
    name: "Observability Hooks",
    details:
      "Adds tracing, structured logging, and health probes on every deployment target with minimal configuration."
  },
  {
    name: "Continuous AI Pairing",
    details:
      "Live sidekick suggestions powered by local embeddings keep context windows trim and responses relevant."
  }
];

const deliveryTimeline = [
  {
    label: "Discovery Sync",
    body:
      "Harvest repo signals, issue trackers, and session replays to craft a prioritized execution map."
  },
  {
    label: "Automated Blueprint",
    body:
      "Generate strongly-typed scaffolds with tests, integration hooks, and guardrails tuned to your stack."
  },
  {
    label: "Human-in-the-Loop QA",
    body:
      "Codify acceptance suites, require critical approvals, and ensure every agentic change is observable."
  },
  {
    label: "Continuous Improvement",
    body:
      "Close the loop with instrumentation-informed retrospectives and adaptive deployment policies."
  }
];

const insightSnippets = [
  {
    label: "Adaptive UI Strategy",
    content:
      "Dynamic component slots align with design tokens to keep UX consistent across agent-authored updates."
  },
  {
    label: "Runtime Drift Checks",
    content:
      "Server actions ship with embedded conformance tests to catch schema drift before it hits production."
  },
  {
    label: "Edge-Ready Defaults",
    content:
      "Async boundaries streamline streaming SSR, enabling instant hydration for essential view models."
  }
];

export default function Home() {
  return (
    <main>
      <section>
        <span className="tag">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 2L3 6V12C3 17 6.8 21.7 12 22C17.2 21.7 21 17 21 12V6L12 2Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12.5L11 14.5L14.5 10"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Production-grade AI delivery
        </span>
        <div className="grid">
          <h1 style={{ fontSize: "3.2rem", letterSpacing: "-0.04em" }}>
            Launch AI-assisted software with confident, auditable automation.
          </h1>
          <p style={{ maxWidth: "640px" }}>
            Accelerate feature teams with autonomous code generation that never
            ships blind. This workspace pairs structured reasoning, modern UX
            systems, and guardrailed deployments so you can move at agentic
            speed while staying production safe.
          </p>
          <div className="cta">
            <a href="#capabilities">
              Explore capabilities
              <span aria-hidden>→</span>
            </a>
            <a className="cta__secondary" href="#playbook">
              Review playbook
            </a>
          </div>
        </div>
      </section>

      <section id="capabilities">
        <h2>Adaptive delivery for complex teams</h2>
        <p>
          Opinionated workflows align design, engineering, and QA with a shared
          agentic toolkit. Mix manual oversight with automated verifications to
          unlock rapid, dependable releases.
        </p>
        <div className="grid columns-3" style={{ marginTop: "36px" }}>
          {highlights.map((item) => (
            <div key={item.title} className="glass-panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="matrix">
        <div className="matrix__content">
          <div>
            <h2 className="matrix__title">Capability Matrix</h2>
            <p className="matrix__subtitle">
              Every engagement starts with a living blueprint that adapts to
              your stack, compliance posture, and velocity goals. Pick and mix
              modules to assemble the operating cadence that works for your
              product teams.
            </p>
          </div>
          <div className="matrix__cloud">
            {capabilityMatrix.map((card) => (
              <article key={card.name} className="matrix__card">
                <h3 style={{ marginBottom: "12px" }}>{card.name}</h3>
                <p style={{ opacity: 0.75, margin: 0 }}>{card.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="playbook">
        <h2>Playbook checkpoints</h2>
        <p>
          Blend deterministic automation with human expertise. Each phase ships
          with explicit artifacts—PRs, architectural records, dashboards—to keep
          stakeholders aligned and confident.
        </p>
        <div className="timeline" style={{ marginTop: "32px" }}>
          {deliveryTimeline.map((step) => (
            <div key={step.label} className="timeline__item">
              <h3>{step.label}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Operational insights</h2>
        <p>
          Bring your own infrastructure or start greenfield. The stack evolves
          with each release, capturing patterns that boost quality and reduce
          cognitive load for your engineering crew.
        </p>
        <div className="grid columns-2" style={{ marginTop: "32px" }}>
          {insightSnippets.map((insight) => (
            <div key={insight.label} className="glass-panel">
              <span className="tag" style={{ width: "fit-content" }}>
                {insight.label}
              </span>
              <p style={{ marginTop: "18px" }}>{insight.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Zero-drift deployment recipe</h2>
        <p>
          Production alignment is codified throughout the lifecycle. Copy this
          deployment snippet to bootstrap your own agentic pipeline with
          verification baked in.
        </p>
        <pre className="code-block">
          <code>{`name: agentic-deploy
on:
  push:
    branches: [main]

jobs:
  build-test-ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npx vercel deploy --prod --yes`}</code>
        </pre>
        <div className="cta" style={{ marginTop: "32px" }}>
          <a href="https://vercel.com" target="_blank" rel="noopener">
            Launch with Vercel
          </a>
          <a
            className="cta__secondary"
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener"
          >
            Explore AI tooling
          </a>
        </div>
      </section>

      <footer>Crafted with care by an autonomous Next.js agent.</footer>
    </main>
  );
}
