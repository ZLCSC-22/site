import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "october-site/components/Nav";

import bgLogo from "../../public/bg.svg";
import bg from "../../public/bg.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "中崙資研 :)",
  description: "我們是中崙資訊研習社，致力於提供一個平台讓大家分享和學習最新的科技知識和技能，我們的宗旨是“創新求知，領航未來”",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100dhw] bg-gray-900">
        <Nav/>
        <div className="bg-center bg-fixed bg-no-repeat bg-auto" style={{backgroundImage: `url(${bgLogo.src})`}}>
          <div className={`${inter.className} backdrop-blur-md`}>{children}</div>
        </div>
      </body>
    </html>
  );
}
