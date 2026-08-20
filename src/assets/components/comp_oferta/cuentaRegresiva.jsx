import{useState, useEffect} from "react";

function CuentaRegresiva({fechaLimite}) {
    const [tiempoRestante, setTiempoRestante] = useState({});
    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date().getTime();
            const limite = new Date(fechaLimite).getTime();
            const diferencia = limite - ahora;

        if (diferencia <= 0){
            clearInterval(intervalo);
            setTiempoRestante({terminado: true});
        } else {
            setTiempoRestante({
                dias: Math.floor(diferencia / (1000*60*60*24)),
                horas: Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60)),
                minutos: Math.floor((diferencia % (1000*60*60)) / (1000*60)),
                segundos: Math.floor((diferencia %(1000*60)) / 1000),
            });
        }
    }, 1000);
        return () => clearInterval(intervalo);
}, [fechaLimite]);


        if (tiempoRestante.terminado){
            return <p className="ofertaExpirada">Oferta Finalizada</p>;
        }
        return(
            <div className="contador">
                <div className="cajaContador">
                    <span className="numero">{tiempoRestante.dias ?? "00"}</span>
                    <span className="label">Días</span>
                </div>
                <div className="cajaContador">
                    <span className="numero">{tiempoRestante.horas ?? "00"}</span>
                    <span className="label">Horas</span>
                </div>
                 <div className="cajaContador">
                    <span className="numero">{tiempoRestante.minutos ?? "00"}</span>
                    <span className="label">Minutos</span>
                </div>
                 <div className="cajaContador">
                    <span className="numero">{tiempoRestante.segundos ?? "00"}</span>
                    <span className="label">Segundos</span>
                </div>
            </div>
        );
}

export default CuentaRegresiva;
