
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock,
  Users,
  Award,
  TrendingUp,
  Filter,
  Search,
  Video,
  MessageCircle,
  FileText,
  Briefcase
} from "lucide-react";

const TaxConsultantPlatform = () => {
  const [selectedService, setSelectedService] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const consultants = [
    {
      id: 1,
      name: "د. أحمد محمد السيد",
      title: "مستشار ضريبي معتمد - CPA",
      rating: 4.9,
      reviews: 127,
      experience: "15+ سنة",
      specializations: ["ضريبة القيمة المضافة", "ضريبة الشركات", "التخطيط الضريبي"],
      location: "دبي، الإمارات",
      languages: ["العربية", "الإنجليزية"],
      consultationFee: 250,
      responseTime: "خلال ساعة",
      avatar: "/placeholder.svg",
      verified: true,
      completedCases: 580,
      services: [
        { name: "استشارة ضريبية عامة", price: 250, duration: "45 دقيقة" },
        { name: "مراجعة الإقرار الضريبي", price: 400, duration: "60 دقيقة" },
        { name: "التخطيط الضريبي للشركات", price: 800, duration: "90 دقيقة" },
        { name: "حل المنازعات الضريبية", price: 1200, duration: "120 دقيقة" }
      ]
    },
    {
      id: 2,
      name: "أ. فاطمة علي الزهراني",
      title: "خبيرة ضرائب - ACCA",
      rating: 4.8,
      reviews: 89,
      experience: "12+ سنة",
      specializations: ["ضريبة الانتقائية", "الضرائب الجمركية", "امتثال ضريبي"],
      location: "أبوظبي، الإمارات",
      languages: ["العربية", "الإنجليزية", "الفرنسية"],
      consultationFee: 200,
      responseTime: "خلال 30 دقيقة",
      avatar: "/placeholder.svg",
      verified: true,
      completedCases: 420,
      services: [
        { name: "استشارة ضريبة انتقائية", price: 200, duration: "30 دقيقة" },
        { name: "مراجعة الامتثال الضريبي", price: 350, duration: "60 دقيقة" },
        { name: "تدريب فريق المحاسبة", price: 600, duration: "120 دقيقة" }
      ]
    },
    {
      id: 3,
      name: "د. خالد عبدالرحمن",
      title: "مستشار ضريبي أول - PhD",
      rating: 5.0,
      reviews: 203,
      experience: "20+ سنة",
      specializations: ["التحكيم الضريبي", "الضرائب الدولية", "هيكلة الشركات"],
      location: "الشارقة، الإمارات",
      languages: ["العربية", "الإنجليزية"],
      consultationFee: 500,
      responseTime: "خلال 2 ساعة",
      avatar: "/placeholder.svg",
      verified: true,
      completedCases: 750,
      services: [
        { name: "استشارة ضرائب دولية", price: 500, duration: "60 دقيقة" },
        { name: "هيكلة ضريبية للشركات", price: 1500, duration: "180 دقيقة" },
        { name: "تمثيل أمام الهيئة الضريبية", price: 2000, duration: "حسب الحاجة" }
      ]
    }
  ];

  const platformStats = [
    { label: "مستشار معتمد", value: "500+", icon: Users },
    { label: "استشارة مكتملة", value: "15,000+", icon: Award },
    { label: "معدل الرضا", value: "98%", icon: TrendingUp },
    { label: "وقت الاستجابة", value: "< 1 ساعة", icon: Clock }
  ];

  const serviceCategories = [
    { id: "all", name: "جميع الخدمات", count: 12 },
    { id: "vat", name: "ضريبة القيمة المضافة", count: 8 },
    { id: "corporate", name: "ضريبة الشركات", count: 6 },
    { id: "excise", name: "ضريبة الانتقائية", count: 4 },
    { id: "customs", name: "الضرائب الجمركية", count: 3 },
    { id: "planning", name: "التخطيط الضريبي", count: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">مستشارك الضريبي</h1>
                <p className="text-sm text-gray-600">منصة المستشارين الضريبيين المعتمدين</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">تسجيل الدخول</Button>
              <Button>انضم كمستشار</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            احصل على استشارة ضريبية متخصصة
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل مع أفضل المستشارين الضريبيين المعتمدين في الإمارات
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="ابحث عن مستشار أو خدمة ضريبية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="px-8">
              <Search className="h-5 w-5 mr-2" />
              بحث
            </Button>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {platformStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">التخصصات المتاحة</h3>
          <div className="flex flex-wrap gap-3">
            {serviceCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedService === category.id ? "default" : "outline"}
                onClick={() => setSelectedService(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Consultants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={consultant.avatar} />
                      <AvatarFallback>{consultant.name.split(' ')[0][0]}</AvatarFallback>
                    </Avatar>
                    {consultant.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-gray-900">{consultant.name}</h3>
                      {consultant.verified && (
                        <Badge className="bg-emerald-100 text-emerald-800">معتمد</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{consultant.title}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{consultant.rating}</span>
                        <span>({consultant.reviews} تقييم)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{consultant.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Specializations */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">التخصصات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 py-3 border-y">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{consultant.experience}</div>
                    <div className="text-xs text-gray-500">الخبرة</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{consultant.completedCases}</div>
                    <div className="text-xs text-gray-500">قضية مكتملة</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{consultant.responseTime}</div>
                    <div className="text-xs text-gray-500">وقت الرد</div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">الخدمات المتاحة:</h4>
                  <div className="space-y-2">
                    {consultant.services.slice(0, 2).map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.duration}</div>
                        </div>
                        <div className="text-emerald-600 font-bold">
                          {service.price} درهم
                        </div>
                      </div>
                    ))}
                    {consultant.services.length > 2 && (
                      <div className="text-center">
                        <Button variant="ghost" size="sm">
                          عرض جميع الخدمات ({consultant.services.length})
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    احجز موعد
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    دردشة
                  </Button>
                  <Button variant="outline" size="lg">
                    <Video className="h-4 w-4 mr-2" />
                    فيديو
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            عرض المزيد من المستشارين
          </Button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            كيف تعمل المنصة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "ابحث عن مستشار",
                description: "اختر المستشار المناسب حسب التخصص والموقع والسعر",
                icon: Search
              },
              {
                step: "2", 
                title: "احجز موعد",
                description: "حدد الوقت المناسب واختر نوع الاستشارة",
                icon: Calendar
              },
              {
                step: "3",
                title: "تواصل مع المستشار",
                description: "احصل على استشارتك عبر الهاتف أو الفيديو أو الدردشة",
                icon: Video
              },
              {
                step: "4",
                title: "قيم التجربة",
                description: "شارك تقييمك لمساعدة الآخرين في اتخاذ القرار",
                icon: Star
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxConsultantPlatform;
