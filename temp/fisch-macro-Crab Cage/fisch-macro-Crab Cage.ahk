#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; Fisch Macro Crab Cage
; This is an example macro file for demonstration purposes only

; Global Variables
global isRunning := false
global fishingDelay := 5000 ; Time between fishing attempts in ms
global reelDelay := 1000 ; Time to wait before reeling in ms
global catchDelay := 500 ; Time to wait after catching a fish in ms

; GUI Setup
Gui, Add, Text, x10 y10 w300 h20, Fisch Macro Crab Cage
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
Gui, Show, w320 h280, Fisch Macro Crab Cage

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
ExitApp