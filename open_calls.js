Interceptor.attach(Module.findExportByName(null, "open"), {
    onEnter: function(args) {
        var filePath = Memory.readUtf8String(args[0]);
        console.log("open() system call intercepted!");
        console.log("File path: " + filePath);
    },
    onLeave: function(retval) {
        console.log("open() pass");
    }
});
