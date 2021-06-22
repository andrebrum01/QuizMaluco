import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

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
        margin: 2rem auto;
        position:relative;
        font-size: 1rem;
        transition: .3s ease-in-out;
        border-radius:  2rem;
    }

    button:hover{
        background-position: right;
    }
`;

export const Title = styled.div`
    border-radius: 1rem 1rem 0px 0px;
    background: linear-gradient(to right top,rgba(255,255,255,.9),rgba(255,255,255,1));
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Quest = styled.div`
    padding: 15px;
    margin: 0px auto;
    text-align: center;
    font-size: 1.15rem;
    font-weight: 400;
    max-width: 800px;

`;
export const Altenative = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .question{
        border-radius: 5px;
        background-color: rgba(255,255,255,.9);
        padding: 15px 20px;
        margin: 1rem 0px;
        
        width: 100%;
        max-width: 800px;
        box-shadow: 0px 5px 15px rgba(122,122,122,.2);

        cursor: pointer;

        input[type="radio"]{
            margin-right: 15px;
        }
    }

`;

