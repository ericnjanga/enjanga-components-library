// Single project
// ----------------------------
const project = `
query projectEntryQuery {
  en: project(id: "5y2JSha3mykWdGkUf6XcQp", locale: "en-CA") {
    sys {
      id
    }
    title
    blurb
        description {
          json
        } 
  }
  fr: project(id: "5y2JSha3mykWdGkUf6XcQp", locale: "fr") {
    sys {
      id
    }
    title
    blurb
        description {
          json
        } 
  }
}`;
