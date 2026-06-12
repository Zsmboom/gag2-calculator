const fs = require('fs');
const path = require('path');

// 创建目录（如果不存在）
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// 创建一个简单的宏文件
function createMacroFile(filePath, version) {
  const content = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; ${version}
; This is an example macro file for demonstration purposes only

; Global Variables
global isRunning := false
global fishingDelay := 5000 ; Time between fishing attempts in ms
global reelDelay := 1000 ; Time to wait before reeling in ms
global catchDelay := 500 ; Time to wait after catching a fish in ms

; GUI Setup
Gui, Add, Text, x10 y10 w300 h20, ${version}
Gui, Add, Button, x10 y40 w100 h30 gStartMacro, Start
Gui, Add, Button, x120 y40 w100 h30 gStopMacro, Stop
Gui, Add, Text, x10 y80 w300 h20 vStatusText, Status: Not Running
Gui, Add, GroupBox, x10 y110 w300 h120, Settings
Gui, Add, Text, x20 y130 w120 h20, Fishing Delay (ms):
Gui, Add, Edit, x150 y130 w50 h20 vFishingDelayEdit, %fishingDelay%
Gui, Add, Text, x20 y160 w120 h20, Reel Delay (ms):
Gui, Add, Edit, x150 y160 w50 h20 vReelDelayEdit, %reelDelay%
Gui, Add, Text, x20 y190 w120 h20, Catch Delay (ms):
Gui, Add, Edit, x150 y190 w50 h20 vCatchDelayEdit, %catchDelay%
Gui, Add, Button, x10 y240 w300 h30 gSaveSettings, Save Settings
Gui, Show, w320 h280, ${version}

return

; Start the macro
StartMacro:
    if (isRunning) {
        return
    }
    
    isRunning := true
    GuiControl,, StatusText, Status: Running
    
    ; Start the fishing loop
    SetTimer, FishingLoop, %fishingDelay%
return

; Stop the macro
StopMacro:
    isRunning := false
    GuiControl,, StatusText, Status: Not Running
    SetTimer, FishingLoop, Off
return

; Save settings
SaveSettings:
    Gui, Submit, NoHide
    fishingDelay := FishingDelayEdit
    reelDelay := ReelDelayEdit
    catchDelay := CatchDelayEdit
    
    ; Update the timer if running
    if (isRunning) {
        SetTimer, FishingLoop, %fishingDelay%
    }
    
    MsgBox, Settings saved!
return

; Main fishing loop
FishingLoop:
    if (!isRunning) {
        return
    }
    
    ; Cast fishing rod (press E)
    Send, e
    Sleep, %reelDelay%
    
    ; Reel in (press E again)
    Send, e
    Sleep, %catchDelay%
    
    ; Handle any popups or additional actions
    ; This is just a placeholder for demonstration
    
    return

; Exit the application
GuiClose:
ExitApp`;

  fs.writeFileSync(filePath, content);
  console.log(`Created macro file: ${filePath}`);
}

// 创建README文件
function createReadmeFile(filePath, version) {
  const content = `====================================
${version} - README
====================================

Version: ${version}
Last Updated: May 15, 2023
Website: https://fischmacroo.com

====================================
INTRODUCTION
====================================

Thank you for downloading ${version}! This tool is designed to automate fishing and resource collection in the Roblox Fisch game, helping you save time and improve your gaming experience.

====================================
REQUIREMENTS
====================================

- Windows 10 or 11
- AutoHotkey installed (download from https://www.autohotkey.com if you don't have it)
- Roblox installed
- Stable internet connection

====================================
INSTALLATION
====================================

1. Make sure you have AutoHotkey installed
2. Extract all files from the ZIP archive to a location of your choice
3. Right-click on the .ahk file and select "Run with AutoHotkey"
4. The macro interface should appear

====================================
USAGE
====================================

1. Open Roblox and join the Fisch game
2. Position your character in a good fishing spot
3. Open the Fisch Macro program
4. Adjust settings if needed
5. Click "Start" to begin the automation
6. Click "Stop" when you want to pause or end the automation

====================================
SETTINGS
====================================

- Fishing Delay: Time between fishing attempts (in milliseconds)
- Reel Delay: Time to wait before reeling in (in milliseconds)
- Catch Delay: Time to wait after catching a fish (in milliseconds)

You can adjust these settings based on your game performance and internet connection.

====================================
TROUBLESHOOTING
====================================

If the macro is not working properly:

1. Make sure AutoHotkey is installed correctly
2. Check that you're running the latest version of the macro
3. Ensure Roblox is running in windowed mode
4. Try adjusting the delay settings
5. Restart both the macro and the game

====================================
SUPPORT
====================================

For help or to report issues:

- Visit our website: https://fischmacroo.com
- Email support: support@fischmacroo.com
- Join our Telegram channel: https://t.me/fischmacroo

====================================
DISCLAIMER
====================================

This macro is a third-party tool and is not affiliated with, endorsed by, or connected to Roblox Corporation or the developers of the Fisch game. Use at your own risk and discretion.

The use of automation tools may potentially violate the terms of service of certain games or platforms. It is your responsibility to ensure that your use of this macro complies with all applicable terms of service, rules, and policies.

====================================
LICENSE
====================================

This macro is free software for personal use only. Redistribution or commercial use is prohibited without permission.

© 2023 Fisch Macro Team. All rights reserved.`;

  fs.writeFileSync(filePath, content);
  console.log(`Created README file: ${filePath}`);
}

// 创建RAR文件（模拟）
function createRarFile(outputPath, version) {
  const content = `This is a placeholder for the RAR file of ${version}`;
  fs.writeFileSync(outputPath, content);
  console.log(`Created RAR placeholder: ${outputPath}`);
}

// 定义要创建的宏文件
const macroFiles = [
  { 
    name: 'Fisch Macro v12 with Config (Updated)', 
    path: 'public/downloads/Fisch Macro v12 with Config (Updated).rar',
    isRar: true
  },
  { 
    name: 'Fisch Macro V11 Shake Only', 
    path: 'public/downloads/Fisch Macro V11 Shake Only.ahk',
    isRar: false
  },
  { 
    name: 'Xan LEGACY', 
    path: 'public/downloads/Xan LEGACY.ahk',
    isRar: false
  },
  { 
    name: 'Biblical Accuracy (for Seraphic)', 
    path: 'public/downloads/Biblical Accuracy (for Seraphic).ahk',
    isRar: false
  },
  { 
    name: 'Fisch Macro V12 (feat. IRUS)', 
    path: 'public/downloads/Fisch Macro V12 (feat. IRUS).ahk',
    isRar: false
  },
  { 
    name: 'Angel\'s True Form (V12 Seraphic)', 
    path: 'public/downloads/Angel\'s True Form (V12 Seraphic).ahk',
    isRar: false
  },
  { 
    name: 'V12 no GUI', 
    path: 'public/downloads/V12 no GUI.ahk',
    isRar: false
  },
  { 
    name: 'Fisch Macro V11', 
    path: 'public/downloads/Fisch Macro V11.ahk',
    isRar: false
  },
  { 
    name: 'Fisch Macro V12 Canonical', 
    path: 'public/downloads/Fisch Macro V12 Canonical.ahk',
    isRar: false
  }
];

// 创建所有宏文件
macroFiles.forEach(({ name, path: filePath, isRar }) => {
  const fullPath = path.join(process.cwd(), filePath);
  ensureDirectoryExists(path.dirname(fullPath));
  
  if (isRar) {
    createRarFile(fullPath, name);
  } else {
    createMacroFile(fullPath, name);
  }
});

console.log('All macro files have been created!'); 