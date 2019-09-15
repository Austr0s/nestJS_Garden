import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity({name: 'producto'})
export class Product {

    @PrimaryColumn({name: 'codigo_producto', length: 15, nullable: false})
    id: string;

    @Column({name: 'nombre', length: 70, nullable: false})
    nombre: string;

    @Column({name: 'gama', length: 50, nullable: false})
    gama: string;

    @Column({name: 'dimensiones', length: 25, nullable: true})
    dimensiones: string;

    @Column({name: 'proveedor', length: 50, nullable: true})
    proveedor: string;

    @Column({type:'text', name: 'descripcion', nullable: true})
    descripcion: string;

    @Column({type: 'smallint', name: 'cantidad_en_stock', nullable: false})
    cantidadEnStock: number;

    @Column({type: 'decimal', name: 'precio_venta', nullable: false})
    precioVenta: number;

    @Column({type: 'decimal', name: 'precio_proveedor', nullable: true})
    precioProveedor: number;
    
}