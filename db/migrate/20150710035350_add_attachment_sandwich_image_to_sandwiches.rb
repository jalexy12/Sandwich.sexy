class AddAttachmentSandwichImageToSandwiches < ActiveRecord::Migration
  def self.up
    change_table :sandwiches do |t|
      t.attachment :sandwich_image
    end
  end

  def self.down
    remove_attachment :sandwiches, :sandwich_image
  end
end
