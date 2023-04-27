import './globals.css'

export const metadata = {
  title: 'KEYBOARDS.FYI',
  description: 'User-generated keyboard database',
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
