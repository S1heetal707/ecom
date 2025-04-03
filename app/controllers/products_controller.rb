class ProductsController < ApplicationController
    def index
        if params[:category].present?
          category = Category.find_by(slug: params[:category])
          if category
            products = category.products
            render json: products, status: :ok
          else
            render json: { error: "Category not found" }, status: :not_found
          end
        else
          render json: Product.all, status: :ok
        end
    end
  
    def show
      product = Product.find_by(id: params[:id])
      if product
        render json: product, status: :ok
      else
        render json: { error: "Product not found" }, status: :not_found
      end
    end
end