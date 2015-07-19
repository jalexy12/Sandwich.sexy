class SandwichesController < ApplicationController
  before_action       :set_sandwich, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  def home
  end

  def from_instagram
    render json: params["hub.challenge"]
  end

  def new_sandwich
    user = User.first
    InstagramSandwichJob.perform_later("Performed the job", user.token)
    render :nothing => true
  end
  def index
    @sandwiches = Sandwich.all
  end

  def show
  end

  def new
    @sandwich = Sandwich.new
  end

  def edit
  end

  def create
    @sandwich = Sandwich.new(sandwich_params)

    respond_to do |format|
      if @sandwich.save
        format.html { redirect_to @sandwich, notice: 'Sandwich was successfully created.' }
        format.json { render :show, status: :created, location: @sandwich }
      else
        format.html { render :new }
        format.json { render json: @sandwich.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @sandwich.update(sandwich_params)
        format.html { redirect_to @sandwich, notice: 'Sandwich was successfully updated.' }
        format.json { render :show, status: :ok, location: @sandwich }
      else
        format.html { render :edit }
        format.json { render json: @sandwich.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @sandwich.destroy
    respond_to do |format|
      format.html { redirect_to sandwiches_url, notice: 'Sandwich was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_sandwich
      @sandwich = Sandwich.find(params[:id])
    end

    def sandwich_params
      params.require(:sandwich).permit(:name, :description, :sandwich_image)
    end
end
