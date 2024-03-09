import "./globals.css";

export const metadata = {
  title: 'Notice',
  description: 'Notice management program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
