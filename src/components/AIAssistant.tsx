
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageCircle, TrendingUp, AlertCircle, CheckCircle, Lightbulb } from "lucide-react";

export const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'مرحباً! أنا مساعدك الذكي للضرائب. كيف يمكنني مساعدتك اليوم؟',
      time: '10:30 ص'
    }
  ]);
  
  const [currentInsight, setCurrentInsight] = useState(0);

  const insights = [
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'تنبيه ضريبي',
      message: 'موعد تقديم إقرار ضريبة القيمة المضافة خلال 5 أيام',
      action: 'إعداد الإقرار',
      color: 'orange'
    },
    {
      type: 'success',
      icon: CheckCircle,
      title: 'توفير محتمل',
      message: 'يمكن توفير 3,200 درهم عبر تطبيق خصم التسديد المبكر',
      action: 'تطبيق الخصم',
      color: 'green'
    },
    {
      type: 'tip',
      icon: Lightbulb,
      title: 'نصيحة ذكية',
      message: 'تحديث نظام ERP الخاص بك سيحسن دقة التقارير بنسبة 25%',
      action: 'معرفة المزيد',
      color: 'blue'
    }
  ];

  const quickActions = [
    'حساب ضريبة القيمة المضافة',
    'مواعيد الإقرارات القادمة',
    'تحليل المخاطر الضريبية',
    'توقعات الدفعات'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* AI Chat Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            المساعد الذكي للضرائب
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
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
            <h5 className="font-semibold mb-2 text-sm">إجراءات سريعة</h5>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage(action)}
                  className="text-xs h-auto py-2 px-3 justify-start"
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
            رؤى ذكية في الوقت الفعلي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Insight */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
            <div className="flex items-start gap-3">
              {React.createElement(insights[currentInsight].icon, {
                className: `h-6 w-6 text-${insights[currentInsight].color}-600`
              })}
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">
                  {insights[currentInsight].title}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {insights[currentInsight].message}
                </p>
                <Button size="sm" className={`bg-${insights[currentInsight].color}-600`}>
                  {insights[currentInsight].action}
                </Button>
              </div>
            </div>
          </div>

          {/* Analytics Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-emerald-50 rounded-lg text-center">
              <div className="text-lg font-bold text-emerald-600">94%</div>
              <div className="text-xs text-gray-600">دقة التنبؤات</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-lg font-bold text-blue-600">2.1M</div>
              <div className="text-xs text-gray-600">درهم محفوظ</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-center">
              <div className="text-lg font-bold text-purple-600">156</div>
              <div className="text-xs text-gray-600">خطأ تم تجنبه</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-center">
              <div className="text-lg font-bold text-yellow-600">87%</div>
              <div className="text-xs text-gray-600">تحسين الكفاءة</div>
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">قدرات الذكاء الاصطناعي</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>تحليل البيانات في الوقت الفعلي</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>كشف الأخطاء والمخاطر</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>توقع الالتزامات المستقبلية</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>اقتراح التحسينات</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
