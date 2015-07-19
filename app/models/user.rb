
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise  :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
      	  :omniauthable, :omniauth_providers => [:instagram]

   def self.from_omniauth(auth)
   	   puts "\n\n\n\n\n\n\n"
   	   puts "Email"
   	   auth.info.email
   	   puts "Auth"
   	   ap auth

       where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
         user.provider = auth.provider
         user.uid = auth.uid
         user.name = auth.info.nickname
         user.token = auth.credentials.token
         user.password = Devise.friendly_token[0,20]
       end
   end

   def email_required?
     false
   end


end
