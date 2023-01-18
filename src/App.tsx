import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Top from "./screens/Top/Top";

function App() {
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
