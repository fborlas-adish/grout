require 'test_helper'

class TimesheetControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get timesheet_index_url
    assert_response :success
  end

  test "should get create" do
    get timesheet_create_url
    assert_response :success
  end

  test "should get —-skip-routes" do
    get timesheet_—-skip-routes_url
    assert_response :success
  end

end
