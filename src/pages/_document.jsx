import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render () {
    return (
      <html>
        <Head>
					<link rel="stylesheet" href="../static/styles/reset.css"/>
					<link rel="stylesheet" href="../static/styles/nprogress.css"/>
          <link rel="icon" href="../static/favicon.ico"/>
          <meta name="keywords" content="desc" />
          <meta name="description" content="desc" />
          <meta name="author" content="desc" />
          {/* 动画库 cdn */}
          <script src="https://cdn.bootcss.com/scrollReveal.js/4.0.5/scrollreveal.js"></script>
				</Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </html>
    )
  }
}