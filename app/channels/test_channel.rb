class TestChannel < ApplicationCable::Channel
  def subscribed
  	puts "\n\n\n\n\n\n\n\n\n\n\n"
    puts "fucking subbed"
  end

  def follow(data)
    stop_all_streams
    stream_from "test"
  end

  def unfollow
    stop_all_streams
  end
end