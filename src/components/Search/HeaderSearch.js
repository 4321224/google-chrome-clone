import React, { useEffect, useState } from "react";
import { recognition } from "../../api/VoiceSearch";
import VoiceSearchBox from "../HomeScreen/VoiceSearchBox";
import "./HeaderSearch.css";

const HeaderSearch = ({ searchTerm, setSearch }) => {
  const [term, setTerm] = useState("");
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);
  const [voiceText, setVoiceText] = useState("");

  useEffect(() => {
    setTerm(searchTerm);
  }, []);
  const clearVoiceSearch = () => {
    setIsVoiceSearch(false);
    recognition.stop();
  };
  const openVoiceSearch = () => {
    setIsVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      setVoiceText(voiceText + transcript);
      setTerm(voiceText + transcript);
      setSearch(voiceText + transcript);
    };
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
  };
};

export default HeaderSearch;
