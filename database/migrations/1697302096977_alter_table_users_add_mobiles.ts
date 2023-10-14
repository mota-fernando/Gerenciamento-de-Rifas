import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterTableUsersAddMobiles extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('surname', 45).nullable()
      table.string('mobile', 45).nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('surname')
      table.dropColumn('mobile')
    })
  }
}
