class Sandwich < ActiveRecord::Base
	has_attached_file :sandwich_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
    validates_attachment_content_type :sandwich_image, :content_type => /\Aimage\/.*\Z/

    has_and_belongs_to_many :ingredients
    paginates_per 20
    
    default_scope { order("created_at DESC") }
    validates :description, uniqueness: true
end
