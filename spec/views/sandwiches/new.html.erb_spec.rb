require 'rails_helper'

RSpec.describe "sandwiches/new", type: :view do
  before(:each) do
    assign(:sandwich, Sandwich.new(
      :name => "MyString",
      :description => "MyText"
    ))
  end

  it "renders new sandwich form" do
    render

    assert_select "form[action=?][method=?]", sandwiches_path, "post" do

      assert_select "input#sandwich_name[name=?]", "sandwich[name]"

      assert_select "textarea#sandwich_description[name=?]", "sandwich[description]"
    end
  end
end
