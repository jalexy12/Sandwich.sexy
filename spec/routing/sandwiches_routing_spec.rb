require "rails_helper"

RSpec.describe SandwichesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/sandwiches").to route_to("sandwiches#index")
    end

    it "routes to #new" do
      expect(:get => "/sandwiches/new").to route_to("sandwiches#new")
    end

    it "routes to #show" do
      expect(:get => "/sandwiches/1").to route_to("sandwiches#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/sandwiches/1/edit").to route_to("sandwiches#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/sandwiches").to route_to("sandwiches#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/sandwiches/1").to route_to("sandwiches#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/sandwiches/1").to route_to("sandwiches#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/sandwiches/1").to route_to("sandwiches#destroy", :id => "1")
    end

  end
end
