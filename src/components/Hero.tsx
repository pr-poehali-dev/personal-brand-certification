import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleContact = (method: string) => {
    const contacts = {
      whatsapp: "https://wa.me/YOUR_PHONE",
      telegram: "https://t.me/YOUR_USERNAME",
      phone: "tel:+YOUR_PHONE"
    };
    window.open(contacts[method as keyof typeof contacts], '_blank');
  };

  return (
    <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Таможенное оформление<br />
              <span className="text-accent">с гарантией результата</span>
            </h1>
            
            <p className="text-xl text-gray-200">
              Более 5000 успешно оформленных документов для международных компаний. 
              Работаем на результат — оплата после получения документов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={() => handleContact('whatsapp')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
                onClick={() => handleContact('telegram')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span>Постоплата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-accent" />
                <span>24/7 на связи</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/718f2b54-6f87-4f18-88b0-1e9177a5da01/files/0b297700-6b3a-4c38-b162-9a9a0b7d1fd8.jpg"
                alt="Профессиональный таможенный брокер"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">4+ года</div>
              <div className="text-sm">успешной работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
