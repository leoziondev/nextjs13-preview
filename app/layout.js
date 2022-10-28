export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        Wrapping
        {children}
        </body>
    </html>
  )
}
