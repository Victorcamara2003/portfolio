# Portfolio — Victor Camara (PWA)

Portfolio personnel professionnel, déployé sur GitHub Pages, **installable comme une application mobile** (PWA) sur Android et iPhone.

🔗 URL de production : **https://victorcamara2003.github.io/portfolio/**

## 📁 Structure du projet

```
victor-portfolio/
├── index.html
├── manifest.json
├── service-worker.js
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── icons/
│   │   ├── icon-192.png              ← Icône PWA 192×192
│   │   ├── icon-512.png              ← Icône PWA 512×512
│   │   ├── icon-512-maskable.png     ← Icône adaptative Android (zone de sécurité)
│   │   ├── apple-touch-icon.png      ← Icône iOS 180×180
│   │   ├── favicon-32.png            ← Favicon haute résolution
│   │   └── favicon.ico               ← Favicon universel (16/32/48/64px)
│   ├── images/
│   │   └── profile.jpg               ← ⚠️ AJOUTER VOTRE PHOTO ICI
│   └── cv/
│       └── CV_Victor_Camara.pdf      ← ⚠️ AJOUTER VOTRE CV ICI
```

## 🚀 Déploiement sur GitHub Pages

1. Créer un repo GitHub nommé `victorcamara2003.github.io`.
2. À l'intérieur de ce repo, créer un dossier `portfolio/` et y déposer
   **tous** les fichiers de ce projet (en conservant la structure).
3. Aller dans **Settings → Pages → Source → main branch → / (root)**.
4. Portfolio disponible sur `https://victorcamara2003.github.io/portfolio/`.

> ℹ️ Tous les chemins du projet (`index.html`, `manifest.json`,
> `robots.txt`, `sitemap.xml`) sont déjà configurés pour ce sous-dossier
> `/portfolio/`. Si vous préférez déployer à la racine du domaine
> (`https://victorcamara2003.github.io/` directement, sans sous-dossier),
> il faudra mettre à jour les URLs absolues dans `index.html`
> (canonical, Open Graph, Twitter Card) ainsi que dans `robots.txt` et
> `sitemap.xml`.

## 📱 Installation de l'application (PWA)

### Android (Chrome, Edge, Samsung Internet)
Un bouton **« Installer l'application »** apparaît automatiquement sur la
page d'accueil dès que le navigateur détecte que le site est installable
(événement `beforeinstallprompt`).

### iPhone / iPad (Safari)
Safari ne propose pas d'invite automatique. Une **bannière d'instructions**
apparaît en bas de l'écran après quelques secondes, expliquant comment
utiliser **Partager → Sur l'écran d'accueil**.

### Vérifier la conformité PWA avec Lighthouse
1. Ouvrir le site déployé dans Chrome.
2. DevTools (F12) → onglet **Lighthouse** → cocher la catégorie *PWA* →
   **Analyser la page**.
3. Vérifier également l'onglet **Application** :
   - `Manifest` → toutes les icônes doivent se charger sans erreur 404.
   - `Service Workers` → le SW doit apparaître comme *activated and running*.
4. Critères couverts par ce projet :
   - ✅ Manifeste valide avec `name`, `short_name`, `icons` (192 & 512, dont une *maskable*), `start_url`, `display: standalone`, `theme_color`, `background_color`.
   - ✅ Service Worker enregistré, contrôlant la page.
   - ✅ Icônes 192×192 et 512×512 présentes et référencées.
   - ✅ `apple-touch-icon` pour iOS.
   - ✅ `theme-color` défini en HTML et dans le manifeste.
   - ✅ Site servi en HTTPS (automatique via GitHub Pages).
   - ✅ Viewport correctement configuré (responsive).

## 🎨 Remplacer les icônes de l'application

Les icônes actuelles sont des **placeholders professionnels** (monogramme
« VC » sur fond dégradé bleu navy → bleu électrique). Pour les remplacer :

1. Préparez votre logo/icône en PNG carré (fond opaque recommandé pour les
   icônes non-maskable).
2. Générez les 6 fichiers suivants — un outil comme
   [realfavicongenerator.net](https://realfavicongenerator.net) ou
   [maskable.app](https://maskable.app) peut tout générer automatiquement :
   - `assets/icons/icon-192.png` — 192×192
   - `assets/icons/icon-512.png` — 512×512
   - `assets/icons/icon-512-maskable.png` — 512×512, avec marge de
     sécurité (zone visible centrale ~80%) pour le format *maskable*
   - `assets/icons/apple-touch-icon.png` — 180×180
   - `assets/icons/favicon-32.png` — 32×32
   - `assets/icons/favicon.ico` — multi-résolution (16/32/48px)
3. Remplacez les fichiers existants en conservant exactement les mêmes noms.

## 📸 Ajouter votre photo

Placez votre photo nommée exactement `profile.jpg` dans :
```
assets/images/profile.jpg
```
Format recommandé : JPG, min. 400×400 px, format carré.
Cette image est aussi utilisée comme image de partage Open Graph / Twitter.

## 📄 Activer le bouton « Télécharger mon CV »

1. Placez votre CV PDF dans `assets/cv/`.
2. Nommez-le exactement : `CV_Victor_Camara.pdf`.
3. Publiez sur GitHub Pages.

> Le bouton vérifie automatiquement si le fichier est disponible et
> affiche un message d'aide si le PDF est manquant.

## 📧 Formulaire de contact (FormSubmit)

Le formulaire utilise **FormSubmit** — aucun backend requis.
Au **premier envoi**, vous recevrez un e-mail d'activation à confirmer
à l'adresse `victorcamara2003@gmail.com`.

## ✏️ Informations à personnaliser dans index.html

| Élément         | Valeur actuelle                                  |
|-----------------|--------------------------------------------------|
| Téléphone       | +224 625 27 10 46                                |
| E-mail          | victorcamara2003@gmail.com                       |
| GitHub          | github.com/victorcamara2003                      |
| LinkedIn        | linkedin.com/in/victor-camara-2818a3352          |
| Localisation    | Conakry, Guinée                                  |

## ➕ Ajouter une certification

Dans `index.html`, section `#certifications`, décommentez le bloc template
et remplissez : nom, organisme, date, description, compétences acquises.

## 🔄 Mettre à jour le contenu mis en cache (Service Worker)

Si vous modifiez `index.html` après le premier déploiement, les visiteurs
qui ont déjà installé l'app peuvent voir une version en cache. Pour forcer
la mise à jour, changez la valeur de `CACHE_VERSION` en haut de
`service-worker.js` (ex. `v1.0.0` → `v1.0.1`) à chaque déploiement important.

## 🔍 SEO

- `robots.txt` autorise l'indexation complète et pointe vers le sitemap.
- `sitemap.xml` référence l'URL canonique du portfolio.
- Balises meta complètes : description, mots-clés, Open Graph, Twitter Card,
  URL canonique.
- Pensez à soumettre `https://victorcamara2003.github.io/portfolio/sitemap.xml`
  à la Google Search Console après le déploiement.

## ✅ Technologies utilisées

- HTML5 sémantique
- Tailwind CSS (CDN)
- JavaScript Vanilla (ES6+)
- Font Awesome 6
- Google Fonts (Syne + DM Sans)
- FormSubmit.co (formulaire sans backend)
- **Progressive Web App** : Web App Manifest + Service Worker
  (mise en cache, fonctionnement hors-ligne partiel, installation native
  Android/iOS)
