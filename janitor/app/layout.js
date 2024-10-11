import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Janitor by GradSteps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/">
          <Image
            src="/wordmark.png"
            alt="Return home"
            width={200}
            height={100}
            className="mb-2 p-2"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
