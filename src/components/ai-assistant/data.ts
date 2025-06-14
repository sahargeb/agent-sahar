
import { AlertCircle, Sparkles, Lightbulb } from "lucide-react";
import { ProactiveTask } from "./types";

export const priorityStyles = {
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

export const proactiveTasks: ProactiveTask[] = [
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

export const quickActions = [
    'ما هو الأثر الضريبي لتوظيف 5 موظفين جدد؟',
    'حلل لي آخر إقرار ضريبي قدمته',
    'كيف يمكنني تحسين كفاءتي الضريبية؟',
    'اشرح لي ضريبة الشركات بالتفصيل'
];
