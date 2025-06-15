
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
  LineChart,
  Info,
  Rocket,
  Wrench,
  Users,
  Gauge,
  FileText,
  CheckCircle,
  Bot,
  FileSignature
} from "lucide-react";

// Updated Data based on user input

const uniqueComponents = [
  {
    icon: Fingerprint,
    title: "تقنية البصمة الرقمية المركبة",
    description: "تقنية مبتكرة تجمع بين البيانات الثابتة والديناميكية للشركة لإنشاء بصمة رقمية فريدة لا يمكن تكرارها.",
    color: "from-blue-500 to-cyan-500",
    details: [
        "طبقة البيانات الأساسية: معلومات التأسيس والترخيص",
        "طبقة البيانات المالية: المؤشرات المالية والضريبية",
        "طبقة السلوك الرقمي: أنماط المعاملات والتفاعلات",
        "طبقة العلاقات التجارية: شبكة العلاقات مع الشركات الأخرى",
        "طبقة التحقق البيومتري: بصمات المفوضين بالتوقيع"
    ]
  },
  {
    icon: BookUser,
    title: "نظام الجواز الضريبي الذكي",
    description: "وثيقة رقمية متطورة تعمل كجواز سفر ضريبي للشركة في تعاملاتها مع جميع الجهات.",
    color: "from-green-500 to-emerald-500",
    details: [
        "رمز QR ديناميكي: يتغير كل 60 ثانية لمنع التزوير",
        "شريحة NFC مدمجة: للتحقق السريع من هوية الشركة",
        "ختم رقمي متغير: يعكس الحالة الضريبية الحالية للشركة",
        "سجل المعاملات المشفر: يوثق جميع التعاملات الضريبية",
        "نظام التأشيرات الضريبية: يمنح تصاريح للمعاملات الخاصة"
    ]
  },
  {
    icon: FileSignature,
    title: "منصة التوثيق الذاتي المستمر",
    description: "نظام مبتكر يتيح للشركات توثيق بياناتها ومستنداتها بشكل مستمر دون الحاجة لتدخل الهيئة.",
    color: "from-purple-500 to-violet-500",
    details: [
        "آلية التحقق التلقائي: تتحقق من صحة المستندات فور تحميلها",
        "نظام الشهادة الذاتية: يمنح الشركة صلاحية إصدار شهادات موثقة",
        "سجل البلوكتشين: يوثق جميع عمليات التحديث",
        "نظام الإشعارات الاستباقية: ينبه قبل انتهاء صلاحية أي وثيقة",
        "آلية التجديد التلقائي: تجدد الوثائق تلقائياً"
    ]
  },
  {
    icon: ShieldCheck,
    title: "نظام الثقة الرقمية المتدرجة",
    description: "نظام فريد يصنف الشركات حسب مستوى الثقة الرقمية بناءً على تاريخها وسلوكها.",
    color: "from-amber-500 to-yellow-500",
    details: [
        "مؤشر الثقة الضريبية: يقيس مستوى الامتثال الضريبي",
        "مستويات الثقة المتدرجة: من المبتدئ إلى البلاتيني",
        "امتيازات حسب المستوى: خدمات حصرية لكل مستوى",
        "نظام الترقية التلقائي: يرفع مستوى الشركة عند استيفاء المعايير",
        "آلية الحماية من التدهور: تنبيهات استباقية"
    ]
  },
  {
    icon: GitBranch,
    title: "منصة المعاملات الضريبية اللامركزية",
    description: "نظام ثوري يتيح للشركات إجراء معاملاتها الضريبية بشكل لامركزي.",
    color: "from-rose-500 to-pink-500",
    details: [
        "عقود ذكية ضريبية: تنفذ تلقائياً عند استيفاء الشروط",
        "محفظة ضريبية رقمية: تدير جميع المدفوعات والمستحقات",
        "نظام المقاصة التلقائي: يحسب الضرائب المستحقة والمستردة",
        "آلية التسوية الفورية: تسوية المستحقات في ثوانٍ",
        "سجل المعاملات الشفاف: يتيح تتبع جميع المعاملات"
    ]
  },
];

const innovativeFeatures = [
  {
    icon: Orbit,
    title: "تقنية التوأم الضريبي الرقمي",
    description: "إنشاء نسخة رقمية كاملة من الشركة تحاكي وضعها الضريبي وتتيح اختبار السيناريوهات المختلفة قبل تنفيذها.",
    details: [ "محاكاة تأثير القرارات المالية", "اختبار تأثير التغييرات التشريعية", "تقديم توصيات لتحسين الوضع الضريبي", "التنبؤ بالالتزامات الضريبية المستقبلية" ]
  },
  {
    icon: CheckCheck,
    title: "نظام الإجماع الضريبي اللامركزي",
    description: "آلية فريدة للتحقق من صحة المعاملات الضريبية بين الشركات دون الحاجة لتدخل الهيئة.",
    details: [ "التحقق المتبادل بين الشركات", "توثيق المعاملات على البلوكتشين", "حساب ضريبة القيمة المضافة تلقائياً", "تسوية الالتزامات بين الشركات مباشرة" ]
  },
  {
    icon: Bot,
    title: "منصة السفير الضريبي الافتراضي",
    description: "نظام يتيح للشركات تعيين ممثل افتراضي يتعامل مع الهيئة نيابة عنها.",
    details: [ "إجراء المعاملات الروتينية تلقائياً", "الرد على الاستفسارات البسيطة", "متابعة حالة الطلبات والمعاملات", "تنبيه الشركة عند الحاجة لتدخل بشري" ]
  },
  {
    icon: Mic,
    title: "تقنية البصمة الصوتية للشركات",
    description: "نظام مبتكر للتعرف على هوية الشركة من خلال بصمة صوتية فريدة.",
    details: [ "التعرف على الممثلين عبر بصماتهم الصوتية", "إجراء المعاملات الهاتفية بأمان", "توثيق الموافقات الشفهية", "تحليل نبرة الصوت لكشف الاحتيال" ]
  },
  {
    icon: BrainCircuit,
    title: "نظام الذاكرة الضريبية الجماعية",
    description: "منصة تجمع خبرات وتجارب الشركات في التعامل مع القضايا الضريبية.",
    details: [ "مشاركة حلول للتحديات الشائعة", "توثيق أفضل الممارسات", "تحليل الأنماط والاتجاهات", "تقديم توصيات مخصصة" ]
  },
];

const implementationPhases = [
    { title: "المرحلة الأولى: التأسيس", duration: "3-6 أشهر", tasks: ["تطوير البنية التحتية التقنية", "إنشاء قاعدة البيانات المركزية", "تطوير معايير البصمة الرقمية", "إعداد الإطار التشريعي"] },
    { title: "المرحلة الثانية: الإطلاق التجريبي", duration: "3 أشهر", tasks: ["اختيار مجموعة من الشركات الكبرى للتجربة", "إصدار البصمات الرقمية التجريبية", "اختبار المعاملات الضريبية عبر النظام", "جمع التغذية الراجعة وتحسين النظام"] },
    { title: "المرحلة الثالثة: التوسع التدريجي", duration: "6 أشهر", tasks: ["توسيع النظام ليشمل الشركات المتوسطة", "إضافة المزيد من الخدمات والميزات", "ربط النظام مع الجهات الحكومية الأخرى", "تطوير برامج التدريب والتوعية"] },
    { title: "المرحلة الرابعة: الإطلاق الشامل", duration: "3 أشهر", tasks: ["تعميم النظام على جميع الشركات", "إطلاق حملة وطنية للتوعية بالنظام", "تفعيل جميع الميزات والخدمات", "إنشاء مركز دعم متخصص للنظام"] },
    { title: "المرحلة الخامسة: التطوير المستمر", duration: "مستمر", tasks: ["تحليل بيانات الاستخدام وتحسين النظام", "إضافة ميزات جديدة بناءً على احتياجات المستخدمين", "توسيع نطاق التكامل مع أنظمة عالمية", "تطوير تقنيات متقدمة للأمان والخصوصية"] },
];

const implementationRequirements = {
    technical: ["بنية تحتية للبلوكتشين", "خوادم معالجة الذكاء الاصطناعي", "أنظمة التعرف البيومتري", "منصة للعقود الذكية", "بنية تحتية للأمن السيبراني"],
    human: ["فريق تطوير تقني متخصص", "خبراء في الضرائب والتشريعات", "متخصصون في أمن المعلومات", "محللو بيانات وخبراء ذكاء اصطناعي", "فريق دعم فني متخصص"],
    legislative: ["تحديث القوانين والتشريعات الضريبية", "إصدار قرارات تنظيمية للهوية الرقمية", "وضع إطار قانوني للتوقيعات الرقمية", "تطوير سياسات حماية البيانات", "إنشاء آليات لفض النزاعات الرقمية"]
};

const kpis = ["نسبة الشركات المسجلة في النظام", "متوسط وقت إتمام المعاملات الضريبية", "نسبة الانخفاض في حالات الاحتيال الضريبي", "معدل الامتثال الضريبي الطوعي", "مستوى رضا الشركات عن النظام", "نسبة المعاملات التي تتم دون تدخل بشري", "معدل الدقة في التنبؤات الضريبية"];

const ProblemItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
    <p className="text-gray-700">{children}</p>
  </div>
);

const BenefitCard = ({ icon: Icon, title, benefits, colorClass }) => (
  <Card className="flex-1 flex flex-col">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-2 flex-grow">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-3 text-sm">
          <CheckCheck className="h-4 w-4 text-green-500 shrink-0 mt-1" />
          <span>{benefit}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

const RequirementCard = ({ title, items, icon: Icon, color }) => (
  <Card>
    <CardHeader>
      <CardTitle className={`flex items-center gap-3 ${color.text}`}>
        <Icon className="h-6 w-6" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${color.bg} mt-1.5 shrink-0`}></div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const DigitalIdentity = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-4 text-3xl">
            <Building2 className="h-10 w-10" />
            نظام "البصمة الرقمية للشركات"
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Main Concept */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Info className="text-blue-600" />
            المفهوم الأساسي
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 leading-relaxed">
            منصة مبتكرة تقدم هوية رقمية فريدة لكل شركة في دولة الإمارات العربية المتحدة، تعمل كبصمة إلكترونية لا يمكن تزويرها أو انتحالها، وتتيح للشركات التعامل مع الهيئة الاتحادية للضرائب وجميع الجهات الحكومية بسلاسة وأمان.
          </p>
        </CardContent>
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
          <ProblemItem>تعدد المعرّفات والأرقام للشركة الواحدة بين مختلف الجهات الحكومية.</ProblemItem>
          <ProblemItem>صعوبة التحقق من هوية الشركات في المعاملات الإلكترونية.</ProblemItem>
          <ProblemItem>تكرار طلب نفس المستندات والبيانات من الشركات مراراً وتكراراً.</ProblemItem>
          <ProblemItem>انتشار عمليات الاحتيال الضريبي وانتحال هوية الشركات.</ProblemItem>
          <ProblemItem>تعقيد الإجراءات البيروقراطية ومتطلبات الامتثال الضريبي.</ProblemItem>
        </CardContent>
      </Card>

      {/* Unique Components */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Sparkles className="text-blue-600" />
          المكونات الفريدة للنظام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueComponents.map((component, index) => (
            <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex-row items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${component.color}`}>
                  <component.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{component.description}</p>
                </div>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <ul className="space-y-2 text-sm text-gray-700">
                  {component.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
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
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {innovativeFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <feature.icon className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-700 pl-4 border-l-2 border-purple-200">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Benefits */}
       <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <LineChart className="text-green-600" />
            الفوائد الفريدة للنظام
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
            <BenefitCard 
                icon={Building} 
                title="للشركات" 
                benefits={[ "هوية رقمية موحدة للتعامل مع جميع الجهات الحكومية", "تصفير البيروقراطية في المعاملات الضريبية", "تخفيض تكاليف الامتثال الضريبي بنسبة تصل إلى 80%", "تسريع المعاملات من أيام إلى دقائق", "حماية من الاحتيال وانتحال الهوية" ]}
                colorClass="bg-blue-500"
            />
            <BenefitCard 
                icon={Landmark} 
                title="للهيئة الاتحادية للضرائب" 
                benefits={[ "تحسين دقة البيانات الضريبية بنسبة تصل إلى 99%", "تقليل التدخل البشري في المعاملات الروتينية", "تعزيز الامتثال الطوعي للشركات", "كشف محاولات التهرب الضريبي بشكل استباقي", "تحسين تجربة المتعاملين وزيادة رضاهم" ]}
                colorClass="bg-emerald-500"
            />
            <BenefitCard 
                icon={LineChart} 
                title="للاقتصاد الوطني" 
                benefits={[ "تعزيز الشفافية في بيئة الأعمال", "جذب الاستثمارات بفضل سهولة الإجراءات", "تقليل الاقتصاد الخفي وزيادة الإيرادات الضريبية", "تعزيز التنافسية العالمية لدولة الإمارات", "دعم التحول الرقمي الشامل للاقتصاد" ]}
                colorClass="bg-orange-500"
            />
        </div>
      </div>

      {/* Implementation Phases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="text-blue-600" />
            مراحل التنفيذ
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative border-l-2 border-blue-500 pl-8 space-y-12 py-4">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-11 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <Badge variant="secondary" className="mb-2">{phase.duration}</Badge>
                  <h4 className="font-semibold text-lg text-blue-800">{phase.title}</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </CardContent>
      </Card>
      
      {/* Implementation Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wrench className="text-gray-600" />
            متطلبات التنفيذ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <RequirementCard title="التقنية" items={implementationRequirements.technical} icon={Wrench} color={{text: 'text-blue-600', bg: 'bg-blue-500'}} />
            <RequirementCard title="البشرية" items={implementationRequirements.human} icon={Users} color={{text: 'text-green-600', bg: 'bg-green-500'}} />
            <RequirementCard title="التشريعية" items={implementationRequirements.legislative} icon={Landmark} color={{text: 'text-orange-600', bg: 'bg-orange-500'}} />
          </div>
        </CardContent>
      </Card>
      
      {/* KPIs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Gauge className="text-indigo-600" />
            مؤشرات الأداء الرئيسية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-indigo-500 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{kpi}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Conclusion */}
      <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileText />
            الخلاصة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-300 leading-relaxed">
            نظام "البصمة الرقمية للشركات" يمثل ثورة في مجال الهويات الرقمية والإدارة الضريبية، حيث يقدم منظومة متكاملة تعيد تعريف العلاقة بين الشركات والهيئة الاتحادية للضرائب. من خلال الجمع بين تقنيات البلوكتشين والذكاء الاصطناعي والتعرف البيومتري، يوفر النظام مستوى غير مسبوق من الأمان والكفاءة والشفافية، مما يساهم في تحقيق رؤية دولة الإمارات في أن تكون من أفضل دول العالم في سهولة ممارسة الأعمال والابتكار الرقمي.
          </p>
        </CardContent>
      </Card>

    </div>
  );
};
