class IngredientsController < ApplicationController

  before_action :set_ingredient, only: [:show, :edit, :update, :destroy]
  before_action :new_ingredient, only: [:new, :create]

  def index
    @ingredients = Ingredient.all
  end

  def show

  end

  def new
  end

  def edit
  end

  def create
    responder("Ingredient was successfully created", @ingredient)
  end

  def update
    responder("Ingredient was successfully updated", @ingredient)
  end

  def destroy
    @ingredient.destroy
    respond_to do |format|
      format.html { redirect_to ingredients_url, notice: 'Ingredient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def new_ingredient
    @ingredient = Ingredient.new(ingredient_params)
  end

  def set_ingredient
    @ingredient = Ingredient.find(params[:id])
  end

  def responder(notice, ingredient)
    respond_to do |format|
      if @ingredient.save
        format.html { redirect_to ingredient, notice: notice }
        format.json { render :show, status: :created, location: ingredient }
      else
        format.html { render :new }
        format.json { render json: ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end
end
