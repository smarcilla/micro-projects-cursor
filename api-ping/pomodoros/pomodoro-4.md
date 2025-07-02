# Pomodoro 4 — [2025-07-02 XX:XX-XX:XX]

## 🎯 Objetivo del pomodoro
- Generar tests automáticos para `/ping` usando Jest.
- Probar los tests y dejar un caso pasando para `/ping` y otro para `/ping?name=Pepito`.
- Usar prompts de Cursor para automatizar la escritura de los tests.

## 📝 Checklist rápida
- [x] Instalar Jest y tipos para TypeScript (`jest`, `ts-jest`, `@types/jest`, etc.).
- [x] Configurar Jest si es necesario (puedes pedir ayuda a Cursor).
- [x] Crear archivo de tests (`src/index.test.ts` o similar).
- [x] Generar y adaptar los tests usando prompts/atajos de Cursor.
- [x] Ejecutar los tests y validar que todo funciona.

## ✅ Logros
- He usado el Agente para que implemente los diferentes pasos del checklist usado el fichero del pomodoro como contexto.

- (Resume los tests generados, tiempo empleado y si los resultados son correctos.)

## 🚧 Problemas, bloqueos o dudas
- Los test fallaban porque el fichero jest.config.js por defecto no estaba usando el tsconfig.json dentro de api-ping. 
- (¿Tuviste problemas con la configuración? ¿Cursor sugirió algo incorrecto o confuso? ¿Te costó adaptar los tests?)


## 💡 Aprendizajes y próximos pasos
- La configuración no es el fuerte de Cursor. 
- El refactor será necesario antes o después. Cuando pase al siguiente mini proyecto tendré que lidiar con diferentes comandos de arranque, puertos y también comandos que ejecuten los unit tests.
- (¿Aprendiste una nueva forma de pedir tests? ¿Te interesa probar TDD con Cursor? ¿Ves útil pedir refactor agent en el siguiente ciclo?)

---

### Ejemplo de prompt para Cursor:
```js
// Test: GET /ping debería devolver { status: "ok" } usando supertest
