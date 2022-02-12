import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMedicine1644441559014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medicines',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'reference',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'active_ingredient',
                        type: 'varchar',
                    },
                    {
                        name: 'stock',
                        type: 'integer',
                        default: 0
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                    },
                    {
                        name: 'intake',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medicines')
    }

}
