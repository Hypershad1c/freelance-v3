import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Download,
  FileCheck2,
  Globe2,
  Landmark,
  Linkedin,
  Mail,
  Network,
  Phone,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "wouter";
import {
  ActionLink,
  ArticleCard,
  FormFrame,
  PageHeader,
  SectionHeading,
  useSiteLanguage,
} from "../components/site";

const heroImage = "/images/nk-trade-hero.png";
const articleImage = "/images/trade-finance-editorial.png";
const logoImage = "/images/nk-trade-banking-logo.png";
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

const trainingCourses = [
  {
    icon: Landmark,
    title: "Fondamentaux du Trade Finance",
    audience: "Équipes bancaires Trade Finance, équipes Corporate et entreprises importatrices/exportatrices.",
    objective: "Repérer les principaux instruments, les acteurs et les risques à chaque étape d'une opération internationale.",
  },
  {
    icon: FileCheck2,
    title: "Crédit documentaire : de l'émission à la présentation",
    audience: "Équipes Commerce international, opérations, commerciaux, trésorerie et entreprises impliquées dans des crédits documentaires.",
    objective: "Lire les clauses clés, organiser la liste documentaire et anticiper échéances, présentations et écarts.",
  },
  {
    icon: Globe2,
    title: "Incoterms® 2020 et opérations internationales",
    audience: "Équipes achats, ventes, logistique, supply chain et commerce international.",
    objective: "Relier la règle, l'édition et le lieu nommé aux modes de transport, coûts, tâches et transfert des risques.",
  },
  {
    icon: Network,
    title: "Correspondent Banking, garanties et SBLC",
    audience: "Banques, équipes paiements, Trade Finance, risques et relations correspondants.",
    objective: "Distinguer les mécanismes et clarifier les rôles, engagements et circuits opérationnels.",
  },
];

const glossary = [
  { term: "Crédit documentaire / lettre de crédit", definition: "Engagement documentaire indépendant émis par une banque en faveur d'un bénéficiaire, soumis aux conditions du crédit et aux règles qui y sont incorporées." },
  { term: "Demandeur", definition: "Partie à la demande de laquelle le crédit est émis, le plus souvent l'acheteur." },
  { term: "Bénéficiaire", definition: "Partie en faveur de laquelle le crédit est émis, souvent le vendeur." },
  { term: "Banque émettrice", definition: "Banque qui émet le crédit à la demande du demandeur ou pour son propre compte." },
  { term: "Banque notificatrice", definition: "Banque qui notifie le crédit au bénéficiaire à la demande de la banque émettrice." },
  { term: "Banque confirmante", definition: "Banque qui ajoute son propre engagement à celui de la banque émettrice, selon la confirmation accordée." },
  { term: "Présentation conforme", definition: "Présentation répondant aux termes du crédit, aux règles applicables incorporées et aux pratiques bancaires internationales pertinentes." },
  { term: "UCP 600", definition: "Règles ICC relatives aux crédits documentaires (révision 2007), applicables lorsqu'elles sont incorporées au crédit." },
  { term: "Incoterms® 2020", definition: "Onze règles ICC qui répartissent certaines tâches, certains coûts et risques de livraison entre vendeur et acheteur; elles ne fixent pas à elles seules le paiement ni le transfert de propriété." },
  { term: "Remise documentaire", definition: "Les banques échangent des documents selon des instructions de remise; contrairement au crédit documentaire, elles ne garantissent généralement pas le paiement." },
];

const contactOptions: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Mail, label: "Email professionnel" },
  { icon: Phone, label: "Téléphone" },
  { icon: Linkedin, label: "Page LinkedIn de l'entreprise" },
  { icon: CalendarDays, label: "Prise de rendez-vous" },
];

function CaseStudySection() {
  const { t } = useSiteLanguage();
  return (
    <section className="section section-wash case-study-section">
      <div className="container case-study-layout">
        <div className="case-study-intro">
          <span className="eyebrow"><span className="eyebrow-line" />{t("Mission récente")}</span>
          <span className="case-study-label">{t("Expérience anonymisée")}</span>
          <h2>{t("Renforcement des compétences Trade Finance à l'échelle régionale.")}</h2>
          <p>{t("Accompagnement des équipes de deux grands groupes bancaires marocains au Maroc et dans 8 pays d'Afrique subsaharienne, sur les métiers Trade Finance et l'accompagnement des entreprises à l'international.")}</p>
        </div>
        <div className="case-study-detail">
          <span className="topics-label">{t("Périmètre des interventions")}</span>
          <ul>
            <li><CheckCircle2 size={17} />{t("Fondamentaux et risques Trade Finance")}</li>
            <li><CheckCircle2 size={17} />{t("Réglementation marocaine des changes 2026")}</li>
            <li><CheckCircle2 size={17} />{t("Instruments et pratiques opérationnelles")}</li>
          </ul>
          <p>{t("Équipes transverses : Trade Finance, Corporate, Risques, Audit, Contrôle permanent et Conformité LCB/FT.")}</p>
        </div>
      </div>
    </section>
  );
}

export function ContactOptions() {
  const { t } = useSiteLanguage();
  return (
    <div className="contact-options" aria-label={t("Coordonnées à compléter quand vous les fournirez.")}>
      {contactOptions.map(({ icon: Icon, label }) => (
        <div className="contact-option" key={label}>
          <span className="contact-option-icon"><Icon size={18} aria-hidden="true" /></span>
          <span className="contact-option-copy">
            <strong>{t(label)}</strong>
            <span>{t("À fournir")}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" />{t("Conseil · Formation · Banque internationale")}</span>
            <h1>{t("Maîtriser les échanges.")} <em>{t("Accélérer l'international.")}</em></h1>
            <p className="hero-lede">{t("Nous accompagnons les banques et les entreprises importatrices et exportatrices dans la maîtrise de leurs opérations de commerce international et la montée en compétence de leurs équipes.")}</p>
            <div className="hero-actions">
              <ActionLink href="/formations">{t("Voir les formations")}</ActionLink>
              <ActionLink href="/investissements" variant="outline">{t("Investir avec nous")}</ActionLink>
            </div>
            <div className="hero-assurance"><span className="assurance-dot" />{t("Plus de 35 ans d'expertise bancaire et internationale")}</div>
          </div>
          <div className="hero-visual-wrap">
            <div className="hero-visual">
              <img src={heroImage} alt={t("Architecture lumineuse ouverte sur les échanges internationaux")} />
              <div className="hero-image-caption">
                <span className="caption-label">{t("Une expertise qui relie")}</span>
                <strong>{t("La banque, l'entreprise et le monde.")}</strong>
              </div>
            </div>
            <div className="hero-image-index"><span>01</span><span className="index-line" /><span>{t("Trade Finance")}</span></div>
            <span className="hero-decor" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label={t("Chiffres clés")}>
        <div className="container stats-card">
          <div className="stat-item"><span className="stat-number">35<span>+</span></span><span className="stat-label">{t("ans d'expertise")}</span></div>
          <div className="stat-item"><span className="stat-number">2</span><span className="stat-label">{t("grands groupes bancaires accompagnés")}</span></div>
          <div className="stat-item"><span className="stat-number">8</span><span className="stat-label">{t("pays d'Afrique subsaharienne")}</span></div>
          <div className="stats-note"><span className="stats-note-mark">NK</span><span>{t("Une présence au service des métiers du Trade Finance")}</span></div>
        </div>
      </section>

      <CaseStudySection />

      <section className="section section-about">
        <div className="container about-grid">
          <div className="about-aside">
            <span className="eyebrow"><span className="eyebrow-line" />{t("Notre mission")}</span>
            <div className="vertical-note">{t("L'EXPERTISE AU SERVICE DU MOUVEMENT")}</div>
          </div>
          <div className="about-main">
            <h2>{t("Rendre le commerce international")} <em>{t("plus lisible, plus sûr, plus performant.")}</em></h2>
            <p>{t("NK Trade & Banking Experts est un cabinet de conseil et de formation spécialisé en Trade Finance et Banque Internationale. Forts de plus de 35 ans d'expertise bancaire et internationale, nous accompagnons les banques et les entreprises importatrices/exportatrices.")}</p>
            <p>{t("Notre mission : faciliter la compréhension et la maîtrise des enjeux complexes du Trade Finance, afin de sécuriser les transactions, optimiser les coûts et développer les activités à l'international.")}</p>
            <ActionLink href="/a-propos" variant="text">{t("Découvrir le cabinet")}</ActionLink>
          </div>
        </div>
      </section>

      <section className="section section-expertise">
        <div className="container">
          <SectionHeading eyebrow={t("Nos expertises")} title={t("La maîtrise technique, au plus près de vos enjeux.")} body={t("Du cadrage stratégique à l'exécution opérationnelle, nous aidons vos équipes à mieux maîtriser les instruments et les risques du commerce international.")} />
          <div className="expertise-preview-grid">
            <article className="expertise-preview"><span className="icon-disc"><Landmark size={21} /></span><span className="card-number">{t("01 / CONSEIL")}</span><h3>{t("Trade Finance stratégique et opérationnel")}</h3><p>{t("Des repères concrets pour structurer les opérations et faire évoluer les pratiques.")}</p><Link href="/expertise-conseil" className="arrow-only" aria-label={t("Découvrir le conseil")}><ArrowUpRight size={19} /></Link></article>
            <article className="expertise-preview"><span className="icon-disc"><BookOpenCheck size={21} /></span><span className="card-number">{t("02 / FORMATION")}</span><h3>{t("La compétence, au rythme de vos équipes")}</h3><p>{t("Des formations professionnelles sur mesure, ancrées dans la réalité des opérations.")}</p><Link href="/formations" className="arrow-only" aria-label={t("Découvrir les formations")}><ArrowUpRight size={19} /></Link></article>
            <article className="expertise-preview"><span className="icon-disc"><ShieldCheck size={21} /></span><span className="card-number">{t("03 / MAÎTRISE DES RISQUES")}</span><h3>{t("Sécuriser les transactions internationales")}</h3><p>{t("Conformité, prévention et protection du risque dans un environnement exigeant.")}</p><Link href="/expertise-conseil" className="arrow-only" aria-label={t("Découvrir l'expertise risque")}><ArrowUpRight size={19} /></Link></article>
          </div>
          <div className="section-tail"><span>{t("Une approche transversale des métiers du commerce international")}</span><ActionLink href="/expertise-conseil" variant="text">{t("Voir l'expertise & conseil")}</ActionLink></div>
        </div>
      </section>

      <section className="section section-training-callout">
        <div className="container training-callout">
          <div className="callout-icon"><BookOpenCheck size={25} /></div>
          <div className="callout-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t("Développer les compétences")}</span><h2>{t("Des savoirs techniques, transformés en réflexes opérationnels.")}</h2><p>{t("Des parcours de formation adaptés à vos instruments, vos équipes et vos opérations internationales.")}</p></div>
          <ActionLink href="/formations" variant="gold">{t("Explorer les formations")}</ActionLink>
          <span className="callout-orbit" aria-hidden="true" />
        </div>
      </section>

      <section className="section section-article-preview">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow={t("Regards d'experts")} title={t("L'actualité du Trade Finance.")} body={t("Une lecture technique, commerciale et opérationnelle des enjeux internationaux.")} /><ActionLink href="/blog" variant="outline">{t("Tous les articles")}</ActionLink></div>
          <div className="featured-article-grid"><ArticleCard href="/blog/le-trade-finance-2026" image={articleImage} title={t(articleTitle)} date="2026" excerpt={t("Accompagner les équipes bancaires dans le renforcement des compétences Trade Finance au Maroc et dans 8 pays d'Afrique subsaharienne.")} /><div className="article-quote"><span className="quote-mark">“</span><blockquote>{t("Une banque développe durablement son PNB Trade lorsque ses équipes savent identifier les besoins internationaux de l'entreprise, proposer les solutions adaptées et en maîtriser les risques.")}</blockquote><span className="quote-attribution">{t("Notre conviction · NK Trade & Banking Experts")}</span></div></div>
        </div>
      </section>

      <section className="closing-strip"><div className="container closing-strip-inner"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Construisons la suite")}</span><h2>{t("Un partenaire de confiance au service de votre performance internationale.")}</h2></div><ActionLink href="/contact">{t("Parlons de vos enjeux")}</ActionLink></div></section>
    </>
  );
}

export function AboutPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("À propos")} title={t("Une expertise bancaire tournée vers l'international.")} intro={t("Plus de 35 ans d'expérience au croisement de la banque, du commerce international et de l'accompagnement des équipes.")} />
      <section className="section page-content-section">
        <div className="container narrative-grid">
          <div className="narrative-aside"><span className="eyebrow"><span className="eyebrow-line" />{t("Le cabinet")}</span><span className="narrative-aside-number">35<span>+</span></span><span className="narrative-aside-label">{t("ans d'expertise bancaire et internationale")}</span></div>
          <div className="narrative-copy"><h2>{t("Faire le lien entre la technicité bancaire et les réalités du commerce.")}</h2><p>{t("NK Trade & Banking Experts est un cabinet de conseil et de formation spécialisé en Trade Finance et Banque Internationale. Forts de plus de 35 ans d'expertise bancaire et internationale, nous accompagnons les banques et les entreprises importatrices/exportatrices dans la maîtrise de leurs opérations de commerce international, l'optimisation de leurs processus financiers et la montée en compétence de leurs équipes.")}</p><p>{t("Nos interventions ont accompagné deux grands groupes bancaires marocains dans le renforcement des compétences de leurs équipes au Maroc et dans 8 pays d'Afrique subsaharienne.")}</p><div className="quote-panel"><span className="quote-panel-label">{t("Notre mission")}</span><p>{t("Faciliter la compréhension et la maîtrise des enjeux complexes du Trade Finance pour permettre à nos clients de sécuriser leurs transactions, optimiser leurs coûts et développer leurs activités à l'international.")}</p></div></div>
        </div>
      </section>
      <section className="section brand-identity-section">
        <div className="container brand-identity">
          <div className="brand-identity-image"><img src={logoImage} alt={t("Logo NK Trade & Banking Experts")} loading="lazy" /></div>
          <div className="brand-identity-copy"><span className="eyebrow"><span className="eyebrow-line" />{t("Identité de marque")}</span><h2>{t("Une marque tournée vers le mouvement des échanges.")}</h2><p>{t("Le logo officiel NK Trade & Banking Experts relie son identité aux métiers du commerce international et de la banque.")}</p></div>
        </div>
      </section>
      <section className="section section-wash"><div className="container about-principles"><SectionHeading eyebrow={t("Notre approche")} title={t("Une perspective transverse, concrète et engagée.")} /><div className="principles-list"><div><span>01</span><div><h3>{t("Comprendre les enjeux")}</h3><p>{t("Relier les besoins des entreprises aux solutions de financement et d'accompagnement international.")}</p></div></div><div><span>02</span><div><h3>{t("Outiller les équipes")}</h3><p>{t("Faire progresser les compétences techniques et commerciales autour des opérations Trade Finance.")}</p></div></div><div><span>03</span><div><h3>{t("Maîtriser les risques")}</h3><p>{t("Intégrer conformité, contrôle et prévention du risque dans les pratiques quotidiennes.")}</p></div></div></div></div></section>
      <section className="section"><div className="container signature-band"><span className="eyebrow"><span className="eyebrow-line" />{t("Notre signature")}</span><p>{t("Un partenaire de confiance au service de votre performance internationale.")}</p><ActionLink href="/contact" variant="text">{t("Échanger avec le cabinet")}</ActionLink></div></section>
    </>
  );
}

export function ExpertisePage() {
  const { t } = useSiteLanguage();
  const services = [
    { icon: <TrendingUp size={22} />, number: "01", title: "Conseil stratégique et opérationnel", text: "Un accompagnement en Trade Finance pour relier les choix stratégiques à la réalité des opérations et des équipes." },
    { icon: <BriefcaseBusiness size={22} />, number: "02", title: "Financement import / export", text: "Structuration et gestion des opérations de financement liées aux échanges internationaux." },
    { icon: <ShieldCheck size={22} />, number: "03", title: "Conformité et protection du risque", text: "Accompagnement à la mise en place de dispositifs de conformité et de protection du risque international." },
    { icon: <Network size={22} />, number: "04", title: "Processus et coordination des métiers", text: "Optimisation des processus financiers et approche transverse associant les fonctions concernées." },
  ];
  return (
    <>
      <PageHeader eyebrow={t("Expertise & conseil")} title={t("Sécuriser les opérations. Éclairer les décisions.")} intro={t("Une expertise stratégique et opérationnelle en Trade Finance pour maîtriser les opérations de financement import/export et le risque international.")} />
      <section className="section page-content-section"><div className="container"><div className="intro-columns"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Notre accompagnement")}</span></div><div><h2>{t("Une approche globale des flux, des instruments et des risques.")}</h2><p>{t("Nous aidons banques et entreprises à mieux comprendre leurs opérations de commerce international, à optimiser leurs processus financiers et à renforcer la maîtrise des risques associés.")}</p></div></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-row-number">{service.number}</span><span className="service-row-icon">{service.icon}</span><div className="service-row-copy"><h3>{t(service.title)}</h3><p>{t(service.text)}</p></div><ArrowUpRight className="service-row-arrow" size={19} /></article>)}</div></div></section>
      <section className="section section-wash"><div className="container capability-grid"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Une vision des opérations")}</span><h2>{t("Associer expertise technique, exigence commerciale et maîtrise des risques.")}</h2></div><div className="capability-note"><p>{t("Une banque développe durablement son PNB Trade lorsque ses équipes savent identifier les besoins internationaux de l'entreprise, proposer les solutions Trade Finance adaptées et en maîtriser les risques.")}</p><span>NK Trade &amp; Banking Experts</span></div></div></section>
      <section className="section"><div className="container section-end-cta"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Pour aller plus loin")}</span><h2>{t("Renforcer l'expertise de vos équipes.")}</h2><p>{t("Découvrez nos formations professionnelles sur mesure.")}</p></div><ActionLink href="/formations">{t("Voir les formations")}</ActionLink></div></section>
    </>
  );
}

export function TrainingsPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("Formations")} title={t("Renforcer les compétences, au plus près des opérations.")} intro={t("Des formations professionnelles sur mesure pour les équipes engagées dans le financement et le commerce international.")} />
      <section className="section page-content-section"><div className="container training-intro-grid"><div className="training-intro-copy"><span className="eyebrow"><span className="eyebrow-line" />{t("Former pour agir")}</span><h2>{t("Une pédagogie reliée aux enjeux de votre activité.")}</h2><p>{t("Des parcours adaptés à vos équipes pour approfondir la compréhension des instruments Trade Finance, des risques et de l'accompagnement des entreprises à l'international.")}</p><ActionLink href="#formation-formulaire" variant="gold">{t("S'inscrire à une formation")}</ActionLink></div><div className="training-topics-panel"><span className="topics-label">{t("Thématiques proposées")}</span><ul>{trainingTopics.map((topic) => <li key={topic}><CheckCircle2 size={17} />{t(topic)}</li>)}</ul><p className="topics-note">{t("Programmes ajustés aux besoins des équipes et aux réalités opérationnelles.")}</p></div></div></section>
      <section className="section section-wash training-catalog-section">
        <div className="container">
          <SectionHeading eyebrow={t("Catalogue de formations")} title={t("Des parcours modulaires, conçus autour de vos opérations.")} />
          <div className="training-course-grid">
            {trainingCourses.map(({ icon: Icon, title, audience, objective }) => (
              <article className="training-course-card" key={title}>
                <span className="training-course-icon"><Icon size={21} /></span>
                <h3>{t(title)}</h3>
                <div><span className="topics-label">{t("Public cible")}</span><p>{t(audience)}</p></div>
                <div><span className="topics-label">{t("Objectifs pédagogiques")}</span><p>{t(objective)}</p></div>
                <div className="training-course-meta"><span>{t("Durée : à convenir")}</span><span>{t("Prochaine session : à confirmer")}</span></div>
              </article>
            ))}
          </div>
          <p className="catalog-note">{t("Durées et prochaines dates définies avec l'équipe selon votre besoin.")}</p>
        </div>
      </section>
      <section className="section section-wash form-section-wrap"><div className="container"><div className="form-intro-row"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Votre demande")}</span><h2>{t("Parlons de votre prochain parcours.")}</h2></div><p>{t("Utilisez le formulaire ci-dessous pour manifester votre intérêt ou préciser votre besoin de formation.")}</p></div><FormFrame id="formation-formulaire" title={t("Formulaire d'inscription à une formation NK Trade & Banking Experts")} embedUrl={trainingEmbed} externalUrl={trainingExternal} /></div></section>
    </>
  );
}

export function InvestmentsPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("Investissements & partenariat")} title={t("Des opportunités à explorer, un dialogue à construire.")} intro={t("Découvrez notre approche des opportunités et du partenariat, puis échangeons pour comprendre votre intérêt et vos attentes.")} />
      <section className="section page-content-section"><div className="container investment-grid"><div className="investment-copy"><span className="eyebrow"><span className="eyebrow-line" />{t("Partenariat")}</span><h2>{t("Une première conversation pour poser les bonnes questions.")}</h2><p>{t("NK Trade & Banking Experts ouvre un espace d'échange autour d'opportunités et de partenariats. Le formulaire permet de manifester votre intérêt et de préciser les éléments qui pourront nourrir un échange préalable.")}</p><p>{t("Chaque situation mérite une discussion adaptée. Les informations transmises par le formulaire ne remplacent pas un échange direct sur le contexte, les objectifs et les modalités de partenariat.")}</p><ActionLink href="#investissement-formulaire" variant="gold">{t("Je souhaite investir")}</ActionLink></div><div className="investment-side-card"><span className="investment-icon"><BriefcaseBusiness size={23} /></span><span className="side-card-number">{t("PARTENARIAT · ÉCHANGE")}</span><h3>{t("Un dialogue avant toute décision.")}</h3><p>{t("Partagez votre intérêt et votre contexte. Un échange préalable est nécessaire.")}</p><div className="disclaimer"><ShieldCheck size={19} /><span>{t("Les informations présentées ne constituent pas un conseil en investissement. Un échange préalable est nécessaire.")}</span></div></div></div></section>
      <section className="section section-wash form-section-wrap"><div className="container"><div className="form-intro-row"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Manifester son intérêt")}</span><h2>{t("Je souhaite échanger sur un partenariat.")}</h2></div><p>{t("Complétez le formulaire pour amorcer la discussion.")}</p></div><FormFrame id="investissement-formulaire" title={t("Formulaire d'intérêt pour les opportunités de partenariat")} embedUrl={investmentEmbed} externalUrl={investmentExternal} /></div></section>
    </>
  );
}

export function BlogPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("Blog")} title={t("Regards sur le Trade Finance.")} intro={t("Des perspectives techniques, commerciales et opérationnelles sur les enjeux du commerce international.")} />
      <section className="section page-content-section blog-listing"><div className="container"><div className="blog-listing-top"><span className="eyebrow"><span className="eyebrow-line" />{t("Articles & analyses")}</span><span className="blog-count">{t("01 article")}</span></div><ArticleCard href="/blog/le-trade-finance-2026" image={articleImage} title={t(articleTitle)} date="2026" excerpt={t("Au cours de ces derniers mois, NK Trade & Banking Experts a accompagné deux grands groupes bancaires marocains dans le renforcement des compétences de leurs équipes au Maroc et dans 8 pays d'Afrique subsaharienne.")} /></div></section>
    </>
  );
}

export function ArticlePage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <section className="article-top"><div className="container"><Link href="/blog" className="back-link"><ArrowDownRight size={16} /> {t("Retour au blog")}</Link><span className="eyebrow"><span className="eyebrow-line" />{t("Analyse · 2026")}</span><h1>{t(articleTitle)}</h1><p className="article-deck">{t("Une approche transverse du Trade Finance, au croisement de l'expertise technique, de la performance commerciale et de la maîtrise des risques.")}</p><div className="article-meta"><span>NK Trade &amp; Banking Experts</span><span className="meta-dot" /><span>2026</span></div></div></section>
      <section className="article-cover"><div className="container"><img src={articleImage} alt={t("Dossier Trade Finance")} /></div></section>
      <article className="section article-body-section"><div className="container article-body-layout"><aside className="article-sidebar"><span className="article-sidebar-label">{t("Dans cet article")}</span><span>{t("Expertise technique")}</span><span>{t("Performance commerciale")}</span><span>{t("Maîtrise des risques")}</span><div className="article-sidebar-rule" /></aside><div className="article-body"><span className="article-body-lead">{t("Le Trade Finance est à la fois une expertise technique, un levier de performance commerciale et un domaine où la maîtrise des risques est déterminante.")}</span>{articleParagraphs.map((paragraph) => <p key={paragraph}>{t(paragraph)}</p>)}<div className="article-signature"><span className="eyebrow"><span className="eyebrow-line" />NK Trade &amp; Banking Experts</span><p>{t("Cette approche commerciale, technique et opérationnelle est au service des banques et des entreprises.")}</p></div><ActionLink href="/contact" variant="text">{t("Échanger avec le cabinet")}</ActionLink></div></div></article>
      <section className="closing-strip"><div className="container closing-strip-inner"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Poursuivre la discussion")}</span><h2>{t("Maîtriser vos opérations internationales avec confiance.")}</h2></div><ActionLink href="/contact">{t("Nous contacter")}</ActionLink></div></section>
    </>
  );
}

export function ResourcesPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("Ressources")} title={t("Ressources pratiques pour éclairer les opérations internationales.")} intro={t("Repères pédagogiques, listes de vérification et sources de référence pour les équipes Trade Finance.")} />
      <section className="section resource-overview-section">
        <div className="container">
          <div className="resource-download-card">
            <div className="resource-download-icon"><FileCheck2 size={27} /></div>
            <div className="resource-download-copy"><span className="eyebrow"><span className="eyebrow-line" />{t("Checklist téléchargeable")}</span><h2>{t("Préparer ou relire un crédit documentaire")}</h2><p>{t("Ressource éducative, non exhaustive. Vérifiez toujours les textes et conditions contractuels applicables à votre opération.")}</p></div>
            <a className="action-link action-gold" href="/resources/trade-finance-checklist.pdf" download>{t("Télécharger le PDF bilingue")} <Download size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <section className="section section-wash glossary-section">
        <div className="container">
          <SectionHeading eyebrow={t("Glossaire Trade Finance")} title={t("Des notions clés, en français et en anglais.")} />
          <div className="glossary-grid">
            {glossary.map(({ term, definition }) => (
              <article className="glossary-card" key={term}>
                <span className="glossary-term-fr">{term}</span>
                <h3>{t(term)}</h3>
                <p>{t(definition)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section practical-guides-section">
        <div className="container">
          <SectionHeading eyebrow={t("Guides pratiques")} title={t("Des repères utiles, les sources à l'appui.")} body={t("Ressource éducative, non exhaustive. Vérifiez toujours les textes et conditions contractuels applicables à votre opération.")} />
          <div className="guide-grid">
            <article className="guide-card"><span className="guide-card-icon"><Globe2 size={21} /></span><h3>{t("Guide pratique des Incoterms®")}</h3><p>{t("Indiquez la règle, la version et le lieu nommé; vérifiez les tâches, coûts et risques au regard du mode de transport. Les Incoterms® ne déterminent pas la méthode de paiement ni la propriété des marchandises.")}</p><a href="https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/" target="_blank" rel="noreferrer">{t("Incoterms® 2020 — Chambre de commerce internationale")} <ArrowUpRight size={15} /></a><a href="https://www.trade.gov/know-your-incoterms" target="_blank" rel="noreferrer">{t("Incoterms — International Trade Administration")} <ArrowUpRight size={15} /></a></article>
            <article className="guide-card"><span className="guide-card-icon"><FileCheck2 size={21} /></span><h3>{t("Guide de lecture d'un crédit documentaire")}</h3><p>{t("Identifiez les parties, règles incorporées, clauses, documents, dates et conditions de présentation; faites vérifier le crédit et les exigences par votre banque et les équipes compétentes.")}</p><a href="https://academy.iccwbo.org/international-trade/article/documentary-credits-rules-guidelines-terminology/" target="_blank" rel="noreferrer">{t("Crédits documentaires — ICC Academy")} <ArrowUpRight size={15} /></a><a href="https://www.trade.gov/documentary-collections" target="_blank" rel="noreferrer">{t("Remises documentaires — International Trade Administration")} <ArrowUpRight size={15} /></a></article>
          </div>
        </div>
      </section>
      <section className="section section-wash resource-sources-section">
        <div className="container resource-source-note"><div><span className="eyebrow"><span className="eyebrow-line" />{t("Sources de référence")}</span><h2>{t("Consulter ICC / ICC Academy")}</h2></div><p>{t("Ressource éducative, non exhaustive. Vérifiez toujours les textes et conditions contractuels applicables à votre opération.")}</p></div>
      </section>
    </>
  );
}

export function ContactPage() {
  const { t } = useSiteLanguage();
  return (
    <>
      <PageHeader eyebrow={t("Contact")} title={t("Parlons de vos enjeux internationaux.")} intro={t("Vous êtes une banque ou une entreprise importatrice/exportatrice ? Échangeons autour de vos opérations, de vos équipes et de vos besoins en Trade Finance.")} />
      <section className="section page-content-section"><div className="container contact-grid"><div className="contact-main"><span className="eyebrow"><span className="eyebrow-line" />{t("Entrons en dialogue")}</span><h2>{t("Un besoin de conseil, de formation ou de partenariat ?")}</h2><p>{t("Choisissez le parcours qui correspond à votre démarche. Les formulaires dédiés permettent de partager votre intérêt avant un échange préalable.")}</p><div className="contact-actions"><ActionLink href="/expertise-conseil">{t("Conseil & expertise")}</ActionLink><ActionLink href="/formations" variant="outline">{t("Formations")}</ActionLink><ActionLink href="/investissements" variant="text">{t("Investissements & partenariat")}</ActionLink></div><div className="contact-details-intro"><h3>{t("Coordonnées à compléter quand vous les fournirez.")}</h3><p>{t("Email, téléphone, LinkedIn d'entreprise et lien de rendez-vous seront ajoutés lorsque vous les transmettrez.")}</p><ContactOptions /></div></div><div className="contact-aside"><span className="contact-aside-mark"><Globe2 size={25} /></span><span className="side-card-number">{t("PERFORMANCE INTERNATIONALE")}</span><h3>{t("Une expertise construite au contact des opérations.")}</h3><p>{t("Accompagnement de groupes bancaires marocains au Maroc et dans 8 pays d'Afrique subsaharienne.")}</p><div className="contact-facts"><span><Landmark size={16} /> {t("Banques")}</span><span><BriefcaseBusiness size={16} /> {t("Entreprises importatrices/exportatrices")}</span></div></div></div></section>
      <section className="section section-wash"><div className="container contact-signature"><span className="eyebrow"><span className="eyebrow-line" />{t("Notre engagement")}</span><p>{t("Un partenaire de confiance au service de votre performance internationale.")}</p><ArrowRight size={22} /></div></section>
    </>
  );
}
