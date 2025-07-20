import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="mx-auto flex h-screen max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 py-16 select-none md:flex-row md:px-8 md:py-24">
      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Achieve <span className="text-primary">FIRE</span> Faster
        </h1>
        <p className="text-muted-foreground mb-8 max-w-xl text-lg md:text-2xl">
          Calculate your path to Financial Independence &amp; Early Retirement.
          Track spending, upload expenses, and visualize your journey, all in
          one place.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-start">
          <Button asChild size="lg" className="px-8 text-lg">
            <a href="/fire-num">Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 text-lg">
            <a href="features">View Features</a>
          </Button>
        </div>
      </div>
      {/* Right: Hero Image */}
    </section>
  );
}
