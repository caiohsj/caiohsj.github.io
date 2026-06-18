import { motion } from "motion/react";

const techCategories = [
  {
    category: "Backend",
    items: ["Laravel", "Ruby on Rails", "Node.js", "PHP", "Express", "Python", "NestJS", "Codeigniter"]
  },
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap", "Next.js"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "iOS", "Android", "PWA"]
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "CI/CD", "Nginx", "Apache", "VPS", "CPanel", "Cloudflare"]
  },
  {
    category: "Outras",
    items: ["REST API", "Stripe", "GraphQL", "WebSockets", "TDD"]
  }
];

export function Technologies() {
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
          <h2 className="text-4xl md:text-5xl">Tecnologias</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderno e ferramentas para criar soluções robustas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-chart-1/50 transition-all duration-300 space-y-4"
            >
              <h3 className="text-xl text-chart-1">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground border border-border hover:border-chart-1/30 hover:bg-chart-1/5 transition-all duration-300 text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
