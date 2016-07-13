var filmset = [
  { id: 1, title: "The Shawshank Redemption", year: 1994},
  { id: 2, title: "The Godfather", year: 1972},
  { id: 3, title: "The Godfather: Part II", year: 1974},
  { id: 4, title: "The Good, the Bad and the Ugly", year: 1966},
  { id: 5, title: "My Fair Lady", year: 1964},
  { id: 6, title: "12 Angry Men", year: 1957},
]

function addRow() {
  if(!isFormFilled()) {
    return
  }

  $$("mylist").add({
    title: $$("simpleForm").getValues().title,
    year: $$("simpleForm").getValues().year
  })
  clearForm()
}

function deleteRow() {
  var id = $$("mylist").getSelectedId()
  if(!id) return

  // Adding a confirmation window
  webix.confirm({
    title: "Delete",
    text: "Are you sure you want to delete the selected movie?",
    callback: function(result) {
      if(result) {
        $$("mylist").remove(id)
      }
    }
  })
}

function updateRow() {
  var selected = $$("mylist").getSelectedId()
  if(!isFormFilled() || !selected) {
    return
  }

  var title = $$("simpleForm").getValues().title
  var year = $$("simpleForm").getValues().year

  var item = $$("mylist").getItem(selected)
  item.title = title
  item.year = year

  $$("mylist").updateItem(selected, item)

  clearForm()
}

function clearForm() {
  $$('simpleForm').clear()
}

function isFormFilled() {
  return $$("simpleForm").getValues().title.length > 0 &&
         $$("simpleForm").getValues().year.length > 0
}

function selectCurrentMovie(id) {
  $$("simpleForm").setValues({
    title: $$("mylist").getItem(id).title,
    year: $$("mylist").getItem(id).year
  })
}

webix.ready(function() {

  webix.ui({
    type: "head",
    container: "simpleContainer",
    rows: [
      {
        view: "toolbar",
        elements: [
          {
            view: "button",
            value: "Add",
            width: 70,
            click: addRow
          },
          {
            view: "button",
            value: "Delete",
            width: 70,
            click: deleteRow
          },
          {
            view: "button",
            value: "Update",
            width: 70,
            click: updateRow
          },
          {
            view: "button",
            value: "Clear Form",
            width: 85,
            click: clearForm
          }
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
              algin: "left"
            },
            {
              view: "text",
              name: "year",
              placeholder: "Year",
              width: 250,
              align: "left"
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

  // Define events here, when the DOM and the Webix context is initialized
  $$("mylist").attachEvent("onAfterSelect", selectCurrentMovie)
})
