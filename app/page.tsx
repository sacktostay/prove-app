"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Flame,
  Target,
  BookOpen,
  Trophy,
  Play,
  Plus,
} from "lucide-react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Work on your highest-priority goal for 90 minutes",
    completed: false,
  },
  {
    id: 2,
    title: "Complete one uncomfortable task you've been avoiding",
    completed: false,
  },
  {
    id: 3,
    title: "Spend 30 minutes learning something that moves you forward",
    completed: false,
  },
  {
    id: 4,
    title: "Write today's PROVE journal",
    completed: false,
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [journal, setJournal] = useState("");

  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

  function toggleTask(id: number) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
              Your journey starts here
            </p>

            <h1 className="text-7xl font-black tracking-[-0.06em] md:text-9xl">
              PROVE<span className="text-neutral-500">.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
              Choose something difficult. Work toward it every day.
              Document the journey. Then prove you did it.
            </p>

            <button
              onClick={() => setStarted(true)}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Start Your PROVE
              <ArrowRight size={20} />
            </button>

            <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
              {[
                ["01", "Choose", "Define something worth pursuing."],
                ["02", "Execute", "Turn your goal into daily action."],
                ["03", "Prove", "Finish the journey and tell the story."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6"
                >
                  <span className="text-sm text-neutral-600">{number}</span>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-neutral-900 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-2xl font-black tracking-[-0.05em]">
            PROVE<span className="text-neutral-500">.</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs text-neutral-600">CURRENT STREAK</p>
              <p className="font-bold">1 DAY 🔥</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800">
              M
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Your Mission
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Build something
                <br />
                worth proving.
              </h1>

              <p className="mt-4 max-w-xl text-neutral-500">
                Your mission is the thing you're willing to work toward when
                nobody is watching.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 px-5 py-3 text-sm font-semibold transition hover:bg-neutral-900">
              <Plus size={18} />
              Edit Mission
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">
                    Today's PROVE
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    October 8, 2026
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-black">{progress}%</p>
                  <p className="text-xs text-neutral-600">COMPLETE</p>
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-neutral-900">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-8 space-y-3">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex w-full items-center gap-4 rounded-2xl border border-neutral-900 bg-black p-4 text-left transition hover:border-neutral-700"
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                        task.completed
                          ? "border-white bg-white text-black"
                          : "border-neutral-700"
                      }`}
                    >
                      {task.completed && <Check size={16} />}
                    </div>

                    <span
                      className={
                        task.completed
                          ? "text-neutral-600 line-through"
                          : "text-neutral-200"
                      }
                    >
                      {task.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="flex items-center gap-3">
                <Target size={20} />
                <h3 className="font-bold">Your Goal</h3>
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Build a $100K business
              </h2>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-neutral-500">Progress</span>
                  <span>$12,450 / $100,000</span>
                </div>

                <div className="h-2 rounded-full bg-neutral-900">
                  <div className="h-full w-[12%] rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="flex items-center gap-3">
                <Flame size={20} />
                <h3 className="font-bold">Consistency</h3>
              </div>

              <p className="mt-5 text-4xl font-black">14</p>
              <p className="text-sm text-neutral-600">day streak</p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="flex items-center gap-3">
                <Trophy size={20} />
                <h3 className="font-bold">Milestone</h3>
              </div>

              <p className="mt-5 text-xl font-bold">$25K Revenue</p>

              <p className="mt-1 text-sm text-neutral-600">
                12,550 more to go
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-6 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <BookOpen size={20} />

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">
                Daily Journal
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Document today's journey.
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-neutral-500">
            Write as if you've already become the person you're trying to
            become. What did you accomplish? What did you overcome? What
            happens tomorrow?
          </p>

          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Today, I proved that..."
            className="mt-6 min-h-40 w-full resize-none rounded-2xl border border-neutral-800 bg-black p-5 text-white outline-none transition placeholder:text-neutral-700 focus:border-neutral-500"
          />

          <div className="mt-4 flex justify-end">
            <button className="rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]">
              Save Journal
            </button>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl border border-neutral-800 bg-white text-black">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                The End Goal
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                One day, this becomes your story.
              </h2>

              <p className="mt-5 leading-relaxed text-neutral-600">
                Every task, milestone, journal entry, failure and victory is
                building the story of how you got there.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-bold text-white">
                <Play size={17} />
                Preview Your Story
              </button>
            </div>

            <div className="flex min-h-72 items-center justify-center bg-neutral-100 p-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                  Your future film
                </p>

                <p className="mt-4 text-6xl font-black tracking-[-0.06em]">
                  PROVEN.
                </p>

                <p className="mt-3 text-sm text-neutral-500">
                  Coming when you earn it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
