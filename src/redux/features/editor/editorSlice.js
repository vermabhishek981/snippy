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
  lang: `javascript`,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setContent: (state, action) => {
      let text = action.payload;
      if (text[text.length - 1] === "\n") {
        text += " ";
      }
      state.content = text
        .replace(new RegExp("&", "g"), "&")
        .replace(new RegExp("<", "g"), "<");
    },
    setLang: (state, action) => {
      state.lang = action.payload;
      console.log(state.lang);
    },
  },
});

export const { setContent, setLang } = editorSlice.actions;
export default editorSlice.reducer;
