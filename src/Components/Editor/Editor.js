import React, { useEffect } from "react";
import Prism from "prismjs";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentContainer,
  EditorContainer,
  TextareaContainer,
  DisplayCodeContainer,
  FooterContainer,
  DownloadButton,
} from "./styles";
import { setContent } from "../../redux/features/editor/editorSlice";
import Dropdown from "./Dropdown";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const syncScroll = (e) => {
  const element = document.getElementById("display");
  element.scrollTop = e.scrollTop;
  element.scrollLeft = e.scrollLeft;
  console.log(e.scrollTop);
  console.log(element.scrollTop);
};

const generatePdf = async () => {
  console.log(`function called`);

  var data = document.getElementById("display");
  var doc = new jsPDF("l", "px");

  await html2canvas(data, { width: `1920`, height: "1080" }).then((canvas) => {
    doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1920, 1080);
  });
  const date = Date.now();
  doc.save(date);
};

const Editor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.editor.content);
  const lang = useSelector((state) => state.editor.lang);

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <ContentContainer>
      <EditorContainer>
        <TextareaContainer
          spellCheck="false"
          onInput={(e) => syncScroll(e.target)}
          onChange={(e) => dispatch(setContent(e.target.value))}
          onScroll={(e) => syncScroll(e.target)}
        />
        <DisplayCodeContainer id="display">
          <code className={`language-${lang} line-numbers`}>{content}</code>
        </DisplayCodeContainer>
      </EditorContainer>
      <FooterContainer>
        <DownloadButton onClick={generatePdf}>Download</DownloadButton>
        <Dropdown />
      </FooterContainer>
    </ContentContainer>
  );
};

export default Editor;
