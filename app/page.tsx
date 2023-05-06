import { Navegator } from "@/components/navegation";
import { Routes } from "@/models";
import Image from "next/image";
import imge from "../public/images/imgp.jpg"
import { imgBlur } from "./models/blurImg";
import Script from "next/script";
import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";

/*const Card = lazy(()=>import("../components/Card/Card"))*/
const Card = dynamic(()=> import("./../components/Card/Card"),{ssr:false} );

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando</div>}>
    {/* <Script
    onLoad={
      ()=>{
        console.log("Script Cargado")
      }
    }
    dangerouslySetInnerHTML={{
      __html:`document.body.style.background = "f0f0f0"`,
    }} /> */}
       <div className='container' style={{position:"relative"}}>
     <h1>Welcome to Rick and Morty app</h1>
     <h2>What do you want to see ?</h2>
     <Navegator pathNames={[Routes.CHARACTER,Routes.LOCATION]} />
     <Image width="600" height="600" alt="Perron" src={imge} blurDataURL={imgBlur} placeholder="blur" priority/>
     </div>
    </Suspense>
  )
}
