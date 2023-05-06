
import cardStyledd from "./Card.module.css";
import Image from "next/image";
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
    <div className={cardStyledd.Card}>
        <p>Name :{data.name}</p>
        <p>Type :{formateddType}</p>
        <p>Created :{data.created}</p>
        {
          data.image && (
            <Image width="100" height="100" alt="Imagen" src={data.image} /> 
          )
        }
    </div>
  )
}

export default Card