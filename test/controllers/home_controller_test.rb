require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_index_url
    assert_response :success
  end

  test "should get —skip-routes" do
    get home_—skip-routes_url
    assert_response :success
  end

end
