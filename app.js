// Esta función se ejecuta cuando el archivo HTML se carga por completo.
window.onload = function() {
    // Inicializa el Web App de Telegram
    const webApp = window.Telegram.WebApp;
    
    // Expande la Web App para que ocupe toda la pantalla
    webApp.expand();

    // --- DATOS DE PRUEBA ---
    // Por ahora, usaremos datos fijos para ver cómo se ve.
    // Más adelante, los cargaremos desde Supabase.
    const promocionesDePrueba = [
        { id: 1, nombre: '🎰 Slots', porcentaje: '8%', tope: 'Ilimitado' },
        { id: 2, nombre: '🏈 Sports', porcentaje: '6.88%', tope: '25,000 BDT' },
        { id: 3, nombre: '🚀 Crash', porcentaje: '10.88%', tope: '70,000 BDT' }
    ];

    const promoListElement = document.getElementById('promo-list');
    promoListElement.innerHTML = ''; // Limpiamos el "Cargando..."

    // Creamos un elemento HTML para cada promoción
    promocionesDePrueba.forEach(promo => {
        const promoDiv = document.createElement('div');
        promoDiv.className = 'promo-item';
        
        promoDiv.innerHTML = `
            <h3>${promo.nombre}</h3>
            <p><strong>Porcentaje:</strong> ${promo.porcentaje}</p>
            <p><strong>Tope Máximo:</strong> ${promo.tope}</p>
            <button>Editar</button>
        `;
        
        promoListElement.appendChild(promoDiv);
    });
};
