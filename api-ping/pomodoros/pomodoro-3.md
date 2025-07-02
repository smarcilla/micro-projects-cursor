# Pomodoro 3 — [2025-07-02 XX:XX-XX:XX]

## 🎯 Objetivo del pomodoro
- Modificar el endpoint `/ping` para aceptar un query param `name`.
- Si se pasa `name`, responder `{ status: "hello, <name>" }`; si no, `{ status: "ok" }`.
- Probar el endpoint usando Rest Client (archivo `.http`).

## 📝 Checklist rápida
- [x] Añadir la lógica del query param en `src/index.ts`.
- [x] Escribir y guardar una petición de prueba en `test.http`.
- [x] Probar al menos 2 casos: `/ping` y `/ping?name=Sergio`.
- [x] Usar al menos un atajo de Cursor (autocompletado, expandir comentario, etc.).
- [x] Documentar el tiempo real empleado en la kata (objetivo: <20 min).

## ✅ Logros
- En menos de 15 minutos. 
- Puse el comentario // Añadir la lógica del query param en `src/index.ts`. y cursor sugirió el código correcto.
- (Al final del pomodoro, resume qué conseguiste y en cuánto tiempo lo lograste).

## 🚧 Problemas, bloqueos o dudas
- Sin problemas, la propia definición del pomodoro le sirve a Cursor para codificar. 
- (Apunta cualquier error, sugerencia rara de Cursor, dudas con tipos, etc.).

## 💡 Aprendizajes y próximos pasos
- Me parece interesante ver como usar tests a esta funcionalidad o mini proyecto.
- (¿Se te ocurre cómo automatizar tests? ¿Quieres probar generar tests con Cursor en el siguiente ciclo?)

---

### Ejemplo de petición para `test.http` (puedes copiar y editar):

