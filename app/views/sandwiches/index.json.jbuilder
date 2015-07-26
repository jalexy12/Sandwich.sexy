json.meta @meta

json.sandwiches(@sandwiches) do |sandwich|
  json.extract! sandwich, :id, :name, :description, :sandwich_image, :created_at
  json.url sandwich_url(sandwich, format: :json)
end

