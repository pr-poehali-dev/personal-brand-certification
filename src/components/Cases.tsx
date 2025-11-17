import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cases = () => {
  const cases = [
    {
      company: "Lenovo",
      task: "Оформление сертификатов для партии ноутбуков (500 единиц)",
      result: "Получены все необходимые документы за 4 дня. Товар успешно растаможен.",
      metrics: ["4 дня", "500 единиц", "ТР ТС"]
    },
    {
      company: "Huawei",
      task: "Срочное оформление CT-1 для смартфонов на сумму $2M",
      result: "Документы готовы за 3 дня, включая легализацию в МИД РФ.",
      metrics: ["3 дня", "$2M", "CT-1"]
    },
    {
      company: "Xiaomi",
      task: "Комплексное оформление: сертификаты + декларация соответствия",
      result: "Полный пакет документов. Товар прошел таможню без задержек.",
      metrics: ["5 дней", "Комплекс", "100% успех"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Кейсы наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные примеры работы с международными брендами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary">
                    {caseItem.company}
                  </h3>
                  <Icon name="Building2" size={32} className="text-accent" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">
                      Задача:
                    </div>
                    <p className="text-sm leading-relaxed">
                      {caseItem.task}
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">
                      Результат:
                    </div>
                    <p className="text-sm leading-relaxed">
                      {caseItem.result}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {caseItem.metrics.map((metric, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            <Icon name="Lock" size={16} className="inline mr-2" />
            По просьбе клиентов другие кейсы доступны только при личном обращении
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cases;
