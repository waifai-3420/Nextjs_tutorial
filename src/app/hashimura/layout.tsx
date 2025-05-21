import React from "react";

export default function HashimuraLayout({children}: {
    children: React.ReactNode
}){
 return (
    <>
        <p>hashi outer</p>
        {children}
    </>
 );
}