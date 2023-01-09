
import { Route, Routes} from "react-router-dom";
import routes from "./routes";

function App() {
    return <>
        <Routes>
            {routes.map(({ path, element }) =>
                <Route key={path} path={path} element={element}></Route>
            )}
        </Routes>
    </>;
}

export default App;