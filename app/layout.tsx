import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Saltmarsh — Project workspace",
  description: "Plan projects, track tasks, and ship on time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0f1115",
          color: "#e8e9ec",
        }}
      >
        <Script id="contentsquare" strategy="afterInteractive">
          {`(function(){window._uxa=window._uxa||[];var cs=document.createElement("script");cs.type="text/javascript";cs.async=true;cs.src="//t.contentsquare.net/uxa/${process.env.NEXT_PUBLIC_CONTENTSQUARE_TAG_ID ?? ""}.js";document.getElementsByTagName("head")[0].appendChild(cs);})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
