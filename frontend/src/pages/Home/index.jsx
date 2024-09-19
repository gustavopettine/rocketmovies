import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Container, Content, NewMovie } from './styles';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

export function Home() {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {

        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [search]);

    return (
        <Container>

            <Header>
                <Input 
                    icon={FiSearch} 
                    placeholder="Search by title" 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <main>
                <Content>

                    <div>
                        <h1>My movies</h1>

                        <NewMovie to="new">
                            <FiPlus />
                            New movie
                        </NewMovie>
                    </div>

                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)} 
                                data={note}
                                onClick={() => handleDetails(note.id)} 
                            />
                        ))
                    }

                </Content>
            </main>

        </Container>
    );
}