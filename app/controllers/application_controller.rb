class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_action :handle_cookies

  protected
  
  def json_request?
    request.format.json?
  end
  
  # def handle_cookies
  # 	cookies.signed[:user_id] ||= current_user.id
  # end
end
