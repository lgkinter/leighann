class Project < ApplicationRecord
  validates :title, presence: true
  validates :subtitle, presence: true
  mount_uploader :index_pic, PictureUploader, presence: true
  mount_uploaders :profile_pics, PictureUploader
  validate :picture_size
  serialize :profile_pics, Array

  private

    # Validates the size of an uploaded picture.
    def picture_size
      if index_pic.size > 5.megabytes
        errors.add(:index_pic, "#{index_pic.url} should be less than 5MB")
      end
      if !(profile_pics.nil?)
        profile_pics.each do |pic|
          if pic.size > 5.megabytes
            errors.add(:profile_pics, "#{pic.url} should be less than 5MB}")
          end
        end
      end
    end
end
