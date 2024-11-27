"use client";

import MyNavigationItem from "./components/MyNavigationItem";
import MyProfileSection from "./components/MyProfileSection";
import MyFilterButton from "./components/MyFilterButton";
import { useState } from "react";

function App() {
  const [isActiveCategory,setActiveCategory] = useState("Category 1");
  return (
    <main>
      <aside className=" fixed bg-sky-700 w-48 h-screen py-8">
        <MyProfileSection id={1} username={"username"} role={"role"} />
        <section className="flex flex-col space-y-4 pl-8 pt-8">
          <MyNavigationItem name={"accueil"} />
          <MyNavigationItem name={"analytique"} />
          <MyNavigationItem name={"maintenance"} />
        </section>
      </aside>
      <main className=" justify-items-center">
        <article className="p-8 rounded-lg border-2 border-sky-900 w-3/4 ">
          <h1 className="uppercase font-bold text-sky-600 text-6xl">Management</h1>
          <aside className="p-4 rounded-xl shadow-lg w-48">
              <h2 className="text-sky-700 text-lg">Filtre</h2>
              <section className="flex flex-col space-y-4">
                  <h3>Cat&eacute;gorie</h3>
                  <section className="flex flex-col space-y-4">
                    <MyFilterButton 
                      title={"Categorie 1"}
                      isActive={isActiveCategory ==="Categorie 1"}
                      onClick={() =>setActiveCategory("Categorie 1")}
                    />
                  </section>
              </section>
          </aside>
        </article>
      </main>
    </main>
  );
}

export default App;
