import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('medicines')
export class Medicine {

  @PrimaryColumn()
  id: string
  
  @Column()
  name: string 

  @Column()
  active_ingredient: string 

  @Column()
  stock: number 

  @Column()
  brand: string
  
  @Column()
  intake: string
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
        this.id = uuid()
    }
  }
}