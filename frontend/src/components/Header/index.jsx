import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, Search, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header({ children }) {

    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>

            <h1>Rocketmovies</h1>

            <Search>{children}</Search>

            <div className="first">
                <div className="second">
                    <strong>{user.name}</strong>
                    <ButtonText className="logout" title="Logout" onClick={handleSignOut} />
                </div>
                
                <Profile to="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </Profile>
            </div>

        </Container>
    );
}