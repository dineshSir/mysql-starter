import { Column, Entity } from 'typeorm';

@Entity()
export class Coffee {
  @Column()
  name: string;

  @Column()
  quantity: number;
}
