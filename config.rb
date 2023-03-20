# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :gh_pages

  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash

  # Include the .npmrc file in the build directory
  FileUtils.cp('.npmrc', 'build/')
end
