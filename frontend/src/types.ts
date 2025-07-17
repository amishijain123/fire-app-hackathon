export type Notification = {
  id: number;
  message: string;
  unread: boolean;
  timestamp: Date;
};

// Feature structure
export type Feature = {
  title: string;
  items: string[];
};

// FIRE calculator inputs
export type FireInputs = {
  monthlyIncome: number;
  monthlyExpenses: number;
  expectedAnnualReturn: number; // percentage, e.g. 5 = 5%
  currentSavings: number;
};

export type NavigationLink = {
  href: string;
  label: string;
  active?: boolean;
};
