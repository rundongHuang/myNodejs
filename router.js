
function route(handle, pathname, response, postData)
{

    if (typeof handle[pathname]==="function")
    {
        handle[pathname](response, postData);
    }
    else
    {
        console.log("NO requesr handle found for " + pathname);
        response.writeHead(404,{"Contenr-Type" : "text/plain"});
        response.write("404 Not found!");
        response.end();
    }
}

exports.route = route;