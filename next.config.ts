import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ============================================
      // WICHTIGSTE BLOG-BEITRAEGE (alte kizheart.com URLs)
      // Format: kizheart.com/slug → daveandtabea.de/blog/beitrag/slug
      // ============================================

      // #1 WICHTIGSTE SEITE - ehemals Platz 1 bei Google!
      {
        source: '/was-ist-urban-kiz',
        destination: 'https://daveandtabea.de/blog/beitrag/was-ist-urban-kiz',
        permanent: true,
      },
      {
        source: '/was-ist-urban-kiz/',
        destination: 'https://daveandtabea.de/blog/beitrag/was-ist-urban-kiz',
        permanent: true,
      },

      // Weitere Blog-Beitraege
      {
        source: '/fun-facts-ueber-mich',
        destination: 'https://daveandtabea.de/blog/beitrag/fun-facts-ueber-mich',
        permanent: true,
      },
      {
        source: '/open-style-couple-dance',
        destination: 'https://daveandtabea.de/blog/beitrag/open-style-couple-dance',
        permanent: true,
      },
      {
        source: '/ist-es-nur-ein-traum',
        destination: 'https://daveandtabea.de/blog/beitrag/ist-es-nur-ein-traum',
        permanent: true,
      },
      {
        source: '/try-everything',
        destination: 'https://daveandtabea.de/blog/beitrag/try-everything',
        permanent: true,
      },
      {
        source: '/einfach-so',
        destination: 'https://daveandtabea.de/blog/beitrag/einfach-so',
        permanent: true,
      },
      {
        source: '/dich-spueren-dich-zeigen',
        destination: 'https://daveandtabea.de/blog/beitrag/dich-spueren-dich-zeigen',
        permanent: true,
      },
      {
        source: '/sich-hingeben-und-fallen-lassen',
        destination: 'https://daveandtabea.de/blog/beitrag/sich-hingeben-und-fallen-lassen',
        permanent: true,
      },
      {
        source: '/wofuer-empfindest-du-leidenschaft',
        destination: 'https://daveandtabea.de/blog/beitrag/wofuer-empfindest-du-leidenschaft',
        permanent: true,
      },
      {
        source: '/der-flow-und-die-mind-body-connection',
        destination: 'https://daveandtabea.de/blog/beitrag/der-flow-und-die-mind-body-connection',
        permanent: true,
      },
      {
        source: '/die-tuere-steht-offen',
        destination: 'https://daveandtabea.de/blog/beitrag/die-tuere-steht-offen',
        permanent: true,
      },
      {
        source: '/staerker-denn-je',
        destination: 'https://daveandtabea.de/blog/beitrag/staerker-denn-je',
        permanent: true,
      },
      {
        source: '/warum-ich-urban-kiz-liebe',
        destination: 'https://daveandtabea.de/blog/beitrag/warum-ich-urban-kiz-liebe',
        permanent: true,
      },
      {
        source: '/mein-tanz-manifest',
        destination: 'https://daveandtabea.de/blog/beitrag/mein-tanz-manifest',
        permanent: true,
      },
      {
        source: '/wieso-paartanz-x-gruende-warum-ich-den-paartanz-liebe',
        destination: 'https://daveandtabea.de/blog/beitrag/wieso-paartanz-x-gruende-warum-ich-den-paartanz-liebe',
        permanent: true,
      },
      {
        source: '/warum-tanzen-x-gruende-warum-ich-das-tanzen-liebe',
        destination: 'https://daveandtabea.de/blog/beitrag/warum-tanzen-x-gruende-warum-ich-das-tanzen-liebe',
        permanent: true,
      },
      {
        source: '/skill-up-your-dance',
        destination: 'https://daveandtabea.de/blog/beitrag/skill-up-your-dance',
        permanent: true,
      },
      {
        source: '/urban-kiz-masterclass',
        destination: 'https://daveandtabea.de/blog/beitrag/urban-kiz-masterclass',
        permanent: true,
      },
      {
        source: '/verbindung-im-tanz',
        destination: 'https://daveandtabea.de/blog/beitrag/verbindung-im-tanz',
        permanent: true,
      },
      {
        source: '/connection',
        destination: 'https://daveandtabea.de/blog/beitrag/connection',
        permanent: true,
      },
      {
        source: '/ueber-kizheart',
        destination: 'https://daveandtabea.de/blog/beitrag/ueber-kizheart',
        permanent: true,
      },
      {
        source: '/ueber-mich',
        destination: 'https://daveandtabea.de/blog/beitrag/ueber-mich',
        permanent: true,
      },

      // ============================================
      // Blog-Seiten (Ubersicht)
      // ============================================
      {
        source: '/blog',
        destination: 'https://daveandtabea.de/blog',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: 'https://daveandtabea.de/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: 'https://daveandtabea.de/blog/:slug',
        permanent: true,
      },
      {
        source: '/blog/:slug/',
        destination: 'https://daveandtabea.de/blog/:slug',
        permanent: true,
      },

      // ============================================
      // Hauptseiten
      // ============================================
      {
        source: '/kurse',
        destination: 'https://daveandtabea.de/termine',
        permanent: true,
      },
      {
        source: '/termine',
        destination: 'https://daveandtabea.de/termine',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: 'https://daveandtabea.de/kontakt',
        permanent: true,
      },
      {
        source: '/ueber-uns',
        destination: 'https://daveandtabea.de',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://daveandtabea.de',
        permanent: true,
      },

      // ============================================
      // Kurs-Seiten
      // ============================================
      {
        source: '/einsteiger',
        destination: 'https://daveandtabea.de/einsteiger-intensiv',
        permanent: true,
      },
      {
        source: '/einsteiger-intensiv',
        destination: 'https://daveandtabea.de/einsteiger-intensiv',
        permanent: true,
      },
      {
        source: '/schnuppern',
        destination: 'https://daveandtabea.de/schnuppern',
        permanent: true,
      },
      {
        source: '/schnupperkurs',
        destination: 'https://daveandtabea.de/schnuppern',
        permanent: true,
      },

      // ============================================
      // Rechtliches
      // ============================================
      {
        source: '/impressum',
        destination: 'https://daveandtabea.de/impressum',
        permanent: true,
      },
      {
        source: '/datenschutz',
        destination: 'https://daveandtabea.de/datenschutz',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: 'https://daveandtabea.de/datenschutz',
        permanent: true,
      },

      // ============================================
      // Homepage-Varianten
      // ============================================
      {
        source: '/home',
        destination: 'https://daveandtabea.de',
        permanent: true,
      },
      {
        source: '/index',
        destination: 'https://daveandtabea.de',
        permanent: true,
      },

      // ============================================
      // CATCH-ALL - Muss am Ende stehen!
      // Leitet alle anderen URLs zur neuen Domain
      // ============================================
      {
        source: '/:path*',
        destination: 'https://daveandtabea.de/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
