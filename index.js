const Discord = require("discord.js")
const client = new Discord.Client()

const fs = require("fs")

const banned_words = [
    'chattan',
    'singh',
    'aadit',
    'bagga',
    'ch@tt@n',
    'ch@ttan',
    'chatt@n',
    'c|-|@tt@n',
    'c|-|@ttan',
    'c|-|att@n',
    '$ingh',
    '$ing|-|'
]

client.on('message', (message) => {
    if (
        message.content.trim().toLowerCase().includes('chattan') ||
        message.content.trim().toLowerCase().includes('singh') ||
        message.content.trim().toLowerCase().includes('aadit') ||
        message.content.trim().toLowerCase().includes('bagga') ||
        message.content.trim().toLowerCase().includes('a@dit') ||
        message.content.trim().toLowerCase().includes('@adit') ||
        message.content.trim().toLowerCase().includes('@@dit') ||
        message.content.trim().toLowerCase().includes('ch@tt@n') ||
        message.content.trim().toLowerCase().includes('ch@ttan') ||
        message.content.trim().toLowerCase().includes('chatt@n') ||
        message.content.trim().toLowerCase().includes('c|-|@tt@n') ||
        message.content.trim().toLowerCase().includes('c|-|att@n') ||
        message.content.trim().toLowerCase().includes('c|-|@ttan') ||
        message.content.trim().toLowerCase().includes('$ingh') ||
        message.content.trim().toLowerCase().includes('$ing|-|') ||
        message.content.trim().toLowerCase().includes('sing|-|') ||
        message.content.trim().toLowerCase().includes('paaji') ||
        message.content.trim().toLowerCase().includes('p@aji') ||
        message.content.trim().toLowerCase().includes('pa@ji') ||
        message.content.trim().toLowerCase().includes('p@@ji') ||
        message.content.trim().toLowerCase().includes('`chattan`') ||
        message.content.trim().toLowerCase().includes('`singh`') ||
        message.content.trim().toLowerCase().includes('`aadit`') ||
        message.content.trim().toLowerCase().includes('`bagga`') ||
        message.content.trim().toLowerCase().includes('`a@dit`') ||
        message.content.trim().toLowerCase().includes('`@adit`') ||
        message.content.trim().toLowerCase().includes('`@@dit`') ||
        message.content.trim().toLowerCase().includes('`ch@tt@n`') ||
        message.content.trim().toLowerCase().includes('`ch@ttan`') ||
        message.content.trim().toLowerCase().includes('`chatt@n`') ||
        message.content.trim().toLowerCase().includes('`c|-|@tt@n`') ||
        message.content.trim().toLowerCase().includes('`c|-|att@n`') ||
        message.content.trim().toLowerCase().includes('`c|-|@ttan`') ||
        message.content.trim().toLowerCase().includes('`$ingh`') ||
        message.content.trim().toLowerCase().includes('`$ing|-|`') ||
        message.content.trim().toLowerCase().includes('`sing|-|`') ||
        message.content.trim().toLowerCase().includes('`paaji`') ||
        message.content.trim().toLowerCase().includes('`p@aji`') ||
        message.content.trim().toLowerCase().includes('`pa@ji`') ||
        message.content.trim().toLowerCase().includes('`p@`@ji') ||
        message.content.trim().toLowerCase().includes('`chattan`') ||
        message.content.trim().toLowerCase().includes('```singh```') ||
        message.content.trim().toLowerCase().includes('```aadit```') ||
        message.content.trim().toLowerCase().includes('```bagga```') ||
        message.content.trim().toLowerCase().includes('```a@dit```') ||
        message.content.trim().toLowerCase().includes('```@adit```') ||
        message.content.trim().toLowerCase().includes('```@@dit```') ||
        message.content.trim().toLowerCase().includes('```ch@tt@n```') ||
        message.content.trim().toLowerCase().includes('```ch@ttan```') ||
        message.content.trim().toLowerCase().includes('```chatt@n```') ||
        message.content.trim().toLowerCase().includes('```c|-|@tt@n```') ||
        message.content.trim().toLowerCase().includes('```c|-|att@n```') ||
        message.content.trim().toLowerCase().includes('```c|-|@ttan```') ||
        message.content.trim().toLowerCase().includes('```$ingh```') ||
        message.content.trim().toLowerCase().includes('```$ing|-|```') ||
        message.content.trim().toLowerCase().includes('```sing|-|```') ||
        message.content.trim().toLowerCase().includes('```paaji```') ||
        message.content.trim().toLowerCase().includes('```p@aji```') ||
        message.content.trim().toLowerCase().includes('```pa@ji```') ||
        

        message.content.trim().toLowerCase().includes('c\nh\n a\n t\n t\n a\n n\n') ||
        message.content.trim().toLowerCase().includes('s\ni\nn\ng\nh') ||
        message.content.trim().toLowerCase().includes('a a d i t') ||
        message.content.trim().toLowerCase().includes('b a g g a') ||
        message.content.trim().toLowerCase().includes('a @ d i t') ||
        message.content.trim().toLowerCase().includes('@ a d i t') ||
        message.content.trim().toLowerCase().includes('@ @ d i t') ||
        message.content.trim().toLowerCase().includes('c h @ t t @ n') ||
        message.content.trim().toLowerCase().includes('c h @ t t a n') ||
        message.content.trim().toLowerCase().includes('c h a t t @ n') ||
        message.content.trim().toLowerCase().includes('c | - | @ t t @ n') ||
        message.content.trim().toLowerCase().includes('c | - | a t t @ n') ||
        message.content.trim().toLowerCase().includes('c | - | @ t t a n') ||
        message.content.trim().toLowerCase().includes('$ i n g h') ||
        message.content.trim().toLowerCase().includes('$i n g | - |') ||
        message.content.trim().toLowerCase().includes('s i n g | - |') ||
        message.content.trim().toLowerCase().includes('p a a j i') ||
        message.content.trim().toLowerCase().includes('p @ a j i') ||
        message.content.trim().toLowerCase().includes('p a @ j i') ||
        message.content.trim().toLowerCase().includes('p @ @ j i') ||
        message.content.trim().toLowerCase().includes('`c h a t t a n`') ||
        message.content.trim().toLowerCase().includes('`s i n g h`') ||
        message.content.trim().toLowerCase().includes('`a a d i t`') ||
        message.content.trim().toLowerCase().includes('`b a g g a`') ||
        message.content.trim().toLowerCase().includes('`a @ d i t`') ||
        message.content.trim().toLowerCase().includes('`@ a d i t`') ||
        message.content.trim().toLowerCase().includes('`@ @ d i t`') ||
        message.content.trim().toLowerCase().includes('`c h @ t t @ n`') ||
        message.content.trim().toLowerCase().includes('`c h @ t t a n`') ||
        message.content.trim().toLowerCase().includes('`ch a t t @ n`') ||
        message.content.trim().toLowerCase().includes('`c |-| @  tt @ n') ||
        message.content.trim().toLowerCase().includes('`c |-| a  tt @ n') ||
        message.content.trim().toLowerCase().includes('`c | - | @ t t a n') ||
        message.content.trim().toLowerCase().includes('`$ i n g h') ||
        message.content.trim().toLowerCase().includes('c |-| @  tt @ n') ||
        message.content.trim().toLowerCase().includes('c |-| a  tt @ n') ||
        message.content.trim().toLowerCase().includes('c | - | @ t t a n') ||
        message.content.trim().toLowerCase().includes('$ i n g h') ||
        message.content.trim().toLowerCase().includes("cchhaattaann") ||
        message.content.trim().toLowerCase().includes("cchhattann") ||
        message.content.trim().toLowerCase().includes("cchaattaan") ||
        message.content.trim().toLowerCase().includes("chhaattaan") ||
        message.content.trim().toLowerCase().includes("chatan") ||
        message.content.trim().toLowerCase().includes("chatann")
    ) {
        if (message.author == "862214788393861141" || message.author == "786495709880516638") {
            return
        }
        else {
            message.delete()
            message.reply("DON'T U DARE SEND THIS BANNED WORD!\n Word: " + message.content)
        }
    } else {
        console.log(message.content)
    }
})

client.on('ready', () => console.log("I am ready"))

client.login(fs.readFileSync('token.txt', 'utf-8'))