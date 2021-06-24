import styled,{keyframes} from 'styled-components';

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: scale(2);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const moveX = keyframes`
  0% {
    transform: translateX(2rem);
  }

  50% {
    transform: translateX(-2rem);
  }
  100%{
    transform: translateX(2rem);
  }
`;

const moveY = keyframes`
  0% {
    transform: translateY(1rem);
  }

  50% {
    transform: translateY(-1rem);
  }
  100%{
    transform: translateY(1rem);
  }
`;


    
  


// const primaryColor = "#b3dee2";

const redColor = "#E27396";

// const secondaryColor = "#EAF2D7";

// const shadow= "#533d4a";





export const Home = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    flex-direction: column;
    margin:0px;
    padding: 0px;
    position: relative;
    
    p{
        font-size: 1.3rem;
        text-align: center;
    }

    .glass{
        min-height:80vh;
        width: 80vw;
        border-radius: 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;

        animation: ${fadeDown} .5s forwards;

        background: linear-gradient(to right top,rgba(255,255,255,.35),rgba(255,255,255,.55));
        backdrop-filter: blur(9px);

        z-index: 2;

        border:rgba(255,255,255,.35) 2px solid;
        position:relative;
    }

    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
    }

    .circle{
        border-radius:100%;
        position: absolute;
        background: linear-gradient(to right top,rgba(255,255,255,.7),rgba(255,255,255,.9));

    }
    .cl1{
        height: 9rem;
        width: 9rem;
        top: 3rem;
        right: 2.5rem;
        z-index: 1;
        animation: ${moveY} 12s forwards infinite;

    }
    .cl2{
        height: 15rem;
        width: 15rem;
        bottom: 5rem;
        left: 3rem;
        z-index: 1;
        animation: ${moveX} 15s forwards infinite;
    }

`;



export const Progressbar = styled.div.attrs(props => ({
    tam : props.atual / props.max*100,
}))`

    width: 100vw;
    .progress{
        width: ${props => props.tam}%;
        background-color: ${redColor};
        height: 5px;
        top:0px;
        left: 0px;
        transition: 1s ease-in-out;
    }
    .status{
        margin: 1rem 2rem ;
        font-weight: bold;
        top:0px;
        left: 0px;
        right: 0px;
        text-align: center;
    }
`;