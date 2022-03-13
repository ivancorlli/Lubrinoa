import { HashRouter, Routes, Route } from "react-router-dom";
import Notification from "../components/organisms/Notification";
import InProgress from "../components/templates/InProgress";
import NewServicesTemplate from "../components/templates/products/NewServicesTemplate";
import RecuperarTemplate from "../components/templates/RecuperarTemplate";
import { useNotification } from "../hooks/useNotification";
import Clientes from "../pages/clients/Clientes";
import ClientProfile from "../pages/clients/ClientProfile";
import Clients from "../pages/clients/Clients";
import NewClient from "../pages/clients/NewClient";
import NewVehicle from "../pages/clients/NewVehicle";
import Vehicles from "../pages/clients/Vehicles";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import AddMany from "../pages/products/AddMany";
import Categorias from "../pages/products/Categorias";
import EditCategory from "../pages/products/EditCategory";
import EditProduct from "../pages/products/EditProduct";
import { Filtros } from "../pages/products/Filtros";
import NewCategory from "../pages/products/NewCategory";
import NewProduct from "../pages/products/NewProduct";
import Products from "../pages/products/Products";
import Serivicios from "../pages/products/Serivicios";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const AppRouter = () => {
  const { message } = useNotification();
  return (
    <HashRouter>
      {message && <Notification bg={message?.status} message={message?.msg} />}
      <Routes>
        <Route exact path="recuperar" element={<RecuperarTemplate />} />
        <Route
          exact
          path="login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        {/*Dashboard*/}
        <Route
          exact
          path="/"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        >
          <Route index element={<InProgress />} />
          {/* Ventas */}
          <Route path="ventas" element={<InProgress />} />
          {/* Clientes */}
          <Route exact path="clientes" element={<Clients />}>
            <Route index element={<Clientes />} />
            <Route exact path="new" element={<NewClient />} />
            <Route exact path="vehiculos/new" element={<NewVehicle />} />
            <Route exact path="vehiculos" element={<Vehicles />} />
            <Route exact path=":clientID" element={<ClientProfile />} />
          </Route>
          {/* Productos */}
          <Route exact path="productos" element={<Products />}>
            <Route index element={<Filtros />} />
            <Route exact path="new" element={<NewProduct />} />
            <Route exact path="add-many" element={<AddMany/>} />
            <Route exact path="edit-many" element={<h2>Editar Varios</h2>} />
            <Route exact path=":ProductID" element={<EditProduct />} />
            <Route exact path="servicios" element={<Serivicios/>} />
            <Route exact path="servicios/new" element={<NewServicesTemplate/>} />
            <Route exact path="servicios/:serviceId" element={<Serivicios/>} />
            <Route exact path="categorias/new" element={<NewCategory />} />
            <Route exact path="categorias/:categoryId" element={
            <EditCategory/>}/>
            <Route exact path="categorias" element={<Categorias />} />
          </Route>
          {/* Configuracion */}
          <Route path="config" element={<InProgress />} />
          <Route path="mensajeria" element={<InProgress />} />
        </Route>
        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
