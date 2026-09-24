export type Experience = {
  company: string
  title: string
  type: "Full-time" | "Internship"
  logo: string | null
  from: Date
  to: Date | null
  descriptionList: string[]
  skills: string[]
  isExpanded: boolean
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Backend & Full Stack Engineer – Contributor",
    company: "NELT",
    logo: "/assets/company/nelt.jpg",
    isExpanded: true,
    descriptionList: [
      "Shipped 11+ pull requests across a shared NestJS/TypeScript backend and React frontend",
      "Built the platform's chat system end-to-end — one-to-one, group, and team conversations — on a single MongoDB schema with a type discriminator",
      "Used Firebase Realtime Database as a publish-only layer for live updates while MongoDB remained the source of truth",
      "Built the full chat experience — conversation lists, message threads, reactions, typing indicators, read receipts",
      "Built a multi-step local-team creation wizard with real-time invitation handling, using Zustand for state management",
    ],
    from: new Date("2026-01-01"),
    to: null,
    type: "Full-time",
    skills: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "React",
      "Zustand",
      "MongoDB",
      "Firebase Realtime Database",
    ],
  },
]
