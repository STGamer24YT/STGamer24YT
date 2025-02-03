@echo off
title noteReader.bat
call :makeLicense
echo loading...
timeout /t 2 /nobreak >nul

if not exist notes\welcome.txt (
	if not exist notes\ (
		mkdir notes
	)
	echo  MS-DOS ^> Hi! > notes\welcome.txt
	echo  MS-DOS ^> This is a test! >> notes\welcome.txt
)

:main
cls
title noteReader.bat - Home

echo  MS-DOS ^> What note you want me to read? (* makes a list)
echo  MS-DOS ^> Note: you don't need to include the file extension (.txt)
echo  MS-DOS ^> also, the file name can't have quotation marks or spaces.
set /p note= ^> notes\^>

cls

set note=%note: =%
set note=%note:"=%

if "%note%" == "*" (
	echo -- files in notes\ --
	echo.
	dir /b notes
	echo.
	echo -- no more files --
	pause >nul
	goto main
)

if not exist "notes\%note%.txt" (
	title noteReader.bat - Error
	echo  MS-DOS ^> notes\%note%.txt does not exist
	pause >nul
	cls
	goto main
)

title noteReader.bat - Reading file

mkdir tmp
echo. > tmp\f.txt

echo --File content--
echo.
type notes\%note%.txt
type tmp\f.txt
echo --End of file--

rmdir /s /q tmp

pause >nul
goto main

@rem make license file
@rem this is important
:makeLicense
if exist LICENSE.txt goto :eof

echo Copyright 2025 STTV Studios> LICENSE.txt
echo.>> LICENSE.txt
echo Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:>> LICENSE.txt
echo.>> LICENSE.txt
echo The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.>> LICENSE.txt
echo.>> LICENSE.txt
echo THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.>> LICENSE.txt

goto :eof