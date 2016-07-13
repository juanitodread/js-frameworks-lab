var filmset = [
  { id: 1, title: "The Shawshank Redemption", year: 1994},
  { id: 2, title: "The Godfather", year: 1972},
  { id: 3, title: "The Godfather: Part II", year: 1974},
  { id: 4, title: "The Good, the Bad and the Ugly", year: 1966},
  { id: 5, title: "My Fair Lady", year: 1964},
  { id: 6, title: "12 Angry Men", year: 1957},
]

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
          view: "form",
          id: "simpleForm",
          width: 400,
          elements: [
            {
              view: "text",
              name: "title",
              placeholder: "Title",
              width: 250,
              algin: "center"
            },
            {
              view: "text",
              name: "year",
              placeholder: "Year",
              width: 250,
              align: "center"
            }
          ]
        },
        {view: "resizer"},
        {
          view: "list",
          id: "mylist",
          template: "#title# - #year#",
          select: true,
          height: 400,
          data: filmset
        }
      ]}
    ]
  })
})
