# IconIx

FontAwesome - Icon picker plugin.

For use the plugin you need use [_FontAwesomeIconSet_](https://yusupov-droid.github.io/font-awesome-iconset)

All [ _FontAwesomeIconSet_](https://yusupov-droid.github.io/font-awesome-iconset)  vesions equal to _FontAwesome_ versions.

[Web Page Demo](https://yusupov-droid.github.io/icon-ix/)

---
### Quick start

#### HTML

```html
  <!-- Picker button -->
  <button id="picker">Picker</button>

  <!-- Picker preview -->
  <div id="preview">Preview</div>

  <!-- Picker output -->
  <input id="output">Output</input>
```

#### CSS

```html
<!-- Include FontAwesome 5.15.3 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.css" />

<!-- Include css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/icon-ix@2.0.0/dist/css/iconix.min.css" />
```

#### JS

```html
<!-- Include iconset js -->
<script src="https://cdn.jsdelivr.net/npm/font-awesome-iconset@5.15.0/dist/iconset.min.js"></script>

<!-- Include  js -->
<script src="https://cdn.jsdelivr.net/npm/icon-ix@2.0.0/dist/js/iconix.min.js"></script>
```

#### Init

```js
/** Init IconIx */
new IconIx({
  picker: "#picker",
  output: "#output",
  preview: "#preview",
});
```
```js
/** Init IconIx with full options */

let option = {
  title: false,
  picker: "#your-picker",
  output: "#your-output",
  preview: "#your-preview",

  page_size: 50,

  searchPlaceholder: "Search icon 🔎🔎",
  paginatorNextButton: "next",
  paginatorPrevButton: "prev",

  header: true,
  paginate: true,
  searchable: true,
  hideOnSelect: true,

  iconSize: "45px",
  iconMargin: "5px",
  iconPadding: "5px",
  iconFontSize: "30px",
};

new IconIx(option);
```

### Quick start if you use Node.js

#### npm

```cmd
  npm i icon-ix font-awesome-iconset
```

#### import

```js
/** Import IconIx */
import IconIx from "icon-ix";
/** Import IconSet */
import ICON_SET from "font-awesome-iconset";

IconIx.ICONS = ICON_SET;

new IconIx({
  picker: "#your-picker",
  output: "#your-output",
  preview: "#your-preview",
});
```


