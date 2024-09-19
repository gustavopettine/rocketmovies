import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {

        if (!title) {
            return alert("Enter the title of the note!");
        }

        if (!rating) {
            return alert("Enter the rating of the note!");
        }
        
        if (newTag) {
            return alert("You left a tag in the field to add, but did not click add. Click to add or leave the field empty.");
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        });

        alert("Note registered successfully!");
        navigate(-1);
    }

    return (
        <Container>

            <Header>
                <Input 
                    icon={FiSearch} 
                    placeholder="Search by title" 
                />
            </Header>

            <main>
                <Form>
                    <ButtonText
                        icon={FiArrowLeft}
                        title="Back"
                        onClick={handleBack}
                    />

                    <h1>New movie</h1>

                    <div className="first">

                        <div className="second">
                            <Input 
                                type="text" 
                                placeholder="Title" 
                                onChange={e => setTitle(e.target.value)}
                            />

                            <Input 
                                type="number" 
                                placeholder="Rating (0 to 5)" 
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>

                        <Textarea 
                            placeholder="Comments" 
                            onChange={e => setDescription(e.target.value)}
                        />

                        <Section title="Bookmarks">
                            <div className="tags">
                                
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem 
                                            key={String(index)}
                                            value={tag} 
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }

                                <NoteItem 
                                    isNew 
                                    placeholder="New tag" 
                                    value={newTag}
                                    onChange={e => setNewTag(e.target.value)}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>

                        <Button title="Save" onClick={handleNewNote} />

                    </div>
                </Form>
            </main>
        </Container>
    );
}