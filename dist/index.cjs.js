'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @public
 */
var MotionConfigContext = /*#__PURE__*/React.createContext({
  transformPagePoint: function transformPagePoint(p) {
    return p;
  },
  isStatic: false,
  reducedMotion: "never"
});

var MotionContext = /*#__PURE__*/React.createContext({});

/**
 * @public
 */
var PresenceContext = /*#__PURE__*/React.createContext(null);

var isBrowser = typeof document !== "undefined";

var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

var LazyContext = /*#__PURE__*/React.createContext({
  strict: false
});

/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    this.order = [];
    this.scheduled = new Set();
  }
  return _createClass(Queue, [{
    key: "add",
    value: function add(process) {
      if (!this.scheduled.has(process)) {
        this.scheduled.add(process);
        this.order.push(process);
        return true;
      }
    }
  }, {
    key: "remove",
    value: function remove(process) {
      var index = this.order.indexOf(process);
      if (index !== -1) {
        this.order.splice(index, 1);
        this.scheduled["delete"](process);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.order.length = 0;
      this.scheduled.clear();
    }
  }]);
}();
function createRenderStep(runNextFrame) {
  /**
   * We create and reuse two queues, one to queue jobs for the current frame
   * and one for the next. We reuse to avoid triggering GC after x frames.
   */
  var thisFrame = new Queue();
  var nextFrame = new Queue();
  var numToRun = 0;
  /**
   * Track whether we're currently processing jobs in this step. This way
   * we can decide whether to schedule new jobs for this frame or next.
   */
  var isProcessing = false;
  var flushNextFrame = false;
  /**
   * A set of processes which were marked keepAlive when scheduled.
   */
  var toKeepAlive = new WeakSet();
  var step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: function schedule(callback) {
      var keepAlive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var addToCurrentFrame = immediate && isProcessing;
      var queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        // If we're adding it to the currently running queue, update its measured size
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: function cancel(callback) {
      nextFrame.remove(callback);
      toKeepAlive["delete"](callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: function process(frameData) {
      /**
       * If we're already processing we've probably been triggered by a flushSync
       * inside an existing process. Instead of executing, mark flushNextFrame
       * as true and ensure we flush the following frame at the end of this one.
       */
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      // Clear the next frame queue
      var _ref = [nextFrame, thisFrame];
      thisFrame = _ref[0];
      nextFrame = _ref[1];
      nextFrame.clear();
      // Execute this frame
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (var i = 0; i < numToRun; i++) {
          var callback = thisFrame.order[i];
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
          callback(frameData);
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

var stepsOrder = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender" // Compute
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  var runNextFrame = false;
  var useDefaultElapsed = true;
  var state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  var steps = stepsOrder.reduce(function (acc, key) {
    acc[key] = createRenderStep(function () {
      return runNextFrame = true;
    });
    return acc;
  }, {});
  var processStep = function processStep(stepId) {
    steps[stepId].process(state);
  };
  var processBatch = function processBatch() {
    var timestamp = performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  var wake = function wake() {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  var schedule = stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process) {
      var keepAlive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!runNextFrame) wake();
      return step.schedule(process, keepAlive, immediate);
    };
    return acc;
  }, {});
  var cancel = function cancel(process) {
    return stepsOrder.forEach(function (key) {
      return steps[key].cancel(process);
    });
  };
  return {
    schedule: schedule,
    cancel: cancel,
    state: state,
    steps: steps
  };
}

var _createRenderBatcher$1 = createRenderBatcher(queueMicrotask, false),
  microtask = _createRenderBatcher$1.schedule;

function useVisualElement(Component, visualState, props, createVisualElement) {
  var _useContext = React.useContext(MotionContext),
    parent = _useContext.visualElement;
  var lazyContext = React.useContext(LazyContext);
  var presenceContext = React.useContext(PresenceContext);
  var reducedMotionConfig = React.useContext(MotionConfigContext).reducedMotion;
  var visualElementRef = React.useRef();
  /**
   * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
   */
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState: visualState,
      parent: parent,
      props: props,
      presenceContext: presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig: reducedMotionConfig
    });
  }
  var visualElement = visualElementRef.current;
  React.useInsertionEffect(function () {
    visualElement && visualElement.update(props, presenceContext);
  });
  /**
   * Cache this value as we want to know whether HandoffAppearAnimations
   * was present on initial render - it will be deleted after this.
   */
  var wantsHandoff = React.useRef(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  useIsomorphicLayoutEffect(function () {
    if (!visualElement) return;
    microtask.postRender(visualElement.render);
    /**
     * Ideally this function would always run in a useEffect.
     *
     * However, if we have optimised appear animations to handoff from,
     * it needs to happen synchronously to ensure there's no flash of
     * incorrect styles in the event of a hydration error.
     *
     * So if we detect a situtation where optimised appear animations
     * are running, we use useLayoutEffect to trigger animations.
     */
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  React.useEffect(function () {
    if (!visualElement) return;
    visualElement.updateFeatures();
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      wantsHandoff.current = false;
      // This ensures all future calls to animateChanges() will run in useEffect
      window.HandoffComplete = true;
    }
  });
  return visualElement;
}

function isRefObject(ref) {
  return ref && _typeof(ref) === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
  return React.useCallback(function (instance) {
    instance && visualState.mount && visualState.mount(instance);
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  },
  /**
   * Only pass a new ref callback to React if we've received a visual element
   * factory. Otherwise we'll be mounting/remounting every time externalRef
   * or other dependencies change.
   */
  [visualElement]);
}

/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

function isAnimationControls(v) {
  return v !== null && _typeof(v) === "object" && typeof v.start === "function";
}

var variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var variantProps = ["initial"].concat(variantPriorityOrder);

function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(function (name) {
    return isVariantLabel(props[name]);
  });
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    var initial = props.initial,
      animate = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : undefined,
      animate: isVariantLabel(animate) ? animate : undefined
    };
  }
  return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
  var _getCurrentTreeVarian = getCurrentTreeVariants(props, React.useContext(MotionContext)),
    initial = _getCurrentTreeVarian.initial,
    animate = _getCurrentTreeVarian.animate;
  return React.useMemo(function () {
    return {
      initial: initial,
      animate: animate
    };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

var featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
var _loop = function _loop(key) {
  featureDefinitions[key] = {
    isEnabled: function isEnabled(props) {
      return featureProps[key].some(function (name) {
        return !!props[name];
      });
    }
  };
};
for (var key in featureProps) {
  _loop(key);
}

function loadFeatures(features) {
  for (var key in features) {
    featureDefinitions[key] = _objectSpread2(_objectSpread2({}, featureDefinitions[key]), features[key]);
  }
}

var LayoutGroupContext = /*#__PURE__*/React.createContext({});

/**
 * Internal, exported only for usage in Framer
 */
var SwitchLayoutGroupContext = /*#__PURE__*/React.createContext({});

var motionComponentSymbol = Symbol["for"]("motionComponentSymbol");

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent(_ref) {
  var preloadedFeatures = _ref.preloadedFeatures,
    createVisualElement = _ref.createVisualElement,
    useRender = _ref.useRender,
    useVisualState = _ref.useVisualState,
    Component = _ref.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    /**
     * If we need to measure the element we load this functionality in a
     * separate class component in order to gain access to getSnapshotBeforeUpdate.
     */
    var MeasureLayout;
    var configAndProps = _objectSpread2(_objectSpread2(_objectSpread2({}, React.useContext(MotionConfigContext)), props), {}, {
      layoutId: useLayoutId(props)
    });
    var isStatic = configAndProps.isStatic;
    var context = useCreateMotionContext(props);
    var visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      /**
       * Create a VisualElement for this component. A VisualElement provides a common
       * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
       * providing a way of rendering to these APIs outside of the React render loop
       * for more performant animations and interactions
       */
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
      /**
       * Load Motion gesture and animation features. These are rendered as renderless
       * components so each feature can optionally make use of React lifecycle methods.
       */
      var initialLayoutGroupConfig = React.useContext(SwitchLayoutGroupContext);
      var isStrict = React.useContext(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout = context.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        configAndProps, isStrict, preloadedFeatures, initialLayoutGroupConfig);
      }
    }
    /**
     * The mount order and hierarchy is specific to ensure our element ref
     * is hydrated by the time features fire their effects.
     */
    return /*#__PURE__*/React__namespace.createElement(MotionContext.Provider, {
      value: context
    }, MeasureLayout && context.visualElement ? ( /*#__PURE__*/React__namespace.createElement(MeasureLayout, _objectSpread2({
      visualElement: context.visualElement
    }, configAndProps))) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
  }
  var ForwardRefComponent = /*#__PURE__*/React.forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component;
  return ForwardRefComponent;
}
function useLayoutId(_ref2) {
  var layoutId = _ref2.layoutId;
  var layoutGroupId = React.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
  function custom(Component) {
    var customMotionComponentConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  /**
   * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
   * Rather than generating them anew every render.
   */
  var componentCache = new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: function get(_target, key) {
      /**
       * If this element doesn't exist in the component cache, create it and cache.
       */
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function isSVGComponent(Component) {
  if (
  /**
   * If it's not a string, it's a custom React component. Currently we only support
   * HTML custom React components.
   */
  typeof Component !== "string" ||
  /**
   * If it contains a dash, the element is a custom HTML webcomponent.
   */
  Component.includes("-")) {
    return false;
  } else if (
  /**
   * If it's in our list of lowercase SVG tags, it's an SVG component
   */
  lowercaseSVGElements.indexOf(Component) > -1 ||
  /**
   * If it contains a capital letter, it's an SVG component
   */
  /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}

var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

/**
 * Generate a list of every possible transform key.
 */
var transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
/**
 * A quick lookup for transform props.
 */
var transformProps = new Set(transformPropOrder);

function isForcedMotionValue(key, _ref) {
  var layout = _ref.layout,
    layoutId = _ref.layoutId;
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!scaleCorrectors[key] || key === "opacity");
}

var isMotionValue = function isMotionValue(value) {
  return Boolean(value && value.getVelocity);
};

var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, _ref, transformIsDefault, transformTemplate) {
  var _ref$enableHardwareAc = _ref.enableHardwareAcceleration,
    enableHardwareAcceleration = _ref$enableHardwareAc === void 0 ? true : _ref$enableHardwareAc,
    _ref$allowTransformNo = _ref.allowTransformNone,
    allowTransformNone = _ref$allowTransformNo === void 0 ? true : _ref$allowTransformNo;
  // The transform string we're going to build into.
  var transformString = "";
  /**
   * Loop over all possible transforms in order, adding the ones that
   * are present to the transform string.
   */
  for (var i = 0; i < numTransforms; i++) {
    var key = transformPropOrder[i];
    if (transform[key] !== undefined) {
      var transformName = translateAlias[key] || key;
      transformString += "".concat(transformName, "(").concat(transform[key], ") ");
    }
  }
  if (enableHardwareAcceleration && !transform.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  // If we have a custom `transform` template, pass our transform values and
  // generated transformString to that before returning
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

var checkStringStartsWith = function checkStringStartsWith(token) {
  return function (key) {
    return typeof key === "string" && key.startsWith(token);
  };
};
var isCSSVariableName = checkStringStartsWith("--");
var startsAsVariableToken = checkStringStartsWith("var(--");
var isCSSVariableToken = function isCSSVariableToken(value) {
  var startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken) return false;
  // Ensure any comments are stripped from the value as this can harm performance of the regex.
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(\x2D\x2D(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i;

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function getValueAsType(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};

var clamp = function clamp(min, max, v) {
  if (v > max) return max;
  if (v < min) return min;
  return v;
};

var number = {
  test: function test(v) {
    return typeof v === "number";
  },
  parse: parseFloat,
  transform: function transform(v) {
    return v;
  }
};
var alpha = _objectSpread2(_objectSpread2({}, number), {}, {
  transform: function transform(v) {
    return clamp(0, 1, v);
  }
});
var scale = _objectSpread2(_objectSpread2({}, number), {}, {
  "default": 1
});

/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var sanitize = function sanitize(v) {
  return Math.round(v * 100000) / 100000;
};
var floatRegex = /\x2D?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
var colorRegex = /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:\x2D?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}\x2D?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
var singleColorRegex = /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:\x2D?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}\x2D?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

var createUnitType = function createUnitType(unit) {
  return {
    test: function test(v) {
      return isString(v) && v.endsWith(unit) && v.split(" ").length === 1;
    },
    parse: parseFloat,
    transform: function transform(v) {
      return "".concat(v).concat(unit);
    }
  };
};
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = _objectSpread2(_objectSpread2({}, percent), {}, {
  parse: function parse(v) {
    return percent.parse(v) / 100;
  },
  transform: function transform(v) {
    return percent.transform(v * 100);
  }
});

var _int = _objectSpread2(_objectSpread2({}, number), {}, {
  transform: Math.round
});

var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale: scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: _int,
  backgroundPositionX: px,
  backgroundPositionY: px,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: _int
};

function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var style = state.style,
    vars = state.vars,
    transform = state.transform,
    transformOrigin = state.transformOrigin;
  // Track whether we encounter any transform or transformOrigin values.
  var hasTransform = false;
  var hasTransformOrigin = false;
  // Does the calculated transform essentially equal "none"?
  var transformIsNone = true;
  /**
   * Loop over all our latest animated values and decide whether to handle them
   * as a style or CSS variable.
   *
   * Transforms and transform origins are kept seperately for further processing.
   */
  for (var key in latestValues) {
    var value = latestValues[key];
    /**
     * If this is a CSS variable we don't do any further processing.
     */
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    // Convert the value to its default value type, ie 0 -> "0px"
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      // If this is a transform, flag to enable further transform processing
      hasTransform = true;
      transform[key] = valueAsType;
      // If we already know we have a non-default transform, early return
      if (!transformIsNone) continue;
      // Otherwise check to see if this is a default transform
      if (value !== (valueType["default"] || 0)) transformIsNone = false;
    } else if (key.startsWith("origin")) {
      // If this is a transform origin, flag and enable further transform-origin processing
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      /**
       * If we have previously created a transform but currently don't have any,
       * reset transform style to none.
       */
      style.transform = "none";
    }
  }
  /**
   * Build a transformOrigin style. Uses the same defaults as the browser for
   * undefined origins.
   */
  if (hasTransformOrigin) {
    var _transformOrigin$orig = transformOrigin.originX,
      originX = _transformOrigin$orig === void 0 ? "50%" : _transformOrigin$orig,
      _transformOrigin$orig2 = transformOrigin.originY,
      originY = _transformOrigin$orig2 === void 0 ? "50%" : _transformOrigin$orig2,
      _transformOrigin$orig3 = transformOrigin.originZ,
      originZ = _transformOrigin$orig3 === void 0 ? 0 : _transformOrigin$orig3;
    style.transformOrigin = "".concat(originX, " ").concat(originY, " ").concat(originZ);
  }
}

var createHtmlRenderState = function createHtmlRenderState() {
  return {
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  };
};

function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_ref, visualState, isStatic) {
  var transformTemplate = _ref.transformTemplate;
  return React.useMemo(function () {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  /**
   * Copy non-Motion Values straight into style
   */
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  // The `any` isn't ideal but it is the type of createElement props argument
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    // Disable the ghost element when a user drags
    htmlProps.draggable = false;
    // Disable text selection
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    // Disable scrolling on the draggable direction
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }
  if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

var shouldForward = function shouldForward(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  // Explicitly filter our events
  shouldForward = function shouldForward(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
  /**
   * We attempt to import this package but require won't be defined in esm environments, in that case
   * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
   * in favour of explicit injection.
   */
  loadExternalIsValidProp(require("@emotion/is-prop-valid")["default"]);
} catch (_a) {
  // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    /**
     * values is considered a valid prop by Emotion, so if it's present
     * this will be rendered out to the DOM unless explicitly filtered.
     *
     * We check the type as it could be used with the `feColorMatrix`
     * element, which we support.
     */
    if (key === "values" && _typeof(props.values) === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) ||
    // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

function calcOrigin$1(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}

var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length) {
  var spacing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var useDashCase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  // Normalise path length by setting SVG attribute pathLength to 1
  attrs.pathLength = 1;
  // We use dash case when setting attributes directly to the DOM node and camel case
  // when defining props on a React component.
  var keys = useDashCase ? dashKeys : camelKeys;
  // Build the dash offset
  attrs[keys.offset] = px.transform(-offset);
  // Build the dash array
  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}

var _excluded$b = ["attrX", "attrY", "attrScale", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"];

/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _ref, options, isSVGTag, transformTemplate) {
  var attrX = _ref.attrX,
    attrY = _ref.attrY,
    attrScale = _ref.attrScale,
    originX = _ref.originX,
    originY = _ref.originY,
    pathLength = _ref.pathLength,
    _ref$pathSpacing = _ref.pathSpacing,
    pathSpacing = _ref$pathSpacing === void 0 ? 1 : _ref$pathSpacing,
    _ref$pathOffset = _ref.pathOffset,
    pathOffset = _ref$pathOffset === void 0 ? 0 : _ref$pathOffset,
    latest = _objectWithoutProperties(_ref, _excluded$b);
  buildHTMLStyles(state, latest, options, transformTemplate);
  /**
   * For svg tags we just want to make sure viewBox is animatable and treat all the styles
   * as normal HTML tags.
   */
  if (isSVGTag) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs,
    style = state.style,
    dimensions = state.dimensions;
  /**
   * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
   * and copy it into style.
   */
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  // Parse transformOrigin
  if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
  }
  // Render attrX/attrY/attrScale as attributes
  if (attrX !== undefined) attrs.x = attrX;
  if (attrY !== undefined) attrs.y = attrY;
  if (attrScale !== undefined) attrs.scale = attrScale;
  // Build SVG path if one has been defined
  if (pathLength !== undefined) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

var createSvgRenderState = function createSvgRenderState() {
  return _objectSpread2(_objectSpread2({}, createHtmlRenderState()), {}, {
    attrs: {}
  });
};

var isSVGTag = function isSVGTag(tag) {
  return typeof tag === "string" && tag.toLowerCase() === "svg";
};

function useSVGProps(props, visualState, _isStatic, Component) {
  var visualProps = React.useMemo(function () {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, isSVGTag(Component), props.transformTemplate);
    return _objectSpread2(_objectSpread2({}, state.attrs), {}, {
      style: _objectSpread2({}, state.style)
    });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = _objectSpread2(_objectSpread2({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

function createUseRender() {
  var forwardMotionProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var useRender = function useRender(Component, props, ref, _ref, isStatic) {
    var latestValues = _ref.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic, Component);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = Component !== React.Fragment ? _objectSpread2(_objectSpread2(_objectSpread2({}, filteredProps), visualProps), {}, {
      ref: ref
    }) : {};
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */
    var children = props.children;
    var renderedChildren = React.useMemo(function () {
      return isMotionValue(children) ? children.get() : children;
    }, [children]);
    return /*#__PURE__*/React.createElement(Component, _objectSpread2(_objectSpread2({}, elementProps), {}, {
      children: renderedChildren
    }));
  };
  return useRender;
}

function renderHTML(element, _ref, styleProp, projection) {
  var style = _ref.style,
    vars = _ref.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  // Loop over any CSS variables and assign those.
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, undefined, projection);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
  var _a;
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  var newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
  for (var key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      var targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

function resolveVariantFromProps(props, definition, custom) {
  var currentValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var currentVelocity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  /**
   * If the variant definition is a function, resolve.
   */
  if (typeof definition === "function") {
    definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
  }
  /**
   * If the variant definition is a variant label, or
   * the function returned a variant label, resolve.
   */
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  /**
   * At this point we've resolved both functions and variant labels,
   * but the resolved variant label might itself have been a function.
   * If so, resolve. This can only have returned a valid target object.
   */
  if (typeof definition === "function") {
    definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
  var ref = React.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

var isKeyframesTarget = function isKeyframesTarget(v) {
  return Array.isArray(v);
};

var isCustomValue = function isCustomValue(v) {
  return Boolean(v && _typeof(v) === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function resolveFinalValueInKeyframes(v) {
  // TODO maybe throw if v.length - 1 is placeholder token?
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

var _excluded$a = ["transitionEnd", "transition"];
function makeState(_ref, props, context, presenceContext) {
  var scrapeMotionValuesFromProps = _ref.scrapeMotionValuesFromProps,
    createRenderState = _ref.createRenderState,
    onMount = _ref.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function (instance) {
      return onMount(props, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function makeUseVisualState(config) {
  return function (props, isStatic) {
    var context = React.useContext(MotionContext);
    var presenceContext = React.useContext(PresenceContext);
    var make = function make() {
      return makeState(config, props, context, presenceContext);
    };
    return isStatic ? make() : useConstant(make);
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var motionValues = scrapeMotionValues(props, {});
  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  var initial = props.initial,
    animate = props.animate;
  var isControllingVariants$1 = isControllingVariants(props);
  var isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === undefined) initial = context.initial;
    if (animate === undefined) animate = context.animate;
  }
  var isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  var variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function (definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      var transitionEnd = resolved.transitionEnd;
        resolved.transition;
        var target = _objectWithoutProperties(resolved, _excluded$a);
      for (var _key in target) {
        var valueTarget = target[_key];
        if (Array.isArray(valueTarget)) {
          /**
           * Take final keyframe if the initial animation is blocked because
           * we want to initialise at the end of that blocked animation.
           */
          var index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[_key] = valueTarget;
        }
      }
      for (var _key2 in transitionEnd) values[_key2] = transitionEnd[_key2];
    });
  }
  return values;
}

var noop = function noop(any) {
  return any;
};

var _createRenderBatcher = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true),
  frame = _createRenderBatcher.schedule,
  cancelFrame = _createRenderBatcher.cancel,
  frameData = _createRenderBatcher.state,
  steps = _createRenderBatcher.steps;

var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
    onMount: function onMount(props, instance, _ref) {
      var renderState = _ref.renderState,
        latestValues = _ref.latestValues;
      frame.read(function () {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          // Most likely trying to measure an unrendered element under Firefox
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(function () {
        buildSVGAttrs(renderState, latestValues, {
          enableHardwareAcceleration: false
        }, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};

var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState
  })
};

function createDomMotionConfig(Component, _ref, preloadedFeatures, createVisualElement) {
  var _ref$forwardMotionPro = _ref.forwardMotionProps,
    forwardMotionProps = _ref$forwardMotionPro === void 0 ? false : _ref$forwardMotionPro;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return _objectSpread2(_objectSpread2({}, baseConfig), {}, {
    preloadedFeatures: preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement,
    Component: Component
  });
}

function addDomEvent(target, eventName, handler) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    passive: true
  };
  target.addEventListener(eventName, handler, options);
  return function () {
    return target.removeEventListener(eventName, handler);
  };
}

var isPrimaryPointer = function isPrimaryPointer(event) {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    /**
     * isPrimary is true for all mice buttons, whereas every touch point
     * is regarded as its own input. So subsequent concurrent touch points
     * will be false.
     *
     * Specifically match against false here as incomplete versions of
     * PointerEvents in very old browser might have it set as undefined.
     */
    return event.isPrimary !== false;
  }
};

function extractEventInfo(event) {
  var pointType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "page";
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = function addPointerInfo(handler) {
  return function (event) {
    return isPrimaryPointer(event) && handler(event, extractEventInfo(event));
  };
};

function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
var combineFunctions = function combineFunctions(a, b) {
  return function (v) {
    return b(a(v));
  };
};
var pipe = function pipe() {
  for (var _len = arguments.length, transformers = new Array(_len), _key = 0; _key < _len; _key++) {
    transformers[_key] = arguments[_key];
  }
  return transformers.reduce(combineFunctions);
};

function createLock(name) {
  var lock = null;
  return function () {
    var openLock = function openLock() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
  var lock = false;
  if (drag === "y") {
    lock = globalVerticalLock();
  } else if (drag === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal = globalHorizontalLock();
    var openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = function lock() {
        openHorizontal();
        openVertical();
      };
    } else {
      // Release the locks because we don't use them
      if (openHorizontal) openHorizontal();
      if (openVertical) openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  // Check the gesture lock - if we get it, it means no drag gesture is active
  // and we can safely fire the tap gesture.
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

var Feature = /*#__PURE__*/function () {
  function Feature(node) {
    _classCallCheck(this, Feature);
    this.isMounted = false;
    this.node = node;
  }
  return _createClass(Feature, [{
    key: "update",
    value: function update() {}
  }]);
}();

function addHoverEvent(node, isActive) {
  var eventName = "pointer" + (isActive ? "enter" : "leave");
  var callbackName = "onHover" + (isActive ? "Start" : "End");
  var handleEvent = function handleEvent(event, info) {
    if (event.pointerType === "touch" || isDragActive()) return;
    var props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      props[callbackName](event, info);
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = /*#__PURE__*/function (_Feature) {
  function HoverGesture() {
    _classCallCheck(this, HoverGesture);
    return _callSuper(this, HoverGesture, arguments);
  }
  _inherits(HoverGesture, _Feature);
  return _createClass(HoverGesture, [{
    key: "mount",
    value: function mount() {
      this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
}(Feature);

var FocusGesture = /*#__PURE__*/function (_Feature) {
  function FocusGesture() {
    var _this;
    _classCallCheck(this, FocusGesture);
    _this = _callSuper(this, FocusGesture, arguments);
    _this.isActive = false;
    return _this;
  }
  _inherits(FocusGesture, _Feature);
  return _createClass(FocusGesture, [{
    key: "onFocus",
    value: function onFocus() {
      var isFocusVisible = false;
      /**
       * If this element doesn't match focus-visible then don't
       * apply whileHover. But, if matches throws that focus-visible
       * is not a valid selector then in that browser outline styles will be applied
       * to the element by default and we want to match that behaviour with whileFocus.
       */
      try {
        isFocusVisible = this.node.current.matches(":focus-visible");
      } catch (e) {
        isFocusVisible = true;
      }
      if (!isFocusVisible || !this.node.animationState) return;
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (!this.isActive || !this.node.animationState) return;
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
  }, {
    key: "mount",
    value: function mount() {
      var _this2 = this;
      this.unmount = pipe(addDomEvent(this.node.current, "focus", function () {
        return _this2.onFocus();
      }), addDomEvent(this.node.current, "blur", function () {
        return _this2.onBlur();
      }));
    }
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
}(Feature);

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function isNodeOrChild(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

function fireSyntheticPointerEvent(name, handler) {
  if (!handler) return;
  var syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = /*#__PURE__*/function (_Feature) {
  function PressGesture() {
    var _this;
    _classCallCheck(this, PressGesture);
    _this = _callSuper(this, PressGesture, arguments);
    _this.removeStartListeners = noop;
    _this.removeEndListeners = noop;
    _this.removeAccessibleListeners = noop;
    _this.startPointerPress = function (startEvent, startInfo) {
      if (_this.isPressing) return;
      _this.removeEndListeners();
      var props = _this.node.getProps();
      var endPointerPress = function endPointerPress(endEvent, endInfo) {
        if (!_this.checkPressEnd()) return;
        var _this$node$getProps = _this.node.getProps(),
          onTap = _this$node$getProps.onTap,
          onTapCancel = _this$node$getProps.onTapCancel,
          globalTapTarget = _this$node$getProps.globalTapTarget;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !globalTapTarget && !isNodeOrChild(_this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
      };
      var removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      var removePointerCancelListener = addPointerEvent(window, "pointercancel", function (cancelEvent, cancelInfo) {
        return _this.cancelPress(cancelEvent, cancelInfo);
      }, {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      _this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      _this.startPress(startEvent, startInfo);
    };
    _this.startAccessiblePress = function () {
      var handleKeydown = function handleKeydown(keydownEvent) {
        if (keydownEvent.key !== "Enter" || _this.isPressing) return;
        var handleKeyup = function handleKeyup(keyupEvent) {
          if (keyupEvent.key !== "Enter" || !_this.checkPressEnd()) return;
          fireSyntheticPointerEvent("up", function (event, info) {
            var _this$node$getProps2 = _this.node.getProps(),
              onTap = _this$node$getProps2.onTap;
            if (onTap) onTap(event, info);
          });
        };
        _this.removeEndListeners();
        _this.removeEndListeners = addDomEvent(_this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", function (event, info) {
          _this.startPress(event, info);
        });
      };
      var removeKeydownListener = addDomEvent(_this.node.current, "keydown", handleKeydown);
      var handleBlur = function handleBlur() {
        if (!_this.isPressing) return;
        fireSyntheticPointerEvent("cancel", function (cancelEvent, cancelInfo) {
          return _this.cancelPress(cancelEvent, cancelInfo);
        });
      };
      var removeBlurListener = addDomEvent(_this.node.current, "blur", handleBlur);
      _this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
    return _this;
  }
  _inherits(PressGesture, _Feature);
  return _createClass(PressGesture, [{
    key: "startPress",
    value: function startPress(event, info) {
      this.isPressing = true;
      var _this$node$getProps3 = this.node.getProps(),
        onTapStart = _this$node$getProps3.onTapStart,
        whileTap = _this$node$getProps3.whileTap;
      /**
       * Ensure we trigger animations before firing event callback
       */
      if (whileTap && this.node.animationState) {
        this.node.animationState.setActive("whileTap", true);
      }
      if (onTapStart) {
        onTapStart(event, info);
      }
    }
  }, {
    key: "checkPressEnd",
    value: function checkPressEnd() {
      this.removeEndListeners();
      this.isPressing = false;
      var props = this.node.getProps();
      if (props.whileTap && this.node.animationState) {
        this.node.animationState.setActive("whileTap", false);
      }
      return !isDragActive();
    }
  }, {
    key: "cancelPress",
    value: function cancelPress(event, info) {
      if (!this.checkPressEnd()) return;
      var _this$node$getProps4 = this.node.getProps(),
        onTapCancel = _this$node$getProps4.onTapCancel;
      if (onTapCancel) onTapCancel(event, info);
    }
  }, {
    key: "mount",
    value: function mount() {
      var props = this.node.getProps();
      var removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(props.onTapStart || props["onPointerStart"])
      });
      var removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.removeStartListeners();
      this.removeEndListeners();
      this.removeAccessibleListeners();
    }
  }]);
}(Feature);

var _excluded$9 = ["root"];
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
var observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
var observers = new WeakMap();
var fireObserverCallback = function fireObserverCallback(entry) {
  var callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = function fireAllObserverCallbacks(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_ref) {
  var root = _ref.root,
    options = _objectWithoutProperties(_ref, _excluded$9);
  var lookupRoot = root || document;
  /**
   * If we don't have an observer lookup map for this root, create one.
   */
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  /**
   * If we don't have an observer for this combination of root and settings,
   * create one.
   */
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, _objectSpread2({
      root: root
    }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function () {
    observerCallbacks["delete"](element);
    rootInteresectionObserver.unobserve(element);
  };
}

var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = /*#__PURE__*/function (_Feature) {
  function InViewFeature() {
    var _this;
    _classCallCheck(this, InViewFeature);
    _this = _callSuper(this, InViewFeature, arguments);
    _this.hasEnteredView = false;
    _this.isInView = false;
    return _this;
  }
  _inherits(InViewFeature, _Feature);
  return _createClass(InViewFeature, [{
    key: "startObserver",
    value: function startObserver() {
      var _this2 = this;
      this.unmount();
      var _this$node$getProps = this.node.getProps(),
        _this$node$getProps$v = _this$node$getProps.viewport,
        viewport = _this$node$getProps$v === void 0 ? {} : _this$node$getProps$v;
      var root = viewport.root,
        rootMargin = viewport.margin,
        _viewport$amount = viewport.amount,
        amount = _viewport$amount === void 0 ? "some" : _viewport$amount,
        once = viewport.once;
      var options = {
        root: root ? root.current : undefined,
        rootMargin: rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      var onIntersectionUpdate = function onIntersectionUpdate(entry) {
        var isIntersecting = entry.isIntersecting;
        /**
         * If there's been no change in the viewport state, early return.
         */
        if (_this2.isInView === isIntersecting) return;
        _this2.isInView = isIntersecting;
        /**
         * Handle hasEnteredView. If this is only meant to run once, and
         * element isn't visible, early return. Otherwise set hasEnteredView to true.
         */
        if (once && !isIntersecting && _this2.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          _this2.hasEnteredView = true;
        }
        if (_this2.node.animationState) {
          _this2.node.animationState.setActive("whileInView", isIntersecting);
        }
        /**
         * Use the latest committed props rather than the ones in scope
         * when this observer is created
         */
        var _this2$node$getProps = _this2.node.getProps(),
          onViewportEnter = _this2$node$getProps.onViewportEnter,
          onViewportLeave = _this2$node$getProps.onViewportLeave;
        var callback = isIntersecting ? onViewportEnter : onViewportLeave;
        callback && callback(entry);
      };
      return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
  }, {
    key: "mount",
    value: function mount() {
      this.startObserver();
    }
  }, {
    key: "update",
    value: function update() {
      if (typeof IntersectionObserver === "undefined") return;
      var _this$node = this.node,
        props = _this$node.props,
        prevProps = _this$node.prevProps;
      var hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
      if (hasOptionsChanged) {
        this.startObserver();
      }
    }
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
}(Feature);
function hasViewportOptionChanged(_ref) {
  var _ref$viewport = _ref.viewport,
    viewport = _ref$viewport === void 0 ? {} : _ref$viewport;
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$viewport = _ref2.viewport,
    prevViewport = _ref2$viewport === void 0 ? {} : _ref2$viewport;
  return function (name) {
    return viewport[name] !== prevViewport[name];
  };
}

var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  var prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
  var current = {};
  visualElement.values.forEach(function (value, key) {
    return current[key] = value.get();
  });
  return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity$1(visualElement) {
  var velocity = {};
  visualElement.values.forEach(function (value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  var props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function secondsToMilliseconds(seconds) {
  return seconds * 1000;
};
var millisecondsToSeconds = function millisecondsToSeconds(milliseconds) {
  return milliseconds / 1000;
};

var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = function criticallyDampedSpring(target) {
  return {
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = function getDefaultTransition(valueKey, _ref) {
  var keyframes = _ref.keyframes;
  if (keyframes.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
  }
  return ease;
};

var _excluded$8 = ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"];
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_ref) {
  _ref.when;
    _ref.delay;
    _ref.delayChildren;
    _ref.staggerChildren;
    _ref.staggerDirection;
    _ref.repeat;
    _ref.repeatType;
    _ref.repeatDelay;
    _ref.from;
    _ref.elapsed;
    var transition = _objectWithoutProperties(_ref, _excluded$8);
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

var isNotNull = function isNotNull(value) {
  return value !== null;
};
function getFinalKeyframe(keyframes, _ref, finalKeyframe) {
  var repeat = _ref.repeat,
    _ref$repeatType = _ref.repeatType,
    repeatType = _ref$repeatType === void 0 ? "loop" : _ref$repeatType;
  var resolvedKeyframes = keyframes.filter(isNotNull);
  var index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

var _now;
function clearTime() {
  _now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
var time = {
  now: function now() {
    if (_now === undefined) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return _now;
  },
  set: function set(newTime) {
    _now = newTime;
    queueMicrotask(clearTime);
  }
};

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
var isZeroValueString = function isZeroValueString(v) {
  return /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(v);
};

function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

var warning = noop;
var invariant = noop;
if (process.env.NODE_ENV !== "production") {
  warning = function warning(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function invariant(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function isNumericalString(v) {
  return /^\x2D?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(v);
};

/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var splitCSSVariableRegex =
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(\x2D\x2D(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
function parseCSSVariable(current) {
  var match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  var _match = _slicedToArray(match, 4),
    token1 = _match[1],
    token2 = _match[2],
    fallback = _match[3];
  return ["--".concat(token1 !== null && token1 !== void 0 ? token1 : token2), fallback];
}
var maxDepth = 4;
function getVariableValue(current, element) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  invariant(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"".concat(current, "\". This may indicate a circular fallback dependency."));
  var _parseCSSVariable = parseCSSVariable(current),
    _parseCSSVariable2 = _slicedToArray(_parseCSSVariable, 2),
    token = _parseCSSVariable2[0],
    fallback = _parseCSSVariable2[1];
  // No CSS variable detected
  if (!token) return;
  // Attempt to read this CSS variable off the element
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    var trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

var positionalKeys = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
var isNumOrPxType = function isNumOrPxType(v) {
  return v === number || v === px;
};
var getPosFromMatrix = function getPosFromMatrix(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function getTranslateFromMatrix(pos2, pos3) {
  return function (_bbox, _ref) {
    var transform = _ref.transform;
    if (transform === "none" || !transform) return 0;
    var matrix3d = transform.match(/^matrix3d\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter(function (key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function (key) {
    var value = visualElement.getValue(key);
    if (value !== undefined) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: function width(_ref2, _ref3) {
    var x = _ref2.x;
    var _ref3$paddingLeft = _ref3.paddingLeft,
      paddingLeft = _ref3$paddingLeft === void 0 ? "0" : _ref3$paddingLeft,
      _ref3$paddingRight = _ref3.paddingRight,
      paddingRight = _ref3$paddingRight === void 0 ? "0" : _ref3$paddingRight;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function height(_ref4, _ref5) {
    var y = _ref4.y;
    var _ref5$paddingTop = _ref5.paddingTop,
      paddingTop = _ref5$paddingTop === void 0 ? "0" : _ref5$paddingTop,
      _ref5$paddingBottom = _ref5.paddingBottom,
      paddingBottom = _ref5$paddingBottom === void 0 ? "0" : _ref5$paddingBottom;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function top(_bbox, _ref6) {
    var _top = _ref6.top;
    return parseFloat(_top);
  },
  left: function left(_bbox, _ref7) {
    var _left = _ref7.left;
    return parseFloat(_left);
  },
  bottom: function bottom(_ref8, _ref9) {
    var y = _ref8.y;
    var top = _ref9.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function right(_ref10, _ref11) {
    var x = _ref10.x;
    var left = _ref11.left;
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

/**
 * Tests a provided value against a ValueType
 */
var testValueType = function testValueType(v) {
  return function (type) {
    return type.test(v);
  };
};

/**
 * ValueType for "auto"
 */
var auto = {
  test: function test(v) {
    return v === "auto";
  },
  parse: function parse(v) {
    return v;
  }
};

/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function findDimensionValueType(v) {
  return dimensionValueTypes.find(testValueType(v));
};

var toResolve = new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    var resolversToMeasure = Array.from(toResolve).filter(function (resolver) {
      return resolver.needsMeasurement;
    });
    var elementsToMeasure = new Set(resolversToMeasure.map(function (resolver) {
      return resolver.element;
    }));
    var transformsToRestore = new Map();
    /**
     * Write pass
     * If we're measuring elements we want to remove bounding box-changing transforms.
     */
    elementsToMeasure.forEach(function (element) {
      var removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length) return;
      transformsToRestore.set(element, removeNonTranslationalTransform(element));
      element.render();
    });
    // Read
    resolversToMeasure.forEach(function (resolver) {
      return resolver.measureInitialState();
    });
    // Write
    elementsToMeasure.forEach(function (element) {
      element.render();
    });
    // Read
    resolversToMeasure.forEach(function (resolver) {
      return resolver.measureEndState();
    });
    // Write
    resolversToMeasure.forEach(function (resolver) {
      if (resolver.suspendedScrollY !== undefined) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach(function (resolver) {
    return resolver.complete();
  });
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach(function (resolver) {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
var KeyframeResolver = /*#__PURE__*/function () {
  function KeyframeResolver(unresolvedKeyframes, onComplete, name, motionValue, element) {
    var isAsync = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    _classCallCheck(this, KeyframeResolver);
    /**
     * Track whether this resolver has completed. Once complete, it never
     * needs to attempt keyframe resolution again.
     */
    this.isComplete = false;
    /**
     * Track whether this resolver is async. If it is, it'll be added to the
     * resolver queue and flushed in the next frame. Resolvers that aren't going
     * to trigger read/write thrashing don't need to be async.
     */
    this.isAsync = false;
    /**
     * Track whether this resolver needs to perform a measurement
     * to resolve its keyframes.
     */
    this.needsMeasurement = false;
    /**
     * Track whether this resolver is currently scheduled to resolve
     * to allow it to be cancelled and resumed externally.
     */
    this.isScheduled = false;
    this.unresolvedKeyframes = _toConsumableArray(unresolvedKeyframes);
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue;
    this.element = element;
    this.isAsync = isAsync;
  }
  return _createClass(KeyframeResolver, [{
    key: "scheduleResolve",
    value: function scheduleResolve() {
      this.isScheduled = true;
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
  }, {
    key: "readKeyframes",
    value: function readKeyframes() {
      var unresolvedKeyframes = this.unresolvedKeyframes,
        name = this.name,
        element = this.element,
        motionValue = this.motionValue;
      /**
       * If a keyframe is null, we hydrate it either by reading it from
       * the instance, or propagating from previous keyframes.
       */
      for (var i = 0; i < unresolvedKeyframes.length; i++) {
        if (unresolvedKeyframes[i] === null) {
          /**
           * If the first keyframe is null, we need to find its value by sampling the element
           */
          if (i === 0) {
            var currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
            var finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== undefined) {
              unresolvedKeyframes[0] = currentValue;
            } else if (element && name) {
              var valueAsRead = element.readValue(name, finalKeyframe);
              if (valueAsRead !== undefined && valueAsRead !== null) {
                unresolvedKeyframes[0] = valueAsRead;
              }
            }
            if (unresolvedKeyframes[0] === undefined) {
              unresolvedKeyframes[0] = finalKeyframe;
            }
            if (motionValue && currentValue === undefined) {
              motionValue.set(unresolvedKeyframes[0]);
            }
          } else {
            unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
          }
        }
      }
    }
  }, {
    key: "setFinalKeyframe",
    value: function setFinalKeyframe() {}
  }, {
    key: "measureInitialState",
    value: function measureInitialState() {}
  }, {
    key: "renderEndStyles",
    value: function renderEndStyles() {}
  }, {
    key: "measureEndState",
    value: function measureEndState() {}
  }, {
    key: "complete",
    value: function complete() {
      this.isComplete = true;
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
      toResolve["delete"](this);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (!this.isComplete) {
        this.isScheduled = false;
        toResolve["delete"](this);
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      if (!this.isComplete) this.scheduleResolve();
    }
  }]);
}();

/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
var isColorString = function isColorString(type, testProp) {
  return function (v) {
    return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
  };
};
var splitColor = function splitColor(aName, bName, cName) {
  return function (v) {
    if (!isString(v)) return v;
    var _v$match = v.match(floatRegex),
      _v$match2 = _slicedToArray(_v$match, 4),
      a = _v$match2[0],
      b = _v$match2[1],
      c = _v$match2[2],
      alpha = _v$match2[3];
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, aName, parseFloat(a)), bName, parseFloat(b)), cName, parseFloat(c)), "alpha", alpha !== undefined ? parseFloat(alpha) : 1);
  };
};

var clampRgbUnit = function clampRgbUnit(v) {
  return clamp(0, 255, v);
};
var rgbUnit = _objectSpread2(_objectSpread2({}, number), {}, {
  transform: function transform(v) {
    return Math.round(clampRgbUnit(v));
  }
});
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: function transform(_ref) {
    var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue,
      _ref$alpha = _ref.alpha,
      alpha$1 = _ref$alpha === void 0 ? 1 : _ref$alpha;
    return "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

function parseHex(v) {
  var r = "";
  var g = "";
  var b = "";
  var a = "";
  // If we have 6 characters, ie #FF0000
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: function transform(_ref) {
    var hue = _ref.hue,
      saturation = _ref.saturation,
      lightness = _ref.lightness,
      _ref$alpha = _ref.alpha,
      alpha$1 = _ref$alpha === void 0 ? 1 : _ref$alpha;
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

var color = {
  test: function test(v) {
    return rgba.test(v) || hex.test(v) || hsla.test(v);
  },
  parse: function parse(v) {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: function transform(v) {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
var complexRegex = /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\x2D\x2D(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:\x2D?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}\x2D?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|\x2D?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
function analyseComplexValue(value) {
  var originalValue = value.toString();
  var values = [];
  var indexes = {
    color: [],
    number: [],
    "var": []
  };
  var types = [];
  var i = 0;
  var tokenised = originalValue.replace(complexRegex, function (parsedValue) {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes["var"].push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  var split = tokenised.split(SPLIT_TOKEN);
  return {
    values: values,
    split: split,
    indexes: indexes,
    types: types
  };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  var _analyseComplexValue = analyseComplexValue(source),
    split = _analyseComplexValue.split,
    types = _analyseComplexValue.types;
  var numSections = split.length;
  return function (v) {
    var output = "";
    for (var i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== undefined) {
        var type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = function convertNumbersToZero(v) {
  return typeof v === "number" ? 0 : v;
};
function getAnimatableNone$1(v) {
  var parsed = parseComplexValue(v);
  var transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test: test,
  parse: parseComplexValue,
  createTransformer: createTransformer,
  getAnimatableNone: getAnimatableNone$1
};

/**
 * Properties that should default to 1 or 100%
 */
var maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  var _v$slice$split = v.slice(0, -1).split("("),
    _v$slice$split2 = _slicedToArray(_v$slice$split, 2),
    name = _v$slice$split2[0],
    value = _v$slice$split2[1];
  if (name === "drop-shadow") return v;
  var _ref = value.match(floatRegex) || [],
    _ref2 = _slicedToArray(_ref, 1),
    number = _ref2[0];
  if (!number) return v;
  var unit = value.replace(number, "");
  var defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g;
var filter = _objectSpread2(_objectSpread2({}, complex), {}, {
  getAnimatableNone: function getAnimatableNone(v) {
    var functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
});

/**
 * A map of default value types for common values
 */
var defaultValueTypes = _objectSpread2(_objectSpread2({}, numberValueTypes), {}, {
  // Color props
  color: color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter: filter,
  WebkitFilter: filter
});
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function getDefaultValueType(key) {
  return defaultValueTypes[key];
};

function getAnimatableNone(key, value) {
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  var i = 0;
  var animatableTemplate = undefined;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    if (typeof unresolvedKeyframes[i] === "string" && unresolvedKeyframes[i] !== "none" && unresolvedKeyframes[i] !== "0") {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    var _iterator = _createForOfIteratorHelper(noneKeyframeIndexes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var noneIndex = _step.value;
        unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

var DOMKeyframesResolver = /*#__PURE__*/function (_KeyframeResolver) {
  function DOMKeyframesResolver(unresolvedKeyframes, onComplete, name, motionValue) {
    _classCallCheck(this, DOMKeyframesResolver);
    return _callSuper(this, DOMKeyframesResolver, [unresolvedKeyframes, onComplete, name, motionValue, motionValue === null || motionValue === void 0 ? void 0 : motionValue.owner, true]);
  }
  _inherits(DOMKeyframesResolver, _KeyframeResolver);
  return _createClass(DOMKeyframesResolver, [{
    key: "readKeyframes",
    value: function readKeyframes() {
      var unresolvedKeyframes = this.unresolvedKeyframes,
        element = this.element,
        name = this.name;
      if (!element.current) return;
      _get(_getPrototypeOf(DOMKeyframesResolver.prototype), "readKeyframes", this).call(this);
      /**
       * If any keyframe is a CSS variable, we need to find its value by sampling the element
       */
      for (var i = 0; i < unresolvedKeyframes.length; i++) {
        var keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && isCSSVariableToken(keyframe)) {
          var resolved = getVariableValue(keyframe, element.current);
          if (resolved !== undefined) {
            unresolvedKeyframes[i] = resolved;
          }
        }
      }
      /**
       * Check to see if unit type has changed. If so schedule jobs that will
       * temporarily set styles to the destination keyframes.
       * Skip if we have more than two keyframes or this isn't a positional value.
       * TODO: We can throw if there are multiple keyframes and the value type changes.
       */
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return this.resolveNoneKeyframes();
      }
      var _unresolvedKeyframes = _slicedToArray(unresolvedKeyframes, 2),
        origin = _unresolvedKeyframes[0],
        target = _unresolvedKeyframes[1];
      var originType = findDimensionValueType(origin);
      var targetType = findDimensionValueType(target);
      /**
       * Either we don't recognise these value types or we can animate between them.
       */
      if (originType === targetType) return;
      /**
       * If both values are numbers or pixels, we can animate between them by
       * converting them to numbers.
       */
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (var _i = 0; _i < unresolvedKeyframes.length; _i++) {
          var value = unresolvedKeyframes[_i];
          if (typeof value === "string") {
            unresolvedKeyframes[_i] = parseFloat(value);
          }
        }
      } else {
        /**
         * Else, the only way to resolve this is by measuring the element.
         */
        this.needsMeasurement = true;
      }
    }
  }, {
    key: "resolveNoneKeyframes",
    value: function resolveNoneKeyframes() {
      var unresolvedKeyframes = this.unresolvedKeyframes,
        name = this.name;
      var noneKeyframeIndexes = [];
      for (var i = 0; i < unresolvedKeyframes.length; i++) {
        if (isNone(unresolvedKeyframes[i])) {
          noneKeyframeIndexes.push(i);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
  }, {
    key: "measureInitialState",
    value: function measureInitialState() {
      var element = this.element,
        unresolvedKeyframes = this.unresolvedKeyframes,
        name = this.name;
      if (!element.current) return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      // Set final key frame to measure after next render
      var measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== undefined) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
  }, {
    key: "measureEndState",
    value: function measureEndState() {
      var _a;
      var element = this.element,
        name = this.name,
        unresolvedKeyframes = this.unresolvedKeyframes;
      if (!element.current) return;
      var value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      var finalKeyframeIndex = unresolvedKeyframes.length - 1;
      var finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null) {
        this.finalKeyframe = finalKeyframe;
      }
      // If we removed transform values, reapply them before the next render
      if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
        this.removedTransforms.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            unsetTransformName = _ref2[0],
            unsetTransformValue = _ref2[1];
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  }]);
}(KeyframeResolver);

function memo(callback) {
  var result;
  return function () {
    if (result === undefined) result = callback();
    return result;
  };
}

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function isAnimatable(value, name) {
  // If the list of keys tat might be non-animatable grows, replace with Set
  if (name === "zIndex") return false;
  // If it's a number or a keyframes array, we can animate it. We might at some point
  // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
  // but for now lets leave it like this for performance reasons
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (
  // It's animatable if we have a string
  complex.test(value) || value === "0") &&
  // And it contains numbers and/or colors
  !value.startsWith("url(") // Unless it starts with "url("
  ) {
    return true;
  }
  return false;
};

function hasKeyframesChanged(keyframes) {
  var current = keyframes[0];
  if (keyframes.length === 1) return true;
  for (var i = 0; i < keyframes.length; i++) {
    if (keyframes[i] !== current) return true;
  }
}
function canAnimate(keyframes, name, type, velocity) {
  /**
   * Check if we're able to animate between the start and end keyframes,
   * and throw a warning if we're attempting to animate between one that's
   * animatable and another that isn't.
   */
  var originKeyframe = keyframes[0];
  if (originKeyframe === null) return false;
  var targetKeyframe = keyframes[keyframes.length - 1];
  var isOriginAnimatable = isAnimatable(originKeyframe, name);
  var isTargetAnimatable = isAnimatable(targetKeyframe, name);
  warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(name, " from \"").concat(originKeyframe, "\" to \"").concat(targetKeyframe, "\". ").concat(originKeyframe, " is not an animatable value - to enable this animation set ").concat(originKeyframe, " to a value animatable to ").concat(targetKeyframe, " via the `style` property."));
  // Always skip if any of these are true
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes) || type === "spring" && velocity;
}

var _excluded$7 = ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType"];
var BaseAnimation = /*#__PURE__*/function () {
  function BaseAnimation(_ref) {
    var _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "keyframes" : _ref$type,
      _ref$repeat = _ref.repeat,
      repeat = _ref$repeat === void 0 ? 0 : _ref$repeat,
      _ref$repeatDelay = _ref.repeatDelay,
      repeatDelay = _ref$repeatDelay === void 0 ? 0 : _ref$repeatDelay,
      _ref$repeatType = _ref.repeatType,
      repeatType = _ref$repeatType === void 0 ? "loop" : _ref$repeatType,
      options = _objectWithoutProperties(_ref, _excluded$7);
    _classCallCheck(this, BaseAnimation);
    // Track whether the animation has been stopped. Stopped animations won't restart.
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.options = _objectSpread2({
      autoplay: autoplay,
      delay: delay,
      type: type,
      repeat: repeat,
      repeatDelay: repeatDelay,
      repeatType: repeatType
    }, options);
    this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  return _createClass(BaseAnimation, [{
    key: "resolved",
    get: function get() {
      if (!this._resolved && !this.hasAttemptedResolve) {
        flushKeyframeResolvers();
      }
      return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
  }, {
    key: "onKeyframesResolved",
    value: function onKeyframesResolved(keyframes, finalKeyframe) {
      this.hasAttemptedResolve = true;
      var _this$options = this.options,
        name = _this$options.name,
        type = _this$options.type,
        velocity = _this$options.velocity,
        delay = _this$options.delay,
        onComplete = _this$options.onComplete,
        onUpdate = _this$options.onUpdate,
        isGenerator = _this$options.isGenerator;
      /**
       * If we can't animate this value with the resolved keyframes
       * then we should complete it immediately.
       */
      if (!isGenerator && !canAnimate(keyframes, name, type, velocity)) {
        // Finish immediately
        if (!delay) {
          onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(getFinalKeyframe(keyframes, this.options, finalKeyframe));
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          this.resolveFinishedPromise();
          return;
        }
        // Finish after a delay
        else {
          this.options.duration = 0;
        }
      }
      var resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
      if (resolvedAnimation === false) return;
      this._resolved = _objectSpread2({
        keyframes: keyframes,
        finalKeyframe: finalKeyframe
      }, resolvedAnimation);
      this.onPostResolved();
    }
  }, {
    key: "onPostResolved",
    value: function onPostResolved() {}
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
  }, {
    key: "then",
    value: function then(resolve, reject) {
      return this.currentFinishedPromise.then(resolve, reject);
    }
  }, {
    key: "updateFinishedPromise",
    value: function updateFinishedPromise() {
      var _this = this;
      this.currentFinishedPromise = new Promise(function (resolve) {
        _this.resolveFinishedPromise = resolve;
      });
    }
  }]);
}();

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

var velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
  var prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

var safeMin = 0.001;
var minDuration = 0.01;
var maxDuration$1 = 10.0;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring(_ref) {
  var _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 800 : _ref$duration,
    _ref$bounce = _ref.bounce,
    bounce = _ref$bounce === void 0 ? 0.25 : _ref$bounce,
    _ref$velocity = _ref.velocity,
    velocity = _ref$velocity === void 0 ? 0 : _ref$velocity,
    _ref$mass = _ref.mass,
    mass = _ref$mass === void 0 ? 1 : _ref$mass;
  var envelope;
  var derivative;
  warning(duration <= secondsToMilliseconds(maxDuration$1), "Spring duration must be 10 seconds or less");
  var dampingRatio = 1 - bounce;
  /**
   * Restrict dampingRatio and duration to within acceptable ranges.
   */
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration$1, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    /**
     * Underdamped spring
     */
    envelope = function envelope(undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var a = exponentialDecay - velocity;
      var b = calcAngularFreq(undampedFreq, dampingRatio);
      var c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = function derivative(undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var d = delta * velocity + velocity;
      var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
      var f = Math.exp(-delta);
      var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
      var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    /**
     * Critically-damped spring
     */
    envelope = function envelope(undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (undampedFreq - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = function derivative(undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (velocity - undampedFreq) * (duration * duration);
      return a * b;
    };
  }
  var initialGuess = 5 / duration;
  var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration: duration
    };
  } else {
    var stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness: stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration: duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  var result = initialGuess;
  for (var i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

var _excluded$6 = ["keyframes", "restDelta", "restSpeed"];
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some(function (key) {
    return options[key] !== undefined;
  });
}
function getSpringOptions(options) {
  var springOptions = _objectSpread2({
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false
  }, options);
  // stiffness/damping/mass overrides duration/bounce
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    var derived = findSpring(options);
    springOptions = _objectSpread2(_objectSpread2(_objectSpread2({}, springOptions), derived), {}, {
      mass: 1.0
    });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_ref) {
  var keyframes = _ref.keyframes,
    restDelta = _ref.restDelta,
    restSpeed = _ref.restSpeed,
    options = _objectWithoutProperties(_ref, _excluded$6);
  var origin = keyframes[0];
  var target = keyframes[keyframes.length - 1];
  /**
   * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
   * to reduce GC during animation.
   */
  var state = {
    done: false,
    value: origin
  };
  var _getSpringOptions = getSpringOptions(_objectSpread2(_objectSpread2({}, options), {}, {
      velocity: -millisecondsToSeconds(options.velocity || 0)
    })),
    stiffness = _getSpringOptions.stiffness,
    damping = _getSpringOptions.damping,
    mass = _getSpringOptions.mass,
    duration = _getSpringOptions.duration,
    velocity = _getSpringOptions.velocity,
    isResolvedFromDuration = _getSpringOptions.isResolvedFromDuration;
  var initialVelocity = velocity || 0.0;
  var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  var initialDelta = target - origin;
  var undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  /**
   * If we're working on a granular scale, use smaller defaults for determining
   * when the spring is finished.
   *
   * These defaults have been selected emprically based on what strikes a good
   * ratio between feeling good and finishing as soon as changes are imperceptible.
   */
  var isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
  var resolveSpring;
  if (dampingRatio < 1) {
    var angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    // Underdamped spring
    resolveSpring = function resolveSpring(t) {
      var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    // Critically damped spring
    resolveSpring = function resolveSpring(t) {
      return target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    };
  } else {
    // Overdamped spring
    var dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = function resolveSpring(t) {
      var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      // When performing sinh or cosh values can hit Infinity so we cap them here
      var freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: function next(t) {
      var current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        var currentVelocity = initialVelocity;
        if (t !== 0) {
          /**
           * We only need to calculate velocity for under-damped springs
           * as over- and critically-damped springs can't overshoot, so
           * checking only for displacement is enough.
           */
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        var isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

function inertia(_ref) {
  var keyframes = _ref.keyframes,
    _ref$velocity = _ref.velocity,
    velocity = _ref$velocity === void 0 ? 0.0 : _ref$velocity,
    _ref$power = _ref.power,
    power = _ref$power === void 0 ? 0.8 : _ref$power,
    _ref$timeConstant = _ref.timeConstant,
    timeConstant = _ref$timeConstant === void 0 ? 325 : _ref$timeConstant,
    _ref$bounceDamping = _ref.bounceDamping,
    bounceDamping = _ref$bounceDamping === void 0 ? 10 : _ref$bounceDamping,
    _ref$bounceStiffness = _ref.bounceStiffness,
    bounceStiffness = _ref$bounceStiffness === void 0 ? 500 : _ref$bounceStiffness,
    modifyTarget = _ref.modifyTarget,
    min = _ref.min,
    max = _ref.max,
    _ref$restDelta = _ref.restDelta,
    restDelta = _ref$restDelta === void 0 ? 0.5 : _ref$restDelta,
    restSpeed = _ref.restSpeed;
  var origin = keyframes[0];
  var state = {
    done: false,
    value: origin
  };
  var isOutOfBounds = function isOutOfBounds(v) {
    return min !== undefined && v < min || max !== undefined && v > max;
  };
  var nearestBoundary = function nearestBoundary(v) {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  var amplitude = power * velocity;
  var ideal = origin + amplitude;
  var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  /**
   * If the target has changed we need to re-calculate the amplitude, otherwise
   * the animation will start from the wrong position.
   */
  if (target !== ideal) amplitude = target - origin;
  var calcDelta = function calcDelta(t) {
    return -amplitude * Math.exp(-t / timeConstant);
  };
  var calcLatest = function calcLatest(t) {
    return target + calcDelta(t);
  };
  var applyFriction = function applyFriction(t) {
    var delta = calcDelta(t);
    var latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  /**
   * Ideally this would resolve for t in a stateless way, we could
   * do that by always precalculating the animation but as we know
   * this will be done anyway we can assume that spring will
   * be discovered during that.
   */
  var timeReachedBoundary;
  var spring$1;
  var checkCatchBoundary = function checkCatchBoundary(t) {
    if (!isOutOfBounds(state.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta: restDelta,
      restSpeed: restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: function next(t) {
      /**
       * We need to resolve the friction to figure out if we need a
       * spring but we don't want to do this twice per frame. So here
       * we flag if we updated for this frame and later if we did
       * we can skip doing it again.
       */
      var hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === undefined) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      /**
       * If we have a spring and the provided t is beyond the moment the friction
       * animation crossed the min/max boundary, use the spring.
       */
      if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
var calcBezier = function calcBezier(t, a1, a2) {
  return (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  var currentX;
  var currentT;
  var i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0.0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return noop;
  var getTForX = function getTForX(aX) {
    return binarySubdivide(aX, 0, 1, mX1, mX2);
  };
  // If animation is at start/end, return t without easing
  return function (t) {
    return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  };
}

var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

var isEasingArray = function isEasingArray(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
var mirrorEasing = function mirrorEasing(easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
var reverseEasing = function reverseEasing(easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};

var circIn = function circIn(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

var anticipate = function anticipate(p) {
  return (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

var easingLookup = {
  linear: noop,
  easeIn: easeIn,
  easeInOut: easeInOut,
  easeOut: easeOut,
  circIn: circIn,
  circInOut: circInOut,
  circOut: circOut,
  backIn: backIn,
  backInOut: backInOut,
  backOut: backOut,
  anticipate: anticipate
};
var easingDefinitionToFunction = function easingDefinitionToFunction(definition) {
  if (Array.isArray(definition)) {
    // If cubic bezier definition, create bezier curve
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var _definition = _slicedToArray(definition, 4),
      x1 = _definition[0],
      y1 = _definition[1],
      x2 = _definition[2],
      y2 = _definition[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    // Else lookup from table
    invariant(easingLookup[definition] !== undefined, "Invalid easing type '".concat(definition, "'"));
    return easingLookup[definition];
  }
  return definition;
};

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
var progress = function progress(from, to, value) {
  var toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
var mixNumber$1 = function mixNumber(from, to, progress) {
  return from + (to - from) * progress;
};

// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba(_ref) {
  var hue = _ref.hue,
    saturation = _ref.saturation,
    lightness = _ref.lightness,
    alpha = _ref.alpha;
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  var red = 0;
  var green = 0;
  var blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    var p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha
  };
}

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
var mixLinearColor = function mixLinearColor(from, to, v) {
  var fromExpo = from * from;
  var expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = function getColorType(v) {
  return colorTypes.find(function (type) {
    return type.test(v);
  });
};
function asRGBA(color) {
  var type = getColorType(color);
  invariant(Boolean(type), "'".concat(color, "' is not an animatable color. Use the equivalent color code instead."));
  var model = type.parse(color);
  if (type === hsla) {
    // TODO Remove this cast - needed since Framer Motion's stricter typing
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = function mixColor(from, to) {
  var fromRGBA = asRGBA(from);
  var toRGBA = asRGBA(to);
  var blended = _objectSpread2({}, fromRGBA);
  return function (v) {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

function mixImmediate(a, b) {
  return function (p) {
    return p > 0 ? b : a;
  };
}
function mixNumber(a, b) {
  return function (p) {
    return mixNumber$1(a, b, p);
  };
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (_typeof(a) === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  var output = _toConsumableArray(a);
  var numValues = output.length;
  var blendValue = a.map(function (v, i) {
    return getMixer(v)(v, b[i]);
  });
  return function (p) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  var output = _objectSpread2(_objectSpread2({}, a), b);
  var blendValue = {};
  for (var key in output) {
    if (a[key] !== undefined && b[key] !== undefined) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return function (v) {
    for (var _key in blendValue) {
      output[_key] = blendValue[_key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  var orderedOrigin = [];
  var pointers = {
    color: 0,
    "var": 0,
    number: 0
  };
  for (var i = 0; i < target.values.length; i++) {
    var type = target.types[i];
    var originIndex = origin.indexes[type][pointers[type]];
    var originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = function mixComplex(origin, target) {
  var template = complex.createTransformer(target);
  var originStats = analyseComplexValue(origin);
  var targetStats = analyseComplexValue(target);
  var canInterpolate = originStats.indexes["var"].length === targetStats.indexes["var"].length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    warning(true, "Complex values '".concat(origin, "' and '").concat(target, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."));
    return mixImmediate(origin, target);
  }
};

function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber$1(from, to, p);
  }
  var mixer = getMixer(from);
  return mixer(from, to);
}

function createMixers(output, ease, customMixer) {
  var mixers = [];
  var mixerFactory = customMixer || mix;
  var numMixers = output.length - 1;
  for (var i = 0; i < numMixers; i++) {
    var mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      var easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$clamp = _ref.clamp,
    isClamp = _ref$clamp === void 0 ? true : _ref$clamp,
    ease = _ref.ease,
    mixer = _ref.mixer;
  var inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  /**
   * If we're only provided a single input, we can just make a function
   * that returns the output.
   */
  if (inputLength === 1) return function () {
    return output[0];
  };
  if (inputLength === 2 && input[0] === input[1]) return function () {
    return output[1];
  };
  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[inputLength - 1]) {
    input = _toConsumableArray(input).reverse();
    output = _toConsumableArray(output).reverse();
  }
  var mixers = createMixers(output, ease, mixer);
  var numMixers = mixers.length;
  var interpolator = function interpolator(v) {
    var i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    var progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? function (v) {
    return interpolator(clamp(input[0], input[inputLength - 1], v));
  } : interpolator;
}

function fillOffset(offset, remaining) {
  var min = offset[offset.length - 1];
  for (var i = 1; i <= remaining; i++) {
    var offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber$1(min, 1, offsetProgress));
  }
}

function defaultOffset(arr) {
  var offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(function (o) {
    return o * duration;
  });
}

function defaultEasing(values, easing) {
  return values.map(function () {
    return easing || easeInOut;
  }).splice(0, values.length - 1);
}
function keyframes(_ref) {
  var _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 300 : _ref$duration,
    keyframeValues = _ref.keyframes,
    times = _ref.times,
    _ref$ease = _ref.ease,
    ease = _ref$ease === void 0 ? "easeInOut" : _ref$ease;
  /**
   * Easing functions can be externally defined as strings. Here we convert them
   * into actual functions.
   */
  var easingFunctions = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  /**
   * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
   * to reduce GC during animation.
   */
  var state = {
    done: false,
    value: keyframeValues[0]
  };
  /**
   * Create a times array based on the provided 0-1 offsets
   */
  var absoluteTimes = convertOffsetToTimes(
  // Only use the provided offsets if they're the correct length
  // TODO Maybe we should warn here if there's a length mismatch
  times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  var mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: function next(t) {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
var maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
  var duration = 0;
  var timeStep = 50;
  var state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

var frameloopDriver = function frameloopDriver(update) {
  var passTimestamp = function passTimestamp(_ref) {
    var timestamp = _ref.timestamp;
    return update(timestamp);
  };
  return {
    start: function start() {
      return frame.update(passTimestamp, true);
    },
    stop: function stop() {
      return cancelFrame(passTimestamp);
    },
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: function now() {
      return frameData.isProcessing ? frameData.timestamp : time.now();
    }
  };
};

var _excluded$5 = ["KeyframeResolver"];
var generators = {
  decay: inertia,
  inertia: inertia,
  tween: keyframes,
  keyframes: keyframes,
  spring: spring
};
var percentToProgress = function percentToProgress(percent) {
  return percent / 100;
};
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */
var MainThreadAnimation = /*#__PURE__*/function (_BaseAnimation) {
  function MainThreadAnimation(_ref) {
    var _this;
    var _ref$KeyframeResolver = _ref.KeyframeResolver,
      KeyframeResolver$1 = _ref$KeyframeResolver === void 0 ? KeyframeResolver : _ref$KeyframeResolver,
      options = _objectWithoutProperties(_ref, _excluded$5);
    _classCallCheck(this, MainThreadAnimation);
    _this = _callSuper(this, MainThreadAnimation, [options]);
    /**
     * The time at which the animation was paused.
     */
    _this.holdTime = null;
    /**
     * The time at which the animation was started.
     */
    _this.startTime = null;
    /**
     * The time at which the animation was cancelled.
     */
    _this.cancelTime = null;
    /**
     * The current time of the animation.
     */
    _this.currentTime = 0;
    /**
     * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
     */
    _this.playbackSpeed = 1;
    /**
     * The state of the animation to apply when the animation is resolved. This
     * allows calls to the public API to control the animation before it is resolved,
     * without us having to resolve it first.
     */
    _this.pendingPlayState = "running";
    _this.state = "idle";
    var _this$options = _this.options,
      name = _this$options.name,
      motionValue = _this$options.motionValue,
      keyframes = _this$options.keyframes;
    var onResolved = function onResolved(resolvedKeyframes, finalKeyframe) {
      return _this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    };
    if (name && motionValue && motionValue.owner) {
      _this.resolver = motionValue.owner.resolveKeyframes(keyframes, onResolved, name, motionValue);
    } else {
      _this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue);
    }
    _this.resolver.scheduleResolve();
    return _this;
  }
  _inherits(MainThreadAnimation, _BaseAnimation);
  return _createClass(MainThreadAnimation, [{
    key: "initPlayback",
    value: function initPlayback(keyframes$1) {
      var _this$options2 = this.options,
        _this$options2$type = _this$options2.type,
        type = _this$options2$type === void 0 ? "keyframes" : _this$options2$type,
        _this$options2$repeat = _this$options2.repeat,
        repeat = _this$options2$repeat === void 0 ? 0 : _this$options2$repeat,
        _this$options2$repeat2 = _this$options2.repeatDelay,
        repeatDelay = _this$options2$repeat2 === void 0 ? 0 : _this$options2$repeat2,
        repeatType = _this$options2.repeatType,
        _this$options2$veloci = _this$options2.velocity,
        velocity = _this$options2$veloci === void 0 ? 0 : _this$options2$veloci;
      var generatorFactory = generators[type] || keyframes;
      /**
       * If our generator doesn't support mixing numbers, we need to replace keyframes with
       * [0, 100] and then make a function that maps that to the actual keyframes.
       *
       * 100 is chosen instead of 1 as it works nicer with spring animations.
       */
      var mapPercentToKeyframes;
      var mirroredGenerator;
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        if (process.env.NODE_ENV !== "production") {
          invariant(keyframes$1.length === 2, "Only two keyframes currently supported with spring and inertia animations. Trying to animate ".concat(keyframes$1));
        }
        mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      var generator = generatorFactory(_objectSpread2(_objectSpread2({}, this.options), {}, {
        keyframes: keyframes$1
      }));
      /**
       * If we have a mirror repeat type we need to create a second generator that outputs the
       * mirrored (not reversed) animation and later ping pong between the two generators.
       */
      if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory(_objectSpread2(_objectSpread2({}, this.options), {}, {
          keyframes: _toConsumableArray(keyframes$1).reverse(),
          velocity: -velocity
        }));
      }
      /**
       * If duration is undefined and we have repeat options,
       * we need to calculate a duration from the generator.
       *
       * We set it to the generator itself to cache the duration.
       * Any timeline resolver will need to have already precalculated
       * the duration by this step.
       */
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      var calculatedDuration = generator.calculatedDuration;
      var resolvedDuration = calculatedDuration + repeatDelay;
      var totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
      return {
        generator: generator,
        mirroredGenerator: mirroredGenerator,
        mapPercentToKeyframes: mapPercentToKeyframes,
        calculatedDuration: calculatedDuration,
        resolvedDuration: resolvedDuration,
        totalDuration: totalDuration
      };
    }
  }, {
    key: "onPostResolved",
    value: function onPostResolved() {
      var _this$options$autopla = this.options.autoplay,
        autoplay = _this$options$autopla === void 0 ? true : _this$options$autopla;
      this.play();
      if (this.pendingPlayState === "paused" || !autoplay) {
        this.pause();
      } else {
        this.state = this.pendingPlayState;
      }
    }
  }, {
    key: "tick",
    value: function tick(timestamp) {
      var sample = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var resolved = this.resolved;
      // If the animations has failed to resolve, return the final keyframe.
      if (!resolved) {
        var _keyframes = this.options.keyframes;
        return {
          done: true,
          value: _keyframes[_keyframes.length - 1]
        };
      }
      var finalKeyframe = resolved.finalKeyframe,
        generator = resolved.generator,
        mirroredGenerator = resolved.mirroredGenerator,
        mapPercentToKeyframes = resolved.mapPercentToKeyframes,
        keyframes = resolved.keyframes,
        calculatedDuration = resolved.calculatedDuration,
        totalDuration = resolved.totalDuration,
        resolvedDuration = resolved.resolvedDuration;
      if (this.startTime === null) return generator.next(0);
      var _this$options3 = this.options,
        delay = _this$options3.delay,
        repeat = _this$options3.repeat,
        repeatType = _this$options3.repeatType,
        repeatDelay = _this$options3.repeatDelay,
        onUpdate = _this$options3.onUpdate;
      /**
       * requestAnimationFrame timestamps can come through as lower than
       * the startTime as set by performance.now(). Here we prevent this,
       * though in the future it could be possible to make setting startTime
       * a pending operation that gets resolved here.
       */
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      // Update currentTime
      if (sample) {
        this.currentTime = timestamp;
      } else if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
        // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
        // example.
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
      }
      // Rebase on delay
      var timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
      var isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      // If this animation has finished, set the current time  to the total duration.
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      var elapsed = this.currentTime;
      var frameGenerator = generator;
      if (repeat) {
        /**
         * Get the current progress (0-1) of the animation. If t is >
         * than duration we'll get values like 2.5 (midway through the
         * third iteration)
         */
        var progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        /**
         * Get the current iteration (0 indexed). For instance the floor of
         * 2.5 is 2.
         */
        var currentIteration = Math.floor(progress);
        /**
         * Get the current progress of the iteration by taking the remainder
         * so 2.5 is 0.5 through iteration 2
         */
        var iterationProgress = progress % 1.0;
        /**
         * If iteration progress is 1 we count that as the end
         * of the previous iteration.
         */
        if (!iterationProgress && progress >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        /**
         * Reverse progress if we're not running in "normal" direction
         */
        var isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      /**
       * If we're in negative time, set state as the initial keyframe.
       * This prevents delay: x, duration: 0 animations from finishing
       * instantly.
       */
      var state = isInDelayPhase ? {
        done: false,
        value: keyframes[0]
      } : frameGenerator.next(elapsed);
      if (mapPercentToKeyframes) {
        state.value = mapPercentToKeyframes(state.value);
      }
      var done = state.done;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      var isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && finalKeyframe !== undefined) {
        state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
  }, {
    key: "duration",
    get: function get() {
      var resolved = this.resolved;
      return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
    }
  }, {
    key: "time",
    get: function get() {
      return millisecondsToSeconds(this.currentTime);
    },
    set: function set(newTime) {
      newTime = secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.holdTime !== null || this.speed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.speed;
      }
    }
  }, {
    key: "speed",
    get: function get() {
      return this.playbackSpeed;
    },
    set: function set(newSpeed) {
      var hasChanged = this.playbackSpeed !== newSpeed;
      this.playbackSpeed = newSpeed;
      if (hasChanged) {
        this.time = millisecondsToSeconds(this.currentTime);
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _this2 = this;
      if (!this.resolver.isScheduled) {
        this.resolver.resume();
      }
      if (!this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      var _this$options4 = this.options,
        _this$options4$driver = _this$options4.driver,
        driver = _this$options4$driver === void 0 ? frameloopDriver : _this$options4$driver,
        onPlay = _this$options4.onPlay;
      if (!this.driver) {
        this.driver = driver(function (timestamp) {
          return _this2.tick(timestamp);
        });
      }
      onPlay && onPlay();
      var now = this.driver.now();
      if (this.holdTime !== null) {
        this.startTime = now - this.holdTime;
      } else if (!this.startTime || this.state === "finished") {
        this.startTime = now;
      }
      if (this.state === "finished") {
        this.updateFinishedPromise();
      }
      this.cancelTime = this.startTime;
      this.holdTime = null;
      /**
       * Set playState to running only after we've used it in
       * the previous logic.
       */
      this.state = "running";
      this.driver.start();
    }
  }, {
    key: "pause",
    value: function pause() {
      var _a;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused";
      this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle") return;
      this.teardown();
      var onStop = this.options.onStop;
      onStop && onStop();
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.pendingPlayState = this.state = "finished";
      this.holdTime = null;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.teardown();
      this.state = "finished";
      var onComplete = this.options.onComplete;
      onComplete && onComplete();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.cancelTime !== null) {
        this.tick(this.cancelTime);
      }
      this.teardown();
      this.updateFinishedPromise();
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.state = "idle";
      this.stopDriver();
      this.resolveFinishedPromise();
      this.updateFinishedPromise();
      this.startTime = this.cancelTime = null;
      this.resolver.cancel();
    }
  }, {
    key: "stopDriver",
    value: function stopDriver() {
      if (!this.driver) return;
      this.driver.stop();
      this.driver = undefined;
    }
  }, {
    key: "sample",
    value: function sample(time) {
      this.startTime = 0;
      return this.tick(time, true);
    }
  }]);
}(BaseAnimation); // Legacy interface

var isBezierDefinition = function isBezierDefinition(easing) {
  return Array.isArray(easing) && typeof easing[0] === "number";
};

function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = function cubicBezierAsString(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
    a = _ref2[0],
    b = _ref2[1],
    c = _ref2[2],
    d = _ref2[3];
  return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")");
};
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing) return undefined;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

function animateStyle(element, valueName, keyframes) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 0 : _ref$delay,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 300 : _ref$duration,
    _ref$repeat = _ref.repeat,
    repeat = _ref$repeat === void 0 ? 0 : _ref$repeat,
    _ref$repeatType = _ref.repeatType,
    repeatType = _ref$repeatType === void 0 ? "loop" : _ref$repeatType,
    ease = _ref.ease,
    times = _ref.times;
  var keyframeOptions = _defineProperty({}, valueName, keyframes);
  if (times) keyframeOptions.offset = times;
  var easing = mapEasingToNativeEasing(ease);
  /**
   * If this is an easing array, apply to keyframes, not animation as a whole
   */
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay,
    duration: duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

var _excluded$4 = ["onComplete", "onUpdate", "motionValue"],
  _excluded2$1 = ["motionValue", "onUpdate", "onComplete"];
var supportsWaapi = memo(function () {
  return Object.hasOwnProperty.call(Element.prototype, "animate");
});
/**
 * A list of values that can be hardware-accelerated.
 */
var acceleratedValues = new Set(["opacity", "clipPath", "filter", "transform"
// TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
// or until we implement support for linear() easing.
// "background-color"
]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
var sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
var maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */
function requiresPregeneratedKeyframes(options) {
  return options.type === "spring" || options.name === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes, options) {
  /**
   * Create a main-thread animation to pregenerate keyframes.
   * We sample this at regular intervals to generate keyframes that we then
   * linearly interpolate between.
   */
  var sampleAnimation = new MainThreadAnimation(_objectSpread2(_objectSpread2({}, options), {}, {
    keyframes: keyframes,
    repeat: 0,
    delay: 0,
    isGenerator: true
  }));
  var state = {
    done: false,
    value: keyframes[0]
  };
  var pregeneratedKeyframes = [];
  /**
   * Bail after 20 seconds of pre-generated keyframes as it's likely
   * we're heading for an infinite loop.
   */
  var t = 0;
  while (!state.done && t < maxDuration) {
    state = sampleAnimation.sample(t);
    pregeneratedKeyframes.push(state.value);
    t += sampleDelta;
  }
  return {
    times: undefined,
    keyframes: pregeneratedKeyframes,
    duration: t - sampleDelta,
    ease: "linear"
  };
}
var AcceleratedAnimation = /*#__PURE__*/function (_BaseAnimation) {
  function AcceleratedAnimation(options) {
    var _this;
    _classCallCheck(this, AcceleratedAnimation);
    _this = _callSuper(this, AcceleratedAnimation, [options]);
    var _this$options = _this.options,
      name = _this$options.name,
      motionValue = _this$options.motionValue,
      keyframes = _this$options.keyframes;
    _this.resolver = new DOMKeyframesResolver(keyframes, function (resolvedKeyframes, finalKeyframe) {
      return _this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    }, name, motionValue);
    _this.resolver.scheduleResolve();
    return _this;
  }
  _inherits(AcceleratedAnimation, _BaseAnimation);
  return _createClass(AcceleratedAnimation, [{
    key: "initPlayback",
    value: function initPlayback(keyframes, finalKeyframe) {
      var _this2 = this;
      var _a;
      var _this$options2 = this.options,
        _this$options2$durati = _this$options2.duration,
        duration = _this$options2$durati === void 0 ? 300 : _this$options2$durati,
        times = _this$options2.times,
        ease = _this$options2.ease,
        type = _this$options2.type,
        motionValue = _this$options2.motionValue,
        name = _this$options2.name;
      /**
       * If element has since been unmounted, return false to indicate
       * the animation failed to initialised.
       */
      if (!((_a = motionValue.owner) === null || _a === void 0 ? void 0 : _a.current)) {
        return false;
      }
      /**
       * If this animation needs pre-generated keyframes then generate.
       */
      if (requiresPregeneratedKeyframes(this.options)) {
        var _this$options3 = this.options;
          _this$options3.onComplete;
          _this$options3.onUpdate;
          _this$options3.motionValue;
          var options = _objectWithoutProperties(_this$options3, _excluded$4);
        var pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
        keyframes = pregeneratedAnimation.keyframes;
        // If this is a very short animation, ensure we have
        // at least two keyframes to animate between as older browsers
        // can't animate between a single keyframe.
        if (keyframes.length === 1) {
          keyframes[1] = keyframes[0];
        }
        duration = pregeneratedAnimation.duration;
        times = pregeneratedAnimation.times;
        ease = pregeneratedAnimation.ease;
        type = "keyframes";
      }
      var animation = animateStyle(motionValue.owner.current, name, keyframes, _objectSpread2(_objectSpread2({}, this.options), {}, {
        duration: duration,
        times: times,
        ease: ease
      }));
      // Override the browser calculated startTime with one synchronised to other JS
      // and WAAPI animations starting this event loop.
      animation.startTime = time.now();
      if (this.pendingTimeline) {
        animation.timeline = this.pendingTimeline;
        this.pendingTimeline = undefined;
      } else {
        /**
         * Prefer the `onfinish` prop as it's more widely supported than
         * the `finished` promise.
         *
         * Here, we synchronously set the provided MotionValue to the end
         * keyframe. If we didn't, when the WAAPI animation is finished it would
         * be removed from the element which would then revert to its old styles.
         */
        animation.onfinish = function () {
          var onComplete = _this2.options.onComplete;
          motionValue.set(getFinalKeyframe(keyframes, _this2.options, finalKeyframe));
          onComplete && onComplete();
          _this2.cancel();
          _this2.resolveFinishedPromise();
        };
      }
      return {
        animation: animation,
        duration: duration,
        times: times,
        type: type,
        ease: ease,
        keyframes: keyframes
      };
    }
  }, {
    key: "duration",
    get: function get() {
      var resolved = this.resolved;
      if (!resolved) return 0;
      var duration = resolved.duration;
      return millisecondsToSeconds(duration);
    }
  }, {
    key: "time",
    get: function get() {
      var resolved = this.resolved;
      if (!resolved) return 0;
      var animation = resolved.animation;
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set: function set(newTime) {
      var resolved = this.resolved;
      if (!resolved) return;
      var animation = resolved.animation;
      animation.currentTime = secondsToMilliseconds(newTime);
    }
  }, {
    key: "speed",
    get: function get() {
      var resolved = this.resolved;
      if (!resolved) return 1;
      var animation = resolved.animation;
      return animation.playbackRate;
    },
    set: function set(newSpeed) {
      var resolved = this.resolved;
      if (!resolved) return;
      var animation = resolved.animation;
      animation.playbackRate = newSpeed;
    }
  }, {
    key: "state",
    get: function get() {
      var resolved = this.resolved;
      if (!resolved) return "idle";
      var animation = resolved.animation;
      return animation.playState;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
  }, {
    key: "attachTimeline",
    value: function attachTimeline(timeline) {
      if (!this._resolved) {
        this.pendingTimeline = timeline;
      } else {
        var resolved = this.resolved;
        if (!resolved) return noop;
        var animation = resolved.animation;
        animation.timeline = timeline;
        animation.onfinish = null;
      }
      return noop;
    }
  }, {
    key: "play",
    value: function play() {
      if (this.isStopped) return;
      var resolved = this.resolved;
      if (!resolved) return;
      var animation = resolved.animation;
      if (animation.playState === "finished") {
        this.updateFinishedPromise();
      }
      animation.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      var resolved = this.resolved;
      if (!resolved) return;
      var animation = resolved.animation;
      animation.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle") return;
      var resolved = this.resolved;
      if (!resolved) return;
      var animation = resolved.animation,
        keyframes = resolved.keyframes,
        duration = resolved.duration,
        type = resolved.type,
        ease = resolved.ease,
        times = resolved.times;
      if (animation.playState === "idle" || animation.playState === "finished") {
        return;
      }
      /**
       * WAAPI doesn't natively have any interruption capabilities.
       *
       * Rather than read commited styles back out of the DOM, we can
       * create a renderless JS animation and sample it twice to calculate
       * its current value, "previous" value, and therefore allow
       * Motion to calculate velocity for any subsequent animation.
       */
      if (this.time) {
        var _this$options4 = this.options,
          motionValue = _this$options4.motionValue;
          _this$options4.onUpdate;
          _this$options4.onComplete;
          var options = _objectWithoutProperties(_this$options4, _excluded2$1);
        var sampleAnimation = new MainThreadAnimation(_objectSpread2(_objectSpread2({}, options), {}, {
          keyframes: keyframes,
          duration: duration,
          type: type,
          ease: ease,
          times: times,
          isGenerator: true
        }));
        var sampleTime = secondsToMilliseconds(this.time);
        motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
      }
      this.cancel();
    }
  }, {
    key: "complete",
    value: function complete() {
      var resolved = this.resolved;
      if (!resolved) return;
      resolved.animation.finish();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var resolved = this.resolved;
      if (!resolved) return;
      resolved.animation.cancel();
    }
  }], [{
    key: "supports",
    value: function supports(options) {
      var motionValue = options.motionValue,
        name = options.name,
        repeatDelay = options.repeatDelay,
        repeatType = options.repeatType,
        damping = options.damping,
        type = options.type;
      return supportsWaapi() && name && acceleratedValues.has(name) && motionValue && motionValue.owner && motionValue.owner.current instanceof HTMLElement &&
      /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !motionValue.owner.getProps().onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
  }]);
}(BaseAnimation);

var animateMotionValue = function animateMotionValue(name, value, target) {
  var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var element = arguments.length > 4 ? arguments[4] : undefined;
  var isHandoff = arguments.length > 5 ? arguments[5] : undefined;
  return function (_onComplete) {
    var valueTransition = getValueTransition(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    var delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    var _transition$elapsed = transition.elapsed,
      elapsed = _transition$elapsed === void 0 ? 0 : _transition$elapsed;
    elapsed = elapsed - secondsToMilliseconds(delay);
    var options = _objectSpread2(_objectSpread2({
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity()
    }, valueTransition), {}, {
      delay: -elapsed,
      onUpdate: function onUpdate(v) {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: function onComplete() {
        _onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name: name,
      motionValue: value,
      element: isHandoff ? undefined : element
    });
    /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */
    if (!isTransitionDefined(valueTransition)) {
      options = _objectSpread2(_objectSpread2({}, options), getDefaultTransition(name, options));
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (options.from !== undefined) {
      options.keyframes[0] = options.from;
    }
    var shouldSkip = false;
    if (options.type === false) {
      options.duration = 0;
      if (options.delay === 0) {
        shouldSkip = true;
      }
    }
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
      var finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
      if (finalKeyframe !== undefined) {
        frame.update(function () {
          options.onUpdate(finalKeyframe);
          options.onComplete();
        });
        return;
      }
    }
    /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    if (!isHandoff && AcceleratedAnimation.supports(options)) {
      return new AcceleratedAnimation(options);
    } else {
      return new MainThreadAnimation(options);
    }
  };
};

function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  var index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}

var SubscriptionManager = /*#__PURE__*/function () {
  function SubscriptionManager() {
    _classCallCheck(this, SubscriptionManager);
    this.subscriptions = [];
  }
  return _createClass(SubscriptionManager, [{
    key: "add",
    value: function add(handler) {
      var _this = this;
      addUniqueItem(this.subscriptions, handler);
      return function () {
        return removeItem(_this.subscriptions, handler);
      };
    }
  }, {
    key: "notify",
    value: function notify(a, b, c) {
      var numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions) return;
      if (numSubscriptions === 1) {
        /**
         * If there's only a single handler we can just call it without invoking a loop.
         */
        this.subscriptions[0](a, b, c);
      } else {
        for (var i = 0; i < numSubscriptions; i++) {
          /**
           * Check whether the handler exists before firing as it's possible
           * the subscriptions were modified during this loop running.
           */
          var handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
      }
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.subscriptions.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.subscriptions.length = 0;
    }
  }]);
}();

var warned = new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */
var MAX_VELOCITY_DELTA = 30;
var isFloat = function isFloat(value) {
  return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /*#__PURE__*/function () {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  function MotionValue(init) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, MotionValue);
    /**
     * This will be replaced by the build step with the latest version number.
     * When MotionValues are provided to motion components, warn if versions are mixed.
     */
    this.version = "11.0.25";
    /**
     * Tracks whether this value can output a velocity. Currently this is only true
     * if the value is numerical, but we might be able to widen the scope here and support
     * other value types.
     *
     * @internal
     */
    this.canTrackVelocity = false;
    /**
     * An object containing a SubscriptionManager for each active event.
     */
    this.events = {};
    this.updateAndNotify = function (v) {
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentTime = time.now();
      /**
       * If we're updating the value during another frame or eventloop
       * than the previous frame, then the we set the previous frame value
       * to current.
       */
      if (_this.updatedAt !== currentTime) {
        _this.setPrevFrameValue();
      }
      _this.prev = _this.current;
      _this.setCurrent(v);
      // Update update subscribers
      if (_this.current !== _this.prev && _this.events.change) {
        _this.events.change.notify(_this.current);
      }
      // Update render subscribers
      if (render && _this.events.renderRequest) {
        _this.events.renderRequest.notify(_this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  return _createClass(MotionValue, [{
    key: "setCurrent",
    value: function setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
    }
  }, {
    key: "setPrevFrameValue",
    value: function setPrevFrameValue() {
      var prevFrameValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
  }, {
    key: "onChange",
    value: function onChange(subscription) {
      if (process.env.NODE_ENV !== "production") {
        warnOnce(false, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback).");
      }
      return this.on("change", subscription);
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      var _this2 = this;
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      var unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return function () {
          unsubscribe();
          /**
           * If we have no more change listeners by the start
           * of the next frame, stop active animations.
           */
          frame.read(function () {
            if (!_this2.events.change.getSize()) {
              _this2.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
  }, {
    key: "clearListeners",
    value: function clearListeners() {
      for (var eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
  }, {
    key: "attach",
    value: function attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
  }, {
    key: "set",
    value: function set(v) {
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
  }, {
    key: "setWithVelocity",
    value: function setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = undefined;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
  }, {
    key: "jump",
    value: function jump(v) {
      var endAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = undefined;
      endAnimation && this.stop();
      if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
  }, {
    key: "get",
    value: function get() {
      return this.current;
    }
    /**
     * @public
     */
  }, {
    key: "getPrevious",
    value: function getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
  }, {
    key: "getVelocity",
    value: function getVelocity() {
      var currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      var delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      // Casts because of parseFloat's poor typing
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
  }, {
    key: "start",
    value: function start(startAnimation) {
      var _this3 = this;
      this.stop();
      return new Promise(function (resolve) {
        _this3.hasAnimated = true;
        _this3.animation = startAnimation(resolve);
        if (_this3.events.animationStart) {
          _this3.events.animationStart.notify();
        }
      }).then(function () {
        if (_this3.events.animationComplete) {
          _this3.events.animationComplete.notify();
        }
        _this3.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
  }, {
    key: "stop",
    value: function stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return !!this.animation;
    }
  }, {
    key: "clearAnimation",
    value: function clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  }]);
}();
function motionValue(init, options) {
  return new MotionValue(init, options);
}

var _excluded$3 = ["transitionEnd", "transition"];

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  var resolved = resolveVariant(visualElement, definition);
  var _ref = resolved || {},
    _ref$transitionEnd = _ref.transitionEnd,
    transitionEnd = _ref$transitionEnd === void 0 ? {} : _ref$transitionEnd;
    _ref.transition;
    var target = _objectWithoutProperties(_ref, _excluded$3);
  target = _objectSpread2(_objectSpread2({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

var _excluded$2 = ["transition", "transitionEnd"];

/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_ref, key) {
  var protectedKeys = _ref.protectedKeys,
    needsAnimating = _ref.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$delay = _ref2.delay,
    delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
    transitionOverride = _ref2.transitionOverride,
    type = _ref2.type;
  var _a;
  var _targetAndTransition$ = targetAndTransition.transition,
    transition = _targetAndTransition$ === void 0 ? visualElement.getDefaultTransition() : _targetAndTransition$,
    transitionEnd = targetAndTransition.transitionEnd,
    target = _objectWithoutProperties(targetAndTransition, _excluded$2);
  var willChange = visualElement.getValue("willChange");
  if (transitionOverride) transition = transitionOverride;
  var animations = [];
  var animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  var _loop = function _loop(key) {
    var value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    var valueTarget = target[key];
    if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      return 1; // continue
    }
    var valueTransition = _objectSpread2({
      delay: delay,
      elapsed: 0
    }, getValueTransition(transition || {}, key));
    /**
     * If this is the first time a value is being animated, check
     * to see if we're handling off from an existing animation.
     */
    var isHandoff = false;
    if (window.HandoffAppearAnimations) {
      var appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        var elapsed = window.HandoffAppearAnimations(appearId, key);
        if (elapsed !== null) {
          valueTransition.elapsed = elapsed;
          isHandoff = true;
        }
      }
    }
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
      type: false
    } : valueTransition, visualElement, isHandoff));
    var animation = value.animation;
    if (animation) {
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
        animation.then(function () {
          return willChange.remove(key);
        });
      }
      animations.push(animation);
    }
  };
  for (var key in target) {
    if (_loop(key)) continue;
  }
  if (transitionEnd) {
    Promise.all(animations).then(function () {
      frame.update(function () {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations;
}

function animateVariant(visualElement, variant) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _a;
  var resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : undefined);
  var _ref = resolved || {},
    _ref$transition = _ref.transition,
    transition = _ref$transition === void 0 ? visualElement.getDefaultTransition() || {} : _ref$transition;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  /**
   * If we have a variant, create a callback that runs it as an animation.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  var getAnimation = resolved ? function () {
    return Promise.all(animateTarget(visualElement, resolved, options));
  } : function () {
    return Promise.resolve();
  };
  /**
   * If we have children, create a callback that runs all their animations.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  var getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? function () {
    var forwardDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var _transition = transition,
      _transition$delayChil = _transition.delayChildren,
      delayChildren = _transition$delayChil === void 0 ? 0 : _transition$delayChil,
      staggerChildren = _transition.staggerChildren,
      staggerDirection = _transition.staggerDirection;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function () {
    return Promise.resolve();
  };
  /**
   * If the transition explicitly defines a "when" option, we need to resolve either
   * this animation or all children animations before playing the other.
   */
  var _transition2 = transition,
    when = _transition2.when;
  if (when) {
    var _ref2 = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation],
      _ref3 = _slicedToArray(_ref2, 2),
      first = _ref3[0],
      last = _ref3[1];
    return first().then(function () {
      return last();
    });
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant) {
  var delayChildren = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var staggerChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var staggerDirection = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var options = arguments.length > 5 ? arguments[5] : undefined;
  var animations = [];
  var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function () {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return i * staggerChildren;
  } : function () {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function (child, i) {
    child.notify("AnimationStart", variant);
    animations.push(animateVariant(child, variant, _objectSpread2(_objectSpread2({}, options), {}, {
      delay: delayChildren + generateStaggerDuration(i)
    })).then(function () {
      return child.notify("AnimationComplete", variant);
    }));
  });
  return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

function animateVisualElement(visualElement, definition) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  visualElement.notify("AnimationStart", definition);
  var animation;
  if (Array.isArray(definition)) {
    var animations = definition.map(function (variant) {
      return animateVariant(visualElement, variant, options);
    });
    animation = Promise.all(animations);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(function () {
    frame.postRender(function () {
      visualElement.notify("AnimationComplete", definition);
    });
  });
}

var _excluded$1 = ["transition", "transitionEnd"];
var reversePriorityOrder = _toConsumableArray(variantPriorityOrder).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return function (animations) {
    return Promise.all(animations.map(function (_ref) {
      var animation = _ref.animation,
        options = _ref.options;
      return animateVisualElement(visualElement, animation, options);
    }));
  };
}
function createAnimationState(visualElement) {
  var animate = animateList(visualElement);
  var state = createState();
  var isInitialRender = true;
  /**
   * This function will be used to reduce the animation definitions for
   * each active animation type into an object of resolved values for it.
   */
  var buildResolvedTypeValues = function buildResolvedTypeValues(type) {
    return function (acc, definition) {
      var _a;
      var resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : undefined);
      if (resolved) {
        resolved.transition;
          var transitionEnd = resolved.transitionEnd,
          target = _objectWithoutProperties(resolved, _excluded$1);
        acc = _objectSpread2(_objectSpread2(_objectSpread2({}, acc), target), transitionEnd);
      }
      return acc;
    };
  };
  /**
   * This just allows us to inject mocked animation functions
   * @internal
   */
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  /**
   * When we receive new props, we need to:
   * 1. Create a list of protected keys for each type. This is a directory of
   *    value keys that are currently being "handled" by types of a higher priority
   *    so that whenever an animation is played of a given type, these values are
   *    protected from being animated.
   * 2. Determine if an animation type needs animating.
   * 3. Determine if any values have been removed from a type and figure out
   *    what to animate those to.
   */
  function animateChanges(changedActiveType) {
    var props = visualElement.getProps();
    var context = visualElement.getVariantContext(true) || {};
    /**
     * A list of animations that we'll build into as we iterate through the animation
     * types. This will get executed at the end of the function.
     */
    var animations = [];
    /**
     * Keep track of which values have been removed. Then, as we hit lower priority
     * animation types, we can check if they contain removed values and animate to that.
     */
    var removedKeys = new Set();
    /**
     * A dictionary of all encountered keys. This is an object to let us build into and
     * copy it without iteration. Each time we hit an animation type we set its protected
     * keys - the keys its not allowed to animate - to the latest version of this object.
     */
    var encounteredKeys = {};
    /**
     * If a variant has been removed at a given index, and this component is controlling
     * variant animations, we want to ensure lower-priority variants are forced to animate.
     */
    var removedVariantIndex = Infinity;
    /**
     * Iterate through all animation types in reverse priority order. For each, we want to
     * detect which values it's handling and whether or not they've changed (and therefore
     * need to be animated). If any values have been removed, we want to detect those in
     * lower priority props and flag for animation.
     */
    var _loop = function _loop() {
      var type = reversePriorityOrder[i];
      var typeState = state[type];
      var prop = props[type] !== undefined ? props[type] : context[type];
      var propIsVariant = isVariantLabel(prop);
      /**
       * If this type has *just* changed isActive status, set activeDelta
       * to that status. Otherwise set to null.
       */
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      /**
       * If this prop is an inherited variant, rather than been set directly on the
       * component itself, we want to make sure we allow the parent to trigger animations.
       *
       * TODO: Can probably change this to a !isControllingVariants check
       */
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      /**
       *
       */
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      /**
       * Set all encountered keys so far as the protected keys for this type. This will
       * be any key that has been animated or otherwise handled by active, higher-priortiy types.
       */
      typeState.protectedKeys = _objectSpread2({}, encounteredKeys);
      // Check if we can skip analysing this prop early
      if (
      // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null ||
      // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp ||
      // Or if the prop doesn't define an animation
      isAnimationControls(prop) || typeof prop === "boolean") {
        return 1; // continue
      }
      /**
       * As we go look through the values defined on this type, if we detect
       * a changed value or a value that was removed in a higher priority, we set
       * this to true and add this prop to the animation list.
       */
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange ||
      // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant ||
      // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      var handledRemovedValues = false;
      /**
       * As animations can be set as variant lists, variants or target objects, we
       * coerce everything to an array if it isn't one already
       */
      var definitionList = Array.isArray(prop) ? prop : [prop];
      /**
       * Build an object of all the resolved values. We'll use this in the subsequent
       * animateChanges calls to determine whether a value has changed.
       */
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false) resolvedValues = {};
      /**
       * Now we need to loop through all the keys in the prev prop and this prop,
       * and decide:
       * 1. If the value has changed, and needs animating
       * 2. If it has been removed, and needs adding to the removedKeys set
       * 3. If it has been removed in a higher priority type and needs animating
       * 4. If it hasn't been removed in a higher priority but hasn't changed, and
       *    needs adding to the type's protectedKeys list.
       */
      var _typeState$prevResolv = typeState.prevResolvedValues,
        prevResolvedValues = _typeState$prevResolv === void 0 ? {} : _typeState$prevResolv;
      var allKeys = _objectSpread2(_objectSpread2({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function markToAnimate(key) {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys["delete"](key);
        }
        typeState.needsAnimating[key] = true;
        var motionValue = visualElement.getValue(key);
        if (motionValue) motionValue.liveStyle = false;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        // If we've already handled this we can just skip ahead
        if (encounteredKeys.hasOwnProperty(key)) continue;
        /**
         * If the value has changed, we probably want to animate it.
         */
        var valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== undefined && next !== null) {
            // If next is defined and doesn't equal prev, it needs animating
            markToAnimate(key);
          } else {
            // If it's undefined, it's been removed.
            removedKeys.add(key);
          }
        } else if (next !== undefined && removedKeys.has(key)) {
          /**
           * If next hasn't changed and it isn't undefined, we want to check if it's
           * been removed by a higher priority
           */
          markToAnimate(key);
        } else {
          /**
           * If it hasn't changed, we add it to the list of protected values
           * to ensure it doesn't get animated.
           */
          typeState.protectedKeys[key] = true;
        }
      }
      /**
       * Update the typeState so next time animateChanges is called we can compare the
       * latest prop and resolvedValues to these.
       */
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      /**
       *
       */
      if (typeState.isActive) {
        encounteredKeys = _objectSpread2(_objectSpread2({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      /**
       * If this is an inherited prop we want to hard-block animations
       */
      if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
        animations.push.apply(animations, _toConsumableArray(definitionList.map(function (animation) {
          return {
            animation: animation,
            options: {
              type: type
            }
          };
        })));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      if (_loop()) continue;
    }
    /**
     * If there are some removed value that haven't been dealt with,
     * we need to create a new animation that falls back either to the value
     * defined in the style prop, or the last read value.
     */
    if (removedKeys.size) {
      var fallbackAnimation = {};
      removedKeys.forEach(function (key) {
        var fallbackTarget = visualElement.getBaseTarget(key);
        var motionValue = visualElement.getValue(key);
        if (motionValue) motionValue.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget === undefined ? null : fallbackTarget;
      });
      animations.push({
        animation: fallbackAnimation
      });
    }
    var shouldAnimate = Boolean(animations.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations) : Promise.resolve();
  }
  /**
   * Change whether a certain animation type is active.
   */
  function setActive(type, isActive) {
    var _a;
    // If the active state hasn't changed, we can safely do nothing here
    if (state[type].isActive === isActive) return Promise.resolve();
    // Propagate active change to children
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      var _a;
      return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    var animations = animateChanges(type);
    for (var key in state) {
      state[key].protectedKeys = {};
    }
    return animations;
  }
  return {
    animateChanges: animateChanges,
    setActive: setActive,
    setAnimateFunction: setAnimateFunction,
    getState: function getState() {
      return state;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState() {
  var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    isActive: isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

var AnimationFeature = /*#__PURE__*/function (_Feature) {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  function AnimationFeature(node) {
    var _this;
    _classCallCheck(this, AnimationFeature);
    _this = _callSuper(this, AnimationFeature, [node]);
    node.animationState || (node.animationState = createAnimationState(node));
    return _this;
  }
  _inherits(AnimationFeature, _Feature);
  return _createClass(AnimationFeature, [{
    key: "updateAnimationControlsSubscription",
    value: function updateAnimationControlsSubscription() {
      var _this$node$getProps = this.node.getProps(),
        animate = _this$node$getProps.animate;
      this.unmount();
      if (isAnimationControls(animate)) {
        this.unmount = animate.subscribe(this.node);
      }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
  }, {
    key: "mount",
    value: function mount() {
      this.updateAnimationControlsSubscription();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$node$getProps2 = this.node.getProps(),
        animate = _this$node$getProps2.animate;
      var _ref = this.node.prevProps || {},
        prevAnimate = _ref.animate;
      if (animate !== prevAnimate) {
        this.updateAnimationControlsSubscription();
      }
    }
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
}(Feature);

var id$1 = 0;
var ExitAnimationFeature = /*#__PURE__*/function (_Feature) {
  function ExitAnimationFeature() {
    var _this;
    _classCallCheck(this, ExitAnimationFeature);
    _this = _callSuper(this, ExitAnimationFeature, arguments);
    _this.id = id$1++;
    return _this;
  }
  _inherits(ExitAnimationFeature, _Feature);
  return _createClass(ExitAnimationFeature, [{
    key: "update",
    value: function update() {
      var _this2 = this;
      if (!this.node.presenceContext) return;
      var _this$node$presenceCo = this.node.presenceContext,
        isPresent = _this$node$presenceCo.isPresent,
        onExitComplete = _this$node$presenceCo.onExitComplete;
      var _ref = this.node.prevPresenceContext || {},
        prevIsPresent = _ref.isPresent;
      if (!this.node.animationState || isPresent === prevIsPresent) {
        return;
      }
      var exitAnimation = this.node.animationState.setActive("exit", !isPresent);
      if (onExitComplete && !isPresent) {
        exitAnimation.then(function () {
          return onExitComplete(_this2.id);
        });
      }
    }
  }, {
    key: "mount",
    value: function mount() {
      var _ref2 = this.node.presenceContext || {},
        register = _ref2.register;
      if (register) {
        this.unmount = register(this.id);
      }
    }
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
}(Feature);

var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

var distance = function distance(a, b) {
  return Math.abs(a - b);
};
function distance2D(a, b) {
  // Multi-dimensional
  var xDelta = distance(a.x, b.x);
  var yDelta = distance(a.y, b.y);
  return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
}

/**
 * @internal
 */
var PanSession = /*#__PURE__*/function () {
  function PanSession(event, handlers) {
    var _this = this;
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      transformPagePoint = _ref.transformPagePoint,
      contextWindow = _ref.contextWindow,
      _ref$dragSnapToOrigin = _ref.dragSnapToOrigin,
      dragSnapToOrigin = _ref$dragSnapToOrigin === void 0 ? false : _ref$dragSnapToOrigin;
    _classCallCheck(this, PanSession);
    /**
     * @internal
     */
    this.startEvent = null;
    /**
     * @internal
     */
    this.lastMoveEvent = null;
    /**
     * @internal
     */
    this.lastMoveEventInfo = null;
    /**
     * @internal
     */
    this.handlers = {};
    /**
     * @internal
     */
    this.contextWindow = window;
    this.updatePoint = function () {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
      var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      // Only start panning if the offset is larger than 3 pixels. If we make it
      // any larger than this we'll want to reset the pointer history
      // on the first update to avoid visual snapping to the cursoe.
      var isDistancePastThreshold = distance2D(info.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      var point = info.point;
      var timestamp = frameData.timestamp;
      _this.history.push(_objectSpread2(_objectSpread2({}, point), {}, {
        timestamp: timestamp
      }));
      var _this$handlers = _this.handlers,
        onStart = _this$handlers.onStart,
        onMove = _this$handlers.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info);
    };
    this.handlePointerMove = function (event, info) {
      _this.lastMoveEvent = event;
      _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
      // Throttle mouse move event to once per frame
      frame.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function (event, info) {
      _this.end();
      var _this$handlers2 = _this.handlers,
        onEnd = _this$handlers2.onEnd,
        onSessionEnd = _this$handlers2.onSessionEnd,
        resumeAnimation = _this$handlers2.resumeAnimation;
      if (_this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
      var panInfo = getPanInfo(event.type === "pointercancel" ? _this.lastMoveEventInfo : transformPoint(info, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event, panInfo);
      }
      onSessionEnd && onSessionEnd(event, panInfo);
    };
    // If we have more than one touch, don't start detecting this gesture
    if (!isPrimaryPointer(event)) return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = frameData.timestamp;
    this.history = [_objectSpread2(_objectSpread2({}, point), {}, {
      timestamp: timestamp
    })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  return _createClass(PanSession, [{
    key: "updateHandlers",
    value: function updateHandlers(handlers) {
      this.handlers = handlers;
    }
  }, {
    key: "end",
    value: function end() {
      this.removeListeners && this.removeListeners();
      cancelFrame(this.updatePoint);
    }
  }]);
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo(_ref2, history) {
  var point = _ref2.point;
  return {
    point: point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  var time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target) {
  var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
  delta.origin = origin;
  delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _ref, elastic) {
  var min = _ref.min,
    max = _ref.max;
  if (min !== undefined && point < min) {
    // If we have a min point defined, and this is outside of that, constrain
    point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== undefined && point > max) {
    // If we have a max point defined, and this is outside of that, constrain
    point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== undefined ? axis.min + min : undefined,
    max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
  };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _ref2) {
  var top = _ref2.top,
    left = _ref2.left,
    bottom = _ref2.bottom,
    right = _ref2.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  // If the constraints axis is actually smaller than the layout axis then we can
  // flip the constraints
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    var _ref3 = [max, min];
    min = _ref3[0];
    max = _ref3[1];
  }
  return {
    min: min,
    max: max
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== undefined) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== undefined) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic() {
  var dragElastic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultElastic;
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

var createAxisDelta = function createAxisDelta() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function createDelta() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function createAxis() {
  return {
    min: 0,
    max: 0
  };
};
var createBox = function createBox() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};

function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox(_ref) {
  var top = _ref.top,
    left = _ref.left,
    right = _ref.right,
    bottom = _ref.bottom;
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertBoxToBoundingBox(_ref2) {
  var x = _ref2.x,
    y = _ref2.y;
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
  if (!transformPoint) return point;
  var topLeft = transformPoint({
    x: point.left,
    y: point.top
  });
  var bottomRight = transformPoint({
    x: point.right,
    y: point.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

function isIdentityScale(scale) {
  return scale === undefined || scale === 1;
}
function hasScale(_ref) {
  var scale = _ref.scale,
    scaleX = _ref.scaleX,
    scaleY = _ref.scaleY;
  return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale * distanceFromOrigin;
  return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
  if (boxScale !== undefined) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis) {
  var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var originPoint = arguments.length > 3 ? arguments[3] : undefined;
  var boxScale = arguments.length > 4 ? arguments[4] : undefined;
  axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _ref) {
  var x = _ref.x,
    y = _ref.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath) {
  var isSharedTransition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var treeLength = treePath.length;
  if (!treeLength) return;
  // Reset the treeScale
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    /**
     * TODO: Prefer to remove this, but currently we have motion components with
     * display: contents in Framer.
     */
    var instance = node.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      // Incoporate each ancestor's scale into a culmulative treeScale for this component
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      // Apply each ancestor's calculated delta into this component's recorded layout box
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  /**
   * Snap tree scale back to 1 if it's within a non-perceivable threshold.
   * This will help reduce useless scales getting rendered.
   */
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
  if (Number.isInteger(scale)) return scale;
  return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
}
function translateAxis(axis, distance) {
  axis.min = axis.min + distance;
  axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, _ref2) {
  var _ref3 = _slicedToArray(_ref2, 3),
    key = _ref3[0],
    scaleKey = _ref3[1],
    originKey = _ref3[2];
  var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
  var originPoint = mixNumber$1(axis.min, axis.max, axisOrigin);
  // Apply the axis delta to the final axis
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys$1 = ["x", "scaleX", "originX"];
var yKeys$1 = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys$1);
  transformAxis(box.y, transform, yKeys$1);
}

function measureViewportBox(instance, transformPoint) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll = rootProjectionNode.scroll;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}

// Fixes https://github.com/framer/motion/issues/2270
var getContextWindow = function getContextWindow(_ref) {
  var current = _ref.current;
  return current ? current.ownerDocument.defaultView : null;
};

var elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
var VisualElementDragControls = /*#__PURE__*/function () {
  function VisualElementDragControls(visualElement) {
    _classCallCheck(this, VisualElementDragControls);
    // This is a reference to the global drag gesture lock, ensuring only one component
    // can "capture" the drag of one or both axes.
    // TODO: Look into moving this into pansession?
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    /**
     * The permitted boundaries of travel, in pixels.
     */
    this.constraints = false;
    this.hasMutatedConstraints = false;
    /**
     * The per-axis resolved elastic values.
     */
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  return _createClass(VisualElementDragControls, [{
    key: "start",
    value: function start(originEvent) {
      var _this = this;
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$snapToCursor = _ref.snapToCursor,
        snapToCursor = _ref$snapToCursor === void 0 ? false : _ref$snapToCursor;
      /**
       * Don't start dragging if this component is exiting
       */
      var presenceContext = this.visualElement.presenceContext;
      if (presenceContext && presenceContext.isPresent === false) return;
      var onSessionStart = function onSessionStart(event) {
        var _this$getProps = _this.getProps(),
          dragSnapToOrigin = _this$getProps.dragSnapToOrigin;
        // Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
        // the component.
        dragSnapToOrigin ? _this.pauseAnimation() : _this.stopAnimation();
        if (snapToCursor) {
          _this.snapToCursor(extractEventInfo(event, "page").point);
        }
      };
      var onStart = function onStart(event, info) {
        // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
        var _this$getProps2 = _this.getProps(),
          drag = _this$getProps2.drag,
          dragPropagation = _this$getProps2.dragPropagation,
          onDragStart = _this$getProps2.onDragStart;
        if (drag && !dragPropagation) {
          if (_this.openGlobalLock) _this.openGlobalLock();
          _this.openGlobalLock = getGlobalLock(drag);
          // If we don 't have the lock, don't start dragging
          if (!_this.openGlobalLock) return;
        }
        _this.isDragging = true;
        _this.currentDirection = null;
        _this.resolveConstraints();
        if (_this.visualElement.projection) {
          _this.visualElement.projection.isAnimationBlocked = true;
          _this.visualElement.projection.target = undefined;
        }
        /**
         * Record gesture origin
         */
        eachAxis(function (axis) {
          var current = _this.getAxisMotionValue(axis).get() || 0;
          /**
           * If the MotionValue is a percentage value convert to px
           */
          if (percent.test(current)) {
            var projection = _this.visualElement.projection;
            if (projection && projection.layout) {
              var measuredAxis = projection.layout.layoutBox[axis];
              if (measuredAxis) {
                var length = calcLength(measuredAxis);
                current = length * (parseFloat(current) / 100);
              }
            }
          }
          _this.originPoint[axis] = current;
        });
        // Fire onDragStart event
        if (onDragStart) onDragStart(event, info);
        var animationState = _this.visualElement.animationState;
        animationState && animationState.setActive("whileDrag", true);
      };
      var onMove = function onMove(event, info) {
        // latestPointerEvent = event
        var _this$getProps3 = _this.getProps(),
          dragPropagation = _this$getProps3.dragPropagation,
          dragDirectionLock = _this$getProps3.dragDirectionLock,
          onDirectionLock = _this$getProps3.onDirectionLock,
          onDrag = _this$getProps3.onDrag;
        // If we didn't successfully receive the gesture lock, early return.
        if (!dragPropagation && !_this.openGlobalLock) return;
        var offset = info.offset;
        // Attempt to detect drag direction if directionLock is true
        if (dragDirectionLock && _this.currentDirection === null) {
          _this.currentDirection = getCurrentDirection(offset);
          // If we've successfully set a direction, notify listener
          if (_this.currentDirection !== null) {
            onDirectionLock && onDirectionLock(_this.currentDirection);
          }
          return;
        }
        // Update each point with the latest position
        _this.updateAxis("x", info.point, offset);
        _this.updateAxis("y", info.point, offset);
        /**
         * Ideally we would leave the renderer to fire naturally at the end of
         * this frame but if the element is about to change layout as the result
         * of a re-render we want to ensure the browser can read the latest
         * bounding box to ensure the pointer and element don't fall out of sync.
         */
        _this.visualElement.render();
        /**
         * This must fire after the render call as it might trigger a state
         * change which itself might trigger a layout update.
         */
        onDrag && onDrag(event, info);
      };
      var onSessionEnd = function onSessionEnd(event, info) {
        return _this.stop(event, info);
      };
      var resumeAnimation = function resumeAnimation() {
        return eachAxis(function (axis) {
          var _a;
          return _this.getAnimationState(axis) === "paused" && ((_a = _this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
        });
      };
      var _this$getProps4 = this.getProps(),
        dragSnapToOrigin = _this$getProps4.dragSnapToOrigin;
      this.panSession = new PanSession(originEvent, {
        onSessionStart: onSessionStart,
        onStart: onStart,
        onMove: onMove,
        onSessionEnd: onSessionEnd,
        resumeAnimation: resumeAnimation
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: dragSnapToOrigin,
        contextWindow: getContextWindow(this.visualElement)
      });
    }
  }, {
    key: "stop",
    value: function stop(event, info) {
      var isDragging = this.isDragging;
      this.cancel();
      if (!isDragging) return;
      var velocity = info.velocity;
      this.startAnimation(velocity);
      var _this$getProps5 = this.getProps(),
        onDragEnd = _this$getProps5.onDragEnd;
      if (onDragEnd) onDragEnd(event, info);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.isDragging = false;
      var _this$visualElement = this.visualElement,
        projection = _this$visualElement.projection,
        animationState = _this$visualElement.animationState;
      if (projection) {
        projection.isAnimationBlocked = false;
      }
      this.panSession && this.panSession.end();
      this.panSession = undefined;
      var _this$getProps6 = this.getProps(),
        dragPropagation = _this$getProps6.dragPropagation;
      if (!dragPropagation && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      animationState && animationState.setActive("whileDrag", false);
    }
  }, {
    key: "updateAxis",
    value: function updateAxis(axis, _point, offset) {
      var _this$getProps7 = this.getProps(),
        drag = _this$getProps7.drag;
      // If we're not dragging this axis, do an early return.
      if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
      var axisValue = this.getAxisMotionValue(axis);
      var next = this.originPoint[axis] + offset[axis];
      // Apply constraints
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    }
  }, {
    key: "resolveConstraints",
    value: function resolveConstraints() {
      var _this2 = this;
      var _a;
      var _this$getProps8 = this.getProps(),
        dragConstraints = _this$getProps8.dragConstraints,
        dragElastic = _this$getProps8.dragElastic;
      var layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
      var prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout) {
          this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      /**
       * If we're outputting to external MotionValues, we want to rebase the measured constraints
       * from viewport-relative to component-relative.
       */
      if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
        eachAxis(function (axis) {
          if (_this2.getAxisMotionValue(axis)) {
            _this2.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], _this2.constraints[axis]);
          }
        });
      }
    }
  }, {
    key: "resolveRefConstraints",
    value: function resolveRefConstraints() {
      var _this$getProps9 = this.getProps(),
        constraints = _this$getProps9.dragConstraints,
        onMeasureDragConstraints = _this$getProps9.onMeasureDragConstraints;
      if (!constraints || !isRefObject(constraints)) return false;
      var constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      var projection = this.visualElement.projection;
      // TODO
      if (!projection || !projection.layout) return false;
      var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      var measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
      /**
       * If there's an onMeasureDragConstraints listener we call it and
       * if different constraints are returned, set constraints to that
       */
      if (onMeasureDragConstraints) {
        var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    }
  }, {
    key: "startAnimation",
    value: function startAnimation(velocity) {
      var _this3 = this;
      var _this$getProps10 = this.getProps(),
        drag = _this$getProps10.drag,
        dragMomentum = _this$getProps10.dragMomentum,
        dragElastic = _this$getProps10.dragElastic,
        dragTransition = _this$getProps10.dragTransition,
        dragSnapToOrigin = _this$getProps10.dragSnapToOrigin,
        onDragTransitionEnd = _this$getProps10.onDragTransitionEnd;
      var constraints = this.constraints || {};
      var momentumAnimations = eachAxis(function (axis) {
        if (!shouldDrag(axis, drag, _this3.currentDirection)) {
          return;
        }
        var transition = constraints && constraints[axis] || {};
        if (dragSnapToOrigin) transition = {
          min: 0,
          max: 0
        };
        /**
         * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
         * of spring animations so we should look into adding a disable spring option to `inertia`.
         * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
         * using the value of `dragElastic`.
         */
        var bounceStiffness = dragElastic ? 200 : 1000000;
        var bounceDamping = dragElastic ? 40 : 10000000;
        var inertia = _objectSpread2(_objectSpread2({
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness: bounceStiffness,
          bounceDamping: bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10
        }, dragTransition), transition);
        // If we're not animating on an externally-provided `MotionValue` we can use the
        // component's animation controls which will handle interactions with whileHover (etc),
        // otherwise we just have to animate the `MotionValue` itself.
        return _this3.startAxisValueAnimation(axis, inertia);
      });
      // Run all animations and then resolve the new drag constraints.
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
  }, {
    key: "startAxisValueAnimation",
    value: function startAxisValueAnimation(axis, transition) {
      var axisValue = this.getAxisMotionValue(axis);
      return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement));
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var _this4 = this;
      eachAxis(function (axis) {
        return _this4.getAxisMotionValue(axis).stop();
      });
    }
  }, {
    key: "pauseAnimation",
    value: function pauseAnimation() {
      var _this5 = this;
      eachAxis(function (axis) {
        var _a;
        return (_a = _this5.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
      });
    }
  }, {
    key: "getAnimationState",
    value: function getAnimationState(axis) {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
  }, {
    key: "getAxisMotionValue",
    value: function getAxisMotionValue(axis) {
      var dragKey = "_drag" + axis.toUpperCase();
      var props = this.visualElement.getProps();
      var externalMotionValue = props[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
  }, {
    key: "snapToCursor",
    value: function snapToCursor(point) {
      var _this6 = this;
      eachAxis(function (axis) {
        var _this6$getProps = _this6.getProps(),
          drag = _this6$getProps.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, _this6.currentDirection)) return;
        var projection = _this6.visualElement.projection;
        var axisValue = _this6.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          var _projection$layout$la = projection.layout.layoutBox[axis],
            min = _projection$layout$la.min,
            max = _projection$layout$la.max;
          axisValue.set(point[axis] - mixNumber$1(min, max, 0.5));
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
  }, {
    key: "scalePositionWithinConstraints",
    value: function scalePositionWithinConstraints() {
      var _this7 = this;
      if (!this.visualElement.current) return;
      var _this$getProps11 = this.getProps(),
        drag = _this$getProps11.drag,
        dragConstraints = _this$getProps11.dragConstraints;
      var projection = this.visualElement.projection;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
      /**
       * Stop current animations as there can be visual glitching if we try to do
       * this mid-animation
       */
      this.stopAnimation();
      /**
       * Record the relative position of the dragged element relative to the
       * constraints box and save as a progress value.
       */
      var boxProgress = {
        x: 0,
        y: 0
      };
      eachAxis(function (axis) {
        var axisValue = _this7.getAxisMotionValue(axis);
        if (axisValue) {
          var latest = axisValue.get();
          boxProgress[axis] = calcOrigin({
            min: latest,
            max: latest
          }, _this7.constraints[axis]);
        }
      });
      /**
       * Update the layout of this element and resolve the latest drag constraints
       */
      var _this$visualElement$g = this.visualElement.getProps(),
        transformTemplate = _this$visualElement$g.transformTemplate;
      this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
      this.resolveConstraints();
      /**
       * For each axis, calculate the current progress of the layout axis
       * within the new constraints.
       */
      eachAxis(function (axis) {
        if (!shouldDrag(axis, drag, null)) return;
        /**
         * Calculate a new transform based on the previous box progress
         */
        var axisValue = _this7.getAxisMotionValue(axis);
        var _this7$constraints$ax = _this7.constraints[axis],
          min = _this7$constraints$ax.min,
          max = _this7$constraints$ax.max;
        axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
      });
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this8 = this;
      if (!this.visualElement.current) return;
      elementDragControls.set(this.visualElement, this);
      var element = this.visualElement.current;
      /**
       * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
       */
      var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
        var _this8$getProps = _this8.getProps(),
          drag = _this8$getProps.drag,
          _this8$getProps$dragL = _this8$getProps.dragListener,
          dragListener = _this8$getProps$dragL === void 0 ? true : _this8$getProps$dragL;
        drag && dragListener && _this8.start(event);
      });
      var measureDragConstraints = function measureDragConstraints() {
        var _this8$getProps2 = _this8.getProps(),
          dragConstraints = _this8$getProps2.dragConstraints;
        if (isRefObject(dragConstraints)) {
          _this8.constraints = _this8.resolveRefConstraints();
        }
      };
      var projection = this.visualElement.projection;
      var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
      }
      measureDragConstraints();
      /**
       * Attach a window resize listener to scale the draggable target within its defined
       * constraints as the window resizes.
       */
      var stopResizeListener = addDomEvent(window, "resize", function () {
        return _this8.scalePositionWithinConstraints();
      });
      /**
       * If the element's layout changes, calculate the delta and apply that to
       * the drag gesture's origin point.
       */
      var stopLayoutUpdateListener = projection.addEventListener("didUpdate", function (_ref2) {
        var delta = _ref2.delta,
          hasLayoutChanged = _ref2.hasLayoutChanged;
        if (_this8.isDragging && hasLayoutChanged) {
          eachAxis(function (axis) {
            var motionValue = _this8.getAxisMotionValue(axis);
            if (!motionValue) return;
            _this8.originPoint[axis] += delta[axis].translate;
            motionValue.set(motionValue.get() + delta[axis].translate);
          });
          _this8.visualElement.render();
        }
      });
      return function () {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
        stopLayoutUpdateListener && stopLayoutUpdateListener();
      };
    }
  }, {
    key: "getProps",
    value: function getProps() {
      var props = this.visualElement.getProps();
      var _props$drag = props.drag,
        drag = _props$drag === void 0 ? false : _props$drag,
        _props$dragDirectionL = props.dragDirectionLock,
        dragDirectionLock = _props$dragDirectionL === void 0 ? false : _props$dragDirectionL,
        _props$dragPropagatio = props.dragPropagation,
        dragPropagation = _props$dragPropagatio === void 0 ? false : _props$dragPropagatio,
        _props$dragConstraint = props.dragConstraints,
        dragConstraints = _props$dragConstraint === void 0 ? false : _props$dragConstraint,
        _props$dragElastic = props.dragElastic,
        dragElastic = _props$dragElastic === void 0 ? defaultElastic : _props$dragElastic,
        _props$dragMomentum = props.dragMomentum,
        dragMomentum = _props$dragMomentum === void 0 ? true : _props$dragMomentum;
      return _objectSpread2(_objectSpread2({}, props), {}, {
        drag: drag,
        dragDirectionLock: dragDirectionLock,
        dragPropagation: dragPropagation,
        dragConstraints: dragConstraints,
        dragElastic: dragElastic,
        dragMomentum: dragMomentum
      });
    }
  }]);
}();
function shouldDrag(direction, drag, currentDirection) {
  return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset) {
  var lockThreshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

var DragGesture = /*#__PURE__*/function (_Feature) {
  function DragGesture(node) {
    var _this;
    _classCallCheck(this, DragGesture);
    _this = _callSuper(this, DragGesture, [node]);
    _this.removeGroupControls = noop;
    _this.removeListeners = noop;
    _this.controls = new VisualElementDragControls(node);
    return _this;
  }
  _inherits(DragGesture, _Feature);
  return _createClass(DragGesture, [{
    key: "mount",
    value: function mount() {
      // If we've been provided a DragControls for manual control over the drag gesture,
      // subscribe this component to it on mount.
      var _this$node$getProps = this.node.getProps(),
        dragControls = _this$node$getProps.dragControls;
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
      this.removeListeners = this.controls.addListeners() || noop;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.removeGroupControls();
      this.removeListeners();
    }
  }]);
}(Feature);

var asyncHandler = function asyncHandler(handler) {
  return function (event, info) {
    if (handler) {
      handler(event, info);
    }
  };
};
var PanGesture = /*#__PURE__*/function (_Feature) {
  function PanGesture() {
    var _this;
    _classCallCheck(this, PanGesture);
    _this = _callSuper(this, PanGesture, arguments);
    _this.removePointerDownListener = noop;
    return _this;
  }
  _inherits(PanGesture, _Feature);
  return _createClass(PanGesture, [{
    key: "onPointerDown",
    value: function onPointerDown(pointerDownEvent) {
      this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: getContextWindow(this.node)
      });
    }
  }, {
    key: "createPanHandlers",
    value: function createPanHandlers() {
      var _this2 = this;
      var _this$node$getProps = this.node.getProps(),
        onPanSessionStart = _this$node$getProps.onPanSessionStart,
        onPanStart = _this$node$getProps.onPanStart,
        onPan = _this$node$getProps.onPan,
        onPanEnd = _this$node$getProps.onPanEnd;
      return {
        onSessionStart: asyncHandler(onPanSessionStart),
        onStart: asyncHandler(onPanStart),
        onMove: onPan,
        onEnd: function onEnd(event, info) {
          delete _this2.session;
          if (onPanEnd) onPanEnd(event, info);
        }
      };
    }
  }, {
    key: "mount",
    value: function mount() {
      var _this3 = this;
      this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", function (event) {
        return _this3.onPointerDown(event);
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.removePointerDownListener();
      this.session && this.session.end();
    }
  }]);
}(Feature);

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
  var context = React.useContext(PresenceContext);
  if (context === null) return [true, null];
  var isPresent = context.isPresent,
    onExitComplete = context.onExitComplete,
    register = context.register;
  // It's safe to call the following hooks conditionally (after an early return) because the context will always
  // either be null or non-null for the lifespan of the component.
  var id = React.useId();
  React.useEffect(function () {
    return register(id);
  }, []);
  var safeToRemove = function safeToRemove() {
    return onExitComplete && onExitComplete(id);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
var correctBorderRadius = {
  correct: function correct(latest, node) {
    if (!node.target) return latest;
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y, "%");
  }
};

var correctBoxShadow = {
  correct: function correct(latest, _ref) {
    var treeScale = _ref.treeScale,
      projectionDelta = _ref.projectionDelta;
    var original = latest;
    var shadow = complex.parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5) return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = mixNumber$1(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

var MeasureLayoutWithContext = /*#__PURE__*/function (_React__default$Compo) {
  function MeasureLayoutWithContext() {
    _classCallCheck(this, MeasureLayoutWithContext);
    return _callSuper(this, MeasureLayoutWithContext, arguments);
  }
  _inherits(MeasureLayoutWithContext, _React__default$Compo);
  return _createClass(MeasureLayoutWithContext, [{
    key: "componentDidMount",
    value:
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    function componentDidMount() {
      var _this = this;
      var _this$props = this.props,
        visualElement = _this$props.visualElement,
        layoutGroup = _this$props.layoutGroup,
        switchLayoutGroup = _this$props.switchLayoutGroup,
        layoutId = _this$props.layoutId;
      var projection = visualElement.projection;
      addScaleCorrector(defaultScaleCorrectors);
      if (projection) {
        if (layoutGroup.group) layoutGroup.group.add(projection);
        if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
          switchLayoutGroup.register(projection);
        }
        projection.root.didUpdate();
        projection.addEventListener("animationComplete", function () {
          _this.safeToRemove();
        });
        projection.setOptions(_objectSpread2(_objectSpread2({}, projection.options), {}, {
          onExitComplete: function onExitComplete() {
            return _this.safeToRemove();
          }
        }));
      }
      globalProjectionState.hasEverUpdated = true;
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var _this2 = this;
      var _this$props2 = this.props,
        layoutDependency = _this$props2.layoutDependency,
        visualElement = _this$props2.visualElement,
        drag = _this$props2.drag,
        isPresent = _this$props2.isPresent;
      var projection = visualElement.projection;
      if (!projection) return null;
      /**
       * TODO: We use this data in relegate to determine whether to
       * promote a previous element. There's no guarantee its presence data
       * will have updated by this point - if a bug like this arises it will
       * have to be that we markForRelegation and then find a new lead some other way,
       * perhaps in didUpdate
       */
      projection.isPresent = isPresent;
      if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          /**
           * If there's another stack member taking over from this one,
           * it's in charge of the exit animation and therefore should
           * be in charge of the safe to remove. Otherwise we call it here.
           */
          frame.postRender(function () {
            var stack = projection.getStack();
            if (!stack || !stack.members.length) {
              _this2.safeToRemove();
            }
          });
        }
      }
      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;
      var projection = this.props.visualElement.projection;
      if (projection) {
        projection.root.didUpdate();
        microtask.postRender(function () {
          if (!projection.currentAnimation && projection.isLead()) {
            _this3.safeToRemove();
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
        visualElement = _this$props3.visualElement,
        layoutGroup = _this$props3.layoutGroup,
        promoteContext = _this$props3.switchLayoutGroup;
      var projection = visualElement.projection;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
        if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
      }
    }
  }, {
    key: "safeToRemove",
    value: function safeToRemove() {
      var safeToRemove = this.props.safeToRemove;
      safeToRemove && safeToRemove();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(React.Component);
function MeasureLayout(props) {
  var _usePresence = usePresence(),
    _usePresence2 = _slicedToArray(_usePresence, 2),
    isPresent = _usePresence2[0],
    safeToRemove = _usePresence2[1];
  var layoutGroup = React.useContext(LayoutGroupContext);
  return /*#__PURE__*/React.createElement(MeasureLayoutWithContext, _objectSpread2(_objectSpread2({}, props), {}, {
    layoutGroup: layoutGroup,
    switchLayoutGroup: React.useContext(SwitchLayoutGroupContext),
    isPresent: isPresent,
    safeToRemove: safeToRemove
  }));
}
var defaultScaleCorrectors = {
  borderRadius: _objectSpread2(_objectSpread2({}, correctBorderRadius), {}, {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function asNumber(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function isPx(value) {
  return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber$1(0,
    // TODO Reinstate this if only child
    lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
    target.opacityExit = mixNumber$1(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
  } else if (isOnlyMember) {
    target.opacity = mixNumber$1(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
  }
  /**
   * Mix border radius
   */
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === undefined && leadRadius === undefined) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  /**
   * Mix rotation
   */
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return function (p) {
    // Could replace ifs with clamp
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(progress(min, max, p));
  };
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale, originPoint);
  if (boxScale !== undefined) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis) {
  var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
  var boxScale = arguments.length > 4 ? arguments[4] : undefined;
  var originAxis = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : axis;
  var sourceAxis = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : axis;
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  var originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _ref, origin, sourceAxis) {
  var _ref2 = _slicedToArray(_ref, 3),
    key = _ref2[0],
    scaleKey = _ref2[1],
    originKey = _ref2[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function boxEqualsRounded(a, b) {
  return Math.round(a.x.min) === Math.round(b.x.min) && Math.round(a.x.max) === Math.round(b.x.max) && Math.round(a.y.min) === Math.round(b.y.min) && Math.round(a.y.max) === Math.round(b.y.max);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

var NodeStack = /*#__PURE__*/function () {
  function NodeStack() {
    _classCallCheck(this, NodeStack);
    this.members = [];
  }
  return _createClass(NodeStack, [{
    key: "add",
    value: function add(node) {
      addUniqueItem(this.members, node);
      node.scheduleRender();
    }
  }, {
    key: "remove",
    value: function remove(node) {
      removeItem(this.members, node);
      if (node === this.prevLead) {
        this.prevLead = undefined;
      }
      if (node === this.lead) {
        var prevLead = this.members[this.members.length - 1];
        if (prevLead) {
          this.promote(prevLead);
        }
      }
    }
  }, {
    key: "relegate",
    value: function relegate(node) {
      var indexOfNode = this.members.findIndex(function (member) {
        return node === member;
      });
      if (indexOfNode === 0) return false;
      /**
       * Find the next projection node that is present
       */
      var prevLead;
      for (var i = indexOfNode; i >= 0; i--) {
        var member = this.members[i];
        if (member.isPresent !== false) {
          prevLead = member;
          break;
        }
      }
      if (prevLead) {
        this.promote(prevLead);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "promote",
    value: function promote(node, preserveFollowOpacity) {
      var prevLead = this.lead;
      if (node === prevLead) return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.instance && prevLead.scheduleRender();
        node.scheduleRender();
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity) {
          node.resumeFrom.preserveOpacity = true;
        }
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root && node.root.isUpdating) {
          node.isLayoutDirty = true;
        }
        var crossfade = node.options.crossfade;
        if (crossfade === false) {
          prevLead.hide();
        }
        /**
         * TODO:
         *   - Test border radius when previous node was deleted
         *   - boxShadow mixing
         *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
         *   - Shared between element A in transformed container and element B (transform stays the same or changes)
         *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
         * ---
         *   - Crossfade opacity of root nodes
         *   - layoutId changes after animation
         *   - layoutId changes mid animation
         */
      }
    }
  }, {
    key: "exitAnimationComplete",
    value: function exitAnimationComplete() {
      this.members.forEach(function (node) {
        var options = node.options,
          resumingFrom = node.resumingFrom;
        options.onExitComplete && options.onExitComplete();
        if (resumingFrom) {
          resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
        }
      });
    }
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      this.members.forEach(function (node) {
        node.instance && node.scheduleRender(false);
      });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
  }, {
    key: "removeLeadSnapshot",
    value: function removeLeadSnapshot() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = undefined;
      }
    }
  }]);
}();

function buildProjectionTransform(delta, treeScale, latestTransform) {
  var transform = "";
  /**
   * The translations we use to calculate are always relative to the viewport coordinate space.
   * But when we apply scales, we also scale the coordinate space of an element and its children.
   * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
   * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
   */
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, ").concat(zTranslate, "px) ");
  }
  /**
   * Apply scale correction for the tree transform.
   * This will apply scale to the screen-orientated axes.
   */
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
  }
  if (latestTransform) {
    var rotate = latestTransform.rotate,
      rotateX = latestTransform.rotateX,
      rotateY = latestTransform.rotateY,
      skewX = latestTransform.skewX,
      skewY = latestTransform.skewY;
    if (rotate) transform += "rotate(".concat(rotate, "deg) ");
    if (rotateX) transform += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY) transform += "rotateY(".concat(rotateY, "deg) ");
    if (skewX) transform += "skewX(".concat(skewX, "deg) ");
    if (skewY) transform += "skewY(".concat(skewY, "deg) ");
  }
  /**
   * Apply scale to match the size of the element to the size we want it.
   * This will apply scale to the element-orientated axes.
   */
  var elementScaleX = delta.x.scale * treeScale.x;
  var elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
  }
  return transform || "none";
}

var compareByDepth = function compareByDepth(a, b) {
  return a.depth - b.depth;
};

var FlatTree = /*#__PURE__*/function () {
  function FlatTree() {
    _classCallCheck(this, FlatTree);
    this.children = [];
    this.isDirty = false;
  }
  return _createClass(FlatTree, [{
    key: "add",
    value: function add(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    }
  }, {
    key: "remove",
    value: function remove(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    }
  }]);
}();

/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
  var start = time.now();
  var checkElapsed = function checkElapsed(_ref) {
    var timestamp = _ref.timestamp;
    var elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return function () {
    return cancelFrame(checkElapsed);
  };
}

function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

function animateSingleValue(value, keyframes, options) {
  var motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
  return motionValue$1.animation;
}

var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = {
  visibility: "hidden"
};
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
var animationTarget = 1000;
var id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
var projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  var latestValues = visualElement.latestValues;
  // Record the distorting transform and then temporarily set it to 0
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function createProjectionNode(_ref) {
  var attachResizeListener = _ref.attachResizeListener,
    defaultParent = _ref.defaultParent,
    measureScroll = _ref.measureScroll,
    checkIsScrollRoot = _ref.checkIsScrollRoot,
    _resetTransform = _ref.resetTransform;
  return /*#__PURE__*/function () {
    function ProjectionNode() {
      var _this = this;
      var latestValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      _classCallCheck(this, ProjectionNode);
      /**
       * A unique ID generated for every projection node.
       */
      this.id = id++;
      /**
       * An id that represents a unique session instigated by startUpdate.
       */
      this.animationId = 0;
      /**
       * A Set containing all this component's children. This is used to iterate
       * through the children.
       *
       * TODO: This could be faster to iterate as a flat array stored on the root node.
       */
      this.children = new Set();
      /**
       * Options for the node. We use this to configure what kind of layout animations
       * we should perform (if any).
       */
      this.options = {};
      /**
       * We use this to detect when its safe to shut down part of a projection tree.
       * We have to keep projecting children for scale correction and relative projection
       * until all their parents stop performing layout animations.
       */
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      /**
       * Flag to true if we think this layout has been changed. We can't always know this,
       * currently we set it to true every time a component renders, or if it has a layoutDependency
       * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
       * and if one node is dirtied, they all are.
       */
      this.isLayoutDirty = false;
      /**
       * Flag to true if we think the projection calculations for this node needs
       * recalculating as a result of an updated transform or layout animation.
       */
      this.isProjectionDirty = false;
      /**
       * Flag to true if the layout *or* transform has changed. This then gets propagated
       * throughout the projection tree, forcing any element below to recalculate on the next frame.
       */
      this.isSharedProjectionDirty = false;
      /**
       * Flag transform dirty. This gets propagated throughout the whole tree but is only
       * respected by shared nodes.
       */
      this.isTransformDirty = false;
      /**
       * Block layout updates for instant layout transitions throughout the tree.
       */
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      /**
       * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
       * call.
       */
      this.isUpdating = false;
      /**
       * If this is an SVG element we currently disable projection transforms
       */
      this.isSVG = false;
      /**
       * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
       * its projection styles.
       */
      this.needsReset = false;
      /**
       * Flags whether this node should have its transform reset prior to measuring.
       */
      this.shouldResetTransform = false;
      /**
       * An object representing the calculated contextual/accumulated/tree scale.
       * This will be used to scale calculcated projection transforms, as these are
       * calculated in screen-space but need to be scaled for elements to layoutly
       * make it to their calculated destinations.
       *
       * TODO: Lazy-init
       */
      this.treeScale = {
        x: 1,
        y: 1
      };
      /**
       *
       */
      this.eventHandlers = new Map();
      this.hasTreeAnimated = false;
      // Note: Currently only running on root node
      this.updateScheduled = false;
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = function () {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      /**
       * This is a multi-step process as shared nodes might be of different depths. Nodes
       * are sorted by depth order, so we need to resolve the entire tree before moving to
       * the next step.
       */
      this.updateProjection = function () {
        _this.projectionUpdateScheduled = false;
        /**
         * Reset debug counts. Manually resetting rather than creating a new
         * object each frame.
         */
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        _this.nodes.forEach(propagateDirtyNodes);
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
        _this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      /**
       * Shared layout
       */
      // TODO Only running on root node
      this.sharedNodes = new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [].concat(_toConsumableArray(parent.path), [parent]) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    return _createClass(ProjectionNode, [{
      key: "addEventListener",
      value: function addEventListener(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      }
    }, {
      key: "notifyListeners",
      value: function notifyListeners(name) {
        var subscriptionManager = this.eventHandlers.get(name);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        subscriptionManager && subscriptionManager.notify.apply(subscriptionManager, args);
      }
    }, {
      key: "hasListeners",
      value: function hasListeners(name) {
        return this.eventHandlers.has(name);
      }
      /**
       * Lifecycles
       */
    }, {
      key: "mount",
      value: function mount(instance) {
        var _this2 = this;
        var isLayoutDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root.hasTreeAnimated;
        if (this.instance) return;
        this.isSVG = isSVGElement(instance);
        this.instance = instance;
        var _this$options = this.options,
          layoutId = _this$options.layoutId,
          layout = _this$options.layout,
          visualElement = _this$options.visualElement;
        if (visualElement && !visualElement.current) {
          visualElement.mount(instance);
        }
        this.root.nodes.add(this);
        this.parent && this.parent.children.add(this);
        if (isLayoutDirty && (layout || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          var cancelDelay;
          var resizeUnblockUpdate = function resizeUnblockUpdate() {
            return _this2.root.updateBlockedByResize = false;
          };
          attachResizeListener(instance, function () {
            _this2.root.updateBlockedByResize = true;
            cancelDelay && cancelDelay();
            cancelDelay = delay(resizeUnblockUpdate, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              _this2.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        // Only register the handler if it requires layout animation
        if (this.options.animate !== false && visualElement && (layoutId || layout)) {
          this.addEventListener("didUpdate", function (_ref2) {
            var delta = _ref2.delta,
              hasLayoutChanged = _ref2.hasLayoutChanged,
              hasRelativeTargetChanged = _ref2.hasRelativeTargetChanged,
              newLayout = _ref2.layout;
            if (_this2.isTreeAnimationBlocked()) {
              _this2.target = undefined;
              _this2.relativeTarget = undefined;
              return;
            }
            // TODO: Check here if an animation exists
            var layoutTransition = _this2.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
            var _visualElement$getPro = visualElement.getProps(),
              onLayoutAnimationStart = _visualElement$getPro.onLayoutAnimationStart,
              onLayoutAnimationComplete = _visualElement$getPro.onLayoutAnimationComplete;
            /**
             * The target layout of the element might stay the same,
             * but its position relative to its parent has changed.
             */
            var targetChanged = !_this2.targetLayout || !boxEqualsRounded(_this2.targetLayout, newLayout) || hasRelativeTargetChanged;
            /**
             * If the layout hasn't seemed to have changed, it might be that the
             * element is visually in the same place in the document but its position
             * relative to its parent has indeed changed. So here we check for that.
             */
            var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
            if (_this2.options.layoutRoot || _this2.resumeFrom && _this2.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this2.currentAnimation)) {
              if (_this2.resumeFrom) {
                _this2.resumingFrom = _this2.resumeFrom;
                _this2.resumingFrom.resumingFrom = undefined;
              }
              _this2.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
              var animationOptions = _objectSpread2(_objectSpread2({}, getValueTransition(layoutTransition, "layout")), {}, {
                onPlay: onLayoutAnimationStart,
                onComplete: onLayoutAnimationComplete
              });
              if (visualElement.shouldReduceMotion || _this2.options.layoutRoot) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              _this2.startAnimation(animationOptions);
            } else {
              /**
               * If the layout hasn't changed and we have an animation that hasn't started yet,
               * finish it immediately. Otherwise it will be animating from a location
               * that was probably never commited to screen and look like a jumpy box.
               */
              if (!hasLayoutChanged) {
                finishAnimation(_this2);
              }
              if (_this2.isLead() && _this2.options.onExitComplete) {
                _this2.options.onExitComplete();
              }
            }
            _this2.targetLayout = newLayout;
          });
        }
      }
    }, {
      key: "unmount",
      value: function unmount() {
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        var stack = this.getStack();
        stack && stack.remove(this);
        this.parent && this.parent.children["delete"](this);
        this.instance = undefined;
        cancelFrame(this.updateProjection);
      }
      // only on the root
    }, {
      key: "blockUpdate",
      value: function blockUpdate() {
        this.updateManuallyBlocked = true;
      }
    }, {
      key: "unblockUpdate",
      value: function unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
    }, {
      key: "isUpdateBlocked",
      value: function isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
    }, {
      key: "isTreeAnimationBlocked",
      value: function isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      // Note: currently only running on root node
    }, {
      key: "startUpdate",
      value: function startUpdate() {
        if (this.isUpdateBlocked()) return;
        this.isUpdating = true;
        this.nodes && this.nodes.forEach(resetSkewAndRotation);
        this.animationId++;
      }
    }, {
      key: "getTransformTemplate",
      value: function getTransformTemplate() {
        var visualElement = this.options.visualElement;
        return visualElement && visualElement.getProps().transformTemplate;
      }
    }, {
      key: "willUpdate",
      value: function willUpdate() {
        var shouldNotifyListeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.shouldResetTransform = true;
          node.updateScroll("snapshot");
          if (node.options.layoutRoot) {
            node.willUpdate(false);
          }
        }
        var _this$options2 = this.options,
          layoutId = _this$options2.layoutId,
          layout = _this$options2.layout;
        if (layoutId === undefined && !layout) return;
        var transformTemplate = this.getTransformTemplate();
        this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }
    }, {
      key: "update",
      value: function update() {
        this.updateScheduled = false;
        var updateWasBlocked = this.isUpdateBlocked();
        // When doing an instant transition, we skip the layout update,
        // but should still clean up the measurements so that the next
        // snapshot could be taken correctly.
        if (updateWasBlocked) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (!this.isUpdating) {
          this.nodes.forEach(clearIsLayoutDirty);
        }
        this.isUpdating = false;
        /**
         * Write
         */
        if (window.HandoffCancelAllAnimations) {
          window.HandoffCancelAllAnimations();
        }
        this.nodes.forEach(resetTransformStyle);
        /**
         * Read ==================
         */
        // Update layout measurements of updated children
        this.nodes.forEach(updateLayout);
        /**
         * Write
         */
        // Notify listeners that the layout is updated
        this.nodes.forEach(notifyLayoutUpdate);
        this.clearAllSnapshots();
        /**
         * Manually flush any pending updates. Ideally
         * we could leave this to the following requestAnimationFrame but this seems
         * to leave a flash of incorrectly styled content.
         */
        var now = time.now();
        frameData.delta = clamp(0, 1000 / 60, now - frameData.timestamp);
        frameData.timestamp = now;
        frameData.isProcessing = true;
        steps.update.process(frameData);
        steps.preRender.process(frameData);
        steps.render.process(frameData);
        frameData.isProcessing = false;
      }
    }, {
      key: "didUpdate",
      value: function didUpdate() {
        var _this3 = this;
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          microtask.read(function () {
            return _this3.update();
          });
        }
      }
    }, {
      key: "clearAllSnapshots",
      value: function clearAllSnapshots() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      }
    }, {
      key: "scheduleUpdateProjection",
      value: function scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frame.preRender(this.updateProjection, false, true);
        }
      }
    }, {
      key: "scheduleCheckAfterUnmount",
      value: function scheduleCheckAfterUnmount() {
        var _this4 = this;
        /**
         * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
         * we manually call didUpdate to give a chance to the siblings to animate.
         * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
         */
        frame.postRender(function () {
          if (_this4.isLayoutDirty) {
            _this4.root.didUpdate();
          } else {
            _this4.root.checkUpdateFailed();
          }
        });
      }
      /**
       * Update measurements
       */
    }, {
      key: "updateSnapshot",
      value: function updateSnapshot() {
        if (this.snapshot || !this.instance) return;
        this.snapshot = this.measure();
      }
    }, {
      key: "updateLayout",
      value: function updateLayout() {
        if (!this.instance) return;
        // TODO: Incorporate into a forwarded scroll offset
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        /**
         * When a node is mounted, it simply resumes from the prevLead's
         * snapshot instead of taking a new one, but the ancestors scroll
         * might have updated while the prevLead is unmounted. We need to
         * update the scroll again to make sure the layout we measure is
         * up to date.
         */
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            node.updateScroll();
          }
        }
        var prevLayout = this.layout;
        this.layout = this.measure(false);
        this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = undefined;
        this.notifyListeners("measure", this.layout.layoutBox);
        var visualElement = this.options.visualElement;
        visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
      }
    }, {
      key: "updateScroll",
      value: function updateScroll() {
        var phase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "measure";
        var needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
          needsMeasurement = false;
        }
        if (needsMeasurement) {
          this.scroll = {
            animationId: this.root.animationId,
            phase: phase,
            isRoot: checkIsScrollRoot(this.instance),
            offset: measureScroll(this.instance)
          };
        }
      }
    }, {
      key: "resetTransform",
      value: function resetTransform() {
        if (!_resetTransform) return;
        var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
        var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        var transformTemplate = this.getTransformTemplate();
        var transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
        var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          _resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
    }, {
      key: "measure",
      value: function measure() {
        var removeTransform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var pageBox = this.measurePageBox();
        var layoutBox = this.removeElementScroll(pageBox);
        /**
         * Measurements taken during the pre-render stage
         * still have transforms applied so we remove them
         * via calculation.
         */
        if (removeTransform) {
          layoutBox = this.removeTransform(layoutBox);
        }
        roundBox(layoutBox);
        return {
          animationId: this.root.animationId,
          measuredBox: pageBox,
          layoutBox: layoutBox,
          latestValues: {},
          source: this.id
        };
      }
    }, {
      key: "measurePageBox",
      value: function measurePageBox() {
        var visualElement = this.options.visualElement;
        if (!visualElement) return createBox();
        var box = visualElement.measureViewportBox();
        // Remove viewport scroll to give page-relative coordinates
        var scroll = this.root.scroll;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
        return box;
      }
    }, {
      key: "removeElementScroll",
      value: function removeElementScroll(box) {
        var boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        /**
         * Performance TODO: Keep a cumulative scroll offset down the tree
         * rather than loop back up the path.
         */
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          var scroll = node.scroll,
            options = node.options;
          if (node !== this.root && scroll && options.layoutScroll) {
            /**
             * If this is a new scroll root, we want to remove all previous scrolls
             * from the viewport box.
             */
            if (scroll.isRoot) {
              copyBoxInto(boxWithoutScroll, box);
              var rootScroll = this.root.scroll;
              /**
               * Undo the application of page scroll that was originally added
               * to the measured bounding box.
               */
              if (rootScroll) {
                translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
                translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
              }
            }
            translateAxis(boxWithoutScroll.x, scroll.offset.x);
            translateAxis(boxWithoutScroll.y, scroll.offset.y);
          }
        }
        return boxWithoutScroll;
      }
    }, {
      key: "applyTransform",
      value: function applyTransform(box) {
        var transformOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var withTransforms = createBox();
        copyBoxInto(withTransforms, box);
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(withTransforms, {
              x: -node.scroll.offset.x,
              y: -node.scroll.offset.y
            });
          }
          if (!hasTransform(node.latestValues)) continue;
          transformBox(withTransforms, node.latestValues);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues);
        }
        return withTransforms;
      }
    }, {
      key: "removeTransform",
      value: function removeTransform(box) {
        var boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          if (!node.instance) continue;
          if (!hasTransform(node.latestValues)) continue;
          hasScale(node.latestValues) && node.updateSnapshot();
          var sourceBox = createBox();
          var nodeBox = node.measurePageBox();
          copyBoxInto(sourceBox, nodeBox);
          removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      }
    }, {
      key: "setTargetDelta",
      value: function setTargetDelta(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        this.options = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), options), {}, {
          crossfade: options.crossfade !== undefined ? options.crossfade : true
        });
      }
    }, {
      key: "clearMeasurements",
      value: function clearMeasurements() {
        this.scroll = undefined;
        this.layout = undefined;
        this.snapshot = undefined;
        this.prevTransformTemplateValue = undefined;
        this.targetDelta = undefined;
        this.target = undefined;
        this.isLayoutDirty = false;
      }
    }, {
      key: "forceRelativeParentToResolveTarget",
      value: function forceRelativeParentToResolveTarget() {
        if (!this.relativeParent) return;
        /**
         * If the parent target isn't up-to-date, force it to update.
         * This is an unfortunate de-optimisation as it means any updating relative
         * projection will cause all the relative parents to recalculate back
         * up the tree.
         */
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
    }, {
      key: "resolveTargetDelta",
      value: function resolveTargetDelta() {
        var forceRecalculation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _a;
        /**
         * Once the dirty status of nodes has been spread through the tree, we also
         * need to check if we have a shared node of a different depth that has itself
         * been dirtied.
         */
        var lead = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
        this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
        var isShared = Boolean(this.resumingFrom) || this !== lead;
        /**
         * We don't use transform for this step of processing so we don't
         * need to check whether any nodes have changed transform.
         */
        var canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget);
        if (canSkip) return;
        var _this$options3 = this.options,
          layout = _this$options3.layout,
          layoutId = _this$options3.layoutId;
        /**
         * If we have no layout, we can't perform projection, so early return
         */
        if (!this.layout || !(layout || layoutId)) return;
        this.resolvedRelativeTargetAt = frameData.timestamp;
        /**
         * If we don't have a targetDelta but do have a layout, we can attempt to resolve
         * a relativeParent. This will allow a component to perform scale correction
         * even if no animation has started.
         */
        if (!this.targetDelta && !this.relativeTarget) {
          var relativeParent = this.getClosestProjectingParent();
          if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
            this.relativeParent = relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = undefined;
          }
        }
        /**
         * If we have no relative target or no target delta our target isn't valid
         * for this frame.
         */
        if (!this.relativeTarget && !this.targetDelta) return;
        /**
         * Lazy-init target data structure
         */
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        /**
         * If we've got a relative box for this component, resolve it into a target relative to the parent.
         */
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
          /**
           * If we've only got a targetDelta, resolve it into a target
           */
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            // TODO: This is creating a new object every frame
            this.target = this.applyTransform(this.layout.layoutBox);
          } else {
            copyBoxInto(this.target, this.layout.layoutBox);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          /**
           * If no target, use own layout as target
           */
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        /**
         * If we've been told to attempt to resolve a relative target, do so.
         */
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          var _relativeParent = this.getClosestProjectingParent();
          if (_relativeParent && Boolean(_relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !_relativeParent.options.layoutScroll && _relativeParent.target && this.animationProgress !== 1) {
            this.relativeParent = _relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.target, _relativeParent.target);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = undefined;
          }
        }
        /**
         * Increase debug counter for resolved target deltas
         */
        projectionFrameData.resolvedTargetDeltas++;
      }
    }, {
      key: "getClosestProjectingParent",
      value: function getClosestProjectingParent() {
        if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
          return undefined;
        }
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
    }, {
      key: "isProjecting",
      value: function isProjecting() {
        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
    }, {
      key: "calcProjection",
      value: function calcProjection() {
        var _a;
        var lead = this.getLead();
        var isShared = Boolean(this.resumingFrom) || this !== lead;
        var canSkip = true;
        /**
         * If this is a normal layout animation and neither this node nor its nearest projecting
         * is dirty then we can't skip.
         */
        if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
          canSkip = false;
        }
        /**
         * If this is a shared layout animation and this node's shared projection is dirty then
         * we can't skip.
         */
        if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          canSkip = false;
        }
        /**
         * If we have resolved the target this frame we must recalculate the
         * projection to ensure it visually represents the internal calculations.
         */
        if (this.resolvedRelativeTargetAt === frameData.timestamp) {
          canSkip = false;
        }
        if (canSkip) return;
        var _this$options4 = this.options,
          layout = _this$options4.layout,
          layoutId = _this$options4.layoutId;
        /**
         * If this section of the tree isn't animating we can
         * delete our target sources for the following frame.
         */
        this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = undefined;
        }
        if (!this.layout || !(layout || layoutId)) return;
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */
        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
        /**
         * Record previous tree scales before updating.
         */
        var prevTreeScaleX = this.treeScale.x;
        var prevTreeScaleY = this.treeScale.y;
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
        /**
         * If this layer needs to perform scale correction but doesn't have a target,
         * use the layout as the target.
         */
        if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          lead.target = lead.layout.layoutBox;
          lead.targetWithTransforms = createBox();
        }
        var target = lead.target;
        if (!target) {
          /**
           * If we don't have a target to project into, but we were previously
           * projecting, we want to remove the stored transform and schedule
           * a render to ensure the elements reflect the removed transform.
           */
          if (this.projectionTransform) {
            this.projectionDelta = createDelta();
            this.projectionTransform = "none";
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta) {
          this.projectionDelta = createDelta();
          this.projectionDeltaWithTransform = createDelta();
        }
        var prevProjectionTransform = this.projectionTransform;
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
        if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
        /**
         * Increase debug counter for recalculated projections
         */
        projectionFrameData.recalculatedProjection++;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.isVisible = false;
        // TODO: Schedule render
      }
    }, {
      key: "show",
      value: function show() {
        this.isVisible = true;
        // TODO: Schedule render
      }
    }, {
      key: "scheduleRender",
      value: function scheduleRender() {
        var notifyAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.options.scheduleRender && this.options.scheduleRender();
        if (notifyAll) {
          var stack = this.getStack();
          stack && stack.scheduleRender();
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = undefined;
        }
      }
    }, {
      key: "setAnimationOrigin",
      value: function setAnimationOrigin(delta) {
        var _this5 = this;
        var hasOnlyRelativeTargetChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var snapshot = this.snapshot;
        var snapshotLatestValues = snapshot ? snapshot.latestValues : {};
        var mixedValues = _objectSpread2({}, this.latestValues);
        var targetDelta = createDelta();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = undefined;
        }
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        var relativeLayout = createBox();
        var snapshotSource = snapshot ? snapshot.source : undefined;
        var layoutSource = this.layout ? this.layout.source : undefined;
        var isSharedLayoutAnimation = snapshotSource !== layoutSource;
        var stack = this.getStack();
        var isOnlyMember = !stack || stack.members.length <= 1;
        var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        var prevRelativeTarget;
        this.mixTargetDelta = function (latest) {
          var progress = latest / 1000;
          mixAxisDelta(targetDelta.x, delta.x, progress);
          mixAxisDelta(targetDelta.y, delta.y, progress);
          _this5.setTargetDelta(targetDelta);
          if (_this5.relativeTarget && _this5.relativeTargetOrigin && _this5.layout && _this5.relativeParent && _this5.relativeParent.layout) {
            calcRelativePosition(relativeLayout, _this5.layout.layoutBox, _this5.relativeParent.layout.layoutBox);
            mixBox(_this5.relativeTarget, _this5.relativeTargetOrigin, relativeLayout, progress);
            /**
             * If this is an unchanged relative target we can consider the
             * projection not dirty.
             */
            if (prevRelativeTarget && boxEquals(_this5.relativeTarget, prevRelativeTarget)) {
              _this5.isProjectionDirty = false;
            }
            if (!prevRelativeTarget) prevRelativeTarget = createBox();
            copyBoxInto(prevRelativeTarget, _this5.relativeTarget);
          }
          if (isSharedLayoutAnimation) {
            _this5.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, _this5.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
          }
          _this5.root.scheduleUpdateProjection();
          _this5.scheduleRender();
          _this5.animationProgress = progress;
        };
        this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
      }
    }, {
      key: "startAnimation",
      value: function startAnimation(options) {
        var _this6 = this;
        this.notifyListeners("animationStart");
        this.currentAnimation && this.currentAnimation.stop();
        if (this.resumingFrom && this.resumingFrom.currentAnimation) {
          this.resumingFrom.currentAnimation.stop();
        }
        if (this.pendingAnimation) {
          cancelFrame(this.pendingAnimation);
          this.pendingAnimation = undefined;
        }
        /**
         * Start the animation in the next frame to have a frame with progress 0,
         * where the target is the same as when the animation started, so we can
         * calculate the relative positions correctly for instant transitions.
         */
        this.pendingAnimation = frame.update(function () {
          globalProjectionState.hasAnimatedSinceResize = true;
          _this6.currentAnimation = animateSingleValue(0, animationTarget, _objectSpread2(_objectSpread2({}, options), {}, {
            onUpdate: function onUpdate(latest) {
              _this6.mixTargetDelta(latest);
              options.onUpdate && options.onUpdate(latest);
            },
            onComplete: function onComplete() {
              options.onComplete && options.onComplete();
              _this6.completeAnimation();
            }
          }));
          if (_this6.resumingFrom) {
            _this6.resumingFrom.currentAnimation = _this6.currentAnimation;
          }
          _this6.pendingAnimation = undefined;
        });
      }
    }, {
      key: "completeAnimation",
      value: function completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = undefined;
          this.resumingFrom.preserveOpacity = undefined;
        }
        var stack = this.getStack();
        stack && stack.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
        this.notifyListeners("animationComplete");
      }
    }, {
      key: "finishAnimation",
      value: function finishAnimation() {
        if (this.currentAnimation) {
          this.mixTargetDelta && this.mixTargetDelta(animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
    }, {
      key: "applyTransformsToTarget",
      value: function applyTransformsToTarget() {
        var lead = this.getLead();
        var targetWithTransforms = lead.targetWithTransforms,
          target = lead.target,
          layout = lead.layout,
          latestValues = lead.latestValues;
        if (!targetWithTransforms || !target || !layout) return;
        /**
         * If we're only animating position, and this element isn't the lead element,
         * then instead of projecting into the lead box we instead want to calculate
         * a new target that aligns the two boxes but maintains the layout shape.
         */
        if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
          target = this.target || createBox();
          var xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min;
          target.x.max = target.x.min + xLength;
          var yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min;
          target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target);
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        transformBox(targetWithTransforms, latestValues);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its layout layout
         * into the desired bounding box.
         */
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
    }, {
      key: "registerSharedNode",
      value: function registerSharedNode(layoutId, node) {
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        var stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        var config = node.options.initialPromotionConfig;
        node.promote({
          transition: config ? config.transition : undefined,
          preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
        });
      }
    }, {
      key: "isLead",
      value: function isLead() {
        var stack = this.getStack();
        return stack ? stack.lead === this : true;
      }
    }, {
      key: "getLead",
      value: function getLead() {
        var _a;
        var layoutId = this.options.layoutId;
        return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
      }
    }, {
      key: "getPrevLead",
      value: function getPrevLead() {
        var _a;
        var layoutId = this.options.layoutId;
        return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
      }
    }, {
      key: "getStack",
      value: function getStack() {
        var layoutId = this.options.layoutId;
        if (layoutId) return this.root.sharedNodes.get(layoutId);
      }
    }, {
      key: "promote",
      value: function promote() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          needsReset = _ref3.needsReset,
          transition = _ref3.transition,
          preserveFollowOpacity = _ref3.preserveFollowOpacity;
        var stack = this.getStack();
        if (stack) stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = undefined;
          this.needsReset = true;
        }
        if (transition) this.setOptions({
          transition: transition
        });
      }
    }, {
      key: "relegate",
      value: function relegate() {
        var stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      }
    }, {
      key: "resetSkewAndRotation",
      value: function resetSkewAndRotation() {
        var visualElement = this.options.visualElement;
        if (!visualElement) return;
        // If there's no detected skew or rotation values, we can early return without a forced render.
        var hasDistortingTransform = false;
        /**
         * An unrolled check for rotation values. Most elements don't have any rotation and
         * skipping the nested loop and new object creation is 50% faster.
         */
        var latestValues = visualElement.latestValues;
        if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
          hasDistortingTransform = true;
        }
        // If there's no distorting values, we don't need to do any more.
        if (!hasDistortingTransform) return;
        var resetValues = {};
        if (latestValues.z) {
          resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
        }
        // Check the skew and rotate value of all axes and reset to 0
        for (var i = 0; i < transformAxes.length; i++) {
          resetDistortingTransform("rotate".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
          resetDistortingTransform("skew".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
        }
        // Force a render of this element to apply the transform with all skews and rotations
        // set to 0.
        visualElement.render();
        // Put back all the values we reset
        for (var key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
          if (this.animationValues) {
            this.animationValues[key] = resetValues[key];
          }
        }
        // Schedule a render for the next frame. This ensures we won't visually
        // see the element with the reset rotate value applied.
        visualElement.scheduleRender();
      }
    }, {
      key: "getProjectionStyles",
      value: function getProjectionStyles(styleProp) {
        var _a, _b;
        if (!this.instance || this.isSVG) return undefined;
        if (!this.isVisible) {
          return hiddenVisibility;
        }
        var styles = {
          visibility: ""
        };
        var transformTemplate = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          styles.opacity = "";
          styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
          styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return styles;
        }
        var lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          var emptyStyles = {};
          if (this.options.layoutId) {
            emptyStyles.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
            emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return emptyStyles;
        }
        var valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          styles.transform = transformTemplate(valuesToRender, styles.transform);
        }
        var _this$projectionDelta = this.projectionDelta,
          x = _this$projectionDelta.x,
          y = _this$projectionDelta.y;
        styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
        if (lead.animationValues) {
          /**
           * If the lead component is animating, assign this either the entering/leaving
           * opacity
           */
          styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          /**
           * Or we're not animating at all, set the lead component to its layout
           * opacity and other components to hidden.
           */
          styles.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
        }
        /**
         * Apply scale correction
         */
        for (var key in scaleCorrectors) {
          if (valuesToRender[key] === undefined) continue;
          var _scaleCorrectors$key = scaleCorrectors[key],
            correct = _scaleCorrectors$key.correct,
            applyTo = _scaleCorrectors$key.applyTo;
          /**
           * Only apply scale correction to the value if we have an
           * active projection transform. Otherwise these values become
           * vulnerable to distortion if the element changes size without
           * a corresponding layout animation.
           */
          var corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
          if (applyTo) {
            var num = applyTo.length;
            for (var i = 0; i < num; i++) {
              styles[applyTo[i]] = corrected;
            }
          } else {
            styles[key] = corrected;
          }
        }
        /**
         * Disable pointer events on follow components. This is to ensure
         * that if a follow component covers a lead component it doesn't block
         * pointer events on the lead.
         */
        if (this.options.layoutId) {
          styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
        }
        return styles;
      }
    }, {
      key: "clearSnapshot",
      value: function clearSnapshot() {
        this.resumeFrom = this.snapshot = undefined;
      }
      // Only run on root
    }, {
      key: "resetTree",
      value: function resetTree() {
        this.root.nodes.forEach(function (node) {
          var _a;
          return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
        });
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      }
    }]);
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  var snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _node$layout = node.layout,
      layout = _node$layout.layoutBox,
      measuredLayout = _node$layout.measuredBox;
    var animationType = node.options.animationType;
    var isShared = snapshot.source !== node.layout.source;
    // TODO Maybe we want to also resize the layout snapshot so we don't trigger
    // animations for instance if layout="size" and an element has only changed position
    if (animationType === "size") {
      eachAxis(function (axis) {
        var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
      eachAxis(function (axis) {
        var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        var length = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        /**
         * Ensure relative target gets resized and rerendererd
         */
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
    var visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      var relativeParent = node.getClosestProjectingParent();
      /**
       * If the relativeParent is itself resuming from a different element then
       * the relative snapshot is not relavent
       */
      if (relativeParent && !relativeParent.resumeFrom) {
        var parentSnapshot = relativeParent.snapshot,
          parentLayout = relativeParent.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout,
      snapshot: snapshot,
      delta: visualDelta,
      layoutDelta: layoutDelta,
      hasLayoutChanged: hasLayoutChanged,
      hasRelativeTargetChanged: hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    var onExitComplete = node.options.onExitComplete;
    onExitComplete && onExitComplete();
  }
  /**
   * Clearing transition
   * TODO: Investigate why this transition is being passed in as {type: false } from Framer
   * and why we need it at all
   */
  node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
  /**
   * Increase debug counter for nodes encountered this frame
   */
  projectionFrameData.totalNodes++;
  if (!node.parent) return;
  /**
   * If this node isn't projecting, propagate isProjectionDirty. It will have
   * no performance impact but it will allow the next child that *is* projecting
   * but *isn't* dirty to just check its parent to see if *any* ancestor needs
   * correcting.
   */
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  /**
   * Propagate isSharedProjectionDirty and isTransformDirty
   * throughout the whole tree. A future revision can take another look at
   * this but for safety we still recalcualte shared nodes.
   */
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  var visualElement = node.options.visualElement;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = undefined;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mixNumber$1(delta.translate, 0, p);
  output.scale = mixNumber$1(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber$1(from.min, to.min, p);
  output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== undefined;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = function userAgentContains(string) {
  return typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
};
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  // Round to the nearest .5 pixels to support subpixel layouts
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}

var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function attachResizeListener(ref, notify) {
    return addDomEvent(ref, "resize", notify);
  },
  measureScroll: function measureScroll() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  },
  checkIsScrollRoot: function checkIsScrollRoot() {
    return true;
  }
});

var rootProjectionNode = {
  current: undefined
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function measureScroll(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function defaultParent() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function resetTransform(instance, value) {
    instance.style.transform = value !== undefined ? value : "none";
  },
  checkIsScrollRoot: function checkIsScrollRoot(instance) {
    return Boolean(window.getComputedStyle(instance).position === "fixed");
  }
});

var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout: MeasureLayout
  }
};

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = {
  current: null
};
var hasReducedMotionListener = {
  current: false
};

function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    var motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function setReducedMotionPreferences() {
      return prefersReducedMotion.current = motionMediaQuery.matches;
    };
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

function updateMotionValuesFromProps(element, next, prev) {
  var willChange = next.willChange;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      /**
       * If this is a motion value found in props or style, we want to add it
       * to our visual element's motion value map.
       */
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      /**
       * Check the version of the incoming motion value with this version
       * and warn against mismatches.
       */
      if (process.env.NODE_ENV === "development") {
        warnOnce(nextValue.version === "11.0.25", "Attempting to mix Framer Motion versions ".concat(nextValue.version, " with 11.0.25 may not work as expected."));
      }
    } else if (isMotionValue(prevValue)) {
      /**
       * If we're swapping from a motion value to a static value,
       * create a new motion value from that
       */
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      /**
       * If this is a flat value that has changed, update the motion value
       * or create one if it doesn't exist. We only want to do this if we're
       * not handling the value with our animation state.
       */
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        var latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  // Handle removed values
  for (var _key in prev) {
    if (next[_key] === undefined) element.removeValue(_key);
  }
  return next;
}

var visualElementStore = new WeakMap();

/**
 * A list of all ValueTypes
 */
var valueTypes = [].concat(_toConsumableArray(dimensionValueTypes), [color, complex]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function findValueType(v) {
  return valueTypes.find(testValueType(v));
};

var _excluded = ["willChange"],
  _excluded2 = ["children"];
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var numVariantProps = variantProps.length;
function getClosestProjectingNode(visualElement) {
  if (!visualElement) return undefined;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
var VisualElement = /*#__PURE__*/function () {
  function VisualElement(_ref) {
    var _this = this;
    var parent = _ref.parent,
      props = _ref.props,
      presenceContext = _ref.presenceContext,
      reducedMotionConfig = _ref.reducedMotionConfig,
      blockInitialAnimation = _ref.blockInitialAnimation,
      visualState = _ref.visualState;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, VisualElement);
    this.resolveKeyframes = function (keyframes,
    // We use an onComplete callback here rather than a Promise as a Promise
    // resolution is a microtask and we want to retain the ability to force
    // the resolution of keyframes synchronously.
    onComplete, name, value) {
      return new _this.KeyframeResolver(keyframes, onComplete, name, value, _this);
    };
    /**
     * A reference to the current underlying Instance, e.g. a HTMLElement
     * or Three.Mesh etc.
     */
    this.current = null;
    /**
     * A set containing references to this VisualElement's children.
     */
    this.children = new Set();
    /**
     * Determine what role this visual element should take in the variant tree.
     */
    this.isVariantNode = false;
    this.isControllingVariants = false;
    /**
     * Decides whether this VisualElement should animate in reduced motion
     * mode.
     *
     * TODO: This is currently set on every individual VisualElement but feels
     * like it could be set globally.
     */
    this.shouldReduceMotion = null;
    /**
     * A map of all motion values attached to this visual element. Motion
     * values are source of truth for any given animated value. A motion
     * value might be provided externally by the component via props.
     */
    this.values = new Map();
    this.KeyframeResolver = KeyframeResolver;
    /**
     * Cleanup functions for active features (hover/tap/exit etc)
     */
    this.features = {};
    /**
     * A map of every subscription that binds the provided or generated
     * motion values onChange listeners to this visual element.
     */
    this.valueSubscriptions = new Map();
    /**
     * A reference to the previously-provided motion values as returned
     * from scrapeMotionValuesFromProps. We use the keys in here to determine
     * if any motion values need to be removed after props are updated.
     */
    this.prevMotionValues = {};
    /**
     * An object containing a SubscriptionManager for each active event.
     */
    this.events = {};
    /**
     * An object containing an unsubscribe function for each prop event subscription.
     * For example, every "Update" event can have multiple subscribers via
     * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
     */
    this.propEventSubscriptions = {};
    this.notifyUpdate = function () {
      return _this.notify("Update", _this.latestValues);
    };
    this.render = function () {
      if (!_this.current) return;
      _this.triggerBuild();
      _this.renderInstance(_this.current, _this.renderState, _this.props.style, _this.projection);
    };
    this.scheduleRender = function () {
      return frame.render(_this.render, false, true);
    };
    var latestValues = visualState.latestValues,
      renderState = visualState.renderState;
    this.latestValues = latestValues;
    this.baseTarget = _objectSpread2({}, latestValues);
    this.initialValues = props.initial ? _objectSpread2({}, latestValues) : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    /**
     * Any motion values that are provided to the element when created
     * aren't yet bound to the element, as this would technically be impure.
     * However, we iterate through the motion values and set them to the
     * initial values for this component.
     *
     * TODO: This is impure and we should look at changing this to run on mount.
     * Doing so will break some tests but this isn't neccessarily a breaking change,
     * more a reflection of the test.
     */
    var _this$scrapeMotionVal = this.scrapeMotionValuesFromProps(props, {}, this),
      willChange = _this$scrapeMotionVal.willChange,
      initialMotionValues = _objectWithoutProperties(_this$scrapeMotionVal, _excluded);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== undefined && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  return _createClass(VisualElement, [{
    key: "scrapeMotionValuesFromProps",
    value: function scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
  }, {
    key: "mount",
    value: function mount(instance) {
      var _this2 = this;
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach(function (value, key) {
        return _this2.bindToMotionValue(key, value);
      });
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
      if (process.env.NODE_ENV !== "production") {
        warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
      }
      if (this.parent) this.parent.children.add(this);
      this.update(this.props, this.presenceContext);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      visualElementStore["delete"](this.current);
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach(function (remove) {
        return remove();
      });
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent && this.parent.children["delete"](this);
      for (var key in this.events) {
        this.events[key].clear();
      }
      for (var _key in this.features) {
        this.features[_key].unmount();
      }
      this.current = null;
    }
  }, {
    key: "bindToMotionValue",
    value: function bindToMotionValue(key, value) {
      var _this3 = this;
      var valueIsTransform = transformProps.has(key);
      var removeOnChange = value.on("change", function (latestValue) {
        _this3.latestValues[key] = latestValue;
        _this3.props.onUpdate && frame.preRender(_this3.notifyUpdate);
        if (valueIsTransform && _this3.projection) {
          _this3.projection.isTransformDirty = true;
        }
      });
      var removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(key, function () {
        removeOnChange();
        removeOnRenderRequest();
        if (value.owner) value.stop();
      });
    }
  }, {
    key: "sortNodePosition",
    value: function sortNodePosition(other) {
      /**
       * If these nodes aren't even of the same type we can't compare their depth.
       */
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
  }, {
    key: "loadFeatures",
    value: function loadFeatures(_ref2, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
      var _this4 = this;
      _ref2.children;
        var renderedProps = _objectWithoutProperties(_ref2, _excluded2);
      var ProjectionNodeConstructor;
      var MeasureLayout;
      /**
       * If we're in development mode, check to make sure we're not rendering a motion component
       * as a child of LazyMotion, as this will break the file-size benefits of using it.
       */
      if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
        var strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
        renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
      }
      for (var i = 0; i < numFeatures; i++) {
        var name = featureNames[i];
        var _featureDefinitions$n = featureDefinitions[name],
          isEnabled = _featureDefinitions$n.isEnabled,
          FeatureConstructor = _featureDefinitions$n.Feature,
          ProjectionNode = _featureDefinitions$n.ProjectionNode,
          MeasureLayoutComponent = _featureDefinitions$n.MeasureLayout;
        if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
        if (isEnabled(renderedProps)) {
          if (!this.features[name] && FeatureConstructor) {
            this.features[name] = new FeatureConstructor(this);
          }
          if (MeasureLayoutComponent) {
            MeasureLayout = MeasureLayoutComponent;
          }
        }
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
        this.projection = new ProjectionNodeConstructor(this.latestValues, getClosestProjectingNode(this.parent));
        var layoutId = renderedProps.layoutId,
          layout = renderedProps.layout,
          drag = renderedProps.drag,
          dragConstraints = renderedProps.dragConstraints,
          layoutScroll = renderedProps.layoutScroll,
          layoutRoot = renderedProps.layoutRoot;
        this.projection.setOptions({
          layoutId: layoutId,
          layout: layout,
          alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
          visualElement: this,
          scheduleRender: function scheduleRender() {
            return _this4.scheduleRender();
          },
          /**
           * TODO: Update options in an effect. This could be tricky as it'll be too late
           * to update by the time layout animations run.
           * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
           * ensuring it gets called if there's no potential layout animations.
           *
           */
          animationType: typeof layout === "string" ? layout : "both",
          initialPromotionConfig: initialLayoutGroupConfig,
          layoutScroll: layoutScroll,
          layoutRoot: layoutRoot
        });
      }
      return MeasureLayout;
    }
  }, {
    key: "updateFeatures",
    value: function updateFeatures() {
      for (var key in this.features) {
        var feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }, {
    key: "triggerBuild",
    value: function triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
  }, {
    key: "measureViewportBox",
    value: function measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
  }, {
    key: "getStaticValue",
    value: function getStaticValue(key) {
      return this.latestValues[key];
    }
  }, {
    key: "setStaticValue",
    value: function setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
  }, {
    key: "update",
    value: function update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      /**
       * Update prop event handlers ie onAnimationStart, onAnimationComplete
       */
      for (var i = 0; i < propEventHandlers.length; i++) {
        var key = propEventHandlers[i];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        var listener = props["on" + key];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
  }, {
    key: "getProps",
    value: function getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
  }, {
    key: "getVariant",
    value: function getVariant(name) {
      return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
  }, {
    key: "getDefaultTransition",
    value: function getDefaultTransition() {
      return this.props.transition;
    }
  }, {
    key: "getTransformPagePoint",
    value: function getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
  }, {
    key: "getClosestVariantNode",
    value: function getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
    }
  }, {
    key: "getVariantContext",
    value: function getVariantContext() {
      var startAtParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (startAtParent) {
        return this.parent ? this.parent.getVariantContext() : undefined;
      }
      if (!this.isControllingVariants) {
        var _context = this.parent ? this.parent.getVariantContext() || {} : {};
        if (this.props.initial !== undefined) {
          _context.initial = this.props.initial;
        }
        return _context;
      }
      var context = {};
      for (var i = 0; i < numVariantProps; i++) {
        var name = variantProps[i];
        var prop = this.props[name];
        if (isVariantLabel(prop) || prop === false) {
          context[name] = prop;
        }
      }
      return context;
    }
    /**
     * Add a child visual element to our set of children.
     */
  }, {
    key: "addVariantChild",
    value: function addVariantChild(child) {
      var closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return function () {
          return closestVariantNode.variantChildren["delete"](child);
        };
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
  }, {
    key: "addValue",
    value: function addValue(key, value) {
      // Remove existing value if it exists
      if (value !== this.values.get(key)) {
        this.removeValue(key);
        this.bindToMotionValue(key, value);
      }
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
  }, {
    key: "removeValue",
    value: function removeValue(key) {
      this.values["delete"](key);
      var unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions["delete"](key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
  }, {
    key: "hasValue",
    value: function hasValue(key) {
      return this.values.has(key);
    }
  }, {
    key: "getValue",
    value: function getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      var value = this.values.get(key);
      if (value === undefined && defaultValue !== undefined) {
        value = motionValue(defaultValue === null ? undefined : defaultValue, {
          owner: this
        });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
  }, {
    key: "readValue",
    value: function readValue(key, target) {
      var _a;
      var value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
      if (value !== undefined && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          // If this is a number read as a string, ie "0" or "200", convert it to a number
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
  }, {
    key: "setBaseTarget",
    value: function setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
  }, {
    key: "getBaseTarget",
    value: function getBaseTarget(key) {
      var _a, _b;
      var initial = this.props.initial;
      var valueFromInitial = typeof initial === "string" || _typeof(initial) === "object" ? (_b = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom)) === null || _b === void 0 ? void 0 : _b[key] : undefined;
      /**
       * If this value still exists in the current initial variant, read that.
       */
      if (initial && valueFromInitial !== undefined) {
        return valueFromInitial;
      }
      /**
       * Alternatively, if this VisualElement config has defined a getBaseTarget
       * so we can read the value from an alternative source, try that.
       */
      var target = this.getBaseTargetFromProps(this.props, key);
      if (target !== undefined && !isMotionValue(target)) return target;
      /**
       * If the value was initially defined on initial, but it doesn't any more,
       * return undefined. Otherwise return the value as initially read from the DOM.
       */
      return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
  }, {
    key: "notify",
    value: function notify(eventName) {
      if (this.events[eventName]) {
        var _this$events$eventNam;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_this$events$eventNam = this.events[eventName]).notify.apply(_this$events$eventNam, args);
      }
    }
  }]);
}();

var DOMVisualElement = /*#__PURE__*/function (_VisualElement) {
  function DOMVisualElement() {
    var _this;
    _classCallCheck(this, DOMVisualElement);
    _this = _callSuper(this, DOMVisualElement, arguments);
    _this.KeyframeResolver = DOMKeyframesResolver;
    return _this;
  }
  _inherits(DOMVisualElement, _VisualElement);
  return _createClass(DOMVisualElement, [{
    key: "sortInstanceNodePosition",
    value: function sortInstanceNodePosition(a, b) {
      /**
       * compareDocumentPosition returns a bitmask, by using the bitwise &
       * we're returning true if 2 in that bitmask is set to true. 2 is set
       * to true if b preceeds a.
       */
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
  }, {
    key: "getBaseTargetFromProps",
    value: function getBaseTargetFromProps(props, key) {
      return props.style ? props.style[key] : undefined;
    }
  }, {
    key: "removeValueFromRenderState",
    value: function removeValueFromRenderState(key, _ref) {
      var vars = _ref.vars,
        style = _ref.style;
      delete vars[key];
      delete style[key];
    }
  }]);
}(VisualElement);

function getComputedStyle(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = /*#__PURE__*/function (_DOMVisualElement) {
  function HTMLVisualElement() {
    var _this;
    _classCallCheck(this, HTMLVisualElement);
    _this = _callSuper(this, HTMLVisualElement, arguments);
    _this.type = "html";
    return _this;
  }
  _inherits(HTMLVisualElement, _DOMVisualElement);
  return _createClass(HTMLVisualElement, [{
    key: "readValueFromInstance",
    value: function readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        var defaultType = getDefaultValueType(key);
        return defaultType ? defaultType["default"] || 0 : 0;
      } else {
        var computedStyle = getComputedStyle(instance);
        var value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
  }, {
    key: "measureInstanceViewportBox",
    value: function measureInstanceViewportBox(instance, _ref) {
      var transformPagePoint = _ref.transformPagePoint;
      return measureViewportBox(instance, transformPagePoint);
    }
  }, {
    key: "build",
    value: function build(renderState, latestValues, options, props) {
      buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    }
  }, {
    key: "scrapeMotionValuesFromProps",
    value: function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
    }
  }, {
    key: "handleChildMotionValue",
    value: function handleChildMotionValue() {
      var _this2 = this;
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      var children = this.props.children;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", function (latest) {
          if (_this2.current) _this2.current.textContent = "".concat(latest);
        });
      }
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(instance, renderState, styleProp, projection) {
      renderHTML(instance, renderState, styleProp, projection);
    }
  }]);
}(DOMVisualElement);

var SVGVisualElement = /*#__PURE__*/function (_DOMVisualElement) {
  function SVGVisualElement() {
    var _this;
    _classCallCheck(this, SVGVisualElement);
    _this = _callSuper(this, SVGVisualElement, arguments);
    _this.type = "svg";
    _this.isSVGTag = false;
    return _this;
  }
  _inherits(SVGVisualElement, _DOMVisualElement);
  return _createClass(SVGVisualElement, [{
    key: "getBaseTargetFromProps",
    value: function getBaseTargetFromProps(props, key) {
      return props[key];
    }
  }, {
    key: "readValueFromInstance",
    value: function readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        var defaultType = getDefaultValueType(key);
        return defaultType ? defaultType["default"] || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
  }, {
    key: "measureInstanceViewportBox",
    value: function measureInstanceViewportBox() {
      return createBox();
    }
  }, {
    key: "scrapeMotionValuesFromProps",
    value: function scrapeMotionValuesFromProps$1(props, prevProps) {
      return scrapeMotionValuesFromProps(props, prevProps, this);
    }
  }, {
    key: "build",
    value: function build(renderState, latestValues, options, props) {
      buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
  }, {
    key: "mount",
    value: function mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      _get(_getPrototypeOf(SVGVisualElement.prototype), "mount", this).call(this, instance);
    }
  }]);
}(DOMVisualElement);

var createDomVisualElement = function createDomVisualElement(Component, options) {
  return isSVGComponent(Component) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    allowProjection: Component !== React.Fragment,
    enableHardwareAcceleration: true
  });
};

var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout: MeasureLayout
  }
};

var preloadedFeatures = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, animations), gestureAnimations), drag), layout);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/createMotionProxy(function (Component, config) {
  return createDomMotionConfig(Component, config, preloadedFeatures, createDomVisualElement);
});

function stopAnimation(visualElement) {
  visualElement.values.forEach(function (value) {
    return value.stop();
  });
}
function setVariants(visualElement, variantLabels) {
  var reversedLabels = _toConsumableArray(variantLabels).reverse();
  reversedLabels.forEach(function (key) {
    var variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach(function (child) {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
/**
 * @public
 */
function animationControls() {
  /**
   * Track whether the host component has mounted.
   */
  var hasMounted = false;
  /**
   * A collection of linked component animation controls.
   */
  var subscribers = new Set();
  var controls = {
    subscribe: function subscribe(visualElement) {
      subscribers.add(visualElement);
      return function () {
        return void subscribers["delete"](visualElement);
      };
    },
    start: function start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      var animations = [];
      subscribers.forEach(function (visualElement) {
        animations.push(animateVisualElement(visualElement, definition, {
          transitionOverride: transitionOverride
        }));
      });
      return Promise.all(animations);
    },
    set: function set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(function (visualElement) {
        setValues(visualElement, definition);
      });
    },
    stop: function stop() {
      subscribers.forEach(function (visualElement) {
        stopAnimation(visualElement);
      });
    },
    mount: function mount() {
      hasMounted = true;
      return function () {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimationControls() {
  var controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

React.createContext({
    onDragEnd: function () { },
    controls: undefined,
    setIsOpen: function () { },
    isOpen: true,
});

/**
 * 이전의 값을 보여주는 훅
 * @param {boolean} isOpen
 * @returns
 */
function usePreviousValue(isOpen) {
    if (isOpen === void 0) { isOpen = false; }
    var previousValueRef = React.useRef(isOpen);
    React.useEffect(function () {
        if (previousValueRef.current !== null) {
            previousValueRef.current = isOpen;
        }
        else {
            previousValueRef.current = isOpen;
        }
    }, [isOpen]);
    return previousValueRef.current;
}

/**
 * @description 바텀시트 관리 훅
 * @returns
 */
function useBottomSheet() {
    var controls = useAnimation();
    var _a = React.useState(true), isOpen = _a[0], setIsOpen = _a[1];
    var prevIsOpen = usePreviousValue(isOpen) || false;
    var onDragEnd = function (event, info) {
        var _a, _b;
        var shouldClose = ((_a = info.point) === null || _a === void 0 ? void 0 : _a.y) > 20 || (((_b = info.point) === null || _b === void 0 ? void 0 : _b.y) >= 0 && info.point.y > 45);
        if (shouldClose) {
            controls.start("hidden");
            setIsOpen(false);
        }
        else {
            controls.start("full");
            setIsOpen(true);
        }
    };
    React.useEffect(function () {
        if (prevIsOpen !== null && prevIsOpen !== isOpen) {
            if (isOpen) {
                controls.start("visible");
            }
            else {
                controls.start("hidden");
            }
        }
    }, [controls, isOpen, prevIsOpen]);
    return { onDragEnd: onDragEnd, controls: controls, setIsOpen: setIsOpen, isOpen: isOpen };
}

var BottomSheetContext = React.createContext({
    onDragEnd: function () { },
    controls: undefined,
    setIsOpen: function () { },
    isOpen: true,
});
/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
var BottomSheetProvider = function (_a) {
    var children = _a.children;
    var _b = useBottomSheet(), onDragEnd = _b.onDragEnd, controls = _b.controls, setIsOpen = _b.setIsOpen, isOpen = _b.isOpen;
    return jsxRuntime.jsx(BottomSheetContext.Provider, { value: { onDragEnd: onDragEnd, controls: controls, setIsOpen: setIsOpen, isOpen: isOpen }, children: children });
};

var BOTTOM_SHEET_HEIGHT = window.innerHeight;
var wrapper = {
    flexDirection: "column",
    position: "fixed",
    zIndex: 10,
    top: "20vh",
    left: 0,
    right: 0,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
    height: "".concat(BOTTOM_SHEET_HEIGHT, "px"),
    margin: "0 auto",
    overflow: "auto",
};
var header = {
    width: "32px",
    height: "4px",
    borderRadius: "8px",
    backgroundColor: "#d0d0d0",
    margin: "auto",
    marginTop: "20px",
};
var contents = {
    height: "80vh",
    padding: "2rem",
    zIndex: 99,
};

/**
 * 바텀시트 Headless 안에서 context를 사용하는 훅
 * @returns
 */
var useBottomSheetContext = function () { return React.useContext(BottomSheetContext); };
var BottomSheetWrapper = function (_a) {
    var _b = _a.dragDirection, dragDirection = _b === void 0 ? "y" : _b, _c = _a.initial, initial = _c === void 0 ? "visible" : _c, style = _a.style, children = _a.children, rest = __rest(_a, ["dragDirection", "initial", "style", "children"]);
    var _d = useBottomSheetContext(), onDragEnd = _d.onDragEnd, controls = _d.controls; _d.setIsOpen; _d.isOpen;
    return (jsxRuntime.jsx(motion.div, __assign({ initial: initial, drag: dragDirection, animate: controls, onDragEnd: onDragEnd, transition: {
            type: "spring",
            damping: 40,
            stiffness: 400,
        }, variants: {
            visible: { y: 300 },
            full: { y: -100 },
            hidden: { y: 100 }, // 화면 하단에 조금 남기고 싶은 위치로 조정
        }, dragConstraints: { top: 0 }, dragElastic: 0.2, style: __assign(__assign({}, wrapper), style) }, rest, { children: children })));
};
var BottomSheetHeader = function (_a) {
    var style = _a.style, children = _a.children, rest = __rest(_a, ["style", "children"]);
    var controls = useBottomSheetContext().controls;
    return (jsxRuntime.jsx(motion.div, __assign({ animate: controls, style: __assign(__assign({}, header), style) }, rest, { children: children })));
};
var BottomSheetContents = function (_a) {
    var style = _a.style, children = _a.children, rest = __rest(_a, ["style", "children"]);
    var controls = useBottomSheetContext().controls;
    return (jsxRuntime.jsx("div", __assign({ onClick: function () { return controls === null || controls === void 0 ? void 0 : controls.stop(); }, style: __assign(__assign({}, contents), style) }, rest, { children: children })));
};
var BottomSheet = Object.assign(BottomSheetProvider, {
    Wrapper: BottomSheetWrapper,
    Header: BottomSheetHeader,
    Contents: BottomSheetContents,
});

var HelloWrapper = function () {
    return jsxRuntime.jsx("div", { id: "component", children: "Hello World!" });
};
var HelloBody = function (_a) {
    var children = _a.children;
    var ref = React.useRef(null);
    console.log("Hello", ref);
    return jsxRuntime.jsx("div", { children: children });
};
var Hello = Object.assign(HelloWrapper, {
    Body: HelloBody,
});

var Button = function () {
    return jsxRuntime.jsx("div", { children: "Button" });
};

exports.BottomSheet = BottomSheet;
exports.Button = Button;
exports.Hello = Hello;
//# sourceMappingURL=index.cjs.js.map
