
import { LucideIcon } from "lucide-react";

export type Priority = 'urgent' | 'opportunity' | 'recommendation';

export interface ProactiveTask {
  icon: LucideIcon;
  title: string;
  dueDate: string;
  description: string;
  action: string;
  priority: Priority;
}

export interface Message {
  type: 'ai' | 'user';
  content: string;
  time: string;
}
