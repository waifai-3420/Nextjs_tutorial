import React from "react";

export default function HashimuraLayout({children}: {
    children: React.ReactNode
}){
 return (
    <>
        <p className="text-6xl text-blue-600">Welcome to 五目並べ</p>
        {children}
    </>
 );
}