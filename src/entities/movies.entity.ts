import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
class Movie {
    @PrimaryGeneratedColumn('increment')
    id: number  

    @Column({type:'varchar', length:50, unique: true})
    name: string

    @Column({nullable:true, type: "varchar", length:120})
    description?: string | undefined | null

    @Column({type:'int'})
    duration: number

    @Column({type: 'int'})
    price: number
}

export default Movie;
