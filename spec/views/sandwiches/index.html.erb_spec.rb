require 'rails_helper'

RSpec.describe "sandwiches/index", type: :view do
  before(:each) do
    assign(:sandwiches, [
      Sandwich.create!(
        :name => "Name",
        :description => "MyText"
      ),
      Sandwich.create!(
        :name => "Name",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of sandwiches" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end


