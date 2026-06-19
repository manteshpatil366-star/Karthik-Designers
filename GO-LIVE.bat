@echo off
title Karthik Designers - Go Live
color 0E
echo.
echo  ============================================================
echo   KARTHIK DESIGNERS - Share your website online
echo  ============================================================
echo.
echo  Right now OPEN-WEBSITE.bat only works on YOUR computer.
echo  To share a LINK with clients on WhatsApp or Instagram,
echo  put the site on the internet (free options below).
echo.
echo  ------------------------------------------------------------
echo   OPTION 1 - EASIEST (Netlify Drop) - Recommended
echo  ------------------------------------------------------------
echo   1. Browser will open Netlify Drop
echo   2. Drag this ENTIRE folder into the page:
echo      %~dp0
echo   3. Wait ~30 seconds - you get a link like:
echo      https://random-name-123.netlify.app
echo   4. Copy that link and share on WhatsApp / Instagram
echo   5. Free account lets you rename to karthik-designers-raichur.netlify.app
echo.
echo  ------------------------------------------------------------
echo   OPTION 2 - Surge.sh (one command, needs Node.js)
echo  ------------------------------------------------------------
echo   Run in this folder:
echo   npx surge . karthik-designers-raichur.surge.sh
echo   Share: https://karthik-designers-raichur.surge.sh
echo.
echo  ------------------------------------------------------------
echo   OPTION 3 - GitHub Pages (permanent, free)
echo  ------------------------------------------------------------
echo   1. Create GitHub repo - upload this folder
echo   2. Settings - Pages - Deploy from main branch
echo   3. Link: https://YOURUSERNAME.github.io/repo-name
echo.
echo  ------------------------------------------------------------
echo   OPTION 4 - Buy a domain (most professional)
echo  ------------------------------------------------------------
echo   Buy karthikdesigners.in on GoDaddy / Namecheap
echo   Point it to Netlify (free hosting)
echo.
echo  ============================================================
echo.
set /p choice="Open Netlify Drop in browser now? (Y/N): "
if /i "%choice%"=="Y" (
  start "" "https://app.netlify.com/drop"
  explorer "%~dp0"
  echo.
  echo  Folder opened + Netlify Drop opened.
  echo  Drag the folder "interior design" into Netlify.
) else (
  echo  No problem. Run this file again when ready.
)
echo.
pause
