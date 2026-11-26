# TRIO — Le goût de la route

Site vitrine réalisé dans le cadre de la **SAÉ 1.02**.
TRIO présente une sélection de trois voitures aux caractères différents : un coupé sportif, un SUV d'aventure et un SUV de luxe.

Le site est écrit en **HTML et CSS uniquement**, sans framework ni JavaScript.

## Pages

| Page | Contenu |
|------|---------|
| `index.html` | Accueil : présentation de la collection et des trois modèles |
| `voiture1.html` | Fiche de la sportive (BMW M3 G80 Competition M) : vidéo, performances, moteur, points forts, fiche technique |

## Arborescence

```
.
├── index.html        Page d'accueil
├── voiture1.html           Page de la BMW M3
├── css/
│   └── style.css     Feuille de style commune aux pages
├── font/inter/       Police Inter (woff2) et sa licence (OFL.txt)
├── image/            Photos des voitures, du moteur et favicon
└── video/            Vidéos publicitaires des modèles
```

## Choix techniques

- **Balises sémantiques** : `header`, `nav`, `main`, `article`, `section` et `footer`, avec une hiérarchie de titres sans saut (`h1` → `h2` → `h3`). Les sections sans titre visible ont un `aria-label`.
- **Accessibilité** : textes alternatifs sur les images, `aria-label` sur les boutons qui ne contiennent qu'une icône, en-têtes de ligne (`scope="row"`) dans le tableau technique.
- **Performance** : images au format WebP, avec leurs dimensions déclarées. Chargement différé (`loading="lazy"`) des images situées plus bas dans la page, préchargement de l'image principale et de la police.
- **Police** : Inter est hébergée avec le site et chargée via `@font-face` et `url()`, en 4 graisses (400, 500, 600 et 700).

## Palette

| Couleur | Code |
|---------|------|
| Crème (fond) | `#F0EBD8` |
| Bleu nuit | `#0D1321` |
| Bleu marine | `#1D2D44` |
| Bleu ardoise | `#3E5C76` |
| Bleu gris | `#8a9bb3` |

### Palette sombre

| Couleur | Code |
|---------|------|
| Graphite (fond) | `#323031` |
| Graphite clair | `#3D3B3C` |
| Gris | `#7F7979` |
| Argent | `#C1BDB3` |
| Charbon | `#5F5B6B` |

## Crédits

- Police [Inter](https://rsms.me/inter/)
