import styled from "styled-components";

export const ItemContainer = styled.div `
    width: 80%;

    .foto-perfil {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .container-name-repo {
        display: flex;
        margin-bottom: 1.5rem;
    }

    .name-fullname {
        margin-left: 1.5rem;
    }

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
        text-wrap: wrap;
    }

    .show-remove {
        display: flex;
        justify-content: space-between;
    }

    .trash {
        cursor:pointer;
    }

    a {
        color: #69aae3;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    hr {
        color: #fafafa60;
        margin-top: 20px;
        margin-bottom: 1rem;
    }
`