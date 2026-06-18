import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-1/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-chart-4/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex p-4 rounded-2xl bg-chart-1/10 border border-chart-1/20"
          >
            <Sparkles className="w-8 h-8 text-chart-1" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl"
          >
            Pronto para tirar seu{" "}
            <span className="bg-gradient-to-r from-chart-1 via-chart-4 to-chart-1 bg-clip-text text-transparent">
              projeto do papel
            </span>
            ?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Vamos conversar sobre sua ideia e criar algo incrível juntos. Entre em contato agora e receba um orçamento personalizado.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5567998930699?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <span className="text-lg">Solicitar orçamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full" />
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full" />
              <span>Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full" />
              <span>NDA disponível</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
