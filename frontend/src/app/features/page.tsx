import React from "react";
import Head from "next/head";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Feature = {
  title: string;
  items: string[];
};

const featuresDict: Record<string, Feature> = {
  fireCalculator: {
    title: "🔥 FIRE Number Calculator",
    items: [
      "Input monthly income, expenses & expected annual return rate",
      "Calculates FIRE target using 4% rule (annual expenses × 25)",
      "Estimates years to FIRE based on current savings and growth rate",
      "Includes projection chart",
    ],
  },
  expenseUpload: {
    title: "📊 Expense Upload & Categorization",
    items: [
      "Upload transaction data (CSV or similar)",
      "Auto‑categorize via AI or manual categorization",
      "Display spending breakdown (pie/bar chart)",
    ],
  },
  progressDashboard: {
    title: "📈 Progress Dashboard",
    items: [
      "Shows current savings, FIRE target, % progress, time remaining",
      "Visual tracking of savings history",
    ],
  },
};

const FeaturesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Features</title>
        <meta
          name="description"
          content="Overview of MVP 2 features: FIRE calculator, expense uploader, and progress dashboard."
        />
      </Head>
      <main className="mx-auto my-10 flex h-full max-w-4xl flex-col content-center justify-center px-4 py-8 select-none md:my-20">
        <h1 className="mb-20 text-center text-4xl font-bold md:text-6xl lg:text-9xl">
          Our Features
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(featuresDict).map(([key, feature]) => (
            <Card
              key={key}
              className="flex h-full flex-col backdrop-blur-sm transition hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {feature.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default FeaturesPage;
