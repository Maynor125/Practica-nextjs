import { Navegator } from "@/components/navegation";
import { Routes } from "@/models";
import Link from "next/link";


export default function Home() {
  return (
   <div className='container'>
     <h1>Welcome to Rick and Morty app</h1>
     <h2>What do you want to see ?</h2>
     <Navegator pathNames={[Routes.CHARACTER,Routes.LOCATION]} />
   </div>
  )
}
