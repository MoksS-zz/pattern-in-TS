class Datastore {
    process() {
        this.connect();
        this.select();
        this.disconnect();
    }

    static hi() {
        console.log('hi');
    }
}

// log helper 
const log = {
    log: "",
    add: function (msg) { this.log += msg + "\n"; },
    show: function () { console.log(this.log); this.log = ""; }
};

class MySQL extends Datastore {
    connect() {
        log.add("MySQL: connect step");
    };

    select() {
        log.add("MySQL: select step");
    };

    disconnect() {
        log.add("MySQL: disconnect step");
    };
}

MySQL.hi();
const mysql = new MySQL;
mysql.process();

log.show();
