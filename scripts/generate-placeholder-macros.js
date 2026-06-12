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

; Fisch Macro ${version}
; This is an example macro file for demonstration purposes only

; Global Variables
global isRunning := false
global fishingDelay := 5000 ; Time between fishing attempts in ms
global reelDelay := 1000 ; Time to wait before reeling in ms
global catchDelay := 500 ; Time to wait after catching a fish in ms

; GUI Setup
Gui, Add, Text, x10 y10 w300 h20, Fisch Macro ${version}
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
Gui, Show, w320 h280, Fisch Macro ${version}

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
FISCH MACRO ${version} - README
====================================

Version: ${version}
Last Updated: May 15, 2023
Website: https://fischmacroo.com

====================================
INTRODUCTION
====================================

Thank you for downloading Fisch Macro! This tool is designed to automate fishing and resource collection in the Roblox Fisch game, helping you save time and improve your gaming experience.

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

Fisch Macro is a third-party tool and is not affiliated with, endorsed by, or connected to Roblox Corporation or the developers of the Fisch game. Use at your own risk and discretion.

The use of automation tools may potentially violate the terms of service of certain games or platforms. It is your responsibility to ensure that your use of Fisch Macro complies with all applicable terms of service, rules, and policies.

====================================
LICENSE
====================================

Fisch Macro is free software for personal use only. Redistribution or commercial use is prohibited without permission.

© 2023 Fisch Macro Team. All rights reserved.`;

  fs.writeFileSync(filePath, content);
  console.log(`Created README file: ${filePath}`);
}

// 创建ZIP文件（模拟）
function createZipFile(outputPath, version) {
  const tempDir = path.join(process.cwd(), 'temp', `fisch-macro-${version}`);
  ensureDirectoryExists(tempDir);
  
  // 创建宏文件
  createMacroFile(path.join(tempDir, `fisch-macro-${version}.ahk`), version);
  
  // 创建README文件
  createReadmeFile(path.join(tempDir, 'README.txt'), version);
  
  // 模拟创建ZIP文件（实际上只是创建一个空文件）
  const zipContent = `This is a placeholder for the ZIP file of Fisch Macro ${version}`;
  fs.writeFileSync(outputPath, zipContent);
  console.log(`Created ZIP placeholder: ${outputPath}`);
}

// 定义要创建的宏文件
const macroVersions = [
  { name: 'v12', path: 'public/downloads/fisch-macro-v12.zip' },
  { name: 'v11', path: 'public/downloads/fisch-macro-v11.zip' },
  { name: 'Xan', path: 'public/downloads/xan-macro.zip' },
  { name: 'Crab Cage', path: 'public/downloads/crab-cage-macro.zip' },
  { name: 'Irus', path: 'public/downloads/irus-macro.zip' }
];

// 创建所有宏文件
macroVersions.forEach(({ name, path: filePath }) => {
  const fullPath = path.join(process.cwd(), filePath);
  ensureDirectoryExists(path.dirname(fullPath));
  createZipFile(fullPath, name);
});

console.log('All macro files have been created!'); 