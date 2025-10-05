window.onload = async function() {
    const webApp = window.Telegram.WebApp;
    webApp.expand();

    const promoListElement = document.getElementById('promo-list');
    promoListElement.innerHTML = '<p>Cargando datos desde Supabase...</p>';

    try {
        const response = await fetch("https://divine-frost-e362.fraven-slazo.workers.dev/");
        const promociones = await response.json();

        promoListElement.innerHTML = ''; // Limpiamos

        promociones.forEach(promo => {
            // Mostrar "por niveles" si no hay porcentaje general
            const porcentajeTexto = promo.percentage !== null 
                ? `${(promo.percentage * 100).toFixed(2)}%`
                : '📊 Por niveles VIP';

            const topeTexto = promo.max_cap 
                ? `${promo.max_cap.toLocaleString()} BDT`
                : 'Ilimitado';

            const promoDiv = document.createElement('div');
            promoDiv.className = 'promo-item';

            promoDiv.innerHTML = `
                <h3>${promo.display_name}</h3>
                <p><strong>Porcentaje:</strong> ${porcentajeTexto}</p>
                <p><strong>Tope Máximo:</strong> ${topeTexto}</p>
                <button>Editar</button>
            `;

            promoListElement.appendChild(promoDiv);
        });

    } catch (error) {
        promoListElement.innerHTML = '<p>Error al cargar promociones.</p>';
        console.error("Error al traer datos:", error);
    }
};
