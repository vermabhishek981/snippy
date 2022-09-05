import Editor from "../Editor";
import { AppContainer, HeaderContainer } from "./styles";

function App() {
  return (
    <>
      <AppContainer>
        <HeaderContainer>{`</> Snippet`}</HeaderContainer>
        <Editor></Editor>
      </AppContainer>
    </>
  );
}

export default App;
