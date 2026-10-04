import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { pageMetadata, translate, type Language } from "../lib/translations";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertise", href: "/expertise-conseil" },
  { label: "Formations", href: "/formations" },
  { label: "Investissements", href: "/investissements" },
  { label: "Ressources", href: "/ressources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (source: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "nk-trade-site-language";

function readInitialLanguage(): Language {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function useSiteLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useSiteLanguage must be used inside SiteLayout");
  return value;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);
  const [location] = useLocation();
  const t = useCallback((source: string) => translate(language, source), [language]);
  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // The language switch still works for this session when storage is unavailable.
    }
  }, []);
  const contextValue = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  useEffect(() => {
    document.documentElement.lang = language;
    const metadata = pageMetadata[language][location];
    if (metadata) {
      document.title = metadata.title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    }
  }, [language, location]);

  return (
    <LanguageContext.Provider value={contextValue}>
      <SiteHeader />
      <main id="contenu">{children}</main>
      <SiteFooter />
    </LanguageContext.Provider>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  const { t } = useSiteLanguage();
  return (
    <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label={t("NK Trade & Banking Experts — accueil")}>
      <img className="brand-logo-img" src="/images/nk-trade-banking-logo.png" alt={t("Logo NK Trade & Banking Experts")} width="54" height="54" />
      <span className="brand-copy">
        <span className="brand-name">NK Trade <i>&amp;</i> Banking</span>
        <span className="brand-subtitle">Experts · Trade Finance</span>
      </span>
    </Link>
  );
}

function LanguageToggle() {
  const { language, setLanguage } = useSiteLanguage();
  const nextLanguage = language === "fr" ? "en" : "fr";
  return (
    <button
      type="button"
      className="language-toggle"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "fr" ? "Passer en anglais" : "Switch to French"}
      aria-pressed={language === "en"}
      title={language === "fr" ? "English" : "Français"}
    >
      <span className={language === "fr" ? "language-current" : ""}>FR</span>
      <span className="language-separator" aria-hidden="true">/</span>
      <span className={language === "en" ? "language-current" : ""}>EN</span>
    </button>
  );
}

function SiteHeader() {
  const { t } = useSiteLanguage();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>{t("Conseil · Formation · Trade Finance")}</span>
          <span className="topline-note">{t("Un partenaire de confiance pour vos opérations internationales")}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t("Fermer le menu") : t("Ouvrir le menu")}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="main-navigation" className={`main-navigation${menuOpen ? " is-open" : ""}`} aria-label={t("Navigation principale")}>
            {navigation.map((item) => {
              const active = location === item.href || (item.href !== "/" && location.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              );
            })}
            <LanguageToggle />
            <Link className="header-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              {t("Échanger")} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function SiteFooter() {
  const { t } = useSiteLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Brand light />
          <p>{t("Conseil et formation en Trade Finance et banque internationale, au service de votre performance internationale.")}</p>
        </div>
        <div className="footer-nav-block">
          <span className="footer-label">{t("Explorer")}</span>
          <div className="footer-links">
            <Link href="/expertise-conseil">{t("Expertise & conseil")}</Link>
            <Link href="/formations">{t("Formations")}</Link>
            <Link href="/investissements">{t("Investissements")}</Link>
            <Link href="/ressources">{t("Ressources")}</Link>
            <Link href="/blog">{t("Blog")}</Link>
            <Link href="/contact">{t("Contact")}</Link>
          </div>
        </div>
        <div className="footer-cta-block">
          <span className="footer-label">{t("Parlons de vos enjeux")}</span>
          <p>{t("Banque, entreprise importatrice ou exportatrice : explorons la réponse adaptée à votre activité.")}</p>
          <Link className="footer-link-cta" href="/contact">{t("Prendre contact")} <ArrowRight size={15} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NK Trade &amp; Banking Experts</span>
        <span>{t("Un partenaire de confiance au service de votre performance internationale.")}</span>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-heading">
      <div className="container page-heading-inner">
        <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "text";
  className?: string;
}) {
  const classes = `action-link action-${variant} ${className}`.trim();
  if (href.startsWith("#")) {
    return (
      <a className={classes} href={href}>
        <span>{children}</span><ArrowRight size={16} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      <span>{children}</span><ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}

export function FormFrame({
  id,
  title,
  embedUrl,
  externalUrl,
}: {
  id: string;
  title: string;
  embedUrl: string;
  externalUrl: string;
}) {
  const { t } = useSiteLanguage();
  return (
    <div className="form-section" id={id}>
      <div className="form-shell">
        <iframe
          className="google-form"
          src={embedUrl}
          title={title}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <a className="external-form-link" href={externalUrl} target="_blank" rel="noreferrer">
        {t("Ouvrir le formulaire dans un nouvel onglet")} <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

export function ArticleCard({
  href,
  image,
  title,
  date,
  excerpt,
}: {
  href: string;
  image: string;
  title: string;
  date: string;
  excerpt: string;
}) {
  const { t } = useSiteLanguage();
  return (
    <article className="article-card">
      <Link href={href} className="article-card-image" aria-label={`${t("Lire l'article")} : ${title}`}>
        <img src={image} alt={t("Dossier Trade Finance")} loading="lazy" />
        <span className="article-image-arrow"><ArrowRight size={18} /></span>
      </Link>
      <div className="article-card-content">
        <span className="article-date">{date} <span>·</span> {t("Analyse")}</span>
        <h3><Link href={href}>{title}</Link></h3>
        <p>{excerpt}</p>
        <Link className="read-link" href={href}>{t("Lire l'article")} <ArrowRight size={15} /></Link>
      </div>
    </article>
  );
}
