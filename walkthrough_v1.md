# Guía de Grabación V1: Diseño de Contratos

He refinado el proyecto siguiendo el feedback: ahora el foco está 100% en cómo el contrato **comunica intención** al LLM.

## 1. Pestañas para el Video
- **[bad-tool.ts](file:///c:/Users/Valentin/M5/src/tools/bad-tool.ts)**: El ejemplo de ambigüedad.
- **[good-tool.ts](file:///c:/Users/Valentin/M5/src/tools/good-tool.ts)**: El ejemplo de claridad y guía.
- **[user-request.txt](file:///c:/Users/Valentin/M5/src/demos/user-request.txt)**: El pedido del usuario que sirve de prueba.

## 2. Timeline y Guion Sugerido

### 0:00 - 3:00 | La Tool Ambigua (bad-tool.ts)
**Acción**: Muestra `task_manager` y el campo `data`.
**Narración**: 
- *"Este contrato es ambiguo. 'task_manager' no define una acción clara (¿crea, borra, lista?)."*
- *"El campo 'data' no guía al modelo. Obliga al LLM a adivinar qué estructura enviar."*
- *"El problema no es técnico, es de comunicación: el contrato no expresa intención."*

### 3:00 - 5:00 | La Tool con Intención (good-tool.ts)
**Acción**: Muestra `create_task` y sus campos específicos.
**Narración**: 
- *"Aquí el nombre 'create_task' ya define una acción concreta (Verbo + Objeto)."*
- *"La descripción detallada guía al modelo sobre CUÁNDO usarla."*
- *"Campos como 'title' y 'priority' (con opciones claras) eliminan la duda del agente."*

### 5:00 - 6:30 | Comparación Real (npm run demo:compare)
**Acción**: Ejecuta `npm run demo:compare`.
**Narración**: 
- *"Con el pedido 'Crear tarea urgente', la tool buena hace match inmediato."*
- *"Vemos cómo el contrato bien diseñado traduce la necesidad del usuario en un input estructurado sin errores."*

### 6:30 - Cierre | El Catálogo (npm run demo:list)
**Acción**: Ejecuta `npm run demo:list` (El momento CLAVE).
**Narración**: 
- *"Esto que vemos aquí es el Catálogo de Tools. Es lo ÚNICO que el LLM ve de nuestro sistema."*
- *"El modelo no lee nuestro código interno, lee esta metadata (Nombre, Descripción, Schema)."*
- *"Por eso, el comportamiento de tu agente depende directamente de la calidad de este contrato."*

## 3. Comandos Útiles
- `npm start`: Para mostrar el servidor corriendo.
- `npm run demo:list`: Para mostrar el catálogo completo.
- `npm run demo:compare`: Para mostrar la lógica de match.

¡Todo listo! Con este enfoque el mensaje pedagógico quedará clarísimo.
