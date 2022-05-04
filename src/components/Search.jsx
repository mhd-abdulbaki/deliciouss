import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from "../styles/styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search for something delicious"
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
};

export default Search;
