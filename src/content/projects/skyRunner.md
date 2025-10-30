---
name: 'Sky Runner 🏆'
description: 'Un juego de plataformas 2D desarrollado en Pygame como proyecto académico para la UTN. ¡Corre, salta y dispara!'
tags: ['python', 'pygame', 'game development', 'platformer', '2d game', 'university project']
image: '../../../public/static/skyRunner-banner.webp' 
link: 'https://github.com/matibbaez/skyRunner'
startDate: '2023-08-15' 
endDate: '2023-12-15' 
---

# 🏆 Sky Runner: ¡Conquistá los Cielos! ![Stars](https://img.shields.io/github/stars/matibbaez/skyRunner?style=social)

¡Buenas! Con mucha emoción les presento **"Sky Runner"**, un juego de plataformas 2D que armé con [Pygame](https://www.pygame.org/) 🐍🎮. Este proyecto fue mi **Trabajo Práctico para el 2do parcial de Laboratorio** en la Tecnicatura Universitaria en Programación de la UTN.

¡Prepárate para correr, saltar y disparar a través de niveles desafiantes, esquivar obstáculos y enfrentarte a enemigos para lograr la puntuación más alta! ✨

---

## ✨ ¿De Qué Va Sky Runner?

**Sky Runner** te pone en control de un ágil personaje que debe navegar por peligrosos cielos. Es un clásico plataformero donde tus reflejos y habilidad son clave. Recoge monedas, derrota enemigos y enfréntate a jefes mientras intentas superar tu propio récord.

El juego fue una excelente oportunidad para aplicar conceptos clave de programación orientada a objetos y familiarizarme más con el desarrollo de videojuegos usando Pygame.

---

## 🌟 Características Implementadas

🔧 **Programación Orientada a Objetos:**
    * **Clases:** Código organizado con clases como `Player`, `Enemy`, `Boss` y `Level`.
    * **Herencia:** Reutilización de código creando subclases (ej: `Boss` hereda de `Enemy`).
🖼️ **Gráficos y Animaciones:**
    * **Sprites de Pygame:** Manejo eficiente de entidades, carga de imágenes y animaciones básicas.
    * **Detección de Colisiones:** Fundamental para la jugabilidad.
🕹️ **Gameplay:**
    * **Bucles de Juego:** Lógica principal dentro de la clase `Level` para actualizar y dibujar el juego.
    * **Manejo de Eventos:** Respuesta a las acciones del jugador (movimiento, pausa).
    * **Sistema de Puntuación:** Suma puntos al recolectar monedas.
    * **Enemigos y Jefe Final:** Desafíos variados.
🔊 **Sonido:**
    * **Música de Fondo y Efectos:** Uso de `pygame.mixer` para una experiencia más inmersiva.
💾 **Persistencia:**
    * **Guardado de Puntuación:** El puntaje más alto se guarda en un archivo `JSON`.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** [Python](https://www.python.org/) 🐍
* **Librería Principal:** [Pygame](https://www.pygame.org/) 🎮 (para gráficos, sonido, eventos, etc.)
* **Formato de Datos:** JSON (para guardar puntuaciones)

---

## 📚 Instalación y Ejecución

¿Querés probar Sky Runner? ¡Seguí estos pasos!

### Prerrequisitos

* [Python](https://www.python.org/) 3.x instalado.
* [Pip](https://pip.pypa.io/en/stable/installation/) (generalmente viene con Python).
* [Git](https://git-scm.com/).

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/matibbaez/skyRunner.git](https://github.com/matibbaez/skyRunner.git) 
    cd sky-runner
    ```
2.  **Crea un entorno virtual (recomendado):**
    ```bash
    python -m venv venv
    source venv/bin/activate  
    ```
3.  **Instala las dependencias:**
    ```bash
    pip install -r requirements.txt
    # O si no tenés requirements.txt: pip install pygame
    ```
4.  **¡A Jugar!**
    ```bash
    python src/main.py  
    ```

---

## 🎬 Gameplay y Código Fuente

* 🎬 **Mirá el Gameplay:** [https://www.youtube.com/watch?v=SBz8_hA5Buc](https://www.youtube.com/watch?v=SBz8_hA5Buc)
* 👉 **Explorá el Repositorio:** [https://github.com/matibbaez/skyRunner](https://github.com/matibbaez/skyRunner)

---

## 🤝 Contribuciones

Este fue un proyecto académico, pero si encontrás bugs o tenés ideas copadas, ¡abrí un *issue*!

---

## 📄 Licencia

Probablemente bajo Licencia MIT o similar (revisá el repo). Creado como parte de mis estudios en la UTN.

---

## 💬 Contacto

¿Consultas sobre el juego o queres charlar de desarrollo?

📧 Email: [mfbcaneda@gmail.com](mailto:mfbcaneda@gmail.com) 
🔗 GitHub: [matibbaez](https://github.com/matibbaez)

---

## ⭐ ¡Si te Copó, Dejá tu Estrella!

Si te gustó el proyecto o te sirvió el código, ¡una ⭐ en GitHub me ayuda un montón!

---

## 🙏 Agradecimientos

A los profes de Laboratorio de la UTN por la guía y a la comunidad de Pygame por la excelente librería.