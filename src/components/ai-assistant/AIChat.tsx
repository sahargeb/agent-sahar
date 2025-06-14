
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { quickActions } from './data';
import { Message } from './types';

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: 'مرحباً بك في باقة موفق! أنا مساعدك الذكي لتيسير رحلتك الضريبية. إليك أهم المهام التي يجب التركيز عليها اليوم.',
      time: '10:30 ص'
    }
  ]);

  const sendMessage = (message: string) => {
    setMessages(prev => [...prev, 
      { type: 'user', content: message, time: new Date().toLocaleTimeString('ar-AE', { hour: '2-digit', minute: '2-digit' }) },
      { 
        type: 'ai', 
        content: 'تم تحليل طلبك... بناءً على بياناتك الضريبية، إليك التوصيات المناسبة.', 
        time: new Date().toLocaleTimeString('ar-AE', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-purple-600" />
          مساعدك الذكي
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col h-[calc(100%-4rem)]">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border shadow-sm'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h5 className="font-semibold mb-2 text-sm">جرّب أن تسأل:</h5>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => sendMessage(action)}
                className="text-xs h-auto w-full py-2 px-3 justify-start text-left"
              >
                {action}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
