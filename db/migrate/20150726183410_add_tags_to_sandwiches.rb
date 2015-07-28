class AddTagsToSandwiches < ActiveRecord::Migration
  def change
  	add_column :sandwiches, :tags, :text, array:true, default: []
  end
end
