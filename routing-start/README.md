

...
this.router.navigate(["/absolute/path"]);
this.router.navigate(["../../parent"], {relativeTo: this.route});
this.router.navigate(["../sibling"],   {relativeTo: this.route});
this.router.navigate(["./child"],      {relativeTo: this.route}); // or
this.router.navigate(["child"],        {relativeTo: this.route});

// with route param     ../../parent;abc=xyz
this.router.navigate(["../../parent", {abc: 'xyz'}], {relativeTo: this.route});
// with query param and fragment   ../../parent?p1=value1&p2=v2#frag
this.router.navigate(["../../parent"], {relativeTo: this.route, 
    queryParams: {p1: 'value', p2: 'v2'}, fragment: 'frag'});

// navigate without updating the URL 
this.router.navigate(["../../parent"], {relativeTo: this.route, skipLocationChange: true});
