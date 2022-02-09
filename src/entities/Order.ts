import { v4 as uuid } from 'uuid'
import {  
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryColumn 
} from "typeorm"

import { Medicine } from "./Medicine"

@Entity('orders')
export class Order {

  @PrimaryColumn()
  id: string
  
  @Column()
  medicine_id: string 

  @OneToOne(() => Medicine)
  @JoinColumn({ name: 'medicine_id' })
  medicine: Medicine
  
  @Column()
  home_id: number

  @Column()
  quantity: number
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
        this.id = uuid()
    }
  }
}