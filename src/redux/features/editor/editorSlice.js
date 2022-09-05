import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: `import Editor from "../Editor";
  import { AppContainer, HeaderContainer } from "./styles";
  
  function App() {
    return (
      <>
        <AppContainer>
          <HeaderContainer>{\`</> Snippet\`}</HeaderContainer>
          <Editor></Editor>
        </AppContainer>
      </>
    );
  }
  
  export default App;`,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = editorSlice.actions;
export default editorSlice.reducer;
