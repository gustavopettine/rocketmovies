import { useState } from 'react';
import { api } from '../../services/api';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {

        if (!name || !email || !password) {
            return alert("Fill in all the fields!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("User registered successfully!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Unable to complete registration!");
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>Rocketmovies</h1>

                <p>Application to keep track of everything you watch.</p>

                <h2>Sign Up</h2>

                <div>
                    <Input
                        icon={FiUser}
                        type="text"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />

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

                <Button title="Sign Up" onClick={handleSignUp} />

                <Link to="/">Already have an account? <span>Sign In</span></Link>
            </Form>

            <Background />
        </Container>
    );
}