class TimesheetController < ApplicationController
  def index
  end

  def create
    @timesheet = Timesheet.new(timesheet_params.merge(user: current_user))
    @timesheet.date = Date.today
    @timesheet.time = Time.current

    if @timesheet.save
      render json: @timesheet, status: :created
    else
      render json: @timesheet.errors, status: :unprocessable_entity
    end
  end

  private
  def timesheet_params
    params.require(:timesheet).permit(:status)
  end
end
