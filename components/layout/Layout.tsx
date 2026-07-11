import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}