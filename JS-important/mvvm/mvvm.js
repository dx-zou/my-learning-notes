function Feeng(options = {}) {
  this.$options = options;
  var data = (this._data = this.$options.data);
  //观察data
  observe(data);
  for (let key in data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        return this._data[key];
      },
      set(newVal) {
        this._data[key] = newVal;
      }
    });
  }
}
function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  //创建文档碎片
  var fragment = document.createDocumentFragment();
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child);
  }
  Array.from(fragment.childNodes).forEach(item => {
    fragment.appendChild();
  });
}
function observe(data) {
  if (typeof data !== "object") return;
  return new Observe(data);
}

function Observe(data) {
  for (const key in data) {
    let val = data[key];
    observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val;
      },
      set(newVal) {
        if (newVal === val) return;
        val = newVal;
        observe(newVal);
      }
    });
  }
}
