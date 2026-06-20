# Portfolio — Victor Camara (PWA)

Portfolio personnel professionnel, déployé sur GitHub Pages, **installable comme une application mobile** (PWA) sur Android et iPhone.

## 📁 Structure des fichiers

```
victor-portfolio/
├── index.html                          ← Portfolio principal (tout-en-un)
├── manifest.json                       ← Manifeste PWA
├── service-worker.js                   ← Mise en cache / mode hors-ligne
├── robots.txt                          ← SEO
├── sitemap.xml                         ← SEO
├── assets/
│   ├── icons/
│   │   ├── icon-192.png                ← Icône PWA 192×192 (placeholder)
│   │   ├── icon-512.png                ← Icône PWA 512×512 (placeholder)
│   │   ├── icon-512-maskable.png       ← Icône adaptative Android
│   │   ├── apple-touch-icon.png        ← Icône iOS 180×180
│   │   └── favicon-32.png              ← Favicon
│   ├── images/
│   │   └── profile.jpg                 ← ⚠️ AJOUTER VOTRE PHOTO ICI
│   └── cv/
│       └── CV_Victor_Camara.pdf        ← ⚠️ AJOUTER VOTRE CV ICI
```

## 🚀 Déploiement sur GitHub Pages

1. Créer un repo GitHub nommé `victorcamara2003.github.io` (ou autre nom).
2. Uploader **tous** les fichiers en conservant la structure des dossiers.
3. **Important pour la PWA** : tous les fichiers (`manifest.json`,
   `service-worker.js`, `index.html`) doivent être servis en **HTTPS** —
   c'est automatique avec GitHub Pages.
4. Aller dans **Settings → Pages → Source → main branch → / (root)**.
5. Portfolio disponible sur `https://victorcamara2003.github.io`.

## 📱 Installation de l'application (PWA)

### Android (Chrome, Edge, Samsung Internet)
Un bouton **« Installer l'application »** apparaît automatiquement sur la
page d'accueil dès que le navigateur détecte que le site est installable.
Un appui suffit pour l'ajouter à l'écran d'accueil.

### iPhone / iPad (Safari)
Safari ne propose pas d'invite automatique. Une **bannière d'instructions**
apparaît en bas de l'écran après quelques secondes, expliquant comment
utiliser **Partager → Sur l'écran d'accueil**.

### Vérifier que la PWA fonctionne
- Ouvrir le site dans Chrome (Android/Desktop) → DevTools → onglet
  **Application** → vérifier `Manifest` et `Service Workers`.
- Lighthouse (DevTools → Lighthouse → catégorie *PWA*) doit afficher un
  score élevé une fois les icônes finales et le CV ajoutés.

## 🎨 Remplacer les icônes de l'application

Les icônes actuelles sont des **placeholders professionnels** (monogramme
« VC » sur fond dégradé bleu). Pour les remplacer :

1. Préparez votre logo/icône en PNG carré, fond opaque recommandé.
2. Générez les tailles suivantes (un outil comme
   [realfavicongenerator.net](https://realfavicongenerator.net) ou
   [maskable.app](https://maskable.app) peut aider) :
   - `assets/icons/icon-192.png` — 192×192
   - `assets/icons/icon-512.png` — 512×512
   - `assets/icons/icon-512-maskable.png` — 512×512, avec marge de
     sécurité (zone visible centrale ~80%) pour le format *maskable*
   - `assets/icons/apple-touch-icon.png` — 180×180
   - `assets/icons/favicon-32.png` — 32×32
3. Remplacez les fichiers existants en conservant exactement les mêmes noms.

## 📸 Ajouter votre photo

Placez votre photo nommée exactement `profile.jpg` dans :
```
assets/images/profile.jpg
```
Format recommandé : JPG, min. 400×400 px, format carré.

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

## ✅ Technologies utilisées

- HTML5 sémantique
- Tailwind CSS (CDN)
- JavaScript Vanilla (ES6+)
- Font Awesome 6
- Google Fonts (Syne + DM Sans)
- FormSubmit.co (formulaire sans backend)
- **Progressive Web App** : Web App Manifest + Service Worker
  (mise en cache, fonctionnement hors-ligne partiel, installation native)
