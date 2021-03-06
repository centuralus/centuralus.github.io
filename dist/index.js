// _snowpack/pkg/common/preact.module-e813fd64.js
var n;
var u;
var i;
var t;
var o = {};
var f = [];
var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n2, l2) {
  for (var u3 in l2)
    n2[u3] = l2[u3];
  return n2;
}
function s(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function a(n2, l2, u3) {
  var i3, t3, r2, o3 = arguments, f3 = {};
  for (r2 in l2)
    r2 == "key" ? i3 = l2[r2] : r2 == "ref" ? t3 = l2[r2] : f3[r2] = l2[r2];
  if (arguments.length > 3)
    for (u3 = [u3], r2 = 3; r2 < arguments.length; r2++)
      u3.push(o3[r2]);
  if (u3 != null && (f3.children = u3), typeof n2 == "function" && n2.defaultProps != null)
    for (r2 in n2.defaultProps)
      f3[r2] === void 0 && (f3[r2] = n2.defaultProps[r2]);
  return v(n2, f3, i3, t3, null);
}
function v(l2, u3, i3, t3, r2) {
  var o3 = {type: l2, props: u3, key: i3, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++n.__v : r2};
  return n.vnode != null && n.vnode(o3), o3;
}
function y(n2) {
  return n2.children;
}
function p(n2, l2) {
  this.props = n2, this.context = l2;
}
function d(n2, l2) {
  if (l2 == null)
    return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++)
    if ((u3 = n2.__k[l2]) != null && u3.__e != null)
      return u3.__e;
  return typeof n2.type == "function" ? d(n2) : null;
}
function _(n2) {
  var l2, u3;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u3 = n2.__k[l2]) != null && u3.__e != null) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return _(n2);
  }
}
function k(l2) {
  (!l2.__d && (l2.__d = true) && u.push(l2) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}
function m() {
  for (var n2; m.__r = u.length; )
    n2 = u.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), u = [], n2.some(function(n3) {
      var l2, u3, i3, t3, r2, o3;
      n3.__d && (r2 = (t3 = (l2 = n3).__v).__e, (o3 = l2.__P) && (u3 = [], (i3 = c({}, t3)).__v = t3.__v + 1, T(o3, t3, i3, l2.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r2] : null, u3, r2 == null ? d(t3) : r2, t3.__h), j(u3, t3), t3.__e != r2 && _(t3)));
    });
}
function b(n2, l2, u3, i3, t3, r2, e3, c3, s2, a3) {
  var h, p3, _2, k3, m3, b3, w2, A2 = i3 && i3.__k || f, P2 = A2.length;
  for (u3.__k = [], h = 0; h < l2.length; h++)
    if ((k3 = u3.__k[h] = (k3 = l2[h]) == null || typeof k3 == "boolean" ? null : typeof k3 == "string" || typeof k3 == "number" ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(y, {children: k3}, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, null, k3.__v) : k3) != null) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, (_2 = A2[h]) === null || _2 && k3.key == _2.key && k3.type === _2.type)
        A2[h] = void 0;
      else
        for (p3 = 0; p3 < P2; p3++) {
          if ((_2 = A2[p3]) && k3.key == _2.key && k3.type === _2.type) {
            A2[p3] = void 0;
            break;
          }
          _2 = null;
        }
      T(n2, k3, _2 = _2 || o, t3, r2, e3, c3, s2, a3), m3 = k3.__e, (p3 = k3.ref) && _2.ref != p3 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k3), w2.push(p3, k3.__c || m3, k3)), m3 != null ? (b3 == null && (b3 = m3), typeof k3.type == "function" && k3.__k != null && k3.__k === _2.__k ? k3.__d = s2 = g(k3, s2, n2) : s2 = x(n2, k3, _2, A2, m3, s2), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
    }
  for (u3.__e = b3, h = P2; h--; )
    A2[h] != null && (typeof u3.type == "function" && A2[h].__e != null && A2[h].__e == u3.__d && (u3.__d = d(i3, h + 1)), L(A2[h], A2[h]));
  if (w2)
    for (h = 0; h < w2.length; h++)
      I(w2[h], w2[++h], w2[++h]);
}
function g(n2, l2, u3) {
  var i3, t3;
  for (i3 = 0; i3 < n2.__k.length; i3++)
    (t3 = n2.__k[i3]) && (t3.__ = n2, l2 = typeof t3.type == "function" ? g(t3, l2, u3) : x(u3, t3, t3, n2.__k, t3.__e, l2));
  return l2;
}
function x(n2, l2, u3, i3, t3, r2) {
  var o3, f3, e3;
  if (l2.__d !== void 0)
    o3 = l2.__d, l2.__d = void 0;
  else if (u3 == null || t3 != r2 || t3.parentNode == null)
    n:
      if (r2 == null || r2.parentNode !== n2)
        n2.appendChild(t3), o3 = null;
      else {
        for (f3 = r2, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, r2), o3 = r2;
      }
  return o3 !== void 0 ? o3 : t3.nextSibling;
}
function A(n2, l2, u3, i3, t3) {
  var r2;
  for (r2 in u3)
    r2 === "children" || r2 === "key" || r2 in l2 || C(n2, r2, null, u3[r2], i3);
  for (r2 in l2)
    t3 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u3[r2] === l2[r2] || C(n2, r2, l2[r2], u3[r2], i3);
}
function P(n2, l2, u3) {
  l2[0] === "-" ? n2.setProperty(l2, u3) : n2[l2] = u3 == null ? "" : typeof u3 != "number" || e.test(l2) ? u3 : u3 + "px";
}
function C(n2, l2, u3, i3, t3) {
  var r2;
  n:
    if (l2 === "style")
      if (typeof u3 == "string")
        n2.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
          for (l2 in i3)
            u3 && l2 in u3 || P(n2.style, l2, "");
        if (u3)
          for (l2 in u3)
            i3 && u3[l2] === i3[l2] || P(n2.style, l2, u3[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? i3 || n2.addEventListener(l2, r2 ? H : $, r2) : n2.removeEventListener(l2, r2 ? H : $, r2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t3)
        l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u3 == null ? "" : u3;
          break n;
        } catch (n3) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u3) : n2.removeAttribute(l2));
    }
}
function $(l2) {
  this.l[l2.type + false](n.event ? n.event(l2) : l2);
}
function H(l2) {
  this.l[l2.type + true](n.event ? n.event(l2) : l2);
}
function T(l2, u3, i3, t3, r2, o3, f3, e3, s2) {
  var a3, v3, h, d2, _2, k3, m3, g3, w2, x3, A2, P2 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (s2 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (a3 = n.__b) && a3(u3);
  try {
    n:
      if (typeof P2 == "function") {
        if (g3 = u3.props, w2 = (a3 = P2.contextType) && t3[a3.__c], x3 = a3 ? w2 ? w2.props.value : a3.__ : t3, i3.__c ? m3 = (v3 = u3.__c = i3.__c).__ = v3.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = v3 = new P2(g3, x3) : (u3.__c = v3 = new p(g3, x3), v3.constructor = P2, v3.render = M), w2 && w2.sub(v3), v3.props = g3, v3.state || (v3.state = {}), v3.context = x3, v3.__n = t3, h = v3.__d = true, v3.__h = []), v3.__s == null && (v3.__s = v3.state), P2.getDerivedStateFromProps != null && (v3.__s == v3.state && (v3.__s = c({}, v3.__s)), c(v3.__s, P2.getDerivedStateFromProps(g3, v3.__s))), d2 = v3.props, _2 = v3.state, h)
          P2.getDerivedStateFromProps == null && v3.componentWillMount != null && v3.componentWillMount(), v3.componentDidMount != null && v3.__h.push(v3.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && g3 !== d2 && v3.componentWillReceiveProps != null && v3.componentWillReceiveProps(g3, x3), !v3.__e && v3.shouldComponentUpdate != null && v3.shouldComponentUpdate(g3, v3.__s, x3) === false || u3.__v === i3.__v) {
            v3.props = g3, v3.state = v3.__s, u3.__v !== i3.__v && (v3.__d = false), v3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, v3.__h.length && f3.push(v3);
            break n;
          }
          v3.componentWillUpdate != null && v3.componentWillUpdate(g3, v3.__s, x3), v3.componentDidUpdate != null && v3.__h.push(function() {
            v3.componentDidUpdate(d2, _2, k3);
          });
        }
        v3.context = x3, v3.props = g3, v3.state = v3.__s, (a3 = n.__r) && a3(u3), v3.__d = false, v3.__v = u3, v3.__P = l2, a3 = v3.render(v3.props, v3.state, v3.context), v3.state = v3.__s, v3.getChildContext != null && (t3 = c(c({}, t3), v3.getChildContext())), h || v3.getSnapshotBeforeUpdate == null || (k3 = v3.getSnapshotBeforeUpdate(d2, _2)), A2 = a3 != null && a3.type === y && a3.key == null ? a3.props.children : a3, b(l2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, r2, o3, f3, e3, s2), v3.base = u3.__e, u3.__h = null, v3.__h.length && f3.push(v3), m3 && (v3.__E = v3.__ = null), v3.__e = false;
      } else
        o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = z(i3.__e, u3, i3, t3, r2, o3, f3, s2);
    (a3 = n.diffed) && a3(u3);
  } catch (l3) {
    u3.__v = null, (s2 || o3 != null) && (u3.__e = e3, u3.__h = !!s2, o3[o3.indexOf(e3)] = null), n.__e(l3, u3, i3);
  }
}
function j(l2, u3) {
  n.__c && n.__c(u3, l2), l2.some(function(u4) {
    try {
      l2 = u4.__h, u4.__h = [], l2.some(function(n2) {
        n2.call(u4);
      });
    } catch (l3) {
      n.__e(l3, u4.__v);
    }
  });
}
function z(n2, l2, u3, i3, t3, r2, e3, c3) {
  var a3, v3, h, y3, p3 = u3.props, d2 = l2.props, _2 = l2.type, k3 = 0;
  if (_2 === "svg" && (t3 = true), r2 != null) {
    for (; k3 < r2.length; k3++)
      if ((a3 = r2[k3]) && (a3 === n2 || (_2 ? a3.localName == _2 : a3.nodeType == 3))) {
        n2 = a3, r2[k3] = null;
        break;
      }
  }
  if (n2 == null) {
    if (_2 === null)
      return document.createTextNode(d2);
    n2 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, c3 = false;
  }
  if (_2 === null)
    p3 === d2 || c3 && n2.data === d2 || (n2.data = d2);
  else {
    if (r2 = r2 && f.slice.call(n2.childNodes), v3 = (p3 = u3.props || o).dangerouslySetInnerHTML, h = d2.dangerouslySetInnerHTML, !c3) {
      if (r2 != null)
        for (p3 = {}, y3 = 0; y3 < n2.attributes.length; y3++)
          p3[n2.attributes[y3].name] = n2.attributes[y3].value;
      (h || v3) && (h && (v3 && h.__html == v3.__html || h.__html === n2.innerHTML) || (n2.innerHTML = h && h.__html || ""));
    }
    if (A(n2, d2, p3, t3, c3), h)
      l2.__k = [];
    else if (k3 = l2.props.children, b(n2, Array.isArray(k3) ? k3 : [k3], l2, u3, i3, t3 && _2 !== "foreignObject", r2, e3, n2.firstChild, c3), r2 != null)
      for (k3 = r2.length; k3--; )
        r2[k3] != null && s(r2[k3]);
    c3 || ("value" in d2 && (k3 = d2.value) !== void 0 && (k3 !== n2.value || _2 === "progress" && !k3) && C(n2, "value", k3, p3.value, false), "checked" in d2 && (k3 = d2.checked) !== void 0 && k3 !== n2.checked && C(n2, "checked", k3, p3.checked, false));
  }
  return n2;
}
function I(l2, u3, i3) {
  try {
    typeof l2 == "function" ? l2(u3) : l2.current = u3;
  } catch (l3) {
    n.__e(l3, i3);
  }
}
function L(l2, u3, i3) {
  var t3, r2, o3;
  if (n.unmount && n.unmount(l2), (t3 = l2.ref) && (t3.current && t3.current !== l2.__e || I(t3, null, u3)), i3 || typeof l2.type == "function" || (i3 = (r2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t3 = l2.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (l3) {
        n.__e(l3, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = l2.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && L(t3[o3], u3, i3);
  r2 != null && s(r2);
}
function M(n2, l2, u3) {
  return this.constructor(n2, u3);
}
function N(l2, u3, i3) {
  var t3, r2, e3;
  n.__ && n.__(l2, u3), r2 = (t3 = typeof i3 == "function") ? null : i3 && i3.__k || u3.__k, e3 = [], T(u3, l2 = (!t3 && i3 || u3).__k = a(y, null, [l2]), r2 || o, o, u3.ownerSVGElement !== void 0, !t3 && i3 ? [i3] : r2 ? null : u3.firstChild ? f.slice.call(u3.childNodes) : null, e3, !t3 && i3 ? i3 : r2 ? r2.__e : u3.firstChild, t3), j(e3, l2);
}
n = {__e: function(n2, l2) {
  for (var u3, i3, t3; l2 = l2.__; )
    if ((u3 = l2.__c) && !u3.__)
      try {
        if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
          return u3.__E = u3;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
}, __v: 0}, p.prototype.setState = function(n2, l2) {
  var u3;
  u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u3), this.props)), n2 && c(u3, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
}, p.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
}, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, 0;

// _snowpack/pkg/preact/devtools.js
typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.12", n, {Fragment: y, Component: p});

// _snowpack/pkg/preact/hooks.js
var t2;
var u2;
var r;
var o2 = 0;
var i2 = [];
var c2 = n.__b;
var f2 = n.__r;
var e2 = n.diffed;
var a2 = n.__c;
var v2 = n.unmount;
function m2(t3, r2) {
  n.__h && n.__h(u2, t3, o2 || r2), o2 = 0;
  var i3 = u2.__H || (u2.__H = {__: [], __h: []});
  return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
}
function l(n2) {
  return o2 = 1, p2(w, n2);
}
function p2(n2, r2, o3) {
  var i3 = m2(t2++, 2);
  return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r2) : w(void 0, r2), function(n3) {
    var t3 = i3.t(i3.__[0], n3);
    i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
  }], i3.__c = u2), i3.__;
}
function y2(r2, o3) {
  var i3 = m2(t2++, 3);
  !n.__s && k2(i3.__H, o3) && (i3.__ = r2, i3.__H = o3, u2.__H.__h.push(i3));
}
function x2() {
  i2.forEach(function(t3) {
    if (t3.__P)
      try {
        t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
      } catch (u3) {
        t3.__H.__h = [], n.__e(u3, t3.__v);
      }
  }), i2 = [];
}
n.__b = function(n2) {
  u2 = null, c2 && c2(n2);
}, n.__r = function(n2) {
  f2 && f2(n2), t2 = 0;
  var r2 = (u2 = n2.__c).__H;
  r2 && (r2.__h.forEach(g2), r2.__h.forEach(j2), r2.__h = []);
}, n.diffed = function(t3) {
  e2 && e2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r === n.requestAnimationFrame || ((r = n.requestAnimationFrame) || function(n2) {
    var t4, u3 = function() {
      clearTimeout(r2), b2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r2 = setTimeout(u3, 100);
    b2 && (t4 = requestAnimationFrame(u3));
  })(x2)), u2 = void 0;
}, n.__c = function(t3, u3) {
  u3.some(function(t4) {
    try {
      t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || j2(n2);
      });
    } catch (r2) {
      u3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u3 = [], n.__e(r2, t4.__v);
    }
  }), a2 && a2(t3, u3);
}, n.unmount = function(t3) {
  v2 && v2(t3);
  var u3 = t3.__c;
  if (u3 && u3.__H)
    try {
      u3.__H.__.forEach(g2);
    } catch (t4) {
      n.__e(t4, u3.__v);
    }
};
var b2 = typeof requestAnimationFrame == "function";
function g2(n2) {
  var t3 = u2;
  typeof n2.__c == "function" && n2.__c(), u2 = t3;
}
function j2(n2) {
  var t3 = u2;
  n2.__c = n2.__(), u2 = t3;
}
function k2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
    return t4 !== n2[u3];
  });
}
function w(n2, t3) {
  return typeof t3 == "function" ? t3(n2) : t3;
}

// dist/logo.png.proxy.js
var logo_png_proxy_default = "/dist/logo.png";

// dist/App.js
function App() {
  const [count, setCount] = l(0);
  y2(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ a("div", {
    className: "App"
  }, /* @__PURE__ */ a("header", {
    className: "App-header"
  }, /* @__PURE__ */ a("img", {
    src: logo_png_proxy_default,
    className: "App-logo",
    alt: "Centural Logo"
  }), /* @__PURE__ */ a("h1", null, "Centural.Us"), /* @__PURE__ */ a("div", {
    className: "login_register"
  }, /* @__PURE__ */ a("p", null, "To login to the framework please provide a secret_key which can be created by loging in, typing ", /* @__PURE__ */ a("span", null, "/trigger secret_key"), " then typing in your secret_key in the writable_book."), /* @__PURE__ */ a("label", {
    for: "secret_key"
  }, "Secret Key"), /* @__PURE__ */ a("input", {
    "data-testid": "secret_key",
    type: "password",
    label: "Write your secret key in a book secret_key book in game to login!"
  }))));
}
var App_default = App;

// dist/index.js
var root = document.getElementById("root");
if (root) {
  N(/* @__PURE__ */ a(App_default, null), root);
}
