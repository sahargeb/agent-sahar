
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Trophy, Coins, Target, BookOpen, Award } from "lucide-react";

export const Tax01Platform = () => {
  const [userPoints, setUserPoints] = useState(850);
  const [currentLevel, setCurrentLevel] = useState(3);
  const [selectedCourse, setSelectedCourse] = useState(0);

  const courses = [
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

  const achievements = [
    { title: "مبتدئ الضرائب", icon: "🎯", earned: true },
    { title: "خبير الامتثال", icon: "🏆", earned: true },
    { title: "محترف التوفير", icon: "💰", earned: false },
    { title: "سفير الضرائب", icon: "🌟", earned: false }
  ];

  const simulateQuizCompletion = () => {
    setUserPoints(prev => prev + 50);
    // Animation or toast could be added here
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GraduationCap className="h-8 w-8" />
            منصة Tax01 التعليمية
          </CardTitle>
          <p className="text-purple-100">
            تعلم تفاعلي لتقليل الغرامات وزيادة الوعي الضريبي
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Progress */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-600" />
              ملف المستخدم
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">{currentLevel}</span>
              </div>
              <h3 className="font-semibold">المستوى {currentLevel}</h3>
              <p className="text-sm text-gray-600">خبير ضرائب متقدم</p>
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

            {/* Achievements */}
            <div>
              <h4 className="font-semibold mb-3">الإنجازات</h4>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg text-center ${
                      achievement.earned
                        ? 'bg-yellow-50 border border-yellow-200'
                        : 'bg-gray-50 border border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="text-lg">{achievement.icon}</div>
                    <div className="text-xs font-medium">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              الدورات التعليمية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                onClick={() => setSelectedCourse(index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCourse === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{course.title}</h4>
                    <p className="text-sm text-gray-600">
                      {course.completed}/{course.lessons} دروس مكتملة
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={course.status === 'مكتمل' ? 'default' : 'secondary'}
                      className={course.status === 'مكتمل' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {course.status}
                    </Badge>
                    <div className="text-sm font-semibold text-purple-600 mt-1">
                      +{course.points} نقطة
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">التقدم</span>
                    <span className="text-sm font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Interactive Quiz */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-emerald-600" />
            سؤال تفاعلي - اربح نقاط!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border">
            <h4 className="font-semibold mb-3">
              ما هي النسبة الصحيحة لضريبة القيمة المضافة في دولة الإمارات؟
            </h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                أ) 3%
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start bg-green-50 border-green-300"
                onClick={simulateQuizCompletion}
              >
                ب) 5% ✓
              </Button>
              <Button variant="outline" className="w-full justify-start">
                ج) 10%
              </Button>
              <Button variant="outline" className="w-full justify-start">
                د) 15%
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Badge className="bg-emerald-100 text-emerald-800">
              اربح 50 نقطة عند الإجابة الصحيحة
            </Badge>
            <Button onClick={simulateQuizCompletion} className="bg-emerald-600">
              تأكيد الإجابة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Gamification Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="font-semibold mb-2">نظام المكافآت</h3>
            <p className="text-sm text-gray-600">
              اربح نقاط وحول الغرامات إلى خصومات
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6 text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">تحديات شهرية</h3>
            <p className="text-sm text-gray-600">
              مسابقات وتحديات لزيادة المعرفة
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6 text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">أهداف شخصية</h3>
            <p className="text-sm text-gray-600">
              خطط تعلم مخصصة حسب احتياجاتك
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
