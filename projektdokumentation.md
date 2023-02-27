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

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  | Benutzer angemeldet             |Rad drehen          |Preis wird angezeigt                   |
| B.1  |Preis gewonnen               | Gewinn einlösen          |Gewinn wird eingelöst                  |
| C.1  |Als Administrator angemeldet              | Wort hinzufuegen         | Wort wird Hinzugefuegt                |
| C.1  |Als Administrator angemeldet             |Phrase hinzufuegen          |Phrase wird hinzugefuegt                |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

![image](https://user-images.githubusercontent.com/110914364/221497405-4e45c100-29ff-41f4-b133-9f5f92b138d3.png)
![image](https://user-images.githubusercontent.com/110914364/221497729-8abcaeca-8407-49ad-bf61-574b02ce4ac9.png)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️[ Video für die Datenbank](https://youtu.be/ywLppdAyYcs)
✍️[ Video für das Vorhandene Game](https://youtu.be/K2Klt2DCTgI)

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  27.02.2023     | Datenbank vorhanden        | Simon Moor        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
