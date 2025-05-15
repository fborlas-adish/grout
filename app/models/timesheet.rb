class Timesheet < ApplicationRecord
  belongs_to :user

  enum status: { in: 0, out: 1 }
end
