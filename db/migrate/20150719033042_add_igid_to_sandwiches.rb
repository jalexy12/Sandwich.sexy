class AddIgidToSandwiches < ActiveRecord::Migration
  def change
    add_column :sandwiches, :ig_id, :string
  end
end
