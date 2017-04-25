class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :registerable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable,
          :trackable, :validatable

  def is_admin?
    self.admin == true
  end
end
