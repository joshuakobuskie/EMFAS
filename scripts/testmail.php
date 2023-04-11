<?php

// Recipient PHP script that will receive the email via stdin
$recipientScript = 'data.php';

// Recipient email address
$recipientEmail = 'recipient@example.com';

// Subject of the email
$subject = 'Test Email';

// Message body of the email
$message = 'This is a test email sent via stdin.';

// CSV attachment data
$attachmentData = 'First Name,Last Name,Email' . PHP_EOL .
                  'John,Doe,john.doe@example.com' . PHP_EOL .
                  'Jane,Doe,jane.doe@example.com' . PHP_EOL;

// Encode the attachment data in base64
// $attachmentDataEncoded = base64_encode($attachmentData);
$attachmentDataEncoded = "77u/RU1GQVMtV01FTVMgV2ViIERhdGEgUmVwb3J0IA0KDQoiQ2FsbCBEYXRlIiwiRW5yb3V0ZSIs
IkNIVVRFIFRJTUUiLCJBcnJpdmVkIExvY2F0aW9uIiwiUkVTUE9OU0UgVElNRSIsIkNhbGwgIyIs
IkRpc3Bvc2l0aW9uIiwiUUEgTGV2ZWwiLCJQYXRpZW50IE1pbGVhZ2UiLCJQUklEIiwiU2hpZnQi
LCJVbml0IiwiR2VuZGVyIiwiQWdlIiwiRGVzdGluYXRpb24iLCJDaGFydCBsb2NrZWQiDQoiMy8y
Ni8yMDIzIDU6MDkgQU0iLCIzLzI2LzIwMjMgNTowOSBBTSIsIjAuMDAiLCIzLzI2LzIwMjMgNTox
OSBBTSIsIjEwLjAwIiwiMjMxTU4wODY2IiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzIwIiwiNy43
MCIsIjgxODk5MjI2IiwiRGF5IENyZXciLCIyNjU3IiwiTSIsIjk5IiwiUmFyaXRhbiBCYXkgTWVk
aWNhbCBDZW50ZXIgLSBPbGQgQnJpZGdlIiwiMy8yNi8yMDIzIDQ6MzUgUE0iDQoiMy8yNi8yMDIz
IDk6NTAgQU0iLCIzLzI2LzIwMjMgOTo1MyBBTSIsIjMuMDAiLCIzLzI2LzIwMjMgMTA6MDMgQU0i
LCIxMC4wMCIsIjIzMU1OMDg2NyIsIlBhdGllbnQgUmVmdXNlZCBDYXJlIiwiUzIwIiwiNy4zMCIs
IjgxOTAxMTk0IiwiRGF5IENyZXciLCIyNjU3IiwiRiIsIjM1IiwiIiwiMy8yNi8yMDIzIDExOjQ4
IFBNIg0KIjMvMjYvMjAyMyAxMTo0MiBBTSIsIjMvMjYvMjAyMyAxMTo0MiBBTSIsIjAuMDAiLCIz
LzI2LzIwMjMgMTE6NDkgQU0iLCI3LjAwIiwiMjMxTU4wODY4IiwiVHJhbnNwb3J0ZWQgQnkgQkxT
LCBBTFMgQ2FuY2VsbGVkIFNOTiIsIlMyMCIsIjQuODAiLCI4MTkwMjQ2OSIsIkRheSBDcmV3Iiwi
MjY1OSIsIkYiLCI3MiIsIkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjYvMjAyMyA2
OjI1IFBNIg0KIjMvMjYvMjAyMyAxMjo1MCBQTSIsIjMvMjYvMjAyMyAxMjo1MSBQTSIsIjEuMDAi
LCIzLzI2LzIwMjMgMTI6NTMgUE0iLCIyLjAwIiwiMjMxTU4wODcwIiwiVHJhbnNwb3J0ZWQgQnkg
QkxTLCBBTFMgQ2FuY2VsbGVkIFNOTiIsIlMyMCIsIjQuODAiLCI4MTkwMzI3MiIsIkRheSBDcmV3
IiwiMjY1OSIsIk0iLCI2NSIsIkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjYvMjAy
MyA2OjI2IFBNIg0KIjMvMjYvMjAyMyAyOjMyIFBNIiwiMy8yNi8yMDIzIDI6MzIgUE0iLCIwLjAw
IiwiMy8yNi8yMDIzIDI6NDMgUE0iLCIxMS4wMCIsIjIzMU1OMDg3MSIsIlRyYW5zcG9ydGVkIEJ5
IEJMUyIsIlMyMCIsIjUuMjAiLCI4MTkwNTc0NCIsIkRheSBDcmV3IiwiMjY1NyIsIkYiLCI4NSIs
IkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjYvMjAyMyA0OjM0IFBNIg0KIjMvMjYv
MjAyMyAzOjM5IFBNIiwiMy8yNi8yMDIzIDM6NDAgUE0iLCIxLjAwIiwiMy8yNi8yMDIzIDM6NTMg
UE0iLCIxMy4wMCIsIjIzMU1OMDg3MiIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMyMCIsIjUuOTAi
LCI4MTkwNTc2NSIsIkRheSBDcmV3IiwiMjY1OSIsIkYiLCI5MyIsIkNlbnRyYSBTdGF0ZSBNZWRp
Y2FsIENlbnRlciIsIjMvMjYvMjAyMyA2OjM1IFBNIg0KIjMvMjYvMjAyMyA0OjU4IFBNIiwiMy8y
Ni8yMDIzIDQ6NTkgUE0iLCIxLjAwIiwiMy8yNi8yMDIzIDU6MDYgUE0iLCI3LjAwIiwiMjMxTU4w
ODczIiwiUGF0aWVudCBSZWZ1c2VkIENhcmUiLCJTMjAiLCI0LjEwIiwiODE5MDY3NjIiLCJEYXkg
Q3JldyIsIjI2NTkiLCJGIiwiNzEiLCIiLCIzLzI2LzIwMjMgNjoxMyBQTSINCiIzLzI2LzIwMjMg
ODo1NCBQTSIsIjMvMjYvMjAyMyA4OjU1IFBNIiwiMS4wMCIsIjMvMjYvMjAyMyA5OjAwIFBNIiwi
NS4wMCIsIjIzMU1OMDg3NCIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMyMCIsIjYuODAiLCI4MTkx
MDU2OCIsIk5pZ2h0IENyZXciLCIyNjU3IiwiTSIsIjcxIiwiQ2VudHJhIFN0YXRlIE1lZGljYWwg
Q2VudGVyIiwiMy8yNy8yMDIzIDEyOjA5IEFNIg0KIjMvMjcvMjAyMyAxOjAxIEFNIiwiMy8yNy8y
MDIzIDE6MDIgQU0iLCIxLjAwIiwiMy8yNy8yMDIzIDE6MDkgQU0iLCI3LjAwIiwiMjMxTU4wODc2
IiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzIwIiwiNS44MCIsIjgxOTEzMTE1IiwiTmlnaHQgQ3Jl
dyIsIjI2NTciLCJGIiwiNDIiLCJDZW50cmEgU3RhdGUgTWVkaWNhbCBDZW50ZXIiLCIzLzI3LzIw
MjMgMjo0MSBBTSINCiIzLzI3LzIwMjMgMzowNiBBTSIsIjMvMjcvMjAyMyAzOjA5IEFNIiwiMy4w
MCIsIjMvMjcvMjAyMyAzOjE4IEFNIiwiOS4wMCIsIjIzMU1OMDg3OCIsIlRyYW5zcG9ydGVkIEJ5
IEJMUyIsIlMyMCIsIjcuNzAiLCI4MTkxNDA3NiIsIk5pZ2h0IENyZXciLCIyNjU3IiwiRiIsIjYz
IiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVyIiwiMy8yNy8yMDIzIDQ6NDMgQU0iDQoiMy8y
Ny8yMDIzIDY6NTUgQU0iLCIzLzI3LzIwMjMgNjo1OCBBTSIsIjMuMDAiLCIzLzI3LzIwMjMgNzow
MyBBTSIsIjUuMDAiLCIyMzFNTjA4NzkiLCJUcmFuc3BvcnRlZCBCeSBCTFMsIEFMUyBUcmVhdCIs
IlMyMCIsIjYuNTAiLCI4MTkxNTk3NyIsIkRheSBDcmV3IiwiMjY1NyIsIkYiLCI1NyIsIkNlbnRy
YSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjcvMjAyMyAxMDozNSBBTSINCiIzLzI3LzIwMjMg
MTA6NDQgQU0iLCIzLzI3LzIwMjMgMTA6NDQgQU0iLCIwLjAwIiwiMy8yNy8yMDIzIDEwOjUzIEFN
IiwiOS4wMCIsIjIzMU1OMDg4MCIsIlBhdGllbnQgUmVmdXNlZCBDYXJlIiwiUzIwIiwiNC44MCIs
IjgxOTE4Nzg1IiwiRGF5IENyZXciLCIyNjU5IiwiTSIsIjM3IiwiIiwiMy8yNy8yMDIzIDExOjU0
IEFNIg0KIjMvMjcvMjAyMyAzOjA2IFBNIiwiMy8yNy8yMDIzIDM6MDkgUE0iLCIzLjAwIiwiMy8y
Ny8yMDIzIDM6MjkgUE0iLCIyMC4wMCIsIjIzMU1OMDg4MSIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIs
IlMyMCIsIjcuOTAiLCI4MTkyMzk2MyIsIkRheSBDcmV3IiwiMjY1OSIsIkYiLCIzOSIsIkNlbnRy
YSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjcvMjAyMyA1OjU4IFBNIg0KIjMvMjcvMjAyMyAz
OjMyIFBNIiwiMy8yNy8yMDIzIDM6MzQgUE0iLCIyLjAwIiwiMy8yNy8yMDIzIDM6NDQgUE0iLCIx
MC4wMCIsIjIzMU1OMDg4MiIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMyMCIsIjUuMzAiLCI4MTky
NDQ4MiIsIkRheSBDcmV3IiwiMjY1NyIsIk0iLCI3OSIsIkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENl
bnRlciIsIjMvMjcvMjAyMyA1OjE2IFBNIg0KIjMvMjcvMjAyMyA3OjQzIFBNIiwiMy8yNy8yMDIz
IDc6NDYgUE0iLCIzLjAwIiwiMy8yNy8yMDIzIDc6NTYgUE0iLCIxMC4wMCIsIjIzMU1OMDg4MyIs
IlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjUuMTAiLCI4MTkyOTg4MiIsIkRheSBDcmV3Iiwi
MjY1NyIsIkYiLCI5NyIsIkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMzAvMjAyMyA3
OjQxIFBNIg0KIjMvMjcvMjAyMyA5OjQ2IFBNIiwiMy8yNy8yMDIzIDk6NDggUE0iLCIyLjAwIiwi
My8yNy8yMDIzIDk6NTUgUE0iLCI3LjAwIiwiMjMxTU4wODg0IiwiUGF0aWVudCBSZWZ1c2VkIENh
cmUiLCJTMjAiLCIiLCI4MTkzMTQ3MSIsIkV2ZW5pbmcgQ3JldyIsIjI2NTciLCJNIiwiOTMiLCIi
LCIzLzI5LzIwMjMgOTowOCBQTSINCiIzLzI4LzIwMjMgNTo0MyBBTSIsIjMvMjgvMjAyMyA1OjQ2
IEFNIiwiMy4wMCIsIjMvMjgvMjAyMyA1OjU3IEFNIiwiMTEuMDAiLCIyMzFNTjA4ODUiLCJUcmFu
c3BvcnRlZCBCeSBCTFMsIEFMUyBDYW5jZWxsZWQgU05OIiwiUzIwIiwiNy43MCIsIjgxOTM1NDQ5
IiwiRGF5IENyZXciLCIyNjU3IiwiRiIsIjcxIiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVy
IiwiMy8yOC8yMDIzIDExOjExIEFNIg0KIjMvMjgvMjAyMyA3OjAxIEFNIiwiMy8yOC8yMDIzIDc6
MDEgQU0iLCIwLjAwIiwiMy8yOC8yMDIzIDc6MTMgQU0iLCIxMi4wMCIsIjIzMU1OMDg4NiIsIlRy
YW5zcG9ydGVkIEJ5IEJMUywgQUxTIFRyZWF0IiwiUzIwIiwiMTguNjAiLCI4MTkzNjE0MSIsIkRh
eSBDcmV3IiwiMjY1NyIsIk0iLCI4MSIsIkplcnNleSBTaG9yZSBVbml2ZXJzaXR5IE1lZGljYWwg
Q2VudGVyIiwiMy8yOC8yMDIzIDExOjM1IEFNIg0KIjMvMjgvMjAyMyA5OjQ2IEFNIiwiMy8yOC8y
MDIzIDk6NDggQU0iLCIyLjAwIiwiMy8yOC8yMDIzIDk6NTggQU0iLCIxMC4wMCIsIjIzMU1OMDg4
NyIsIlBhdGllbnQgUmVmdXNlZCBDYXJlIiwiUzIwIiwiNy4xMCIsIjgxOTM4MTA0IiwiRGF5IENy
ZXciLCIyNjU3IiwiTSIsIjY1IiwiIiwiMy8yOC8yMDIzIDExOjMzIEFNIg0KIjMvMjgvMjAyMyAx
MjoxNiBQTSIsIjMvMjgvMjAyMyAxMjoxNyBQTSIsIjEuMDAiLCIzLzI4LzIwMjMgMTI6MjUgUE0i
LCI4LjAwIiwiMjMxTU4wODg5IiwiVHJhbnNwb3J0ZWQgQnkgQkxTLCBBTFMgQ2FuY2VsbGVkIFNO
TiIsIlMyMCIsIjguMzAiLCI4MTk0MDg1MiIsIkRheSBDcmV3IiwiMjY1NyIsIkYiLCI0MiIsIlJh
cml0YW4gQmF5IE1lZGljYWwgQ2VudGVyIC0gT2xkIEJyaWRnZSIsIjMvMjgvMjAyMyAyOjA0IFBN
Ig0KIjMvMjgvMjAyMyA2OjA2IFBNIiwiMy8yOC8yMDIzIDY6MDcgUE0iLCIxLjAwIiwiMy8yOC8y
MDIzIDY6MTIgUE0iLCI1LjAwIiwiMjMxTU4wODkwIiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzIw
IiwiNy42MCIsIjgxOTQ3OTI1IiwiRGF5IENyZXciLCIyNjU5IiwiRiIsIjM3IiwiQ2VudHJhIFN0
YXRlIE1lZGljYWwgQ2VudGVyIiwiMy8yOC8yMDIzIDg6MzAgUE0iDQoiMy8yOC8yMDIzIDg6Mjcg
UE0iLCIzLzI4LzIwMjMgODozMyBQTSIsIjYuMDAiLCIzLzI4LzIwMjMgODo0NiBQTSIsIjEzLjAw
IiwiMjMxTU4wODkxIiwiVHJhbnNwb3J0ZWQgQnkgQkxTLCBBTFMgVHJlYXQiLCJTMjAiLCIyMS40
MCIsIjgxOTUwMzY2IiwiRXZlbmluZyBDcmV3IiwiMjY1OSIsIkYiLCI4OSIsIkplcnNleSBTaG9y
ZSBVbml2ZXJzaXR5IE1lZGljYWwgQ2VudGVyIiwiMy8zMC8yMDIzIDI6NDggUE0iDQoiMy8yOS8y
MDIzIDk6MDggQU0iLCIzLzI5LzIwMjMgOToxMCBBTSIsIjIuMDAiLCIzLzI5LzIwMjMgOToyNCBB
TSIsIjE0LjAwIiwiMjMxTU4wODk0IiwiUGF0aWVudCBSZWZ1c2VkIENhcmUiLCJTMTAiLCIiLCI4
MTk1NjY0NCIsIkRheSBDcmV3IiwiMjY1NyIsIkYiLCIzNCIsIiIsIjMvMjkvMjAyMyAxMTowNSBB
TSINCiIzLzI5LzIwMjMgMTE6MTAgQU0iLCIzLzI5LzIwMjMgMTE6MTIgQU0iLCIyLjAwIiwiMy8y
OS8yMDIzIDExOjIxIEFNIiwiOS4wMCIsIjIzMU1OMDg5NiIsIlBhdGllbnQgUmVmdXNlZCBDYXJl
IiwiUzIwIiwiIiwiODE5NTg4MjYiLCJEYXkgQ3JldyIsIjI2NTkiLCJNIiwiMzUiLCIiLCIzLzI5
LzIwMjMgMTE6NTYgQU0iDQoiMy8yOS8yMDIzIDEyOjEyIFBNIiwiMy8yOS8yMDIzIDEyOjE4IFBN
IiwiNi4wMCIsIjMvMjkvMjAyMyAxMjozMiBQTSIsIjE0LjAwIiwiMjMxTU4wODk3IiwiVHJhbnNw
b3J0ZWQgQnkgQkxTIiwiUzEwIiwiMi4yMCIsIjgxOTYwMjk1IiwiRGF5IENyZXciLCIyNjU3Iiwi
TSIsIjM2IiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVyIiwiMy8yOS8yMDIzIDM6MzIgUE0i
DQoiMy8yOS8yMDIzIDEyOjQ4IFBNIiwiMy8yOS8yMDIzIDEyOjQ4IFBNIiwiMC4wMCIsIjMvMjkv
MjAyMyAxMjo1NyBQTSIsIjkuMDAiLCIyMzFNTjA4OTgiLCJUcmFuc3BvcnRlZCBCeSBCTFMsIEFM
UyBUcmVhdCIsIlMyMCIsIjguMDAiLCI4MTk2MDc1MiIsIkRheSBDcmV3IiwiMjY1OSIsIkYiLCI4
NiIsIkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMjkvMjAyMyA3OjU1IFBNIg0KIjMv
MjkvMjAyMyA1OjEwIFBNIiwiMy8yOS8yMDIzIDU6MTIgUE0iLCIyLjAwIiwiMy8yOS8yMDIzIDU6
MjIgUE0iLCIxMC4wMCIsIjIzMU1OMDkwMCIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjUu
MjAiLCI4MTk2NjUwMyIsIkV2ZW5pbmcgQ3JldyIsIjI2NTciLCJNIiwiODIiLCJSYXJpdGFuIEJh
eSBNZWRpY2FsIENlbnRlciAtIE9sZCBCcmlkZ2UiLCIzLzMwLzIwMjMgNTo1NCBQTSINCiIzLzMw
LzIwMjMgMzoyMSBBTSIsIjMvMzAvMjAyMyAzOjI2IEFNIiwiNS4wMCIsIjMvMzAvMjAyMyAzOjM1
IEFNIiwiOS4wMCIsIjIzMU1OMDkwMSIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjQuMjAi
LCI4MTk3NTU1OCIsIk5pZ2h0IENyZXciLCIyNjU3IiwiTSIsIjc0IiwiQ2VudHJhIFN0YXRlIE1l
ZGljYWwgQ2VudGVyIiwiMy8zMC8yMDIzIDY6MzAgUE0iDQoiMy8zMC8yMDIzIDg6NDggQU0iLCIz
LzMwLzIwMjMgODo0OSBBTSIsIjEuMDAiLCIzLzMwLzIwMjMgODo1NCBBTSIsIjUuMDAiLCIyMzFN
TjA5MDMiLCJUcmFuc3BvcnRlZCBCeSBCTFMiLCJTMTAiLCI4LjQwIiwiODE5Nzg4MDUiLCJEYXkg
Q3JldyIsIjI2NTciLCJGIiwiMzkiLCJDZW50cmEgU3RhdGUgTWVkaWNhbCBDZW50ZXIiLCIzLzMw
LzIwMjMgOTo1OSBBTSINCiIzLzMwLzIwMjMgMTI6MTUgUE0iLCIzLzMwLzIwMjMgMTI6MTUgUE0i
LCIwLjAwIiwiMy8zMC8yMDIzIDEyOjI1IFBNIiwiMTAuMDAiLCIyMzFNTjA5MDQiLCJUcmFuc3Bv
cnRlZCBCeSBCTFMiLCJTMTAiLCI1LjUwIiwiODE5ODI2NTYiLCJEYXkgQ3JldyIsIjI2NTkiLCJG
IiwiNjkiLCJDZW50cmEgU3RhdGUgTWVkaWNhbCBDZW50ZXIiLCIzLzMwLzIwMjMgNDo1NSBQTSIN
CiIzLzMwLzIwMjMgMToxMSBQTSIsIjMvMzAvMjAyMyAxOjExIFBNIiwiMC4wMCIsIjMvMzAvMjAy
MyAxOjE4IFBNIiwiNy4wMCIsIjIzMU1OMDkwNSIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIs
IjYuMjAiLCI4MTk4MzczMiIsIkRheSBDcmV3IiwiMjY1NyIsIkYiLCI4NCIsIlJhcml0YW4gQmF5
IE1lZGljYWwgQ2VudGVyIC0gT2xkIEJyaWRnZSIsIjMvMzAvMjAyMyAyOjMyIFBNIg0KIjMvMzAv
MjAyMyAzOjEwIFBNIiwiMy8zMC8yMDIzIDM6MTIgUE0iLCIyLjAwIiwiMy8zMC8yMDIzIDM6MTkg
UE0iLCI3LjAwIiwiMjMxTU4wOTA2IiwiVHJhbnNwb3J0ZWQgQnkgQkxTLCBBTFMgQ2FuY2VsbGVk
IFNOTiIsIlMxMCIsIjUuMjAiLCI4MTk4NjQxMCIsIkRheSBDcmV3IiwiMjY1OSIsIkYiLCI2NiIs
IkNlbnRyYSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIjMvMzAvMjAyMyA0OjU1IFBNIg0KIjMvMzAv
MjAyMyA0OjA3IFBNIiwiMy8zMC8yMDIzIDQ6MDkgUE0iLCIyLjAwIiwiMy8zMC8yMDIzIDQ6MTIg
UE0iLCIzLjAwIiwiMjMxTU4wOTA3IiwiUGF0aWVudCBSZWZ1c2VkIENhcmUiLCJTMTAiLCIyLjkw
IiwiODE5ODc3MDYiLCJEYXkgQ3JldyIsIjI2NTkiLCJNIiwiNDMiLCIiLCIzLzMwLzIwMjMgNDo1
NiBQTSINCiIzLzMwLzIwMjMgNzo1MiBQTSIsIjMvMzAvMjAyMyA3OjUzIFBNIiwiMS4wMCIsIjMv
MzAvMjAyMyA4OjAyIFBNIiwiOS4wMCIsIjIzMU1OMDkwOTgiLCJUcmFuc3BvcnRlZCBCeSBCTFMi
LCJTMTAiLCI1LjAwIiwiODE5OTI1NjEiLCJFdmVuaW5nIENyZXciLCIyNjU3IiwiRiIsIjE0Iiwi
Q2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVyIiwiMy8zMC8yMDIzIDEwOjUyIFBNIg0KIjMvMzAv
MjAyMyAxMTozMSBQTSIsIjMvMzAvMjAyMyAxMTozMiBQTSIsIjEuMDAiLCIzLzMwLzIwMjMgMTE6
NDIgUE0iLCIxMC4wMCIsIjIzMU1OMDkxMCIsIlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjIu
MjAiLCI4MTk5NjA1OSIsIk5pZ2h0IENyZXciLCIyNjU3IiwiTSIsIjM2IiwiQ2VudHJhIFN0YXRl
IE1lZGljYWwgQ2VudGVyIiwiMy8zMS8yMDIzIDQ6MjEgUE0iDQoiMy8zMS8yMDIzIDI6MjkgQU0i
LCIzLzMxLzIwMjMgMjozMSBBTSIsIjIuMDAiLCIzLzMxLzIwMjMgMjo0MyBBTSIsIjEyLjAwIiwi
MjMxTU4wOTExIiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzEwIiwiOC4zMCIsIjgxOTk4MTM2Iiwi
TmlnaHQgQ3JldyIsIjI2NTciLCJGIiwiMjIiLCJDZW50cmEgU3RhdGUgTWVkaWNhbCBDZW50ZXIi
LCIzLzMxLzIwMjMgNDozOSBQTSINCiIzLzMxLzIwMjMgMjowNCBQTSIsIjMvMzEvMjAyMyAyOjA1
IFBNIiwiMS4wMCIsIjMvMzEvMjAyMyAyOjEwIFBNIiwiNS4wMCIsIjIzMU1OMDkxMyIsIlRyYW5z
cG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjIxLjYwIiwiODIwMDgxODIiLCJEYXkgQ3JldyIsIjI2NTki
LCJGIiwiODkiLCJKZXJzZXkgU2hvcmUgVW5pdmVyc2l0eSBNZWRpY2FsIENlbnRlciIsIjMvMzEv
MjAyMyA5OjE5IFBNIg0KIjMvMzEvMjAyMyA0OjM5IFBNIiwiMy8zMS8yMDIzIDQ6NDAgUE0iLCIx
LjAwIiwiMy8zMS8yMDIzIDQ6NDggUE0iLCI4LjAwIiwiMjMxTU4wOTE0IiwiVHJhbnNwb3J0ZWQg
QnkgQkxTIiwiUzEwIiwiNi4wMCIsIjgyMDExNjU4IiwiRGF5IENyZXciLCIyNjU5IiwiRiIsIjkw
IiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVyIiwiNC8xLzIwMjMgMTE6MDkgUE0iDQoiMy8z
MS8yMDIzIDY6NDUgUE0iLCIzLzMxLzIwMjMgNjo0NiBQTSIsIjEuMDAiLCIzLzMxLzIwMjMgNjo1
NiBQTSIsIjEwLjAwIiwiMjMxTU4wOTE1IiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzAiLCI1LjYw
IiwiODIwMTQ0NjciLCJEYXkgQ3JldyIsIjI2NTkiLCJNIiwiODUiLCJDZW50cmEgU3RhdGUgTWVk
aWNhbCBDZW50ZXIiLCIiDQoiMy8zMS8yMDIzIDc6MDEgUE0iLCIzLzMxLzIwMjMgNzoxMiBQTSIs
IjExLjAwIiwiMy8zMS8yMDIzIDc6MjAgUE0iLCI4LjAwIiwiMjMxTU4wOTE2IiwiUGF0aWVudCBS
ZWZ1c2VkIENhcmUiLCJTMTAiLCIiLCI4MjAxNDk3NCIsIkRheSBDcmV3IiwiMjY1NyIsIk0iLCIy
OSIsIiIsIjQvMS8yMDIzIDk6NDUgUE0iDQoiMy8zMS8yMDIzIDg6MDYgUE0iLCIzLzMxLzIwMjMg
ODowOSBQTSIsIjMuMDAiLCIzLzMxLzIwMjMgODoxOSBQTSIsIjEwLjAwIiwiMjMxTU4wOTE3Iiwi
VHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzEwIiwiOC4wMCIsIjgyMDE1OTIxIiwiRGF5IENyZXciLCIy
NjU3IiwiTSIsIjY0IiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVyIiwiNC8xLzIwMjMgOTo0
NiBQTSINCiIzLzMxLzIwMjMgMTE6MTcgUE0iLCIzLzMxLzIwMjMgMTE6MTggUE0iLCIxLjAwIiwi
My8zMS8yMDIzIDExOjI1IFBNIiwiNy4wMCIsIjIzMU1OMDkxOCIsIlRyYW5zcG9ydGVkIEJ5IEJM
UyIsIlMwIiwiNS4wMCIsIjgyMDE5MzIxIiwiTmlnaHQgQ3JldyIsIjI2NTciLCJNIiwiMzUiLCJS
YXJpdGFuIEJheSBNZWRpY2FsIENlbnRlciAtIE9sZCBCcmlkZ2UiLCIiDQoiNC8xLzIwMjMgMTI6
MDUgQU0iLCI0LzEvMjAyMyAxMjowNSBBTSIsIjAuMDAiLCI0LzEvMjAyMyAxMjowOSBBTSIsIjQu
MDAiLCIyMzFNTjA5MTkiLCJUcmFuc3BvcnRlZCBCeSBCTFMsIEFMUyBDYW5jZWxsZWQgU05OIiwi
UzAiLCI0LjYwIiwiODIwMjAxODkiLCJOaWdodCBDcmV3IiwiMjY1NyIsIkYiLCI1OSIsIkNlbnRy
YSBTdGF0ZSBNZWRpY2FsIENlbnRlciIsIiINCiI0LzEvMjAyMyAxMjowOCBBTSIsIjQvMS8yMDIz
IDEyOjE5IEFNIiwiMTEuMDAiLCI0LzEvMjAyMyAxMjozMSBBTSIsIjEyLjAwIiwiMjMxTU4wOTIw
IiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzEwIiwiNS41MCIsIjgyMDIwMjQxIiwiTmlnaHQgQ3Jl
dyIsIjI2NTkiLCJGIiwiNjIiLCJSYXJpdGFuIEJheSBNZWRpY2FsIENlbnRlciAtIE9sZCBCcmlk
Z2UiLCI0LzEvMjAyMyA1OjI4IFBNIg0KIjQvMS8yMDIzIDE6MTMgQU0iLCI0LzEvMjAyMyAxOjE2
IEFNIiwiMy4wMCIsIjQvMS8yMDIzIDE6MjggQU0iLCIxMi4wMCIsIjIzMU1OMDkyMSIsIlRyYW5z
cG9ydGVkIEJ5IEJMUywgQUxTIENhbmNlbGxlZCBTTk4iLCJTMCIsIjcuOTAiLCI4MjAyMTUzNCIs
Ik5pZ2h0IENyZXciLCIyNjU3IiwiRiIsIjYxIiwiQ2VudHJhIFN0YXRlIE1lZGljYWwgQ2VudGVy
IiwiIg0KIjQvMS8yMDIzIDk6NDkgQU0iLCI0LzEvMjAyMyA5OjUwIEFNIiwiMS4wMCIsIjQvMS8y
MDIzIDk6NTcgQU0iLCI3LjAwIiwiMjMxTU4wOTIyIiwiVHJhbnNwb3J0ZWQgQnkgQkxTIiwiUzEw
IiwiOC43MCIsIjgyMDI3Njg3IiwiRGF5IENyZXciLCIyNjU3IiwiRiIsIjgyIiwiQ2VudHJhIFN0
YXRlIE1lZGljYWwgQ2VudGVyIiwiNC8xLzIwMjMgMjoxMiBQTSINCiI0LzEvMjAyMyAxMDoxMCBB
TSIsIjQvMS8yMDIzIDEwOjEyIEFNIiwiMi4wMCIsIjQvMS8yMDIzIDEwOjE5IEFNIiwiNy4wMCIs
IjIzMU1OMDkyMyIsIlRyYW5zcG9ydGVkIEJ5IEJMUywgQUxTIFRyZWF0IiwiUzEwIiwiNy40MCIs
IjgyMDI3OTg0IiwiRGF5IENyZXciLCIyNjU5IiwiTSIsIjMyIiwiQ2VudHJhIFN0YXRlIE1lZGlj
YWwgQ2VudGVyIiwiNC8xLzIwMjMgMTo1MiBQTSINCiI0LzEvMjAyMyAyOjEzIFBNIiwiNC8xLzIw
MjMgMjoxNSBQTSIsIjIuMDAiLCI0LzEvMjAyMyAyOjIyIFBNIiwiNy4wMCIsIjIzMU1OMDkyNCIs
IlRyYW5zcG9ydGVkIEJ5IEJMUyIsIlMxMCIsIjEwLjMwIiwiODIwMzIzNjUiLCJEYXkgQ3JldyIs
IjI2NTciLCJNIiwiODciLCJCYXlzaG9yZSBDb21tdW5pdHkgSG9zcGl0YWwiLCI0LzEvMjAyMyA1
OjA5IFBNIg==";

// Create MIME boundary
$mimeBoundary = '--MIME_BOUNDARY--' . md5(time());

// Build MIME email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$mimeBoundary\"\r\n";
$headers .= "From: sender@example.com\r\n";
$headers .= "Reply-To: sender@example.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Build MIME email body
$body = "--$mimeBoundary\r\n";
$body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= "$message\r\n\r\n";
$body .= "--$mimeBoundary\r\n";
$body .= "Content-Type: text/csv; name=\"attachment.csv\"\r\n";
$body .= "Content-Disposition: attachment; filename=\"attachment.csv\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= "X-Attachment-Id: ASDFASDF\r\n\r\n";
$body .= "$attachmentDataEncoded\r\n";
$body .= "--$mimeBoundary--\r\n";

// Open a pipe to the recipient PHP script via stdin
$pipe = popen("php -q " . $recipientScript, "w");

if ($pipe) {
    // Write MIME email headers and body to the pipe
    fwrite($pipe, $headers . $body);
    fclose($pipe);
} else {
    echo "Failed to open pipe to recipient PHP script.";
}
?>
