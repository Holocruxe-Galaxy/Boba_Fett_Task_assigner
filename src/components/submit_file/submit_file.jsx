import React, { useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";

// Importación de estilos
import "./index.css";

export default function SubmitFile({ setTask }) {
  const [fileName, setFileName] = useState("Seleccionar un archivo");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    if (fileName !== "Seleccionar un archivo") {
      setLoading(true);
      let file = document.getElementsByClassName("input-file")[0].files[0];
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await fetch(
          "https://lur2cbie3b.execute-api.us-east-1.amazonaws.com/get_response",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setTask(result);
          setLoading(false);
          console.log("Archivo subido exitosamente:", result);
        } else {
          console.error("Error al subir el archivo.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  };
  return (
    <div className="submit-file-container">
      <img
        className="logo-ia-svg"
        src="/logo_ia_interactive_w.png"
        alt="IA interactive"
      />
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          ref={inputRef}
          className="input-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {fileName && (
          <span
            style={{ cursor: "pointer" }}
            onClick={handleIconClick}
            className="file-name"
          >
            {fileName}
          </span>
        )}{" "}
        <FiPaperclip
          color="white"
          size={20}
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        />
      </div>

      <button
        disabled={loading || fileName === "Seleccionar un archivo"}
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="submit-button"
      >
        Submit doc
      </button>
    </div>
  );
}
