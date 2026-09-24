export type Project = {
  title: string
  href: string
  description: string
  image: string
  darkModeImage: string
  githubLink: string
  liveLink: string
  skills: string[]
  descriptionList: string[]
}

export const PROJECTS: Project[] = [
  {
    title: "VentureNest",
    href: "/projects/venturenest",
    description:
      "A MERN + TypeScript platform connecting startups and investors through a structured pitch-to-deal workflow, built with Clean Architecture and full observability",
    image: "/assets/venturenest.png",
    darkModeImage: "/assets/venturenest.png",
    githubLink: "https://github.com/Shaun-N-S/VentureNest_",
    liveLink: "https://vn.shaunns.online/",
    skills: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "WebRTC",
      "React",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Docker",
      "AWS",
    ],
    descriptionList: [
      "Clean Architecture with domain/application/infrastructure layers and dependency injection",
      "Role-based access control enforced on both client and server",
      "JWT authentication with refresh-token rotation",
      "Stripe-backed subscription billing with server-side plan enforcement",
      "Real-time WebRTC video sessions and chat over Socket.IO backed by Redis",
      "Full observability with Prometheus and Grafana, dashboards and alerting provisioned as code",
      "Health-gated CI/CD pipeline that builds, deploys, and verifies the backend on every push to main",
    ],
  },
  {
    title: "Spectrax",
    href: "/projects/spectrax",
    description:
      "A full-stack e-commerce platform for electronics with secure checkout, built on MVC architecture and deployed on AWS",
    image: "/assets/spectrax.png",
    darkModeImage: "/assets/spectrax.png",
    githubLink: "https://github.com/Shaun-N-S/Spectraxgit",
    liveLink: "https://www.spectrax.shaunns.online/",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "AWS",
    ],
    descriptionList: [
      "REST APIs for product browsing, cart/order management, and checkout",
      "JWT and OAuth 2.0 authentication",
      "End-to-end Razorpay payment integration",
      "Responsive frontend built with Tailwind CSS",
      "Deployed on AWS EC2 with S3 for media storage",
    ],
  },
]
