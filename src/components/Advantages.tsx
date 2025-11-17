import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "FileCheck",
      title: "Большой опыт работы",
      description: "Более 5000 успешно оформленных сертификатов и деклараций за 4+ года работы."
    },
    {
      icon: "Zap",
      title: "Быстрое оформление",
      description: "Знаем все процедуры и имеем налаженные связи. Ускоряем процесс в 2-3 раза."
    },
    {
      icon: "UserCheck",
      title: "Личный менеджер",
      description: "Закрепленный специалист ведет ваш проект от начала до конца. Всегда на связи."
    },
    {
      icon: "Award",
      title: "Работа с любыми товарами",
      description: "Оформляем документы для электроники, оборудования, медтехники и других товаров."
    },
    {
      icon: "Shield",
      title: "Юридическая чистота",
      description: "Все документы легальны и соответствуют законодательству. Гарантируем прохождение проверок."
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description: "Отвечаем на вопросы в любое время. WhatsApp, Telegram, звонки — выбирайте удобный способ."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-200">
            Более 200 компаний доверили нам таможенное оформление
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
                <Icon name={advantage.icon} size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold">
                {advantage.title}
              </h3>
              
              <p className="text-gray-200 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;