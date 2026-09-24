import { Button } from "@/components/ui/button"
import { HeaderTitle } from "./header-title"

export function About() {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="space-y-2 p-2">
        <p className="text-primary/90 text-base">
          I&apos;m Shaun, a full stack engineer. I mostly work with React and
          TypeScript on the frontend, and Node.js with NestJS on the backend.
          I&apos;ve built authentication systems, payment flows with Stripe and
          Razorpay, and real-time features using WebRTC and Socket.IO.
        </p>
        <p className="text-primary/90 text-base">
          Right now I&apos;m contributing to{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://www.linkedin.com/company/nelt/" target="_blank">
              NELT
            </a>
          </Button>
          , an early-stage esports startup, helping build out their chat system
          for the MVP — one-on-one chats, group chats, and team conversations,
          all in real time.
        </p>
        <p className="text-primary/90 text-base">
          I also build my own projects, like VentureNest and Spectrax. I like
          following{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a
              href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
              className="text-base"
              target="_blank"
            >
              Clean Architecture
            </a>
          </Button>{" "}
          and{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a
              href="https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
              className="text-base"
              target="_blank"
            >
              SOLID principles
            </a>
          </Button>{" "}
          in these — it just makes the codebase easier to live with as it grows.
        </p>
      </div>
    </section>
  )
}
