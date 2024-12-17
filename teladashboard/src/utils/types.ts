export interface Task {
  id: string;
  name: string;
  datetime: string;
  priority: 'high' | 'medium' | 'low';
  duration: number;
}

export interface TechniqueProps {
  title: string;
  description: string;
  steps: string[];
  icon: React.ReactNode;
}