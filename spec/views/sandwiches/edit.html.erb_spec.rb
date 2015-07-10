require 'rails_helper'

RSpec.describe "sandwiches/edit", type: :view do
  before(:each) do
    @sandwich = assign(:sandwich, Sandwich.create!(
      :name => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit sandwich form" do
    render

    assert_select "form[action=?][method=?]", sandwich_path(@sandwich), "post" do

      assert_select "input#sandwich_name[name=?]", "sandwich[name]"

      assert_select "textarea#sandwich_description[name=?]", "sandwich[description]"
    end
  end
end
