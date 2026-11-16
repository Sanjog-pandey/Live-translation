@echo off
cd /d "%~dp0"
start "" chrome "http://localhost:8765"
node server.js
pause
