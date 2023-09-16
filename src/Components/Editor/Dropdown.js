import React from "react";
import { languages } from "./lang";
import { setLang } from "../../redux/features/editor/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const Dropdown = () => {
  const Dispatch = useDispatch();
  const lang = useSelector((state) => state.editor.lang);
  console.log(lang);
  return (
    <select value={lang} onChange={(e) => Dispatch(setLang(e.target.value))}>
      {languages.map((lang, index) => {
        return (
          <option key={index} value={lang.tag}>
            {lang.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
