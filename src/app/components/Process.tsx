import { motion } from "motion/react";
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Descoberta",
    description: "Entendo suas necessidades, objetivos e público-alvo para criar a solução ideal."
  },
  {
    icon: Lightbulb,
    title: "Planejamento",
    description: "Defino arquitetura, tecnologias e cronograma do projeto com você."
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Codifico com as melhores práticas, mantendo você informado do progresso."
  },
  {
    icon: TestTube,
    title: "Testes",
    description: "Testo rigorosamente cada funcionalidade para garantir qualidade."
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Faço o deploy e forneço documentação completa e treinamento."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl">Processo de Trabalho</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia transparente e eficiente do início ao fim
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-chart-1/10 border-2 border-chart-1 flex items-center justify-center text-chart-1 z-10">
                  <span>{index + 1}</span>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border hover:border-chart-1/50 transition-all duration-300 mt-8 h-full">
                  <div className="p-3 rounded-xl bg-chart-1/10 border border-chart-1/20 w-fit mb-4 mx-auto">
                    <step.icon className="w-6 h-6 text-chart-1" />
                  </div>
                  <h3 className="text-lg text-center mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
