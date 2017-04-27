Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { registrations: "registrations"}
  resources :projects
  resources :contacts, only: [:new, :create]

  root 'projects#index'
end
