# -------------------------------------------------
# 1️⃣  Define where we want the assets to end up
# -------------------------------------------------
$Destination = Join-Path (Get-Location) "public\oxygen2"

# -------------------------------------------------
# 2️⃣  Clone the upstream repo into a temporary folder
# -------------------------------------------------
$Temp = Join-Path $env:TEMP ("oxygen2_tmp_{0}" -f ([guid]::NewGuid().ToString("N")))
git clone --depth 1 https://invent.kde.org/pinheiro/oxygen2.git $Temp

# -------------------------------------------------
# 3️⃣  Locate the real SVG directory inside the clone.
#     (The repo puts its source files under <clone>/src/svg/)
# -------------------------------------------------
$SvgRoot = Join-Path $Temp "src\svg"

if (-not (Test-Path $SvgRoot)) {
    Write-Host "❌ Could not find the SVG source folder. Something went wrong."
    exit 1
}

# -------------------------------------------------
# 4️⃣  Copy the SVG tree into the public folder
# -------------------------------------------------
Write-Host "📂 Copying SVGs → $Destination"
# Ensure the destination exists (creates public\oxygen2 if missing)
New-Item -ItemType Directory -Path $Destination -Force | Out-Null
Copy-Item -Path (Join-Path $SvgRoot "*") -Destination $Destination -Recurse -Force -Verbose

# -------------------------------------------------
# 5️⃣  Clean up the temporary clone
# -------------------------------------------------
Remove-Item -Recurse -Force $Temp

Write-Host "`n✅ All SVG assets are now in public/oxygen2 – you can run the app!" -ForegroundColor Green
