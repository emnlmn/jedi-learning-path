# Cos'è la programmazione funzionale

Se hai già sentito parlare di **programmazione funzionale** avrai probabilmente anche potuto constatare come questo argomento sia
particolarmente caldo e dibattuto.

Se non sei un'esperto del tema e tutto ciò che lo riguarda ti suona come complesso, a tratti mistico o futuristico, nessun problema, sei in buona compagnia. All'atto pratico però, programmare in funzionale è molto più semplice di quello che può sembrare.

La **programmazione funzionale** altro non è che un modo di scrivere il codice. Un modo di scrivere codice, in gergo, viene chiamato **paradigma**. Altri tipi di paradigmi in cui puoi esserti imbattuto nella tua carriera sono ad esempio il _paradigma imperativo_ o la più famosa _programmazione ad oggetti_. Esistono molti altri paradigmi, ognuno con le proprie peculiarità e campi di applicazione. [Mappa dei paradigmi di programmazione](https://upload.wikimedia.org/wikipedia/commons/f/f7/Programming_paradigms.svg)

## Principi della programmazione funzionale

La caratteristica distintiva del _paradigma funzionale_ è quella di dover programmare utilizzando solo **funzioni pure**, prive di **side effects**.

### Che cos'è un side effects?

Possiamo semplificare dicendo che, una funzione che ha un _side effect_, è una funzione che oltre a ritornare un valore, esegue una qualsiasi altra operazione.

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
::: code-group-item pseudocodice

```js
programma = pipe(
  input,
  funzione1,
  funzione2,
  funzione3,
  ...
)
```

:::
