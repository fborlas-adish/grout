class CreateCertificateOfAttendances < ActiveRecord::Migration[6.0]
  def change
    create_table :certificate_of_attendances do |t|
      t.text :remark
      t.date :date_filed
      t.integer :status
      t.references :timesheet, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
