import Knex from 'knex';

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
	return knex.schema.createTable('balance', table => {
		table.decimal('value').notNullable();
	});
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
	return knex.schema.dropTable('balance');
}
