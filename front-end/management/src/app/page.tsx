"use client";

import MyNavigationItem from "./components/MyNavigationItem";
import MyProfileSection from "./components/MyProfileSection";

function App() {
  return (
    <main>
      <aside className=" fixed bg-sky-700 w-48 h-screen py-8">
        <MyProfileSection id={1} username={"username"} role={"role"}/>
        <section className="flex flex-col space-y-4 pl-8 pt-8">
            <MyNavigationItem name={"accueil"}/>
            <MyNavigationItem name={"analytique"}/>
            <MyNavigationItem name={"maintenance"}/>
        </section>
      </aside>
    </main>
  );
}

export default App;
