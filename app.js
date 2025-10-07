window.onload = async function() {
    const webApp = window.Telegram.WebApp;
    webApp.expand();

    const promoListElement = document.getElementById('promo-list');
    promoListElement.innerHTML = '<p>Cargando datos...</p>';

    // Datos ficticios de prueba
    const promociones = [
        {
            display_name: '🎰 Slots Especial',
            percentage: 0.15,
            max_cap: 1000
        },
        {
            display_name: '💎 Casino Premium',
            percentage: null,
            max_cap: 5000
        },
        {
            display_name: '🛩️ Crash Rápido',
            percentage: 0.20,
            max_cap: null
        },
        {
            display_name: '🏈 Sports Vip',
            percentage: null,
            max_cap: null
        }
    ];

    promoListElement.innerHTML = ''; // Limpiamos el contenido

    if (promociones.length === 0) {
        promoListElement.innerHTML = '<p class="error-message">No se encontraron promociones disponibles.</p>';
        return;
    }

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

        promoDiv.querySelector('button').addEventListener('click', () => {
            alert(`Editar la promoción: ${promo.display_name}`);
            // Aquí podrías implementar la lógica para editar la promoción (como abrir un modal o formulario)
        });

        promoListElement.appendChild(promoDiv);
    });

};
