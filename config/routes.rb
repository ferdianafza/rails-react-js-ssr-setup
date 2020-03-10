Rails.application.routes.draw do

	namespace :api do
	  namespace :v1 do
	    resources :posts, only: [:index, :create, :show, :update, :destroy]
	    resources :books, only: [:index, :create, :show, :update, :destroy]
	    resources :students, only: [:index, :create, :show, :update, :destroy]
	  end
	end

	get '/*path' => 'hello_world#index'
    # get 'posts/:id', to: 'hello_world#index';
	get 'hello_world', to: 'hello_world#index'
	get 'bye_world', to: 'hello_world#index'
	root 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
