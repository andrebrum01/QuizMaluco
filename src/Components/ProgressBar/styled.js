import styled from "styled-components";



const primaryColor = "#E27396";
const strokeWidth = "8px";
const strokeLineCap = "round";


export const CardRound = styled.div`
    position: relative;
    
    .ProgressBar,
    .ProgressBar-contentCircle{
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${props => props.radius}px;
        width: ${props => props.radius}px;
    }
    .ProgressBar-circle{
        //animation: progress 1s;
        fill: none; // background color
        stroke: ${primaryColor}; // path color
        stroke-width: ${strokeWidth}; // path size
        stroke-linecap: ${strokeLineCap};
        stroke-dasharray: 0; // circonférence du cercle
        stroke-dashoffset: 0; // longeur du cercle
    }

    .ProgressBar-circle{
        stroke-dasharray : ${props => props.circumference};
        stroke-dashoffset : ${props => props.circumference * (100-props.percent)/100};
    }
    .ProgressBar-percentage{
        position: absolute;
        top:0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: .2rem;
        }
    }
    
`;