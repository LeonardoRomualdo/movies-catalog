import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import store from "../../store";
import Header from "../Header";

const Wrapper = styled.div`
  display       : flex;
  flex-direction: column;
  height        : 99vh;
  width         : 99vw;
  overflow      : hidden;
`;

const Core = ({
  children
}) => {

  return <Provider store={store}>
    <ThemeProvider theme={{}}>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </ThemeProvider>
  </Provider>
}

export default Core;