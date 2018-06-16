wget -q "$AUTH0_PUBLIC_KEY_URL" -O /app/config/pubKey.pem

exec "$@"