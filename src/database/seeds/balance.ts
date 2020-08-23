import Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('balance').insert([{ value: 987654.32 }]);
}
