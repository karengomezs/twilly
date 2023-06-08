import "./globals.css";
import { Inter } from "next/font/google";
import { ImHome } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 h-screen`}>
        <header>
          <nav className="bg-slate-900 text-white py-4 px-24">
            <ul className="flex justify-between items-center">
              <li>
                <a className="text-3xl font-bold" href="">
                  TWILLY
                </a>
              </li>
              <li className="flex gap-2 items-center text-xl p-2 rounded-md bg-gray-700">
                <ImHome />
                <a href="">Home</a>
              </li>
              <li className="text-xl">
                <a href="/sign-in">Sign In</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
