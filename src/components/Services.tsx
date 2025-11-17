import Icon from "@/components/ui/icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "Package",
      title: "Сертификат происхождения",
      description: "Form A, CT-1, EUR.1 и другие формы для различных стран",
      features: ["Срок: 3-5 дней", "Легализация в МИД", "Все типы товаров"]
    },
    {
      icon: "ShieldCheck",
      title: "Сертификаты соответствия",
      description: "Декларации и сертификаты ТР ТС, ЕАС для импорта",
      features: ["ТР ТС/ЕАЭС", "Пожарная безопасность", "Санитарные разрешения"]
    },
    {
      icon: "FileText",
      title: "Фитосанитарные документы",
      description: "Карантинные сертификаты для растительной продукции",
      features: ["Фумигация", "Экспертиза", "Срочное оформление"]
    },
    {
      icon: "Leaf",
      title: "Ветеринарные сертификаты",
      description: "Документы для продукции животного происхождения",
      features: ["Мясо и рыба", "Молочная продукция", "Корма для животных"]
    },
    {
      icon: "ClipboardCheck",
      title: "Таможенная декларация",
      description: "Оформление ГТД и таможенных платежей",
      features: ["Импорт/Экспорт", "Консультации", "Минимизация пошлин"]
    },
    {
      icon: "Globe",
      title: "Внешнеторговый контракт",
      description: "Подготовка и проверка договоров ВЭД",
      features: ["Юридическая чистота", "Оптимизация условий", "Проверка контрагента"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Полный спектр услуг
          </h2>
          <p className="text-xl text-muted-foreground">
            Оформляем все виды разрешительных документов для международной торговли
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Не нашли нужную услугу? Свяжитесь с нами — решим любую задачу по таможенному оформлению
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
