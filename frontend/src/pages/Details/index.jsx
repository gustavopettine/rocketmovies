import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiSearch } from 'react-icons/fi';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {

    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      
      <Header>
        <Input 
          icon={FiSearch} 
          placeholder="Search by title" 
        />
      </Header>

      {
        data &&
        <main>
          <Content>

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {
              data.tags &&
              <Section title="Bookmarks">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button 
              title="Back" 
              onClick={handleBack}
            />
            
          </Content>
        </main>
      }

    </Container>
  )
}