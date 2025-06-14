
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageCircle, AlertCircle, Lightbulb, ClipboardList, Sparkles } from "lucide-react";

export const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'مرحباً بك في باقة موفق! أنا مساعدك الذكي لتيسير رحلتك الضريبية. إليك أهم المهام التي يجب التركيز عليها اليوم.',
      time: '10:30 ص'
    }
  ]);
  
  const priorityStyles = {
    urgent: {
      border: 'border-red-500',
      bg: 'bg-red-50',
      text: 'text-red-600',
      button: 'bg-red-600 hover:bg-red-700',
      badge: 'border-red-500 text-red-700 bg-red-100',
    },
    opportunity: {
      border: 'border-green-500',
      bg: 'bg-green-50',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      badge: 'border-green-500 text-green-700 bg-green-100',
    },
    recommendation: {
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      badge: 'border-blue-500 text-blue-700 bg-blue-100',
    },
  };

  const proactiveTasks = [
    {
      icon: AlertCircle,
      title: "تقديم إقرار ضريبة القيمة المضافة",
      dueDate: "يستحق خلال 5 أيام",
      description: "الإقرار الضريبي للربع الثاني على وشك الانتهاء. قم بإعداده الآن لتجنب الغرامات.",
      action: "البدء في الإعداد",
      priority: 'urgent',
    },
    {
      icon: Sparkles,
      title: "فرصة توفير: استرداد ضريبي",
      dueDate: "فرصة متاحة",
      description: "تم تحديد مصروفات مؤهلة بقيمة 12,500 درهم يمكن استردادها.",
      action: "تقديم طلب الاسترداد",
      priority: 'opportunity',
    },
    {
      icon: Lightbulb,
      title: "توصية: تحديث ملف الشركة",
      dueDate: "توصية",
      description: "نظامنا يقترح تحديث بيانات النشاط التجاري لضمان التصنيف الضريبي الصحيح.",
      action: "مراجعة الملف",
      priority: 'recommendation',
    }
  ];

  const quickActions = [
    'ما هو الأثر الضريبي لتوظيف 5 موظفين جدد؟',
    'حلل لي آخر إقرار ضريبي قدمته',
    'كيف يمكنني تحسين كفاءتي الضريبية؟',
    'اشرح لي ضريبة الشركات بالتفصيل'
  ];

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Proactive Tasks - The core of Baqat Mofaq */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            باقة موفق: قائمة مهامك الذكية
          </CardTitle>
          <CardDescription>
            مهام وتوصيات استباقية تم إنشاؤها بواسطة الذكاء الاصطناعي لضمان امتثالك وتوفيرك.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {proactiveTasks.map((task, index) => {
            const styles = priorityStyles[task.priority as keyof typeof priorityStyles];
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${styles.border} ${styles.bg} flex items-start gap-4`}>
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
          })}
        </CardContent>
      </Card>

      {/* AI Chat Interface */}
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
    </div>
  );
};
