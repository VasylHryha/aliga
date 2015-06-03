define(['exports', 'react', 'Build/script/Components/header.js'], function (exports, _react, _BuildScriptComponentsHeaderJs) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.render = render;

    function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

    var _React = _interopRequire(_react);

    var Rx = require('rx');

    console.log(_BuildScriptComponentsHeaderJs.header);

    var headerData = {
        rent: '������',
        sale: '������',
        daily_rent: '�������� ������',
        forum: '�����',
        my_office: '̳� �������'
    };

    function render() {
        _React.render(_React.createElement(_BuildScriptComponentsHeaderJs.header, { data: headerData }), document.getElementById('content'));
    }
});