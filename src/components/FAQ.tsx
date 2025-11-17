import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как происходит оплата услуг?",
      answer: "Работаем по предоплате. После согласования стоимости и сроков вы вносите предоплату, после чего мы начинаем оформление документов. Гарантируем качество и соблюдение сроков."
    },
    {
      question: "Какие сроки оформления документов?",
      answer: "Стандартные сроки: сертификат происхождения — 3-5 дней, сертификаты соответствия — 5-7 дней, таможенная декларация — 1-2 дня. Возможно срочное оформление за 1-3 дня с доплатой."
    },
    {
      question: "Какие документы нужны для начала работы?",
      answer: "Базовый пакет: контракт, инвойс, упаковочный лист, спецификация товара. В зависимости от типа документа могут потребоваться дополнительные сертификаты и разрешения. Проконсультируем бесплатно."
    },
    {
      question: "Работаете ли вы с физическими лицами?",
      answer: "Да, работаем как с юридическими, так и с физическими лицами. Условия оплаты и сроки одинаковые для всех клиентов."
    },
    {
      question: "Что если документы не пройдут проверку?",
      answer: "Все наши документы легальны и соответствуют законодательству. За 4+ года работы не было ни одного случая непрохождения. Но если это произойдет — вернем 100% оплаты."
    },
    {
      question: "Можете ли работать со сложными товарами?",
      answer: "Да, специализируемся на электронике, оборудовании, медтехнике. Имеем большой опыт оформления сертификатов и деклараций для различных категорий товаров."
    },
    {
      question: "Как быстро отвечаете на вопросы?",
      answer: "На связи 24/7. В рабочее время отвечаем в течение 15 минут. Вечером и в выходные — до 1 часа. Доступны через WhatsApp, Telegram и телефон."
    },
    {
      question: "Работаете ли с регионами?",
      answer: "Да, работаем со всей Россией и странами СНГ. Все консультации и документы отправляем удаленно. Личная встреча не требуется."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на основные вопросы о таможенном оформлении
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Не нашли ответ на свой вопрос? Напишите нам — ответим в течение 15 минут
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;