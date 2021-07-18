# Cos'è la programmazione funzionale <Badge type="warning" text="WIP" vertical="middle" />

Se hai già sentito parlare di **programmazione funzionale** avrai probabilmente anche potuto constatare come questo argomento sia
particolarmente dibattuto.

Per chi si avvicina per la prima volta a questo mondo, potrebbe inizialmente sembrare comlesso, a tratti mistico. E' capitato anche a me, ma tranquillo: all'atto pratico, programmare in funzionale è molto più semplice di quello che può sembrare inizialmente.

La **programmazione funzionale** altro non è che un modo di scrivere il codice. Un modo di scrivere codice, in gergo, viene chiamato **paradigma**. Altri tipi di paradigmi in cui puoi esserti imbattuto nella tua carriera sono ad esempio il _paradigma imperativo_ o la più famosa _programmazione ad oggetti_. Esistono molti altri paradigmi, ognuno con le proprie peculiarità e campi di applicazione.

Sia chiaro, non si tratta di un nuovo ed avenieristico metodo, la **programmazione funzionale** infatti affonda le sue radici negli anni cinquanta, se non acor prima. Il primo vero linguaggio che introduceva concetti funzionali che si possono ritrovare in linguaggi più moderni è il [Lisp](https://lisp-lang.org/).

## Principi della programmazione funzionale

La caratteristica distintiva del **paradigma funzionale** è quella di dover programmare utilizzando solo **funzioni pure**, prive dunque di **side effects**.

### Che cos'è un side effects?

Possiamo semplificare dicendo che, una funzione che ha un **side effect**, è una funzione che oltre a ritornare un valore, esegue una qualsiasi altra operazione.

Alcuni esempi di _side effect_ sono:

- modificare uno stato globale
- lanciare un'eccezione
- leggere o scrivere un file
- eseguire una richiesta di rete
- accedere ad uno stato globale

Dovrebbe rendere l'idea.

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

## Risorse e approfondimenti

[Overview dei paradigmi di programmazione](https://upload.wikimedia.org/wikipedia/commons/f/f7/Programming_paradigms.svg)

[Introduzione alla programmazione funzionale - Giulio Canti](https://github.com/gcanti/functional-programming)

[Object Oriented Programming vs Functional Programming](https://www.youtube.com/watch?v=wyABTfR9UTU)
