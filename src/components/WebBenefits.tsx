import { CheckCircle2, Zap, HeartHandshake, Tag } from 'lucide-react';

const content = {
  es: {
    title: "Beneficios de Reservar en Nuestra Web",
    benefits: [
      {
        icon: Tag,
        title: "Mejor tarifa garantizada",
      },
      {
        icon: Zap,
        title: "Confirmación inmediata",
      },
      {
        icon: HeartHandshake,
        title: "Atención personalizada",
      },
      {
        icon: CheckCircle2,
        title: "Ofertas actualizadas",
      }
    ]
  },
  en: {
    title: "Benefits of Booking on Our Website",
    benefits: [
      {
        icon: Tag,
        title: "Best Rate Guaranteed",
      },
      {
        icon: Zap,
        title: "Immediate Confirmation",
      },
      {
        icon: HeartHandshake,
        title: "Personalized Attention",
      },
      {
        icon: CheckCircle2,
        title: "Updated Offers",
      }
    ]
  }
};

interface WebBenefitsProps {
  lang?: 'es' | 'en';
}

export default function WebBenefits({ lang = 'es' }: WebBenefitsProps) {
  const data = content[lang];

  return (
    <section className="py-12 md:py-16 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-lg md:text-xl font-serif text-center mb-8">
          {data.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <benefit.icon className="w-7 h-7 mb-3 text-white" />
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wide">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
