# Prerrequisitos
- Instalar node.js versión 20 o superior [Descargar](https://nodejs.org/en)
- Instalar Git [Descargar](https://git-scm.com/downloads)
- Navegador web en la última versión (Chrome o Firefox)
- Levantar el backend [Ver instrucciones](https://github.com/Camila-Cano/proyecto-empleados-backend)

# Build
- Crear una carpeta vacía y en una consola de comandos ejecutar los siguientes pasos
- git clone https://github.com/Camila-Cano/proyecto-empleados-frontend 
- cd proyecto-empleados-frontend
- npm install
- ng serve
- Abrir en el navegador web http://localhost:4200/

# Ejecución pruebas e2e
- Ubicarse en la carpeta del proyecto frontend que se creó del paso del (Build)
- cd proyecto-empleados-frontend
- ng e2e
- A la pregunta Would you like to use a different port? seleccionar la opción Y
- Seleccionar el navegador web chrome
- Seleccionar el caso de prueba automatizado spec.cy.ts
- Finalmente las evidencias de los screen shots quedarán disponibles en el folder cypress/screenshots
