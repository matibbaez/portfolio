---
name: 'Views 🎧'
description: 'Sistema de Autoservicio con gestión de productos y ventas (Frontend Cliente + Backend Admin).'
tags: ['nodejs', 'express', 'sequelize', 'mysql', 'html', 'css', 'javascript', 'ejs', 'bootstrap']
image: '../../../public/static/views-banner.webp' 
link: 'https://github.com/matibbaez/views'
startDate: '2025-03-05' 
endDate: '2025-06-15'
---

# 🎶 Views ![Stars](https://img.shields.io/github/stars/matibbaez/views?style=social)

👋 Sistema de **Autoservicio – Gestión de Productos y Ventas**, desarrollado como Trabajo Práctico Integrador para la materia Programación III.

---

## 🚀 Resumen del Proyecto

**Views** es un sistema de autoservicio compuesto por un **frontend** para el cliente y un **backend** con panel administrativo. Ambos se comunican a través de una **API REST**, ofreciendo una experiencia completa tanto para el usuario final como para el administrador.

---

## 🌟 Funcionalidades

✅ **Interfaz responsive** (desktop y mobile).
✅ **Dos tipos de productos** personalizables.
✅ **Compra con carrito** y generación de **ticket en PDF**.
✅ **Login seguro** para administración.
✅ **ABM completo** de productos (Alta, Baja, Modificación).
✅ **Alta y baja lógica** de productos.
✅ **Paginación** en listados.
✅ **Cambio de tema** (claro / oscuro) en frontend y backend.
✅ **Registro y visualización** de ventas.
✅ **Reportes** (productos más vendidos, ventas más caras).
✅ **Carga de imágenes** para productos (Multer).
✅ **Encriptación** de contraseñas (Bcrypt).
✅ Manejo de **sesiones** (Express-session).

---

## 🛠️ Tecnologías Utilizadas

-   **Frontend:**
    -   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    -   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    -   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    -   [EJS](https://ejs.co/) (Embedded JavaScript templates)
    -   [Bootstrap](https://getbootstrap.com/)
-   **Backend:**
    -   [Node.js](https://nodejs.org/)
    -   [Express](https://expressjs.com/)
    -   [Sequelize](https://sequelize.org/) (ORM)
    -   [Multer](https://github.com/expressjs/multer) (Manejo de archivos)
    -   [Bcrypt](https://www.npmjs.com/package/bcrypt) (Hashing de contraseñas)
    -   [Express-session](https://www.npmjs.com/package/express-session)
-   **Base de Datos:**
    -   [MySQL](https://www.mysql.com/) (o compatible como MariaDB)
-   **Otros:**
    -   Generación de PDF (Librería a especificar, ej: `jspdf`, `pdfkit`)

---

## 📚 Configuración e Instalación

### Prerrequisitos

Asegúrate de tener instalado:

-   [Node.js](https://nodejs.org/) (incluye npm)
-   [Git](https://git-scm.com/)
-   Un servidor de base de datos [MySQL](https://www.mysql.com/) (o similar) corriendo.

### Pasos de Instalación

1.  **Clonar el repositorio:**
    ```sh
    git clone [https://github.com/matibbaez/views.git](https://github.com/matibbaez/views.git)
    ```
2.  **Navegar a la carpeta del proyecto:**
    ```sh
    cd views
    ```
3.  **Instalar dependencias del Backend:**
    ```sh
    cd backend
    npm install
    ```
4.  **Configurar Base de Datos:**
    * Renombra `.env.example` a `.env` (si existe) o crea un archivo `.env`.
    * Configura las variables de entorno para la conexión a tu base de datos MySQL (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME).
5.  **Correr Migraciones y Seeders (si los configuraste con Sequelize CLI):**
    ```sh
    # Estando dentro de la carpeta backend/
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all 
    ```
6.  **Volver a la raíz y (si es necesario) instalar dependencias del Frontend (si tuviera):**
    ```sh
    cd ../ 
    # Si el frontend tuviera dependencias, ir a cd frontend y npm install
    ```

---

## 🎯 Uso

### Iniciar el Backend

Desde la carpeta `backend/`:

```sh
npm start 
