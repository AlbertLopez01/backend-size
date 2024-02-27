import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("aulas")
export class AulaEntity {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column({
        type: "varchar",
        length: 100,
    })
    nombre_aula: string
    @Column({
        type: "varchar",
        length: 100,
    })
    lugar: string
    @Column({
        type: "integer",
    })
    capacidad: number
}
