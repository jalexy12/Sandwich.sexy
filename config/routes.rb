require 'resque/server'

Rails.application.routes.draw do
  #statics
  get '/' => "sandwiches#home"
  #devise
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  #resources
  resources :ingredients
  resources :sandwiches
  #instagram callbacks
  get '/challenge_callback' => "sandwiches#from_instagram"
  post '/challenge_callback' => "sandwiches#new_sandwich"
  #resque
  mount Resque::Server.new, at: "/resque"
end

