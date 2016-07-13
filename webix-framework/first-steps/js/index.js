webix.ready(function() {
  webix.ui({
    type: "head",
    container: "simpleContainer",
    rows: [
      {template: "Row 1"},
      {view: "resizer"},
      {cols: [
        {template: "Column 1"},
        {view: "resizer"},
        {template: "Column 2"}
      ]}
    ]
  })
})
