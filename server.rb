require 'sinatra'

set :bind, '0.0.0.0'

get "/" do
  send_file 'views/index.html'
end

get "/about" do
  send_file 'views/about.html'
end
