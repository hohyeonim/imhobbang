"use client"
import Image from "next/image";
import Header from "../app/Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar isOpen={false} setIsOpen={undefined}>
      
      </Sidebar>
    </>
  );
}
