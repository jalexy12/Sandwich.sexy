class CreateSandwiches < ActiveRecord::Migration
  def change
    create_table :sandwiches do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
