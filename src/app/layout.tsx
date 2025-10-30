import "./globals.css";
import { Inter, Catamaran, Roboto_Flex as Roboto } from "next/font/google";
import { Providers } from "./providers";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
});

export const metadata = {
  title: "Portifólio Frontend",
  description: "Meu protifólio frontend feito em Next js e Tailwind Css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${catamaran.variable} font-sans bg-background overflow-x-hidden`}
      >
        <GoogleTagManager gtmId="G-0Y4Y2H58FZ" />
        <GoogleTagManager gtmId="GTM-WBN6DL78" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
