import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex select-none flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto gap-8">
      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Achieve <span className="text-primary">FIRE</span> Faster
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
          Calculate your path to Financial Independence &amp; Early Retirement.
          Track spending, upload expenses, and visualize your journey, all in
          one place.
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
          <Button asChild size="lg" className="text-lg px-8">
            <a href="#get-started">Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <a href="features">View Features</a>
          </Button>
        </div>
      </div>
      {/* Right: Hero Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/hero-finance.svg"
          alt="FIRE Finance Dashboard Illustration"
          width={480}
          height={380}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
          priority
        />
      </div>
    </section>
  );
}
