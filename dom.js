window.dom = dom

/**
 * dom
 * Takes a selector (and optional HTML element as context) and
 * creates a reference the element(s) contained in the document (or context)
 * @constructor
 * @param {string} selector - CSS selector specifying which elements to get
 * @param {string|HTMLElement} [context] - An optional element to search within
 */
function dom (selector, context) {
  if (!selector) {
    return document
  }
  if (!context) {
    context = document
  }
  return context.querySelectorAll(selector)
}
