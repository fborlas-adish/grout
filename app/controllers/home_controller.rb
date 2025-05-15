class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    latest_timesheets = current_user.timesheets.order(date: :desc, time: :desc).limit(10)

    render :index, locals: {
      timesheet_props: latest_timesheets.as_json(only: [:id, :time, :status, :date])
    }
  end
end
