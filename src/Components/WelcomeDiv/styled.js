import styled,{keyframes} from 'styled-components';


const float = keyframes`
0%{ transform:translateY(-1rem) rotate(-5deg); }
50%{ transform:translateY(1rem) rotate(5deg); }
100%{ transform:translateY(-1rem) rotate(-5deg); }
`;

const bounce =  keyframes`
0%{ transform:translate(0); }
25%{ transform:rotateX(20deg) translateY(2px) rotate(-3deg); }
75%{ transform:translateY(-20px) rotate(3deg) scale(1.1);  }
100%{ transform:translate(0); }
`;


export const Welcome = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
row-gap: 2rem;

span{
    font-size:1.6rem;
    font-weight: bold;
}

h1 { 
    display: flex;
    column-gap: 2rem;
    margin-top: 1rem;

    span:nth-child(4n) { color:hsl(50, 75%, 55%); text-shadow:1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%), 3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%); }
    span:nth-child(4n-1) { color:hsl(135, 35%, 55%); text-shadow:1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%), 3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%); }
    span:nth-child(4n-2) { color:hsl(155, 35%, 60%); text-shadow:1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%), 3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%); }
    span:nth-child(4n-3) { color:hsl(30, 65%, 60%); text-shadow:1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%), 3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%); }
    
    :hover span{ 
        animation: ${bounce} .6s ease-in-out; 
    }

    span{
        display:inline-block;
        animation: ${float} 1.5s alternate infinite;
        margin-left: 5px;
        font-size:3rem;

        :nth-child(2){ animation-delay:.05s; }
        :nth-child(3){ animation-delay:.1s; }
        :nth-child(4){ animation-delay:.15s; }
        :nth-child(5){ animation-delay:.2s; }
        :nth-child(6){ animation-delay:.25s; }
        :nth-child(7){ animation-delay:.3s; }
        :nth-child(8){ animation-delay:.35s; }
        :nth-child(9){ animation-delay:.4s; }
        :nth-child(10){ animation-delay:.45s; }
        :nth-child(11){ animation-delay:.5s; }
        :nth-child(12){ animation-delay:.55s; }
        :nth-child(13){ animation-delay:.6s; }
        :nth-child(14){ animation-delay:.65s; }
    }
    
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
        margin-top: 7rem;
        position:relative;
        font-size: 1rem;
        transition: .3s ease-in-out;
        border-radius:  2rem;

        :hover{
            background-position: right;
        }
    }
`;