import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'oficina'})
export class Office {

    @PrimaryColumn({name: 'codigo_oficina', length: 10, nullable: false})
    id: string;

    @Column({name: 'ciudad', length: 30, nullable: false})
    ciudad: string;

    @Column({name: 'pais', length: 50, nullable: false})
    pais: string;

    @Column({name: 'region', length: 50, nullable: false})
    region: string;

    @Column({name: 'codigo_postal', length: 10, nullable: false})
    codigoPostal: string;

    @Column({name: 'telefono', length: 20, nullable: false})
    telefono: string;

    @Column({name: 'linea_direccion1', length: 50, nullable: false})
    lineaDireccion1: string;

    @Column({name: 'linea_direccion2', length: 50, nullable: false})
    lineaDireccion2: string;

}