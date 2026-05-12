import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  BookOpen,
  Target,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BarChart3,
  Clock,
  LogOut,
} from "lucide-react";
import { questionBank, type Question } from "@/data/questions";

export const Route = createFileRoute("/")({
  component: App,
});

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

type Screen = "home" | "exam" | "results";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (timerActive && screen === "exam") {
      interval = setInterval(() => setElapsedTime((p) => p + 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
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

  const handleSelectOption = (optionIndex: number) => {
    if (showExplanation) return;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: optionIndex });
  };

  const handleNext = () => {
    if (!showExplanation) {
      if (userAnswers[currentQuestionIndex] === undefined) {
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
      }
      setShowExplanation(true);
    } else {
      if (currentQuestionIndex < examQuestions.length - 1) {
        setCurrentQuestionIndex((p) => p + 1);
        setShowExplanation(false);
      } else {
        finishExam();
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex === 0) return;
    setCurrentQuestionIndex((p) => p - 1);
    setShowExplanation(false);
  };

  const finishExam = () => {
    setTimerActive(false);
    setScreen("results");
  };

  const handleExit = () => {
    if (window.confirm("Tem certeza que deseja abandonar este simulado? O seu progresso será perdido.")) {
      setTimerActive(false);
      setScreen("home");
    }
  };

  const calculateResults = useMemo(() => {
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

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-in fade-in zoom-in duration-500 min-h-[80vh]">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl text-center border-t-4 border-blue-600">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <BookOpen className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Simulador FBB100 | LGPD</h1>
        <p className="text-gray-600 mb-8">
          Prepare-se para a certificação Febraban Correspondente Completo. Escolha o tamanho do seu simulado abaixo:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => startExam(10)}
            className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <Target className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
            <h3 className="font-bold text-lg text-gray-800">Rápido</h3>
            <p className="text-sm text-gray-500">10 Questões</p>
          </button>

          <button
            onClick={() => startExam(30)}
            className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <BarChart3 className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
            <h3 className="font-bold text-lg text-gray-800">Médio</h3>
            <p className="text-sm text-gray-500">30 Questões</p>
          </button>

          <button
            onClick={() => startExam(60)}
            className="flex flex-col items-center p-6 border-2 border-blue-200 bg-blue-50 rounded-xl hover:border-blue-600 hover:bg-blue-100 transition-all group relative overflow-hidden"
          >
            <AwardIcon className="w-8 h-8 text-blue-500 group-hover:text-blue-700 mb-3" />
            <h3 className="font-bold text-lg text-gray-800">Completo</h3>
            <p className="text-sm text-gray-600">60 Questões</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderExam = () => {
    const q = examQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;
    const hasAnswered = userAnswers[currentQuestionIndex] !== undefined;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 animate-in slide-in-from-right-4 duration-300">
        <div className="mb-8">
          <div className="flex justify-between items-center text-sm font-medium text-gray-500 mb-2">
            <span>
              Questão {currentQuestionIndex + 1} de {examQuestions.length}
            </span>
            <span className="text-blue-200 text-right max-w-[60%] truncate" title={q.topic}>
              {q.topic}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2.5">
            <div
              className="bg-blue-400 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-blue-200/70 mt-2 sm:hidden">{q.topic}</div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 mb-6 relative">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-relaxed mt-2">{q.text}</h2>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const isSelected = userAnswers[currentQuestionIndex] === idx;
              const isCorrectOption = q.correctIndex === idx;

              let optionStyle = "border-gray-200 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer";

              if (showExplanation) {
                optionStyle = "border-gray-200 opacity-60 cursor-default";
                if (isCorrectOption) {
                  optionStyle =
                    "border-green-500 bg-green-50 text-green-800 font-medium z-10 relative ring-1 ring-green-500";
                } else if (isSelected && !isCorrectOption) {
                  optionStyle = "border-red-500 bg-red-50 text-red-800 opacity-100";
                }
              } else if (isSelected) {
                optionStyle = "border-blue-500 bg-blue-50 text-blue-800 ring-1 ring-blue-500";
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`flex items-start p-4 border-2 rounded-xl transition-all ${optionStyle}`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {showExplanation && isCorrectOption ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : showExplanation && isSelected && !isCorrectOption ? (
                      <XCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-blue-500" : "border-gray-300"
                        }`}
                      >
                        {isSelected && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                      </div>
                    )}
                  </div>
                  <span className="ml-3 text-base">{option}</span>
                </div>
              );
            })}
          </div>

          {showExplanation && (
            <div
              className={`mt-6 p-4 rounded-xl border ${
                userAnswers[currentQuestionIndex] === q.correctIndex
                  ? "bg-green-50 border-green-200"
                  : "bg-orange-50 border-orange-200"
              } animate-in fade-in slide-in-from-top-4`}
            >
              <h4 className="font-bold flex items-center mb-1 text-gray-800">
                {userAnswers[currentQuestionIndex] === q.correctIndex ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Resposta Correta!
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 mr-2 text-orange-600" /> Resposta Incorreta
                  </>
                )}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{q.explanation}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pb-8">
          <button
            onClick={handleExit}
            className="flex items-center justify-center px-4 py-2 rounded-lg font-medium text-red-300 hover:text-red-200 hover:bg-white/5 transition-colors order-last sm:order-first"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair do Simulado
          </button>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center justify-center px-5 py-3 rounded-xl font-bold transition-all ${
                currentQuestionIndex === 0
                  ? "bg-slate-200 text-slate-400 opacity-50 cursor-not-allowed"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar Questão
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all ${
                hasAnswered
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {!showExplanation
                ? "Verificar Resposta"
                : currentQuestionIndex < examQuestions.length - 1
                ? "Próxima Questão"
                : "Finalizar Simulado"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!calculateResults) return null;
    const { percentage, correct, total, sortedMissedTopics } = calculateResults;
    const isPass = percentage >= 70;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div
          className={`bg-white rounded-3xl p-8 mb-6 shadow-2xl border-t-8 text-center ${
            isPass ? "border-green-500" : "border-red-500"
          }`}
        >
          <div className="inline-flex justify-center items-center w-24 h-24 rounded-full mb-4 bg-gray-50">
            {isPass ? (
              <AwardIcon className="w-12 h-12 text-green-500" />
            ) : (
              <XCircle className="w-12 h-12 text-red-500" />
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isPass ? "Parabéns, você foi Aprovado!" : "Ainda não foi dessa vez. Continue estudando!"}
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Você acertou <strong className="text-gray-900">{correct}</strong> de{" "}
            <strong className="text-gray-900">{total}</strong> questões.
          </p>

          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className={isPass ? "text-green-500" : "text-red-500"}
                  strokeDasharray={`${percentage}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute text-2xl font-bold text-gray-800">{percentage}%</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-sm text-gray-500 space-y-1">
            <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
              Tempo de Prova: <strong className="ml-1">{formatTime(elapsedTime)}</strong>
            </div>
            <p className="mt-2">*Critério de aprovação: 70%</p>
          </div>
        </div>

        {sortedMissedTopics.length > 0 && (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
              Foco de Estudo: Onde você mais errou
            </h3>
            <p className="text-gray-600 mb-6">Revisar estes temas vai aumentar muito suas chances na certificação.</p>
            <div className="space-y-4">
              {sortedMissedTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <span className="font-medium text-gray-700">{item.topic}</span>
                  <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">
                    {item.count} erro{item.count > 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 pb-8">
          <button
            onClick={() => setScreen("home")}
            className="flex justify-center items-center px-6 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl font-bold transition-all shadow-sm"
          >
            <RotateCcw className="w-5 h-5 mr-2" /> Voltar ao Início
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b3a44] via-[#1e6f73] to-[#6fb3a8] font-sans selection:bg-blue-100 flex flex-col">
      <header className="bg-transparent border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setScreen("home");
              setTimerActive(false);
            }}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 hover:bg-blue-500 transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight hidden sm:block">FBB100 Prep</span>
          </div>
          {screen === "exam" && (
            <div className="flex items-center space-x-3">
              <div className="text-sm font-bold bg-white/10 text-white px-3 py-1.5 rounded-full flex items-center border border-white/20 shadow-sm backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-1.5" />
                {formatTime(elapsedTime)}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {screen === "home" && renderHome()}
        {screen === "exam" && renderExam()}
        {screen === "results" && renderResults()}
      </main>

      <footer className="w-full bg-transparent border-t border-white/10 py-6 mt-auto">
        <div className="text-center text-white/50 text-sm font-medium">
          <a
            href="https://github.com/lydson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors inline-flex items-center"
          >
            Made by Lydson
          </a>
        </div>
      </footer>
    </div>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
