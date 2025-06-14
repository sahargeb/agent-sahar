
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import { proactiveTasks } from './data';
import { ProactiveTaskItem } from './ProactiveTaskItem';

export const ProactiveTasks = () => {
  return (
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
        {proactiveTasks.map((task, index) => (
          <ProactiveTaskItem key={index} task={task} />
        ))}
      </CardContent>
    </Card>
  );
};
