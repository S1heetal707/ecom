class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 10, scale: 2, null: false
      t.string :image_url
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end
  end
end
