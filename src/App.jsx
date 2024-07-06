import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound404 />} />
          {/* * は、該当しないページ全て、という意味 */}
          {/* 【メモ】現場ではpath検索する  Ctrl + Shift + Fで。 */}
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;