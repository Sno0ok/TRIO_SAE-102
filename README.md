# TRIO — Le goût de la route

Site vitrine réalisé dans le cadre de la **SAÉ 1.02**.
TRIO présente une sélection de trois voitures aux caractères différents : un coupé sportif, un SUV d'aventure et un SUV de luxe.

Le site est écrit en **HTML, CSS et un peu de JavaScript** (bascule de thème), sans framework.

## Pages

| Page | Contenu |
|------|---------|
| `index.html` | Accueil : présentation de la collection et des trois modèles |
| `voiture1.html` | Fiche de la sportive (BMW M3 G80 Competition M) : vidéo, performances, moteur, points forts, fiche technique |
| `voiture2.html` | Fiche du SUV (Audi Q6 e-tron) : vidéo, chiffres clés, points forts, fiche technique |
| `voiture3.html` | Fiche du SUV de luxe (Rolls-Royce Cullinan) : vidéo, moteur, intérieur, points forts, fiche technique |
| `formulaire.html` | Formulaire de réservation d'un essai (modèle, coordonnées, date, créneau) |

## Arborescence

```
.
├── index.html        Page d'accueil
├── voiture1.html     Page de la BMW M3
├── voiture2.html     Page de l'Audi Q6 e-tron
├── voiture3.html     Page de la Rolls-Royce Cullinan
├── formulaire.html   Formulaire de réservation d'un essai
├── css/
│   ├── style.css         Feuille de style de l'accueil, de la M3 et du formulaire
│   ├── voiture2css.css   Feuille de style de l'Audi
│   ├── voiture3css.css   Feuille de style de la Rolls-Royce
│   └── dark.css          2e feuille de style (thème sombre), chargée par le JavaScript
├── javascript/
│   └── script.js         Bascule entre les deux feuilles de style
├── font/inter/       Police Inter (woff2) et sa licence (OFL.txt)
├── image/            Photos des voitures, du moteur et favicon
└── video/            Vidéos publicitaires des modèles
```

## Choix techniques

- **Balises sémantiques** : `header`, `nav`, `main`, `article`, `section` et `footer`, avec une hiérarchie de titres sans saut (`h1` → `h2` → `h3`). Les sections sans titre visible ont un `aria-label`.
- **Accessibilité** : textes alternatifs sur les images, `aria-label` sur les boutons qui ne contiennent qu'une icône, en-têtes de ligne (`scope="row"`) dans le tableau technique.
- **Performance** : images au format WebP, avec leurs dimensions déclarées. Chargement différé (`loading="lazy"`) des images situées plus bas dans la page, préchargement de l'image principale et de la police.
- **Police** : Inter est hébergée avec le site et chargée via `@font-face` et `url()`, en 4 graisses (400, 500, 600 et 700).
- **Thème sombre** : le bouton du menu ajoute ou retire la 2ᵉ feuille `css/dark.css` (couleurs et accent différents) ; le choix est mémorisé dans `localStorage` et appliqué à toutes les pages.
- **Responsive** : les feuilles de style utilisent des largeurs, marges et espacements en `%`, avec des `@media` pour passer en colonne sur tablette et smartphone.
- **SEO** : `title` et `meta description` uniques par page, balises Open Graph et Twitter Card.

## Palette

| Couleur | Code |
|---------|------|
| Crème (fond) | `#F0EBD8` |
| Bleu nuit | `#0D1321` |
| Bleu marine | `#1D2D44` |
| Bleu ardoise | `#3E5C76` |
| Bleu gris | `#8a9bb3` |

### Palette sombre (`css/dark.css`)

| Couleur | Code |
|---------|------|
| Noir (fond) | `#1a1a1d` |
| Gris foncé (panneaux) | `#2b2b30` |
| Ambre (accent) | `#e0a458` |
| Blanc cassé (texte) | `#e8e6e3` |

## Crédits

- Police [Inter](https://rsms.me/inter/)
