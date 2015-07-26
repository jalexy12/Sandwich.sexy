module Keywords
	def self.find_keywords(resource)
		keywords = {}
		banned_list = ["of", "and", "or", "the", "!", "as", "all", "its", "it's", "es", "un", "that", "&", "en", "y", "*", "if", "-", "at", "is", "was", "this"]
		resource.all.each do | instance |
			split_instance_description = instance.description.strip.downcase.split
			split_instance_description.each do | word | 
				if keywords[word] && !banned_list.include?(word)
					keywords[word] += 1
				else
					keywords[word] = 1
				end
			end
		end
		new_keywords = []
		keywords.each do | key, value |
			if value > 3
				new_keywords.push(key)
			end
		end
		new_keywords
	end
end