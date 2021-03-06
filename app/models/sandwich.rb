class Sandwich < ActiveRecord::Base
	has_attached_file :sandwich_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
    has_and_belongs_to_many :ingredients
    has_many :comments
    
    searchkick

    validates :description, uniqueness: true
    validates_attachment_content_type :sandwich_image, :content_type => /\Aimage\/.*\Z/

    paginates_per 20
    
    default_scope { order("created_at DESC") }

    def sandwich_image_url
    	self.sandwich_image.url(:medium)
    end

end
