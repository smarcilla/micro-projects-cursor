# plantilla-mini-proyecto

Plantilla base para crear mini-proyectos Node.js con TypeScript, Express y Jest.

## ¿Para qué sirve?

Esta plantilla te permite iniciar rápidamente un nuevo microproyecto siguiendo buenas prácticas:
- Estructura modular
- Scripts de desarrollo y test
- Dependencias locales
- Ejemplo de configuración para Jest y TypeScript

## Estructura

- `src/`: Código fuente principal
- `tests/`: Pruebas unitarias
- `jest.config.js`: Configuración de Jest
- `package.json`: Dependencias y scripts
- `tsconfig.json`: Configuración de TypeScript

## Uso

1. **Clona o copia la carpeta:**
   
   ```bash
   cp -r plantilla-mini-proyecto nuevo-proyecto
   cd nuevo-proyecto
   rm -rf .git
   npm install
   ```

2. **Desarrollo:**
   
   ```bash
   npm run dev
   ```

3. **Test:**
   
   ```bash
   npm test
   ```

4. **Personaliza:**
   - Cambia el nombre y descripción en `package.json`
   - Modifica el código en `src/` y los tests en `tests/`

## Autor
Sergio Marcilla 