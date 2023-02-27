# Projekt-Dokumentation

✍️ Moor LB 151

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|   12.02.22    | 0.0.1   | Projekt erstellt. |
|  13.02.22     | 0.0.2   |  Mockupdesign erstellt und organisatorische sachen erledigt.                                                         |
| 20.02.22      | 0.0.3   |    GuessMyWord Game implementiert.                                                  |
|  21.02.22     | 0.0.4   |     Versucht Login funktion hinzuzufühen                                                         |
|   23.02.22    | 0.0.5   |       wenn man verliert kann man nochmal spielen.                                                       |
|   25-26.02.22    | 0.0.6   |     Versucht das Leaderboard zu implementieren und eine administrator fester zu erstellen.              |
|  27.02.22     | 1.0.0   |      Keine Änderungen am Projekt, Projektdokumentation vervollständigen.                                                        |

# 0 Ihr Projekt

✍️ Mein Projekt soll eine vereinfachte vorm von GuessMyWord sein welches man im Deutschenfernseh sehen kann.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel anzeigen lassen 
* Tier 2 (Webserver): Eingabe prüfen 
* Tier 3 (Application Server): Funktionalität des Glücksrades und die Auswertung
* Tier 4 (Dataserver): Speichern der Daten, Die Leaderboard, änderungen und löschungen.

# 2 Technologie

Ich möchte für diese Webseite einmal React und JavaScript benutzen und auf der Datenbank seite nehme ich Firebase. Jedoch wollte ich eigentlich MySQL benutzen da ich gerne mal alles "intern" speichern wollte. Die ganze Application wird schlussendlich über den Webserver Next.js laufen. dazu möchte ich noch Tailwind dazunehmen für CSS/HTML Elemente.

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 
Also die Datenbank steuere ich mit zwei Interfaces an. Auf der Einenseite wäre das mit der Admin seite welche Neue Wörter der datenbank hinzufügen kann. auf der Anderenseite tue ich die Datenbank auch mit der Game seite ansprechen wenn ich das Leaderboard updaten muss.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    | Muss            | Funktional    | Als ein Benutzer möchte ich das Glücksrad drehen können, damit man das Spiel kann spielen |
| B    | Muss            | Funktional    | Als Benutzer möchte ich mein Gewinn einlösen.                                    |
| C    | Muss            | Funktional    | Als Administrator möchte ich Phrasen und Wörter bearbeiten.                                   |
| D    | Muss            | Qualität      | Als Benutzer möchte ich eine übersichtliches GUI haben, damit sich der User zurechtfinden kann.|
| E    | Muss            | Rand          | Als Benutzer möchte ich mich auf dem Leaderboard sehen.                            |
| F | Muss|Funktional| Wenn der User verliert wird das money resettet.|
|G| Muss | Funktional| Wenn der User verliert kann man wieder spielen. |
|H| Muss | Funktional | Wenn der User einen Richtigen buchstaben errät wird dieser angezeigt.|
|I| Muss | Funktional | Wenn der User einen Falschenbuchstaben eingibt wird im ein "Herz" abgezogen|
|J| Muss | Funktional | Wenn der User einen Falschenbuchstaben eingibt wird im die gewettete Summe abgezogen|
|K| Muss | Funktional | Wenn der User kein Geld mehr hat sollte er gameover sein |
|L| Muss | Qualität | Der Benutzer kann sich anmelden|
|M| Muss | Funktional | Wenn sich der Benutzer angemeldet ist wird er weitergeleitet|

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  | Benutzer angemeldet             |Rad drehen          |Weteinsatz wird angezeigt                   |
| B.1  |Preis gewonnen               | Gewinn einlösen          |Gewinn wird eingelöst                  |
| C.1  |Als Administrator angemeldet              | Wort hinzufuegen         | Wort wird Hinzugefuegt                |
| C.1  |Als Administrator angemeldet             |Phrase hinzufuegen          |Phrase wird hinzugefuegt                |
|E.1| Benutzer angemeldet und schon runden gespielt haben | 3 mahl einen Falschen buchstaben eingeben | man sollte auf dem Leaderboard erscheinen |
|F.1| Benutzer angemeldet | drei mal einen falschen buchstaben eingeben und dazu noch einen wetsatzt haben | das Geld sollte sich wieder auf 100 resetten |
|G.1| Benutzer angemeldet und 3 mal einen falschen Buchstaben eingegeben haben |nichts| es sollte ein alert erscheinen welche sagt das die verloren haben und dazu sollten sie die möglichkeit haben wieder zu spielen |
|H.1| Benutzer angemeldet |den buchstaben R eingeben | ein r sollte oben bei den "lücken" erscheinen.| 
|I.1| Benutzer angemeldet |den buchstaben f eingeben | es sollte eine zahl von 3 auf 2 springen.|
|J.1| Benutzer angemeldet |den buchstaben f eingeben und einen weteinsatz von 20 eingeben |das Geld von 100 auf 80 herunter gehen | 
|K.1| Benutzer angemeldet | den buchstaben f eingeben und der weteinsatzt auf mehr einstellen als sie geld haben| Es sollte eine alert messeg kommen das sie game over sind.|
|M.1| das Programm ist gestartet | bei User Simon und bei Passwort moor| Man wird auf die Game seite weitergeleitet |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

![image](https://user-images.githubusercontent.com/110914364/221497405-4e45c100-29ff-41f4-b133-9f5f92b138d3.png)
![image](https://user-images.githubusercontent.com/110914364/221497729-8abcaeca-8407-49ad-bf61-574b02ce4ac9.png)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| A        |   25-26.02.22       |    nicht gemacht          |
| B        |   25-26.02.22       |      gemacht        |
| C        |  25-26.02.22        |            nicht gemacht  |
| D        |   25-26.02.22       |            gemacht  |
| E        |   25-26.02.22       |             nicht gemacht |
| D        |   25-26.02.22       |     gemacht         |
| G        |   25-26.02.22       |   gemacht           |
| H        |   25-26.02.22       |        gemacht      |
| I        |   25-26.02.22       |     gemacht         |
| J        |    25-26.02.22      |     gemacht         |
| K        |  25-26.02.22        |      nicht gemacht        |
| L        |  25-26.02.22        |         gemacht     |
| M        |   25-26.02.22       |         gemacht     |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| A    |      nein     |        -                                   |
| B    |         ja   |          "game.js"                                 |
|  C   |         nein  |          -                                 |
|   D   |         ja  |        "game.js"                                         |
|    E  |          nein |          -                                 |
|     F |         ja  |       "game.js"                                          |
|      G|       ja    |        "game.js"                                         |
|      H|        ja   |      "game.js"                                           |
|      I|         ja  |       "game.js"                                          |
|      J|         ja  |      "game.js"                                           |
|      K|         ja  |      "game.js"                                           |
|      L|         ja  |      "Login.js"                                     |
|      M|         ja  |            "Login.js"                               |



# 8 Testprotokoll

✍️[ Video für die Datenbank](https://youtu.be/ywLppdAyYcs)
✍️[ Video für das Vorhandene Game](https://youtu.be/K2Klt2DCTgI)

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| A.1  |  27.02.2023     |  geht nicht     | Simon Moor        |
| B.1  |  27.02.2023     |  geht     | Simon Moor        |
| C.1  |  27.02.2023     |  geht nicht    | Simon Moor        |
| C.1  |  27.02.2023     |  geht nicht     | Simon Moor        |
| E.1  |  27.02.2023     |  geht    | Simon Moor        |
| F.1  |  27.02.2023     |  geht      | Simon Moor        |
| G.1  |  27.02.2023     |  geht     | Simon Moor        |
| H.1  |  27.02.2023     |  geht      | Simon Moor        |
| I.1  |  27.02.2023     |  geht     | Simon Moor        |
| J.1  |  27.02.2023     |  geht     | Simon Moor        |
| K.1  |  27.02.2023     |  geht nicht    | Simon Moor        |
| M.1  |  27.02.2023     |  geht nicht     | Simon Moor        |

# 8.1 Fazit
Wie ist für mich das Projekt gelaufen? 
Ich muss sagen ich hatte recht Schwierigkeiten damit die Datenbank mit dem Projekt zu verbinden. Da wir im Unterricht nur eine Methode angeschaut haben, wie es möglich ist mit JSF und MySQL. Durch das bin ich dann auch auf meine erste Idee gekommen MySQL zu benutzen da ich mir dachte das es sicher kein grossen unterschied gäbe zwischen den Verbindungs Methoden. Jedoch habe ich mich dann geirrt. Ich hatte keine Ahnung und bin auch nicht richtig drausgekommen was die verschiedenen Dokus von mir wollten. Nach dem ich Zuviel Zeit verschwendet habe, bin ich wieder zurück zu einer anderen Methode gewechselt, welche ich schon kannte. 
Aber auch sonst gab es Sachen, welche mir leichter gingen als andere. Viele Sachen in Verbindung mit der Datenbank waren relativ schwierig und auch anstrengend umzusetzen. Andere Aufgaben welche wiederum keine Datenbank brauchten gingen relativ einfach.
Nun um Produkt?
Ich würde das Produkt als ein Alpha sehen das Grundspiel funktioniert jedoch noch viele administrativen Sachen nicht möglich sind.


# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
