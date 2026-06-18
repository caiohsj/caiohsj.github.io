import { motion } from "motion/react";
import { ArrowRight, Code2, Users, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-4/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-1"></span>
              </span>
              <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl tracking-tight"
              >
                Transformo ideias em{" "}
                <span className="bg-gradient-to-r from-chart-1 via-chart-4 to-chart-1 bg-clip-text text-transparent animate-[gradient_8s_linear_infinite] bg-[length:200%_auto]">
                  soluções digitais
                </span>{" "}
                escaláveis.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                Desenvolvedor Full Stack especializado em Laravel, Ruby on Rails, React, Vue.js, Node.js e React Native.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/5567998930699?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projetos"
                className="px-8 py-4 bg-muted/50 text-foreground rounded-xl hover:bg-muted transition-all duration-300 border border-border backdrop-blur-sm inline-block"
              >
                Ver projetos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">Experiência</span>
                </div>
                <p className="text-3xl">7+ anos</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="w-4 h-4" />
                  <span className="text-sm">Projetos</span>
                </div>
                <p className="text-3xl">17+</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Clientes</span>
                </div>
                <p className="text-3xl">BR</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/20 to-chart-4/20" />
              <img
                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3ODA2MzAyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
