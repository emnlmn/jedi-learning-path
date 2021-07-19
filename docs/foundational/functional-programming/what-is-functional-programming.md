# Programmazione funzionale <Badge type="warning" text="WIP" vertical="middle" />

Se hai già sentito parlare di **programmazione funzionale** avrai probabilmente anche potuto constatare come questo argomento sia
particolarmente dibattuto.

Per chi si avvicina per la prima volta a questo mondo, potrebbe inizialmente sembrare complesso, a tratti mistico. E' capitato anche a me, ma tranquillo: all'atto pratico, programmare in funzionale è molto più semplice di quello che può sembrare inizialmente.

La **programmazione funzionale** altro non è che un modo di scrivere il codice. Un modo di scrivere codice, in gergo, viene chiamato **paradigma**. Altri tipi di paradigmi in cui puoi esserti imbattuto nella tua carriera sono ad esempio il _paradigma imperativo_ o la più famosa _programmazione ad oggetti_. Esistono molti altri paradigmi, ognuno con le proprie peculiarità e campi di applicazione.

Possiamo dire che un **paradigma** altro non è che un'insieme di **regole** e **vincoli** che il nostro codice deve rispettare.
Non sempre queste regole sono dettate da limiti o caratteristihce delle tecnologie che usiamo, ma anzi, spesso sono definiti da noi stessi programmatori (o chi ha "inventato" il paradigma).

L'obbiettivo di queste regole è quello di **rendere il codice** che scriviamo **semplice da capire**.

Sia chiaro dunque, non si tratta di un nuovo ed avenieristico metodo, la **programmazione funzionale** infatti affonda le sue radici negli anni cinquanta, se non acor prima. Il primo vero linguaggio che introduceva concetti funzionali che si possono ritrovare in linguaggi più moderni è il [Lisp](https://lisp-lang.org/).

## Che cos'è dunque la programmazione funzionale

La programmazione funzionale è un'insieme di principi e costrutti. Questo insieme di regole restringe la nostra libertà nello scrivere codice, aiutandoti a commettere meno errori.

A differenza del paradigma imperativo, dove al nostro programma è composto principalmente da istruzioni che producono un'effetto sullo stato del sistema, nascondendo il comportamento (tramite l'incapsulamento), in un programma funzionale troviamo una sequenza di **funzioni**, le quali eseguono semplici operazioni sui dati e producendo un risultato predittibile in un modo altamente deterministico.

Come vedremo tra poco, scrivere codice in funzionale significa scrivere codice altamente testabile, più facile da comprendere, grazie alla "mancanza" di **side-effects**, e dunque anche più facile da modificare.

## Principi della programmazione funzionale

La caratteristica distintiva del **paradigma funzionale** è quella di dover programmare utilizzando solo **funzioni pure**, prive dunque di **side effects**.

## Flusso dei dati vs controllo dello stato

La programmazione funzionale per essere compresa, richiede un leggero cambio del punto di vista rispetto a come intendiamo un programma. Immagina il tuo programma come ad una serie di funzioni che lavorano su un flusso di dati.

I dati entrano dall'alto ed attraversando una ad una le funzioni che compongono il tuo algoritmo, escono dal basso. Ogni funzione, in quanto pura e priva di side effects, restituirà un valore, che sarà l'input della funzione successiva.

Questo concetto è conosciuto come **pipe**.

::: code-group
::: code-group-item javascript

```js
const program = pipe(
  input,
  function1,
  function2,
  function3,
  ...
)
```

:::

