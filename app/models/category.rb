class Category < ApplicationRecord
    before_validation :generate_slug, on: :create
    has_many :products, dependent: :destroy
  
    validates :name, presence: true, uniqueness: true
    validates :slug, presence: true, uniqueness: true

    private

    def generate_slug
        self.slug = name.parameterize if slug.blank?
    end
  end
  