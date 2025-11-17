import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cases = () => {
  const cases = [
    {
      title: "Электроника",
      task: "Оформление сертификатов соответствия для крупной партии электроники",
      result: "Получены все необходимые сертификаты и декларации. Товар успешно растаможен без задержек.",
      metrics: ["200+ документов", "ТР ТС", "4 дня"]
    },
    {
      title: "Медтехника",
      task: "Срочное оформление комплекта документов для медицинского оборудования",
      result: "Полный пакет сертификатов и деклараций готов в срок. Оборудование допущено к использованию.",
      metrics: ["150+ документов", "Медизделия", "5 дней"]
    },
    {
      title: "Промоборудование",
      task: "Комплексное оформление: сертификаты соответствия и декларации для промышленного оборудования",
      result: "Оформлены все необходимые документы. Оборудование введено в эксплуатацию.",
      metrics: ["300+ документов", "ТР ТС/ЕАЭС", "6 дней"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Примеры выполненных работ
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные кейсы оформления сертификатов и деклараций
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary">
                    {caseItem.title}
                  </h3>
                  <Icon name="FileCheck" size={32} className="text-accent" />
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
            <Icon name="TrendingUp" size={16} className="inline mr-2" />
            Работаем с различными категориями товаров и типами документов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cases;
