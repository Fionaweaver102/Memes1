Rails.application.routes.draw do
  # resources :comments
  # resources :users
  
resources :memes, only: [:index, :create]
resources :comments, only: [:index, :create]
   


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
