export type Question = {
  id: number;
  topic: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questionBank: Question[] = [
