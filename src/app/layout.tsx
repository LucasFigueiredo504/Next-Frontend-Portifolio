import "./globals.css";
import { Inter, Roboto_Flex as Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

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
      <body className={`${roboto.variable} font-sans bg-terciary`}>
        {children}
      </body>
    </html>
  );
}
