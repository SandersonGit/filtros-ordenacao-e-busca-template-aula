import React from "react";
import { Container } from "./styles";

const Header = ({id, setId, name, setName}) => {

  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const receberId =(event) =>{
    setId(event.target.value)
  }

  const receberName =(event)=>{
    setName(event.target.value)
  }

  return (
    <Container>
      <input type="number" 
      placeholder="Buscar por id" 
      onChange={receberId}
      value={id}/>

      <input type="text" 
      placeholder="Buscar por nome" 
      onChange={receberName}
      value={name}/>
      
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
