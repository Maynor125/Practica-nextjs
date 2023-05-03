import { Character } from "@/app/character/models";
import './card.css'
import Image from "next/image";
import { Location } from "@/app/location/models";
import { type } from "os";

export interface cardData{
  name: string,
  created:string,
  image?: string,
  type?: string,
}

interface Props{
    data:cardData;
}

function Card({data}:Props) {
  let formateddType =data.type;
  formateddType ||= "No type"
  return (
    <div className="card">
        <p>Name :{data.name}</p>
        <p>Type :{formateddType}</p>
        <p>Created :{data.created}</p>
        {
          data.image && (
            <img width="100" height="100" alt="Imagen" src={data.image} /> 
          )
        }
    </div>
  )
}

export default Card