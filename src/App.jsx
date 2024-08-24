import { BrowserRouter as RutasRollingPuppies } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import "./index.css";

function App() {
  return (
    <RutasRollingPuppies>
      <RoutesViews />
    </RutasRollingPuppies>
  );
}

export default App;
