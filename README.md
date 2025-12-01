Weather App – Práctica de useEffect y Asincronía en React

Este proyecto consiste en una pequeña aplicación de clima que permite consultar el pronóstico extendido de una ciudad utilizando la API 5 Day / 3 Hour Forecast de OpenWeather. A partir del enunciado del ejercicio, esto es lo que se practicó y lo que se aprendió durante su desarrollo.

🎯 Objetivo del ejercicio

El objetivo principal fue reforzar el uso de useEffect, la asincronía en React y la manipulación de datos provenientes de APIs externas. Para ello, se creó una interfaz que permite:

    • Mostrar el pronóstico extendido de una ciudad.

    • Renderizar la información por días y por tramos de 3 horas.

    • Buscar el clima de una ciudad ingresada por el usuario.

🧩 Componentes trabajados

WeatherList

    • Recorre la lista de días recibidos desde la API.

    • Muestra el pronóstico extendido agrupado por fecha.

    • Cada ítem representa un día del pronóstico.

WeatherCard

    • Muestra las previsiones del clima de las próximas horas de un día.

    • Contiene:

        • Hora del pronóstico

        • Temperatura

        • Descripción del clima (clear, clouds, rain, etc.)

    • Permite practicar el renderizado de listas y props.


🔍 Funcionalidades implementadas

✔ Renderizado inicial

    • Por defecto se muestra el clima de Madrid al cargar la página por primera vez.

✔ Búsqueda de ciudades

    • Se implementó un formulario con input + button.

    • Al ingresar una ciudad y hacer clic, se actualizan los datos usando la API.

✔ useEffect + Fetch

    • Se utilizó useEffect para ejecutar peticiones asíncronas:

        • En el primer render (carga inicial)

        • Al cambiar la ciudad buscada

✔ Manejo de keys con UUID

    • Se usó el paquete UUID para generar keys únicas en listas y evitar problemas en el renderizado.


⭐ Extras trabajados
EXTRA 1: Iconos / Imágenes del clima

    • Se añadió una imagen representativa del estado del tiempo en cada día usando los iconos provistos por la API.

EXTRA 2: Geolocalización

    • En lugar de usar Madrid por defecto, se intentó obtener la ubicación real del usuario mediante navigator.geolocation.

    • Si el usuario acepta, la app carga el pronóstico de su ciudad actual.

📚 Qué aprendí con este ejercicio

    • Cómo funciona useEffect y en qué casos se dispara.

    • Cómo realizar peticiones asíncronas en React de forma correcta.

    • Buenas prácticas para manejar efectos dependientes de variables.

    • Cómo trabajar con formularios controlados.

    • Cómo estructurar componentes que comparten datos entre sí.

    • Cómo transformar los datos crudos de una API para adaptarlos a la UI (ej: agrupar pronósticos por fecha).

    • Cómo utilizar UUID para keys dentro de listas.

    • Cómo integrar geolocalización del navegador dentro de un flujo de carga inicial.

    • Mejores prácticas de diseño y separación entre lógica, UI y componentes.