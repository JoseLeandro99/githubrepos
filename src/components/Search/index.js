import React, { useState } from 'react';

import { Container, Title, Form, Input, Button, Results, Repo, Avatar, LabelName } from './styles';

import api from '../../services/api';

function Search() {

    const [repos,setRepos] = useState([]);

    const [user,setUser] = useState('');

    const [image,setImage] = useState('');

    async function getRepos() {
        if (!user) {
            return;
        }

        let response = await api.get(`/users/${user}/repos`);
        if (!response.data) {
            return;
        }
        setRepos(response.data);

        response = await api.get(`/users/${user}`);
        setImage(response.data.avatar_url);
    }

    function handleUser(e) {
        setUser(e.target.value);
    }

    return (
        <Container>

            <Title>Busque repositórios</Title>
            
            <Form>
                <Input type="text" placeholder="usuário.." onChange={handleUser} required />
                <Button type="button" onClick={() => {getRepos()}}>Buscar</Button>
            </Form>

            <Results>
                {image && <Avatar src={image} alt="Avatar" />}
                {image && <LabelName>{user}</LabelName>}
                {repos.map(repo => (
                    <Repo key={repo.id}>
                        <h2 className="repo-title">{repo.name}</h2>
                        <p className="repo-description">{repo.description}</p>
                        <a href={repo.html_url} className="repo-button" target="_blank">Detalhes</a>
                    </Repo>
                ))}
            </Results>

        </Container>
    );
}

export default Search;