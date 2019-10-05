import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: 40px auto;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 2px;
    border: 1px solid #bbbbbb;
    box-shadow: 0 0 2px #ccc9;
    text-align: center;
`;

export const Title = styled.h1`
    color: #555555;
    margin: 8px 0;
`;

export const Form = styled.form`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    padding: 10px 15px;
    font-size: 16px;
    border: none !important;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 2px;
    width: 50%;
    max-width: 600px;

    ::placeholder {
        color: #aaaaaa;
    }
`;

export const Button = styled.button`
    width: 20%;
    max-width: 120px;
    background-color: #845EC2;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 2px;
    color: #ffffff !important;
    padding: 10px 15px;
    font-size: 16px;
    border: none !important;
`;

export const Results = styled.div`
    background-color: #ffffff;
    border-radius: 2px;
    padding: 10px;
`;

export const Repo = styled.div`
    border: 1px solid #ccc6;
    border-radius: 4px;
    padding: 25px 10px;
    margin: 5px 0;
    text-align: center;

    .repo-title {
        color: #555555 !important;
    }

    .repo-description {
        padding: 10px 50px;
        text-align: left;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .repo-button {
        border: none;
        background-color: #2C73D2;
        color: #ffffff !important;
        border-radius: 2px;
        padding: 10px 40px;
        max-width: 120px;
        margin-top: 20px;
        text-decoration: none;
    }
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-top: 15px;
`;

export const LabelName = styled.h1`
    color: #555555;
    margin-top: 5px;
    margin-bottom: 15px;
`;