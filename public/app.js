"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AppHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(AppHeader, _React$Component);

  var _super = _createSuper(AppHeader);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _super.apply(this, arguments);
  }

  _createClass(AppHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("h3", {
        style: {
          color: "red"
        }
      }, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return AppHeader;
}(React.Component);

var ProductTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductTable, _React$Component2);

  var _super2 = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "2px solid silver",
        padding: 4,
        backgroundColor: " #d9d9d9"
      };
      var productRow = this.props.products.map(function (product) {
        return /*#__PURE__*/React.createElement(ProductRow, {
          key: product.id,
          rowStyle: rowStyle,
          productObj: product
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        style: {
          borderCollapse: "collapse"
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Product Name"), /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Price"), /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Category"), /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRow));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductRow, _React$Component3);

  var _super3 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super3.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "2px solid silver",
        padding: 4
      };
      var display$ = "$" + this.props.productObj.price;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        style: rowStyle
      }, this.props.productObj.name), /*#__PURE__*/React.createElement("td", {
        style: rowStyle
      }, display$), /*#__PURE__*/React.createElement("td", {
        style: rowStyle
      }, this.props.productObj.category), /*#__PURE__*/React.createElement("td", {
        style: rowStyle
      }, /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        href: this.props.productObj.image
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var AddProduct = /*#__PURE__*/function (_React$Component4) {
  _inherits(AddProduct, _React$Component4);

  var _super4 = _createSuper(AddProduct);

  function AddProduct() {
    var _this;

    _classCallCheck(this, AddProduct);

    console.log("Add prod constructor");
    _this = _super4.call(this);
    _this.state = {
      value: "$"
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddProduct, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        category: form.category.value,
        price: form.price.value,
        name: form.productName.value,
        image: form.imageURL.value
      };
      this.props.addProduct(product);
      form.price.value = "";
      form.productName.value = "";
      form.imageURL.value = "";
      form.category.value = "";
      this.state.value = "$";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "formStyle"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "category"
      }, "Category"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
        name: "category"
      }, /*#__PURE__*/React.createElement("option", null, "Shirts"), /*#__PURE__*/React.createElement("option", null, "Jeans"), /*#__PURE__*/React.createElement("option", null, "Jackets"), /*#__PURE__*/React.createElement("option", null, "Sweaters"), /*#__PURE__*/React.createElement("option", null, "Acessories"))), /*#__PURE__*/React.createElement("div", {
        className: "formStyle"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "price"
      }, "Price Per Unit"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        value: this.state.value,
        onChange: this.handleChange
      })), /*#__PURE__*/React.createElement("div", {
        className: "formStyle"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "productname"
      }, "ProductName"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "productName",
        id: "product"
      })), /*#__PURE__*/React.createElement("div", {
        className: "formStyle"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "image"
      }, "Image Url"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "imageURL",
        id: "imageURL"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        htmlFor: "addProduct"
      }, /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Add Product"
      })))));
    }
  }]);

  return AddProduct;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component5) {
  _inherits(ProductList, _React$Component5);

  var _super5 = _createSuper(ProductList);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    console.log("Prod list constructor executed");
    _this2 = _super5.call(this);
    _this2.state = {
      products: []
    };
    _this2.addProduct = _this2.addProduct.bind(_assertThisInitialized(_this2)); //   this.addProduct(products);

    return _this2;
  }

  _createClass(ProductList, [{
    key: "addProduct",
    value: function addProduct(product) {
      product.price = product.price.replace(/[$]/g, "");
      product.id = this.state.products.length + 1;
      var newProductList = this.state.products.slice();
      newProductList.push(product);
      console.log("Producted Added ", newProductList);
      console.log("Product Array length ", newProductList.length);
      this.setState({
        products: newProductList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, null), /*#__PURE__*/React.createElement(ProductTable, {
        products: this.state.products
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", {
        style: {
          color: "red"
        }
      }, "Add a new product to inventory"), /*#__PURE__*/React.createElement(AddProduct, {
        addProduct: this.addProduct.bind(this)
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById("root"));