import { Html, Head, Main, NextScript } from 'next/document'
import { Providers } from './providers'

export default function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Providers>
          {children}
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  )
}
