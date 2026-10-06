# Plan — NK Trade & Banking Experts

## Direction de conception

- **Mouvement** : édition financière contemporaine, proche d'une revue bancaire, associant sobriété institutionnelle et détails éditoriaux.
- **Principes** : crédibilité avant l'effet; hiérarchie typographique nette; espace blanc et rythme calme; accès direct aux offres et ressources.
- **Philosophie colorielle** : conserver le bleu profond `#0A2A6B`, le bleu nuit `#071D4D`, les bleus d'action `#1E4FB8` et `#5B8DEF`, les fonds `#F4F7FB` / `#E6ECF5`, le texte `#1B2433` / `#5B6B82` et le doré discret `#C9A24B`. Le résultat demeure clair, professionnel et bancaire.
- **Mise en page** : accueil éditorial asymétrique; preuves et cas de mission en panneaux lisibles; modules de formation et ressources en séries structurées, pas en grille générique uniforme; pages et formulaires adaptés du mobile au bureau.
- **Motifs** : filets et repères inspirés des routes commerciales; monogramme officiel fourni par l'utilisateur; encadrés sobres bleu pâle et accent doré.
- **Interactions** : lien français/anglais persistant entre les pages; navigation explicite; formulaires déjà configurés conservés; sélecteur de langue, menus et liens accessibles au clavier et au toucher.
- **Animation** : transitions discrètes de 180–240 ms; pas de mouvement permanent; respecter `prefers-reduced-motion`.
- **Typographie** : Playfair Display pour les titres; Inter pour le texte et les interfaces; ordre de lecture conservé en français et en anglais.
- **Essence** : « le partenaire de confiance des banques et entreprises qui veulent sécuriser et développer leur performance internationale »; personnalité experte, fiable et pédagogique.
- **Voix** : précise, professionnelle et humaine; exemples : « Maîtriser les flux, sécuriser les échanges. » et « Des équipes mieux préparées pour des opérations internationales maîtrisées. »
- **Logo & couleur signature** : utiliser l'image logo PNG fournie par l'utilisateur sans retoucher l'oeuvre; la présenter en entier dans un espace dédié à l'identité de marque, puis employer un rendu réduit dans l'en-tête et le pied de page avec le nom en texte adjacents pour la lisibilité. Le bleu `#0A2A6B` reste la couleur-signature.

## Implémentation et structure

- Conserver le starter React + TypeScript + Vite déjà initialisé, en mode statique; aucune base de données ni nouveau serveur métier.
- `client/src/App.tsx` porte le routage; `client/src/components/site.tsx` conserve l'en-tête et le pied de page, l'image officielle de marque, le sélecteur de langue, les liens et formulaires partagés; `client/src/lib/translations.ts` contient les libellés et textes français/anglais; `client/src/pages/SitePages.tsx` porte les pages, sections et contenus d'offre; `client/src/index.css` porte les styles et adaptations mobile/tablette.
- Routes existantes conservées : `/`, `/a-propos`, `/expertise-conseil`, `/formations`, `/investissements`, `/blog`, `/blog/le-trade-finance-2026`, `/contact` et `/404`; ajouter `/ressources`. Le choix de langue s'applique à chaque route sans dupliquer les URL.
- Créer un catalogue de formation avec publics cibles et objectifs. Ne pas inventer les durées ou sessions : indiquer explicitement qu'elles sont à confirmer avec l'équipe.
- Présenter une étude de mission anonymisée fondée uniquement sur les faits déjà fournis (deux groupes bancaires marocains; accompagnement au Maroc et dans huit pays d'Afrique subsaharienne); ne pas inventer de résultats quantifiés ni de témoignages.
- Ajouter une page Ressources avec un glossaire bilingue Trade Finance, un aide-mémoire téléchargeable PDF et des liens externes à ICC / Trade.gov pour les références complètes. Le contenu reste pédagogique, identifie la version Incoterms® 2020 et ne reproduit pas les publications protégées de l'ICC.
- Montrer des emplacements futurs pour email professionnel, téléphone, page LinkedIn de l'entreprise et lien de rendez-vous, tous indiqués « à fournir » et sans lien activable tant qu'aucune coordonnée n'est donnée. Ne pas accéder à LinkedIn ni inventer de contact.
- `client/public/images/` reçoit une copie optimisée sans perte de l'image d'origine, et `client/public/resources/` reçoit le PDF; `client/public/manus-routes.json` reste cohérent avec les routes; `client/index.html` conserve les métadonnées du shell et le code met à jour la langue du document; `app.config.ts` conserve les champs existants et pointe `logoUrl` vers une URL HTTPS stable du logo. `TODO.md` garde les clauses d'acceptation et leur état.
- Les références pédagogiques : ICC « Incoterms® 2020 » (https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/), ICC Academy sur les crédits documentaires (https://academy.iccwbo.org/international-trade/article/documentary-credits-rules-guidelines-terminology/), International Trade Administration sur les Incoterms (https://www.trade.gov/know-your-incoterms) et les remises documentaires (https://www.trade.gov/documentary-collections).
- Ne pas modifier le thème clair approuvé, les URLs exactes des formulaires Google ni le disclaimer investissement déjà fourni.

## Hébergement Vercel (ajout)

- Conserver l'origine Manus et le dépôt GitHub de l'utilisateur en remotes distincts; le dépôt GitHub `Hypershad1c/freelance-v3`, branche `main`, est connecté au projet Vercel `freelance-v3-df6f`. Ne pas basculer le dépôt canonique Manus.
- Configurer la racine Vercel par `vercel.json` versionné : `pnpm install --frozen-lockfile`, commande statique `pnpm run build:static`, dossier de sortie `dist/public` (et non `dist`, qui contient aussi le bundle serveur hors sujet), avec un rewrite SPA vers `/index.html` pour les routes React directes. Le preset Vite demeure actif; aucun serveur/API backend n'est requis pour cette vitrine.
- Déployer les commits poussés sur `main` via l'intégration Git Vercel et vérifier le HTML de la page d'accueil, des routes profondes et des fichiers publics (manifest, logo et PDF). URL projet actuelle : https://freelance-v3-df6f.vercel.app/.
- Références officielles de configuration : Vercel Vite (https://vercel.com/docs/frameworks/frontend/vite), rewrites (https://vercel.com/docs/routing/rewrites) et `vercel.json` (https://vercel.com/docs/project-configuration/vercel-json).
