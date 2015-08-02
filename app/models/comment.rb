class Comment < ActiveRecord::Base
  belongs_to :sandwich, foreign_key: "sandwich_id"
  belongs_to :author, class_name: "User", foreign_key: "author_id"

  after_commit { SandwichRelayJob.perform_later(self) }

end
