"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard3(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../index"));

var ImageWithIEPolyfill = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(ImageWithIEPolyfill, _Component);

  function ImageWithIEPolyfill() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "imageRef", _this.props.innerRef || (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "placeholderRef", (0, _react.createRef)());
    return _this;
  }

  var _proto = ImageWithIEPolyfill.prototype;

  // Load object-fit/position polyfill if required (e.g. in IE)
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var testImg = document.createElement("img");

    if (typeof testImg.style.objectFit === "undefined" || typeof testImg.style.objectPosition === "undefined") {
      Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require("object-fit-images"));
      }).then(function (_ref) {
        var ObjectFitImages = _ref.default;
        ObjectFitImages(_this2.imageRef.current.imageRef.current);
        ObjectFitImages(_this2.placeholderRef.current);
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        objectFit = _this$props.objectFit,
        objectPosition = _this$props.objectPosition,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["objectFit", "objectPosition"]);
    var polyfillStyle = {
      objectFit: objectFit,
      objectPosition: objectPosition,
      fontFamily: "\"object-fit: " + objectFit + "; object-position: " + objectPosition + "\""
    };
    return /*#__PURE__*/_react.default.createElement(_index.default, (0, _extends2.default)({
      ref: this.imageRef,
      placeholderRef: this.placeholderRef
    }, props, {
      imgStyle: (0, _extends2.default)((0, _extends2.default)({}, props.imgStyle), polyfillStyle),
      placeholderStyle: (0, _extends2.default)((0, _extends2.default)({}, props.placeholderStyle), polyfillStyle)
    }));
  };

  return ImageWithIEPolyfill;
}(_react.Component); // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/withIEPolyfill/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props


ImageWithIEPolyfill.propTypes = {
  objectFit: _propTypes.default.string,
  objectPosition: _propTypes.default.string
};
ImageWithIEPolyfill.defaultProps = {
  objectFit: "cover",
  objectPosition: "50% 50%"
};

var _default = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(ImageWithIEPolyfill, (0, _extends2.default)({}, props, {
    innerRef: ref
  }));
});

exports.default = _default;