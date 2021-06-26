# IconIx

FontAwesome - Icon picker plugin.

---

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
<!-- Include FontAwesome 5.15.3 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.css" />

<!-- Include css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/icon-ix@1.0.0/dist/css/iconix.css" />

<!-- Include min css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/icon-ix@1.0.0/dist/css/iconix.min.css"/>
```

#### JS

```html
<!-- Include js -->
<script src="https://cdn.jsdelivr.net/npm/icon-ix@1.0.0/dist/js/iconix.js"></script>

<!-- Include min js -->
<script src="https://cdn.jsdelivr.net/npm/icon-ix@1.0.0/dist/js/iconix.min.js"></script>
```

#### INIT - Init without otions

```js
/** Init IconIx */
new IconIx("#your-picker");
```

#### INIT - Init with otions

```js
/** Init IconIx with options */

let option = {
  tittle: "Your Tittle",
  output: "#your-output",
  preview: "#your-preview",
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
new IconIx("#your-picker", option, paginator);
```


### Quick start if you use Node.js

#### npm

```cmd
  npm i icon-ix
```

#### import

```js
/** Import IconIx */
import IconIx from "icon-ix";

new IconIx("#your-picker");
```


