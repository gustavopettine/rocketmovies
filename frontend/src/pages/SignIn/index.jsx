import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>Rocketmovies</h1>

                <p>Application to keep track of everything you watch.</p>

                <h2>Sign In</h2>

                <div>
                    <Input
                        icon={FiMail}
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        icon={FiLock}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button title="Sign In" onClick={handleSignIn} />

                <Link to="/signup">Don't have an account yet? <span>Sign Up</span></Link>
            </Form>

            <Background />
        </Container>
    );
}