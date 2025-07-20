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




















// 'use client'; // ✅ This tells Next.js to render this component on the client side (required for useState)

// import { useState } from 'react'; // ✅ React hook to store form state (input and confirmation)

// import { Input } from "@/components/ui/input"; // ✅ Shadcn Input component
// import { Button } from "@/components/ui/button"; // ✅ Shadcn Button component

// export default function SavingsPage() { // ✅ This defines a React component for the page

//   const [savings, setSavings] = useState(''); 
//   // ✅ `savings` stores the value typed in the input field
//   // ✅ `setSavings` is the function used to update `savings`

//   const [confirmation, setConfirmation] = useState(''); 
//   // ✅ `confirmation` stores the confirmation message displayed after submission

//   const handleSubmit = async () => {
//     // ✅ Called when user clicks the "Submit" button

//     const response = await fetch('/api/savings', {
//       // ✅ Sends a POST request to your API route `/api/savings`
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' }, // ✅ Send data in JSON format
//       body: JSON.stringify({ savings: parseFloat(savings) }), 
//       // ✅ Convert string input to a number and send in request body
//     });

//     if (response.ok) {
//       // ✅ If API call was successful (status code 200-299)
//       setConfirmation(`Current savings: ₹${parseFloat(savings).toFixed(2)}`);
//       // ✅ Show confirmation message with ₹ amount
//     } else {
//       setConfirmation('Error submitting savings.');
//       // ✅ Show error message if something goes wrong
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4">
//       {/* ✅ A styled container using Tailwind CSS */}
      
//       <h2 className="text-2xl font-bold text-center">Enter Current Savings</h2>
//       {/* ✅ Heading at the top of the form */}

//       <Input
//         type="number"
//         placeholder="Enter amount"
//         value={savings}
//         onChange={(e) => setSavings(e.target.value)}
//       />
//       {/* ✅ Input field for number. When changed, it updates the `savings` state */}

//       <Button className="w-full" onClick={handleSubmit}>
//         Submit
//       </Button>
//       {/* ✅ Button that triggers `handleSubmit()` when clicked */}

//       {confirmation && <p className="text-center text-green-600">{confirmation}</p>}
//       {/* ✅ If `confirmation` is not empty, display it in green text */}
//     </div>
//   );
// }
