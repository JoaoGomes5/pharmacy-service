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
                        name: 'user_id',
                        type: 'uuid',
                    },
                    {
                        name: 'result',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], 
                foreignKeys: [
                    {
                        name : 'fk_user_id',
                        columnNames: ['user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id']

                    } 
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests')
    }

}
