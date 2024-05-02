import { Inter } from "next/font/google";
import "./globals.css";
import UnsupportedMobile from "./components/shared/UnsupportedMobile";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GradSteps",
  description: "Automated undergraduate degree planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:inline">{children}</div>
        <div className="md:hidden">
          <div className="flex justify-center items-center">
            <UnsupportedMobile />
          </div>
        </div>
      </body>
    </html>
  );
}
