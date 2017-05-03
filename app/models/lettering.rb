class Lettering < ApplicationRecord
  validates :name, presence: true
  mount_uploader :image, PictureUploader, presence: true
end
