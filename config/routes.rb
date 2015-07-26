Rails.application.routes.draw do
  #statics
  get '/' => "pages#home"
  #devise
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  #resources
  resources :ingredients
  resources :sandwiches, except: [:show] do 
    resources :comments
  end
  #Sandwiches
  get '/sandwiches/keywords' => "sandwiches#keywords"
  get '/sandwiches/search' => "sandwiches#search"
  #instagram callbacks
  get '/challenge_callback' => "sandwiches#instagram_challenge"
  post '/challenge_callback' => "sandwiches#new_sandwich_from_instagram"
  #resque
end

