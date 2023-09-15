import React from "react";
import { languages } from "./lang";
import { setLang } from "../../redux/features/editor/editorSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const Dropdown = () => {
  const Dispatch = useDispatch();
  return (
    <select onChange={(e) => Dispatch(setLang(e.target.value))}>
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
