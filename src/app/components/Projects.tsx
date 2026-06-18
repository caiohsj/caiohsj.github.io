import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Aperta e Solta",
    description: "Atuei no desenvolvimento backend com Ruby on Rails, liderando a evolução da API e conduzindo a refatoração completa do módulo de manutenção, com foco em escalabilidade e organização do código.",
    image: "/images/projects/aperta-e-solta.webp",
    imageContain: true,
    tech: ["Rails", "API"],
    category: "Mobile"
  },
  {
    title: "Recmais",
    description: "Participei do projeto desde sua concepção, atuando no backend com Ruby on Rails e frontend com Vue.js, implementando funcionalidades estratégicas e modelagem de regras de negócio.",
    image: "/images/projects/recmais.png",
    tech: ["Rails", "Vue.js"],
    category: "E-commerce"
  },
  {
    title: "Seafarer",
    description: "Atuei no backend com Ruby on Rails e frontend do módulo de recrutamento com Vue.js, contribuindo para fluxos de seleção, gestão de candidatos e processos de contratação.",
    image: "/images/projects/seafarer.avif",
    imageContain: true,
    tech: ["Rails", "Vue.js"],
    category: "Enterprise"
  },
  {
    title: "Sauver",
    description: "Participei da manutenção e evolução do sistema monolítico em Ruby on Rails, além do desenvolvimento das APIs consumidas pelo aplicativo mobile.",
    image: "/images/projects/sauver.webp",
    imageContain: true,
    tech: ["Rails", "API"],
    category: "Mobile"
  },
  {
    title: "Duas Vidas",
    description: "Atuei no desenvolvimento e manutenção do sistema monolítico com Laravel, além da criação e evolução das APIs responsáveis pela comunicação com os aplicativos móveis.",
    image: "/images/projects/duasvidas.webp",
    imageContain: true,
    tech: ["PHP", "Laravel", "API"],
    category: "Mobile"
  },
  {
    title: "Baby Symmetry",
    description: "Desenvolvi melhorias no backend em Python e frontend em React, incluindo integração com Stripe para processamento de pagamentos e gerenciamento de assinaturas.",
    image: "/images/projects/babysymmetry.webp",
    imageContain: true,
    tech: ["Python", "React", "Stripe"],
    category: "E-commerce"
  },
  {
    title: "Biofaces",
    description: "Trabalhei na manutenção do sistema legado em PHP 5 e participei da modernização, atuando na migração e refatoração para Ruby on Rails e Vue.js.",
    image: "/images/projects/biofaces.webp",
    tech: ["PHP", "Rails", "Vue.js"],
    category: "Enterprise"
  },
  {
    title: "Encontre no Sesc",
    description: "Atuei no backend em Ruby on Rails e frontend em Vue.js para um aplicativo híbrido com Flutter e WebView, implementando funcionalidades de busca e consulta.",
    image: "/images/projects/encontrems.webp",
    imageContain: true,
    tech: ["Rails", "Vue.js", "Flutter"],
    category: "Mobile"
  },
  {
    title: "Sistema de Aula SESC",
    description: "Participei do desenvolvimento de um sistema interno para gestão educacional, com controle de turmas, matrículas, alunos, professores e processos administrativos.",
    image: "/images/projects/sistema-aula-sesc.jpg",
    tech: ["Rails"],
    category: "Enterprise"
  },
  {
    title: "Trackland",
    description: "Atuei no frontend com React e GraphQL, construindo interfaces de monitoramento em tempo real, gestão de rotas e acompanhamento operacional do transporte escolar.",
    image: "/images/projects/trackland.jpg",
    tech: ["React", "GraphQL"],
    category: "Enterprise"
  },
  {
    title: "Biblioteca das Rochas",
    description: "Participei da modernização da plataforma, migrando e refatorando para arquitetura baseada em Ruby on Rails no backend e Nuxt.js no frontend.",
    image: "/images/projects/biblioteca-rochas.png",
    tech: ["Rails", "Nuxt"],
    category: "Enterprise"
  },
  {
    title: "Senai Ecommerce",
    description: "Atuei na conclusão e estabilização de uma plataforma de e-commerce em Ruby on Rails com Solidus, implementando ajustes e funcionalidades para entrada em produção.",
    image: "/images/projects/senai-ecommerce.png",
    tech: ["Rails", "Solidus"],
    category: "E-commerce"
  },
  {
    title: "Oneri",
    description: "Desenvolvi a plataforma desde a concepção com Laravel e Vue.js, responsável pela arquitetura, modelagem de banco de dados, backend, frontend e integrações.",
    image: "/images/projects/oneri.jpg",
    tech: ["Laravel", "Vue.js"],
    category: "SaaS"
  },
  {
    title: "Guiacompare",
    description: "Atuei na manutenção evolutiva e corretiva da plataforma em PHP com CodeIgniter, implementando novas funcionalidades, integrações e melhorias de desempenho.",
    image: "/images/projects/guiacompare.png",
    tech: ["PHP", "Codeigniter"],
    category: "Enterprise"
  },
  {
    title: "360 Benefícios",
    description: "Participei do desenvolvimento e manutenção de uma plataforma de gestão de benefícios corporativos, com funcionalidades para administração de colaboradores e benefícios.",
    image: "/images/projects/360-beneficios.jpg",
    tech: ["Rails"],
    category: "Enterprise"
  },
  {
    title: "SMX Inventários - Patrimonial",
    description: "Desenvolvi o sistema integralmente a partir de processos controlados por planilhas, criando solução web para gestão patrimonial, inventário de ativos e relatórios gerenciais.",
    image: "/images/projects/smx-inventarios.jpg",
    tech: ["Rails"],
    category: "Enterprise"
  }
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl">Projetos em Destaque</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que tive o prazer de desenvolver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-chart-1/10 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  style={({ objectFit: project.imageContain ? "contain" : "cover" } as React.CSSProperties)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-6">
                  <button className="p-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-muted text-foreground hover:bg-muted/80 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-chart-1/10 text-chart-1 border border-chart-1/20">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
