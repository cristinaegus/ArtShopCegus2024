# Esquema de archivos de la aplicación ArtShopCegus2024

```
ArtShopCegus2024/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── FotoCV2024.jpg
│   └── images/
│       ├── BaterraHouse.jpg
│       ├── BilbaoPlazaEliptica.jpg
│       ├── CEGR.jpg
│       ├── CEGRlogo2025.jpg
│       ├── CegusArtShopSign.png
│       ├── CiscoHouse.jpg
│       ├── delantal.jpg
│       ├── DogsCartoon.jpg
│       ├── IMG_20210604_192354.jpg
│       ├── LondonRoad.jpg
│       ├── MarinaSoft.jpg
│       ├── NewYokbridege.jpg
│       ├── ParisCafe.jpg
│       ├── PuenteColgante.jpg
│       ├── SanturceBoats.jpg
│       ├── totebag.jpg
│       └── Verde.jpg
├── src/
│   ├── env.d.ts
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Carousel.astro
│   │   ├── Navigation.astro
│   │   └── ShoopingCart.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── artshop.astro
│   │   ├── checkout.astro
│   │   ├── contact.astro
│   │   └── index.astro
│   └── Store/
│       └── cartStore.ts
```

- `public/`: Imágenes y recursos estáticos.
- `src/components/`: Componentes reutilizables de la UI.
- `src/layouts/`: Layouts generales de la aplicación.
- `src/pages/`: Páginas principales del sitio.
- `src/Store/`: Lógica de estado global (carrito).
- Archivos de configuración y dependencias en la raíz.
