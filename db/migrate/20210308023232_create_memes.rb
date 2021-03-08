class CreateMemes < ActiveRecord::Migration[6.1]
  def change
    create_table :memes do |t|
      t.string :title
      t.string :image_url
      t.integer :rating

      t.timestamps
    end
  end
end
