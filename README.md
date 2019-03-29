# INGENIC-master
README for INGENIC's website

The website for INGENIC uses Express and EJS templating to run and is built using Bootstrap.
Express handles the routing of all pages for INGENIC's website; serves all static files (CSS, images) and the EJS templates (all pages + the header and footer, which are EJS partials).

EJS templating allows for the use of snippets of JavaScript within HTML files. For INGENIC's website, this feature is used on the News page and the news items. Instructions on how to add/remove news and content for news items is included in the files (.js, .ejs) that make up the website. The instructions are located near the relevant parts of the code and are given in the form of comments.

INGENIC's header and footer are rendered from EJS partials. Any changes made to either file will thus be reflected in all of the website's pages, removing the need to copy and paste the changed header and/or footer into all of the pages separately.

With a few exceptions (i.e. some colours), the look of the website is all built with Bootstrap. Any changes to the structure, layout, sizing etc of the website must be made using Bootstrap classes, which use an external Bootstrap CSS.

The current version of the website uses Bootstrap 4.3.1
