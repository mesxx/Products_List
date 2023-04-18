import { Routes, Route } from "react-router-dom";

import NotFound from "./components/404";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:IdData" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
