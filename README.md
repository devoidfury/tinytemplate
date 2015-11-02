# tinytemplate
The tiniest dynamic template engine.

## Note:
This has no sandboxing, it is unsafe for production usage. This is just an example of what you can do with the 'bad' side of javascript.

## Usage:

    console.log("Hello, $$name$$. What do?".tmpl({ name: "devoid" }))
    >> Hello, devoid. What do?

    console.log("The time is $$ new Date() $$".tmpl())
    >> The time is Mon Nov 02 2015 16:55:48 GMT-0600 (Central Standard Time)

    console.log("7 + 6 * 2 is $$ 7 + 6 * 2 $$".tmpl())
    >> 7 + 6 * 2 is 19

