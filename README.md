# gestion_datos.js

Practice project for data management in JavaScript using **Objects**, **Sets**, and **Maps**. Includes creation, iteration, and validation of a musical product catalog.

- [Leer en español](readmees.md)
---

## User Story

**Goal:** Consolidate the use of advanced JavaScript data structures to organize, store, and manipulate information efficiently.

**Acceptance criteria met:**

| Criterion | Status |
|-----------|--------|
| File named `gestion_datos.js` | ✅ |
| Use of `const` and `let` (no `var`) | ✅ |
| Implementation of Object, Set, and Map | ✅ |
| Use of `for...in`, `for...of`, `forEach()`, `Object.keys/values/entries()` | ✅ |
| Validations to prevent incomplete data | ✅ |
| Explanatory comments in each section | ✅ |

**Story Points:** 25

---

## File Structure

The script is divided into 5 tasks:

| Task | Description |
|------|-------------|
| **Task 1** | Creation of a `productos` object with 5 musical items (id, nombre, precio) |
| **Task 2** | Use of `Set` to store unique numbers: `.add()`, `.has()`, `.delete()`, `for...of` |
| **Task 3** | Creation of a `Map` associating category → product information |
| **Task 4** | Iteration over all 3 structures using `for...in`, `Object.keys/values/entries`, `forEach` |
| **Task 5** | `validarProducto()` function with valid and invalid test cases |

---

## Concepts Covered

- **Object literal** as a catalog with custom keys (`p01`, `p02`…)
- **Set**: automatic uniqueness, methods `.add()`, `.has()`, `.delete()`
- **Map**: key-value pairs with keys of any type
- **Iteration methods**: `for...in`, `for...of`, `Object.keys()`, `Object.values()`, `Object.entries()`, `.forEach()`
- **Defensive validation**: type checking, empty string detection, and positive number enforcement

---

## How to Clone and Run

### 1. Clone the repository

```bash
git clone https://github.com/vreniz/M3S2.git
cd M3S2
```

### 2. Open the file in your editor

Open `gestion_datos.js` in your preferred code editor (VS Code, WebStorm, etc.) to review the code and comments.

### 3. Run in terminal with Node.js

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
node gestion_datos.js
```

> No external dependencies. No `npm install` required.

---

## Sample Console Output

```
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

> Console output remains in Spanish as it reflects the variable names and labels defined in the source code.

---

## Notes

- Prices are in Colombian pesos (COP).
- `validarProducto()` returns `false` and emits `console.warn` for invalid entries; only prints confirmation for valid ones.
- The `Set` from Task 2 is reused in Task 4 (value `30` was already deleted in Task 2).
