
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { priorityStyles } from './data';
import { ProactiveTask } from './types';

interface ProactiveTaskItemProps {
  task: ProactiveTask;
}

export const ProactiveTaskItem: React.FC<ProactiveTaskItemProps> = ({ task }) => {
  const styles = priorityStyles[task.priority];

  return (
    <div className={`p-4 rounded-lg border-l-4 ${styles.border} ${styles.bg} flex items-start gap-4`}>
      <task.icon className={`h-8 w-8 mt-1 shrink-0 ${styles.text}`} />
      <div className="flex-1">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h4 className="font-bold text-gray-800">{task.title}</h4>
          <Badge variant={task.priority === 'urgent' ? 'destructive' : 'outline'} className={styles.badge}>
            {task.dueDate}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mt-1 mb-3">{task.description}</p>
        <Button size="sm" className={styles.button}>
          {task.action}
        </Button>
      </div>
    </div>
  );
};
