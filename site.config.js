const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Hard-nett",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Protocol Engineer",
    bio: "I enjoy building towards a soviergn future.",
    email: "hard-nett@skiff.com",
    github: "hard-nett",
  },
  projects: [
    {
      name: `permissionlessweb-team`,
      href: "https://permissionless.terp.network",
    },
    {
      name: `glassflow`,
      href: "https://github.com/glassflow",
    }
  ],
  // blog setting (required)
  blog: {
    title: "hard-nett's portfolio",
    description: "welcome to hard-nett's portfolio",
  },

  // CONFIG configration (required)
  link: "https://hard-nett-portfolio.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    // @ts-ignore
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      // @ts-ignore
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  // @ts-ignore
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
