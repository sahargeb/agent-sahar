
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Trophy, Coins, Target, BookOpen, Award, ShieldCheck, ReceiptText, TrendingDown } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

export const TaxComplianceGame = () => {
  const [userPoints, setUserPoints] = useState(850);
  const [currentLevel, setCurrentLevel] = useState(3);
  const [complianceRate, setComplianceRate] = useState(78);
  const [selectedCourse, setSelectedCourse] = useState(0);

  const learningModules = [
    {
      title: "أساسيات ضريبة القيمة المضافة",
      progress: 75,
      points: 150,
      status: "جاري",
      lessons: 8,
      completed: 6
    },
    {
      title: "تقليل الغرامات والمخالفات",
      progress: 100,
      points: 200,
      status: "مكتمل",
      lessons: 5,
      completed: 5
    },
    {
      title: "ضريبة الشركات الجديدة",
      progress: 30,
      points: 300,
      status: "جاري",
      lessons: 12,
      completed: 4
    }
  ];

  const simulateQuizCompletion = () => {
    setUserPoints(prev => prev + 50);
    setComplianceRate(prev => Math.min(prev + 2, 100));
  };
  
  const complianceChartData = [{ name: 'compliance', value: complianceRate, fill: '#16a34a' }];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GraduationCap className="h-8 w-8" />
            رحلة الامتثال الضريبي
          </CardTitle>
          <p className="text-purple-100">
            أكمل التحديات، زد نقاطك، وقلل غراماتك بشكل مباشر.
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-600" />
              ملفك التفاعلي
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart innerRadius="70%" outerRadius="100%" data={complianceChartData} startAngle={90} endAngle={-270}>
                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                            <RadialBar background dataKey="value" cornerRadius={10} />
                            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-slate-800">
                                {`${complianceRate}%`}
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">المستوى {currentLevel}</h3>
                    <p className="text-sm text-gray-600">خبير ضرائب متقدم</p>
                    <div className="flex items-center gap-1 mt-2">
                        <ShieldCheck className="h-5 w-5 text-green-600" />
                        <span className="font-bold text-green-600">معدل الامتثال</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Coins className="h-4 w-4 text-yellow-600" />
                  النقاط
                </span>
                <span className="font-bold text-purple-600">{userPoints}</span>
              </div>
              <Progress value={(userPoints % 1000) / 10} className="h-2" />
              <p className="text-xs text-gray-500">
                {1000 - (userPoints % 1000)} نقطة للمستوى التالي
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              وحدات التعلم التفاعلية
            </CardTitle>
          </CardHeader>
          <CardContent>
            {learningModules.map((course, index) => (
              <div
                key={index}
                onClick={() => setSelectedCourse(index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all mb-3 ${
                  selectedCourse === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{course.title}</h4>
                    <p className="text-sm text-gray-600">
                      {course.completed}/{course.lessons} تحديات مكتملة
                    </p>
                  </div>
                  <Badge
                    variant={course.status === 'مكتمل' ? 'default' : 'secondary'}
                    className={course.status === 'مكتمل' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {course.status}
                  </Badge>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-emerald-300">
        <CardHeader>
            <CardTitle className="flex items-center gap-3">
                <TrendingDown className="h-7 w-7 text-emerald-700" />
                حوّل تعلمك إلى تخفيض حقيقي للغرامات
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg flex-1">
                <ReceiptText className="h-10 w-10 text-red-500" />
                <div>
                    <p className="text-sm text-gray-600">الغرامات الحالية</p>
                    <p className="text-2xl font-bold">5,000 درهم</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg flex-1">
                <TrendingDown className="h-10 w-10 text-green-500" />
                <div>
                    <p className="text-sm text-gray-600">التخفيض المكتسب بالنقاط</p>
                    <p className="text-2xl font-bold text-green-600">- 1,250 درهم</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-emerald-100 border border-emerald-300 rounded-lg flex-1">
                <ShieldCheck className="h-10 w-10 text-emerald-800" />
                <div>
                    <p className="text-sm text-emerald-900">الغرامة بعد التخفيض</p>
                    <p className="text-2xl font-bold text-emerald-800">3,750 درهم</p>
                </div>
            </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-emerald-600" />
            تحدي سريع - اربح نقاط إضافية!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border">
            <h4 className="font-semibold mb-3">
              ما هي النسبة الصحيحة لضريبة القيمة المضافة في دولة الإمارات؟
            </h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"> أ) 3% </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start bg-green-50 border-green-300"
                onClick={simulateQuizCompletion}
              >
                ب) 5% ✓
              </Button>
              <Button variant="outline" className="w-full justify-start"> ج) 10% </Button>
              <Button variant="outline" className="w-full justify-start"> د) 15% </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
