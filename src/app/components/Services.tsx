import { motion } from "motion/react";
import { Globe, Cloud, Database, Smartphone, CreditCard, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas com as melhores tecnologias do mercado.",
    features: ["React & Vue.js", "Laravel & Node.js", "PWA"]
  },
  {
    icon: Cloud,
    title: "Sistemas SaaS",
    description: "Plataformas SaaS completas com arquitetura escalável e multi-tenant.",
    features: ["Multi-tenancy", "Assinaturas", "Analytics"]
  },
  {
    icon: Database,
    title: "APIs REST",
    description: "APIs robustas e documentadas seguindo as melhores práticas RESTful.",
    features: ["JWT Auth", "Rate Limiting", "Versionamento"]
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android com Flutter.",
    features: ["Cross-platform", "Push Notifications", "Offline-first"]
  },
  {
    icon: CreditCard,
    title: "Integrações de Pagamento",
    description: "Integração com gateways de pagamento e sistemas de cobrança.",
    features: ["Stripe", "Mercado Pago", "Assinaturas"]
  },
  {
    icon: Wrench,
    title: "Manutenção e Evolução",
    description: "Suporte contínuo e evolução de sistemas existentes.",
    features: ["Bug fixes", "Features", "Otimizações"]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl">Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-chart-1/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/10"
            >
              <div className="p-3 rounded-xl bg-chart-1/10 border border-chart-1/20 w-fit mb-4 group-hover:bg-chart-1/20 transition-colors">
                <service.icon className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map(feature => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
