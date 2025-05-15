class ApplicationController < ActionController::Base
    layout :layout_by_resource

    private

    def layout_by_resource
      if devise_controller? && resource_name == :admin_user
        "active_admin_logged_out"
      else
        "application"
      end
    end
end
