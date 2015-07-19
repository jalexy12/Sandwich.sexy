class CreateTagInfos < ActiveRecord::Migration
  def change
    create_table :tag_infos do |t|
      t.string :last_tag

      t.timestamps null: false
    end
  end
end
