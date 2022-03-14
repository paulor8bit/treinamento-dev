@echo off
color 0b
cls
REM ################################# Inicio MENU ###########################################
date /t
echo CPD - Porto de Maceio
echo Computador: %computername%		Usuario: %username%
echo 			GIT Up 
echo =====================================
echo Digite commit
set /p comentario= 
git pull 
echo git add . 
git add . 
echo git commit -m "%comentario%"
git commit -m "%comentario%"
echo git push
git push

echo =====================================

echo Up concluido! :) 
echo Para verificar https://github.com/paulor8bit/treinamento-dev

