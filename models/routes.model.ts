export const Routes = {
    CHARACTER : {
        path:"information/character",
        name:"Characters",
    },
    LOCATION : {
        path:"information/location",
        name:"Locations",
    },
    HOME : {
        path:"/",
        name:"Home",
    }
}

export interface Route{
    path: string,
    name: string,
}