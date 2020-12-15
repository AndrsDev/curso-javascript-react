const styled = function() {
  const tags = ['h1', 'h2', 'h3', 'p', 'div'];
  let object = {}

  tags.forEach(tag => {
    object[tag] = function(styles) {
      return function(content){
        return`
          <${tag} style="${styles}">
            ${content}
          </${tag}>
        `
      }
    }
  })

  object['img'] = function(styles) {
    return function(content){
      return`
        <img style="${styles}" ${content}"/>
      `
    }
  }

  return object;
}()

export default styled;