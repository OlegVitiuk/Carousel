'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('../../../data.json');

var _data2 = _interopRequireDefault(_data);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _scrollTo = require('../scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.handleLeftNav = _this.handleLeftNav.bind(_this);
		_this.handleRightNav = _this.handleRightNav.bind(_this);
		return _this;
	}

	_createClass(Carousel, [{
		key: 'renderSlides',
		value: function renderSlides() {
			return _data2.default.map(function (obj) {
				return _react2.default.createElement(_Slide2.default, {
					image: obj.image,
					key: obj.index
				});
			});
		}
	}, {
		key: 'navHandler',
		value: function navHandler(flag) {
			var carouselViewPort = this.refs.carouselViewPort;

			if (window.innerWidth > 515) {
				var widthOfSlide = 404;
			} else {
				var widthOfSlide = 340;
			}
			if (flag) {
				var newPos = carouselViewPort.scrollLeft + widthOfSlide;
			} else {
				var newPos = carouselViewPort.scrollLeft - widthOfSlide;
			}
			var timeToMoveOneSlide = 200;
			(0, _scrollTo2.default)({
				element: carouselViewPort,
				to: newPos,
				duration: timeToMoveOneSlide,
				scrollDirection: 'scrollLeft'
			});
		}
	}, {
		key: 'handleLeftNav',
		value: function handleLeftNav() {
			this.navHandler(false);
		}
	}, {
		key: 'handleRightNav',
		value: function handleRightNav() {
			this.navHandler(true);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'wrapper' },
				_react2.default.createElement(
					'button',
					{
						className: 'nav left-nav',
						onClick: this.handleLeftNav

					},
					'<'
				),
				_react2.default.createElement(
					'div',
					{ className: 'viewPort', ref: 'carouselViewPort' },
					this.renderSlides()
				),
				_react2.default.createElement(
					'button',
					{
						className: 'nav right-nav',
						onClick: this.handleRightNav
					},
					'>'
				)
			);
		}
	}]);

	return Carousel;
}(_react.Component);

;

exports.default = Carousel;