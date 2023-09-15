import styled from "styled-components";

export const ContentContainer = styled.div`
  display: block;
  position: relative;
  width: calc(100vw - 2rem);
  max-width: 70rem;
  margin: auto;
  background: #303030;
  font-size: 16px;
  font-family: "Roboto Mono", monospace;
  overflow: hidden;
`;

export const EditorContainer = styled.div`
  display: block;
  position: relative;
  height: 36rem;
  padding: 0px 2rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.6em;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    min-height: 10%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
  font-size: 40px;
  color: white;
  font-weight: 800;
  font-family: "Roboto Mono", monospace;
  background: #424242;
`;

const styles = `
font-size: 16px;
font-family: "Roboto Mono", monospace;
text-shadow: none;
white-space: pre-wrap !important;
word-spacing: normal;
overflow-wrap: break-word;
word-break: keep-all;
line-height: 1.5;
tab-size: 4;
`;

export const TextareaContainer = styled.textarea`
  z-index: 10;
  position: absolute;
  min-height: 100%;
  width: calc(100% - 4rem);
  padding: 2rem 2rem 0;
  resize: none;
  color: #b7c5d3;
  overflow: hidden;

  ${styles}

  /* Hide the textarea content */
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-text-fill-color: transparent;

  &::selection {
    text-shadow: none;
    background-color: red;
  }
`;

export const DisplayCodeContainer = styled.pre`
  display: block;
  position: relative;
  min-height: 100%;
  padding: 2rem 2rem 0;
  overflow: auto;
  background: #303030;
  ${styles} & > code {
    display: block;
    ${styles}
  }
`;
export const DownloadButton = styled.button`
  width: 14em;
  height: 2.5em;
  background: transparent;
  color: white;
  font-size: 0.4em;
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #323232;
  }
`;
