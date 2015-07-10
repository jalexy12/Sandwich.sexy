class AddAttachmentInredientImageToIngredients < ActiveRecord::Migration
  def self.up
    change_table :ingredients do |t|
      t.attachment :inredient_image
    end
  end

  def self.down
    remove_attachment :ingredients, :inredient_image
  end
end
