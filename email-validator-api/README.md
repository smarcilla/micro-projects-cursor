# Email Validator API

API REST sencilla para validar emails en el registro de usuarios.

## Instalación

1. Clona el repositorio o navega a la carpeta `email-validator-api`.
2. Instala las dependencias:

```bash
npm install
```

## Uso en desarrollo

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor se ejecutará por defecto en `http://localhost:3000`.

## Endpoints

### POST `/user/register`

Registra un usuario validando el email proporcionado.

#### Request

- Método: `POST`
- URL: `http://localhost:3000/user/register`
- Headers: `Content-Type: application/json`
- Body:

```json
{
  "email": "usuario@ejemplo.com"
}
```

#### Respuestas

- **200 OK**
  - Email válido:
  ```json
  { "message": "User registered successfully" }
  ```
- **400 Bad Request**
  - Email inválido:
  ```json
  { "error": "Invalid email format" }
  ```
  - Email no proporcionado:
  ```json
  { "error": "Email is required" }
  ```

## Pruebas

Para ejecutar los tests:

```bash
npm test
```

---

Proyecto de ejemplo para validar emails usando Express y TypeScript. 