# Individuelle Learning Phase: Styling, useEffect und Debugging in einer React-19-Mini-App

## Dein Ziel

Du baust eine kleine React-19-App, in der du mehrere Styling-Methoden einsetzt, Seiteneffekte mit `useEffect` umsetzt und typische Fehler mit React Developer Tools sowie Browser-DevTools untersuchst. Am Ende hast du eine übersichtliche, funktionierende Mini-App mit sauberem Styling, einem Timer, einem Event-Listener und einer kurzen Debugging-Dokumentation.

## Das brauchst du

- Eine laufende React-19-Umgebung, z. B. mit Vite
- Einen Editor wie VS Code
- Einen Browser mit DevTools
- Installierte React Developer Tools im Browser
- Grundstruktur mit mindestens diesen Dateien:
  - `App.jsx`
  - `App.css`
  - `TaskCard.jsx`
  - `TaskCard.module.css`

## Zeitplanung

- 10 Minuten: Projekt vorbereiten und Struktur anlegen
- 25 Minuten: Basis-Aufgabe 1
- 20 Minuten: Basis-Aufgabe 2
- 25 Minuten: Basis-Aufgabe 3
- 20 Minuten: Basis-Aufgabe 4
- 10 Minuten: Basis-Aufgabe 5
- 10 Minuten: Erweiterungsaufgaben nach Wahl
- 10 Minuten: Reflexion und kurzer Selbstcheck

## Basis-Aufgaben

### Aufgabe 1:

Mini-App-Grundgerüst mit globalem CSS erstellen **Ziel:** Du richtest eine kleine App ein und nutzt klassische CSS-Dateien in React-Komponenten.

**Arbeitsauftrag:**  
Erstelle eine Mini-App mit dem Titel „Task Monitor“. Zeige im Hauptbereich eine Überschrift, einen kurzen Beschreibungstext und eine Liste mit mindestens 3 Aufgaben an. Jede Aufgabe soll mindestens diese Informationen enthalten:
- Titel
- Status (`offen`, `in Bearbeitung` oder `erledigt`)
- Priorität (`niedrig`, `mittel`, `hoch`)

Nutze für das Grundlayout eine normale CSS-Datei (`App.css`). Gestalte:
- Seitenabstand
- eine zentrierte Inhaltsfläche
- eine gut lesbare Schrift
- Abstände zwischen Überschrift, Beschreibung und Aufgabenliste

Verwende noch keine Inline-Styles.

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine App startet fehlerfrei, zeigt eine einfache Aufgabenübersicht an und das Grundlayout wird über `App.css` gesteuert.

### Aufgabe 2:

Task-Komponente mit CSS Modules gestalten **Ziel:** Du strukturierst komponentenspezifisches Styling mit CSS Modules.

**Arbeitsauftrag:**  
Lagere die Darstellung einer einzelnen Aufgabe in eine eigene Komponente `TaskCard.jsx` aus. Erstelle dazu eine Datei `TaskCard.module.css`. Style jede Karte mit:
- Rahmen oder Schatten
- Innenabstand
- Abstand zwischen den Karten
- deutlich sichtbarem Titel
- Status- und Prioritätsbereich

Nutze CSS Modules für alle Styles der `TaskCard`. Die globale Seite bleibt weiterhin über `App.css` formatiert.

**Erwartetes Ergebnis / Soll-Zustand:**  
Die App verwendet mindestens zwei Styling-Methoden sinnvoll getrennt:
- globale Styles in `App.css`
- komponentenspezifische Styles in `TaskCard.module.css`

### Aufgabe 3:

Bedingte className-Verwendung für Status und Priorität **Ziel:** Du steuerst Styling dynamisch über `className` statt über Inline-Styles.

**Arbeitsauftrag:**  
Erweitere `TaskCard`, sodass Status und Priorität visuell unterschiedlich dargestellt werden. Beispiel:
- `offen` = neutral
- `in Bearbeitung` = auffällig
- `erledigt` = positiv
- `hoch` = deutlich hervorgehoben

Lege dafür passende CSS-Klassen im CSS Module an und verknüpfe sie bedingt in React über `className`. Ergänze außerdem einen Button pro Aufgabe, mit dem du den Status zyklisch ändern kannst:
- `offen` → `in Bearbeitung` → `erledigt` → `offen`

Achte darauf, dass sich die Darstellung sofort mit dem Status ändert.

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine App nutzt bedingte `className`-Logik, um unterschiedliche Zustände sichtbar zu machen. Es werden keine Inline-Styles für Status- oder Prioritätsfarben verwendet.

### Aufgabe 4:

Seiteneffekte mit useEffect: Timer und Cleanup **Ziel:** Du setzt einen einfachen Seiteneffekt mit `useEffect` um und räumst ihn korrekt auf.

**Arbeitsauftrag:**  
Ergänze in `App.jsx` einen kleinen Bereich „Aktive Sitzungszeit“. Dort soll ein Zähler in Sekunden seit dem Laden der App hochlaufen. Verwende dafür `useEffect` mit `setInterval`.

Baue den Effekt so, dass:
- der Timer beim Start der App beginnt
- der Wert jede Sekunde aktualisiert wird
- das Interval beim Unmount korrekt bereinigt wird

Füge zusätzlich einen Button ein, mit dem du die Anzeige der Aufgabenliste ein- und ausblenden kannst. So kannst du testen, ob Komponenten sauber entfernt und wieder angezeigt werden.

**Erwartetes Ergebnis / Soll-Zustand:**  
Der Sekundenzähler läuft stabil, verursacht keine sichtbaren Probleme und dein Effekt enthält ein Cleanup für das Interval.

### Aufgabe 5:

Seiteneffekte und Debugging mit Event-Listenern und Tools **Ziel:** Du arbeitest mit einem weiteren Seiteneffekt und untersuchst deine App mit Debugging-Werkzeugen.

**Arbeitsauftrag:**  
Ergänze einen Bereich „Fensterbreite“, der die aktuelle Breite des Browserfensters anzeigt. Verwende dafür `useEffect` und einen `resize`-Event-Listener. Sorge dafür, dass du den Listener wieder entfernst.

Prüfe deine App anschließend mit folgenden Schritten:
1. Öffne React Developer Tools.
2. Kontrolliere die Props und den State deiner `TaskCard`-Komponenten.
3. Nutze die Browser-Konsole und füge an sinnvollen Stellen `console.log(...)` ein, um Statuswechsel oder Render-Verhalten sichtbar zu machen.
4. Suche gezielt nach mindestens einem selbst eingebauten Fehler und behebe ihn wieder. Beispiele:
   - falscher Prop-Name
   - fehlender `key` in der Liste
   - falsche Bedingung bei `className`
   - Status wird nicht korrekt weitergegeben

Notiere dir kurz, welchen Fehler du eingebaut hast, wie er sich gezeigt hat und womit du ihn gefunden hast.

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Fensterbreite aktualisiert sich bei Größenänderung des Browsers korrekt. Der Event-Listener wird per Cleanup entfernt. Du hast React Developer Tools und Browser-DevTools aktiv genutzt und mindestens einen typischen Fehler nachvollziehbar untersucht.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Filterleiste mit aktivem Styling

**Ziel:** Du kombinierst State, bedingte Klassen und sauberes Styling in einer kleinen UI-Erweiterung.

**Arbeitsauftrag:**  
Baue eine Filterleiste mit den Optionen:
- Alle
- Offen
- In Bearbeitung
- Erledigt

Beim Klick auf einen Filter sollen nur passende Aufgaben angezeigt werden. Der aktive Filter soll über eine eigene CSS-Klasse deutlich markiert werden. Nutze dafür wieder bedingte `className`-Vergabe.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du kannst die Liste filtern und der aktive Filter ist optisch klar erkennbar.

### Erweiterungsaufgabe 2: Debugging-Protokoll im Projekt anlegen

**Ziel:** Du dokumentierst deinen eigenen Fehlersuchprozess kurz und nachvollziehbar.

**Arbeitsauftrag:**  
Lege eine Datei `DEBUGGING.md` an und halte für mindestens 2 Fehler oder Auffälligkeiten fest:
- Was war das Problem?
- Woran hast du es erkannt?
- Welches Tool hat dir geholfen?
- Was hast du geändert?

Nutze mindestens einmal React Developer Tools und mindestens einmal Browser-DevTools oder Konsole.

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Projekt enthält eine kurze, konkrete Debugging-Dokumentation mit realen Beobachtungen aus deiner App.

### Erweiterungsaufgabe 3: Komponente für Hinweisbanner mit Mount/Unmount

**Ziel:** Du beobachtest `useEffect` und Cleanup noch bewusster an einer separaten Komponente.

**Arbeitsauftrag:**  
Erstelle eine zusätzliche Komponente `HintBanner`, die per Button ein- und ausgeblendet werden kann. In dieser Komponente soll beim Mount ein `console.log` ausgeführt werden und beim Unmount ebenfalls ein `console.log` aus dem Cleanup erscheinen. Style die Komponente mit einem CSS Module.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du kannst in der Konsole klar erkennen, wann die Komponente eingebunden und wieder entfernt wird.

## Wichtige Hinweise

- Nutze für dynamisches Styling bevorzugt `className` und CSS-Klassen.
- Verwende Inline-Styles nur dann, wenn es unbedingt nötig ist.
- Achte bei `useEffect` immer darauf, ob ein Cleanup erforderlich ist.
- Prüfe bei Listen, ob jeder Eintrag einen stabilen `key` hat.
- Kontrolliere Props-Namen genau, wenn Daten nicht ankommen oder nicht angezeigt werden.
- Teste Änderungen direkt im Browser und beobachte Konsole sowie DevTools regelmäßig.

## Reflexionsfragen

- Wo war der Unterschied zwischen globalem CSS und CSS Modules in deiner App am deutlichsten?
- An welcher Stelle war bedingtes `className` für dich nützlicher als Inline-Styling?
- Welche Seiteneffekte hast du umgesetzt und warum brauchen sie ein Cleanup?
- Welcher Fehler hat dich am meisten Zeit gekostet?
- Welches Tool hat dir beim Debugging am besten geholfen: React Developer Tools, Browser-DevTools oder Konsole?
- Was würdest du in deiner App als Nächstes verbessern, wenn du noch 30 Minuten mehr hättest?

---