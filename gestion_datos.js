// ============================================================
// gestion_datos.js
// Gestión de datos con Objetos, Sets y Maps en JavaScript
// ============================================================


// ============================================================
// TASK 1 — Creación del objeto de productos
// Cada producto tiene: id, nombre y precio
// ============================================================

// Objeto principal que actúa como catálogo de productos
// Las claves son los id de cada producto
const productos = {
  p01: { id: "p01", nombre: "Guitarra Eléctrica", precio: 1200000 },
  p02: { id: "p02", nombre: "Bajo Fender",        precio: 950000  },
  p03: { id: "p03", nombre: "Batería Pearl",       precio: 3500000 },
  p04: { id: "p04", nombre: "Teclado Roland",      precio: 1800000 },
  p05: { id: "p05", nombre: "Micrófono Shure",     precio: 450000  },
};

console.log("=== TASK 1: Objeto de productos ===");
console.log(productos);


// ============================================================
// TASK 2 — Uso de Set en JavaScript
// Garantiza unicidad: elimina valores duplicados automáticamente
// ============================================================

console.log("\n=== TASK 2: Set de números ===");

// Se incluyen duplicados intencionalmente para demostrar el comportamiento del Set
const numerosSet = new Set([10, 20, 30, 20, 10, 40, 50, 30]);

// El Set elimina los duplicados al momento de la creación
console.log("Set inicial (sin duplicados):", numerosSet);

// Agregar un nuevo número al Set con .add()
numerosSet.add(60);
console.log("Después de agregar 60:", numerosSet);

// Verificar si un número existe con .has()
console.log("¿Existe el 20 en el Set?", numerosSet.has(20));  // true
console.log("¿Existe el 99 en el Set?", numerosSet.has(99));  // false

// Eliminar un número con .delete()
numerosSet.delete(30);
console.log("Después de eliminar 30:", numerosSet);

// Recorrer el Set con for...of para mostrar cada valor
console.log("Valores del Set (for...of):");
for (const valor of numerosSet) {
  console.log(" →", valor);
}


// ============================================================
// TASK 3 — Creación de un Map
// Relaciona la categoría del producto (clave) con la información
// adicional del producto (valor): nombre, id y precio
// ============================================================

console.log("\n=== TASK 3: Map de categorías ===");

// El Map asocia categoría → objeto con información adicional del producto
// Refleja correctamente la información adicional de cada producto
const categoriasMap = new Map([
  ["Cuerdas",   { id: "p01", nombre: "Guitarra Eléctrica", precio: 1200000 }],
  ["Bajo",      { id: "p02", nombre: "Bajo Fender",        precio: 950000  }],
  ["Percusión", { id: "p03", nombre: "Batería Pearl",       precio: 3500000 }],
  ["Teclas",    { id: "p04", nombre: "Teclado Roland",      precio: 1800000 }],
  ["Audio",     { id: "p05", nombre: "Micrófono Shure",     precio: 450000  }],
]);

console.log("Map de categorías:", categoriasMap);


// ============================================================
// TASK 4 — Iteración sobre las estructuras de datos
// ============================================================

console.log("\n=== TASK 4: Iteraciones ===");

// --- for...in sobre el objeto de productos ---
// for...in recorre las claves enumerables de un objeto
console.log("\n-- for...in sobre el objeto productos --");
for (const clave in productos) {
  const p = productos[clave];
  console.log(`Clave: ${clave} | Nombre: ${p.nombre} | Precio: $${p.precio}`);
}

// --- Object.keys() — retorna un array de claves → se recorre con forEach ---
// forEach() es un método de Array; Object.keys() retorna un array de claves
console.log("\n-- Object.keys() con forEach --");
Object.keys(productos).forEach((clave) => {
  console.log(`  Clave encontrada: ${clave}`);
});

// --- Object.values() — retorna un array de valores → se recorre con for...of ---
console.log("\n-- Object.values() con for...of --");
for (const p of Object.values(productos)) {
  console.log(`  ${p.id}: ${p.nombre} — $${p.precio}`);
}

// --- Object.entries() — retorna pares [clave, valor] → se recorre con for...of ---
console.log("\n-- Object.entries() con for...of --");
for (const [clave, p] of Object.entries(productos)) {
  console.log(`  Entrada [${clave}]:`, p);
}

// --- for...of sobre el Set ---
// for...of permite recorrer cualquier iterable, incluyendo Sets
console.log("\n-- for...of sobre numerosSet --");
for (const num of numerosSet) {
  console.log(" Valor en Set:", num);
}

// --- forEach sobre el Map ---
// Map.forEach() recibe el callback como (valor, clave) — a diferencia de for...of
console.log("\n-- forEach sobre categoriasMap --");
categoriasMap.forEach((producto, categoria) => {
  console.log(`  Categoría: "${categoria}" → Producto: "${producto.nombre}" | Precio: $${producto.precio}`);
});


// ============================================================
// TASK 5 — Validación y pruebas
// ============================================================

console.log("\n=== TASK 5: Validaciones y pruebas ===");

/**
 * Valida que un producto tenga id, nombre y precio correctos.
 * @param {object} producto - Objeto con las propiedades del producto.
 * @returns {boolean} true si el producto es válido, false en caso contrario.
 */
const validarProducto = (producto) => {
  if (!producto || typeof producto !== "object") {
    console.warn("  ✗ El argumento no es un objeto válido.");
    return false;
  }

  // Validar id: debe ser un string no vacío
  if (typeof producto.id !== "string" || producto.id.trim() === "") {
    console.warn(`  ✗ id inválido en:`, producto);
    return false;
  }

  // Validar nombre: debe ser un string no vacío
  if (typeof producto.nombre !== "string" || producto.nombre.trim() === "") {
    console.warn(`  ✗ nombre inválido en producto id="${producto.id}".`);
    return false;
  }

  // Validar precio: debe ser un número positivo
  if (typeof producto.precio !== "number" || producto.precio <= 0) {
    console.warn(`  ✗ precio inválido en producto id="${producto.id}".`);
    return false;
  }

  return true;
};

// Casos de prueba: productos válidos e inválidos
const productosPrueba = [
  { id: "p06", nombre: "Amplificador Marshall", precio: 2200000 }, // ✓ válido
  { id: "",    nombre: "Producto sin ID",        precio: 100000  }, // ✗ id vacío
  { id: "p07", nombre: "",                       precio: 500000  }, // ✗ nombre vacío
  { id: "p08", nombre: "Cable de audio",         precio: -5000   }, // ✗ precio negativo
  { id: "p09", nombre: "Pedal de efectos",       precio: 320000  }, // ✓ válido
];

console.log("\n-- Resultados de validación --");
productosPrueba.forEach((p) => {
  const esValido = validarProducto(p);
  if (esValido) {
    console.log(`  ✓ Producto válido: id="${p.id}" | nombre="${p.nombre}" | precio=$${p.precio}`);
  }
});

// --- Prueba 1: Lista completa de productos (objeto) ---
console.log("\n-- Prueba 1: Lista completa de productos --");
Object.values(productos).forEach((p) => {
  console.log(`  [${p.id}] ${p.nombre} — $${p.precio}`);
});

// --- Prueba 2: Lista de productos únicos (Set) ---
// El Set garantiza que no haya nombres repetidos
const nombresSet = new Set(Object.values(productos).map((p) => p.nombre));
console.log("\n-- Prueba 2: Nombres únicos de productos (Set) --");
for (const nombre of nombresSet) {
  console.log(" •", nombre);
}

// --- Prueba 3: Categorías y nombres de productos (Map) ---
// forEach sobre el Map para mostrar claves y valores de forma descriptiva
console.log("\n-- Prueba 3: Categorías y nombres (Map) --");
categoriasMap.forEach((producto, categoria) => {
  console.log(`  Categoría [${categoria}]: ${producto.nombre} — $${producto.precio}`);
});

console.log("\n✅ Todas las tareas completadas correctamente.");
