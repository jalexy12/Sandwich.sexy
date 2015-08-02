class SandwichRelayJob < ActiveJob::Base
  def perform(comment)
    ActionCable.server.broadcast "sandwiches:#{comment.sandwich_id}:comments",
                                 comment: comment.to_json(:include => :author)
  end
end