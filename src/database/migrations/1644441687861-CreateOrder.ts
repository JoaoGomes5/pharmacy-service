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
                        name: 'medication_id',
                        type: 'uuid',
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
                        name : 'fk_medication_id',
                        columnNames: ['medication_id'],
                        referencedTableName: 'medications',
                        referencedColumnNames: ['id']

                    } 
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }

}
