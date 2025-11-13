import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CountUp } from "@/components/CountUpStats";
import { LiveFeed } from "@/components/LiveFeed";
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  Sparkles, 
  Brain, 
  Briefcase, 
  Award, 
  Users, 
  Clock, 
  Video, 
  BookOpen,
  Target,
  Lightbulb,
  GraduationCap,
  FolderKanban,
  Trophy,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    objective: "",
    consent: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Set countdown to 2 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite receber comunicações para continuar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em até 24 horas.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      area: "",
      objective: "",
      consent: false,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse-soft" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left Column - 60% */}
            <div className="md:col-span-3 space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-white text-sm font-semibold">PÓS-GRADUAÇÃO EAD | FOCO EM LIDERANÇA E PERFORMANCE</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transforme sua expertise em liderança e performance profissional
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Programas premium com mentores executivos, laboratórios ao vivo e projetos aplicados 
                para você liderar a próxima fase da sua carreira.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                  Quero avançar agora
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-semibold">
                  Conhecer os cursos
                </Button>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    +<CountUp end={35} suffix="k" />
                  </div>
                  <p className="text-white/80 text-sm mt-1">Profissionais impulsionados</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <PieChart className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    <CountUp end={98} suffix="%" />
                  </div>
                  <p className="text-white/80 text-sm mt-1">Satisfação dos alunos</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    +<CountUp end={120} />
                  </div>
                  <p className="text-white/80 text-sm mt-1">Empresas parceiras</p>
                </div>
              </div>
            </div>

            {/* Right Column - 40% Pricing Card */}
            <div className="md:col-span-2">
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl p-8 animate-float hover:shadow-primary/20 transition-shadow duration-300">
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 rounded-lg py-3 px-4">
                    <p className="text-primary font-bold text-sm uppercase tracking-wide">
                      Condição Especial de Lançamento
                    </p>
                  </div>
                  
                  <div className="py-4">
                    <p className="text-muted-foreground text-base mb-2">A partir de 12x de</p>
                    <p className="text-7xl font-bold text-primary mb-2">R$ 66</p>
                    <p className="text-muted-foreground text-base">mensais*</p>
                  </div>
                  
                  <div className="space-y-3 text-left pt-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Mentoria executiva e experiências imersivas</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Conclusão a partir de 3 meses</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Aulas ao vivo e on-demand</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    Ver condições
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Banner */}
      <section className="gradient-dark py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Incentivos exclusivos para a nova turma</h2>
              <p className="text-white/80 mb-1">Aproveite benefícios como +3 cursos bônus de IA e até 70% OFF.*</p>
              <p className="text-accent font-bold text-lg">VAGAS LIMITADAS</p>
            </div>
            
            <div className="text-center">
              <p className="text-white/80 mb-4 uppercase text-sm tracking-wide">A oferta termina em:</p>
              <CountdownTimer targetDate={countdownDate} />
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              A combinação certa entre excelência acadêmica e performance profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estruturamos as jornadas de pós-graduação para que você aprenda com profundidade, 
              aplique rápido e avance na carreira
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Lightbulb, 
                title: "Aprendizado Ativo", 
                desc: "Metodologias com laboratórios ao vivo, business cases e simulações" 
              },
              { 
                icon: GraduationCap, 
                title: "Docentes e Mentores", 
                desc: "Professores doutores e executivos C-level que conectam teoria e desafios reais" 
              },
              { 
                icon: FolderKanban, 
                title: "Projeto de Carreira", 
                desc: "Trilhas personalizadas de empregabilidade e acesso à comunidade" 
              },
              { 
                icon: Trophy, 
                title: "Reconhecimento", 
                desc: "Cursos credenciados pelo MEC e alinhados às demandas do setor" 
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 hover-lift"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <item.icon className="h-10 w-10 text-primary animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Carousel */}
      <section id="advantages" className="relative py-20 px-4 overflow-hidden bg-[#0a0f1f]">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">BENEFÍCIOS & PROMOÇÕES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Vantagens exclusivas na pós-graduação FASUL
            </h2>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hidden md:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hidden md:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {[
                  { title: "Conclua em 3 meses", desc: "PROGRAMAS INTENSIVOS COM MENTORIAS SEMANAIS", borderColor: "border-l-[#ff8c42]" },
                  { title: "+10 cursos de IA inclusos", desc: "ESPECIALIZE-SE EM INTELIGÊNCIA ARTIFICIAL APLICADA", borderColor: "border-l-[#ff4d8f]" },
                  { title: "Projetos com empresas", desc: "DESAFIOS REAIS COM MERCADO (LIVT, B3 E FINSTN)", borderColor: "border-l-[#00d9a3]" },
                  { title: "Certificação MEC", desc: "DIPLOMA RECONHECIDO NACIONALMENTE", borderColor: "border-l-[#8b5cf6]" },
                  { title: "Mentoria executiva", desc: "ACOMPANHAMENTO INDIVIDUAL DE CARREIRA", borderColor: "border-l-[#3b82f6]" },
                  { title: "Networking alumni", desc: "COMUNIDADE ATIVA COM +25 MIL PROFISSIONAIS", borderColor: "border-l-[#0ea5e9]" },
                  { title: "Aulas ao vivo e on demand", desc: "FLEXIBILIDADE TOTAL PARA A SUA ROTINA", borderColor: "border-l-[#ff8c42]" },
                  { title: "Bolsa Exclusiva", desc: "ATÉ 70% OFF + 3 PÓS PARA INDICAR", borderColor: "border-l-[#8b5cf6]" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] bg-[#1a1f35]/50 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 p-6 group overflow-hidden hover:bg-[#1a1f35]/80 hover:border-white/20 border-l-4 ${item.borderColor}`}
                  >
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-xs uppercase tracking-wide leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Results */}
      <section id="social-proof" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-2">
                <span className="text-primary text-sm font-semibold uppercase">Resultados de Empregabilidade</span>
              </div>
              
              <h2 className="text-4xl font-bold">
                Evolução concreta da carreira com dados e acompanhamento
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Nossa formação combina competências técnicas e comportamentais para você liderar transformações
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={87} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">Alunos promovidos em até 12 meses</p>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={42} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">Média de aumento salarial</p>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={210} />
                  </div>
                  <p className="text-muted-foreground">Parceiras corporativas</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Career Lab</h3>
                <p className="text-sm text-muted-foreground">
                  Diagnóstico de perfil, construção de plano de carreira e acesso a oportunidades
                </p>
              </Card>
              
              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Sprints com Empresas</h3>
                <p className="text-sm text-muted-foreground">
                  Desafios com líderes para solucionar cases reais do mercado
                </p>
              </Card>
              
              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Comunidade Alumni</h3>
                <p className="text-sm text-muted-foreground">
                  Ambiente exclusivo para compartilhar vagas e mentorias
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-block bg-secondary/10 rounded-full px-4 py-2">
                <span className="text-secondary text-sm font-semibold uppercase">Inscrições em tempo real</span>
              </div>
              
              <h2 className="text-4xl font-bold">
                Quem está garantindo vaga agora na pós
              </h2>
              
              <p className="text-xl text-muted-foreground">
                A cada minuto novos profissionais se conectam. Veja as inscrições recentes e garanta 
                a sua antes que as turmas esgotem.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Atendimento humano responde em menos de 5 minutos</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Condições especiais liberadas para as próximas matrículas</p>
                </div>
              </div>
            </div>
            
            <div>
              <LiveFeed />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold">
                Receba o guia completo dos programas
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Preencha o formulário para conversar com nosso time de consultores educacionais e 
                descobrir as condições especiais desta edição.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Agenda flexível para atendimento individual</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Guia de cursos + matriz curricular por e-mail</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Condições especiais de lançamento para turmas 2025</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Card className="p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail corporativo"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Área de interesse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mba-gestao">MBA em Gestão</SelectItem>
                        <SelectItem value="mba-ti">MBA em TI</SelectItem>
                        <SelectItem value="pos-financas">Pós em Finanças</SelectItem>
                        <SelectItem value="pos-marketing">Pós em Marketing</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Qual seu principal objetivo profissional?"
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent" 
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Aceito receber comunicações sobre cursos, eventos e conteúdos educacionais
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Quero falar com um consultor
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Seus dados estão protegidos. Entraremos em contato em até 24h.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="md:col-span-2 space-y-4">
              <div className="inline-block">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide">Perguntas frequentes</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Tudo o que você precisa saber para decidir com confiança.
              </h2>
              <p className="text-muted-foreground">
                Caso sua pergunta não esteja aqui, nossa equipe educacional está pronta para ajudar.
              </p>
            </div>
            
            {/* Right Column - Questions */}
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Os cursos são reconhecidos pelo MEC?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Sim, todos os nossos programas de pós-graduação são credenciados pelo MEC e seguem as 
                    diretrizes do Conselho Nacional de Educação. Você receberá um diploma reconhecido em 
                    todo território nacional.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Como funcionam as aulas e encontros ao vivo?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    As aulas são 100% online, com sessões ao vivo semanais e conteúdos gravados disponíveis 
                    na plataforma 24/7. Você escolhe quando estudar, mas tem compromissos com laboratórios 
                    práticos e mentorias agendadas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Há suporte para networking e carreira?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Sim! Oferecemos acesso ao Career Lab, comunidade Alumni exclusiva, eventos presenciais 
                    de networking e conexão com mais de 210 empresas parceiras que buscam talentos qualificados.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Posso conciliar com a rotina de trabalho?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Absolutamente. Nossa metodologia foi desenhada para profissionais em atividade. Com aulas 
                    gravadas, encontros ao vivo à noite e aos finais de semana, você consegue equilibrar 
                    trabalho, estudo e vida pessoal.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Quais são as formas de pagamento?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Oferecemos parcelamento em até 18x no cartão de crédito, boleto bancário ou PIX. 
                    Além disso, temos condições especiais de bolsa para matrículas antecipadas e programas 
                    de financiamento estudantil.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Fasul</h3>
              <p className="text-white/80 text-sm">
                Ensino de excelência com nota máxima no MEC
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Quem somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estrutura</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reconhecimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Cursos</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">MBA & Pós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Graduação EAD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Extensão Executiva</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-white/80 mb-4">
                <li><a href="#" className="hover:text-white transition-colors">Central do aluno</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Atendimento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale conosco</a></li>
              </ul>
              
              <div className="flex gap-3">
                <a href="#" className="hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>© 2025 Fasul Educacional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
