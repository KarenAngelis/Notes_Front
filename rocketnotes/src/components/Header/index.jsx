import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'

export function Header() {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/rodrigorgtic.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}