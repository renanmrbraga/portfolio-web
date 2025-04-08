
import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  pt: {
    // Navbar
    "contact": "Contato",
    "github": "GitHub",
    // Hero
    "hero.subtitle": "Hacker de processos com dados, IA e automação — atuo na interseção entre ciência, análise e execução para resolver problemas de alto impacto com velocidade, inteligência e foco absoluto em entrega. Crio sistemas que otimizam decisões, escalam operações e geram valor real.",
    // Footer
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",
    // 404 Page
    "notfound.title": "404",
    "notfound.message": "Oops! Página não encontrada",
    "notfound.return": "Voltar para a Página Inicial",
    "contact.backHome": "Voltar para a Home",
    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Estou disponível para novos projetos, colaborações e oportunidades. Ficarei feliz em conversar sobre como posso ajudar.",
    "contact.infoTitle": "Informações de Contato",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.location.adress": "Volta Redonda, RJ - Brasil",
    "contact.social": "Redes Sociais",
    "contact.form.title": "Envie uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.namePlaceholder": "Seu nome",
    "contact.form.email": "E-mail",
    "contact.form.emailPlaceholder": "seu.e-mail@exemplo.com",
    "contact.form.message": "Mensagem",
    "contact.form.messagePlaceholder": "Sua mensagem aqui...",
    "contact.form.submit": "Enviar Mensagem",
    // Privacy Policy
    "privacy.title": "Política de Privacidade",
    "privacy.updated": "Última atualização: Junho 2024",
    "privacy.section1": "1. Informações que Coletamos",
    "privacy.section1.desc": "Ao utilizar nosso site, podemos coletar certos tipos de informações, incluindo:",
    "privacy.section1.item1": "Informações básicas de uso, como páginas visitadas e tempo gasto no site",
    "privacy.section1.item2": "Informações de contato que você nos fornecer voluntariamente",
    "privacy.section1.item3": "Cookies e tecnologias semelhantes para melhorar sua experiência",
    "privacy.section2": "2. Como Usamos suas Informações",
    "privacy.section2.desc": "Utilizamos as informações coletadas para:",
    "privacy.section2.item1": "Fornecer, manter e melhorar nosso site",
    "privacy.section2.item2": "Responder a suas solicitações e comunicações",
    "privacy.section2.item3": "Analisar como os usuários interagem com nosso site",
    "privacy.section2.item4": "Proteger contra atividades fraudulentas ou abusivas",
    "privacy.section3": "3. Compartilhamento de Informações",
    "privacy.section3.desc": "Não vendemos suas informações pessoais. Podemos compartilhar informações em circunstâncias limitadas:",
    "privacy.section3.item1": "Com prestadores de serviços que nos auxiliam na operação do site",
    "privacy.section3.item2": "Para cumprir obrigações legais",
    "privacy.section3.item3": "Para proteger direitos, propriedade ou segurança",
    "privacy.section4": "4. Seus Direitos",
    "privacy.section4.desc": "Dependendo da sua localização, você pode ter direitos específicos em relação aos seus dados, incluindo:",
    "privacy.section4.item1": "Acessar os dados que temos sobre você",
    "privacy.section4.item2": "Corrigir dados imprecisos",
    "privacy.section4.item3": "Excluir seus dados em determinadas circunstâncias",
    "privacy.section4.item4": "Restringir ou se opor a certos processamentos de dados",
    "privacy.section5": "5. Contato",
    "privacy.section5.desc": "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato comigo através dos canais disponíveis na página de Contato.",
    // Terms of Use
    "terms.title": "Termos de Uso",
    "terms.updated": "Última atualização: Junho 2024",
    "terms.intro": "Ao acessar e utilizar este site, você concorda com os seguintes Termos de Uso. Por favor, leia-os cuidadosamente.",
    "terms.section1": "1. Uso do Site",
    "terms.section1.desc": "O conteúdo deste site é fornecido apenas para fins informativos. Ao utilizar este site, você concorda em:",
    "terms.section1.item1": "Não utilizar o site de forma que possa danificá-lo ou prejudicar sua disponibilidade",
    "terms.section1.item2": "Não tentar acessar áreas restritas do site sem autorização",
    "terms.section1.item3": "Não usar o site para fins ilegais ou não autorizados",
    "terms.section2": "2. Propriedade Intelectual",
    "terms.section2.desc1": "Todo o conteúdo presente neste site, incluindo, mas não limitado a, textos, gráficos, logotipos, ícones, imagens, áudios, vídeos e software, é de propriedade exclusiva de Renan Braga ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.",
    "terms.section2.desc2": "Você não pode modificar, reproduzir, distribuir, transmitir, exibir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer material deste site sem autorização prévia por escrito.",
    "terms.section3": "3. Limitação de Responsabilidade",
    "terms.section3.desc": "O conteúdo deste site é fornecido \"como está\", sem qualquer garantia, expressa ou implícita. Em nenhuma circunstância, Renan Braga será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso deste site.",
    "terms.section4": "4. Links para Sites de Terceiros",
    "terms.section4.desc": "Este site pode conter links para sites de terceiros. Esses links são fornecidos apenas para conveniência do usuário. Renan Braga não possui controle sobre o conteúdo desses sites e não se responsabiliza por qualquer conteúdo, política de privacidade ou práticas de sites de terceiros.",
    "terms.section5": "5. Modificações dos Termos",
    "terms.section5.desc": "Reservo-me o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor assim que forem publicadas no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos Termos de Uso.",
    "terms.section6": "6. Contato",
    "terms.section6.desc": "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato comigo através dos canais disponíveis na página de Contato.",
    // Problem component
    "problem.quote": "\"Tecnocracia não é o problema, dados brutos são.\"",
    "problem.desc": "Gestores públicos e privados enfrentam um mar de dados descentralizados e mal documentados. Construir projetos estruturados com base em dados educacionais, populacionais e econômicos exige tempo, técnica e integração.",
    "problem.solution": "O PPP Insight resolve isso.",
    // How It Works component
    "howitworks.title": "Como o assistente funciona:",
    "howitworks.step1.title": "Você faz uma pergunta",
    "howitworks.step1.desc": "\"Qual a população e número de escolas em Maringá?\"",
    "howitworks.step2.title": "O sistema detecta a cidade e tema",
    "howitworks.step2.desc": "Identificação inteligente de entidades e contexto",
    "howitworks.step3.title": "Acessa dados confiáveis",
    "howitworks.step3.desc": "IBGE, INEP, FNDE e outras fontes governamentais",
    "howitworks.step4.title": "Usa uma LLM para interpretar",
    "howitworks.step4.desc": "Processamento e contextualização dos dados relevantes",
    "howitworks.step5.title": "Você recebe uma resposta clara",
    "howitworks.step5.desc": "Com contexto, fontes e possíveis insights",
    // About component
    "about.title": "Quem criou isso?",
    "about.name": "Renan Braga",
    "about.desc": "Sou um resolvedor de problemas. Uso dados, IA e automação para criar soluções que poupam tempo, reduzem custos e ampliam impacto. Acredito que tecnologia boa é aquela que funciona, escala e melhora a vida real.",
    "about.tagline": "Tecnologia aplicada com propósito, velocidade e impacto.",
    // TryNow component
    "trynow.title": "Experimente a IA em ação",
    "trynow.desc": "Faça perguntas sobre dados públicos e receba respostas claras e contextualizadas.",
    "trynow.button": "Acessar o Chatbot",
    "trynow.tip": "Funciona melhor em perguntas específicas, como: \"Quantas escolas públicas há em Montes Claros?\"",
    // ProjectsGrid
    "projects.title": "Meus Projetos",
    "projects.viewDetails": "Ver detalhes",
    "projects.pppInsightGrid.desc": "Um assistente de IA (LLM) que interpreta dados do IBGE, INEP e FNDE – ideal para projetos de parcerias público-privadas.",
    "projects.PortfolioWeb.desc": "Este site de portfólio desenvolvido com React, Vite e Tailwind CSS.",
    "projects.FootballAnalysis.desc": "Análise de dados focada em entender a relação entre investimentos financeiros, dívidas e sucesso esportivo nos clubes da Série A.",
    "projects.FootballScience.desc": "Machine Learning aplicado para prever o sucesso futuro dos clubes da Série A, com base em gastos, dívidas e estatísticas dos jogadores",
    // Project pages common
    "projects.back": "Voltar para a Home",
    "projects.problem": "O Problema",
    "projects.howitworks": "Como Funciona",
    "projects.technologies": "Tecnologias",
    "projects.openSource": "Projeto Open-Source",
    "projects.openSource.desc": "Contribua para o desenvolvimento deste projeto para todos.",
    "projects.contribute": "Contribuir no GitHub",
    "projects.viewDemo": "Visitar Demo",
    "projects.viewGithub": "Ver no GitHub",
    // PPP Insight Page
    "projects.PPPInsight.title": "PPP Insight",
    "projects.PPPInsight.subtitle": "Chatbot inteligente que transforma dados públicos brutos em respostas interpretadas para apoiar decisões estratégicas em projetos de PPPs.",
    "projects.PPPInsight.problem1": "Milhares de gestores públicos precisam tomar decisões baseadas em dados, mas enfrentam uma avalanche de informações descentralizadas e mal estruturadas.",
    "projects.PPPInsight.problem2": "Planilhas do INEP, tabelas do IBGE e bases do FNDE são técnicas, complexas e pouco acessíveis a quem precisa tomar decisões rápidas. O PPP Insight resolve isso.",
    "projects.PPPInsight.how1": "Você pergunta (ex: \"Quantas escolas há em São Gonçalo?\")",
    "projects.PPPInsight.how2": "O sistema detecta automaticamente a cidade e o tema",
    "projects.PPPInsight.how3": "Busca dados reais no banco (IBGE, INEP, FNDE, etc.)",
    "projects.PPPInsight.how4": "Gera uma resposta explicativa com uma LLM (Groq + Langchain)",
    "projects.PPPInsight.how5": "Exibe os dados interpretados com fontes confiáveis",
    // Football Analysis Page
    "projects.FootballAnalysis.title": "Football Analysis",
    "projects.FootballAnalysis.subtitle": "Plataforma pessoal de análise estratégica sobre como investimentos e gestão financeira impactam o desempenho esportivo dos clubes da Série A do Brasileirão nos últimos 10 anos.",
    "projects.FootballAnalysis.problem1": "Clubes de futebol enfrentam dificuldades para equilibrar performance esportiva e saúde financeira. Muitos gastam alto com retorno técnico limitado.",
    "projects.FootballAnalysis.problem2": "Este projeto analisa indicadores financeiros, dívidas, contratações e resultados em campo para revelar padrões e auxiliar uma gestão mais eficiente e estratégica.",
    "projects.FootballAnalysis.how1": "Coleta de dados",
    "projects.FootballAnalysis.how2": "Limpeza e padronização dos dados com Python",
    "projects.FootballAnalysis.how3": "Dashboards dinâmicos com Streamlit, Plotly e Power BI",
    // Football Science Page
    "projects.FootballScience.title": "Football Science",
    "projects.FootballScience.subtitle": "Projeto pessoal de ciência de dados voltado para previsão de desempenho esportivo, análise de scouts e identificação de padrões que influenciam os resultados dos clubes da Série A.",
    "projects.FootballScience.problem1": "Clubes tomam decisões com base em intuição ou pressão externa, sem evidências sólidas de performance futura. Isso gera contratações equivocadas, baixa eficiência tática e perda de investimentos.",
    "projects.FootballScience.problem2": "Este projeto coleta e estrutura dados detalhados sobre desempenho dos clubes, scouts, técnicos e contexto de jogo, servindo como base para modelagem preditiva e otimização de estratégias esportivas.",
    "projects.FootballScience.how1": "Scraping massivo e limpeza de dados (em progresso)",
    "projects.FootballScience.how2": "Criação de base analítica por temporada (em progresso)",
    "projects.FootballScience.how3": "Modelos preditivos e análise de clusters (planejado)",
    "projects.FootballScience.how4": "Dashboards interativos e insights táticos (planejado)",
  },
  en: {
    // Navbar
    "contact": "Contact",
    "github": "GitHub",
    // Hero
    "hero.subtitle": "Process hacker using data, AI, and automation — I operate at the intersection of science, analysis, and execution to solve high-impact problems with speed, intelligence, and an obsession for delivery. I build systems that optimize decisions, scale operations, and generate real value.",
    // Footer
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    // 404 Page
    "notfound.title": "404",
    "notfound.message": "Oops! Page not found",
    "notfound.return": "Return to Home",
    // Contact
    "contact.backHome": "Back to Home",
    "contact.title": "Get in Touch",
    "contact.subtitle": "I’m available for new projects, collaborations, and opportunities. Happy to talk about how I can help.",
    "contact.infoTitle": "Contact Information",
    "contact.email": "E-mail",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location.adress": "Volta Redonda - RJ, Brazil",
    "contact.social": "Social Media",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "E-mail",
    "contact.form.emailPlaceholder": "your.e-mail@example.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message here...",
    "contact.form.submit": "Send Message",
    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated: June 2024",
    "privacy.section1": "1. Information We Collect",
    "privacy.section1.desc": "When using our website, we may collect certain types of information, including:",
    "privacy.section1.item1": "Basic usage information, such as pages visited and time spent on the site",
    "privacy.section1.item2": "Contact information that you voluntarily provide to us",
    "privacy.section1.item3": "Cookies and similar technologies to improve your experience",
    "privacy.section2": "2. How We Use Your Information",
    "privacy.section2.desc": "We use the collected information to:",
    "privacy.section2.item1": "Provide, maintain, and improve our website",
    "privacy.section2.item2": "Respond to your requests and communications",
    "privacy.section2.item3": "Analyze how users interact with our website",
    "privacy.section2.item4": "Protect against fraudulent or abusive activities",
    "privacy.section3": "3. Information Sharing",
    "privacy.section3.desc": "We do not sell your personal information. We may share information in limited circumstances:",
    "privacy.section3.item1": "With service providers who assist us in operating the website",
    "privacy.section3.item2": "To comply with legal obligations",
    "privacy.section3.item3": "To protect rights, property, or safety",
    "privacy.section4": "4. Your Rights",
    "privacy.section4.desc": "Depending on your location, you may have specific rights regarding your data, including:",
    "privacy.section4.item1": "Accessing the data we have about you",
    "privacy.section4.item2": "Correcting inaccurate data",
    "privacy.section4.item3": "Deleting your data under certain circumstances",
    "privacy.section4.item4": "Restricting or objecting to certain data processing",
    "privacy.section5": "5. Contact",
    "privacy.section5.desc": "If you have questions about this Privacy Policy, please contact me through the channels available on the Contact page.",
    // Terms of Use
    "terms.title": "Terms of Use",
    "terms.updated": "Last updated: June 2024",
    "terms.intro": "By accessing and using this website, you agree to the following Terms of Use. Please read them carefully.",
    "terms.section1": "1. Use of the Website",
    "terms.section1.desc": "The content of this website is provided for informational purposes only. By using this website, you agree to:",
    "terms.section1.item1": "Not use the site in a way that may damage or impair its availability",
    "terms.section1.item2": "Not attempt to access restricted areas of the site without authorization",
    "terms.section1.item3": "Not use the site for illegal or unauthorized purposes",
    "terms.section2": "2. Intellectual Property",
    "terms.section2.desc1": "All content on this site, including but not limited to text, graphics, logos, icons, images, audio, video, and software, is the exclusive property of Renan Braga or its content suppliers and is protected by copyright laws.",
    "terms.section2.desc2": "You may not modify, reproduce, distribute, transmit, display, publish, license, create derivative works, transfer, or sell any material from this site without prior written authorization.",
    "terms.section3": "3. Limitation of Liability",
    "terms.section3.desc": "The content of this site is provided \"as is\" without any warranty, express or implied. Under no circumstances will Renan Braga be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this site.",
    "terms.section4": "4. Links to Third-Party Sites",
    "terms.section4.desc": "This site may contain links to third-party websites. These links are provided solely for the convenience of the user. Renan Braga has no control over the content of these sites and is not responsible for any content, privacy policy, or practices of third-party sites.",
    "terms.section5": "5. Modifications to Terms",
    "terms.section5.desc": "I reserve the right to modify these Terms of Use at any time. The changes will take effect as soon as they are published on the site. Continued use of the site after such changes constitutes your acceptance of the new Terms of Use.",
    "terms.section6": "6. Contact",
    "terms.section6.desc": "If you have questions about these Terms of Use, please contact me through the channels available on the Contact page.",
    // Problem component
    "problem.quote": "\"Technocracy isn't the problem, raw data is.\"",
    "problem.desc": "Public and private managers face a sea of decentralized and poorly documented data. Building structured projects based on educational, population, and economic data requires time, technique, and integration.",
    "problem.solution": "PPP Insight solves this.",
    // How It Works component
    "howitworks.title": "How the assistant works:",
    "howitworks.step1.title": "You ask a question",
    "howitworks.step1.desc": "\"What's the population and number of schools in Maringá?\"",
    "howitworks.step2.title": "The system detects the city and topic",
    "howitworks.step2.desc": "Intelligent entity and context identification",
    "howitworks.step3.title": "Accesses reliable data",
    "howitworks.step3.desc": "IBGE, INEP, FNDE, and other government sources",
    "howitworks.step4.title": "Uses an LLM to interpret",
    "howitworks.step4.desc": "Processing and contextualizing relevant data",
    "howitworks.step5.title": "You receive a clear answer",
    "howitworks.step5.desc": "With context, sources, and possible insights",
    // About component
    "about.title": "Who created this?",
    "about.name": "Renan Braga",
    "about.desc": "I'm a problem solver. I use data, AI, and automation to build solutions that save time, cut costs, and increase impact. I believe good technology is the kind that works, scales, and improves real life.",
    "about.tagline": "Technology applied with purpose, speed, and impact.",
    // TryNow component
    "trynow.title": "Experience AI in action",
    "trynow.desc": "Ask questions about public data and receive clear, contextualized answers.",
    "trynow.button": "Access the Chatbot",
    "trynow.tip": "Works best with specific questions, such as: \"How many public schools are there in Montes Claros?\"",
    // ProjectsGrid
    "projects.title": "My Projects",
    "projects.viewDetails": "View details",
    "projects.pppInsightGrid.desc": "An AI (LLM) assistant that interprets data from IBGE, INEP, and FNDE – ideal for public-private partnership projects.",
    "projects.PortfolioWeb.desc": "This portfolio website developed with React, Vite, and Tailwind CSS.",
    "projects.FootballAnalysis.desc": "Data analysis focused on understanding the relationship between financial investments, debt, and sports success in Série A football clubs.",
    "projects.FootballScience.desc": "Machine Learning applied to predict the future success of Série A football clubs, based on spending, debt, and player statistics.",
    // Project pages common
    "projects.back": "Back to Home",
    "projects.problem": "The Problem",
    "projects.howitworks": "How It Works",
    "projects.technologies": "Technologies",
    "projects.openSource": "Open Source Project",
    "projects.openSource.desc": "Contribute to the development of this project for everyone.",
    "projects.contribute": "Contribute on GitHub",
    "projects.viewDemo": "Visit Demo",
    "projects.viewGithub": "View on GitHub",
    // PPP Insight Page
    "projects.PPPInsight.title": "PPP Insight",
    "projects.PPPInsight.subtitle": "Intelligent chatbot that transforms raw public data into interpreted answers to support strategic decisions in PPP projects.",
    "projects.PPPInsight.problem1": "Thousands of public managers need to make data-based decisions but face an avalanche of decentralized and poorly structured information.",
    "projects.PPPInsight.problem2": "INEP spreadsheets, IBGE tables, and FNDE databases are technical, complex, and inaccessible to those who need to decide quickly. PPP Insight solves this.",
    "projects.PPPInsight.how1": "You ask (e.g., \"How many schools are there in São Gonçalo?\")",
    "projects.PPPInsight.how2": "The system automatically detects the city and topic",
    "projects.PPPInsight.how3": "Fetches real data from the database (IBGE, INEP, FNDE, etc.)",
    "projects.PPPInsight.how4": "Generates an explanatory answer using an LLM (Groq + Langchain)",
    "projects.PPPInsight.how5": "Displays interpreted data with reliable sources",
    // Football Analysis Page
    "projects.FootballAnalysis.title": "Football Analysis",
    "projects.FootballAnalysis.subtitle": "Personal strategic analysis platform on how investments and financial management impact the sports performance of Série A clubs in the last 10 years.",
    "projects.FootballAnalysis.problem1": "Football clubs struggle to balance sports performance and financial health. Many spend heavily with limited technical returns.",
    "projects.FootballAnalysis.problem2": "This project analyzes financial indicators, debts, signings, and match results to uncover patterns and support more strategic management.",
    "projects.FootballAnalysis.how1": "Data collection",
    "projects.FootballAnalysis.how2": "Data cleaning and standardization with Python",
    "projects.FootballAnalysis.how3": "Dynamic dashboards with Streamlit, Plotly, and Power BI",
    // Football Science Page
    "projects.FootballScience.title": "Football Science",
    "projects.FootballScience.subtitle": "Personal data science project focused on forecasting sports performance, scout analysis, and identifying patterns that influence Série A club results.",
    "projects.FootballScience.problem1": "Clubs make decisions based on intuition or external pressure, without solid evidence of future performance. This leads to misguided signings, low tactical efficiency, and wasted investments.",
    "projects.FootballScience.problem2": "This project collects and structures detailed data on club performance, scouts, coaches, and match context, serving as a base for predictive modeling and strategic optimization.",
    "projects.FootballScience.how1": "Massive scraping and data cleaning (in progress)",
    "projects.FootballScience.how2": "Creation of analytical database by season (in progress)",
    "projects.FootballScience.how3": "Predictive models and cluster analysis (planned)",
    "projects.FootballScience.how4": "Interactive dashboards and tactical insights (planned)",
  }
};

const initialState: LanguageProviderState = {
  language: "pt",
  setLanguage: () => null,
  t: (key: string) => key,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "pt",
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) {
  const getBrowserLanguage = (): Language => {
    const lang = navigator.language || navigator.languages[0] || "pt";
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("pt")) return "pt";
    return defaultLanguage;
  };
  
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || getBrowserLanguage()
  );

  useEffect(() => {
    localStorage.setItem(storageKey, language);
    document.documentElement.setAttribute('lang', language);
  }, [language, storageKey]);

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key] || key;
  };

  const value = {
    language,
    setLanguage: (language: Language) => {
      setLanguage(language);
    },
    t,
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
