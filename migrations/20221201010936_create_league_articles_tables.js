/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("league_articles", (table) => {
        table.uuid("id").primary();
        table.string("article_title").notNullable();
        table.string("description", 9999).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.string("author").notNullable().defaultTo("Anonymous");
        table.binary("image").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("league_articles");
};
