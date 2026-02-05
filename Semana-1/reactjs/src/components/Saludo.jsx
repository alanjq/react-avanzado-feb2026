// Componente llamado saludo que va a mostrar un mensaje de saludo donde sea invocado
export function Saludo({nombre}) {
    
    // Devolver el componente
    return (
        <div className="componente saludo">
            <h2>Hola {nombre}!</h2>
        </div>
    )
}
