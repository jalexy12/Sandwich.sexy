class CallbacksController < Devise::OmniauthCallbacksController
    def instagram
    	ap "Controller"
    	ap request.env['omniauth.auth']
        @user = User.from_omniauth(request.env["omniauth.auth"])
        sign_in_and_redirect @user
    end
end