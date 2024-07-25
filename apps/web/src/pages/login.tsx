import Head from 'next/head'
import { AuthLayout } from '@haveyouseen-org/ui/src/components/molecules/AuthLayout'
import { LoginForm } from '@haveyouseen-org/ui/src/components/templates/LoginForm'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Have you seen? | Karthick Ragavendran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthLayout title="Login">
          <LoginForm />
        </AuthLayout>
      </main>
    </>
  )
}
