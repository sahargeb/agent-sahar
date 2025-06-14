
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CreditCard, GraduationCap, TrendingUp, Zap, Shield, Brain, Trophy } from "lucide-react";
import { DigitalIdentity } from "../components/DigitalIdentity";
import { SmartPayment } from "../components/SmartPayment";
import { Tax01Platform } from "../components/Tax01Platform";
import { TaxPyramid } from "../components/TaxPyramid";
import { AIAssistant } from "../components/AIAssistant";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeDemo, setActiveDemo] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">الهيئة الاتحادية للضرائب</h1>
                <p className="text-emerald-100">UAE Federal Tax Authority - Smart Platform</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">{currentTime.toLocaleDateString('ar-AE')}</div>
              <div className="text-lg font-semibold">{currentTime.toLocaleTimeString('ar-AE')}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              مستقبل النظام الضريبي الذكي
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              منصة متكاملة تجمع الهوية الرقمية والذكاء الاصطناعي والتعلم التفاعلي
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold text-gray-800">الهوية الرقمية</h3>
                  <p className="text-sm text-gray-600 mt-2">نظام موحد للشركات</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">الدفع الذكي</h3>
                  <p className="text-sm text-gray-600 mt-2">تلقائي ومؤتمت</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold text-gray-800">Tax01 Platform</h3>
                  <p className="text-sm text-gray-600 mt-2">التعلم التفاعلي</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-semibold text-gray-800">الهرم الضريبي</h3>
                  <p className="text-sm text-gray-600 mt-2">تحليل الالتزام</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-12">
        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-sm">نظرة عامة</TabsTrigger>
            <TabsTrigger value="identity" className="text-sm">الهوية الرقمية</TabsTrigger>
            <TabsTrigger value="payment" className="text-sm">الدفع الذكي</TabsTrigger>
            <TabsTrigger value="education" className="text-sm">Tax01</TabsTrigger>
            <TabsTrigger value="pyramid" className="text-sm">الهرم الضريبي</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-blue-600" />
                    إحصائيات النظام الذكي
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">معدل الامتثال التلقائي</span>
                        <span className="text-sm text-emerald-600 font-semibold">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">تقليل الأخطاء</span>
                        <span className="text-sm text-blue-600 font-semibold">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">رضا المستخدمين</span>
                        <span className="text-sm text-purple-600 font-semibold">91%</span>
                      </div>
                      <Progress value={91} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                    الفوائد المحققة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">2.5M</div>
                      <div className="text-sm text-gray-600">درهم توفير شهري</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">75%</div>
                      <div className="text-sm text-gray-600">تقليل وقت المعالجة</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">12K</div>
                      <div className="text-sm text-gray-600">مستخدم نشط</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">98%</div>
                      <div className="text-sm text-gray-600">دقة البيانات</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <AIAssistant />
          </TabsContent>

          <TabsContent value="identity">
            <DigitalIdentity />
          </TabsContent>

          <TabsContent value="payment">
            <SmartPayment />
          </TabsContent>

          <TabsContent value="education">
            <Tax01Platform />
          </TabsContent>

          <TabsContent value="pyramid">
            <TaxPyramid />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
