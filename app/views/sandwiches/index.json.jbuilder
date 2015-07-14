json.array!(@sandwiches) do |sandwich|
  json.extract! sandwich, :id, :name, :description, :sandwich_image
  json.url sandwich_url(sandwich, format: :json)
end
