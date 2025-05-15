class CertificateOfAttendance < ApplicationRecord
  belongs_to :timesheet
  belongs_to :user

  enum status: { pending: 0, approved: 1, declined: 2 }

  validates :remark, presence: true
  validates :date_filed, presence: true
end