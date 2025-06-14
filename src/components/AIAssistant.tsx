
import React from 'react';
import { ProactiveTasks } from './ai-assistant/ProactiveTasks';
import { AIChat } from './ai-assistant/AIChat';

export const AIAssistant = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ProactiveTasks />
      <AIChat />
    </div>
  );
};
