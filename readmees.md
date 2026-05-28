## Historia de usuario M3S2

Práctica de gestión de datos en JavaScript usando **Objetos**, **Sets** y **Maps**. Incluye creación, iteración y validación de un catálogo de productos musicales.

---

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

### 2. Abrir el archivo en el editor VS code 

Abrir `gestion_datos.js` en el editor de código de preferencia para revisar el código y comentarios.

### 3. Ejecutar en terminal con Node.js

Asegúrate de tener [Node.js](https://nodejs.org/) instalado, luego en la terminal:

```bash
node gestion_datos.js
```

> No tiene dependencias externas. No requiere `npm install`.

---

## Ejemplo de salida en consola
 
```bash
=== TASK 1: Objeto de productos ===
{
  p01: { id: 'p01', nombre: 'Guitarra Eléctrica', precio: 1200000 },
  p02: { id: 'p02', nombre: 'Bajo Fender', precio: 950000 },
  p03: { id: 'p03', nombre: 'Batería Pearl', precio: 3500000 },
  p04: { id: 'p04', nombre: 'Teclado Roland', precio: 1800000 },
  p05: { id: 'p05', nombre: 'Micrófono Shure', precio: 450000 }
}
 
=== TASK 2: Set de números ===
Set inicial (sin duplicados): Set(5) { 10, 20, 30, 40, 50 }
Después de agregar 60: Set(6) { 10, 20, 30, 40, 50, 60 }
¿Existe el 20 en el Set? true
¿Existe el 99 en el Set? false
Después de eliminar 30: Set(5) { 10, 20, 40, 50, 60 }
Valores del Set (for...of):
 → 10
 → 20
 → 40
 → 50
 → 60
 
=== TASK 3: Map de categorías ===
Map(5) {
  'Cuerdas' => { id: 'p01', nombre: 'Guitarra Eléctrica', precio: 1200000 },
  'Bajo' => { id: 'p02', nombre: 'Bajo Fender', precio: 950000 },
  'Percusión' => { id: 'p03', nombre: 'Batería Pearl', precio: 3500000 },
  'Teclas' => { id: 'p04', nombre: 'Teclado Roland', precio: 1800000 },
  'Audio' => { id: 'p05', nombre: 'Micrófono Shure', precio: 450000 }
}
 
=== TASK 4: Iteraciones ===
-- for...in sobre el objeto productos --
Clave: p01 | Nombre: Guitarra Eléctrica | Precio: $1200000
Clave: p02 | Nombre: Bajo Fender | Precio: $950000
Clave: p03 | Nombre: Batería Pearl | Precio: $3500000
Clave: p04 | Nombre: Teclado Roland | Precio: $1800000
Clave: p05 | Nombre: Micrófono Shure | Precio: $450000
-- Object.keys() con forEach --
  Clave encontrada: p01
  Clave encontrada: p02
  Clave encontrada: p03
  Clave encontrada: p04
  Clave encontrada: p05
-- Object.values() con for...of --
  p01: Guitarra Eléctrica — $1200000
  ...
-- Object.entries() con for...of --
  Entrada [p01]: { id: 'p01', nombre: 'Guitarra Eléctrica', precio: 1200000 }
  ...
-- for...of sobre numerosSet --
 Valor en Set: 10
 Valor en Set: 20
 Valor en Set: 40
 Valor en Set: 50
 Valor en Set: 60
-- forEach sobre categoriasMap --
  Categoría: "Cuerdas" → Producto: "Guitarra Eléctrica" | Precio: $1200000
  ...
 
=== TASK 5: Validaciones y pruebas ===
-- Resultados de validación --
  ✓ Producto válido: id="p06" | nombre="Amplificador Marshall" | precio=$2200000
  ✗ id inválido en: { id: '', nombre: 'Producto sin ID', precio: 100000 }
  ✗ nombre inválido en producto id="p07".
  ✗ precio inválido en producto id="p08".
  ✓ Producto válido: id="p09" | nombre="Pedal de efectos" | precio=$320000
-- Prueba 2: Nombres únicos de productos (Set) --
 • Guitarra Eléctrica
 • Bajo Fender
 • Batería Pearl
 • Teclado Roland
 • Micrófono Shure
-- Prueba 3: Categorías y nombres (Map) --
  Categoría [Cuerdas]: Guitarra Eléctrica — $1200000
  ...
 
✅ Todas las tareas completadas correctamente.
```
 
---

## Notas

- Los precios están en pesos colombianos (COP).
- `validarProducto()` retorna `false` y emite `console.warn` para entradas inválidas; solo imprime confirmación para las válidas.
- El `Set` de la Task 2 se reutiliza en la Task 4 (el valor `30` ya fue eliminado en Task 2).
