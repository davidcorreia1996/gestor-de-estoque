import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StockContextProvider } from "./assets/Contexts/StockContext";
import './styles.css/index.css'

export default function App() {
  return (
    <StockContextProvider>
    <RouterProvider router={router} />
    </StockContextProvider>
  )
}
