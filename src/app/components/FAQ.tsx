import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Qual o prazo médio de entrega de um projeto?",
    answer: "O prazo varia conforme a complexidade. Projetos simples levam de 2-4 semanas, enquanto sistemas complexos podem levar de 2-3 meses. Sempre defino um cronograma detalhado no início."
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer: "Primeiro, conversamos sobre suas necessidades. Depois, envio uma proposta detalhada com escopo, prazo e valores. O pagamento pode ser parcelado conforme etapas do projeto."
  },
  {
    question: "Você oferece suporte após a entrega?",
    answer: "Sim! Todos os projetos incluem 30 dias de suporte gratuito. Após esse período, ofereço planos de manutenção mensal ou suporte por demanda."
  },
  {
    question: "Trabalha com contratos de longo prazo?",
    answer: "Sim, trabalho tanto com projetos pontuais quanto com contratos mensais para empresas que precisam de desenvolvimento contínuo."
  },
  {
    question: "Quais formas de pagamento você aceita?",
    answer: "Aceito PIX, transferência bancária, cartão de crédito, cartão de débito e boleto. Para projetos maiores, dividimos em parcelas conforme entregas das etapas."
  },
  {
    question: "Você assina NDA (acordo de confidencialidade)?",
    answer: "Sim, sem problemas! Entendo a importância da confidencialidade e estou disposto a assinar NDAs antes de iniciar qualquer projeto."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <h2 className="text-4xl md:text-5xl">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre como trabalho
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:border-chart-1/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <div className="p-2 rounded-lg bg-muted flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-chart-1" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
