webix.ready(function() {
  webix.ui({
    type: "head",
    container: "simpleContainer",
    rows: [
      {template: "Row 1"},
      {view: "resizer"},
      {cols: [
        {
          template: "Column 1",
          height: 50
        },
        {view: "resizer"},
        {
          template: "Column 2",
          width: 150
        }
      ]}
    ]
  })
})
