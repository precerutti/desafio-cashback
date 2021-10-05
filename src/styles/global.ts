import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #ffffff;
        padding: 3rem;
        border-radius: 0.24rem;
        position: relative;
    }

    h1 {
        color: #000000;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    h2 {
        color: #000000;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-left: 0.5rem
    }

    h3 {
        font-size: 4rem;
        margin-top: 1rem;
        margin-left: 1.5rem
        font-weight: normal;
        line-height: 3rem;
        font-family: 'Nunito'
    }

    h4 {
        font-size: 1rem
    }

    h5 {
        font-family: 'Verdana'
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
    
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
    
        font-weight: 400;
        font-size: 1rem;
    
        & + input {
            margin-top: 1rem;
        }
    }

`

