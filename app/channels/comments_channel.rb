class CommentsChannel < ApplicationCable::Channel

  def follow(data)
    stop_all_streams
    stream_from "sandwiches:#{data['sandwich_id'].to_i}:comments"
  end

  def unfollow
    stop_all_streams
  end
end