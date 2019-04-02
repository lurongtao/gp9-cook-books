const list = require('./cookbook-list.json')
const detail = require('./cookbook-detail.json')
const category = require('./cookbook-category.json')

module.exports = function() {
  return {
    list,
    detail,
    category
  }
}