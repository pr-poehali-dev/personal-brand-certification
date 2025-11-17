import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "FileCheck",
      number: "5000+",
      label: "Оформленных документов",
      description: "Успешно проведенных сделок"
    },
    {
      icon: "Building2",
      number: "200+",
      label: "Компаний-клиентов",
      description: "Включая Lenovo, Huawei, Xiaomi"
    },
    {
      icon: "Clock",
      number: "4+",
      label: "Года на рынке",
      description: "Стабильная работа и репутация"
    },
    {
      icon: "TrendingUp",
      number: "100%",
      label: "Гарантия результата",
      description: "Или вернем деньги"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-3 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Icon name={stat.icon} size={32} className="text-accent" />
              </div>
              
              <div className="text-4xl font-bold text-primary">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
