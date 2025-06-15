import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DigitalIdentity } from "@/components/DigitalIdentity";
import { SmartPayment } from "@/components/SmartPayment";
import { Tax01Platform } from "@/components/Tax01Platform";
import { TaxPyramid } from "@/components/TaxPyramid";
import { AIAssistant } from "@/components/AIAssistant";
import { 
  Building2, 
  CreditCard, 
  GraduationCap, 
  BarChart3, 
  Bot,
  Users,
  ArrowRight,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeDemo, setActiveDemo] = React.useState("digital-identity");

  const demos = [
    {
      id: "digital-identity",
      title: "الهوية الرقمية للشركات",
      description: "نظام موحد يربط جميع الخدمات الحكومية والمالية تلقائياً",
      icon: Building2,
      component: DigitalIdentity,
      color: "from-emerald-500 to-blue-500"
    },
    {
      id: "smart-payment",
      title: "الدفع الذكي التلقائي",
      description: "نظام دفع متقدم يتعامل مع جميع الضرائب تلقائياً",
      icon: CreditCard,
      component: SmartPayment,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: "tax01-platform",
      title: "منصة Tax01 التعليمية",
      description: "منصة تفاعلية لتعليم وتثقيف المكلفين بالضرائب",
      icon: GraduationCap,
      component: Tax01Platform,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "tax-pyramid",
      title: "الهرم الضريبي للشركات",
      description: "تصور بصري شامل لالتزامات الشركة الضريبية",
      icon: BarChart3,
      component: TaxPyramid,
      color: "from-pink-500 to-red-500"
    },
    {
      id: "ai-assistant",
      title: "المساعد الذكي الضريبي",
      description: "ذكاء اصطناعي متخصص في الاستشارات الضريبية",
      icon: Bot,
      component: AIAssistant,
      color: "from-red-500 to-orange-500"
    }
  ];

  const ActiveComponent = demos.find(demo => demo.id === activeDemo)?.component || DigitalIdentity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-3 rounded-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">الهيئة الاتحادية للضرائب</h1>
                <p className="text-gray-600">منصة الحلول الرقمية المتقدمة</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/tax-consultant">
                <Button variant="outline" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  مستشارك الضريبي
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
                تسجيل الدخول
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            مستقبل الخدمات الضريبية الرقمية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة شاملة من الحلول التقنية المبتكرة التي تعيد تعريف تجربة المكلفين مع الضرائب
          </p>
        </div>

        {/* Demos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">المشاريع المبتكرة</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="space-y-1">
                  {demos.map((demo) => (
                    <Button
                      key={demo.id}
                      variant={activeDemo === demo.id ? "secondary" : "ghost"}
                      onClick={() => setActiveDemo(demo.id)}
                      className="w-full h-auto justify-start p-3 gap-3"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-r ${demo.color}`}>
                          <demo.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-semibold text-sm text-wrap text-start">{demo.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3" key={activeDemo}>
            <div className="animate-fade-in">
              <ActiveComponent />
            </div>
          </div>
        </div>


        {/* Additional Platform */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-8 w-8" />
              منصة المستشارين الضريبيين
            </CardTitle>
            <p className="text-indigo-100">
              تواصل مع أفضل المستشارين الضريبيين المعتمدين للحصول على استشارات متخصصة
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-indigo-200">مستشار معتمد</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm text-indigo-200">استشارة مكتملة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-indigo-200">معدل الرضا</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt;1h</div>
                  <div className="text-sm text-indigo-200">وقت الاستجابة</div>
                </div>
              </div>
              <div className="ml-6">
                <Link to="/tax-consultant">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    <Briefcase className="h-5 w-5 mr-2" />
                    اكتشف المنصة
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
