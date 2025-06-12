import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Coffee extends CommonEntity {
  @Column()
  name: string;

  @Column()
  quantity: number;
}
