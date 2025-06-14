
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, CheckCircle, Link, Smartphone, Globe } from "lucide-react";

export const DigitalIdentity = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const companies = [
    {
      name: "شركة الإمارات للتقنية",
      trn: "100123456789012",
      status: "نشط",
      compliance: 95,
      services: ["ضريبة القيمة المضافة", "ضريبة الشركات", "الجمارك"],
      autoLinked: ["البنك المركزي", "وزارة المالية", "دائرة التنمية الاقتصادية"]
    },
    {
      name: "مؤسسة دبي التجارية",
      trn: "100987654321098",
      status: "نشط",
      compliance: 88,
      services: ["ضريبة القيمة المضافة", "ضريبة الانتقائية"],
      autoLinked: ["مصرف الإمارات", "غرفة تجارة دبي", "منطقة حرة"]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Building2 className="h-8 w-8" />
            الهوية الرقمية للشركات
          </CardTitle>
          <p className="text-emerald-100">
            نظام موحد يربط جميع الخدمات الحكومية والمالية تلقائياً
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
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-sm">{company.name}</div>
                <div className="text-xs text-gray-500 mt-1">TRN: {company.trn}</div>
                <Badge variant={company.status === 'نشط' ? 'default' : 'secondary'} className="mt-2">
                  {company.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Company Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-600" />
              {companies[selectedCompany].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">الرقم الضريبي</div>
                <div className="font-mono text-lg font-semibold">{companies[selectedCompany].trn}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">معدل الامتثال</div>
                <div className="text-2xl font-bold text-emerald-600">{companies[selectedCompany].compliance}%</div>
              </div>
            </div>

            {/* Linked Services */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Link className="h-5 w-5" />
                الخدمات المرتبطة تلقائياً
              </h4>
              <div className="flex flex-wrap gap-2">
                {companies[selectedCompany].services.map((service, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Auto-Linked Entities */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                الجهات المرتبطة
              </h4>
              <div className="space-y-2">
                {companies[selectedCompany].autoLinked.map((entity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{entity}</span>
                    <Badge className="ml-auto bg-green-100 text-green-800">متصل</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6 text-center">
            <Smartphone className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">تطبيق موحد</h3>
            <p className="text-sm text-gray-600">
              جميع الخدمات الضريبية في تطبيق واحد
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
            <h3 className="font-semibold mb-2">أمان عالي</h3>
            <p className="text-sm text-gray-600">
              تشفير متقدم وحماية البيانات
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">تحديث تلقائي</h3>
            <p className="text-sm text-gray-600">
              مزامنة فورية مع جميع الأنظمة
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
