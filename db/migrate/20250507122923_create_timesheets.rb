class CreateTimesheets < ActiveRecord::Migration[6.0]
  def change
    create_table :timesheets do |t|
      t.time :time
      t.integer :status
      t.date :date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
