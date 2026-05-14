import { Metadata } from "next";
import LoginClient from "./login-client";

export const metadata: Metadata = {
    title: "TGL - Login",
    description: "Entre em sua conta no The Greatest App LOTTERY",
    keywords: ["money, game, lottery, dupla sena, mega sena, lotofacil, lotomania, login, auth, authentication, account"],
    openGraph: {
        title: "TGL - Login",
        description: "Entre em sua conta no The Greatest App LOTTERY",
        type: "website",
        url: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/login",
        images: ["images/tgl2.png"],
    },
    twitter:{
        card:"summary_large_image",
        title: "TGL - Login",
        description: "Entre em sua conta no The Greatest App LOTTERY",
        images: "images/tgl2.png"
    },
    alternates: {
        canonical: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/login", 
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      }
    }
}

export default function Page() {
  return <LoginClient />;
}
