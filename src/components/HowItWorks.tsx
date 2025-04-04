
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Search, Database, Brain, FileText } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-400" />,
      title: t("howitworks.step1.title"),
      description: t("howitworks.step1.desc")
    },
    {
      icon: <Search className="h-10 w-10 text-blue-400" />,
      title: t("howitworks.step2.title"),
      description: t("howitworks.step2.desc")
    },
    {
      icon: <Database className="h-10 w-10 text-blue-400" />,
      title: t("howitworks.step3.title"),
      description: t("howitworks.step3.desc")
    },
    {
      icon: <Brain className="h-10 w-10 text-blue-400" />,
      title: t("howitworks.step4.title"),
      description: t("howitworks.step4.desc")
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-400" />,
      title: t("howitworks.step5.title"),
      description: t("howitworks.step5.desc")
    }
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("howitworks.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className={`bg-[#1A2430] border-0 ${index >= 3 ? 'md:col-span-3/2 md:mx-auto' : ''}`}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-900/40 p-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
