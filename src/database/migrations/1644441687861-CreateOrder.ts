import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1644441687861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'medicine_reference',
                        type: 'varchar',
                    },
                    {
                        name: 'home_id',
                        type: 'integer',
                    },
                    {
                        name: 'quantity',
                        type: 'integer',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], 
                foreignKeys: [
                    {
                        name : 'fk_medicine_reference',
                        columnNames: ['medicine_reference'],
                        referencedTableName: 'medicines',
                        referencedColumnNames: ['reference']

                    } 
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }

}
