import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import { ContextProvider } from "./Context";
import Overlay2 from "./Overlay2";
export const metadata:Metadata = {
  title: "Astutrise",
  description: "Astutrise - Transforming Every Idea into Digital Innovation through Automation.",
  keywords: ["Astutrise", "website development", "website designing", "website maintainance", "website migration","affordable","latest trending technologies","React.js",
    "Next.js","C#","Javascript","HTML","CSS","Node.js","Web Development Services","Custom Website Development","E-commerce Development", "WordPress Development", "Responsive Web Design",
    "Full-Stack Development", "Web Application Development", "SEO Services", "UI/UX Design", "CMS Development", "Small Business Websites", "Professional Web Development", "Affordable Web Development", "Custom Web Design", "Local Web Development","Best in Website Development and IT Solutions",
    "Best Deals","Best Website Development Company in India", "Containerized Website Development at an affordable cost","Location - India"  
  ],

  openGraph: {
    title: "Astutrise",
    description: "Astutrise - Transforming Every Idea into Digital Innovation through Automation.",
    url: "https://www.astutrise.in",
    images: [
      {
        url: "https://www.astutrise.com/Astutrise_logo.jpg", 
        width: 512,
        height: 512,
        alt: "Astutrise Logo",
      },
    ],
    siteName: "Astutrise",
    type: "website", 
  },


  twitter: {
    card: "summary_large_image", 
    site: "@astutrise", 
    title: "Astutrise - Transforming Every Idea into Digital Innovation through Automation.",
    description: "Astutrise - Transforming Every Idea into Digital Innovation through Automation.",
    images: [
      {
        url: "https://www.astutrise.com/Astutrise_twitter.png", 
        width: 512,
        height: 512,
        alt: "Astutrise Twitter Image",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/Astutrise_favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta property="og:image" content="https://www.astutrise.com/Astutrise_linkedin.png" />
      <meta property="og:image" content="https://www.astutrise.com/Astutrise_instagram.jpg" />
      </head>
      <body className={styles.bodyStyle} style={{overflow:"visible"}}>
        <ContextProvider>
        {children}
        <Overlay2/>
        </ContextProvider>
      </body>
    </html>
  );
}
