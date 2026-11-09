Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\kokoh\.gemini\antigravity\scratch\gen002-math1-platform"

function Generate-Icon {
    param (
        [int]$size,
        [string]$outPath
    )
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background
    $bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 11, 15, 25))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)

    # Border
    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 99, 102, 241), [Math]::Max(1, [int]($size / 16)))
    $g.DrawRectangle($pen, 1, 1, $size - 2, $size - 2)

    # Draw mathematical symbol
    $fontSize = [Math]::Max(8, [int]($size * 0.55))
    $font = New-Object System.Drawing.Font ('Arial', $fontSize, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 56, 189, 248))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $rect = New-Object System.Drawing.RectangleF 0, 0, $size, $size
    $g.DrawString([char]0x222B, $font, $textBrush, $rect, $sf)

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Generate-Icon -size 16 -outPath (Join-Path $dir "favicon-16x16.png")
Generate-Icon -size 32 -outPath (Join-Path $dir "favicon-32x32.png")
Generate-Icon -size 180 -outPath (Join-Path $dir "apple-touch-icon.png")

# Generate favicon.ico from 32x32
$bmp32 = [System.Drawing.Bitmap]::FromFile((Join-Path $dir "favicon-32x32.png"))
$hIcon = $bmp32.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$fs = [System.IO.File]::OpenWrite((Join-Path $dir "favicon.ico"))
$icon.Save($fs)
$fs.Close()
$bmp32.Dispose()

# Generate og-image.jpg (1200x630)
$ogW = 1200
$ogH = 630
$ogBmp = New-Object System.Drawing.Bitmap $ogW, $ogH
$ogG = [System.Drawing.Graphics]::FromImage($ogBmp)
$ogG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$ogG.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Gradient background
$rectOg = New-Object System.Drawing.Rectangle 0, 0, $ogW, $ogH
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush ($rectOg, 
    [System.Drawing.Color]::FromArgb(255, 11, 15, 25), 
    [System.Drawing.Color]::FromArgb(255, 24, 27, 47), 
    [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
$ogG.FillRectangle($gradBrush, $rectOg)

# Header accent bar
$linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 79, 70, 229), 8)
$ogG.DrawLine($linePen, 0, 4, $ogW, 4)

# Grid lines
$gridPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(35, 99, 102, 241), 1)
for ($x = 60; $x -lt $ogW; $x += 60) { $ogG.DrawLine($gridPen, $x, 0, $x, $ogH) }
for ($y = 60; $y -lt $ogH; $y += 60) { $ogG.DrawLine($gridPen, 0, $y, $ogW, $y) }

# Text Drawing
$titleFont = New-Object System.Drawing.Font ('Arial', 44, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font ('Arial', 24, [System.Drawing.FontStyle]::Regular)
$badgeFont = New-Object System.Drawing.Font ('Arial', 18, [System.Drawing.FontStyle]::Bold)

# Badges
$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 79, 70, 229))
$badgeRect = New-Object System.Drawing.RectangleF 100, 70, 520, 44
$ogG.FillRectangle($badgeBrush, $badgeRect)
$whiteBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$ogG.DrawString("GEN002: MATHEMATICS 1 • FACULTY OF ENGINEERING", $badgeFont, $whiteBrush, 115, 80)

# Main Title
$cyanBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 56, 189, 248))
$ogG.DrawString("Calculus, Hyperbolic & Logic Platform", $titleFont, $cyanBrush, 100, 135)

$goldBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 245, 158, 11))
$ogG.DrawString("Helwan National University - Interactive Exam & Practice", $subFont, $goldBrush, 100, 215)

# Feature list
$features = @(
  "Differential Calculus & Hyperbolic Identities",
  "Implicit & Logarithmic Differentiation Solver",
  "Indeterminate Forms & L'Hopital's Rule",
  "Partial Derivatives & Laplace Harmonic Proofs",
  "Discrete Logic, Truth Tables & Composite Functions",
  "Final Boss Extreme Mode + AI Diagnostic Tutor"
)

$featFont = New-Object System.Drawing.Font ('Arial', 20, [System.Drawing.FontStyle]::Regular)
$featBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 226, 232, 240))
$fy = 290
foreach ($f in $features) {
    $bulletBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 16, 185, 129))
    $ogG.FillEllipse($bulletBrush, 100, $fy + 6, 14, 14)
    $ogG.DrawString($f, $featFont, $featBrush, 130, $fy)
    $fy += 45
}

# Math Watermark
$artFont = New-Object System.Drawing.Font ('Times New Roman', 220, [System.Drawing.FontStyle]::Italic)
$artBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(35, 99, 102, 241))
$ogG.DrawString([char]0x222B, $artFont, $artBrush, 900, 120)

# Save as JPEG with compression (< 100KB)
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [int]70)
$ogPath = Join-Path $dir "og-image.jpg"
$ogBmp.Save($ogPath, $encoder, $encParams)

$ogG.Dispose()
$ogBmp.Dispose()

Write-Output "Image and Icon assets generated successfully!"
