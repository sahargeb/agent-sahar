
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertTriangle, CheckCircle, Clock, Target, BarChart3 } from "lucide-react";

export const TaxPyramid = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const companies = [
    {
      name: "شركة الإمارات للتقنية",
      trn: "100123456789012",
      overallScore: 92,
      levels: [
        {
          name: "الامتثال الأساسي",
          score: 95,
          status: "ممتاز",
          color: "emerald",
          items: ["التسجيل الضريبي", "الإقرارات الدورية", "حفظ السجلات"]
        },
        {
          name: "الدقة والجودة",
          score: 88,
          status: "جيد جداً",
          color: "blue",
          items: ["دقة البيانات", "التوثيق", "المراجعة الداخلية"]
        },
        {
          name: "التحسين والتطوير",
          score: 92,
          status: "ممتاز",
          color: "purple",
          items: ["الأتمتة", "التحليل المتقدم", "التنبؤ"]
        },
        {
          name: "الالتزام المتقدم",
          score: 94,
          status: "ممتاز",
          color: "yellow",
          items: ["الشفافية", "المبادرات", "أفضل الممارسات"]
        }
      ]
    },
    {
      name: "مؤسسة دبي التجارية",
      trn: "100987654321098",
      overallScore: 78,
      levels: [
        {
          name: "الامتثال الأساسي",
          score: 85,
          status: "جيد جداً",
          color: "emerald",
          items: ["التسجيل الضريبي", "الإقرارات الدورية", "حفظ السجلات"]
        },
        {
          name: "الدقة والجودة",
          score: 72,
          status: "جيد",
          color: "blue",
          items: ["دقة البيانات", "التوثيق", "المراجعة الداخلية"]
        },
        {
          name: "التحسين والتطوير",
          score: 75,
          status: "جيد",
          color: "purple",
          items: ["الأتمتة", "التحليل المتقدم", "التنبؤ"]
        },
        {
          name: "الالتزام المتقدم",
          score: 80,
          status: "جيد جداً",
          color: "yellow",
          items: ["الشفافية", "المبادرات", "أفضل الممارسات"]
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ممتاز': return 'bg-green-100 text-green-800';
      case 'جيد جداً': return 'bg-blue-100 text-blue-800';
      case 'جيد': return 'bg-yellow-100 text-yellow-800';
      case 'يحتاج تحسين': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="h-8 w-8" />
            الهرم الضريبي للشركات
          </CardTitle>
          <p className="text-orange-100">
            تحليل شامل لمستوى الالتزام الضريبي على 4 مستويات
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Selection */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">اختر الشركة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {companies.map((company, index) => (
              <div
                key={index}
                onClick={() => setSelectedCompany(index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCompany === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-sm">{company.name}</div>
                <div className="text-xs text-gray-500 mt-1">TRN: {company.trn}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-600">النتيجة الإجمالية</span>
                  <span className={`font-bold text-lg ${getScoreColor(company.overallScore)}`}>
                    {company.overallScore}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pyramid Visualization */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-orange-600" />
              هرم الالتزام - {companies[selectedCompany].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Overall Score */}
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <div className={`text-4xl font-bold ${getScoreColor(companies[selectedCompany].overallScore)}`}>
                {companies[selectedCompany].overallScore}%
              </div>
              <div className="text-gray-600">النتيجة الإجمالية</div>
            </div>

            {/* Pyramid Levels */}
            <div className="space-y-3">
              {companies[selectedCompany].levels.map((level, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    level.color === 'emerald' ? 'border-l-emerald-500 bg-emerald-50' :
                    level.color === 'blue' ? 'border-l-blue-500 bg-blue-50' :
                    level.color === 'purple' ? 'border-l-purple-500 bg-purple-50' :
                    'border-l-yellow-500 bg-yellow-50'
                  }`}
                  style={{
                    marginLeft: `${index * 20}px`,
                    marginRight: `${index * 20}px`
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold">{level.name}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {level.items.map((item, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(level.score)}`}>
                        {level.score}%
                      </div>
                      <Badge className={getStatusColor(level.status)}>
                        {level.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={level.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            التوصيات والتحسينات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                نقاط القوة
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>التزام ممتاز بالمواعيد النهائية</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>دقة عالية في الإقرارات الضريبية</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>تطبيق أفضل الممارسات المحاسبية</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-orange-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                مجالات التحسين
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>تطوير نظام المراجعة الداخلية</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>تحسين التوثيق الرقمي</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>زيادة مستوى الأتمتة</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">خطة التحسين المقترحة</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm">3 أشهر: تطوير النظام</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-sm">الهدف: 95% امتثال</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-sm">توفير: 25% من التكاليف</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Chart */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle>مقارنة مع المعدل العام</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companies[selectedCompany].levels.map((level, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{level.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">المعدل العام: 75%</span>
                    <span className={`text-sm font-semibold ${getScoreColor(level.score)}`}>
                      شركتك: {level.score}%
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={75} className="h-2 bg-gray-200" />
                  <Progress 
                    value={level.score} 
                    className={`h-2 absolute top-0 ${
                      level.score > 75 ? 'opacity-90' : 'opacity-70'
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
