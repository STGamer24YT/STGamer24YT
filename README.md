# About me

- I use Luau to make Roblox games
- I'm studying JavaScript
- I usually check issues in [geode-sdk/geode](https://github.com/geode-sdk/geode)
- I know how to use Batch, and I make the code unnecessarily ugly :trollface:

### Module for playing sound in Roblox

<details><summary>PlaySound.lua</summary>

``` Luau
-- // important // --
local tweenservice = game:GetService("TweenService")
local audio = nil

-- // get the player that is calling the functions //
local plr = game:GetService("Players").LocalPlayer

-- // this music is stored in ReplicatedStorage //
local MainMusic = game:GetService("ReplicatedStorage").sound.Main:GetChildren()
local GameMusic = game:GetService("ReplicatedStorage").sound.Game:GetChildren()

-- // code to fade in and out audio //
local inTweenInfo = TweenInfo.new(
	1, Enum.EasingStyle.Sine, Enum.EasingDirection.In
)
local outTweenInfo = TweenInfo.new(
	0.7, Enum.EasingStyle.Sine, Enum.EasingDirection.Out
)

local iTween = tweenservice:Create(audio, inTweenInfo, {Volume = 0.5})
local oTween = tweenservice:Create(audio, inTweenInfo, {Volume = 0})

-- // function used by play() //
local fadeAudio = function(scope)
	if scope == "in" then
		iTween:Play()
		return
	elseif scope == "out" then
		oTween:Play()
		task.wait(0.7)
		return
	else
		print("oops :trollface:")
		return
	end
end

-- // module // --
local func = {}

func.MainMusic = MainMusic
func.GameMusic = GameMusic

-- // play audio //
func.play = function(scope)
	if audio ~= nil then -- if audio exists, destroy it
		fadeAudio("out")
		audio:Destroy()
		print("stopped!")
	end
	
	local selectedmusic = {}
	
	if scope == func.MainMusic then 
		selectedmusic = MainMusic
	elseif scope == func.GameMusic then
		selectedmusic = GameMusic
	else
		return "Error! Invalid Scope !{ module.game or module.map }!"
	end
	
	local rnd = math.random(1, #selectedmusic)
	task.wait(.1)
	
	audio = selectedmusic[rnd]:Clone()
	audio.Parent = plr:FindFirstChild("SoundPlace")
	audio:Play()
	fadeAudio("in")
	print("played!")
end

return func
```
</details>
