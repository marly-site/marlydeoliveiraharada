import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, BookOpen, Music, MapPin, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [expandedPoem, setExpandedPoem] = useState<string | null>(null);

  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Marly de Oliveira Harada — Poetisa Brasileira e Autora do Hino de Oriximiná";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça Marly de Oliveira Harada, poetisa brasileira nascida em Oriximiná, Pará. Autora do famoso Hino de Oriximiná, com uma trajetória dedicada à poesia, música e preservação da história amazônica.');
    }
  }, []);

  const hinoVerses = [
    "O sol com seu grande fulgor,\nSobre esta terra paraense\nEnche o peito de nobreza e valor\nDe cada oriximinaense",
    "As matas, o céu azulino\nTodo o passado traduz\nImitemos José Nicolino,\nUma epopéia de luz.",
    "Liberdade! Liberdade!\nEm dezembro surgiste pra nós\nÉs uma luz de bondade\nUm dos mais belos faróis.",
    "Uruá-Tapera, teu nome primeiro\nVeio outro pra ser verdadeiro\nHoje és o orgulho do Pará\nNossa dileta Oriximiná.",
    "Trombetas com suavidade\nTe banha com todo ardor\nSuas águas com sua claridade\nRefletem teu grande esplendor.",
    "Tuas serras de um verde-montanha\nSimbolizam as nossas riquezas\nJuta, bauxita e castanha,\ndoadas pela natureza.",
    "Tuas praias brancas ao luar\nHá beleza em todas as zonas\nÉs uma estrela a brilhar\nJunto ao rio Amazonas.",
    "Oriximiná, jardim da esperança\nOnde tudo sorrir...\nBerço de sonhos e de crenças\nQuanta fé nos vem de ti.",
    "Teu povo sempre viril\nPor ti não mede labor\nE te traz dentro do peito\nCom pujança do amor.",
  ];

  const timeline = [
    { year: "1941", event: "Nascimento em Oriximiná (PA), no rio Nhamundá" },
    { year: "Infância", event: "Vida dedicada à família, ao funcionalismo público e aos estudos" },
    { year: "1977", event: "Vence o concurso do Símbolo do Centenário de Oriximiná" },
    { year: "1992–2012", event: "Premiações em concursos de frases, músicas, canções e hinos cívicos" },
    { year: "Obra", event: "Hino de Oriximiná — premiado e entoado em escolas e eventos cívicos" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Navegação principal">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent"><a href="#" title="Marly de Oliveira Harada">Marly Harada</a></div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors">Sobre</a>
            <a href="#obras" className="text-foreground hover:text-accent transition-colors">Obras</a>
            <a href="#hino" className="text-foreground hover:text-accent transition-colors">Hino</a>
            <a href="#galeria" className="text-foreground hover:text-accent transition-colors">Galeria</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" aria-label="Seção de apresentação">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-accent font-semibold tracking-wide">Bem-vindo</p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Marly de Oliveira Harada
                </h1>
                <p className="text-xl text-muted-foreground font-light">
                  Poetisa brasileira — autora do Hino de Oriximiná
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Poesia, memória e fé. Uma vida dedicada à arte, à família e à preservação da história de Oriximiná, Pará.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-accent text-accent-foreground hover:opacity-90 text-base px-8 py-6">
                  <a href="#hino">Ouvir o Hino</a>
                </Button>
                <Button asChild variant="outline" className="text-base px-8 py-6">
                  <a href="#sobre">Conhecer Marly</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <Music className="w-32 h-32 text-accent/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Imagem de Marly de Oliveira Harada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-card" aria-label="Seção sobre Marly">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide">BIOGRAFIA</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Sobre Marly</h2>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Vida e Trajetória</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Marly de Oliveira Harada nasceu no município de Oriximiná, Pará, no dia 03 de outubro de 1941, na localidade do rio Nhamundá. Filha de Manoel Picanço de Oliveira e Raimunda Alzerina Rodrigues de Oliveira, veio a residir na cidade de Oriximiná com seus pais aos sete anos de idade.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Formação e Dedicação</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Com dez anos, foi estudar em Santarém, no Colégio Santa Clara. Dedicou-se aos filhos e ao funcionalismo público. Aos 70 anos, conseguiu se formar em Administração. Realizou cursos de Auxiliar de Enfermagem, Recriação Comunitária e Pós-Graduação em Comunicação Social pela Universidade Urbaniana (CNBB).
                </p>
              </Card>
            </div>

            <Card className="p-8 space-y-4 bg-accent/5 border-accent/20">
              <h3 className="text-2xl font-bold text-foreground">Obra Artística</h3>
              <p className="text-foreground/80 leading-relaxed">
                Marly sempre participou de concursos de músicas e poesias, destacando-se em 1º lugar em diversos eventos. É autora da letra e música de hinos escolares e canções cívicas. Sua obra mais famosa é o Hino de Oriximiná, premiado em concurso promovido pela prefeitura municipal. O hino é cantado nas escolas e em eventos cívicos. Inspira-se na natureza e na rica história de Oriximiná para escrever suas poesias, hinos e canções.
              </p>
            </Card>

            {/* Timeline */}
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-bold text-foreground">Marcos Importantes</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-6 border-b border-border last:border-0">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold">
                        {item.year.substring(0, 2)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">{item.year}</p>
                      <p className="text-foreground/80">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="obras" className="py-20 md:py-32 bg-background" aria-label="Seção de obras e poemas">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide">CRIAÇÕES</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Obras & Poemas</h2>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-foreground">Versos — "Coisas da Natureza"</h3>
                    <p className="text-foreground/80">
                      Canção premiada no 1º Festival de Música Popular de Oriximiná (2000). Uma composição que celebra a beleza natural da região amazônica.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-foreground">Símbolo do Centenário</h3>
                    <p className="text-foreground/80">
                      Vencedora do concurso do Símbolo do Centenário de Oriximiná em 1977. Uma obra que marca a história e identidade da cidade.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hino Section */}
      <section id="hino" className="py-20 md:py-32 bg-card" aria-label="Seção do Hino de Oriximiná">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide">OBRA-PRIMA</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Hino de Oriximiná</h2>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
              <p className="text-lg text-muted-foreground">Letra e música de Marly de Oliveira Harada</p>
            </div>

            <div className="space-y-4">
              {hinoVerses.map((verse, index) => (
                <Card
                  key={index}
                  className="p-6 cursor-pointer hover:shadow-md transition-all"
                  onClick={() => setExpandedPoem(expandedPoem === index.toString() ? null : index.toString())}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-foreground/80 whitespace-pre-line font-serif leading-relaxed text-lg">
                        {verse}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                        expandedPoem === index.toString() ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-accent/5 border-accent/20 space-y-4">
              <h3 className="text-xl font-bold text-foreground">Sobre o Hino</h3>
              <p className="text-foreground/80 leading-relaxed">
                O Hino de Oriximiná é a obra mais celebrada de Marly de Oliveira Harada. Premiado em concurso promovido pela prefeitura municipal, o hino é entoado regularmente nas escolas e em eventos cívicos de Oriximiná. Seus versos celebram a natureza exuberante, a história rica e o espírito do povo paraense, refletindo a profunda conexão de Marly com sua terra natal.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 md:py-32 bg-background" aria-label="Galeria de imagens de Oriximiná">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide">VISUAL</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Galeria</h2>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
              <p className="text-lg text-muted-foreground">Praça e Igreja Matriz de Oriximiná</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-accent/30 mx-auto mb-2" />
                      <p className="text-muted-foreground">Imagem {item} de Oriximiná</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-foreground/60 text-sm">
              © 2025 — Site de homenagem à obra de Marly de Oliveira Harada, poetisa brasileira.
            </p>
            <p className="text-foreground/40 text-xs">
              Design elegante + profissional. Criado com dedicação e cuidado.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
