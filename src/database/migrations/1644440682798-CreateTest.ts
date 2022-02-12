import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTest1644440682798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tests',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'user_nif',
                        type: 'integer',
                    },
                    {
                        name: 'result',
                        type: 'boolean',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], 
                foreignKeys: [
                    {
                        name : 'fk_user_nif',
                        columnNames: ['user_nif'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['nif']

                    } 
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests')
    }

}
