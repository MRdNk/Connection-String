
var ConnectionString = function () {

  if (!(this instanceof ConnectionString))
    return new ConnectionString

  var self = this
  var that = {}

  that.strings = {
    test: {
        userName: 'test'
      , password: 'test'
      , server: 'localhost'
    }
  }

  function get(name) {
    return that.strings[name]
  }

  function set(name, opts) {
    if (that.strings[name])
      return -1

    that.strings[name] = opts
    return 1
  }

  self.get = get
  return self
}

module.exports = ConnectionString()