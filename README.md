# IconIx

FontAwesome - Icon picker library.

---

### Quick start via Node.js

#### npm

```cmd
  npm i icon-ix
```

#### import

```js
/** Import IconIx */
import IconIx from "icon-ix";
```

#### INIT - Init without otions

```js
/** Init IconIx */
new IconIx(selector);
```

#### INIT - Init with otions

```js
/** Init IconIx with options */

// default option
let option = {
  tittle: "IconIx",
  output: "#output",
  preview: "#preview",
  style: {
    icon: {
      size: "45px",
      margin: "5px",
      padding: "5px",
      fontSize: "30px",
    },
    color: {
      first: "#5a00aa",
      second: "#d2d2d2",
      third: "#5a00aa",
      fourth: "#ffffff",
    },
  },
};

let paginator = {
  page: 1,
  page_size: 50,

  // It will be generated automatically
  page_count: 0,
};
new IconIx(selector, option, paginator);
```

### Quick start

#### HTML

```html
  // Picker button
  <button id="picker">Picker</button>

  // Picker preview
  <div id="preview">Preview</div>

  // Picker output
  <input id="output">Output</input>
```

#### CSS

```html
// FontAwesome
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.css"
/>

// IconIx full file
<link rel="stylesheet" href="/dist/css/iconix.css" />

// IconIx min file
<link rel="stylesheet" href="/dist/css/iconix.min.css" />
```

#### JS

```html
// IconIx full file
<script src="/dist/js/iconix.js"></script>

// IconIx min file
<script src="/dist/js/iconix.min.js"></script>
```

#### INIT - Init without otions

```js
/** Init IconIx */
new IconIx(selector);
```

#### INIT - Init with otions

```js
/** Init IconIx with options */

// default option
let option = {
  tittle: "IconIx",
  output: "#output",
  preview: "#preview",
  style: {
    icon: {
      size: "45px",
      margin: "5px",
      padding: "5px",
      fontSize: "30px",
    },
    color: {
      first: "#5a00aa",
      second: "#d2d2d2",
      third: "#5a00aa",
      fourth: "#ffffff",
    },
  },
};

let paginator = {
  page: 1,
  page_size: 50,

  // It will be generated automatically
  page_count: 0,
};
new IconIx(selector, option, paginator);
```
