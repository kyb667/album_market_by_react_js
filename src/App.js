import { Main } from "./components/Main";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
