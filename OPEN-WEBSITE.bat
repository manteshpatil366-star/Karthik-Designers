@echo off
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
  start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%~dp0index.html"
) else (
  start "" "%~dp0index.html"
)
