import { motion } from "motion/react";
import { Award, Calendar, MapPin } from "lucide-react";

const timeline = [
  {
    year: "Jan 2022 - Presente",
    title: "Desenvolvedor Web - Jera",
    description: "Desenvolvimento e manutenção de aplicações web e APIs, testes automatizados, CI/CD, AWS/Azure, code review e levantamento de requisitos técnicos."
  },
  {
    year: "Jan 2021 - Jan 2022",
    title: "Estagiário em Desenvolvimento Web - Jera",
    description: "Atuei no desenvolvimento da aplicação \"Jornada do Motorista\", correção de bugs, novas funcionalidades e aprimoramento em Vue.js, Ruby e Rails."
  },
  {
    year: "Jul 2018 - Presente",
    title: "Desenvolvedor Web Freelancer",
    description: "Criação de sites e sistemas sob medida com PHP, Laravel, WordPress, Node.js, Vue.js, integração de APIs, SEO e metodologias ágeis."
  }
];

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl">Sobre Mim</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desenvolvedor Full Stack com experiência em Rails, Laravel, React, Vue.js e Node.js, atuando desde o freelancer até projetos de grande porte.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Minha jornada começou em 2018 como freelancer, criando sites e sistemas sob medida. Em 2021 entrei na Jera, onde atuei no desenvolvimento da aplicação "Jornada do Motorista" e depois como desenvolvedor web, trabalhando com Vue.js, Ruby on Rails, testes automatizados, CI/CD e implantação em AWS e Azure.
              </p>
              <p>
                Já trabalhei em projetos variados — de marketplaces e sistemas de gestão a aplicativos mobile e plataformas SaaS — sempre focado em escrever código de qualidade e entregar soluções que realmente resolvem problemas.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2">
                <Award className="w-6 h-6 text-chart-1" />
                <p className="text-sm text-muted-foreground">Experiência</p>
                <p className="font-medium">7+ anos</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2">
                <Calendar className="w-6 h-6 text-chart-1" />
                <p className="text-sm text-muted-foreground">Projetos</p>
                <p className="font-medium">17+ entregues</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2">
                <MapPin className="w-6 h-6 text-chart-1" />
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="font-medium">Brasil</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl">Experiência Profissional</h3>

            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chart-1 via-chart-4 to-transparent" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-8 space-y-2"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 -translate-x-[7px] w-3 h-3 rounded-full bg-chart-1 border-2 border-background" />

                  <p className="text-sm text-chart-1 font-medium">{item.year}</p>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
