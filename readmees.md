# gestion_datos.js

Práctica de gestión de datos en JavaScript usando **Objetos**, **Sets** y **Maps**. Incluye creación, iteración y validación de un catálogo de productos musicales.

---

## Historia de usuario M3S2


## Estructura del archivo

El script está dividido en 5 tareas:

| Task | Descripción |
|------|-------------|
| **Task 1** | Creación de un objeto `productos` con 5 artículos musicales (id, nombre, precio) |
| **Task 2** | Uso de `Set` para almacenar números únicos: `.add()`, `.has()`, `.delete()`, `for...of` |
| **Task 3** | Creación de un `Map` que asocia categoría → información del producto |
| **Task 4** | Iteración sobre las 3 estructuras con `for...in`, `Object.keys/values/entries`, `forEach` |
| **Task 5** | Función `validarProducto()` con casos de prueba válidos e inválidos |

---

## Conceptos cubiertos

- **Objeto literal** como catálogo con claves personalizadas (`p01`, `p02`…)
- **Set**: unicidad automática, métodos `.add()`, `.has()`, `.delete()`
- **Map**: pares clave-valor con claves de cualquier tipo
- **Métodos de iteración**: `for...in`, `for...of`, `Object.keys()`, `Object.values()`, `Object.entries()`, `.forEach()`
- **Validación defensiva**: chequeo de tipo, string vacío y número positivo

---

## Cómo clonar y ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/vreniz/M3S2.git
cd M3S2
```

### 2. Abrir el archivo en el editor

Abre `gestion_datos.js` en tu editor de código (VS Code, WebStorm, etc.) para revisar el código con resaltado de sintaxis y comentarios.

### 3. Ejecutar en terminal con Node.js

Asegúrate de tener [Node.js](https://nodejs.org/) instalado, luego en la terminal:

```bash
node gestion_datos.js
```

> No tiene dependencias externas. No requiere `npm install`.

---

## Ejemplo de salida en consola

```
=== TASK 1: Objeto de productos ===
{ p01: { id: 'p01', nombre: 'Guitarra Eléctrica', precio: 1200000 }, ... }

=== TASK 2: Set de números ===
Set inicial (sin duplicados): Set(5) { 10, 20, 30, 40, 50 }
Después de agregar 60: Set(6) { 10, 20, 30, 40, 50, 60 }
¿Existe el 20 en el Set? true
Después de eliminar 30: Set(5) { 10, 20, 40, 50, 60 }

=== TASK 3: Map de categorías ===
Map(5) { 'Cuerdas' => {...}, 'Bajo' => {...}, ... }

=== TASK 4: Iteraciones ===
...

=== TASK 5: Validaciones y pruebas ===
  ✓ Producto válido: id="p06" | nombre="Amplificador Marshall" | precio=$2200000
  ✓ Producto válido: id="p09" | nombre="Pedal de efectos" | precio=$320000

```

---

## Notas

- Los precios están en pesos colombianos (COP).
- `validarProducto()` retorna `false` y emite `console.warn` para entradas inválidas; solo imprime confirmación para las válidas.
- El `Set` de la Task 2 se reutiliza en la Task 4 (el valor `30` ya fue eliminado en Task 2).
