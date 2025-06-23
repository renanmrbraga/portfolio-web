// src/components/Layout.tsx
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Seo } from "./Seo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <>
      <Helmet htmlAttributes={{ lang: t("seo.locale") === "pt_BR" ? "pt" : "en" }} />
      <Seo />
      <header className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </header>
      <main className="pt-20">{children}</main>
    </>
  );
}
