document.addEventListener('DOMContentLoaded', () => {
    // Mostrar año actual en footer
    document.getElementById('fecha').textContent = new Date().getFullYear();

    // Definir los ejercicios disponibles
    const ejercicios = [
        {
            nombre: 'Ejercicio 1',
            ruta: 'pra1.html',     
            icono: '💬💬',
            descripcion: 'Muestra 2 mensajes'
        },
        {
            nombre: 'Ejercicio 2',
            ruta: 'ejer2.html',
            icono: '🎨',
            descripcion: 'Cambiar color de fondo'
        },
        {
            nombre: 'Ejercicio 3',
            ruta: 'pra2.html',
            icono: '📝',
            descripcion: 'Muestra un mensaje complejo'
        },
        {
            nombre: 'Ejercicio 4',
            ruta: 'pra3.html',
            icono: '📅',
            descripcion: 'Muestra los 12 meses del año'
        },
        {
            nombre: 'Ejercicio 5',
            ruta: 'pra4.html',
            icono: '➕',
            descripcion: 'Uso de operadores'
        },
        {
            nombre: 'Ejercicio 6',
            ruta: 'pra5.html',
            icono: '🔀',
            descripcion: 'Uso de estructura de control'
        },
		{
            nombre: 'Ejercicio 7',
            ruta: 'pra6.html',
            icono: '✖️❗',
            descripcion: 'Factorial de un numero'
        },
		{
            nombre: 'Ejercicio 8',
            ruta: 'pra7.html',
            icono: '🔢',
            descripcion: 'Numero par o impar'
        },
		{
            nombre: 'Ejercicio 9',
            ruta: 'pra8.html',
            icono: '🔤',
            descripcion: 'Infromacion sobre cadenas'
        },
		{
            nombre: 'Ejercicio 10 - Palindromo',
            ruta: 'ejer10_palindromo.html',
            icono: '🔄',
            descripcion: 'Verifica si una cadena es palindromo'
        },
		{
            nombre: 'Ejercicio 10 - RFC',
            ruta: 'ejer10_palindromo.html',
            icono: '🆔',
            descripcion: 'Verifica el formato de RFC'
        },
		{
            nombre: 'Ejercicio 11',
            ruta: 'ejer11.html',
            icono: '🌳',
            descripcion: 'DOM basico'
        },
		{
            nombre: 'Ejercicio 12',
            ruta: 'ejer12.html',
            icono: '🌳➕',
            descripcion: 'DOM basico y atributos'
        },
		{
            nombre: 'Ejercicio 13',
            ruta: 'ejer13.html',
            icono: '👁️‍🗨️',
            descripcion: 'DOM basico, muestra y oculta atributos'
        },
		{
            nombre: 'Ejercicio 14',
            ruta: 'ejer14.html',
            icono: '➕➖',
            descripcion: 'Añade o elimina lineas'
        },
		{
            nombre: 'Ejercicio 14_2',
            ruta: 'ejer14_LI.html',
            icono: '📋✏️',
            descripcion: 'Añade o elimina lineas'
        },
		{
            nombre: 'Ejercicio 15',
            ruta: 'ejer15.html',
            icono: '🧩',
            descripcion: 'Añade elementos html'
        },
		{
            nombre: 'Ejercicio 16',
            ruta: 'ejer16.html',
            icono: '✖️📊',
            descripcion: 'Calificar tablas de multiplicar'
        },
		{
            nombre: 'Ejercicio 17',
            ruta: 'ejer17.html',
            icono: '♈',
            descripcion: 'Mostrar signo zodiacal'
        },
		{
            nombre: 'Ejercicio 18',
            ruta: 'ejer18.html',
            icono: '🎭',
            descripcion: 'Manejo de CSS con javascript'
        },
		{
            nombre: 'Ejercicio 19',
            ruta: 'ejer19.html',
            icono: '🔛',
            descripcion: 'Adivinar un numero'
        },
		{
            nombre: 'Ejercicio 20',
            ruta: 'ejer20.html',
            icono: '🔍🆔',
            descripcion: 'Verificar identificacion'
        },
    ];

    const menuGrid = document.getElementById('menuGrid');
    
    ejercicios.forEach(ej => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-ejercicio';
        
        tarjeta.innerHTML = `
            <div class="icono">${ej.icono}</div>
            <h3>${ej.nombre}</h3>
            <p>${ej.descripcion}</p>
        `;
        
        //redirigir al hacer clic
        tarjeta.addEventListener('click', () => {
            window.location.href = ej.ruta;
        });
        
        menuGrid.appendChild(tarjeta);
    });
});