import styled, { createGlobalStyle, css } from "styled-components";

//https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export default createGlobalStyle`
  * {
    margin    : 0;
    padding   : 0;
    outline   : 0;
    box-sizing: border-box;
    font-size : 16px;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body html #root {
    height : 100vh;
    width  : 100vw;
    padding: 16px;
    background: #C8C8C8;
  }

  @media(max-width: 768px) {

  }

  @media(max-width: 800px) {

  }

  @media(min-width: 1023px) {

  }
`;

export const Row = styled.div`
  display        : flex;
  flex-direction : row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items    : ${props => props.alignItems || 'flex-start'};
  margin         : ${props => props.margin || '0'};
  padding        : ${props => props.padding || '0'};
  ${props => props.height ? `height: ${props.height};` : ''}
  ${props => props.width ? `width: ${props.width};` : ''}
  ${props => props.overFlowY ? `overflow-y: ${props.overFlowY};` : ''}
`;

export const Column = styled.div`
  display        : flex;
  flex-direction : column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  ${props => props.height ? `height: ${props.height};` : ''}
  ${props => props.width ? `width: ${props.width};` : ''}
  ${props => props.overFlowY ? `overflow-y: ${props.overFlowY};` : ''}
`;

export const Centered = styled.div`
  height         : ${props => props.height || '100%'};
  width          : ${props => props.width || '100%'};
  display        : flex;
  justify-content: center;
  align-items    : center;
`;

export const Divider = styled.div`
  width     : 98%;
  height    : 1px;
  background: rgba(51,51,51,0.3);
  padding   : 0 20px;
  margin    : 16px 0 5px;
`;

export const Cover = styled.div`
  height             : 330px;
  width              : 230px;
  background-image   : url(${props => props.url});
  background-position: center;
  background-repeat  : no-repeat;
  background-size    : cover;
  cursor             : pointer;
`;

export const NoCover = styled.div`
  height          : 330px;
  width           : 230px;
  background-color: rgba(51,51,51,0.2);
  cursor          : pointer;
`;

const strategyFontSize = {
  "small": '14px',
  "simple": '16px',
  "large": '18px',
  "title": '30px',
}

export const Text = styled.div` 
  font-size  : ${props => strategyFontSize[props.fontSize || 'simple']};
  cursor     : ${props => props.cursor || 'auto'};
  font-weight: ${props => props.weight || 'normal'};
  text-align : ${props => props.align || 'left'};
  ${props => props.width ? `width: ${props.width};` : ''}
`;

export const AffixArea = styled.div`
  position       : static;
  bottom         : 100px;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;
  
  .float-button {
    display       : flex;
    flex-direction: column;
    align-items   : center;
    height        : fit-content;
    padding       : 8px 10px;
    border-radius : 16px;
    cursor        : pointer;
  }
  
  .float-description, .float-icon { 
    font-size: 20px;
    cursor   : pointer;
  }
`

export const SkeletonPulse = styled.div`
  display   : inline-block;
  height    : ${props => props.height || '100%'};
  width     : ${props => props.width || '100%'};
  background: ${props =>
    props.translucent
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation : pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;