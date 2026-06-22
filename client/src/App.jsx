import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Colleges from "./pages/Colleges";
import SavedColleges from "./pages/SavedColleges";
import AddCollege from "./pages/AddCollege";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/colleges"
          element={<Colleges />}
        />

        <Route
          path="/saved"
          element={
            <SavedColleges />
          }
        />
        <Route
            path="/add-college"
            element={<AddCollege />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;