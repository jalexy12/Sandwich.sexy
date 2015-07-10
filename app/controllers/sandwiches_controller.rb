class SandwichesController < ApplicationController
  before_action :set_sandwich, only: [:show, :edit, :update, :destroy]

  # GET /sandwiches
  # GET /sandwiches.json
  def index
    @sandwiches = Sandwich.all
  end

  # GET /sandwiches/1
  # GET /sandwiches/1.json
  def show
  end

  # GET /sandwiches/new
  def new
    @sandwich = Sandwich.new
  end

  # GET /sandwiches/1/edit
  def edit
  end

  # POST /sandwiches
  # POST /sandwiches.json
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

  # PATCH/PUT /sandwiches/1
  # PATCH/PUT /sandwiches/1.json
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

  # DELETE /sandwiches/1
  # DELETE /sandwiches/1.json
  def destroy
    @sandwich.destroy
    respond_to do |format|
      format.html { redirect_to sandwiches_url, notice: 'Sandwich was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sandwich
      @sandwich = Sandwich.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sandwich_params
      params.require(:sandwich).permit(:name, :description)
    end
end
