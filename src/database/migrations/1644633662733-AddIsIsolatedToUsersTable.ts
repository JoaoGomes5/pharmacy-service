import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddIsIsolatedToUsersTable1644633662733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'is_isolated',
            type: 'boolean',
            default: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'is_isolated');
    }

}
