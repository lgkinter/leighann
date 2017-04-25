class AddCategoriesToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :categories, :string
  end
end
