class CommentsController < ApplicationController
	before_action :set_sandwich

	def index
		comments = @sandwich.comments.all

		if !@sandwich
			render status: 404,  json: "Sandwich not found"
		else
			render status: 200, json: comments
		end
	end

	def create
		ap params
		comment = @sandwich.comments.new(comment: params[:text], author_id: current_user.id)

		if comment.save
			render status: 200, json: @sandwich.comments.all
		else
			render status: 400, json: "Comment not added"
		end
	end

	private

	def set_sandwich
		@sandwich = Sandwich.find_by_id(params[:sandwich_id])
	end
end
