class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :firstname
      t.string :lastname
      t.string :address
      t.string :major

      t.timestamps
    end
  end
end
