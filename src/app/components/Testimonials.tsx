import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc4MDQ3NTUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Trabalho excepcional! O sistema SaaS desenvolvido superou nossas expectativas. Profissional dedicado e com excelente comunicação durante todo o projeto.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Founder",
    company: "E-Shop Brasil",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc4MDQ3NTUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Nossa plataforma de e-commerce ficou perfeita! A atenção aos detalhes e a qualidade do código são impressionantes. Recomendo fortemente!",
    rating: 5
  },
  {
    name: "Roberto Mendes",
    role: "CTO",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc4MDQ3NTUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Desenvolvedor extremamente competente. Entregou nossa API de pagamentos antes do prazo e com documentação impecável. Parceria de longo prazo garantida!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl">Depoimentos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que meus clientes dizem sobre o trabalho realizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-chart-1/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/10 space-y-6"
            >
              {/* Quote icon */}
              <div className="p-3 rounded-xl bg-chart-1/10 border border-chart-1/20 w-fit">
                <Quote className="w-6 h-6 text-chart-1" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chart-1 text-chart-1" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-chart-1/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
