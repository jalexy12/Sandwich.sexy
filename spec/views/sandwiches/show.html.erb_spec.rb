require 'rails_helper'

RSpec.describe "sandwiches/show", type: :view do
  before(:each) do
    @sandwich = assign(:sandwich, Sandwich.create!(
      :name => "Name",
      :description => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
  end
end
