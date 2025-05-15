ActiveAdmin.register Timesheet do
  permit_params :time, :status, :date, :user_id

  index do
    selectable_column
    id_column
    column :user
    column :date
    column("Time") { |ts| ts.time.strftime("%H:%M") }
    column("Status") { |ts| ts.status.upcase }
    actions
  end

  show do
    attributes_table do
      row :id
      row :user
      row :date
      row("Time") { |ts| ts.time.strftime("%H:%M") }
      row("Status") { |ts| ts.status.upcase }
      row :created_at
      row :updated_at
    end
  end
end
