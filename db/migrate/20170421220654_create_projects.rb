class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :subtitle
      t.string :date
      t.string :skills
      t.string :link
      t.text :overview

      t.timestamps
    end
  end
end
