import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1644436986067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'client_id',
                        type: 'integer',
                        isUnique: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'home_id',
                        type: 'integer',
                    },
                    {
                        name: 'is_infected',
                        type: 'boolean',
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
        await queryRunner.dropTable('users');
    }

}
