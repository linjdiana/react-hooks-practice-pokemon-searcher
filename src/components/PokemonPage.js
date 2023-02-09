import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon))
  }, [])

  function updateSearchTerm(searchValue) {
    setSearchTerm(searchValue)
  }

  const filteredPokemon = pokemon.filter((card) => {
    const lowerCasePokemon = card.name.toLowerCase();
    const lowerCaseSearch = searchTerm.toLowerCase();
    return lowerCasePokemon.includes(lowerCaseSearch)
  });

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
      />
      <br />
      <PokemonCollection
        pokemon={filteredPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
