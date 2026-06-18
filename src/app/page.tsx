"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Menu,
  Palette,
  Smartphone,
  X,
} from "lucide-react";

const navigation = ["Home", "About", "Work", "Skills", "Contact"];

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Clean, intentional interfaces that balance personality with ease of use.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, accessible websites built with modern frontend technologies.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Thoughtful experiences that feel natural on every screen size.",
  },
];

const projects = [
  {
    number: "01",
    title: "Premium Landing Pages",
    category: "Design & Development",
    tone: "bg-[#d9d7cf]",
  },
  {
    number: "02",
    title: "Modern Web Experiences",
    category: "Frontend Development",
    tone: "bg-[#c9d0d1]",
  },
  {
    number: "03",
    title: "Responsive Interfaces",
    category: "UI/UX Design",
    tone: "bg-[#d8cfc8]",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <section id="home" className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="relative h-full">
          <div className="mx-auto flex h-full max-w-7xl flex-col px-8 py-6">
            <nav className="relative z-20 flex items-center justify-between">
              <a
                href="#home"
                className="text-2xl font-semibold text-gray-900 transition-colors hover:text-gray-700"
              >
                Juma Saidi
              </a>

              <div className="hidden items-center gap-8 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="rounded-full p-2 text-gray-900 transition-colors hover:bg-white/40 hover:text-gray-700 md:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {isMenuOpen && (
                <div
                  id="mobile-navigation"
                  className="absolute left-0 right-0 top-14 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-md md:hidden"
                >
                  {navigation.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </nav>

            <main className="flex flex-1 items-center justify-center">
              <div className="-mt-80 flex flex-col items-center px-4 text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
                  Frontend Developer &amp; Designer
                </p>

                <h1 className="flex flex-col items-center">
                  <span className="text-6xl font-normal leading-none tracking-tighter text-gray-500 md:text-7xl lg:text-8xl">
                    Thoughtful.
                  </span>
                  <span className="-mt-3 text-6xl font-normal leading-none tracking-tighter text-[#202A36] md:text-7xl lg:text-8xl">
                    Digital.
                  </span>
                </h1>

                <p className="mb-6 mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                  I build clean, responsive, and user-friendly web experiences
                  that turn ideas into real digital products.
                </p>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href="#work"
                    className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f2ed] px-8 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            About me
          </p>
          <div>
            <h2 className="max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#202A36] md:text-6xl">
              I turn ideas into digital experiences that feel clear, useful,
              and distinctly human.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
              I’m Juma Saidi, a frontend developer and designer focused on
              thoughtful interfaces and polished implementation. I enjoy the
              space where strong visual design meets clean, responsive code.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#202A36] px-8 py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Selected work
              </p>
              <h2 className="text-4xl font-normal tracking-tight md:text-6xl">
                Ideas, brought to life.
              </h2>
            </div>
            <p className="max-w-md text-gray-400">
              A selection of the kinds of digital experiences I design and
              develop.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group">
                <div
                  className={`${project.tone} flex aspect-[4/5] items-start justify-end overflow-hidden rounded-3xl p-6`}
                >
                  <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#202A36] backdrop-blur">
                    {project.number}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="text-gray-400 transition-colors group-hover:text-white" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-8 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            What I do
          </p>
          <h2 className="mb-16 max-w-2xl text-4xl font-normal tracking-tight text-[#202A36] md:text-6xl">
            Design that works. Code that lasts.
          </h2>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-gray-200 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-[#f7f6f2] p-8 md:p-10">
                <Icon className="mb-16 text-[#202A36]" size={30} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#202A36]">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d9d7cf] px-8 py-28 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-600">
            Have a project in mind?
          </p>
          <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tighter text-[#202A36] md:text-7xl lg:text-8xl">
            Let’s make something remarkable.
          </h2>
          <a
            href="mailto:"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#202A36] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1a2229]"
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer className="bg-[#202A36] px-8 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Juma Saidi</p>
          <p className="text-gray-400">Frontend Developer &amp; Designer</p>
        </div>
      </footer>
    </div>
  );
}
