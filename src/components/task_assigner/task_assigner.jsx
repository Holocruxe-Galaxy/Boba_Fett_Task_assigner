import React, {useState} from "react";

// Importación de estilos
import "./index.css";
import SubmitFile from "../submit_file/submit_file";
import LoaderComponetn from "../loader_component/loader_component";

export default function TaskAssigner() {
  const [task, setTask] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className='task-assigner-container'>
      <SubmitFile setTask={setTask} setLoading={setLoading} />
      {loading && <LoaderComponetn />}
      {task && (
        <div className='ai_response_container'>
          <div className='ai-response-field-container'>
            <h1 className='ai-response-field-title'>
              Título de la incidencia:
            </h1>
            <div className='ai-response-field'>{task.title}</div>
          </div>
          <div className='ai-response-field-container'>
            <h1 className='ai-response-field-title'>
              Descripción de la incidencia:
            </h1>
            <div className='ai-response-field'>{task.description}</div>
          </div>
          <div
            style={{flexDirection: "row", gap: "8px"}}
            className='ai-response-field-container'
          >
            <h1 className='ai-response-field-title'>Redirigir a:</h1>
            <div
              style={{padding: "3px", marginTop: "5px"}}
              className='ai-response-field'
            >
              {task.team}
            </div>
          </div>
          <div
            style={{flexDirection: "row", gap: "8px"}}
            className='ai-response-field-container'
          >
            <h1 className='ai-response-field-title'>Tipo:</h1>{" "}
            <div
              style={{padding: "3px", marginTop: "5px"}}
              className='ai-response-field'
            >
              {task.type}
            </div>
          </div>
          <div className='ai-response-field-container'>
            <h1 className='ai-response-field-title'>Solución propuesta:</h1>
            <div className='ai-response-field'>{task.solution}</div>
          </div>
          {task.proyect && (
            <div className='ai-response-field-container'>
              <h1 className='ai-response-field-title'>Proyecto:</h1>
              <div className='ai-response-field'>{task.project}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
