import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_content" ADD COLUMN "mission_heading" varchar NOT NULL DEFAULT '';
  ALTER TABLE "site_content" ADD COLUMN "mission_body" varchar NOT NULL DEFAULT '';
  ALTER TABLE "site_content" ADD COLUMN "vision_heading" varchar NOT NULL DEFAULT '';
  ALTER TABLE "site_content" ADD COLUMN "vision_body" varchar NOT NULL DEFAULT '';
  ALTER TABLE "site_content" ADD COLUMN "values_heading" varchar NOT NULL DEFAULT '';
  ALTER TABLE "site_content" ADD COLUMN "values_note" varchar;

  CREATE TABLE "site_content_values_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL
  );

  ALTER TABLE "site_content_values_items" ADD CONSTRAINT "site_content_values_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_content"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_content_values_items_order_idx" ON "site_content_values_items" USING btree ("_order");
  CREATE INDEX "site_content_values_items_parent_id_idx" ON "site_content_values_items" USING btree ("_parent_id");

  DROP TABLE "site_content_rules_items" CASCADE;

  ALTER TABLE "site_content" ALTER COLUMN "mission_heading" DROP DEFAULT;
  ALTER TABLE "site_content" ALTER COLUMN "mission_body" DROP DEFAULT;
  ALTER TABLE "site_content" ALTER COLUMN "vision_heading" DROP DEFAULT;
  ALTER TABLE "site_content" ALTER COLUMN "vision_body" DROP DEFAULT;
  ALTER TABLE "site_content" ALTER COLUMN "values_heading" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_content" DROP COLUMN "mission_heading";
  ALTER TABLE "site_content" DROP COLUMN "mission_body";
  ALTER TABLE "site_content" DROP COLUMN "vision_heading";
  ALTER TABLE "site_content" DROP COLUMN "vision_body";
  ALTER TABLE "site_content" DROP COLUMN "values_heading";
  ALTER TABLE "site_content" DROP COLUMN "values_note";

  DROP TABLE "site_content_values_items" CASCADE;

  CREATE TABLE "site_content_rules_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL
  );

  ALTER TABLE "site_content_rules_items" ADD CONSTRAINT "site_content_rules_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_content"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_content_rules_items_order_idx" ON "site_content_rules_items" USING btree ("_order");
  CREATE INDEX "site_content_rules_items_parent_id_idx" ON "site_content_rules_items" USING btree ("_parent_id");`)
}
