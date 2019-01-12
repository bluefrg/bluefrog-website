workflow "New workflow" {
  on = "push"
  resolves = ["Deploy to S3", "Invalidate CloudFront ache"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm install"
}

action "Create Nuxt.js project" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm run generate"
  needs = ["Install dependencies"]
}

action "Deploy to S3" {
  uses = "actions/aws/cli@8d318706868c00929f57a0b618504dcdda52b0c9"
  needs = ["Create Nuxt.js project"]
  env = {
    AWS_S3_BUCKET = "bluefrog-ca-website1"
  }
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  runs = "aws s3 sync ./dist s3://$AWS_S3_BUCKET"
}

action "Invalidate CloudFront ache" {
  uses = "actions/aws/cli@8d318706868c00929f57a0b618504dcdda52b0c9"
  needs = ["Create Nuxt.js project"]
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  runs = "aws cloudfront create-invalidation --distribution-id=$AWS_CLOUDFRONT_DISTRO --paths '/*'"
  env = {
    AWS_CLOUDFRONT_DISTRO = "E2107SD7GS1DUD"
  }
}
