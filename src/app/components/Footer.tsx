import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-1 to-chart-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FS</span>
              </div>
              <span className="text-xl font-medium">Caio Henrique</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Full Stack especializado em criar soluções digitais escaláveis e de alta qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-foreground transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-foreground transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-medium">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sistemas SaaS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  APIs REST
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Apps Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:caiohenrique.programador@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>caiohenrique.programador@gmail.com</span>
              </a>
              <a href="https://wa.me/5567998930699" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>(67) 99893-0699</span>
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/caiohsj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-chart-1/10 hover:text-chart-1 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/caio-henrique-30b699159/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-chart-1/10 hover:text-chart-1 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Caio Henrique. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
