# Monitoring-openSys-Calls-Using-Frida-on-macOS


In this repo , i will explore how we use Frida to intercept system calls related to file access and protected resource permissions on macOS/ios applications., we will focus on intercepting the open() system call, which handles file opening operations
Table of Contents

-Introduction to Frida
-Monitoring open() System Calls
-script injection into process 

----------------------------------


open() System Calls

The open() system call is responsible for opening files in macOS applications. Using Frida, we can intercept these calls to monitor which files an application is trying to access. This can be especially useful for identifying attempts to access sensitive files.

The following Frida script intercepts the open() system call, logs the file paths that the application is trying to open, and indicates when the open() operation is completed:


see the open_calls on >> open_calls.js in the Documents 

The Next Step we need a current process of our application

by command :
ps aux | grep IINA

this is example app thats we will target it to see the Open() syscall of it 


lets use Frida 

frida -p <PID> -l open_calls.js 

this command will inbject our JS script into the IINA process number 


now the is inside the process try to open any directory and our script will intercept it and you will see all the open() syscalls 


Observe the output in the Terminal. The script will display the file paths the application is trying to open.

you will see something like this 
open() system call intercepted!
File path: /System/Library/SystemProfiler/SPRawCameraReporter.spreporter/Contents/Resources/fi.lproj
open() completed
on the Terminal 



This shows that the application attempted to open a .lproj file in the system library. You can use this to monitor any files the application is trying to open, which might help detect unwanted file access.

Abdulrahman AL-Hakami



