import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"


@Entity('users')
export class User {

  @PrimaryColumn()
  id: string
  
  @Column()
  client_id: string
  
  @Column()
  name: string
  
  @Column()
  email: string
  
  @Column()
  home_id: string
  
  @Column()
  is_infected: boolean
  
  @CreateDateColumn()
  created_at: Date
}