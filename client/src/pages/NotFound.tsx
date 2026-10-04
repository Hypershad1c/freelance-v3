import { AlertCircle } from "lucide-react";
import { ActionLink, useSiteLanguage } from "../components/site";

export default function NotFound() {
  const { t } = useSiteLanguage();
  return (
    <section className="not-found-page container">
      <div className="not-found-panel">
        <span className="not-found-icon"><AlertCircle size={30} aria-hidden="true" /></span>
        <span className="eyebrow"><span className="eyebrow-line" />404</span>
        <h1>{t("Page introuvable")}</h1>
        <p>{t("La page recherchée n'existe pas ou a été déplacée.")}</p>
        <ActionLink href="/">{t("Retour à l'accueil")}</ActionLink>
      </div>
    </section>
  );
}
