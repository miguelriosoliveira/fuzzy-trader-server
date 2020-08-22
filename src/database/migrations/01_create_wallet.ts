import Knex from 'knex';

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
	return knex.schema.createTable('wallet', table => {
		table.string('symbol').unique().notNullable();
		table.decimal('value').notNullable();
		table.decimal('quantity').notNullable();
	});
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
	return knex.schema.dropTable('wallet');
}
