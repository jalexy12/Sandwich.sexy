require 'rails_helper'

RSpec.describe "Sandwiches", type: :request do
  describe "GET /sandwiches" do
    it "works! (now write some real specs)" do
      get sandwiches_path
      expect(response).to have_http_status(200)
    end
  end
end
