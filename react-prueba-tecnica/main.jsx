import { createRoot} from 'react-dom/client'; // me traigo el create root
import {App} from "./src/App";

const root = createRoot(document.getElementById('app')); // realizo un getElementById que es donde se renderiza la app
// root.render(<h1>Hello mundo</h1>)
root.render(<App />)