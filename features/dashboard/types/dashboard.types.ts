export interface DashboardStats {
  totalProducts: number;

  totalCategories: number;

  lowStock: number;

  noImage: number;
}

export interface DashboardCardData {
  title: string;

  value: number;

  description?: string;

  color?: "lime" | "blue" | "amber" | "red";

  icon?: React.ReactNode;
}