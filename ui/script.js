function recommend(type) {

    let method = "";
    let code = "";
    let description = "";

    if (type === "filter") {
        method = "Where()";
        description = "Filters elements from a collection based on a condition.";
        code = "var adults = people.Where(p => p.Age > 18);";
    }

    if (type === "transform") {
        method = "Select()";
        description = "Projects each element into a new form (transforms data).";
        code = "var names = people.Select(p => p.Name);";
    }

    if (type === "group") {
        method = "GroupBy()";
        description = "Groups elements that share a common key.";
        code = "var grouped = people.GroupBy(p => p.City);";
    }

    if (type === "sort") {
        method = "OrderBy()";
        description = "Sorts elements in ascending order based on a key.";
        code = "var sorted = people.OrderBy(p => p.Name);";
    }

    if (type === "aggregate") {
        method = "Count()";
        description = "Returns the number of elements in a collection.";
        code = "var total = people.Count();";
    }

    if (type === "single") {
        method = "FirstOrDefault()";
        description = "Returns the first element or a default value if none exists.";
        code = "var first = people.FirstOrDefault();";
    }

    if (type === "exists") {
        method = "Any()";
        description = "Checks whether any element satisfies a condition.";
        code = "var hasAdults = people.Any(p => p.Age > 18);";
    }

    if (type === "join") {
        method = "Join()";
        description = "Combines two collections based on matching keys.";
        code = "var result = orders.Join(customers, o => o.CustomerId, c => c.Id, (o,c) => new {o,c});";
    }

    document.getElementById("methodName").innerText = method;
    document.getElementById("methodDescription").innerText = description;
    document.getElementById("exampleCode").innerText = code;

}
