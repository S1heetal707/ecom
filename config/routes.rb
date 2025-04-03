Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  resources :categories, only: [:index, :show]
  resources :products, only: [:index]
end
