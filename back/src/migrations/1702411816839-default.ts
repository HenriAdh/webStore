import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1702411816839 implements MigrationInterface {
    name = 'Default1702411816839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens" ADD "color" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "itens" ADD "size" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "itens" DROP COLUMN "color"`);
    }

}
