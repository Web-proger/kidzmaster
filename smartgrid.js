const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
      "justify-content",
      "align-items",
      "align-content",
      "align-self",
      "order",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "float"
    ]
};

smartgrid('./src/precss', settings);
