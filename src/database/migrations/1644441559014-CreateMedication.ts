import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMedication1644441559014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medications',
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
                        name: 'active_ingredient',
                        type: 'varchar',
                    },
                    {
                        name: 'stock',
                        type: 'integer',
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
        await queryRunner.dropTable('medications')
    }

}
