import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import ContactPage from "./ContactPage/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
