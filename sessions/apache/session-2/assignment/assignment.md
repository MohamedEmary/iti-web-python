\begin{longtable}[]{@{}ll@{}}
\toprule\noalign{}
\multicolumn{2}{c}{Team Members} \\
\midrule\noalign{}
\endhead
\bottomrule\noalign{}
\endlastfoot
Mohamed Ahmed Emary & Fathy Elbadrawy \\
Andrew Essam & Mohamed Ali El-Ghannam \\
Amr Ahmed Khallaf & Abdullah Mahany \\
\end{longtable}

# Assignment Questions

## Question 1

> Change the default index page to `default.html` instead of `index.html` (use `DirectoryIndex`)

Steps:

1. In apache config file, change the line `DirectoryIndex index.html` to `DirectoryIndex default.html`

```{.apache .numberLines}
<IfModule dir_module>
    DirectoryIndex default.html
</IfModule>
```

2. Create a directory `/srv/http/session-2/q1/` and add a file `default.html` with the content below:

```{.html .numberLines}
<!DOCTYPE html>
<html>
<head>
    <title>Default Page</title>
</head>
<body>
    <h1>This is the default page.</h1>
</body>
</html>
```

2. Restart the apache server using `sudo systemctl restart apache2`
3. Open `localhost/session-2/q1/` in the browser and you should see the content of `default.html`

![Default Page](image.png){width=70%}

## Question 2

> Change the default port to be `8000` instead of `80`

1. Inside the apache config file, change the line `Listen 80` to `Listen 8000`
2. Restart the apache server using `sudo systemctl restart apache2`
3. Open `localhost:8000` in the browser and you should see the default apache page
4. Default page from [question 1](#question-1) should be accessible at `localhost:8000/session-2/q1/`

![Default Page on Port `8000`](image-1.png){width=70%}

## Question 3

> What is the importance of rewrite module?

Importance of the Rewrite Module:

1. **SEO-Friendly URLs**:

   - Converts complex, dynamic URLs (e.g., `example.com/index.php?id=123`) into clean, user-friendly URLs (e.g., `example.com/products/123`).
   - Improves website readability and enhances search engine optimization (SEO).

2. **Redirection Rules**:

   - Redirects outdated or moved pages to their new locations without breaking links (e.g., redirecting `old-page.html` to `new-page.html`).
   - Helps maintain traffic and rankings when migrating or restructuring a website.

3. **Custom Error Pages**:

   - Directs users to friendly error pages instead of default Apache error pages (e.g., `example.com/error404.html` for a 404 Not Found error).

4. **Access Control**:

   - Restricts or grants access to specific URLs based on conditions like IP addresses, user agents, or HTTP headers.

5. **Dynamic to Static URL Conversion**:

   - Rewrites dynamic URLs to appear static, which can improve speed and indexing in search engines.

6. **Proxying and Load Balancing**:

   - Used in combination with other modules to forward requests to other servers or backends, acting as a reverse proxy.

7. **Localization and Multilingual Sites**:
   - Routes requests to language-specific resources based on the user's preferences or location.

## Question 4

> Configure apache to use Worker MPM

1. Check if the `worker` MPM is already enabled using `apachectl -M | grep worker`

![Find `worker` MPM Module in Enabled Modules](image-2.png){width=60%}

2. If you get nothing like in the image above, uncomment the line `LoadModule mpm_worker_module modules/mod_mpm_worker.so` in the apache config file, then disable the current MPM module.

![`mpm_worker_module` in apache config](image-3.png){width=70%}

3. Restart the apache server using `sudo systemctl restart apache2`

## Question 5

> Check the status of `rewrite_mod` and enable it if it's enabled.

1. Using the command `apachectl -M | grep rewrite`, we found that the `rewrite` module is enabled.
   - If it wasn't enabled, we would have to enable it by uncommenting the line `LoadModule rewrite_module modules/mod_rewrite.so` in the apache config file.

![Find if `rewrite_module` is Enabled](image-4.png){width=60%}

## Bonus Question

Write `RewriteCond` and `RewiteRules` for the following:

Before the following rules, we need to enable the `rewrite` engine by adding the line below:

```{.apache .numberLines}
RewriteEngine On
```

> Deny access to `localhost/page?queryString` if queryString contains the string forbidden.

```{.apache .numberLines}
RewriteCond %{QUERY_STRING} forbidden [NC]
RewriteRule ^ - [F]
```

> Remove the Query String

```{.apache .numberLines}
RewriteCond "%{QUERY_STRING}" "var=(val)"
RewriteRule ^/page1 /page2? [R]
```

> Rewrite URLs like `localhost/page1?var=val` to `localhost/page2?var=val` but do not rewrite if val isn't present.

```{.apache .numberLines}
RewriteCond %{QUERY_STRING} var=.+
RewriteRule ^/page1$ /page2?%{QUERY_STRING} [R]
```

> Take a URL of the form `localhost/path?var=val` and transform it into `localhost/path/var/val`.

```{.apache .numberLines}
RewriteCond %{QUERY_STRING} (.+)=(.*)
RewriteRule ^(.+) $1/%1/%2? [R]
```

> Map `localhost/example/one/two` to `localhost/something.cgi?arg=one&other=two`

```{.apache .numberLines}
RewriteRule ^/example/(.+)/(.+)$ /something.cgi?arg=$1&other=$2 [R]
```
