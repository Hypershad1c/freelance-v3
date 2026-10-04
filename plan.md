# Plan — NK Trade & Banking Experts

## Direction de conception approuvée

- **Mouvement** : édition financière contemporaine, proche d'une revue de banque privée, avec une sobriété institutionnelle et des détails éditoriaux.
- **Principes** : (1) crédibilité et précision avant l'effet, (2) hiérarchie typographique nette, (3) grands espaces et rythme calme, (4) accès direct aux offres de conseil, de formation et de partenariat.
- **Philosophie colorielle** : le bleu profond `#0A2A6B` et son ton plus sombre `#071D4D` inspirent confiance et stabilité; `#1E4FB8` et `#5B8DEF` signalent les actions et les parcours; le fond `#F4F7FB`, les panneaux alternés `#E6ECF5`, les cartes blanches et les bordures `#D9E2EE` gardent une lecture lumineuse; `#1B2433` et `#5B6B82` hiérarchisent le texte; le doré discret `#C9A24B` souligne seulement quelques appels à l'action.
- **Paradigme de mise en page** : accueil éditorial asymétrique avec texte à gauche et visuel à droite; chiffres clés en ligne; sections alternées à largeur maîtrisée; pages d'offre structurées en blocs successifs, plutôt qu'une grille uniforme de cartes.
- **Motifs** : filets fins et repères inspirés des routes commerciales; petits accents dorés; panneaux bleu pâle pour encadrer les preuves et appels à l'action.
- **Interactions** : navigation explicite vers des routes dédiées, ancres pour les actions qui doivent atteindre le formulaire, états clavier visibles et survols sobres. Pas de sélecteur de thème ni de mode sombre.
- **Animation** : transitions discrètes de 180–240 ms sur les boutons et cartes; apparition douce limitée aux éléments de contenu; aucun mouvement permanent ni défilement décoratif.
- **Typographie** : Playfair Display pour titres éditoriaux, Inter pour navigation, corps et interfaces. Titres à contraste marqué, paragraphes aérés, petits libellés en capitales espacées.
- **Essence de marque** : « le partenaire de confiance des banques et entreprises qui veulent sécuriser et développer leur performance internationale »; personnalité : experte, fiable, pédagogique.
- **Voix** : professionnelle, précise, humaine, sans promesse chiffrée non fournie. Exemples : « Maîtriser les flux, sécuriser les échanges. » et « Des équipes mieux préparées pour des opérations internationales maîtrisées. »
- **Wordmark / logo** : l'attachement transmis ne contient que le brief texte, sans fichier logo. Aucun logo original ne sera prétendu ni modifié; le site emploiera provisoirement un logotype typographique/monogramme neutre aux emplacements en-tête et pied de page, isolé dans un composant remplaçable par le fichier original dès qu'il est fourni.
- **Couleur-signature** : bleu institutionnel `#0A2A6B`, propre à l'identité visuelle demandée.

## Implémentation

- Utiliser le starter React + TypeScript + Vite déjà initialisé, en mode statique (aucun compte, serveur métier ou base de données requis). Wouter fournit la navigation de routes; `lucide-react` fournit les icônes déjà présentes dans les dépendances; le CSS du projet porte la direction responsive et lumineuse.
- Routes : `/` (accueil), `/a-propos`, `/expertise-conseil`, `/formations`, `/investissements`, `/blog`, `/blog/le-trade-finance-2026`, `/contact`, et `/404`. Les formulaires Google restent des iframes responsives de hauteur minimale 900 px, avec actions d'ancre et liens externes directs sans `embedded=true`.
- Deux images originales distinctes sont utilisées : une illustration photographique pour le hero et une image éditoriale dédiée au billet Trade Finance. Elles sont servies depuis `client/public/images/` pour fonctionner dans le Preview sur port de développement comme dans le build statique. Aucune image de personne, marque ou lieu identifiable n'est utilisée.
- Structure principale : `client/src/App.tsx` pour le routage; `client/src/components/` pour l'en-tête, pied de page, identité provisoire et blocs partagés; `client/src/pages/` pour les pages métier, le blog et l'article; `client/src/index.css` pour les tokens, composants visuels et adaptations d'écran; `client/public/manus-routes.json` pour le manifeste de pages; `client/index.html` pour la langue française, les métadonnées et les polices. Le présent `plan.md` conserve les décisions; `TODO.md` trace les exigences livrables.
- Ne pas ouvrir LinkedIn ni aucun compte personnel; reprendre uniquement les faits et le texte fournis. Ne rien inventer pour les coordonnées de contact : proposer une prise de contact par le formulaire d'investissement/formation ou un appel à la discussion sans adresse ni téléphone fictifs.
