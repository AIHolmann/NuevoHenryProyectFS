class CarritoCompra {
  constructor(parameters) {
    this.productos = [];
  }
  agregarProducto = (producto) => {
    this.productos.push(producto);
  };

  calcularTotal = () => {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  };

  aplicarDescuento = (porcentaje) => {
    const total = this.calcularTotal();
    return total * (1 - porcentaje / 100);
  };
}

module.exports = CarritoCompra;
