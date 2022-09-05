import React, { useEffect } from "react";
import Prism from "prismjs";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentContainer,
  EditorContainer,
  TextareaContainer,
  DisplayCodeContainer,
} from "./styles";
import { setContent } from "../../redux/features/editor/editorSlice";

const Editor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.editor.content);

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <ContentContainer>
      <EditorContainer>
        <TextareaContainer
          spellCheck="false"
          onChange={(e) => dispatch(setContent(e.target.value))}
        />
        <DisplayCodeContainer>
          <code className={`language-javascript line-numbers`}>{content}</code>
        </DisplayCodeContainer>
      </EditorContainer>
    </ContentContainer>
  );
};

export default Editor;
