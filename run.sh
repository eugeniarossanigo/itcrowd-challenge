#!/usr/bin/env node
echo "running back & front"
(cd backend && npm i && npm run dev) & (cd frontend && npm i && npm run build && npm run preview)
