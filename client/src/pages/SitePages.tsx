import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Landmark,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import {
  ActionLink,
  ArticleCard,
  FormFrame,
  PageHeader,
  SectionHeading,
} from "../components/site";

const heroImage = "/images/nk-trade-hero.png";
const articleImage = "/images/trade-finance-editorial.png";
const articleTitle = "2026 | Le Trade Finance : Expertise technique, performance commerciale et maîtrise des risques";
const trainingEmbed = "https://docs.google.com/forms/d/e/1FAIpQLSc0HjSwJ-YoS8nHCf-SMfxF8ubRhhrnIJoBQT4G4ZmhRcDreA/viewform?embedded=true";
const trainingExternal = "https://docs.google.com/forms/d/e/1FAIpQLSc0HjSwJ-YoS8nHCf-SMfxF8ubRhhrnIJoBQT4G4ZmhRcDreA/viewform";
const investmentEmbed = "https://docs.google.com/forms/d/e/1FAIpQLSfQlMAZ77bVQYe30iGmTAduXNByylh7VQVFMDKKWGuPA7q_1g/viewform?embedded=true";
const investmentExternal = "https://docs.google.com/forms/d/e/1FAIpQLSfQlMAZ77bVQYe30iGmTAduXNByylh7VQVFMDKKWGuPA7q_1g/viewform";

const articleParagraphs = [
  "Au cours de ces derniers mois, NK TRADE & BANKING EXPERTS a eu le plaisir d'accompagner deux grands groupes bancaires marocains dans le renforcement des compétences de leurs équipes au Maroc et dans 8 pays d'Afrique subsaharienne, autour des métiers du Trade Finance et de l'accompagnement des entreprises à l'international.",
  "Ces interventions ont couvert la réglementation marocaine des changes 2026, les fondamentaux, enjeux et risques du Trade Finance, ainsi que l'approche opérationnelle des principaux instruments Trade Finance.",
  "Une approche volontairement transverse, réunissant équipes Trade Finance, forces commerciales Corporate, Engagements, Risques, Audit, Contrôle permanent et Conformité LCB/FT.",
  "Notre conviction : une banque développe durablement son PNB Trade lorsque ses équipes savent identifier les besoins internationaux de l'entreprise, proposer les solutions Trade Finance adaptées et en maîtriser les risques.",
  "C'est cette approche commerciale, technique et opérationnelle que NK TRADE & BANKING EXPERTS met au service des banques et des entreprises.",
];

const trainingTopics = [
  "Trade Finance : fondamentaux, enjeux et risques",
  "Correspondent Banking",
  "Incoterms et commerce international",
  "Crédits documentaires et instruments de paiement",
  "SBLC et garanties internationales",
  "Réglementation des changes",
];

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" />Conseil · Formation · Banque internationale</span>
            <h1>Maîtriser les échanges. <em>Accélérer l'international.</em></h1>
            <p className="hero-lede">Nous accompagnons les banques et les entreprises importatrices et exportatrices dans la maîtrise de leurs opérations de commerce international et la montée en compétence de leurs équipes.</p>
            <div className="hero-actions">
              <ActionLink href="/formations">Voir les formations</ActionLink>
              <ActionLink href="/investissements" variant="outline">Investir avec nous</ActionLink>
            </div>
            <div className="hero-assurance"><span className="assurance-dot" />Plus de 35 ans d'expertise bancaire et internationale</div>
          </div>
          <div className="hero-visual-wrap">
            <div className="hero-visual">
              <img src={heroImage} alt="Architecture lumineuse ouverte sur les échanges internationaux" />
              <div className="hero-image-caption">
                <span className="caption-label">Une expertise qui relie</span>
                <strong>La banque, l'entreprise et le monde.</strong>
              </div>
            </div>
            <div className="hero-image-index"><span>01</span><span className="index-line" /><span>Trade Finance</span></div>
            <span className="hero-decor" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Chiffres clés">
        <div className="container stats-card">
          <div className="stat-item"><span className="stat-number">35<span>+</span></span><span className="stat-label">ans d'expertise</span></div>
          <div className="stat-item"><span className="stat-number">2</span><span className="stat-label">grands groupes bancaires accompagnés</span></div>
          <div className="stat-item"><span className="stat-number">8</span><span className="stat-label">pays d'Afrique subsaharienne</span></div>
          <div className="stats-note"><span className="stats-note-mark">NK</span><span>Une présence au service des métiers du Trade Finance</span></div>
        </div>
      </section>

      <section className="section section-about">
        <div className="container about-grid">
          <div className="about-aside">
            <span className="eyebrow"><span className="eyebrow-line" />Notre mission</span>
            <div className="vertical-note">L'EXPERTISE AU SERVICE DU MOUVEMENT</div>
          </div>
          <div className="about-main">
            <h2>Rendre le commerce international <em>plus lisible, plus sûr, plus performant.</em></h2>
            <p>NK Trade &amp; Banking Experts est un cabinet de conseil et de formation spécialisé en Trade Finance et Banque Internationale. Forts de plus de 35 ans d'expertise bancaire et internationale, nous accompagnons les banques et les entreprises importatrices/exportatrices.</p>
            <p>Notre mission : faciliter la compréhension et la maîtrise des enjeux complexes du Trade Finance, afin de sécuriser les transactions, optimiser les coûts et développer les activités à l'international.</p>
            <ActionLink href="/a-propos" variant="text">Découvrir le cabinet</ActionLink>
          </div>
        </div>
      </section>

      <section className="section section-expertise">
        <div className="container">
          <SectionHeading eyebrow="Nos expertises" title="La maîtrise technique, au plus près de vos enjeux." body="Du cadrage stratégique à l'exécution opérationnelle, nous aidons vos équipes à mieux maîtriser les instruments et les risques du commerce international." />
          <div className="expertise-preview-grid">
            <article className="expertise-preview"><span className="icon-disc"><Landmark size={21} /></span><span className="card-number">01 / CONSEIL</span><h3>Trade Finance stratégique et opérationnel</h3><p>Des repères concrets pour structurer les opérations et faire évoluer les pratiques.</p><Link href="/expertise-conseil" className="arrow-only" aria-label="Découvrir le conseil"><ArrowUpRight size={19} /></Link></article>
            <article className="expertise-preview"><span className="icon-disc"><BookOpenCheck size={21} /></span><span className="card-number">02 / FORMATION</span><h3>La compétence, au rythme de vos équipes</h3><p>Des formations professionnelles sur mesure, ancrées dans la réalité des opérations.</p><Link href="/formations" className="arrow-only" aria-label="Découvrir les formations"><ArrowUpRight size={19} /></Link></article>
            <article className="expertise-preview"><span className="icon-disc"><ShieldCheck size={21} /></span><span className="card-number">03 / MAÎTRISE DES RISQUES</span><h3>Sécuriser les transactions internationales</h3><p>Conformité, prévention et protection du risque dans un environnement exigeant.</p><Link href="/expertise-conseil" className="arrow-only" aria-label="Découvrir l'expertise risque"><ArrowUpRight size={19} /></Link></article>
          </div>
          <div className="section-tail"><span>Une approche transversale des métiers du commerce international</span><ActionLink href="/expertise-conseil" variant="text">Voir l'expertise &amp; conseil</ActionLink></div>
        </div>
      </section>

      <section className="section section-training-callout">
        <div className="container training-callout">
          <div className="callout-icon"><BookOpenCheck size={25} /></div>
          <div className="callout-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />Développer les compétences</span><h2>Des savoirs techniques, transformés en réflexes opérationnels.</h2><p>Des parcours de formation adaptés à vos instruments, vos équipes et vos opérations internationales.</p></div>
          <ActionLink href="/formations" variant="gold">Explorer les formations</ActionLink>
          <span className="callout-orbit" aria-hidden="true" />
        </div>
      </section>

      <section className="section section-article-preview">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow="Regards d'experts" title="L'actualité du Trade Finance." body="Une lecture technique, commerciale et opérationnelle des enjeux internationaux." /><ActionLink href="/blog" variant="outline">Tous les articles</ActionLink></div>
          <div className="featured-article-grid"><ArticleCard href="/blog/le-trade-finance-2026" image={articleImage} title={articleTitle} date="2026" excerpt="Accompagner les équipes bancaires dans le renforcement des compétences Trade Finance au Maroc et dans 8 pays d'Afrique subsaharienne." /><div className="article-quote"><span className="quote-mark">“</span><blockquote>Une banque développe durablement son PNB Trade lorsque ses équipes savent identifier les besoins internationaux de l'entreprise, proposer les solutions adaptées et en maîtriser les risques.</blockquote><span className="quote-attribution">Notre conviction · NK Trade &amp; Banking Experts</span></div></div>
        </div>
      </section>

      <section className="closing-strip"><div className="container closing-strip-inner"><div><span className="eyebrow"><span className="eyebrow-line" />Construisons la suite</span><h2>Un partenaire de confiance au service de votre performance internationale.</h2></div><ActionLink href="/contact">Parlons de vos enjeux</ActionLink></div></section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Une expertise bancaire tournée vers l'international." intro="Plus de 35 ans d'expérience au croisement de la banque, du commerce international et de l'accompagnement des équipes." />
      <section className="section page-content-section">
        <div className="container narrative-grid">
          <div className="narrative-aside"><span className="eyebrow"><span className="eyebrow-line" />Le cabinet</span><span className="narrative-aside-number">35<span>+</span></span><span className="narrative-aside-label">ans d'expertise bancaire et internationale</span></div>
          <div className="narrative-copy"><h2>Faire le lien entre la technicité bancaire et les réalités du commerce.</h2><p>NK Trade &amp; Banking Experts est un cabinet de conseil et de formation spécialisé en Trade Finance et Banque Internationale. Forts de plus de 35 ans d'expertise bancaire et internationale, nous accompagnons les banques et les entreprises importatrices/exportatrices dans la maîtrise de leurs opérations de commerce international, l'optimisation de leurs processus financiers et la montée en compétence de leurs équipes.</p><p>Nos interventions ont accompagné deux grands groupes bancaires marocains dans le renforcement des compétences de leurs équipes au Maroc et dans 8 pays d'Afrique subsaharienne.</p><div className="quote-panel"><span className="quote-panel-label">Notre mission</span><p>Faciliter la compréhension et la maîtrise des enjeux complexes du Trade Finance pour permettre à nos clients de sécuriser leurs transactions, optimiser leurs coûts et développer leurs activités à l'international.</p></div></div>
        </div>
      </section>
      <section className="section section-wash"><div className="container about-principles"><SectionHeading eyebrow="Notre approche" title="Une perspective transverse, concrète et engagée." /><div className="principles-list"><div><span>01</span><div><h3>Comprendre les enjeux</h3><p>Relier les besoins des entreprises aux solutions de financement et d'accompagnement international.</p></div></div><div><span>02</span><div><h3>Outiller les équipes</h3><p>Faire progresser les compétences techniques et commerciales autour des opérations Trade Finance.</p></div></div><div><span>03</span><div><h3>Maîtriser les risques</h3><p>Intégrer conformité, contrôle et prévention du risque dans les pratiques quotidiennes.</p></div></div></div></div></section>
      <section className="section"><div className="container signature-band"><span className="eyebrow"><span className="eyebrow-line" />Notre signature</span><p>NK Trade &amp; Banking Experts, un partenaire de confiance au service de votre performance internationale.</p><ActionLink href="/contact" variant="text">Échanger avec le cabinet</ActionLink></div></section>
    </>
  );
}

export function ExpertisePage() {
  const services = [
    { icon: <TrendingUp size={22} />, number: "01", title: "Conseil stratégique et opérationnel", text: "Un accompagnement en Trade Finance pour relier les choix stratégiques à la réalité des opérations et des équipes." },
    { icon: <BriefcaseBusiness size={22} />, number: "02", title: "Financement import / export", text: "Structuration et gestion des opérations de financement liées aux échanges internationaux." },
    { icon: <ShieldCheck size={22} />, number: "03", title: "Conformité et protection du risque", text: "Accompagnement à la mise en place de dispositifs de conformité et de protection du risque international." },
    { icon: <Network size={22} />, number: "04", title: "Processus et coordination des métiers", text: "Optimisation des processus financiers et approche transverse associant les fonctions concernées." },
  ];
  return (
    <>
      <PageHeader eyebrow="Expertise & conseil" title="Sécuriser les opérations. Éclairer les décisions." intro="Une expertise stratégique et opérationnelle en Trade Finance pour maîtriser les opérations de financement import/export et le risque international." />
      <section className="section page-content-section"><div className="container"><div className="intro-columns"><div><span className="eyebrow"><span className="eyebrow-line" />Notre accompagnement</span></div><div><h2>Une approche globale des flux, des instruments et des risques.</h2><p>Nous aidons banques et entreprises à mieux comprendre leurs opérations de commerce international, à optimiser leurs processus financiers et à renforcer la maîtrise des risques associés.</p></div></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-row-number">{service.number}</span><span className="service-row-icon">{service.icon}</span><div className="service-row-copy"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-row-arrow" size={19} /></article>)}</div></div></section>
      <section className="section section-wash"><div className="container capability-grid"><div><span className="eyebrow"><span className="eyebrow-line" />Une vision des opérations</span><h2>Associer expertise technique, exigence commerciale et maîtrise des risques.</h2></div><div className="capability-note"><p>Une banque développe durablement son PNB Trade lorsque ses équipes savent identifier les besoins internationaux de l'entreprise, proposer les solutions Trade Finance adaptées et en maîtriser les risques.</p><span>NK Trade &amp; Banking Experts</span></div></div></section>
      <section className="section"><div className="container section-end-cta"><div><span className="eyebrow"><span className="eyebrow-line" />Pour aller plus loin</span><h2>Renforcer l'expertise de vos équipes.</h2><p>Découvrez nos formations professionnelles sur mesure.</p></div><ActionLink href="/formations">Voir les formations</ActionLink></div></section>
    </>
  );
}

export function TrainingsPage() {
  return (
    <>
      <PageHeader eyebrow="Formations" title="Renforcer les compétences, au plus près des opérations." intro="Des formations professionnelles sur mesure pour les équipes engagées dans le financement et le commerce international." />
      <section className="section page-content-section"><div className="container training-intro-grid"><div className="training-intro-copy"><span className="eyebrow"><span className="eyebrow-line" />Former pour agir</span><h2>Une pédagogie reliée aux enjeux de votre activité.</h2><p>Des parcours adaptés à vos équipes pour approfondir la compréhension des instruments Trade Finance, des risques et de l'accompagnement des entreprises à l'international.</p><ActionLink href="#formation-formulaire" variant="gold">S'inscrire à une formation</ActionLink></div><div className="training-topics-panel"><span className="topics-label">Thématiques proposées</span><ul>{trainingTopics.map((topic) => <li key={topic}><CheckCircle2 size={17} />{topic}</li>)}</ul><p className="topics-note">Programmes ajustés aux besoins des équipes et aux réalités opérationnelles.</p></div></div></section>
      <section className="section section-wash form-section-wrap"><div className="container"><div className="form-intro-row"><div><span className="eyebrow"><span className="eyebrow-line" />Votre demande</span><h2>Parlons de votre prochain parcours.</h2></div><p>Utilisez le formulaire ci-dessous pour manifester votre intérêt ou préciser votre besoin de formation.</p></div><FormFrame id="formation-formulaire" title="Formulaire d'inscription à une formation NK Trade & Banking Experts" embedUrl={trainingEmbed} externalUrl={trainingExternal} /></div></section>
    </>
  );
}

export function InvestmentsPage() {
  return (
    <>
      <PageHeader eyebrow="Investissements & partenariat" title="Des opportunités à explorer, un dialogue à construire." intro="Découvrez notre approche des opportunités et du partenariat, puis échangeons pour comprendre votre intérêt et vos attentes." />
      <section className="section page-content-section"><div className="container investment-grid"><div className="investment-copy"><span className="eyebrow"><span className="eyebrow-line" />Partenariat</span><h2>Une première conversation pour poser les bonnes questions.</h2><p>NK Trade &amp; Banking Experts ouvre un espace d'échange autour d'opportunités et de partenariats. Le formulaire permet de manifester votre intérêt et de préciser les éléments qui pourront nourrir un échange préalable.</p><p>Chaque situation mérite une discussion adaptée. Les informations transmises par le formulaire ne remplacent pas un échange direct sur le contexte, les objectifs et les modalités de partenariat.</p><ActionLink href="#investissement-formulaire" variant="gold">Je souhaite investir</ActionLink></div><div className="investment-side-card"><span className="investment-icon"><BriefcaseBusiness size={23} /></span><span className="side-card-number">PARTENARIAT · ÉCHANGE</span><h3>Un dialogue avant toute décision.</h3><p>Partagez votre intérêt et votre contexte. Un échange préalable est nécessaire.</p><div className="disclaimer"><ShieldCheck size={19} /><span>Les informations présentées ne constituent pas un conseil en investissement. Un échange préalable est nécessaire.</span></div></div></div></section>
      <section className="section section-wash form-section-wrap"><div className="container"><div className="form-intro-row"><div><span className="eyebrow"><span className="eyebrow-line" />Manifester son intérêt</span><h2>Je souhaite échanger sur un partenariat.</h2></div><p>Complétez le formulaire pour amorcer la discussion.</p></div><FormFrame id="investissement-formulaire" title="Formulaire d'intérêt pour les opportunités de partenariat" embedUrl={investmentEmbed} externalUrl={investmentExternal} /></div></section>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Regards sur le Trade Finance." intro="Des perspectives techniques, commerciales et opérationnelles sur les enjeux du commerce international." />
      <section className="section page-content-section blog-listing"><div className="container"><div className="blog-listing-top"><span className="eyebrow"><span className="eyebrow-line" />Articles & analyses</span><span className="blog-count">01 article</span></div><ArticleCard href="/blog/le-trade-finance-2026" image={articleImage} title={articleTitle} date="2026" excerpt="Au cours de ces derniers mois, NK Trade & Banking Experts a accompagné deux grands groupes bancaires marocains dans le renforcement des compétences de leurs équipes au Maroc et dans 8 pays d'Afrique subsaharienne." /></div></section>
    </>
  );
}

export function ArticlePage() {
  return (
    <>
      <section className="article-top"><div className="container"><Link href="/blog" className="back-link"><ArrowDownRight size={16} /> Retour au blog</Link><span className="eyebrow"><span className="eyebrow-line" />Analyse · 2026</span><h1>{articleTitle}</h1><p className="article-deck">Une approche transverse du Trade Finance, au croisement de l'expertise technique, de la performance commerciale et de la maîtrise des risques.</p><div className="article-meta"><span>NK Trade &amp; Banking Experts</span><span className="meta-dot" /><span>2026</span></div></div></section>
      <section className="article-cover"><div className="container"><img src={articleImage} alt="Documents préparés pour analyser une opération de Trade Finance" /></div></section>
      <article className="section article-body-section"><div className="container article-body-layout"><aside className="article-sidebar"><span className="article-sidebar-label">Dans cet article</span><span>Expertise technique</span><span>Performance commerciale</span><span>Maîtrise des risques</span><div className="article-sidebar-rule" /></aside><div className="article-body"><span className="article-body-lead">Le Trade Finance est à la fois une expertise technique, un levier de performance commerciale et un domaine où la maîtrise des risques est déterminante.</span>{articleParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="article-signature"><span className="eyebrow"><span className="eyebrow-line" />NK Trade &amp; Banking Experts</span><p>Cette approche commerciale, technique et opérationnelle est au service des banques et des entreprises.</p></div><ActionLink href="/contact" variant="text">Échanger avec le cabinet</ActionLink></div></div></article>
      <section className="closing-strip"><div className="container closing-strip-inner"><div><span className="eyebrow"><span className="eyebrow-line" />Poursuivre la discussion</span><h2>Maîtriser vos opérations internationales avec confiance.</h2></div><ActionLink href="/contact">Nous contacter</ActionLink></div></section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de vos enjeux internationaux." intro="Vous êtes une banque ou une entreprise importatrice/exportatrice ? Échangeons autour de vos opérations, de vos équipes et de vos besoins en Trade Finance." />
      <section className="section page-content-section"><div className="container contact-grid"><div className="contact-main"><span className="eyebrow"><span className="eyebrow-line" />Entrons en dialogue</span><h2>Un besoin de conseil, de formation ou de partenariat ?</h2><p>Choisissez le parcours qui correspond à votre démarche. Les formulaires dédiés permettent de partager votre intérêt avant un échange préalable.</p><div className="contact-actions"><ActionLink href="/expertise-conseil">Conseil &amp; expertise</ActionLink><ActionLink href="/formations" variant="outline">Formations</ActionLink><ActionLink href="/investissements" variant="text">Investissements &amp; partenariat</ActionLink></div></div><div className="contact-aside"><span className="contact-aside-mark"><Globe2 size={25} /></span><span className="side-card-number">PERFORMANCE INTERNATIONALE</span><h3>Une expertise construite au contact des opérations.</h3><p>Accompagnement de groupes bancaires marocains au Maroc et dans 8 pays d'Afrique subsaharienne.</p><div className="contact-facts"><span><Landmark size={16} /> Banques</span><span><BriefcaseBusiness size={16} /> Entreprises importatrices/exportatrices</span></div></div></div></section>
      <section className="section section-wash"><div className="container contact-signature"><span className="eyebrow"><span className="eyebrow-line" />Notre engagement</span><p>NK Trade &amp; Banking Experts, un partenaire de confiance au service de votre performance internationale.</p><ArrowRight size={22} /></div></section>
    </>
  );
}
