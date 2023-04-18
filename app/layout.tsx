import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone using next js app directory version",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
