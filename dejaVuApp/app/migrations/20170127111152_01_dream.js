
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dream', function(table){
    table.increments('id');
    table.string('term');
    table.text('interpretation');
    table.string('image_url');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dream');
};
