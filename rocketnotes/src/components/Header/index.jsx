import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { api } from '../../service/api';
import { Container, Profile, Logout } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; // Certifique-se de que o caminho esteja correto
import PropTypes from 'prop-types';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={`Foto de perfil de ${user.name}`}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut} aria-label="Sair">
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
