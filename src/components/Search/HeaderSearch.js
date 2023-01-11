import React, { useEffect, useState } from "react";
import { recognition } from "../../api/VoiceSearch";
import VoiceSearchBox from "../HomeScreen/VoiceSearchBox";
import "./HeaderSearch.css";

const HeaderSearch = ({ searchTerm, setSearch }) => {
  const [term, setTerm] = useState("");
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);
  const [voiceText, setVoiceText] = useState(false)
  useEffect(() => {
    setTerm(searchTerm);
  }, []);
  const clearVoiceSearch = () => {
    setIsVoiceSearch(false);
    recognition.stop();
  };
  const clearTerm = () => {
    setTerm("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const handleSearch = () => {
    if (
        searchTerm !== term.trim() &&
        (/^[a-zA-Z0-9].*/.test(term.trim()) ||
          /^[a-zA-Z0-9]+[" "]/.test(term.trim()) ||
          /^[" "]+[a-zA-Z0-9]/.test(term.trim()))
      ) {
        setSearch(term.trim());
      }
  }

  return (
    <>
   {isVoiceSearch ? (
    <VoiceSearchBox voiceText={voiceText} clearVoiceSearch={clearVoiceSearch} openVoiceSearch={openVoiceSearch}
   )}
    </>
  )
};

export default HeaderSearch;
