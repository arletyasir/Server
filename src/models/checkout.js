class Checkout {
    constructor( order_id, producto_id, cantidad_preparada, cantidad, estado) {
        this.order_id = order_id;
        this.producto_id = producto_id;
        this.cantidad_preparada = cantidad_preparada;
        this.cantidad = cantidad;
        this.estado = estado;
    }
}
export default Checkout;
