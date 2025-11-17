import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "+7 999 560-92-66",
      action: "Написать в WhatsApp",
      link: "https://wa.me/79995609266",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: "Send",
      title: "Telegram",
      description: "@AlHaski",
      action: "Открыть Telegram",
      link: "https://t.me/AlHaski",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: "Mail",
      title: "Email",
      description: "yaroslavpyzhyanov@yandex.ru",
      action: "Написать письмо",
      link: "mailto:yaroslavpyzhyanov@yandex.ru",
      color: "bg-accent hover:bg-accent/90"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-200">
            Выберите удобный способ связи — ответим в течение 15 минут
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center">
                  <Icon name={contact.icon} size={32} className="text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {contact.description}
                  </p>
                </div>

                <Button 
                  className={`w-full ${contact.color} text-white font-semibold`}
                  onClick={() => window.open(contact.link, '_blank')}
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-4 text-left">
              <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                <p className="text-gray-200">
                  Пн-Пт: 9:00 - 21:00 (быстрые ответы)<br />
                  Сб-Вс: 10:00 - 18:00<br />
                  <span className="text-accent font-semibold">Срочные вопросы — 24/7</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm">
            <Icon name="Shield" size={20} className="text-accent" />
            <span>Конфиденциальность гарантирована</span>
            <span className="text-gray-400">•</span>
            <Icon name="CheckCircle" size={20} className="text-accent" />
            <span>Бесплатная консультация</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;