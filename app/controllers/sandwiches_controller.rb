require 'keyword_finder'

class SandwichesController < ApplicationController
  before_action      :set_sandwich, only: [:edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  include Keywords

  def instagram_challenge
    render json: params["hub.challenge"]
  end

  def new_sandwich_from_instagram
    user = User.first
    last_sandwich = Sandwich.last.ig_id.to_s[0..18] 
    InstagramSandwichJob.perform_later(last_sandwich, user.token)
    render :nothing => true
  end
  
  def index
      @sandwiches = Sandwich.all.page(params[:page])
      @meta = meta_for(@sandwiches)
  end

  def keywords
      sandwiches =  $redis.get("sandwich_keywords")
      $redis.del("sandwich_keywords")

      if sandwiches.nil?
        sandwiches = Keywords.find_keywords(Sandwich).to_json
        $redis.set("sandwich_keywords", sandwiches)
        $redis.expire("sandwich_keywords",3.hours.to_i)
      end
      @keywords = JSON.load sandwiches
      render json: @keywords
  end

  def search
    sandwich_key = redis_key_search_sandwiches(params[:term], params[:page])
    meta_key = redis_key_search_meta(params[:term], params[:page])
    sandwiches = $redis.get(sandwich_key)
    meta = $redis.get(meta_key)

    if sandwiches.nil?
      @sandwiches = Sandwich.search(
        params[:term], 
        page: params[:page], 
        per_page: 20)
      @meta = meta_for(@sandwiches)
      $redis.set(meta_key, @meta.to_json)
      $redis.set(sandwich_key, @sandwiches.to_json(methods: [:sandwich_image_url]))
      expire_keys([meta_key, sandwich_key], 1.hour.to_i)
    else 
      @sandwiches = JSON.load(sandwiches)
      @meta = JSON.load(meta)
    end
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

    def redis_key_search_sandwiches(term, page)
      "sandwiches_#{term}_#{page}_sandwiches"
    end

    def redis_key_search_meta(term, page)
      "sandwiches_#{term}_#{page}_meta"
    end

    def expire_keys(keys, expiration_time)
      keys.each do | key |
        $redis.expire(key, expiration_time)
      end
    end

    def meta_for(sandwiches)
      return {
        current_page: sandwiches.current_page,
        next_page: sandwiches.next_page,
        prev_page: sandwiches.prev_page,
        total_pages: sandwiches.total_pages,
        total_count: sandwiches.total_count
      }
    end

    def set_sandwich
      @sandwich = Sandwich.find(params[:id])
    end

    def sandwich_params
      params.require(:sandwich).permit(:name, :description, :sandwich_image)
    end
end
