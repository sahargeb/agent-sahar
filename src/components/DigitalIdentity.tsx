
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Fingerprint, 
  BookUser, 
  FileCheck2, 
  ShieldCheck, 
  GitBranch,
  Orbit,
  CheckCheck,
  UserCog,
  Mic,
  BrainCircuit,
  Target,
  Sparkles,
  ListChecks,
  Building,
  Landmark,
  LineChart
} from "lucide-react";

// Unique Components Data
const uniqueComponents = [
  {
    icon: Fingerprint,
    title: "البصمة الرقمية المركبة",
    description: "هوية فريدة تجمع البيانات الثابتة والديناميكية للشركة، مستحيلة التكرار أو التزوير.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookUser,
    title: "الجواز الضريبي الذكي",
    description: "وثيقة رقمية متطورة مع رمز QR ديناميكي وشريحة NFC للتحقق الفوري من هوية الشركة.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FileCheck2,
    title: "التوثيق الذاتي المستمر",
    description: "نظام يتيح للشركات توثيق بياناتها ومستنداتها باستمرار عبر سجلات البلوكتشين.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: ShieldCheck,
    title: "الثقة الرقمية المتدرجة",
    description: "تصنيف الشركات حسب مستوى الثقة الرقمية مع امتيازات حصرية لكل مستوى.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: GitBranch,
    title: "المعاملات الضريبية اللامركزية",
    description: "إجراء المعاملات عبر عقود ذكية ومحفظة ضريبية رقمية مع تسوية فورية.",
    color: "from-rose-500 to-pink-500"
  },
];

// Innovative Features Data
const innovativeFeatures = [
  {
    icon: Orbit,
    title: "التوأم الضريبي الرقمي",
    description: "نسخة رقمية للشركة تحاكي وتختبر السيناريوهات الضريبية قبل تنفيذها.",
  },
  {
    icon: CheckCheck,
    title: "الإجماع الضريبي اللامركزي",
    description: "آلية للتحقق المتبادل من صحة المعاملات بين الشركات مباشرة.",
  },
  {
    icon: UserCog,
    title: "السفير الضريبي الافتراضي",
    description: "ممثل افتراضي للشركة يتعامل مع الهيئة وينفذ المعاملات الروتينية.",
  },
  {
    icon: Mic,
    title: "البصمة الصوتية للشركات",
    description: "نظام مبتكر للتعرف على هوية ممثلي الشركة عبر بصماتهم الصوتية.",
  },
  {
    icon: BrainCircuit,
    title: "الذاكرة الضريبية الجماعية",
    description: "منصة تجمع خبرات الشركات وتقدم توصيات بناءً على التجارب المماثلة.",
  },
];

const ProblemItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
    <p className="text-gray-700">{children}</p>
  </div>
);

const BenefitCard = ({ icon: Icon, title, benefits, colorClass }) => (
  <Card className="flex-1">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-3 text-sm">
          <CheckCheck className="h-4 w-4 text-green-500 shrink-0" />
          <span>{benefit}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

export const DigitalIdentity = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-4 text-3xl">
            <Building2 className="h-10 w-10" />
            نظام "البصمة الرقمية للشركات"
          </CardTitle>
          <p className="text-emerald-100 text-lg mt-2">
            هوية رقمية فريدة لكل شركة، تعمل كبصمة إلكترونية موثوقة تتيح التعامل السلس والآمن مع جميع الجهات الحكومية.
          </p>
        </CardHeader>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="text-red-600" />
            المشكلة التي يعالجها النظام
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <ProblemItem>تعدد المعرّفات والأرقام للشركة الواحدة بين مختلف الجهات.</ProblemItem>
          <ProblemItem>صعوبة التحقق من هوية الشركات في المعاملات الإلكترونية.</ProblemItem>
          <ProblemItem>تكرار طلب نفس المستندات والبيانات من الشركات مراراً وتكراراً.</ProblemItem>
          <ProblemItem>انتشار عمليات الاحتيال الضريبي وانتحال هوية الشركات.</ProblemItem>
          <ProblemItem>تعقيد الإجراءات البيروقراطية ومتطلبات الامتثال الضريبي.</ProblemItem>
        </CardContent>
      </Card>

      {/* Unique Components */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Sparkles className="text-blue-600" />
          المكونات الفريدة للنظام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueComponents.map((component, index) => (
            <Card key={index} className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${component.color}`}>
                  <component.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Innovative Features */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="text-purple-600" />
            الميزات الابتكارية الفريدة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {innovativeFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
              <div className="bg-purple-100 p-2 rounded-full">
                <feature.icon className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Benefits */}
       <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <LineChart className="text-green-600" />
            الفوائد الفريدة للنظام
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
            <BenefitCard 
                icon={Building} 
                title="للشركات" 
                benefits={["هوية رقمية موحدة", "تصفير البيروقراطية", "تخفيض تكاليف الامتثال", "تسريع المعاملات", "حماية من الاحتيال"]}
                colorClass="bg-blue-500"
            />
            <BenefitCard 
                icon={Landmark} 
                title="للهيئة الاتحادية للضرائب" 
                benefits={["تحسين دقة البيانات", "تقليل التدخل البشري", "تعزيز الامتثال الطوعي", "كشف استباقي للتهرب", "زيادة رضا المتعاملين"]}
                colorClass="bg-emerald-500"
            />
            <BenefitCard 
                icon={LineChart} 
                title="للاقتصاد الوطني" 
                benefits={["تعزيز الشفافية", "جذب الاستثمارات", "زيادة الإيرادات الضريبية", "تعزيز التنافسية العالمية", "دعم التحول الرقمي الشامل"]}
                colorClass="bg-orange-500"
            />
        </div>
      </div>
    </div>
  );
};
