#!/usr/bin/env zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_DIR"

NODE20_BIN="$PROJECT_DIR/node_modules/node/bin/node"
EXPO_CLI="$PROJECT_DIR/node_modules/expo/bin/cli"

if [[ ! -x "$NODE20_BIN" ]]; then
  echo "Instalando Node 20 local para este proyecto..."
  npm install --no-save node@20.20.0
fi

if [[ ! -x "$NODE20_BIN" || ! -f "$EXPO_CLI" ]]; then
  echo "No se pudo preparar Expo Go."
  exit 1
fi

echo "Arrancando Doinglight Fresh con Expo Go..."
exec "$NODE20_BIN" "$EXPO_CLI" start --tunnel
