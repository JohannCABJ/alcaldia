const db = require('./db');

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 10, cantidad: 5 },
  { id: 2, nombre: 'Producto 2', precio: 20, cantidad: 10 },
  { id: 3, nombre: 'Producto 3', precio: 30, cantidad: 15 }
];
const producto = 'Producto 2'

async function getPrecioProducto(nombreProducto) {
  const database = await db.connect();
  const collection = database.collection('productos');

  const producto = await collection.findOne({ nombre: nombreProducto });

  if (!producto) {
    throw new Error(`No se pudo encontrar el producto: ${nombreProducto}`);
  }

  return producto.precio;
}

async function main() {
  const database = await db.connect();
  const collection = database.collection('productos');

  try {
    // insertar los productos
    await collection.insertMany(productos);
    console.log('Coleccion Productos creada y documentos insertados en la colección productos');

    // obtener el precio de un producto
    const precio = await getPrecioProducto(producto);
    console.log(`El precio del producto ${producto} es: ${precio}`);
  } catch (err) {
    console.error('Error:', err);
  }
}


main();