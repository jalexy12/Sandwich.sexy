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
    	self.sandwich_image
    end

    def self.find_keywords
	    keywords = {}
	    banned_list = ["of", "and", "or", "the", "!", "as", "all", "its", "it's", "es", "un", "that", "&", "en", "y", "*", "if", "-", "at"]
	    Sandwich.all.each do | sandwich |
	    	split_sandwiches_description = sandwich.description.strip.downcase.split
	    	split_sandwiches_description.each do | word | 
	    		if keywords[word] && !banned_list.include?(word)
	    			keywords[word] += 1
	    		else
	    			keywords[word] = 1
	    		end
	    	end
	    end
	    new_keywords = []
		keywords.each do | key, value |
			if value > 20
				new_keywords.push(key)
			end
		end
		new_keywords
	end
end
