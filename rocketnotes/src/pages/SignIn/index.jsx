import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }

    setLoading(true);

    try {
      await signIn({ email, password });
    } catch (error) {
      alert("Não foi possível fazer o login. Verifique suas credenciais e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          aria-label="E-mail"
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
          aria-label="Senha"
        />

        <Button title="Entrar" onClick={handleSignIn} disabled={loading} />
        {loading && <p>Carregando...</p>}

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
