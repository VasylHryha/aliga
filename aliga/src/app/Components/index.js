import React from 'react';
import Rx from 'rx';

import * as head from 'Build/script/Components/header.js';

console.log(head.header);

var headerData = {
    rent: 'Оренда',
    sale: 'Продаж',
    daily_rent: 'Подобова орнеда',
    forum: 'Форум',
    my_office: 'Мій кабінет'
};
export function render() {
    React.render(<head.header data={headerData}/>, document.getElementById('content'));
}