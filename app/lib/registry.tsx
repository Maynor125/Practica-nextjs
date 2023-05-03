'use client';

import React,{useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager} from 'styled-components'

export default function StyledComponentRegistry({
   children,
}:{
   children: React.ReactNode;
})
{
    const [styledComponentStyleSheet] = useState(()=> new ServerStyleSheet());

    useServerInsertedHTML(()=>{
        const styles = styledComponentStyleSheet.getStyleElement();
        styledComponentStyleSheet.instance.clearTag();
        return <>{styles}</>
    })

    if (typeof window !== "undefined") return <>{children}</>

    return(
        <StyleSheetManager sheet={styledComponentStyleSheet.instance}>
           {children}
        </StyleSheetManager>
    )
}