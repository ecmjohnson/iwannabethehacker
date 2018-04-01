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

        <body class="successBody">
        <div class="video-background">
            <div class="video-foreground">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3GwjfUFyY6M?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <p>You have successfully completed the challenge! 😁</p>
        <form action="index.html">
            <br>
            <input class="button" type="submit" value="Celebrate" />
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
        
        <body class="failBody">
        <div class="video-background">
            <div class="video-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bvim4rsNHkQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <p>You have failed the challenge. 😢</p>
        <p>
    `,
    failure_part2 : `
        </p>
        <form action="index.html">
            <br>
            <input class="button" type="submit" value="Cry again" />
        </form>
        </body>
        </html>
    `
};