import Head from 'next/head'
interface Props {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title = 'Sample-Title' }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center py-2 min-h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 mx-auto w-full max-w-2xl">{children}</main>

      <footer className="flex justify-center items-center w-full h-24 border-t">
        <p>kzmkts/sample-step-form</p>
      </footer>
    </div>
  )
}

export default Layout
