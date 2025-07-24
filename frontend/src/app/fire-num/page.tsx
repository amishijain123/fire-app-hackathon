"use client";
import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

const FireNumberPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const MonthyIncomeRef = React.useRef<HTMLInputElement>(null);
  const MonthlyExpensesRef = React.useRef<HTMLInputElement>(null);
  const AnnualReturnRateRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>Fire Number Calculator</title>
        <meta
          name="description"
          content="Calculate your FIRE number to achieve financial independence and early retirement."
        />
      </Head>
      <main className="mx-auto my-10 flex h-full max-w-4xl flex-col content-center justify-center px-4 py-8 select-none md:my-20">
        <h1 className="mb-20 text-center text-4xl font-bold tracking-tight uppercase md:text-6xl lg:text-7xl">
          Fire Number Calculator
        </h1>
        <Card className="flex h-full flex-col backdrop-blur-sm transition hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              Calculate Your FIRE Number
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="monthlyIncome"
                className="block text-sm font-medium"
              >
                Monthly Income
              </label>
              <Input
                ref={MonthyIncomeRef}
                id="monthlyIncome"
                type="number"
                placeholder="Enter your monthly income"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="monthlyExpenses"
                className="block text-sm font-medium"
              >
                Monthly Expenses
              </label>
              <Input
                ref={MonthlyExpensesRef}
                id="monthlyExpenses"
                type="number"
                placeholder="Enter your monthly expenses"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="annualReturnRate"
                className="block text-sm font-medium"
              >
                Expected Annual Return Rate (%)
              </label>
              <Input
                ref={AnnualReturnRateRef}
                id="annualReturnRate"
                type="number"
                placeholder="Enter expected annual return rate"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {result && <p className="font-semibold text-green-600">{result}</p>}
            <Button onClick={} className="mt-4 w-full">
              Calculate FIRE Number
            </Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default FireNumberPage;
