# About me

- I <!-- so descriptive i know -->
- I'm studying JavaScript, Lua 5.1, and Svelte
- I know how to create batch files, and I like making their source code unnecessarily ugly :trollface:

## Almost cool thing I made

This batch file creates a .osk file from a folder. Well really this just makes a zip file with a different extension; I just wanted to make this because I'm making an osu skin and i have to compress the folder every time I make a change.

<details><summary>produce.bat</summary>

```Batch
@echo off
set folder=%~f1

if not exist "%folder%" (
echo Please open me with a folder!
REM actually it works with files too but whatever
pause
exit
)

set parent=%~p1

IF %parent:~-1%==\ SET parent=%parent:~0,-1%
REM i copied this... im guilty...

set name=%~n1
tar --format zip -C "%parent%" -cavf "%name%.osk" "%name%"
```
</details>
