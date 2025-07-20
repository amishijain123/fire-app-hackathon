'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SavingsPage() {
  const [amount, setAmount] = useState('');
  const [submittedAmount, setSubmittedAmount] = useState<string | null>(null);

  const handleSubmit = () => {
    setSubmittedAmount(amount);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Enter Current Savings</h1>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in ₹"
      />
      <Button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Submit
      </Button>
      {submittedAmount && <p>Current savings: ₹{submittedAmount}</p>}
    </div>
  );
}

