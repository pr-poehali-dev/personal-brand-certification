import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Cases from "@/components/Cases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Advantages />
      <Cases />
      <FAQ />
      <Contact />
      
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Таможенное оформление. Все права защищены.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Работаем только по постоплате • Гарантия результата • 5000+ оформленных документов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
