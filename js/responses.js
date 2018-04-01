module.exports = {
    success : `
        <!doctype html>

        <html lang="en">
        <head>
        <meta charset="utf-8">

        <title>I wanna be the !HACKER!</title>
        <meta name="description" content="Challenge Succeeded">
        <meta name="author" content="A site">

        <link rel="stylesheet" href="css/styles.css">
        </head>

        <body>
        <p>You have successfully completed the challenge! 😁</p>
        <form action="index.html">
            <br>
            <input type="submit" value="Celebrate" />
        </form>
        </body>
        </html>
    `,
    failure_part1 : `
        <!doctype html>

        <html lang="en">
        <head>
        <meta charset="utf-8">
        
        <title>I wanna be the !HACKER!</title>
        <meta name="description" content="Challenge Failed">
        <meta name="author" content="A site">
        
        <link rel="stylesheet" href="css/styles.css">
        </head>
        
        <body>
        <p>You have failed the challenge. 😢</p>
        <p>
    `,
    failure_part2 : `
        </p>
        <form action="index.html">
            <br>
            <input type="submit" value="Cry again" />
        </form>
        </body>
        </html>
    `
};