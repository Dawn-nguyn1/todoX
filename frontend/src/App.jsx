import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
