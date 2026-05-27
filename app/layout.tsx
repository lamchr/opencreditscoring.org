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
        className="bg-gray-50 font-inter tracking-normal text-gray-900 antialiased"
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
