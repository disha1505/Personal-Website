# Start Backend Server
Write-Host "Starting Backend Server..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; node src/index.js"

# Wait a moment
Start-Sleep 3

# Start Frontend Server  
Write-Host "Starting Frontend Server..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; npm run dev"

Write-Host "Both servers should be starting..."
Write-Host "Backend: http://localhost:5000"
Write-Host "Frontend: http://localhost:5173 or http://localhost:5175"
