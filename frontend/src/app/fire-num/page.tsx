import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import axios from "axios";

const FireNumberPage: React.FC = () => {
  const calculateFireNumber = async () => {
    // Placeholder for the calculation logic
    // This function will handle the form submission and call the backend API
    const monthlyIncome = parseFloat(
      (document.getElementById("monthlyIncome") as HTMLInputElement).value,
    );
    const monthlyExpenses = parseFloat(
      (document.getElementById("monthlyExpenses") as HTMLInputElement).value,
    );
    const annualReturnRate = parseFloat(
      (document.getElementById("annualReturnRate") as HTMLInputElement).value,
    );

    if (
      isNaN(monthlyIncome) ||
      isNaN(monthlyExpenses) ||
      isNaN(annualReturnRate)
    ) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    try {
      const response = await axios.post("/api/fire-calculator", {
        monthlyIncome,
        monthlyExpenses,
        annualReturnRate,
      });
      alert(`Your FIRE number is: ${response.data.fireNumber}`);
    } catch (error) {
      console.error("Error calculating FIRE number:", error);
      alert("Failed to calculate FIRE number. Please try again.");
    }
  };

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
                id="annualReturnRate"
                type="number"
                placeholder="Enter expected annual return rate"
              />
            </div>
            <Button className="mt-4 w-full">Calculate FIRE Number</Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
export default FireNumberPage;
