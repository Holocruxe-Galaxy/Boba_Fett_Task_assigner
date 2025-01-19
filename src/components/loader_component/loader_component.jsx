import {MoonLoader} from "react-spinners";

import "./index.css";

export default function LoaderComponetn() {
  return (
    <div className='loader-container'>
      <MoonLoader color='#ffffff' size={50} />
      <h1 className='loader-text'>La IA está analizando la incidencia</h1>
    </div>
  );
}
