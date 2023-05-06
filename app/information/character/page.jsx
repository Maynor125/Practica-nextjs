
import { Card, Navegator } from "@/components";
import { getCharacters } from "./services"
import { Routes } from "@/models";
import styled from "styled-components";

async function fetchCharacter() {
    const response = await getCharacters();
    return response;
}



async function Character  (){
    const characters = await fetchCharacter();
  return (
    <>
        <Navegator pathNames={[Routes.HOME,Routes.LOCATION]}/>
        {
            characters.map((character) => (<Card key={character.id} data={character}/>))
        }
    </>
  )
}

export default Character