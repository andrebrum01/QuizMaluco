import styled from 'styled-components';



export const Result = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
row-gap: 2rem;


h1 { 
    font-size:1.6rem;
    font-weight: bold;
}

button{
        background: linear-gradient(to right, #81c9cf,#b3dee2,#81c9cf)  ;
        background-size: 200%;
        border-radius: 5px;
        padding: 15px 20px;
        width: 90%;
        max-width: 800px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        margin-top: 3rem;
        position:relative;
        font-size: 1rem;
        transition: .3s ease-in-out;
        border-radius:  2rem;

        :hover{
            background-position: right;
        }
    }
`;