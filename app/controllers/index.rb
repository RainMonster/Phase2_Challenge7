get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :json
  {:cell => rand(0..8), :color => "#" + "%06x" % (rand * 0xffffff)}.to_json
end