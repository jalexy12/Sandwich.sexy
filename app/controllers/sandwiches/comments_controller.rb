class Sandwiches::CommentsController < ApplicationController
	before_action :set_sandwich

	def index
		@comments = @sandwich.comments.order("created_at DESC")
		if !@sandwich
			render status: 404,  json: "Sandwich not found"
		else
			render status: 200, json: @comments.to_json(:include => :author)
		end
	end

	def create
		comment = @sandwich.comments.new(comment: params[:text], author_id: current_user.id)

		if comment.save
			render status: 200, json: @sandwich.comments.order("created_at DESC").to_json(:include => :author)
		else
			render status: 400, json: "Comment not added"
		end
	end

	private

	def set_sandwich
		@sandwich = Sandwich.find_by_id(params[:sandwich_id])
	end
end
