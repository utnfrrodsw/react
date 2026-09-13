# Reglas del agente — React UTN 2026

## Persistencia de memoria

**REGLA OBLIGATORIA — Sin excepciones.**

Después de **cada** cambio de código que se confirme con `build` exitoso o que el usuario valide como funcional, guardar una entrada en `team-memory`. No es opcional. No es "si tengo tiempo". Es parte del flujo de trabajo, igual que hacer `build`.

### Flujo obligatorio para cada fix/feature:

```
1. Hacer el cambio
2. Verificar (build/lint/usuario confirma)
3. GUARDAR EN TEAM-MEMORY  ← no saltar este paso
4. Informar al usuario del resultado
```

**Si el paso 3 se omite, la tarea está incompleta.**

| Tipo de cambio | Tipo de entrada |
|---|---|
| Bug corregido | `FIX` |
| Feature o archivo creado/modificado | `REPOSITORY_NOTE` |
| Decisión técnica tomada | `DECISION` |
| Aprendizaje no obvio | `INSIGHT` |
| Solución reutilizable comprobada | `PATTERN` |
| Algo que no se debe repetir | `ANTI_PATTERN` |

### Formato mínimo de cada entrada:
- `title`: descriptivo y conciso
- `content`: qué, por qué, y contexto para futuras sesiones
- `tags`: etiquetas técnicas relevantes
- `author`: "opencode"
- `project_slug`: "react-utn" (resuelto desde `.team-memory.json`)
- `area`: "frontend" (inferido — todo el repo es React)

## Formato de las entradas

Cada entrada debe incluir:
- `title`: descriptivo y conciso
- `content`: qué se hizo, por qué, y contexto relevante para futuras sesiones
- `tags`: array con etiquetas descriptivas
- `author`: "opencode"

## Al iniciar sesión

1. Llamar `get_context({ project_slug })` antes de la primera respuesta sustancial
2. Usar `search_memory` antes de asumir contexto sobre el proyecto
