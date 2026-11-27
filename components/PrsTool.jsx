"use client";

import { useMemo, useState } from "react";
import { prsCategories, prsQuestions, prsAnswers, prsBands } from "@/lib/prs";

const CALENDLY_URL = "https://calendly.com/devahsanali/30min";

// Full class names (Tailwind needs literal strings).
const TONE = {
  secondary: { text: "text-secondary", bar: "bg-secondary", border: "border-secondary/40", bg: "bg-secondary/10" },
  primary: { text: "text-primary", bar: "bg-primary", border: "border-primary/40", bg: "bg-primary/10" },
  tertiary: { text: "text-tertiary", bar: "bg-tertiary", border: "border-tertiary/40", bg: "bg-tertiary/10" },
  error: { text: "text-error", bar: "bg-error", border: "border-error/40", bg: "bg-error/10" },
};

function toneFor(pct) {
  if (pct >= 80) return "secondary";
  if (pct >= 60) return "primary";
  if (pct >= 40) return "tertiary";
  return "error";
}

export function PrsTool() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const answered = Object.keys(answers).length;
  const total = prsQuestions.length;
  const complete = answered === total;

  const result = useMemo(() => {
    const points = prsQuestions.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
    const score = Math.round((points / (total * 2)) * 100);
    const band = prsBands.find((b) => score >= b.min);
    const cats = prsCategories.map((c) => {
      const qs = prsQuestions.filter((q) => q.category === c.id);
      const p = qs.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
      return { ...c, pct: Math.round((p / (qs.length * 2)) * 100) };
    });
    // Gaps in priority order: category order first, "No" before "Partly".
    const gaps = prsCategories.flatMap((c) =>
      prsQuestions
        .filter((q) => q.category === c.id && (answers[q.id] ?? 0) < 2)
        .sort((a, b) => (answers[a.id] ?? 0) - (answers[b.id] ?? 0))
        .map((q) => ({ ...q, value: answers[q.id] ?? 0, categoryLabel: c.label })),
    );
    return { score, band, cats, gaps };
  }, [answers, total]);

  function choose(id, value) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  function finish() {
    setShowResult(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "prs_complete", { score: result.score });
    }
    requestAnimationFrame(() => document.getElementById("prs-result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function reset() {
    setAnswers({});
    setShowResult(false);
    document.getElementById("prs-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const band = result.band;
  const tone = TONE[band.tone];

  return (
    <div id="prs-start" className="scroll-mt-28">
      {/* Progress */}
      <div className="sticky top-20 z-20 mb-8">
        <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4">
          <div className="font-label-md text-label-md text-on-surface whitespace-nowrap">
            {answered}/{total} answered
          </div>
          <div className="h-2 flex-1 rounded-[9999px] bg-white/10 overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(answered / total) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Questions grouped by category */}
      <div className="space-y-10">
        {prsCategories.map((c) => (
          <section key={c.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">{c.icon}</span>
              <h2 className="font-headline-md text-xl md:text-2xl text-on-surface">{c.label}</h2>
            </div>
            <div className="space-y-4">
              {prsQuestions
                .filter((q) => q.category === c.id)
                .map((q) => {
                  const n = prsQuestions.indexOf(q) + 1;
                  return (
                    <fieldset key={q.id} className="glass-card rounded-2xl p-5 md:p-6">
                      <legend className="sr-only">Question {n}</legend>
                      <p className="font-body-lg text-body-lg text-on-surface mb-4">
                        <span className="text-on-surface-variant mr-2">{n}.</span>
                        {q.q}
                      </p>
                      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={`Question ${n}`}>
                        {prsAnswers.map((a) => {
                          const selected = answers[q.id] === a.value;
                          return (
                            <button
                              key={a.value}
                              type="button"
                              role="radio"
                              aria-checked={selected}
                              onClick={() => choose(q.id, a.value)}
                              className={`px-4 py-2 rounded-xl font-label-md text-label-md border transition-all ${
                                selected
                                  ? "bg-primary text-on-primary border-primary"
                                  : "border-outline/30 text-on-surface-variant hover:bg-white/10 hover:text-on-surface"
                              }`}
                            >
                              {a.label}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="button"
          onClick={finish}
          disabled={!complete}
          className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center gap-2 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          See my score
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
        {!complete && (
          <span className="font-body-md text-on-surface-variant">Answer all {total} questions to see your score.</span>
        )}
      </div>

      {/* Result */}
      {showResult && complete && (
        <section id="prs-result" className="scroll-mt-28 mt-16" aria-live="polite">
          <div className={`glass-card rounded-[2rem] p-6 md:p-10 border ${tone.border}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className={`shrink-0 w-40 h-40 rounded-[9999px] flex flex-col items-center justify-center border-4 ${tone.border} ${tone.bg}`}>
                <div className={`font-display-lg text-5xl ${tone.text}`}>{result.score}</div>
                <div className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">out of 100</div>
              </div>
              <div>
                <div className="font-label-md text-primary uppercase tracking-[0.3em] mb-2">Your production-readiness score</div>
                <h2 className={`font-headline-lg text-headline-md md:text-headline-lg mb-3 ${tone.text}`}>{band.label}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{band.text}</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
              {result.cats.map((c) => {
                const t = TONE[toneFor(c.pct)];
                return (
                  <div key={c.id} className="rounded-xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`material-symbols-outlined text-[18px] ${t.text}`}>{c.icon}</span>
                      <span className="font-label-md text-xs text-on-surface">{c.label}</span>
                    </div>
                    <div className="h-2 rounded-[9999px] bg-white/10 overflow-hidden mb-1">
                      <div className={`h-full ${t.bar}`} style={{ width: `${c.pct}%` }} />
                    </div>
                    <div className={`font-label-md text-sm ${t.text}`}>{c.pct}%</div>
                  </div>
                );
              })}
            </div>
          </div>

          {result.gaps.length > 0 && (
            <div className="mt-10">
              <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-2">What to fix, in priority order</h2>
              <p className="font-body-md text-on-surface-variant mb-6">Security and data first, because those mistakes are the hardest to undo.</p>
              <ol className="space-y-4">
                {result.gaps.map((g, i) => (
                  <li key={g.id} className="glass-card rounded-2xl p-5 md:p-6 flex gap-4">
                    <span className={`material-symbols-outlined shrink-0 ${g.value === 0 ? "text-error" : "text-tertiary"}`}>
                      {g.value === 0 ? "warning" : "lightbulb"}
                    </span>
                    <div>
                      <div className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                        {i + 1}. {g.categoryLabel} · {g.value === 0 ? "Missing" : "Partly in place"}
                      </div>
                      <p className="font-body-lg text-on-surface leading-relaxed">{g.fix}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-10 glass-card rounded-[2rem] p-6 md:p-10 text-center">
            <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-3">Want an expert to check it properly?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              A self-check finds the obvious gaps. A review finds the ones you can&apos;t see. Book a free 30-minute call and we&apos;ll go through
              your results and your codebase together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
              >
                Book a Free 30-Min Call
              </a>
              <button
                type="button"
                onClick={reset}
                className="bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10"
              >
                Start over
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
