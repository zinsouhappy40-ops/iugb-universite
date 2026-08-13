---
name: "IUGB Prospecting Landing Page"
description: "Un bureau d’orientation numérique institutionnel, rassurant et directement actionnable."
colors:
  green-950: "#04271d"
  green-900: "#063b2a"
  green-800: "#0a4f39"
  green-700: "#126147"
  green-100: "#dce9e2"
  signal-yellow: "#ffcc1b"
  signal-yellow-soft: "#ffe483"
  paper: "#f5f6f0"
  white: "#ffffff"
  ink: "#10241c"
  muted: "#53675f"
  line: "#cbd5ce"
  danger: "#a52626"
typography:
  display:
    fontFamily: "Sora, Trebuchet MS, sans-serif"
    fontSize: "clamp(2.7rem, 4.4vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Sora, Trebuchet MS, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 4.15rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Sora, Trebuchet MS, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 800
    lineHeight: 1.6
    letterSpacing: "0.1em"
rounded:
  field: "3px"
  control: "4px"
  card: "6px"
  panel: "8px"
  circle: "50%"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.green-950}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-yellow-soft}"
    textColor: "{colors.green-950}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.green-950}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "48px"
  audience-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "44px"
  audience-tab-selected:
    backgroundColor: "{colors.green-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.field}"
    height: "44px"
  programme-card:
    backgroundColor: "{colors.green-950}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.75rem 0.8rem"
    height: "48px"
  nav-cta:
    backgroundColor: "{colors.green-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0.72rem 1rem"
---

# Design System: IUGB Prospecting Landing Page

## Overview

**Creative North Star: "Le bureau d’orientation numérique"**

Le système met en scène deux parcours de décision — futur étudiant et parent — dans un univers universitaire net plutôt qu’un habillage institutionnel générique. Vert profond, jaune signal, blanc papier, photographie officielle et repères de dossier d’admission rendent immédiatement lisibles la promesse liée au BAC et l’économie potentielle allant jusqu’à 200 000 FCFA.

La composition alterne aplats francs, règles fines et grands blocs éditoriaux. Le premier écran juxtapose promesse, encart promotionnel, conditions d’offre et actions à la photographie du campus; le sélecteur de profil relie visuellement les deux côtés et adapte les messages des sections jusqu’au formulaire.

**Key Characteristics:**
- Contraste institutionnel vert-jaune, avec le jaune réservé aux signaux et actions.
- Titres Sora compacts et corps Manrope très lisible.
- Photographies recadrées avec voiles verts pour porter du texte blanc.
- Géométrie sobre: petits rayons, filets fins, cercles de repérage.
- Interactions brèves, explicites et compatibles avec la réduction des animations.

## Colors

La palette associe un vert universitaire dense à un jaune de signalisation, sur des surfaces papier et blanches légèrement teintées de vert.

### Primary
- **Vert campus profond** (`green-900`): fond du hero, état actif du sélecteur et identité institutionnelle dominante.
- **Vert encre** (`green-950`): surfaces les plus denses, texte sur jaune et bouton de validation.
- **Jaune signal** (`signal-yellow`): appels à l’action, repères, soulignements et focus clavier.

### Secondary
- **Verts de progression** (`green-800`, `green-700`): section de préinscription, liens, focus des champs et états survolés.
- **Jaune adouci** (`signal-yellow-soft`): survol du bouton principal sans perdre son caractère.

### Neutral
- **Papier chaud** (`paper`): fond général et état inactif des onglets.
- **Blanc net** (`white`): panneaux, formulaire et texte sur vert.
- **Encre végétale** (`ink`): texte principal sur surfaces claires.
- **Texte atténué** (`muted`): légendes et informations secondaires.
- **Filet sauge** (`line`): séparateurs et bordures discrètes.
- **Vert pâle** (`green-100`): réserve claire de la famille de marque.
- **Rouge d’erreur** (`danger`): validation invalide uniquement.

**The Signal Yellow Rule.** Le jaune marque une action, une preuve ou un repère; il ne devient pas un fond décoratif diffus hors des bandes de contact et de confiance.

## Typography

**Display Font:** Sora (avec Trebuchet MS et sans-serif)
**Body Font:** Manrope (avec Arial et sans-serif)

**Character:** Sora donne aux titres une présence géométrique et contemporaine; Manrope maintient une lecture directe dans la navigation, les preuves et le formulaire.

### Hierarchy
- **Display** (700, `clamp(2.7rem, 4.4vw, 4.75rem)`, interligne serré): titre du hero, dont la seconde proposition est jaune.
- **Headline** (700, fluide, interligne 1.08): titres de sections et de conversion.
- **Title** (700, fluide): titres des parcours photographiques et sous-titres structurants.
- **Body** (400, base 1rem, interligne 1.6): paragraphes et informations pratiques; les copies éditoriales restent généralement sous 62 caractères.
- **Label** (800, 0.76rem, espacement 0.1em, capitales): kickers, niveaux, catégories et coordonnées.

**The Two-Family Rule.** Sora porte la hiérarchie et l’identité; Manrope porte toute l’action et la lecture courante.

## Layout

Le contenu s’aligne dans un conteneur maximal de 1180px, avec 24px de marge latérale sur grand écran et 16px sous 720px. Les sections respirent verticalement entre 5rem et 8rem; la grille privilégie des asymétries lisibles plutôt qu’une succession de cartes identiques.

Le hero est partagé à 57/43 entre copie et photographie, avec le sélecteur de profil posé à cheval sur la jonction. La copie réunit le titre contextuel, un encart blanc à ombre jaune « Jusqu’à 200 000 FCFA d’économie », ses conditions repliables, deux actions et trois garanties. Les parcours utilisent une mosaïque éditoriale de 660px; les sections de raisons, de formulaire et de contact emploient des grilles à deux colonnes.

À 980px, la navigation devient un panneau plein écran, le hero conserve deux colonnes avec une photographie de 590px minimum, la mosaïque passe à deux colonnes sur 760px et la préinscription s’empile; sa copie introductive reste alors organisée en deux colonnes. À 720px, la barre de contact et le sous-titre de marque sont simplifiés, la photographie devient une bande de `115px` minimum (`14svh`), puis viennent le sélecteur en chevauchement et la copie. Les actions du hero, la bande de confiance et les grilles de contenu passent sur une colonne; les cartes prennent des hauteurs explicites de 270 à 400px, et le formulaire, le contact et le pied de page s’empilent.

## Elevation & Depth

Le système reste plat par défaut: les aplats, bordures et superpositions d’image construisent la profondeur. Les ombres sont réservées aux éléments qui doivent flotter physiquement — sélecteur de profil, formulaire décalé, bouton WhatsApp et en-tête après défilement.

### Shadow Vocabulary
- **Panneau flottant** (`0 18px 42px rgba(3, 29, 21, .24)`): sélecteur de profil au-dessus du hero.
- **Bloc décalé** (`18px 22px 0 rgba(4, 39, 29, .35)`): formulaire; réduit à `8px 10px 0` sur mobile.
- **En-tête actif** (`0 12px 32px rgba(4, 39, 29, .09)`): apparaît après 24px de défilement.
- **Action flottante** (`4px 8px 22px rgba(4, 39, 29, .25)`): accès WhatsApp fixe.

**The Flat-First Rule.** Une surface reste sans ombre tant qu’elle n’est ni flottante, ni superposée, ni liée à un état de défilement.

## Shapes

Les contrôles utilisent des coins presque carrés (3–4px), les cartes un arrondi discret (6px) et les panneaux flottants 8px. Les numéros, sceaux et action WhatsApp sont circulaires; les listes et citations sont structurées par des filets de 1px. Les photographies restent rectangulaires et sont découpées par le cadre plutôt que par des formes décoratives.

**The Small-Corner Rule.** Les rayons servent la précision institutionnelle; seuls les repères compacts et l’action WhatsApp deviennent des cercles.

## Components

### Buttons
- **Shape:** contrôle compact à coins légèrement arrondis, hauteur minimale 48px.
- **Primary:** jaune signal sur vert encre, graisse 800; le survol s’éclaircit et monte de 2px.
- **Ghost:** texte blanc et bordure blanche translucide sur vert; le survol devient blanc avec texte vert.
- **Dark:** vert encre sur le formulaire blanc; le survol passe au vert intermédiaire.
- **Focus:** contour jaune de 3px décalé de 4px; les champs utilisent plutôt une bordure verte et un halo vert translucide.

### Hero promotionnel
- **Promesse étudiant:** « Ton BAC ouvre la porte. Nous t’aidons à franchir le pas. »; le profil parent devient « Son BAC ouvre la porte. Nous vous aidons à préparer la suite. ».
- **Offre:** encart blanc compact, ombre dure jaune et montant mis en avant en vert; la formulation s’adapte entre « sur ta formation » et « sur sa formation ».
- **Conditions:** un élément `details` natif permet d’afficher que l’économie maximale dépend de la formation et du profil, et que l’éligibilité ainsi que le montant exact sont confirmés par le service des admissions.

### Chips
- **Style:** les deux boutons de profil ont un fond papier, une bordure sauge et une hauteur minimale de 44px; le bouton actif devient vert campus avec texte blanc.
- **State:** `aria-pressed="true"` pilote l’apparence. À chaque activation, les autres boutons passent à `aria-pressed="false"`, les copies du hero, des programmes, des raisons et du formulaire sont remplacées, puis le champ « profil » reçoit « Futur bachelier » ou « Parent ».

### Cards / Containers
- **Programmes:** photographie plein cadre, voile vert sombre vertical, contenu blanc ancré en bas et rayon de 6px; l’image zoome légèrement au survol ou au focus interne.
- **Actions des programmes:** chaque carte expose un lien externe « Voir les filières » ou « Voir les détails » et un bouton « Me préinscrire ». Le lien ouvre la page officielle correspondante dans un nouvel onglet; le bouton renseigne la formation, défile vers le formulaire puis place le focus sur le nom.
- **Formulaire:** panneau blanc à rayon de 8px et ombre dure décalée; grille de deux colonnes sur grand écran, une colonne sur mobile.
- **Témoignages:** cellules blanches sans rayon, séparées par le filet sauge.

### Inputs / Fields
- **Style:** fond blanc, bordure sauge de 1px, rayon de 3px, hauteur minimale 48px et libellé gras au-dessus.
- **Focus:** bordure vert intermédiaire et halo vert translucide de 3px.
- **Error:** bordure et message en rouge d’erreur; le premier champ invalide reçoit le focus.

### Navigation
- L’en-tête reste collé en haut, devient blanc et ombré après 24px de défilement. Sur bureau, les liens dessinent un filet vert au survol et la préinscription est un bouton vert. Sous 980px, un bouton de 44px ouvre un panneau vert plein écran et verrouille le défilement du document. Le contenu extérieur (`skip-link`, barre supérieure, `main`, pied de page et bouton WhatsApp) devient `inert`; le premier lien reçoit le focus et une boucle de focus retient Tab et Maj+Tab entre le bouton de menu et les liens. Échap ferme le menu et restitue le focus au bouton; l’activation d’un lien ferme également le panneau.

### Audience Switcher
- Le panneau blanc relie les deux moitiés du hero sur grand écran et se place entre la photographie et la copie sur mobile. Son groupe de deux boutons à état `aria-pressed` remplace immédiatement la promesse, la formulation de l’offre, l’introduction, les messages des programmes et des raisons, ainsi que la copie de conversion, puis synchronise le champ « profil ».

### Prospect Form
- Les boutons de parcours préremplissent la formation, lancent un défilement doux et placent ensuite le focus sur le nom. La validation contrôle le nom complet, un téléphone de 8 à 15 chiffres, le profil, la formation et le consentement; elle annonce le résultat dans une zone `aria-live` et place le focus sur le premier champ invalide.
- Une soumission valide compose un message avec le nom, le téléphone, le profil et la formation, puis ouvre `wa.me/22960609116` dans un nouvel onglet. Aucune donnée n’est enregistrée dans `localStorage` ni stockée sur la page; l’envoi final reste à la charge de WhatsApp. Un lien alternatif permet aussi d’ouvrir directement une conversation.

### Touch Targets
- Les contrôles tactiles compacts explicitement dimensionnés — bouton de menu, sélecteur de profil, actions des cartes, alternative WhatsApp et liens du pied de page — offrent une cible d’au moins 44px. Les boutons principaux et champs atteignent 48px; l’action WhatsApp flottante mesure 54px.

## Do's and Don'ts

### Do:
- **Do** réserver le jaune aux actions, focus, repères et bandes institutionnelles.
- **Do** associer photographie officielle, voile vert et texte blanc pour les parcours.
- **Do** conserver les focus visibles, les cibles tactiles d’au moins 44px pour les contrôles compacts et le lien d’évitement.
- **Do** neutraliser le défilement doux déclaré sur `html`, les transitions principales et l’animation du hero quand la réduction des animations est demandée.

### Don't:
- **Don't** remplacer les petits rayons et filets par des cartes très arrondies et fortement ombrées.
- **Don't** ajouter des couleurs d’accent hors du vert, du jaune et du rouge réservé aux erreurs.
- **Don't** poser du texte clair sur une photographie sans le voile vert de contraste.
- **Don't** masquer l’action WhatsApp fixe ni le parcours de préinscription sur petit écran.
