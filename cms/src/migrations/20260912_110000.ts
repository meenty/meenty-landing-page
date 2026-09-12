import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_content" ADD COLUMN "about_label" varchar;
  ALTER TABLE "site_content" ADD COLUMN "about_heading" varchar NOT NULL DEFAULT '';

  CREATE TYPE "public"."enum_site_content_about_blocks_kind" AS ENUM('text', 'highlight');

  CREATE TABLE "site_content_about_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_site_content_about_blocks_kind" DEFAULT 'text',
  	"body" varchar NOT NULL
  );

  ALTER TABLE "site_content_about_blocks" ADD CONSTRAINT "site_content_about_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_content"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_content_about_blocks_order_idx" ON "site_content_about_blocks" USING btree ("_order");
  CREATE INDEX "site_content_about_blocks_parent_id_idx" ON "site_content_about_blocks" USING btree ("_parent_id");

  ALTER TABLE "site_content" ALTER COLUMN "about_heading" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_content" DROP COLUMN "about_label";
  ALTER TABLE "site_content" DROP COLUMN "about_heading";

  DROP TABLE "site_content_about_blocks" CASCADE;
  DROP TYPE "public"."enum_site_content_about_blocks_kind";`)
}
