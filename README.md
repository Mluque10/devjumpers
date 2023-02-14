Ejercitacion Final 

creo mi repositorio en git hub y lo clono utilizando:
$ git clone https://github.com/Mluque10/devjumpers.git

creo el archivo "README" con:
$ touch README.md 

lo modifico 
$ git add . 

realizo el commit 
$ commit -m "commit inicial"

lo subo al repositorio 
$ git push 

creo el archivo "privado.txt" y la carpeta "privada"
$ touch privado.txt
$ mkdir privada

luego creo el archivo ".gitignore"
$ touch .gitignore 

adentro del archivo puse los nombres a ignorar 
$ git add .
$ git commit -m "Ignorar Archivos"
$ git push

desde la rama main, cree el archivo "1.txt"
$ touch 1.txt

despues cree la rama "v0.2"
$ git branch v0.2

cambio a la rama v0.2
$ git checkout v0.2

agrego los archivos a la rama v0.2 , realizo un commit y pusheo al repositorio 
$ git add 2.txt
$ git commit -m "creacion de fichero 2.txt en v0.2"
$ git push --set-upstream origin v0.2

me cambio a la rama main y luego realizo el merge 
$ git checkout main
$ git merge v0.2

Agrego "hola" al archivo 1.txt:
$ echo "hola" > 1.txt
$ git add 1.txt
$ git commit -m "hola en 1.txt desde el main"

cambio a la rama v0.2 y agrego "adios" al archivo 1.txt:
$ git checkout v0.2
$ echo "adios" > 1.txt
$ git add 1.txt
$ git commit -m "adios en 1.tx1 desde v0.2"

Vuelvo a la rama main e intento realizar el merge: 
$ git checkout main
$ git merge v0.2

Me dice que tengo un conflicto:
Auto-merging 1.txt
CONFLICT (add/add): Merge conflict in 1.txt
Automatic merge failed; fix conflicts and then commit the result.

Utilizo el comando --merged para ver que ramas estan fusionadas:
$ git branch --merged
* main

y uso --no-merged para ver las que no estan fusionadas:
$ git branch --no-merged
  v0.2

Cambio manualmente el archivo y solo dejo las palabras "hola" y "adios": 

Actualizo la informacion:
$ git add .
$ git commit -m "conflicto resuelto" 

Luego elimino la rama v0.2: 
$ git branch -D v0.2
Deleted branch v0.2 (was 440b6ba).

Veo la lista de cambios:
$ git log --oneline --decorate --all --graph

*   404de34 (HEAD -> main) conflicto resuelto
|\
| * 440b6ba adios en 1.tx1 desde v0.2
* | b02425d hola en 1.txt desde el main
|/
* 79f1d26 (origin/v0.2) creacion de fichero 2.txt en v0.2
* ee65333 (origin/main) ignorar archivos
* ec4d415 commit inicial

| NOMBRE | GITHUB |
| -- | -- |
|Armando Torres Quintana|[ArmandoTorresQuintana]https://github.com/ArmaTQ|
|Marcelo Taborda|[MarceloTaborda] https://github.com/Marcelo-Taborda|
|Enzo Franco|[EnzoFranco] https://github.com/EnzoFranco31|
|Cristian Gabriel Ortiz|[CristianGabrielOrtiz]https://github.com/Cristian550|

colaborador: Lucas Emmanuel Gimenez.
