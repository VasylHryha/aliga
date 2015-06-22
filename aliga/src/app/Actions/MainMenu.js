import Reflux from 'reflux'

export var actions = Reflux.createActions(
    [{"load": {children: ["completed", "failed"]}},
        "select",
        "update"
    ]);

