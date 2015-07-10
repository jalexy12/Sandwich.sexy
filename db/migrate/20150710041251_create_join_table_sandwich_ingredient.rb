class CreateJoinTableSandwichIngredient < ActiveRecord::Migration
  def change
    create_join_table :sandwiches, :ingredients do |t|
      # t.index [:sandwich_id, :ingredient_id]
      # t.index [:ingredient_id, :sandwich_id]
    end
  end
end
