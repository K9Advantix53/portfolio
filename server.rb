require 'sinatra'

set :bind, '0.0.0.0'

get "/" do
  erb :index
end

get "/about" do
  erb :about
end
