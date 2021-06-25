const fs = require('fs')
const yaml = require('js-yaml');
const { default: axios } = require("axios");


let url = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/metadata/icons.yml'

axios(url)
    .then(res => {
        let icons = [];
        let data = yaml.load(res.data)
        

        Object.keys(data).forEach(item => {
            let icon = 'fa-' + item
            let element = data[item]

            element.styles.forEach(type => {
                switch (type) {
                    case "solid":
                        icons.push(
                            {
                                value: 'fas ' + icon,
                                search: element.search.terms
                            }
                        )
                        break;

                    case "brands":
                        icons.push(
                            {
                                value: 'fab ' + icon,
                                search: element.search.terms
                            }
                        )

                        break;

                    case "regular":
                        icons.push(
                            {
                                value: 'far ' + icon,
                                search: element.search.terms
                            }
                        )

                        break;

                    case "light":
                        icons.push(
                            {
                                value: 'fal ' + icon,
                                search: element.search.terms
                            }
                        )
                        break;
                }
            });
        })
        return icons;
    })
    .then(icons => {
        let data = "export default  " + JSON.stringify(icons);
        return fs.writeFile('src/icon-ix/collection.js', data, function (err) {
            if (err) throw err;
            console.log('Saved! ' + icons.length);
        })
    })
    .catch(error => {
        console.log(error)
    })