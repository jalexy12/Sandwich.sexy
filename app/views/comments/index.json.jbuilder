json.array(@comments) do |comment|
  json.extract! comment, :id, :comment, :author
  json.url comment_url(comment, format: :json)
end