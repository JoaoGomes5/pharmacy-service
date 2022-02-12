import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('tests')
export class Test {

  @PrimaryColumn()
  id: string
  
  @Column()
  user_nif: number 

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_nif' })
  user: User
  
  @Column()
  result: boolean
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
        this.id = uuid()
    }
  }
}