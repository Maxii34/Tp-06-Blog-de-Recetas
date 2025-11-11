# Blog de Recetas

Este es el frontend de una aplicación web de un blog de recetas. Permite a los usuarios ver, buscar y explorar diferentes recetas de cocina. También cuenta con un panel de administración para gestionar el contenido de las recetas.

## Autor

- **Maximiliano Ordoñez**

## Deploy

- [Link de la pagina](Proximamente)

## Repo del backend

- [link Repositorio](Proximamente)

## Características

- **Visualización de Recetas:** Los usuarios pueden ver una lista de todas las recetas disponibles en la página principal.
- **Detalle de Receta:** Cada receta tiene su propia página donde se pueden ver los detalles completos, incluyendo ingredientes e instrucciones.
- **Panel de Administración:** Una sección protegida para que los administradores puedan:
  - **Crear** nuevas recetas.
  - **Editar** recetas existentes.
  - **Eliminar** recetas.
- **Login y Registro:** Sistema de autenticación para el acceso de administradores al panel de gestión.

## Tecnologías Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [React Hook Form](https://react-hook-form.com/) para la gestión de formularios.
  - [Bootstrap](https://getbootstrap.com/) y [React-Bootstrap](https://react-bootstrap.github.io/) para los estilos y componentes de UI.
  - [SweetAlert2](https://sweetalert2.github.io/) para notificaciones y alertas.
  - [Lucide React](https://lucide.dev/guide/packages/lucide-react) para iconos.

- **Desarrollo:**
  - [ESLint](https://eslint.org/) para el linting de código.

## Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    cd blogderecetas
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables. Estas deben apuntar a los endpoints de tu API de backend.
    ```
    VITE_API_BACKEND=URL_DE_TU_API_DE_RECETAS
    VITE_API_USUARIO=URL_DE_TU_API_DE_USUARIOS
    ```

4.  **Ejecutar el proyecto:**
    Para iniciar la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter (ESLint) para analizar el código.
- `npm run preview`: Inicia un servidor local para previsualizar la build de producción.

## Conexión con el Backend

Este proyecto es solo el frontend y requiere una API de backend para funcionar completamente. Las operaciones CRUD de recetas y la autenticación de usuarios se realizan a través de peticiones a los endpoints configurados en el archivo `.env`.
