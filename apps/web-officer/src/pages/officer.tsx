import { Inter } from 'next/font/google'
import { Officer } from '@findus-org/ui/src/components/templates/Officer'
import { Container } from '@findus-org/ui/src/components/atoms/Container'
import { IsLoggedIn } from '@findus-org/ui/src/components/organisms/IsLoggedIn'
import { IsOfficer } from '@findus-org/ui/src/components/organisms/IsOfficer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Container>
        <IsLoggedIn>
          <IsOfficer>
            <Officer />
          </IsOfficer>
        </IsLoggedIn>
      </Container>
    </main>
  )
}
