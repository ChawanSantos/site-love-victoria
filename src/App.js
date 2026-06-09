import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValentinePage from "@/pages/ValentinePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ValentinePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
