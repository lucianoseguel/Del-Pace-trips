function port() {
        // Selecciona el elemento con el id "texto"
    document.body.innerHTML = `
        <p>Nuevo texto para el párrafo.</p>
        <div>
            <h2>Nuevo texto para el encabezado.</h2>
            <p>Nuevo texto para otro párrafo.</p>
        </div>
        <button onclick="restaurarTexto()">Restaurar Texto</button>`;
}
    