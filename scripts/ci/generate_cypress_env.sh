# !/bin/bash
# Ouputs a cypress.env.json for generating the cypress configuration for a
# preview environment

PREVIEW_NAMESPACE="$(echo $JOB_NAME | tr / - | tr '[:upper:]' '[:lower:]')"
APPLICATION_URL="http://yo-frontend.jx-${PREVIEW_NAMESPACE}.jenkins-x-example.dev.launch.adobe.net"

jq -n \
  --arg application_url "$APPLICATION_URL" \
  '{application_url: $application_url}' > cypress.env.json
