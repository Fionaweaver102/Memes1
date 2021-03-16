class MemeSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url
end 