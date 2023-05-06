import { Card, Navegator } from "@/components";
import { getLocations } from "./services";
import { Routes } from "@/models";

async function fetchLocations() {
    const response = getLocations();
    return response;
}

async function Locations (){
  const locations = await fetchLocations();
  return (
    <>
         <Navegator pathNames={[Routes.HOME,Routes.LOCATION]}/>
        {
            locations.map((location) => (<Card key={location.id} data={location}/>))
        }
    </>
  )
}

export default Locations
