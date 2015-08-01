json.meta @meta

json.sandwiches(@sandwiches) do |sandwich|
  json.extract! sandwich, :id, :name, :description, :sandwich_image.url, :created_at, :tags
  json.url sandwich_url(sandwich, format: :json)
end

