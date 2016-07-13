webix.ready(function() {
  webix.ui({
    type: "head",
    container: "simpleContainer",
    rows: [
      {
        view: "toolbar",
        elements: [
          { view: "button", value: "Add", width: 70 },
          { view: "button", value: "Delete", width: 70 },
          { view: "button", value: "Update", width: 70 },
          { view: "button", value: "Clear Form", width: 85 }
        ]
      },
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
