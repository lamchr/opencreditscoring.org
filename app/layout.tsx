import "./css/style.css";

export const metadata = {
  title: "Open Credit Scoring",
  description:
    "Transparent credit scoring infrastructure for responsible lending.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="bg-surface font-inter tracking-normal text-midnight antialiased"
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
