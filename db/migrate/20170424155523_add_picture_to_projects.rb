class AddPictureToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :index_pic, :string
    add_column :projects, :profile_pics, :json
  end
end
