Rails.application.routes.draw do

  resources :projects
  resources :contacts, only: [:new, :create]

  root 'application#index'
end
