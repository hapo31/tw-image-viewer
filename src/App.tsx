import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Top from "./screens/Top/Top";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }>
        <Route index element={<Top />} />
        <Route path="likes" element={<Top />} />
        <Route path="bookmarks" element={<Top />} />
        <Route path="config" element={<Top />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
