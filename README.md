# Developer Task
Celem poniższego programu jest dodawanie dwóch złożonych wielomianów, a następnie wyświetlenie poprawnego wyniku. Do aplikacji zostały wykonane testy manualne oraz jednostkowe.
Użyte technologie:
- Node.js
- Mocha
- PUG
- HTML, CSS
- Bootstrap

# Instrukcja(PL)
### Instalacja
Projekt wymaga Node.js v12.18.2+

Po sklonowaniu projektu intalujemy zależności.
```
$ cd DeveloperTask
$ npm install
```
### Testowanie
Aby uruchomić testy jednostkowe należy wykonać polecenie z konsoli w folderze projektu:
```
$ npm test
```
### Uruchomienie
Aby uruchomić aplikację należy wykonać polecenie z konsoli w folderze projektu:
```
$ node bin\www
```
Aplikacja będzie dostępna pod adresem:
```
localhost:3000
```
### Przykład użycia:
Podanie dwóch wielomianów w postaci:
```
2x2 + 3
3x3 + x2
```
Lub
```
2x^2 + 3
3x^3 + x^2
```
Będzie skutkować wynikiem:
3x<sup>3</sup> + 3x<sup>2</sup> + 3  
Wyrażenia niezgodne z przyjętą konwencją będą odrzucane.  
Formaty można łączyć:
```
2x2 + 3
3x^3 + x2
```
# Instruction(ENG)
### Installation
Project requires Node.js v12.18.2+

After cloning project, we need to install dependencies.
```
$ cd DeveloperTask
$ npm install
```
### Testing
To perfrom unit tests we need to execute command from terminal in main project directory:
```
$ npm test
```
### Running
To run an application we need to execute command from terminal in main project directory:
```
$ node bin\www
```
Application will be available under following address:
```
localhost:3000
```
### User case:
Entering two polynomial as following:
```
2x2 + 3
3x3 + x2
```
Or
```
2x^2 + 3
3x^3 + x^2
```
Will result:
3x<sup>3</sup> + 3x<sup>2</sup> + 3  
Expressions inconsistent with the preceding convention.   
Formats can be combined:
```
2x2 + 3
3x^3 + x2
```
