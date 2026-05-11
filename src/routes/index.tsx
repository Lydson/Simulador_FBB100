import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  BookOpen,
  Target,
  ArrowRight,
  RotateCcw,
  BarChart3,
  Clock,
  Trophy,
  Award,
} from "lucide-react";
import { questionBank, type Question } from "@/data/questions";

export const Route = createFileRoute("/")({
  component: Index,
});

type HistoryRecord = {
  id: number;
  date: string;
  type: number;
  score: number;
  time: number;
};

function shuffleArray<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

function Index() {
  const [screen, setScreen] = useState<"home" | "exam" | "results">("home");
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [examHistory, setExamHistory] = useState<HistoryRecord[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fbb100_history");
      if (saved) setExamHistory(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    if (!timerActive || screen !== "exam") return;
    const id = setInterval(() => setElapsedTime((p) => p + 1), 1000);
    return () => clearInterval(id);
  }, [timerActive, screen]);

  const startExam = (count: number) => {
    setExamQuestions(shuffleArray(questionBank).slice(0, count));
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setElapsedTime(0);
    setTimerActive(true);
    setScreen("exam");
  };

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: idx });
  };

  const finishExam = () => {
    setTimerActive(false);
    let correct = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) correct++;
    });
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const newRecord: HistoryRecord = {
      id: Date.now(),
      date: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: examQuestions.length,
      score: percentage,
      time: elapsedTime,
    };
    const updated = [newRecord, ...examHistory].slice(0, 10);
    setExamHistory(updated);
    try {
      localStorage.setItem("fbb100_history", JSON.stringify(updated));
    } catch {}
    setScreen("results");
  };

  const handleNext = () => {
    if (!showExplanation) {
      if (userAnswers[currentQuestionIndex] === undefined) return;
      setShowExplanation(true);
    } else if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex((p) => p + 1);
      setShowExplanation(false);
    } else {
      finishExam();
    }
  };

  const results = useMemo(() => {
    if (examQuestions.length === 0) return null;
    let correct = 0;
    const missedTopics: Record<string, number> = {};
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) correct++;
      else missedTopics[q.topic] = (missedTopics[q.topic] || 0) + 1;
    });
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const sortedMissedTopics = Object.entries(missedTopics)
      .map(([topic, count]) => ({ topic, count }))
      .sort((a, b) => b.count - a.count);
    return { correct, total: examQuestions.length, percentage, sortedMissedTopics };
  }, [examQuestions, userAnswers]);

  if (screen === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <header className="mb-10 text-center">
            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Trophy className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simulador FBB100 | LGPD
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Prepare-se para a certificação Febraban Correspondente Completo. Escolha o tamanho do seu simulado abaixo.
            </p>
          </header>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-4 w-4" /> Iniciar simulado
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ExamButton onClick={() => startExam(10)} icon={<Target className="h-6 w-6" />} label="Rápido" sub="10 Questões" />
              <ExamButton onClick={() => startExam(30)} icon={<BarChart3 className="h-6 w-6" />} label="Médio" sub="30 Questões" />
              <ExamButton onClick={() => startExam(60)} icon={<Award className="h-6 w-6" />} label="Completo" sub="60 Questões" highlight />
            </div>
          </section>

          {examHistory.length > 0 && (
            <section className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Clock className="h-4 w-4" /> Seu desempenho (últimas provas)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="py-2 pr-4 font-medium">Data</th>
                      <th className="py-2 pr-4 font-medium">Tipo</th>
                      <th className="py-2 pr-4 font-medium">Acertos</th>
                      <th className="py-2 font-medium">Tempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examHistory.map((item) => (
                      <tr key={item.id} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-foreground">{item.date}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{item.type} questões</td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              item.score >= 70
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                                : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                            }`}
                          >
                            {item.score}%
                          </span>
                        </td>
                        <td className="py-3 text-muted-foreground">{formatTime(item.time)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (screen === "exam") {
    const q = examQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;
    const isCorrect = userAnswers[currentQuestionIndex] === q.correctIndex;

    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              Questão {currentQuestionIndex + 1} de {examQuestions.length}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {formatTime(elapsedTime)}
            </span>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-primary">{q.topic}</span>
          </div>
          <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              {q.text}
            </h2>

            <div className="space-y-3">
              {q.options.map((option, idx) => {
                const isSelected = userAnswers[currentQuestionIndex] === idx;
                const isCorrectOption = q.correctIndex === idx;
                let cls =
                  "border-border bg-background hover:border-primary/40 hover:bg-primary/5 cursor-pointer";
                if (showExplanation) {
                  cls = "border-border opacity-60 cursor-default";
                  if (isCorrectOption)
                    cls =
                      "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium";
                  else if (isSelected && !isCorrectOption)
                    cls =
                      "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 opacity-100";
                } else if (isSelected) {
                  cls = "border-primary bg-primary/10 text-foreground";
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-all ${cls}`}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                      {showExplanation && isCorrectOption ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      ) : showExplanation && isSelected && !isCorrectOption ? (
                        <XCircle className="h-5 w-5 text-rose-600" />
                      ) : (
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            isSelected ? "border-primary" : "border-muted-foreground/30"
                          }`}
                        >
                          {isSelected && <span className="h-2 w-2 rounded-full bg-primary" />}
                        </span>
                      )}
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{option}</span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div
                className={`mt-6 rounded-xl border-l-4 p-4 ${
                  isCorrect
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                    : "border-rose-500 bg-rose-50 dark:bg-rose-950/30"
                }`}
              >
                <div
                  className={`mb-1 flex items-center gap-2 text-sm font-semibold ${
                    isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Resposta correta!
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4" /> Resposta incorreta
                    </>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{q.explanation}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              disabled={userAnswers[currentQuestionIndex] === undefined}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {!showExplanation
                ? "Verificar resposta"
                : currentQuestionIndex < examQuestions.length - 1
                ? "Próxima questão"
                : "Finalizar simulado"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // results screen
  if (!results) return null;
  const { percentage, correct, total, sortedMissedTopics } = results;
  const isPass = percentage >= 70;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="text-center">
            <div
              className={`mx-auto mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full ${
                isPass
                  ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300"
              }`}
            >
              {isPass ? <Trophy className="h-10 w-10" /> : <Target className="h-10 w-10" />}
            </div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              {isPass ? "Aprovado!" : "Continue praticando"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Você acertou {correct} de {total} questões em {formatTime(elapsedTime)}.
            </p>
            <div className={`mt-6 text-6xl font-bold ${isPass ? "text-emerald-600" : "text-rose-600"}`}>
              {percentage}%
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Aprovação a partir de 70%</p>
          </div>

          {sortedMissedTopics.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <BarChart3 className="h-4 w-4 text-primary" /> Tópicos para revisar
              </h3>
              <div className="space-y-2">
                {sortedMissedTopics.map((t) => (
                  <div
                    key={t.topic}
                    className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-4 py-2.5"
                  >
                    <span className="text-sm text-foreground">{t.topic}</span>
                    <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                      {t.count} {t.count === 1 ? "erro" : "erros"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => startExam(total)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              <RotateCcw className="h-4 w-4" /> Refazer simulado
            </button>
            <button
              type="button"
              onClick={() => setScreen("home")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExamButton({
  onClick,
  icon,
  label,
  sub,
  highlight,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border-2 p-6 transition-all ${
        highlight
          ? "border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/10"
          : "border-border bg-background hover:border-primary/40 hover:bg-primary/5"
      }`}
    >
      {highlight && (
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
          Oficial
        </span>
      )}
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
        {icon}
      </span>
      <span className="text-base font-semibold text-foreground">{label}</span>
      <span className="text-xs text-muted-foreground">{sub}</span>
    </button>
  );
}