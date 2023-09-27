import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Tasks = lazy(() => import("./pages/Tasks/Tasks"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Tasks />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
