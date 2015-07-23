class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id
      t.string :comment
      t.references :sandwich, index: true, foreign_key: true

      t.timestamps
    end
  end
end
