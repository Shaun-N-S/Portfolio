import { Button } from "@/components/ui/button"
import { HeaderTitle } from "./header-title"

export function About() {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="space-y-2 p-2">
        <p className="text-primary/90 text-base">
          I&apos;m Shaun, a Full Stack Engineer contributing to{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://www.linkedin.com/company/nelt/" target="_blank">
              NELT
            </a>
          </Button>
          , building production systems end to end with React, TypeScript, and
          NestJS.
        </p>
        <p className="text-primary/90 text-base">
          I work across the stack — from Node.js/NestJS backends to
          React/TypeScript frontends — with authentication and payment
          integrations like Stripe and Razorpay, and real-time communication via
          WebRTC and Socket.IO.
        </p>
        <p className="text-primary/90 text-base">
          I design applications around{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a
              href="https://en.wikipedia.org/wiki/Robert_C._Martin#Clean_Architecture"
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
              href="https://en.wikipedia.org/wiki/SOLID"
              className="text-base"
              target="_blank"
            >
              SOLID principles
            </a>
          </Button>
          , keeping systems testable and maintainable as they grow.
        </p>
      </div>
    </section>
  )
}
