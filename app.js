window.onload = async function () {
    const webApp = window.Telegram.WebApp;
    webApp.expand();

    const promoListElement = document.getElementById('promo-list');
    promoListElement.innerHTML = '<p>Cargando promociones...</p>';

    const apiUrl = "https://divine-frost-e362.fraven-slazo.workers.dev/";

    try {
        const response = await fetch(apiUrl);
        const promociones = await response.json();

        // Limpiamos la lista
        promoListElement.innerHTML = '';

        // Recorremos los datos que vienen desde Supabase vía Worker
        promociones.forEach(promo => {
            const porcentaje = promo.percentage !== null
                ? (promo.percentage * 100).toFixed(2) + '%'
                : 'Por niveles VIP';
            
            const tope = promo.max_cap !== null
                ? `${promo.max_cap.toLocaleString()} BDT`
                : 'Ilimitado';

            const promoDiv = document.createElement('div');
            promoDiv.className = 'promo-item';

            promoDiv.innerHTML = `
                <h3>${promo.display_name || promo.game_name}</h3>
                <p><strong>Porcentaje:</strong> ${porcentaje}</p>
                <p><strong>Tope Máximo:</strong> ${tope}</p>
                <button>Editar</button>
            `;

            promoListElement.appendChild(promoDiv);
        });

    } catch (error) {
        console.error("Error al cargar promociones:", error);
        promoListElement.innerHTML = '<p>Error al cargar promociones.</p>';
    }
};
