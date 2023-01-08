import Header from "./Header";
import React, { useState } from "react";
import { recognition } from "../../api/VoiceSearch";
function Home() {
  const Home = ({ setSearch }) => {
    const [term, setTerm] = useState("");

    const [isVoiceSearch, setIsVoiceSearch] = useState(false);
    const [voiceText, setVoiceText] = useState("");
    const clearTerm = () => {
      setTerm("");
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        /^[a-zA-Z0-9].*/.test(term) ||
        /^[a-zA-Z0-9]+[" "]/.test(term) ||
        /^[" "]+[a-zA-Z0-9]/.test(term)
      ) {
        setSearch(term.trim());
      }
    };
    const handleSearch = () => {
        
    }
  };
  return (
    <div>
      <Header />
    </div>
  );
}
export default Home;
