var c = {
    name: 'the c object',
    log: function() {
        var self = this;
        self.name = 'new name for c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('another new name23421');
        console.log(self);
    }
}

c.log();








