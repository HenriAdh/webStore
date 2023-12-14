import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1702399969018 implements MigrationInterface {
    name = 'Default1702399969018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens" ("id" SERIAL NOT NULL, "title" text NOT NULL, "desc" text NOT NULL, "price" integer NOT NULL, "image" text NOT NULL, "idUser" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b090d1e0e0721a15b3f9f0c6f0e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "itens"`);
    }

}
