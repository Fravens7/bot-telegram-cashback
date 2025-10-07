window.onload = async function() {
    const webApp = window.Telegram.WebApp;
    webApp.expand();

    const promoListElement = document.getElementById('promo-list');
    const editModal = document.getElementById('edit-modal');
    const saveButton = document.getElementById('save-button');
    const displayNameInput = document.getElementById('display-name');
    const percentageInput = document.getElementById('percentage');
    const maxCapInput = document.getElementById('max-cap');

    promoListElement.innerHTML = '<p>Cargando datos...</p>';

    try {
        // Datos ficticios de promociones
        const promociones = [
            { display_name: 'Promoción 1', percentage: 0.10, max_cap: 1000 },
            { display_name: 'Promoción 2', percentage: 0.20, max_cap: 1500 },
        ];

        promoListElement.innerHTML = ''; // Limpiamos

        promociones.forEach((promo, index) => {
            // Crear el HTML de la promoción
            const promoDiv = document.createElement('div');
            promoDiv.className = 'promo-item';

            promoDiv.innerHTML = `
                <h3>${promo.display_name}</h3>
                <p><strong>Porcentaje:</strong> ${(promo.percentage * 100).toFixed(2)}%</p>
                <p><strong>Tope Máximo:</strong> ${promo.max_cap.toLocaleString()} BDT</p>
                <button onclick="editPromo(${index})">Editar</button>
            `;

            promoListElement.appendChild(promoDiv);
        });

        // Función para abrir el modal de edición
        window.editPromo = function(index) {
            const promo = promociones[index];
            displayNameInput.value = promo.display_name;
            percentageInput.value = promo.percentage * 100; // Convertir a porcentaje
            maxCapInput.value = promo.max_cap;

            // Mostrar el modal
            editModal.style.display = 'flex';

            // Guardar cambios
            saveButton.onclick = function() {
                promo.display_name = displayNameInput.value;
                promo.percentage = parseFloat(percentageInput.value) / 100; // Convertir de vuelta a decimal
                promo.max_cap = parseInt(maxCapInput.value);

                // Actualizar la lista
                promoListElement.innerHTML = ''; // Limpiar
                promociones.forEach((promo, index) => {
                    const promoDiv = document.createElement('div');
                    promoDiv.className = 'promo-item';

                    promoDiv.innerHTML = `
                        <h3>${promo.display_name}</h3>
                        <p><strong>Porcentaje:</strong> ${(promo.percentage * 100).toFixed(2)}%</p>
                        <p><strong>Tope Máximo:</strong> ${promo.max_cap.toLocaleString()} BDT</p>
                        <button onclick="editPromo(${index})">Editar</button>
                    `;
                    promoListElement.appendChild(promoDiv);
                });

                // Cerrar el modal
                editModal.style.display = 'none';
            };
        };

    } catch (error) {
        promoListElement.innerHTML =
}
};
