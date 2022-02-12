import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {

  @PrimaryColumn()
  id: string
  
  @Column()
  nif: number
  
  @Column()
  name: string
  
  @Column()
  email: string
  
  @Column()
  phone: number
  
  @Column()
  is_infected: boolean

  @Column()
  is_isolated: boolean
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
        this.id = uuid()
    }
  }
}