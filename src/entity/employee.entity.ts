import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';
import { Office } from './office.entity';

@Entity({name: 'empleado'})
export class Employee {

    @PrimaryColumn({name: 'codigo_empleado', type: 'integer', nullable: false})
    id: number;

    @Column({name: 'nombre', length: 50, nullable: false})
    nombre: string;

    @Column({name: 'apellido1', length: 50, nullable: false})
    apellido1: string;

    @Column({name: 'apellido2', length: 50, nullable: true})
    apellido2: string;

    @Column({name: 'extension', length: 10, nullable: false})
    extension: string;

    @Column({name: 'email', length: 100, nullable: false})
    email: string;

    @OneToOne(type => Office)
    @Column({name: 'codigo_oficina', length: 10, nullable: false})
    codigoOficina: string;

    @Column({name: 'codigo_jefe', type: 'integer', nullable: true})
    codigoJefe: number;
    
    @Column({name: 'puesto', length: 50, nullable: true})
    puesto: string;

}