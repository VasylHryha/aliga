import React from 'react';
import Rx from 'rx';

import * as head from 'Build/script/Components/header.js';

console.log(head.header);

var headerData = {
    rent: '������',
    sale: '������',
    daily_rent: '�������� ������',
    forum: '�����',
    my_office: '̳� ������'
};
export function render() {
    React.render(<head.header data={headerData}/>, document.getElementById('content'));
}