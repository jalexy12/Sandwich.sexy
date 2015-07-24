Rails.application.routes.draw do
  #statics
  get '/' => "pages#home"
  #devise
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  #resources
  resources :ingredients
  resources :sandwiches do 
    resources :comments
  end
  #instagram callbacks
  get '/challenge_callback' => "sandwiches#instagram_challenge"
  post '/challenge_callback' => "sandwiches#new_sandwich_from_instagram"
  #resque
end

