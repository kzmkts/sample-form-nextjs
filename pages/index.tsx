import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import ContactForm from '@/components/Form'

const Home: NextPage = () => {
  return (
    <Layout title="contact">
      <h1 className="text-6xl font-bold text-center">Contact</h1>
      <ContactForm />
    </Layout>
  )
}

export default Home
