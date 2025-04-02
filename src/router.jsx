import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItems";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/LayoutItems";
import Teste from "./pages/items/Teste";



//Essa é toda estrutura de rotas
// localhost:3000/
// localhost:3000/items
const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        { index: true, element: <Home /> },
        {
          path: "items",
          element: <ItemsLayout />,
          children: [
            { index: true, element: <ListItems />},
            { path: "new", element: <CreateItem />},
            { path: ":id", element: <ShowItem />},
            { path: ":id/update", element: <UpdateItem />},
            { path: "teste", element: <Teste />},
            ]
        }
    ]
}])

export default router