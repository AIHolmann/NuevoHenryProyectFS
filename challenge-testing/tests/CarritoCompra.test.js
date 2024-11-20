const CarritoCompra = require("../index");
/*
***   constructor(): Inicializa el carrito como un array vacío.

***   agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

***   calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

***   aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

***   Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
*/
describe("Prueba a la clase CarritoCompras", () => {
  let carrito;
  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Inicializa el carrito como un array vacio", () => {
    expect(carrito.productos).toEqual([]);
  });

  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    const producto = { nombre: "remera", precio: 12000 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContain(producto);
  });

  it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
    const producto1 = { nombre: "remera", precio: 12000 };
    const producto2 = { nombre: "camisa", precio: 35000 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(47000);
  });

  it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
    const producto1 = { nombre: "remera", precio: 12000 };
    const producto2 = { nombre: "camisa", precio: 35000 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const descuento = 10;
    expect(carrito.aplicarDescuento(descuento)).toBe(42300);
  });
});
