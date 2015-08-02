class PagesController < ApplicationController
  def home 
  	ActionCable.server.broadcast('Test', fuck: "fuck")
  end

  def test 

  end
end
