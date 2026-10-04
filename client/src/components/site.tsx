import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertise", href: "/expertise-conseil" },
  { label: "Formations", href: "/formations" },
  { label: "Investissements", href: "/investissements" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label="NK Trade & Banking Experts — accueil">
      <span className="brand-mark" aria-hidden="true">NK</span>
      <span className="brand-copy">
        <span className="brand-name">NK Trade <i>&amp;</i> Banking</span>
        <span className="brand-subtitle">Experts · Trade Finance</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenu">{children}</main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Conseil · Formation · Trade Finance</span>
          <span className="topline-note">Un partenaire de confiance pour vos opérations internationales</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="main-navigation" className={`main-navigation${menuOpen ? " is-open" : ""}`} aria-label="Navigation principale">
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
                  {item.label}
                </Link>
              );
            })}
            <Link className="header-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              Échanger <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Brand light />
          <p>Conseil et formation en Trade Finance et banque internationale, au service de votre performance internationale.</p>
        </div>
        <div className="footer-nav-block">
          <span className="footer-label">Explorer</span>
          <div className="footer-links">
            <Link href="/expertise-conseil">Expertise &amp; conseil</Link>
            <Link href="/formations">Formations</Link>
            <Link href="/investissements">Investissements</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-cta-block">
          <span className="footer-label">Parlons de vos enjeux</span>
          <p>Banque, entreprise importatrice ou exportatrice : explorons la réponse adaptée à votre activité.</p>
          <Link className="footer-link-cta" href="/contact">Prendre contact <ArrowRight size={15} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NK Trade &amp; Banking Experts</span>
        <span>Un partenaire de confiance au service de votre performance internationale.</span>
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
        Ouvrir le formulaire dans un nouvel onglet <ArrowRight size={15} aria-hidden="true" />
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
  return (
    <article className="article-card">
      <Link href={href} className="article-card-image" aria-label={`Lire : ${title}`}>
        <img src={image} alt="Documents de commerce international préparés pour une opération Trade Finance" loading="lazy" />
        <span className="article-image-arrow"><ArrowRight size={18} /></span>
      </Link>
      <div className="article-card-content">
        <span className="article-date">{date} <span>·</span> Analyse</span>
        <h3><Link href={href}>{title}</Link></h3>
        <p>{excerpt}</p>
        <Link className="read-link" href={href}>Lire l'article <ArrowRight size={15} /></Link>
      </div>
    </article>
  );
}
