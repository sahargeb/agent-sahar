
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Zap, Clock, CheckCircle, AlertCircle, Smartphone } from "lucide-react";

export const SmartPayment = () => {
  const [paymentProgress, setPaymentProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const startSmartPayment = () => {
    setIsProcessing(true);
    setPaymentComplete(false);
    setPaymentProgress(0);
    
    const interval = setInterval(() => {
      setPaymentProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setPaymentComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="h-8 w-8" />
            نظام الدفع الذكي التلقائي
          </CardTitle>
          <p className="text-blue-100">
            دفع تلقائي للضرائب مع التحليل الذكي والتنبيهات المسبقة
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Smart Payment Demo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-blue-600" />
              تجربة الدفع الذكي
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Payment Scenario */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">السيناريو</h4>
              <p className="text-sm text-gray-700">
                شركة الإمارات للتقنية - موعد دفع ضريبة القيمة المضافة: 28 يونيو 2024
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-800">مستحق خلال 3 أيام</Badge>
                <Badge className="bg-green-100 text-green-800">المبلغ: 45,250 درهم</Badge>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-purple-600" />
                تحليل الذكاء الاصطناعي
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• رصيد كافي في الحساب المرتبط</li>
                <li>• لا توجد غرامات سابقة</li>
                <li>• اقتراح: دفع تلقائي في 26 يونيو</li>
                <li>• توفير محتمل: 150 درهم (خصم التسديد المبكر)</li>
              </ul>
            </div>

            {/* Payment Button */}
            <div className="text-center">
              <Button 
                onClick={startSmartPayment}
                disabled={isProcessing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3"
              >
                {isProcessing ? 'جاري المعالجة...' : 'تفعيل الدفع الذكي'}
              </Button>
            </div>

            {/* Progress */}
            {(isProcessing || paymentComplete) && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">تقدم العملية</span>
                  <span className="text-sm">{paymentProgress}%</span>
                </div>
                <Progress value={paymentProgress} className="h-3" />
                
                {paymentComplete && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">تم الدفع بنجاح!</span>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Features & Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-emerald-600" />
              المزايا والخصائص
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">دفع تلقائي ذكي</div>
                  <div className="text-xs text-gray-600">تحليل التدفق النقدي واختيار أفضل وقت للدفع</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">تنبيهات مسبقة</div>
                  <div className="text-xs text-gray-600">إشعارات قبل مواعيد الاستحقاق بـ 7، 3، 1 أيام</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">خصومات تلقائية</div>
                  <div className="text-xs text-gray-600">تطبيق خصومات التسديد المبكر تلقائياً</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">تقسيط ذكي</div>
                  <div className="text-xs text-gray-600">اقتراح خطط التقسيط المناسبة للوضع المالي</div>
                </div>
              </div>
            </div>

            {/* Integration Status */}
            <div className="border-t pt-4">
              <h5 className="font-semibold mb-3">البنوك المتكاملة</h5>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>بنك الإمارات دبي الوطني</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>بنك أبوظبي الأول</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>مصرف الإمارات الإسلامي</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>بنك دبي الإسلامي</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile App Preview */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-indigo-600" />
            تطبيق الهاتف المحمول
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold mb-2">دفع بنقرة واحدة</h4>
              <p className="text-sm text-gray-600">
                موافقة بصمة الإصبع أو Face ID للدفع الفوري
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">تنبيهات ذكية</h4>
              <p className="text-sm text-gray-600">
                إشعارات مخصصة حسب طبيعة النشاط التجاري
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold mb-2">تأكيد فوري</h4>
              <p className="text-sm text-gray-600">
                إيصال إلكتروني وتحديث فوري للسجلات
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
